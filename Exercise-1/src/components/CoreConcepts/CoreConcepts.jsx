import CoreConcept from '../CoreConcept/CoreConcept.jsx';
import { CORE_CONCEPTS } from '../../data.js';
import Section from '../Section/Section.jsx';

export default function CoreConcepts() {
    return (<Section id="core-concepts" title="Time to get started!"><ul>
        {/* option 1 (print all from the array):
{CORE_CONCEPTS.map((itm) => <CoreConcept title={itm.title} description={itm.description} image={itm.image} />)} 
option 2: (works because props in CoreConcept are with the same name as the props in the array) */}
        {CORE_CONCEPTS.map((itm) => <CoreConcept {...itm} key={itm.title} />)}

        {/* option 1 (print 1 by 1): <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
option 2: <CoreConcept {...CORE_CONCEPTS[0]} /> */}
    </ul>
    </Section>)
}