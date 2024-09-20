import { useEffect, useState } from "react";
import { getUsersById } from "../../services/userServices.js";

const Users = () => {
  const [users, setUsers] = useState([]);

  // Usar getItem para obtener el ID del localStorage
  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetchUsers = async () => {
      if (id) {
        // Verificar que el ID existe
        try {
          const userList = await getUsersById(id);
          console.log(userList);
          setUsers(userList);
        } catch (error) {
          console.error("Error al obtener el usuario:", error);
        }
      } else {
        console.error("No se encontró un ID en localStorage.");
      }
    };

    fetchUsers();
  }, [id]);

  // Si no hay usuarios cargados, puedes agregar un mensaje de carga o de error
  if (users.length === 0) {
    return <p>Cargando perfil...</p>; // Mostrar un mensaje mientras carga
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>
        <strong>Nombre:</strong> {users.name}
      </p>
      <p>
        <strong>Email:</strong> {users.email}
      </p>

      {/* Verificar si hay reservas */}
      {users.reserves ? (
        <div>
          <h2>Reservas:</h2>
          <p>
            <strong>Fecha:</strong> {users.reserves.fecha}
          </p>
          <p>
            <strong>Hora:</strong> {users.reserves.hora}
          </p>
          <p>
            <strong>Mesa:</strong> {users.reserves.mesa}
          </p>
        </div>
      ) : (
        <p>No hay reservas disponibles.</p>
      )}
    </div>
  );
};

export default Users;
