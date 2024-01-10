import Header from "./components/Header"
import CoreConcepts from "./components/CoreConcepts"
import TabButton from "./components/TabButton"
import "./index.css"
import { useState } from 'react'

function App() {

  function handleClick(props) {
    alert('click')
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
            <TabButton onClick={handleClick}>Components</TabButton>
            <TabButton onClick={handleClick}>JSX</TabButton>
            <TabButton onClick={handleClick}>Props</TabButton>
            <TabButton onClick={handleClick}>State</TabButton>
          </menu>

          {dynamic}

        </section>

      </main>
    </div>
  );
}

export default App;
