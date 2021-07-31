import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import "./style2.css";
const FoodCard = ({ imgad, dishName, recipe, nutrients }) => {
  const [dis, setDis] = useState(false);
  const [disnutrients, setDisnutrients] = useState(false);
  //   Object.keys(nutrients).map((facts, index)=>console.log(facts.label , index))
  // console.log(Object.entries(nutrients))
  return (
    <>
      <Card style={{ width: "18rem", heigth: "22rem" }}>
        <Card.Img
          variant="top"
          src={imgad}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png";
          }}
          style={{
            height: "210px",
            width: "200px",
            objectFit: "cover",
            marginTop: "10px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <Card.Body>
          <Card.Title>{dishName}</Card.Title>
          <Container>
            <Row>
              <Col md={6}>
                <button className="btnsub" onClick={() => setDis(true)}>
                  recepi
                </button>
              </Col>
              <Col md={6}>
                <button
                  className="btnsub"
                  onClick={() => setDisnutrients(true)}
                >
                  Nutrition
                </button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <Modal
        show={dis}
        onHide={() => setDis(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>Recepiiiiii</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup as="ol">
            {recipe.map((item, index) => (
              <ListGroup.Item key={index}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer style={{ marginLeft: "auto", marginRight: "auto" }}>
          <h2>HAPPY COOKING!!!</h2>
        </Modal.Footer>
      </Modal>
      <Modal
        show={disnutrients}
        onHide={() => setDisnutrients(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>NUTRIENTS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Label</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(nutrients).map((facts, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{facts[0]}</td>
                  <td>{`${Math.floor(parseInt(facts[1].quantity))} ${
                    facts[1].unit
                  }`}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FoodCard;
