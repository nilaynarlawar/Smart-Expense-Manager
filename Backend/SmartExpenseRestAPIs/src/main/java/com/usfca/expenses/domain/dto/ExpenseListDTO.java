package com.usfca.expenses.domain.dto;

import com.usfca.common.domain.dto.BaseDTO;
import com.usfca.expenses.domain.model.ExpenseList;

import java.util.ArrayList;
import java.util.List;

/**
 * this class is for creating the list of Expense DTO.
 */
public class ExpenseListDTO extends BaseDTO {
    List<ExpenseDTO> expenses = new ArrayList<>();
    int total = 0;

    /**
     * getter for ExpenseDTO list
     * @return expense DTO list.
     */
    public List<ExpenseDTO> getExpenses() {
        return expenses;
    }

    /**
     * setter for expesne DTO List
     * @param expenses expense DTO List.
     */
    public void setExpenses(List<ExpenseDTO> expenses) {
        this.expenses = expenses;
    }

    /**
     * getter for expense total amount.
     * @return expense total amount.
     */
    public int getTotal() {
        return total;
    }

    /**
     * setter for expense total amount.
     * @param total expense total.
     */
    public void setTotal(int total) {
        this.total = total;
    }

    /**
     * geivs the Expense List DTO object.
     * @param expenses expense list
     * @return Expense DTO List.
     */
    public static ExpenseListDTO createExpenseList(ExpenseList expenses){
       ExpenseListDTO expenseListDTO = new ExpenseListDTO();
       expenseListDTO.setTotal(expenses.getTotal());
       expenseListDTO.setExpenses(ExpenseDTO.createExpense(expenses));
       return expenseListDTO;
    }
}
