// plugins/sweetalert.js

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Configuración personalizada de SweetAlert2
const customSwal = Swal.mixin({
  toast: true,
  position: 'center',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast',
    confirmButton: 'custom-confirm-button', // Clase CSS personalizada para el botón de confirmación
  },
  showConfirmButton: true,
  confirmButtonColor: '#B58A37', // Color personalizado para el botón de confirmación (amarillo)
  timer: 1500,
  timerProgressBar: true,
});

export default function ({ app }, inject) {
  inject('swal', Swal);
  inject('toast', customSwal); // Injecta la configuración personalizada de SweetAlert2
}
