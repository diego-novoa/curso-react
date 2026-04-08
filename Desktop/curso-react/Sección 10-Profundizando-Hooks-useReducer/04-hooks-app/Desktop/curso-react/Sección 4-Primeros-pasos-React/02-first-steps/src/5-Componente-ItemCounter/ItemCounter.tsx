interface Prons {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity }: Prons) => {
  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginTop: 10,
      }}>
      {name}
      <span>Nitendo Switch </span>
      <button>+1</button>
      <span> {quantity} </span>
      <button>-1</button>
    </section>
  )
};
