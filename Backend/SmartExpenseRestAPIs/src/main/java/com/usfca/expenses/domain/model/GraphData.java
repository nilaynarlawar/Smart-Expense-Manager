package com.usfca.expenses.domain.model;

/**
 * This is class is used to create the graph related data.
 */
public class GraphData{

    private String category;
    private double sum;

    /**
     * getter for graph expense category.
     * @return expense category/
     */
    public String getCategory() {
        return category;
    }

    /**
     * setter for the graph expense category
     * @param category expense category
     */
    public void setCategory(String category) {
        this.category = category;
    }

    /**
     * getter for expense category wise amount sum
     * @return sum of amount
     */
    public double getSum() {
        return sum;
    }

    /**
     * setter for expense category wise amount sum
     * @param sum sum of amount.
     */
    public void setSum(double sum) {
        this.sum = sum;
    }
}


