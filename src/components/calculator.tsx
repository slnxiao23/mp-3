// I learned the structure of this code from Professor Davoodi
import { useState, useReducer } from "react";
import { CalculatorDiv, Input, Button, Result, Label } from "./style";
import { CalcState, CalcAction } from './types';

// Function to check if the input is a valid number
function isValidInput(num1: string, num2: string): boolean {
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  if (isNaN(n1) || isNaN(n2)) {
    alert("Please enter valid numbers in both fields.");
    return false;
  }
  return true;
}

// Reducer
function reducer(state: CalcState, action: CalcAction): CalcState {
  const n1 = parseFloat(action.first || "0");
  const n2 = parseFloat(action.second || "0");

  switch (action.type) {
    case "clear":
      return { result: "" };
    case "add":
      return { result: n1 + n2 };
    case "subtract":
      return { result: n1 - n2 };
    case "multiply":
      return { result: n1 * n2 };
    case "divide":
      return { result: n2 !== 0 ? n1 / n2 : "Cannot divide by zero" };
    case "power":
      return { result: Math.pow(n1, n2) };
    default:
      return state;
  }
}

export default function Calculator() {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const initialState: CalcState = { result: "" };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDispatch = (type: CalcAction['type']) => {
    if (!isValidInput(num1, num2)) return;
    dispatch({ type, first: num1, second: num2 });
  };

  return (
    <CalculatorDiv>
      <Label>1st number:</Label>
      <Input
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        type="number"
      />

      <Label>2nd number:</Label>
      <Input
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        type="number"
      />

      <div>
        <Button onClick={() => handleDispatch("add")}> + </Button>
        <Button onClick={() => handleDispatch("subtract")}> - </Button>
        <Button onClick={() => handleDispatch("multiply")}> * </Button>
        <Button onClick={() => handleDispatch("divide")}> / </Button>
        <Button onClick={() => handleDispatch("power")}> ^ </Button>
        <Button
          onClick={() => {
            setNum1("");
            setNum2("");
            dispatch({ type: "clear" });
          }}
        >
          Clear
        </Button>
      </div>

      {/* Display result only if it's not an empty string */}
      {state.result !== "" && (
        <Result isNegative={typeof state.result === "number" && state.result < 0}>
          Result: {state.result}
        </Result>
      )}
    </CalculatorDiv>
  );
}
