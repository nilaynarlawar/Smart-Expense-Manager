package com.usfca.expenses;

import com.usfca.expenses.domain.dto.ExpenseDTO;
import com.usfca.expenses.domain.dto.GraphDataDTO;
import com.usfca.expenses.domain.dto.ExpenseListDTO;
import com.usfca.expenses.domain.model.Expense;
import com.usfca.expenses.domain.model.GraphData;
import com.usfca.expenses.domain.model.ExpenseList;
import com.usfca.expenses.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.*;

/**
 * This is a controller class for Expense manager.
 */
@RestController
@RequestMapping("expense")
public class ExpenseController {

    @Autowired
    ExpenseService expenseService;

    /**
     * This is controller for getExpense API.
     * @param userId user id
     * @param request Http request data
     * @return Expense data transfer object.
     */
    @RequestMapping(value = "/getExpense", method = RequestMethod.GET)
    public ExpenseDTO getExpense(@RequestParam(value = "userId") int userId, HttpServletRequest request){
        Expense expense =  expenseService.getExpense(userId);
        return ExpenseDTO.createExpense(expense);
    }

    /**
     * This is controller for getGraphData API.
     * @param userId user id
     * @param request Http request data
     * @return List of graph data transfer object.
     */
    @RequestMapping(value = "/getGraphData", method = RequestMethod.GET)
    public List<GraphDataDTO> getGraphData(@RequestParam(value = "userId") int userId, HttpServletRequest request){
        List<GraphData> graphData =  expenseService.getGraphData(userId);
        return GraphDataDTO.createGraphData(graphData);
    }

    /**
     * This is controller for get expense by expense id API
     * @param expenseId expense Id
     * @param request Http request data
     * @return Expense data transfer object
     */
    @RequestMapping(value = "/getExpenseByExpenseId", method = RequestMethod.GET)
    public ExpenseDTO getExpenseByExpenseId(@RequestParam(value = "expenseId") int expenseId, HttpServletRequest request){
        Expense expense =  expenseService.getExpenseByExpenseId(expenseId);
        return ExpenseDTO.createExpense(expense);
    }

    /**
     * This is a controller for create expense API
     * @param expenseDTO expense details
     * @param result binding details
     * @param request Http request data
     */
    @RequestMapping(value = "/createExpense", method = RequestMethod.POST)
    public void createExpense(@Valid @RequestBody ExpenseDTO expenseDTO, BindingResult result,
                              HttpServletRequest request){
        if(result.hasErrors()){
            throw new IllegalArgumentException("Not a valid data");
        }
        expenseService.createExpense(ExpenseDTO.createExpense(expenseDTO));
    }

    /**
     * This is a controller to edit the expense.
     * @param expenseDTO expense details
     * @param result binding result
     * @param request
     */
    @RequestMapping(value = "/editExpense", method = RequestMethod.POST)
    public void editExpense(@Valid @RequestBody ExpenseDTO expenseDTO, BindingResult result,
                                         HttpServletRequest request){
        if(result.hasErrors()){
            throw new IllegalArgumentException("Not a valid data");
        }
        expenseService.editExpense(ExpenseDTO.createExpense(expenseDTO));
    }

    /**
     * This is a controller for delete expense
     * @param expenseId expense id
     * @param request Http request details
     * @return true if record deleted successfully else false
     */
    @RequestMapping(value = "/deleteExpense", method = RequestMethod.GET)
    public boolean deleteExpense(@RequestParam(value = "expenseId") int expenseId, HttpServletRequest request){
        return expenseService.deleteExpense(expenseId);
    }

    /**
     * This is a controller to get the expense details.
     * @param userId user id
     * @param request Http request details
     * @return Expense list DTO.
     */
    @RequestMapping(value = "/getExpenseList", method = RequestMethod.GET)
    public ExpenseListDTO getExpenses(@RequestParam(value = "userId") int userId,
                                      @RequestParam(value = "filter") String filter, HttpServletRequest request){
        ExpenseList expenses =  expenseService.getExpenseList(userId, filter);
        return ExpenseListDTO.createExpenseList(expenses);
    }

}
