package com.usfca.registration.service;

import com.usfca.registration.DAO.UserDAO;
import com.usfca.registration.domain.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * This class implement the user interface.
 */
@Service("UserService")
public class UserServiceImpl implements UserService {

    @Autowired
    UserDAO userDAO;

    /**
     * This method calls the DAO layer to register the new user
     * @param user new user details
     */
    @Override
    public void registerUser(User user) {
        userDAO.createUser(user);
    }

    /**
     * This method calls the DAO layer method to get the user details
     * @param userId user id
     * @return user details
     */
    @Override
    public  User getUser(String userId){
        return userDAO.getUser(userId);
    }

    /**
     * This method calls the DAO layer methods to update the expense limit.
     * @param userId user id
     * @param limit expense limit
     * @return True if updated successfully else false.
     */
    @Override
    public boolean updateExpenseLimit(int userId, double limit){
        return userDAO.updateExpenseLimit(userId,limit);
    }

    /**
     * This method calls the DAO layer methods to update the password.
     * @param userId user id
     * @param password user password
     * @return True if updated successfully else false.
     */
    @Override
    public boolean updatePassword(int userId, String password, String oldPassword){
        return userDAO.updatePassword(userId,password, oldPassword);
    }
}
