import { StyleSheet, Text, View } from "react-native";

import Input from "./Input";

function ExpenseForm() {
  function amountChangeHandler() {}
  const amountConfig = {
    keyboardType: "decimal-pad",
    onChangeText: amountChangeHandler,
  };
  const dateConfig = {
    placeholder: "YYYY-MM-DD",
    maxlength: 10,
    onChangeText: () => {},
  };

  const descriptionConfig = {
    multiline: true,
    // autoCaptitalize: 'none', //default sentense
    // autoCorrect: false, //default is true
  };
  return (
    <View style={styles.formStyle}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          containerStyle={styles.rowInput}
          label="Amount"
          textInputConfig={amountConfig}
        />
        <Input
          containerStyle={styles.rowInput}
          label="Date"
          textInputConfig={dateConfig}
        />
      </View>
      <Input label="Description" textInputConfig={descriptionConfig} />
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  formStyle: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
    marginHorizontal: 4,
  },
});
