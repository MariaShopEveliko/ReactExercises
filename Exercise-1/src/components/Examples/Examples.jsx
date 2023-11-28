import { useState } from 'react';
import { EXAMPLES } from '../../data.js';
import Section from '../Section/Section.jsx';
import Tabs from '../Tabs/Tabs.jsx';
import TabButton from '../TabButton/TabButton.jsx';
import './Examples.css'

export default function Examples() {
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

    return (<Section id="examples" title="Examples">
        <Tabs 
        ButtonsWrp ="menu" //we can use custom components as well buttonsWrp={Section}
        buttons={<>
            <TabButton onClick={() => handleBtnClick('components')} isSelected={selectedTopic === 'components'}>Components</TabButton>
            <TabButton onClick={() => handleBtnClick('jsx')} isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
            <TabButton onClick={() => handleBtnClick('props')} isSelected={selectedTopic === 'props'}>Props</TabButton>
            <TabButton onClick={() => handleBtnClick('state')} isSelected={selectedTopic === 'state'}>State</TabButton>
        </>}>
            <div id="tab-content">
                {tabContent}
            </div>
        </Tabs>
    </Section>)
}