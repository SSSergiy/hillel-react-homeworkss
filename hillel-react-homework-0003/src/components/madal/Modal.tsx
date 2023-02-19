import { Form, Formik } from 'formik';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { translations } from '../../translations';
import { ModalProps } from '../../types/types';
import Input from '../input/Input';
import { validationSchema } from '../validation/validation';
const { modalTranslations } = translations;

export default class Modal extends Component<ModalProps> {
  constructor(props: ModalProps) {
    super(props);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    let idOBJ = uuidv4();
    this.props.addUsers({ ...e, idOBJ });
    this.props.modalClosed();
  };
  initialValues = () => {
    return {
      username: '',
      phone: '',
      name: '',
    };
  };

  validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'errors.name Required';
    }
    if (!values.username) {
      errors.username = 'errors.username Required';
    }
    if (!values.phone) {
      errors.phone = 'errors.phone Required';
    }

    return errors;
  };
  render() {
    return (
      <div id="popup" className={`popup ${this.props.modalOpened ? 'popups' : null}`}>
        <div className="popup__body ">
          <div className={`popup__content ${this.props.modalOpened ? 'popup__contents' : null}`}>
            <div className="popup__title">{modalTranslations.titleForm}</div>
            <div className="popup__text">
              <Formik
                validate={this.validate}
                validateSchema={validationSchema}
                initialValues={{
                  name: '',
                  username: '',
                  phone: '',
                }}
                validateOnBlur
                onSubmit={this.handleSubmit}
              >
                {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
                  <Form onSubmit={handleSubmit}>
                    <Input
                      handleBlur={handleBlur}
                      handleChanges={handleChange}
                      htmlFor={modalTranslations.labelHtmlForName}
                      placeholder={modalTranslations.inputPlaceholderName}
                      type={modalTranslations.inputTypeText}
                      name={modalTranslations.inputNameName}
                      values={values.name}
                      errors={errors}
                      touched={touched}
                    />
                    <Input
                      handleBlur={handleBlur}
                      handleChanges={handleChange}
                      htmlFor={modalTranslations.labelHtmlForUsername}
                      placeholder={modalTranslations.inputPlaceholderUsername}
                      type={modalTranslations.inputTypeText}
                      name={modalTranslations.inputNameUsername}
                      values={values.username}
                      errors={errors}
                      touched={touched}
                    />
                    <Input
                      handleBlur={handleBlur}
                      handleChanges={handleChange}
                      htmlFor={modalTranslations.labelHtmlForPhone}
                      placeholder={modalTranslations.inputPlaceholderPhone}
                      type={modalTranslations.inputTypeText}
                      name={modalTranslations.inputNamePhone}
                      values={values.phone}
                      errors={errors}
                      touched={touched}
                    />
                    <div className="div-modal">
                      <div>
                        <button type="submit">{modalTranslations.formButtonSave}</button>
                      </div>
                      <div>
                        <button type="button" onClick={this.props.modalClosed}>
                          {modalTranslations.formButtonExit}
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
