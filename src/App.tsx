import React from "react";
// type Args = { [argname: string]: boolean };
// type Operation = any;

/* ...todo:
a system for defining logical operations 
(not, and, or... more if you want) that can be passed:
 - selected args by name: (X and Y)
 - constant values not dependent on args: (true and X)
 - other operations: ((X and Y) or Z) 
 */

function evaluateOperation(operation: Operation, args: Args): boolean {
  /* ...todo: implement an evaluator for your operations, 
  given some args */
  return false;
}

type Args = boolean | undefined | (() => boolean);
type Operation = "OR" | "AND" | "NOT";

function recEvaluateLogic(
  x: Args,
  y: Args,
  operation: Operation
): boolean | undefined {
  // if arg is boolean -> return bool value
  // if arg is undef -> break eval and throw undef on result
  // if arg is function -> call this eval recursively and try evaluation on this arg

  if (typeof x !== "boolean" || typeof y !== "boolean") {
    if (x === undefined || y === undefined) {
      return undefined;
    } else if (x) {
    }
  }
  return false;
}

function OperationBuilder(props: {
  value: Operation;
  onChange: (value: Operation) => void;
}): JSX.Element {
  /* ...todo: an ugly gui for creating operations */
  return <div> Test {props} </div>;
}

export default function App() {
  return (
    <div>
      {/* todo: use <OperationBuilder> and have an interface
      for entering arguments and seeing the result */}
    </div>
  );
}
