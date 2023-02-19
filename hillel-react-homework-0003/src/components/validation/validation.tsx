// // import { Formik, useFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  username: Yup.string().required('username is required'),
  phone: Yup.string().min(12, 'phone must be at least 12 characters').required('phone is required'),
});
