import React from "react";
import { Card, ListGroupItem } from "react-bootstrap";

function About(props) {
    return (
       <Card>
            <Card.Title>About</Card.Title>
            <Card.Subtitle>Student: James Bilik</Card.Subtitle>
            <ListGroupItem>Student ID: 155500192</ListGroupItem>
            <ListGroupItem>Date: </ListGroupItem>
            <ListGroupItem>Project: WEB Assignment 3</ListGroupItem>
            <ListGroupItem>
                4th Semester Student at Seneca in Computer Programming and Analysis.
                Seeking internships to better expand my knowledge in Web development.
            </ListGroupItem>
        </Card>
    );
}

export default About;