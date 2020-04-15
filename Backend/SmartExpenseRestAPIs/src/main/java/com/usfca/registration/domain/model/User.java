package com.usfca.registration.domain.model;

/**
 * This class is to store the user data
 */
public class User {
    private int userId;
    private String firstName;
    private String lastName;
    private String userName;
    private String password;
    private double expenselimit;

    /**
     * getter for expense limit.
     * @return expense limit.
     */
    public double getExpenselimit() {
        return expenselimit;
    }

    /**
     * getter for expense limit
     * @param expenselimit expense limit
     */
    public void setExpenselimit(double expenselimit) {
        this.expenselimit = expenselimit;
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
     * getter for the first name
     * @return first name
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * setter for the first name
     * @param firstName first name
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    /**
     * getter for the last name
     * @return last name
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * setter for the last name
     * @param lastName last name
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * getter for the user name
     * @return user name
     */
    public String getUserName() {
        return userName;
    }

    /**
     * setter for the user name
     * @param userName user name
     */
    public void setUserName(String userName) {
        this.userName = userName;
    }

    /**
     * getter for the user password
     * @return user password
     */
    public String getPassword() {
        return password;
    }

    /**
     * setter for the user password
     * @param password user password
     */
    public void setPassword(String password) {
        this.password = password;
    }

}
