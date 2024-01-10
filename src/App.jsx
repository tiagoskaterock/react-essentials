import Header from "./components/Header"
import CoreConcepts from "./components/CoreConcepts"
import TabButton from "./components/TabButton"
import "./index.css"


function App() {
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
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>

      </main>
    </div>
  );
}

export default App;
