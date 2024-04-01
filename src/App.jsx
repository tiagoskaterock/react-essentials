import Header from "./components/Header"
import CoreConcepts from "./components/CoreConcepts"
import TopicButtons from "./components/TopicButtons"
import TabButton from "./components/TabButton"
import "./index.css"
import { useState } from 'react'
import coreConcepts from "./data/coreConcepts.js"

function App() {

  const [ selectedTopic, setSelectedTopic ] = useState();  

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  }

  return (
    <div>

      {/* React Rssentials title with phrases */}
      <Header />
      
      <main>

        {/* core concepts card */}
        <section id="core-concepts">
          <h2>Core Concepts</h2>   
          {/* core concepts loop */}
          <CoreConcepts />
        </section> 

        <section id="examples">
          <h2>
            Examples
          </h2>

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

        </section>

      </main>
    </div>
  );
}

export default App;
