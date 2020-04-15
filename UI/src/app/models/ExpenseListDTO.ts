import {ExpenseDTO} from './ExpenseDTO';

export interface ExpenseListDTO {
    total: number;
    expenses: ExpenseDTO[];
    errCode: number;
    errMessage: string;
};
