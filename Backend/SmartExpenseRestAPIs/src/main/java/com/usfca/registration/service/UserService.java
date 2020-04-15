package com.usfca.registration.service;

import com.usfca.registration.domain.model.User;

/**
 * This interface had the method declaration for user related services.
 */
public interface UserService {
    void registerUser(User user);
    User getUser(String userId);
    boolean updateExpenseLimit(int userId, double limit);
    boolean updatePassword(int userId, String password, String oldPassword);
}
