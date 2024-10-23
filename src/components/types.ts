export type CalcState = {
  result: number | string;
};

export type CalcAction = {
  type: "add" | "subtract" | "multiply" | "divide" | "power" | "clear";
  first?: string;
  second?: string;
};
