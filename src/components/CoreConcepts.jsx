import React from "react";
import coreConcepts from "../data/coreConcepts.js";
import CoreConcept from "./CoreConcept";

function CoreConcepts() {
  return (
    <ul>
      {Object.values(coreConcepts).map((concept) => (
        <CoreConcept {...concept} key={concept.id} />
      ))}
    </ul>
  );
}

export default CoreConcepts;
