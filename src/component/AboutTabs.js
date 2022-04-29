import React from 'react'
import { Tabs} from 'react-bootstrap'



const AboutTabs = () => {
    return (
      <div>
       <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Home">
    <Sonnet />
  </Tab>
  <Tab eventKey="profile" title="Profile">
    <Sonnet />
  </Tab>
  <Tab eventKey="contact" title="Contact" >
    <Sonnet />
  </Tab>
</Tabs>
</div>
       
    )
}

export default AboutTabs