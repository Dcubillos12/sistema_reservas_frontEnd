import { Button, Form } from "react-bootstrap";

const FormUsers = ({ name, email, password, onChange, onsubmit }) => {
  return (
    <>
      <Form onSubmit={onsubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Nombre"
            value={name || ""}  
            onChange={onChange}
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={onChange}
            required
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Crear usuario
        </Button>
      </Form>
    </>
  );
};

export default FormUsers;
