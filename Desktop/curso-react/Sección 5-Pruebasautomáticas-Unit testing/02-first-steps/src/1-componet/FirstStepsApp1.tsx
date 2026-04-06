/*
Propiedades del componente-Props
*/


import { ItemCounter } from "../5-Componente-ItemCounter/ItemCounter";

export function FirstStepsApp1() {
  return (
    <>
      <h1>Carrito de Compras</h1>

      <ItemCounter name="Nitendo Swicht 2" quantity={1} />
      <ItemCounter name="Pro Controller" quantity={2} />
      <ItemCounter name="Super Smash" quantity={3} />
    </>
  );
};