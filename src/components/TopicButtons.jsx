import TabButton from "./TabButton";

function TopicButtons(coreConcepts, selectedTopic, handleSelect) {
  return (
    <menu>

      {/* buttons about topics */}
      {Object.values(coreConcepts).map((concept) => (
        <TabButton
          isSelected={ selectedTopic === concept.slug }
          onClick={ () => handleSelect(concept.slug)}>
          {concept.title}
        </TabButton>
      ))}

    </menu>
  )
}

export default TopicButtons
