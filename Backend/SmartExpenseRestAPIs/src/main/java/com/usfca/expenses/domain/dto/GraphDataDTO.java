package com.usfca.expenses.domain.dto;

import com.usfca.common.domain.dto.BaseDTO;
import com.usfca.expenses.domain.model.Expense;
import com.usfca.expenses.domain.model.GraphData;
import com.usfca.expenses.domain.model.ExpenseList;
import java.util.function.Consumer;
import java.util.*;

/**
 * this class is used to create the Graph data.
 */
public class GraphDataDTO {
    private String category;
    private double sum;

    /**
     * Give the list of expense total group by expense category.
     * @param graphData graph data.
     * @return list of expense total group by expense category.
     */
    public static List<GraphDataDTO> createGraphData(List<GraphData> graphData) {
        List<GraphDataDTO> data = new ArrayList<>();
        if(graphData == null){
            return data;
        }
        graphData.forEach(new Consumer<GraphData>() {
            @Override
            public void accept(GraphData graphDt) {
                data.add(createGraphData(graphDt));
            }
        });
        return data;

    }

    /**
     * gives the graph data DTO.
     * @param graphData graph data.
     * @return Graph data DTO.
     */
    public static GraphDataDTO createGraphData(GraphData graphData){
        GraphDataDTO graphDataDTO = new GraphDataDTO();
        graphDataDTO.setCategory(graphData.getCategory());
        graphDataDTO.setSum(graphData.getSum());
        return graphDataDTO;
    }

    /**
     * getter for expense category.
     * @return expense category.
     */
    public String getCategory() {
        return category;
    }

    /**
     * setter for expense category.
     * @param category expense category.
     */
    public void setCategory(String category) {
        this.category = category;
    }

    /**
     * getter for expense sum group by category.
     * @return expense sum.
     */
    public double getSum() {
        return sum;
    }

    /**
     * setter for expense sum.
     * @param sum expense sum.
     */
    public void setSum(double sum) {
        this.sum = sum;
    }
}
