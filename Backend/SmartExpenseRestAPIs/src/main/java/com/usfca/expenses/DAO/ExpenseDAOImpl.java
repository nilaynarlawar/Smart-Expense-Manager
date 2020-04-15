package com.usfca.expenses.DAO;

import com.usfca.expenses.domain.model.Expense;
import com.usfca.expenses.domain.model.GraphData;
import com.usfca.expenses.domain.model.ExpenseList;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import java.sql.*;
import java.util.*;
import com.usfca.expenses.domain.Category;

/**
 * It is Data access object layer class to access data base records which implements interface ExpenseDAO.
 */
@Repository
public class ExpenseDAOImpl implements ExpenseDAO {

    public static final Logger logger = Logger.getLogger(ExpenseDAOImpl.class);


    @Autowired
    private JdbcTemplate jdbcTemplate;

    /**
     * It override the deleteExpense method from ExpenseDAO and
     * delete the expense record for the provided expense id.
     * @param expenseId expense id for which record is need to delete.
     * @return True if record deleted successfully else false.
     */
    @Override
    public boolean deleteExpense(int expenseId){
        jdbcTemplate.update(EXP_DELETE_SQL, new Object[]{expenseId});
        return true;
    }

    /**
     * It override the createExpense method from ExpenseDAO and
     * create the expense record for the provided details.
     * @param expense expense record.
     */
    @Override
    public void createExpense(Expense expense){
        KeyHolder keyH = new GeneratedKeyHolder();
        jdbcTemplate.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection con) {
                PreparedStatement ps = null;
                try {
                    ps = con.prepareStatement(EXP_CREATE_SQL, Statement.RETURN_GENERATED_KEYS);
                    ps.setString(1, expense.getItemName());
                    ps.setString(2, expense.getItemDescription());
                    ps.setDouble(3,  Double.valueOf(expense.getAmount()));
                    ps.setString(4, expense.getLocation());
                    ps.setString(5, expense.getTransactionDate());
                    ps.setInt(6, expense.getExpenseId());
                    ps.setInt(7, expense.getUserId());
                    ps.setString(8, expense.getExpenseCategory());
                } catch (SQLException e) {
                    logger.error(e.getMessage());
                }
                return ps;
            }
        });
    }

    /**
     * It override the editExpense method from ExpenseDAO and
     * edit the expense record for the provided details.
     * @param expense expense record.
     */
    @Override
    public void editExpense(Expense expense){
        KeyHolder keyH = new GeneratedKeyHolder();// to know what was the primary key auto incremented value
        jdbcTemplate.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection con) {
                PreparedStatement ps = null;
                try {
                    ps = con.prepareStatement(EXP_UPDATE_SQL, Statement.RETURN_GENERATED_KEYS);
                    ps.setString(1, expense.getItemName());
                    ps.setString(2, expense.getItemDescription());
                    ps.setDouble(3, Double.valueOf(expense.getAmount()));
                    ps.setString(4, expense.getLocation());
                    ps.setString(5, expense.getTransactionDate());
                    ps.setInt(6, expense.getUserId());
                    ps.setString(7,expense.getExpenseCategory());
                    ps.setInt(8,expense.getExpenseId());
                } catch (SQLException e) {
                    logger.error(e.getMessage());
                }
                return ps;
            }
        });
    }

    /**
     * It override the getExpense method from ExpenseDAO and
     * return the expense record for the provided user id.
     * @param userId user id.
     * @return expense record.
     */
    @Override
    public Expense getExpense(int userId) {
            Expense expense = jdbcTemplate.queryForObject(EXP_GET_SQL,
                    new RowMapper<Expense>() {
                        @Override
                        public Expense mapRow(ResultSet rs, int rowNum) {
                            Expense expenseObj = new Expense();
                            try {
                                expenseObj.setItemName(rs.getString("itemName"));
                                expenseObj.setItemDescription(rs.getString("ItemDescription"));
                                expenseObj.setAmount(rs.getString("amount"));
                                expenseObj.setLocation(rs.getString("location"));
                                expenseObj.setTransactionDate(rs.getString("transactionDate"));
                                expenseObj.setExpenseId(rs.getInt("expenseId"));
                                expenseObj.setExpenseCategory(rs.getString("expenseCategory"));
                            } catch (SQLException e) {
                                logger.error(e.getMessage());
                            }
                            return expenseObj;
                        }
                    },
                    new Object[]{
                            userId
                    });
            return expense;
        }

    /**
     * It override the graphData method from ExpenseDAO and
     * get the list of expense total amount as per the category.
     * @param userId user id.
     * @return sum of amount of expense group by category.
     */
    @Override
    public List<GraphData> getGraphData(int userId){
        Set<String> categories = new HashSet<>();
        List<GraphData> graphData = jdbcTemplate.query(EXP_GRAPH_DATA_SQL,
                new RowMapper<GraphData>() {
                    @Override
                    public GraphData mapRow(ResultSet rs, int rowNum) {
                        GraphData graphDataObj = new GraphData();
                        try {
                            graphDataObj.setCategory(rs.getString("expenseCategory"));
                            graphDataObj.setSum(rs.getDouble("amt"));
                            categories.add(graphDataObj.getCategory());
                        } catch (SQLException e) {
                            logger.error(e.getMessage());
                        }
                        return graphDataObj;
                    }
                },
                new Object[]{
                        userId
                });

        GraphData obj;
        if(!categories.contains(Category.vegetable.toString())){
            obj =  new GraphData();
            obj.setCategory(Category.vegetable.toString());
            obj.setSum(0);
            graphData.add(obj);
        }
        if(!categories.contains(Category.grocery.toString())){
            obj =  new GraphData();
            obj.setCategory(Category.grocery.toString());
            obj.setSum(0);
            graphData.add(obj);
        }
        if(!categories.contains(Category.automobile.toString())){
            obj =  new GraphData();
            obj.setCategory(Category.automobile.toString());
            obj.setSum(0);
            graphData.add(obj);
        }
        if(!categories.contains(Category.housing.toString())){
            obj =  new GraphData();
            obj.setCategory(Category.housing.toString());
            obj.setSum(0);
            graphData.add(obj);
        }

        return graphData;
    }

    /**
     * It override the getExpenseByExpenseId method from ExpenseDAO and
     * returns the expense record for the provided details.
     * @param expenseId expesne id
     * @return expense record.
     */
    @Override
    public Expense getExpenseByExpenseId(int expenseId) {
        Expense expense = jdbcTemplate.queryForObject(EXP_BY_EXP_ID_GET_SQL,
                new RowMapper<Expense>() {
                    @Override
                    public Expense mapRow(ResultSet rs, int rowNum) {
                        Expense expenseObj = new Expense();
                        try {
                            expenseObj.setItemName(rs.getString("itemName"));
                            expenseObj.setItemDescription(rs.getString("ItemDescription"));
                            expenseObj.setAmount(rs.getString("amount"));
                            expenseObj.setLocation(rs.getString("location"));
                            expenseObj.setTransactionDate(rs.getString("transactionDate"));
                            expenseObj.setExpenseId(rs.getInt("expenseId"));
                            expenseObj.setExpenseCategory(rs.getString("expenseCategory"));

                        } catch (SQLException e) {
                            logger.error(e.getMessage());
                        }
                        return expenseObj;
                    }
                },
                new Object[]{
                        expenseId
                });
        return expense;
    }

    /**
     * It override the getExpenseList method from ExpenseDAO and
     * create the list of expense record for the provided details.
     * @param userId user id
     * @param filter category filter
     * @return List of expense.
     */
    @Override
    public ExpenseList getExpenseList(int userId, String filter) {
      List<Expense> expenses  =  jdbcTemplate.query(new PreparedStatementCreator() {
          @Override
          public PreparedStatement createPreparedStatement(Connection con) {
              PreparedStatement ps = null;
              try {
                  ps = con.prepareStatement(GET_EXPENSES_SQL);
                  ps.setInt(1, userId);
                  ps.setString(2, filter);
              } catch (SQLException e) {
                  logger.error(e.getMessage());
              }
              return ps;
          }
      }, new RowMapper<Expense>(){
          @Override
          public Expense mapRow(ResultSet rs, int rowNum) {
             Expense expense =  new Expense();
              try {
                  expense.setUserId(rs.getInt("userId"));
                  expense.setItemName(rs.getString("itemName"));
                  expense.setExpenseId(rs.getInt("expenseId"));
                  expense.setTransactionDate(rs.getString("transactionDate"));
                  expense.setLocation(rs.getString("location"));
                  expense.setAmount(rs.getString("amount"));
                  expense.setItemDescription(rs.getString("itemDescription"));
                  expense.setExpenseCategory(rs.getString("expenseCategory"));
              } catch (SQLException e) {
                  logger.error(e.getMessage());
              }
             return expense;
          }

      });
      ExpenseList expenseList = new ExpenseList();
      expenseList.setExpenses(expenses);
      expenseList.setTotal(expenses.size());
      return expenseList;
    }

    private static final String GET_EXPENSES_SQL = "" +
            "SELECT expense.* FROM smartexpense.EXPENSE expense" +
            " WHERE userId = ? and expenseCategory = ?";

    private static final String EXP_GRAPH_DATA_SQL =
            "SELECT expenseCategory, SUM(amount) amt FROM " +
                    "smartexpense.expense WHERE userId = ? GROUP BY expenseCategory";

    private static final String EXP_BY_EXP_ID_GET_SQL = "SELECT * FROM smartexpense.EXPENSE WHERE expenseId = ?";

    private static final String EXP_GET_SQL = "SELECT * FROM smartexpense.EXPENSE WHERE userId = ?";

    private static final String EXP_UPDATE_SQL = "UPDATE smartexpense.EXPENSE SET " +
            "itemName=?," +
            "ItemDescription=?," +
            "amount=?," +
            "location=?," +
            "transactionDate=?," +
            "userId=?," +
            "expenseCategory=?" +
            " WHERE expenseId=?";

    private static final String EXP_CREATE_SQL = "INSERT INTO smartexpense.EXPENSE(" +
            "itemName," +
            "ItemDescription," +
            "amount," +
            "location," +
            "transactionDate," +
            "expenseId," +
            "userId," +
            "expenseCategory)" +
            "VALUES(?,?,?,?,?,?,?,?)";

    private static final String EXP_DELETE_SQL = "DELETE FROM smartexpense.EXPENSE WHERE expenseId = ?";



}
