import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormUsers from "./users/components/FormUsers";
import { createUser, loginUser } from "../services/userServices.js";
import FormLogin from "./users/components/FormLogin.jsx";

const NavBar = () => {
  const [login, setLogin] = useState(false);
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);
  const [intro, setIntro] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    edad: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await createUser(formData);
      setUsers([...users, newUser]);
      setFormData({
        name: "",
        email: "",
        edad: "",
      });
      setLogin(true);
      handleClose();
    } catch (error) {
      console.error("Error al crear el usuario:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loggedInUser = await loginUser({
        email: formData.email,
        password: formData.password,
      });
      console.log("Usuario logueado:", loggedInUser);
      setLogin(true); // Actualizar el estado a logueado
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      handleClose(); // Cerrar modal tras login exitoso
    } catch (error) {
      console.error("Error en el login:", error);
      alert("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleIntro = () => setIntro(!intro);

  const handleLogout = () => {
    setLogin(false);
    localStorage.removeItem(" ");
    return <Navigate to="/" />;
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" className="navbar-brand">
          <h3 >Home</h3>
        </Link>
        {login ? (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/reservas" className="navbar-brand">Reservas</Link>
              </Nav>
              <Nav className="me-auto">
                <Link to="/profile" className="navbar-brand">Profile</Link>
              </Nav>
            </Navbar.Collapse>
            
            <Button variant="danger" onClick={handleLogout}>
              Salir
            </Button>
          </>
        ) : (
          <>
            <Button variant="primary" onClick={handleShow}>
              Login
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Button variant="primary" onClick={handleIntro}>
                  Resgitrarse
                </Button>
                <Button variant="secondary" onClick={handleIntro}>
                  Login
                </Button>
              </Modal.Header>

              {intro ? (
                <Modal.Body>
                  <FormUsers
                    name={formData.name}
                    email={formData.email}
                    password={formData.password}
                    onChange={handleInputChange}
                    onsubmit={handleSubmit}
                  />
                </Modal.Body>
              ) : (
                <Modal.Body>
                  <FormLogin
                    email={formData.email}
                    password={formData.password}
                    onChange={handleInputChange}
                    onSubmit={handleLogin}
                  />
                </Modal.Body>
              )}
            </Modal>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
