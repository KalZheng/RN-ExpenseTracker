import { useContext, useEffect } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpense } from "../util/http";

function RecentExpenses() {
  const expensesCtx = useContext(ExpenseContext);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpense();
    }
    getExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const daysAgo = getDateMinusDays(today, 7);

    return expense.date >= daysAgo && expense.date <= today;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText="No recent expenses found!"
    />
  );
}

export default RecentExpenses;
