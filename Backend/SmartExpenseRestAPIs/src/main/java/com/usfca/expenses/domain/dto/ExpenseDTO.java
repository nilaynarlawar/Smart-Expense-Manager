package com.usfca.expenses.domain.dto;

import com.usfca.common.domain.dto.BaseDTO;
import com.usfca.expenses.domain.model.Expense;
import com.usfca.expenses.domain.model.ExpenseList;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

/**
 * Data transfer object class for expense related data.
 */
public class ExpenseDTO {
    private int userId;
    private int expenseId;
    private String itemName;
    private String itemDescription;
    private String amount;
    private String location;
    private String expenseCategory;
    private String transactionDate;

    /**
     * Create the expense DTO object and assign all the values.
     * @param expense expense details.
     * @return Expense DTO object.
     */
    public static ExpenseDTO createExpense(Expense expense) {
            ExpenseDTO expenseDTO = new ExpenseDTO();
            expenseDTO.setItemName(expense.getItemName());
            expenseDTO.setExpenseId(expense.getExpenseId());
            expenseDTO.setItemDescription(expense.getItemDescription());
            expenseDTO.setAmount(expense.getAmount());
            expenseDTO.setLocation(expense.getLocation());
            expenseDTO.setTransactionDate(expense.getTransactionDate());
            expenseDTO.setUserId(expense.getUserId());
            expenseDTO.setExpenseCategory(expense.getExpenseCategory());
            return expenseDTO;
        }

    /**
     * Create the List of expense DTO.
     * @param expenses expense list
     * @return list of expense dto object.
     */
    public static List<ExpenseDTO> createExpense(ExpenseList expenses) {
        List<ExpenseDTO> expenseDTOList = new ArrayList<>();
        if(expenses == null){
            return expenseDTOList;
        }
        expenses.getExpenses().forEach(new Consumer<Expense>() {
            @Override
            public void accept(Expense expense) {
                expenseDTOList.add(ExpenseDTO.createExpense(expense));
            }
        });
        return expenseDTOList;
    }

    /**
     * gives the expesne id.
     * @return expense id.
     */
    public int getExpenseId() {
        return expenseId;
    }

    /**
     * gives the user id.
     * @return user id.
     */
    public int getUserId() {
        return userId;
    }

    /**
     * set the user id
     * @param userId user id
     */
    public void setUserId(int userId) {
        this.userId = userId;
    }

    /**
     * gives the itemname.
     * @return item name
     */
    public String getItemName() {
        return itemName;
    }

    /**
     * set the item name.
     * @param itemName item name
     */
    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    /**
     * gives the item description.
     * @return item description.
     */
    public String getItemDescription() {
        return itemDescription;
    }

    /**
     * set the item description.
     * @param itemDescription item description.
     */
    public void setItemDescription(String itemDescription) {
        this.itemDescription = itemDescription;
    }

    /**
     * gives the expense amount.
     * @return expense amount.
     */
    public String getAmount() {
        return amount;
    }

    /**
     * set the amount value.
     * @param amount expense amount
     */
    public void setAmount(String amount) {
        this.amount = amount;
    }

    /**
     * gives the expense spend location
     * @return location co-ordinates.
     */
    public String getLocation() {
        return location;
    }

    /**
     * set the expense spent location
     * @param location location co-ordinates.
     */
    public void setLocation(String location) {
        this.location = location;
    }

    /**
     * give the transaction date.
     * @return transaction date.
     */
    public String getTransactionDate() {
        return transactionDate;
    }

    /**
     * set the transaction date
     * @param transactionDate transaction date of expense
     */
    public void setTransactionDate(String transactionDate) {
        this.transactionDate = transactionDate;
    }

    /**
     * gives the type of expense category
     * @return expense category
     */
    public String getExpenseCategory() {
        return expenseCategory;
    }

    /**
     * set the expense category.
     * @param expenseCategory expense category.
     */
    public void setExpenseCategory(String expenseCategory) {
        this.expenseCategory = expenseCategory;
    }

    /**
     * set the expense Id
     * @param expenseId expense id
     */
    public void setExpenseId(int expenseId) {
        this.expenseId = expenseId;
    }

    public List<Expense> expenseList = new ArrayList<>();

    /**
     * create the expense object
     * @param expenseDTO expense data transfer object
     * @return expense object.
     */
    public static Expense createExpense(ExpenseDTO expenseDTO){
        Expense expense = new Expense();
        expense.setExpenseId(expenseDTO.getExpenseId());
        expense.setItemName(expenseDTO.getItemName());
        expense.setItemDescription(expenseDTO.getItemDescription());
        expense.setAmount(expenseDTO.getAmount());
        expense.setLocation(expenseDTO.getLocation());
        expense.setTransactionDate(expenseDTO.getTransactionDate());
        expense.setUserId(expenseDTO.getUserId());
        expense.setExpenseCategory(expenseDTO.getExpenseCategory());
        return expense;

    }

}
