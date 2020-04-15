package com.usfca.expenses.domain.model;

import com.usfca.expenses.domain.dto.ExpenseDTO;

import java.util.ArrayList;
import java.util.List;

/**
 * This class is used to create the list of Expense list
 */
public class ExpenseList {
    List<Expense> expenses = new ArrayList<>();
    int total = 0;

    /**
     * getter for expense list
     * @return expense list
     */
    public List<Expense> getExpenses() {
        return expenses;
    }

    /**
     * setter for expense list
     * @param expenses expense list
     */
    public void setExpenses(List<Expense> expenses) {
        this.expenses = expenses;
    }

    /**
     * getter for total
     * @return expense count
     */
    public int getTotal() {
        return total;
    }

    /**
     * setter for total.
     * @param total expense count.
     */
    public void setTotal(int total) {
        this.total = total;
    }
}
