// Exercice 4: Comparer deux inventairesUtilise Array.difference (pour obtenir les produits qui sont dans inventory1 mais pas dans inventory2).Utilise Array.intersection (pour obtenir les produits présents dans les deux inventaires).Utilise Array.union (pour obtenir tous les produits des deux inventaires sans doublons)

import { Product } from "./type";

const inventory1: Product[] = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true },
];
const inventory2: Product[] = [
  { name: 'Keyboard', price: 75, inStock: true },
  { name: 'Monitor', price: 200, inStock: false },
];