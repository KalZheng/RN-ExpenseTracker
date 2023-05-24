import { View, StyleSheet } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "a pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "some banana",
    amount: 5.99,
    date: new Date("2021-01-19"),
  },
  {
    id: "e3",
    description: "food",
    amount: 300.0,
    date: new Date("2021-02-19"),
  },
  {
    id: "e4",
    description: "a pair of pants",
    amount: 23.75,
    date: new Date("2021-02-28"),
  },
  {
    id: "e5",
    description: "drinks",
    amount: 4.0,
    date: new Date("2021-03-14"),
  },
  {
    id: "e6",
    description: "food",
    amount: 300.0,
    date: new Date("2021-02-19"),
  },
  {
    id: "e7",
    description: "a pair of pants",
    amount: 23.75,
    date: new Date("2021-02-28"),
  },
  {
    id: "e8",
    description: "drinks",
    amount: 4.0,
    date: new Date("2021-03-14"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
