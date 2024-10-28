import CVItem from './CVItem';


export default function CVItemsList({title, data}) {
  const isFull = (
    data.length > 0 
  );

  return (
    isFull && (
      <section>
        <h2>{title}</h2>
        <ul>
          {data.map((elem) => (
            <CVItem data={elem} key={data.id} topic={title}/>
          ))}
        </ul>
      </section>
    )
  );
}