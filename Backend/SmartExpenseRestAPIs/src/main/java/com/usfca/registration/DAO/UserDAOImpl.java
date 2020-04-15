package com.usfca.registration.DAO;

import com.usfca.registration.domain.model.User;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.*;

/**
 * This class implements UserDAO interface methods
 */
@Repository
public class UserDAOImpl implements UserDAO {

    public static final Logger logger = Logger.getLogger(UserDAOImpl.class);

    @Autowired
    private JdbcTemplate jdbcTemplate;

    /**
     * This method use the DB connection and create the user
     * @param user user details
     */
    @Override
    public void createUser(User user) {
        KeyHolder keyH = new GeneratedKeyHolder();
        jdbcTemplate.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection con) {
                PreparedStatement ps = null;
                try {
                    ps = con.prepareStatement(USR_CREATE_SQL, Statement.RETURN_GENERATED_KEYS);
                    ps.setInt(1, user.getUserId());
                    ps.setString(2, user.getUserName());
                    ps.setString(3, user.getFirstName());
                    ps.setString(4, user.getLastName());
                    ps.setString(5, user.getPassword());
                } catch (SQLException e) {
                    logger.error(e.getMessage());
                }
                return ps;
            }
        });
    }

    /**
     * This method use the DB connection and get the user details
     * @param userId user id
     * @return user details.
     */
    @Override
    public User getUser(String userId) {
        User user = jdbcTemplate.queryForObject(USR_GET_SQL,
                new RowMapper<User>() {
                    @Override
                    public User mapRow(ResultSet rs, int rowNum) {
                        User userObj = new User();
                        try {
                            userObj.setUserName(rs.getString("username"));
                            userObj.setUserId(rs.getInt("userId"));
                            userObj.setFirstName(rs.getString("firstname"));
                            userObj.setLastName(rs.getString("lastname"));
                            userObj.setPassword(rs.getString("password"));
                            userObj.setExpenselimit(rs.getDouble("expenselimit"));
                        } catch (SQLException e) {
                            logger.error(e.getMessage());
                        }
                        return userObj;
                    }
                },
                new Object[]{
                        Integer.parseInt(userId)
                });
        return user;
    }

    /**
     * This method use the DB connection and validate the user details
     * @param username user name
     * @param password password
     * @return user id if validates else return 0
     */
    @Override
    public int isValidUser(String username, String password){
        try {
            User user = jdbcTemplate.queryForObject(USR_VALIDATE_SQL,
                    new RowMapper<User>() {
                        @Override
                        public User mapRow(ResultSet rs, int rowNum) {
                            User userObj = new User();
                            try {
                                userObj.setUserName(rs.getString("username"));
                                userObj.setUserId(rs.getInt("userId"));
                                userObj.setFirstName(rs.getString("firstname"));
                                userObj.setLastName(rs.getString("lastname"));
                                userObj.setPassword(rs.getString("password"));
                            } catch (SQLException e) {
                                logger.error(e.getMessage());
                            }
                            return userObj;
                        }
                    },
                    new Object[]{
                            username,
                            password
                    });
            if (user != null) {
                return user.getUserId();
            }
        } catch(EmptyResultDataAccessException e){
            return 0;
        }

        return 0;
    }

    /**
     * This method use the DB connection and update the expense details.
     * @param userId user id
     * @param limit expense limit
     * @return true if successfully updated else false.
     */
    @Override
    public boolean updateExpenseLimit(int userId, double limit){
        int rows = jdbcTemplate.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection con) {
                PreparedStatement ps = null;
                try {
                    ps = con.prepareStatement(USR_EXPENSE_Limit_SQL);
                    ps.setDouble(1, limit);
                    ps.setInt(2, userId);
                } catch (SQLException e) {
                    logger.error(e.getMessage());
                }
                return ps;
            }
        });
      return (rows > 0) ? true: false;
    }

    /**
     * This method use the DB connection and update the user's password.
     * @param userId user id
     * @param password password
     * @return  true if successfully updated else false.
     */
    @Override
    public boolean updatePassword(int userId, String password, String oldpassword){
        int rows = jdbcTemplate.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection con) {
                PreparedStatement ps = null;
                try {
                    ps = con.prepareStatement(USR_PASSWORD_UPDATE_SQL);
                    ps.setString(1, password);
                    ps.setInt(2, userId);
                    ps.setString(3, oldpassword);
                } catch (SQLException e) {
                    logger.error(e.getMessage());
                }
                return ps;
            }
        });
        return (rows > 0) ? true: false;
    }

    private static final String USR_GET_SQL = "SELECT * FROM smartexpense.USER WHERE userId = ?";

    private static final String USR_VALIDATE_SQL = "SELECT * FROM smartexpense.USER WHERE username " +
            "= ? AND password = ?";

    private static final String USR_CREATE_SQL = "INSERT INTO smartexpense.USER(" +
            "userid," +
            "username," +
            "firstname," +
            "lastname," +
            "password)" +
            "VALUES(?,?,?,?,?)";

    private static final String USR_EXPENSE_Limit_SQL = "UPDATE smartexpense.user" +
            " SET expenselimit = ? WHERE userid = ?";

    private static final String USR_PASSWORD_UPDATE_SQL = "UPDATE smartexpense.user" +
            " SET password = ? WHERE userid = ? and password = ?";

}
