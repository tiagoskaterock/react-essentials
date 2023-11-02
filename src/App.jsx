import Header from "./components/Header"
import CoreConcept from "./components/CoreConcept"
import coreConcepts from "./data/coreConcepts"

console.log(coreConcepts)

function App() {
  return (
    <div>
      <Header />
      <main>

        <section id="core-concepts">
          <h2>Core Concepts</h2>          
        </section> 

        <ul>
          {
            coreConcepts.map(
              c => 
              <CoreConcept 
                image={c.image}
                title={c.title}
                description={c.description}
              />                      
            )
          }
        </ul>

      </main>
    </div>
  );
}

export default App;
