package com.usfca.expenses.DAO;

import com.usfca.expenses.domain.model.Expense;
import com.usfca.expenses.domain.model.GraphData;
import com.usfca.expenses.domain.model.ExpenseList;
import java.util.*;

/**
 * This Interface provide different operation related to expense.
 */
public interface ExpenseDAO {
    void createExpense(Expense expense);
    Expense getExpense(int userId);
    boolean deleteExpense(int expenseId);
    Expense getExpenseByExpenseId(int expenseId);
    ExpenseList getExpenseList(int userId, String filter);
    void editExpense(Expense expense);
    List<GraphData> getGraphData(int userId);
}
