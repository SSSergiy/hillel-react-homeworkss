import { ErrorMessage } from 'formik';
import { Component } from 'react';
import InputMask from 'react-input-mask';
import { translations } from '../../translations';
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
              onChange={
                this.props.handleChanges
              }
              onBlur={this.props.handleBlur}
              placeholder={this.props.placeholder}
              value={this.props.values}
              mask="+38(999)-999-99-99"
              maskChar={null}
            ></InputMask>
          ) : (
            <input
              className="form-control"
              onChange={
                this.props.handleChanges
              }
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
