import { useState } from "react";

import styles from '../9-Archivos-CSS/9-ItemCounter2.module.css';


interface Prons {
  name: string;
  quantity?: number;
}

export const ItemCounter2 = ({ name, quantity = 1 }: Prons) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  }

  const handSubtract = () => {
    if (count === 1) return;
    setCount(count - 1);
  }

  return (
    <section
      className={styles.itemRow}
    /* style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 10,
    }} */
    >
      <span
        className={styles['item-tex']}
        style={{
          color: count === 1 ? 'red' : 'black',
        }}
      >
        {name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span> {count} </span>
      <button onClick={handSubtract}>-1</button>
    </section>
  );
};
