import axios from "axios"; // O fetch si prefieres

const API_URL = import.meta.env.VITE_API_URL; // URL de tu backend
console.log(API_URL);

// Función para obtener todas las reservas
export const getReservations = async () => {
  try {
    const response = await axios.get(`${API_URL}reserves`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las reservas:", error);
    throw error;
  }
};

// Función para crear una nueva reserva
export const createReservation = async (reservationData) => {
  try {
    const response = await axios.post(`${API_URL}reserves`, reservationData);
    return response.data;
  } catch (error) {
    console.error("Error al crear la reserva:", error);
    throw error;
  }
};

export const deleteReservation = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}reserves/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar la reserva:", error);
    throw error;
  }
};

export const updateReservation = async (id, reservationData) => {
  try {
    const response = await axios.put(
      `${API_URL}reserves/${id}`,
      reservationData
    );
    return response.data;
  } catch (error) {
    console.error("Error al actualizar la reserva:", error);
    throw error;
  }
};
