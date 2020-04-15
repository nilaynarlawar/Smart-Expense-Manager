package com.usfca.registration;

import com.usfca.registration.domain.model.User;
import com.usfca.registration.service.UserService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import com.usfca.registration.domain.dto.UserDTO;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

/**
 * This is user controller.
 */
@RestController
@RequestMapping("registration")
public class UserController{

    @Autowired
    UserService userService;

    /**
     * This serve the create API request.
     * @param userDto user details
     * @param result Binding results
     * @param request Http request details
     */
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public void registerUser(@Valid @RequestBody UserDTO userDto, BindingResult result, HttpServletRequest request){
       if(result.hasErrors()){
           throw new IllegalArgumentException("Not a valid data");
       }
       userService.registerUser(UserDTO.createUser(userDto));
    }

    @RequestMapping(value = "/getUser", method = RequestMethod.GET)
    public UserDTO getUser(@RequestParam(value = "userId") String userId, HttpServletRequest request){
        User user = userService.getUser(userId);
        return UserDTO.createUser(user);
    }

    /**
     * This serve the update expense limit API
     * @param values post values
     * @return True or False
     */
    @RequestMapping(value = "/updateExpenseLimit", method = RequestMethod.POST)
    public boolean updateExpenseLimit(@RequestBody Map<String, String> values){
        int userId = Integer.parseInt(values.get("userId"));
        double limit = Double.valueOf(values.get("userExpenselimit"));
        boolean result = userService.updateExpenseLimit(userId,limit);
        return result;
    }

    /**
     * This serve the update password API
     * @param values post values
     * @return True or False
     */
    @RequestMapping(value = "/updatePassword", method = RequestMethod.POST)
    public boolean updatePassword(@RequestBody Map<String, String> values){
        int userId = Integer.parseInt(values.get("userId"));
        String password = values.get("password");
        String oldPassword = values.get("oldPassword");
        boolean result = userService.updatePassword(userId,password,oldPassword);
       return result;
    }
}
