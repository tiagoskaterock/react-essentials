import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

import "./index.css"

function App() {  

  return (
    <div>

      {/* React Rssentials title with phrases */}
      <Header />
      
      <main>
          
        {/* Card with images */}
        <CoreConcepts />

        {/* Examples with code */}
        <Examples />        

      </main>
    </div>
  );
}

export default App;
