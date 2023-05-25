import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Input from "./Input";

function ExpenseForm() {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  const amountConfig = {
    keyboardType: "decimal-pad",
    onChangeText: inputChangedHandler.bind(this, "amount"),
    value: inputValues.amount,
  };
  const dateConfig = {
    placeholder: "YYYY-MM-DD",
    maxlength: 10,
    onChangeText: inputChangedHandler.bind(this, "date"),
    value: inputValues.date,
  };

  const descriptionConfig = {
    multiline: true,
    // autoCaptitalize: 'none', //default sentense
    // autoCorrect: false, //default is true
    onChangeText: inputChangedHandler.bind(this, "description"),
    value: inputValues.description,
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
    textAlign: "center",
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
