package com.usfca.login.controller;

import com.usfca.login.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.logging.Logger;

/**
 * This is a login controller class.
 */
@RestController
@RequestMapping("login")
public class LoginController {
    public static final Logger logger = Logger.getLogger(String.valueOf(LoginController.class));

    @Autowired
    LoginService loginService;

    /**
     * This is API controller for get user details
     * @param userName user name
     * @param password user password
     * @param request Http request details
     * @return user id.
     */
    @RequestMapping(value = "/isValidUser", method = RequestMethod.GET)
    public int getUser(@RequestParam(value = "username") String userName,
                           @RequestParam(value = "password") String password,
                           HttpServletRequest request){
        return loginService.isValidUser(userName,password);
    }
}
