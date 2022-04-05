function Pokemon( props ) {
  const { name, type, averageWeight, image } = props;
  const { value, measurementUnit } = averageWeight;
  return (
    <div className="card">
      <section>
        <p>{name}</p>
        <p>{type}</p>
        <p>Evarege Weight: {value} {measurementUnit}</p>
      </section>
      <img src={image} alt="Imagem pokemon"></img>
    </div>
  )
}

export default Pokemon;
