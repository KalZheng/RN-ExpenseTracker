import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "a pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "some banana",
    amount: 5.99,
    date: new Date("2021-01-19"),
  },
  {
    id: "e3",
    description: "food",
    amount: 300.0,
    date: new Date("2021-02-19"),
  },
  {
    id: "e4",
    description: "a pair of pants",
    amount: 23.75,
    date: new Date("2021-02-28"),
  },
  {
    id: "e5",
    description: "drinks",
    amount: 4.0,
    date: new Date("2021-03-14"),
  },
  {
    id: "e6",
    description: "food",
    amount: 300.0,
    date: new Date("2021-02-19"),
  },
  {
    id: "e7",
    description: "a pair of pants",
    amount: 23.75,
    date: new Date("2021-02-28"),
  },
  {
    id: "e8",
    description: "drinks",
    amount: 4.0,
    date: new Date("2021-03-14"),
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (
    action.type //'type' is by chice not default
  ) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  //passing DUMMY_DATA ensure the type of "state"
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expense: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpensesContextProvider;
