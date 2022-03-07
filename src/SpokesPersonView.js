import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import spokesPersonsJson from "./data/spokesperson.json";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import VoterView from "./component/VoterView";

function SpokesPersonView() {
  let [spokesPersons, setCandidates] = useState([]);

  useEffect(() => {
    setCandidates(spokesPersonsJson);
  }, []);

  function incrementVoteCount(spokesPersonId) {
    spokesPersons = spokesPersons.map((spokeperson) => {
      if (spokeperson._id === spokesPersonId) {
        spokeperson.votes = spokeperson.votes + 1;
      }
      return spokeperson;
    });
    setCandidates(spokesPersons);
  }

  return (
      <Container className="app">
        <Row>
          {spokesPersons.map((spokeperson) => {
            return (
                <Col md={4}>
                  <VoterView
                      candidate={spokeperson}
                      incrementVoteCount={(spokesPersonId) => incrementVoteCount(spokesPersonId)}
                  />
                </Col>
            );
          })}
        </Row>
      </Container>
  );
}
export default SpokesPersonView;