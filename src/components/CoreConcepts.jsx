import coreConcepts from "../data/coreConcepts"
import CoreConcept from "./CoreConcept"

function CoreConcepts() {
	return (
		<ul>
      { coreConcepts.map( c => <CoreConcept {...coreConcepts[c.id]} key={c.id} /> ) }
    </ul>
	)
}

export default CoreConcepts
