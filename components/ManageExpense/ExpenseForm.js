import { View } from "react-native";

import Input from "./Input";

function ExpenseForm() {
  function amountChangeHandler() {}
  const amountConfig = {
    keyBoardType: "decimal-pad",
    onChangeText: amountChangeHandler,
  };
  const dateConfig = {
    placeHolder: "YYYY-MM-DD",
    maxlength: 10,
    onChangeText: () => {},
  };

  const descriptionConfig = {
    multiLine: true,
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
