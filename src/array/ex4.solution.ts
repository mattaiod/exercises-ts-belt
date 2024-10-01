import { A } from "@mobily/ts-belt";
import { Product } from "./type";

const inventory1: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
];
const inventory2: Product[] = [
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 200, inStock: false },
];

export const res = A.reduce(
  inventory1,
  [] as readonly Product[],
  (acc, currentProductI1) => {
    return A.includes(inventory2, currentProductI1)
      ? [...acc, currentProductI1]
      : acc;
  },
);
