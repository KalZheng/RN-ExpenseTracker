import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

import Input from "./Input";
import Button from "../ui/Button";
import { getFormattedDate } from "../../util/date";

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      // isValid: !!defaultValues,
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
      // isValid: !!defaultValues,
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      // isValid: !!defaultValues,
      isValid: true,
    },
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };
    // we do validation here
    const amountIsValid = isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateISValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateISValid || !descriptionIsValid) {
      // Alert.alert("Invalid Input", "Please check your input values");
      setInputs((curInputs) => {
        return {
          amount: {
            value: curInputs.amount.value,
            isValid: amountIsValid,
          },
          date: {
            value: curInputs.date.value,
            isValid: dateISValid,
          },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  }

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  const amountConfig = {
    keyboardType: "decimal-pad",
    onChangeText: inputChangedHandler.bind(this, "amount"),
    value: inputs.amount.value,
  };
  const dateConfig = {
    placeholder: "YYYY-MM-DD",
    maxlength: 10,
    onChangeText: inputChangedHandler.bind(this, "date"),
    value: inputs.date.value,
  };

  const descriptionConfig = {
    multiline: true,
    // autoCaptitalize: 'none', //default sentense
    // autoCorrect: false, //default is true
    onChangeText: inputChangedHandler.bind(this, "description"),
    value: inputs.description.value,
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
      {formIsInvalid && (
        <Text>Invalid input values - please check your entered data!</Text>
      )}
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
