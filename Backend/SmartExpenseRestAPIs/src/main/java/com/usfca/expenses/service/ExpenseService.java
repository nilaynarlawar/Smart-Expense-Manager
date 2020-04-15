package com.usfca.expenses.service;

import com.usfca.expenses.domain.dto.ExpenseDTO;
import com.usfca.expenses.domain.model.Expense;
import com.usfca.expenses.domain.model.GraphData;
import com.usfca.expenses.domain.model.ExpenseList;
import java.util.*;

/**
 * This is an interface for expense related operation method declaration.
 */
public interface ExpenseService {
    void createExpense(Expense expense);
    Expense getExpense(int userId);
    boolean deleteExpense(int expenseId);
    ExpenseList getExpenseList(int userId, String filter);
    Expense getExpenseByExpenseId(int expenseId);
    void editExpense(Expense expense);
    List<GraphData> getGraphData(int userId);
}
