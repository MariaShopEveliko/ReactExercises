import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  let [selectedTopic, setSelectedTopic] = useState();

  let tabContent = !selectedTopic
    ? <p>Please select a topic</p>
    : <div>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
    </div>;

  function handleBtnClick(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {/* option 1 (print all from the array):
              {CORE_CONCEPTS.map((itm) => <CoreConcept title={itm.title} description={itm.description} image={itm.image} />)} 
              option 2: (works because props in CoreConcept are with the same name as the props in the array) */}
            {CORE_CONCEPTS.map((itm) => <CoreConcept {...itm} key={itm.title} />)}

            {/* option 1 (print 1 by 1): <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            option 2: <CoreConcept {...CORE_CONCEPTS[0]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onBtnClick={() => handleBtnClick('components')} isSelected={selectedTopic === 'components'}>Components</TabButton>
            <TabButton onBtnClick={() => handleBtnClick('jsx')} isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
            <TabButton onBtnClick={() => handleBtnClick('props')} isSelected={selectedTopic === 'props'}>Props</TabButton>
            <TabButton onBtnClick={() => handleBtnClick('state')} isSelected={selectedTopic === 'state'}>State</TabButton>
          </menu>
          <div id="tab-content">
            {tabContent}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;