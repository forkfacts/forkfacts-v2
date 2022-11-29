export const addSpacing = (spacing: () => string, value: number) =>
  Number(spacing().slice(0, -2)) + value + "px";
