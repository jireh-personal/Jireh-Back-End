import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input, FormGroup, Label, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import Navigation from '../../components/layouts/navigation';


export default class Dashboard extends Component{
  render(){
    return(
      <>
      <Navigation />
      <Container fluid className="bg-light p-3">
        <Row>
          <Col>
            <Card>
              <Card.Body>The big brown fox jumps over the lazy dog.</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>Jireh Revilla Macayaon</Card.Body>
            </Card>
          </Col>
          <Col>
            <h5>Whoa!!</h5>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md="6" lg="6" sm="12">
            <Card>
              <Card.Header>This is title</Card.Header>
              <Card.Body>This is body</Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="6" sm="12">
            <Card>
              <Card.Header>This is title 2</Card.Header>
              <Card.Body>This is body 2</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}
