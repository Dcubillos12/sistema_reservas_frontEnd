import { Button, Form } from "react-bootstrap";

const FormReserva = ({ fecha, hora, mesa, onChange, onsubmit, onClose }) => {
  return (
    <Form onSubmit={onsubmit}>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Fecha</Form.Label>
        <Form.Control
          type="date"
          value={fecha}
          onChange={onChange}
          name="fecha"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicHora">
        <Form.Label>hora</Form.Label>
        <Form.Control
          type="time"
          value={hora}
          onChange={onChange}
          name="hora"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicHora">
        <Form.Label>Mesa</Form.Label>
        <Form.Control
          type="string"
          value={mesa}
          placeholder="mesa"
          onChange={onChange}
          name="mesa"
        />
      </Form.Group>
      <Button variant="primary" type="submit">Reservar</Button>
      <Button variant="danger" onClick={onClose}>
        Cancelar
      </Button>
    </Form>
  );
};

export default FormReserva;
