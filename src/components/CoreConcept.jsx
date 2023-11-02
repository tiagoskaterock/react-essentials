function CoreConcept(props) {
  return (
    <li>
      <img 
        src={props.image} 
        alt={props.title}
        width="200"
      />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

export default CoreConcept
