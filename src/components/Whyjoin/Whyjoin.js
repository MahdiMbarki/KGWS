import './Whyjoin.css';
import { Row, Col, Tab, Nav } from 'react-bootstrap';
import React from 'react';
import * as Iconsim from "react-icons/im";
import * as Iconsmd from "react-icons/md";
import * as Iconsfa from "react-icons/fa";
import * as Iconsio from "react-icons/io";
import { data } from "../Common";

function Whyjoin() {
  let arr = [];
  let iconarr = []
  for (let j = 0; j < data.branches.content.length; j++) {
    arr.push(data.branches.content[j].icon);
    if (data.branches.content[j].icon.slice(0, 2) === "Md") {
      iconarr.push(Iconsmd[arr[j]]);
    }
    else if (data.branches.content[j].icon.slice(0, 2) === "Io") {
      iconarr.push(Iconsio[arr[j]]);
    }
    else if (data.branches.content[j].icon.slice(0, 2) === "Im") {
      iconarr.push(Iconsim[arr[j]]);
    }

    else if (data.branches.content[j].icon.slice(0, 2) === "Fa") {
      iconarr.push(Iconsfa[arr[j]]);
    }
    else return

  }


  return (



    <div id="whyjoin" >
      <div className="nine">
        <h1>Pourquoi Nous Choisir<span>Differentes Branches</span></h1>
      </div>

      <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
        <Row className='whyjoincontainer'>
          <Col >
            <Nav variant="pills" className="flex-column">
              <h1 className='navTitle'> {data.branches.title}</h1>
              {data ? data.branches.content.map((d, i) => (
                <Nav.Item key={`${d}-${i}`}>
                  <Nav.Link eventKey={i}><span className='menuIcon' > {React.createElement(iconarr[i])} </span> {d.button}  </Nav.Link>
                </Nav.Item>

              )) : "Loading..."}
            </Nav>
          </Col>

          <Col className='ImgTxtContainer'>
            <Tab.Content>
              {data ? data.branches.content.map((d, i) => (
                <Tab.Pane key={`${d}-${i}`} eventKey={i}>
                  <img className='whyjoinimg' src={d.image} alt="kompar" />
                  <p className='whyjoinText'>
                    {d.text}
                  </p>
                </Tab.Pane>

              )) : "loading..."}
            </Tab.Content>
          </Col>


        </Row>
      </Tab.Container>




    </div >


  );
}
export default Whyjoin;