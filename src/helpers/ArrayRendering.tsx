import React from "react";

interface FoorLoopProps<T> {
  each: T[];
  children: (nodes: T, idx: number) => JSX.Element;
}
export const ForLoops = <T extends {}>({ each, children }: FoorLoopProps<T>) => {
  if (each && !Array.isArray(each)) {
    return null;
  } else if (Array.isArray(each) && each?.length) {
    return <>{each.map((item, idx) => children(item, idx))}</>;
  }
  return null;
};
