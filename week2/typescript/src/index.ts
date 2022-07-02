// let age: number = 20;
// if (age < 50) age += 10;

// let sales: number = 123456789;

// let number: number[] = [1, 2, 3];

// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }
// let mySize: Size = Size.Medium;
// console.log(mySize);

// function calculateTax(income: number, taxYear: number): number {
//   if (taxYear < 50_000) return income * 1.2;
//   return income * 1.3;
// }
// console.log(calculateTax(10_000, 2022));

// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Venkat",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "Venkat",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// function kgsToLbs(weight: number | string): number {
//   if (typeof weight === "number") {
//     return weight * 2.2;
//   } else {
//     return parseInt(weight) * 2.2;
//   }
// }
// kgsToLbs(10);
// kgsToLbs("10kg");

// type Draggable = {
//   drag: () => void;
// };
// type Resizable = {
//   resize: () => void;
// };
// type UIWidget = Draggable & Resizable;
// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// type Quantity = 50 | 100;
// let quantity: Quantity = 100;
// type metrix = "cm" | "inch";

// function greet(name: string | null) {
//   if (name) console.log(name.toUpperCase());
//   else console.log("Hola!");
// }
// greet(null);

type Customer = {
  birthday?: Date;
};
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());
