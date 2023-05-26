import axios from "axios";

const backendUrl =
  "https://rn-expensetracker-a0fb7-default-rtdb.asia-southeast1.firebasedatabase.app/";

export async function storeExpense(expenseData) {
  const response = await axios.post(backendUrl + "expenses.json", expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpense() {
  const response = await axios.get(backendUrl + "expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(backendUrl + `expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(backendUrl + `expenses/${id}.json`);
}
