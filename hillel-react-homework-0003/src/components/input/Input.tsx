import { Component } from 'react';
import { translations } from '../../translations';
import { ErrorMessage } from 'formik';
import InputMask from 'react-input-mask';
export default class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <ErrorMessage name={this.props.name} component="span" className="alert alert-danger" />
        <label>
          {this.props.errors[this.props.name] ? this.props.name + this.props.errors[this.props.name] : this.props.name}
          {this.props.name === translations.modalTranslations.inputNamePhone ? (
            <InputMask
              className="form-control"
              name="phone"
              type="tel"
              onChange={(e): void => {
                this.props.handleChanges(e);
              }}
              onBlur={this.props.handleBlur}
              value={this.props.values}
              mask="+38(999)-999-99-99"
              maskChar={null}
            ></InputMask>
          ) : (
            <input
              className="form-control"
              onChange={(e): void => {
                this.props.handleChanges(e);
              }}
              onBlur={this.props.handleBlur}
              placeholder={this.props.placeholder}
              type={this.props.type}
              name={this.props.name}
              value={this.props.values}
            />
          )}
        </label>
      </>
    );
  }
}
