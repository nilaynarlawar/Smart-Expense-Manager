package com.usfca.registration.domain.dto;

import com.usfca.common.domain.dto.BaseDTO;
import com.usfca.registration.domain.model.User;

/**
 * This is User data transfer object class.
 */
public class UserDTO extends BaseDTO {
    private int userId;
    private String firstName;
    private String lastName;
    private String userName;
    private String password;
    private double expenselimit;

    /**
     * It creates the user data object
     * @param userDto user data transfer object.
     * @return USer data object
     */
    public static User createUser(UserDTO userDto) {
        User user =  new User();
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setPassword(userDto.getPassword());
        user.setUserId(userDto.userId);
        user.setUserName(userDto.getUserName());
        user.setExpenselimit(userDto.getExpenselimit());
        return user;
    }

    /**
     * Create the User data tranfer object
     * @param user user data
     * @return user DTO
     */
    public static UserDTO createUser(User user) {
        UserDTO userDto = new UserDTO();
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        userDto.setPassword(user.getPassword());
        userDto.setUserId(user.getUserId());
        userDto.setUserName(user.getUserName());
        userDto.setExpenselimit(user.getExpenselimit());
        return userDto;
    }

    /**
     * getter for user id
     * @return user id
     */
    public int getUserId() {
        return userId;
    }

    /**
     * setter for user id
     * @param userId user id
     */
    public void setUserId(int userId) {
        this.userId = userId;
    }

    /**
     * getter for first name
     * @return first name
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * setter for first name
     * @param firstName first name
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    /**
     * getter for last name
     * @return last name
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * setter for last name
     * @param lastName last name
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * getter for user name
     * @return user name
     */
    public String getUserName() {
        return userName;
    }

    /**
     * setter for user name
     * @param userName user name
     */
    public void setUserName(String userName) {
        this.userName = userName;
    }

    /**
     * getter for password
     * @return password
     */
    public String getPassword() {
        return password;
    }

    /**
     * setter for password
     * @param password user password
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * getter for expense limit
     * @return expense limit
     */
    public double getExpenselimit() {
        return expenselimit;
    }

    /**
     * setter for expense limit
     * @param expenselimit expense limit.
     */
    public void setExpenselimit(double expenselimit) {
        this.expenselimit = expenselimit;
    }

}
