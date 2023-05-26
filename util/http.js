import axios from "axios";

const backendUrl =
  "https://rn-expensetracker-a0fb7-default-rtdb.asia-southeast1.firebasedatabase.app/";

export function storeExpense(expenseData) {
  axios.post(backendUrl + "expenses.json", expenseData);
}
