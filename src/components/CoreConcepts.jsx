import React from "react";
import coreConcepts from "../data/coreConcepts.js";
import CoreConcept from "./CoreConcept";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2> 
      <ul>
        {Object.values(coreConcepts).map((concept) => (
          <CoreConcept {...concept} key={concept.id} />
        ))}
      </ul>
    </section> 
  );
}

export default CoreConcepts;
