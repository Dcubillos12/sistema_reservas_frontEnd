import axios from 'axios'; // Puedes usar fetch si prefieres

const API_URL = import.meta.env.VITE_API_URL; // URL de tu backend

// Función para obtener la lista de usuarios
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}users`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    throw error;
  }
};
export const getUsersById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    throw error;
  }
}

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}users/login`, userData);
    const {_id} = response.data;
    localStorage.setItem('id', _id);
    return response.data;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
}

// Función para crear un nuevo usuario
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}users`, userData);
    return response.data;
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    throw error;
  }
};
