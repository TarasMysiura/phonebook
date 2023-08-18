import axios from "axios";

export const toastConfig = {
  position: 'top-center',
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
  style: {
    fontSize: '16px',
  },
};

export const $instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
