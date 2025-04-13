import { 
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from "react";
import { ExpenseItem } from "./types";
import { jsonParser } from "./helpers";

export const useExpenses = (): [
    ExpenseItem[],
    Dispatch<SetStateAction<ExpenseItem[]>>
  ] => {
    const [expenses, setExpenses] = useState<ExpenseItem[]>(() => {
      const stored = localStorage.getItem('expenses');
      if (!stored) return [];
      return jsonParser<ExpenseItem[]>(stored, [])
    });

    useEffect(() => {
      localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses])

    return [expenses, setExpenses]
};
