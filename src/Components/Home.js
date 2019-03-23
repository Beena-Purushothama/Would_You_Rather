import React from 'react';
import UnAnswered from './UnAnswered';
import Answered from './Answered';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default function Home() {
  return (
    <div>
      <Tabs defaultActiveKey="Unanswered" id="uncontrolled-tab-example">
        <Tab eventKey="Unanswered" title="Unanswered Questions">
        {<UnAnswered/>}
        </Tab>
        <Tab eventKey="answered" title="Answered Questions">
        {<Answered/>}
        </Tab>
      </Tabs>
    </div>
  )
}

