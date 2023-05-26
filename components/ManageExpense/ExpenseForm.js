import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Input from "./Input";
import Button from "../ui/Button";

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit }) {
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

  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.amount,
    };
    onSubmit(expenseData);
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
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 0,
  },
});
