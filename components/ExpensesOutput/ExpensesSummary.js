import { View, Text } from "react-native";

function ExpensesSummary({ expenses, periodName }) {
  // javascript loop function to add array object.
  // sum is the value that got carry back 
  // into the loop and expense is the 
  // object variable create to loop
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);//0 is initial in variable sum

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;
