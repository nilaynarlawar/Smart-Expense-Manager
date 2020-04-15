package com.usfca.expenses.service;

import com.usfca.expenses.DAO.ExpenseDAO;
import com.usfca.expenses.domain.model.Expense;
import com.usfca.expenses.domain.model.GraphData;
import com.usfca.expenses.domain.model.ExpenseList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

/**
 * This class implements all the method provided in Expense service Interface
 */
@Service("ExpenseService")
public class ExpenseServiceImpl implements ExpenseService {

    @Autowired
    ExpenseDAO expenseDAO;

    /**
     * It call the DAO layer to create the expense for provided details.
     * @param expense expense details
     */
    @Override
    public void createExpense(Expense expense) {
        expenseDAO.createExpense(expense);
    }

    /**
     * It calls the DAO layer to get the Graph data.
     * @param userId user Id
     * @return List of graph data.
     */
    @Override
    public List<GraphData> getGraphData(int userId){
        return expenseDAO.getGraphData(userId);
    }

    /**
     * It calls the DAO layer edit expense method.
     * @param expense expense deatils
     */
    @Override
    public void editExpense(Expense expense){ expenseDAO.editExpense(expense);}

    /**
     * It calls the DAO layer get expense.
     * @param userId user id
     * @return expense details for provided user Id.
     */
    @Override
    public Expense getExpense(int userId) {
        return expenseDAO.getExpense(userId);
    }

    /**
     * It call the DAO layer get expense by id method to get the expense details.
     * @param expenseId expense id
     * @return expense details.
     */
    @Override
    public Expense getExpenseByExpenseId(int expenseId) {
        return expenseDAO.getExpenseByExpenseId(expenseId);
    }

    /**
     * It calls the DAO layer to delete the expense for provided expense id.
     * @param expenseId expense id.
     * @return true if deleted successfully else false.
     */
    @Override
    public boolean deleteExpense(int expenseId) {
        return expenseDAO.deleteExpense(expenseId);
    }

    /**
     * It call the DAO layer get expense list method.
     * @param userId user id
     * @return List of expense for provided user id.
     */
    @Override
    public ExpenseList getExpenseList(int userId, String filter) {
      return expenseDAO.getExpenseList(userId, filter);
    }
}
