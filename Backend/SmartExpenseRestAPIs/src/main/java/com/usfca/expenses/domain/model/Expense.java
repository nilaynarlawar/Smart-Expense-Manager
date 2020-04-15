package com.usfca.expenses.domain.model;

/**
 * this class contains data related expense.
 */
public class Expense {
    private int userId;
    private int expenseId;
    private String itemName;
    private String itemDescription;
    private String amount;
    private String location;
    private String transactionDate;
    private String expenseCategory;

    @Override
    public String toString() {
        return "Expense{}";
    }

    /**
     * getter for expense id.
     * @return expesne id.
     */
    public int getExpenseId() {
        return expenseId;
    }

    /**
     * setter for expense id
     * @param expenseId expense id.
     */
    public void setExpenseId(int expenseId) {
        this.expenseId = expenseId;
    }

    /**
     * getter for user id.
     * @return user id.
     */
    public int getUserId() {
        return userId;
    }

    /**
     * setter for user id.
     * @param userId user id.
     */
    public void setUserId(int userId) {
        this.userId = userId;
    }

    /**
     * getter for item name
     * @return item name.
     */
    public String getItemName() {
        return itemName;
    }

    /**
     * setter for item name
     * @param itemName item name
     */
    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    /**
     * getter for item description
     * @return item description
     */
    public String getItemDescription() {
        return itemDescription;
    }

    /**
     * setter for item description
     * @param itemDescription item description.
     */
    public void setItemDescription(String itemDescription) {
        this.itemDescription = itemDescription;
    }

    /**
     * getter for expense amount
     * @return expense amount
     */
    public String getAmount() {
        return amount;
    }

    /**
     * setter for expense amount
     * @param amount expense amount
     */
    public void setAmount(String amount) {
        this.amount = amount;
    }

    /**
     * getter for expense spent location.
     * @return expense spent location
     */
    public String getLocation() {
        return location;
    }

    /**
     * setter for expense spent location
     * @param location expense spent location
     */
    public void setLocation(String location) {
        this.location = location;
    }

    /**
     * getter for expense transaction date
     * @return transaction date
     */
    public String getTransactionDate() {
        return transactionDate;
    }

    /**
     * setter for expesne transaction date.
     * @param transactionDate transaction date.
     */
    public void setTransactionDate(String transactionDate) {
        this.transactionDate = transactionDate;
    }

    /**
     * getter for expense category
     * @return expesne category.
     */
    public String getExpenseCategory() {
        return expenseCategory;
    }

    /**
     * setter for expense category.
     * @param expenseCategory expense category.
     */
    public void setExpenseCategory(String expenseCategory) {
        this.expenseCategory = expenseCategory;
    }

}
