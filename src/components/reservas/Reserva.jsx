import { useState } from "react";
import { Button, Modal, Spinner, Table } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";
import FormReserva from "./components/FormReserva";
import {
  createReservation,
  deleteReservation,
  getReservations,
} from "../../services/reservasService";

const Reserva = () => {
  const [reservas, setReservas] = useState([]);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    fecha: "",
    hora: "",
    mesa: "",
  });
  useState(() => {
    const fetchReservas = async () => {
      try {
        const reservationList = await getReservations();
        setReservas(reservationList);
      } catch (error) {
        console.error("Error al obtener la lista de reservas:", error);
      }
    };
    fetchReservas();
  }, []);

  const handleReservaSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await createReservation(formData);
      setReservas([...reservas, newUser]);
      setFormData({
        fecha: "",
        hora: "",
        mesa: "",
      });
      setShow(false);
    } catch (error) {
      console.error("Error al crear el reserva:", error);
    }
  };

  const handleReservaChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDelete = async (id) => {
    try {
      await deleteReservation(id); // Eliminar reserva por id
      // Filtrar las reservas, eliminando la que coincida con el id eliminado
      setReservas(reservas.filter((reserva) => reserva._id !== id));
    } catch (error) {
      console.error("Error al eliminar la reserva:", error);
    }
  };

  return (
    <>
      <h1>Reservas</h1>
      {reservas.length === 0 ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden mb-4">Loading...</span>
        </Spinner>
      ) : (
        <Table striped="columns">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Mesa</th>
              <th>Editar</th>
            </tr>
          </thead>
          {reservas.map((reserva) => (
            <tbody key={reserva.id}>
              <tr>
                <td>{reserva.fecha}</td>
                <td>{reserva.hora}</td>
                <td>{reserva.mesa}</td>
                <td>
                  <Pencil
                    style={{ cursor: "pointer", marginRight: "10px" }}
                    onClick={() => console.log("Edit clicked")}
                  />
                  <Trash
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(reserva._id)}
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      )}
      <div>
        <Button variant="success" onClick={() => setShow(true)}>
          Crear Reserva
        </Button>
      </div>
      {show && (
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Body>
            <FormReserva
              fecha={formData.fecha}
              hora={formData.hora}
              mesa={formData.mesa}
              onChange={handleReservaChange}
              onsubmit={handleReservaSubmit}
              onClose={() => setShow(false)}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default Reserva;
