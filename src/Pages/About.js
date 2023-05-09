import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";
import Img1 from "../Components/img1.png";
import Img2 from "../Components/img2.jpg";
import Img3 from "../Components/img3.jpg";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">API key</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Rights</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img src={Img1} height="400" width="500" alt="img1" />{" "}
                  <p>I have created an account in this website</p>
                  <a href="https://openweathermap.org">
                    https://openweathermap.org
                  </a>
                  <p>and activated the API key.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src={Img2} height="400" width="400" alt="img2" />{" "}
                  <p>This website made by Akerke.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src={Img3} height="400" width="500" alt="img3" />{" "}
                  <p>
                    © 2022 AccuWeather, Inc. "AccuWeather" and the sun design
                    are registered trademarks of AccuWeather, Inc. All rights
                    reserved.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
