import { View, Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";

function ExpensesSummary({ expenses, periodName }) {
  // javascript loop function to add array object.
  // sum is the value that got carry back
  // into the loop and expense is the
  // object variable create to loop
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0); //0 is initial in variable sum

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
