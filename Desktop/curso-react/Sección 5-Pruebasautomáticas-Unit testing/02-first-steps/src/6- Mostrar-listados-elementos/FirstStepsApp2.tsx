/*
Mostrar listados de elementos
*/
import { ItemCounter2 } from "../8-Hook-useState/8-ItemCounter2";

interface ItemInCart {
  productName: string;
  quantity: number;
};

const itemsInCart: ItemInCart[] = [
  { productName: 'Nitendo Swicht 2', quantity: 1 },
  { productName: 'Pro Controller ', quantity: 2 },
  { productName: 'Super Smash', quantity: 5 },
];

export function FirstStepsApp2() {
  return (
    <>
      <h1>Carrito de Compras</h1>

      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter2 key={productName} name={productName} quantity={quantity} />
      ))}

      {/*  <ItemCounter name="Nitendo Swicht 2" quantity={1} />
      <ItemCounter name="Pro Controller" quantity={2} />
      <ItemCounter name="Super Smash" quantity={3} /> */}
    </>
  );
};
