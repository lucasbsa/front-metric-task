import React from 'react'

import Layout from '../../components/Layout'
import Nav from 'react-bootstrap/Nav'

const NavMetric = () => {


  return (

    <Layout>
          <Nav style={{backgroundColor:'#5D5C6A', marginTop:5, width:'90%', marginLeft:'5%', borderRadius:8}} variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/Metrics/userProgress" style={{color:'white'}}>User</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Metrics/sprintProgress" style={{color:'white'}}>Sprint</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Metrics/teamProgress" style={{color:'white'}}>Teams</Nav.Link>
            </Nav.Item>
          </Nav>
    </Layout>

  );
}

export default NavMetric