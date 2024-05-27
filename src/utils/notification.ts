import { toast, ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ErrorNotifier = (text: string) =>
  toast.error(text, {
    position: 'top-right' as ToastPosition,
    className: 'toast-message',
  });

export const SuccessNotifier = (text: string) =>
  toast.success(text, {
    position: 'top-right' as ToastPosition,
    className: 'toast-message',
  });