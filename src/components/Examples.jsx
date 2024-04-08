import { useState } from 'react';
import TabButton from "./TabButton";
import Section from "./Section";
import coreConcepts from "../data/coreConcepts";
// import coreConcepts from "./data/coreConcepts.js"

function Examples() {

	const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

	return (
		<Section title="Examples" id="examples">

      {/* buttons about topics */}
      <menu>
        
        {Object.values(coreConcepts).map((concept) => (
          <TabButton
            isSelected={ selectedTopic === concept.slug }
            onClick={ () => handleSelect(concept.slug)}>
            {concept.title}
          </TabButton>
        ))}

      </menu>

      {/* examples */}
      <div id="tab-content">
      
        {/* no topic selected shows a statement to the user */}
        { ! selectedTopic && <p>Select a topic</p> }

        {/* topic selected shows the right content */}
        { 
          selectedTopic && 
          <>
            <h3>{ coreConcepts[selectedTopic].title }</h3>
            <p>{ coreConcepts[selectedTopic].description }</p>
            <pre>
              <code>
                { coreConcepts[selectedTopic].code }
              </code>
            </pre> 
          </> 
        }
                    
      </div>

    </Section>
	)
}

export default Examples;
