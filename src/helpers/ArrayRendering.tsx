import React from "react";

interface ForLoopProps<T> {
  each: T[];
  children: (node: T, idx: number) => JSX.Element;
}
export const ForLoops = <T extends {}>({ each, children }: ForLoopProps<T>) => {
  if (each && !Array.isArray(each)) {
    return null;
  } else if (Array.isArray(each) && each?.length) {
    return <>{each.map((item, idx) => children(item, idx))}</>;
  }
  return null;
};
