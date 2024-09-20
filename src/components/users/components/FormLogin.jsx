import { Button, Form } from "react-bootstrap";

const FormLogin = ({ email, password, onSubmit, onChange }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Enter password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <Button type="submit" className="mt-3">
        Ingresar
      </Button>
    </Form>
  );
};
export default FormLogin;
