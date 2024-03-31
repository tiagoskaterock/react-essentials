import Header from "./components/Header"
import CoreConcepts from "./components/CoreConcepts"
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
      <Header />
      <main>

        <section id="core-concepts">
          <h2>Core Concepts</h2>          
          <CoreConcepts />
        </section> 

        <section id="examples">
          <h2>
            Examples
          </h2>

          <menu>
            <TabButton onClick={ () => handleSelect('components')}>Components</TabButton>
            <TabButton onClick={ () => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onClick={ () => handleSelect('props')}>Props</TabButton>
            <TabButton onClick={ () => handleSelect('state')}>State</TabButton>
          </menu>

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
