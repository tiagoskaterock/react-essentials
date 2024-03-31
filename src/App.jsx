import Header from "./components/Header"
import CoreConcepts from "./components/CoreConcepts"
import TabButton from "./components/TabButton"
import "./index.css"
import { useState } from 'react'

function App() {

  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button');

  function handleSelect(selectedButton) {
    // selected button => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton)
  }

  const [dynamic, setDynamic] = useState('Dynamic Content')

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

          {selectedTopic}

        </section>

      </main>
    </div>
  );
}

export default App;
