package com.usfca.login.service;

import com.usfca.registration.DAO.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * This class implements the login service methods.
 */
@Service("LoginService")
public class LoginServiceImpl implements LoginService {

    @Autowired
    UserDAO userDAO;

    /**
     * This is called to validate the user.
     * @param username user name
     * @param password user password
     * @return user id if validates successfully else 0
     */
    @Override
    public int isValidUser(String username, String password) {

        return userDAO.isValidUser(username, password);
    }
}
