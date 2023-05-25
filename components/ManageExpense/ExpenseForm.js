import { View } from "react-native";

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
    <View>
      <Input label="Amount" textInputConfig={amountConfig} />
      <Input label="Date" textInputConfig={dateConfig} />
      <Input label="Description" textInputConfig={descriptionConfig} />
    </View>
  );
}

export default ExpenseForm;
