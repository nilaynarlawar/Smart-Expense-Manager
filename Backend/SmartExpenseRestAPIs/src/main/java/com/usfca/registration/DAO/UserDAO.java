package com.usfca.registration.DAO;

import com.usfca.registration.domain.model.User;

/**
 * This is the interface for User data Access layer object.
 */
public interface UserDAO {
    void createUser(User user);
    User getUser(String userId);
    int isValidUser(String username, String password);
    boolean updateExpenseLimit(int userId, double limit);
    boolean updatePassword(int userId, String password, String oldPassword);
}
