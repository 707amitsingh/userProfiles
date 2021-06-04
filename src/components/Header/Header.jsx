import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AddUser from "../AddUser/AddUser";
import Modal from "../Modal/Modal.js";
import "./Header.css";

const Header = () => {
  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Navbar.Brand>Users</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => history.push("/")}>
            <FontAwesomeIcon icon={faHome} /> Home
          </Nav.Link>
        </Nav>
        <Nav>
          <Button
            variant="outline-warning"
            onClick={() => setShow(true)}
          >
            Add User
          </Button>
          <Modal show={show} handleClose={handleClose} title="Add user">
            <AddUser handleClose={handleClose}/>
          </Modal>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
