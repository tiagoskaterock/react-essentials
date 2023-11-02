import Header from "./components/Header"
import CoreConcepts from "./components/CoreConcepts"
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


      </main>
    </div>
  );
}

export default App;
