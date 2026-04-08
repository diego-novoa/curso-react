interface Prons {
  name: string;
  quantity?: number;
}

export const ItemCounter1 = ({ name, quantity }: Prons) => {

  const handleClick = () => {
    console.log(`Click en ${name}`)
  }

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
      <button onClick={handleClick}>+1</button>
      <span> {quantity} </span>
      <button>-1</button>
    </section>
  )
};
