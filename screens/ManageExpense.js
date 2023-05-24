import { useLayoutEffect } from "react";
import { View, Text } from "react-native";

function ManageExpense({ route, navigation }) {
  //the ? check to see if the variable exist/
  // if not it will pass back undefine and not through an error
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId; //convert value into boolean

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>Manage Expense</Text>
    </View>
  );
}

export default ManageExpense;
