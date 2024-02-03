const Card = (props) => {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      {props.children}
    </div>
  )
}

export default Card
