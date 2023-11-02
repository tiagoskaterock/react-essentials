function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img 
        src={image} 
        alt={title}
        width="200"
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

export default CoreConcept
