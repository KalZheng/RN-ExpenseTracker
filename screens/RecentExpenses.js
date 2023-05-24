import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOut";

function RecentExpenses() {
  return <ExpensesOutput expensesPeriod="Last 7 days" /> ;
}

export default RecentExpenses;