import { Component, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { translations } from '../../translations';
import Input from '../input/Input';

export default class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render(): ReactNode {
    return (
      <div
        id="popup"
        className={`popup ${this.props.modalOpened ? 'popups' : null}`}
      >
        <div className="popup__body ">
          <div
            className={`popup__content ${
              this.props.modalOpened ? 'popup__contents' : null
            }`}
          >
            <div className="popup__title">
              {translations.modalTranslations.titleForm}
            </div>
            <div className="popup__text">
              <form noValidate>
                <Input
                  key={uuidv4()}
                  htmlFor={translations.modalTranslations.labelHtmlForName}
                  titleName={translations.titleName}
                  placeholder={
                    translations.modalTranslations.inputPlaceholderName
                  }
                  type={translations.modalTranslations.inputTypeText}
                  name={translations.modalTranslations.inputNameName}
                  value={translations.modalTranslations.inputNameName}
                  id={uuidv4()}
                />
                <Input
                  key={uuidv4()}
                  htmlFor={translations.modalTranslations.labelHtmlForUsername}
                  titleName={translations.titleUsername}
                  placeholder={
                    translations.modalTranslations.inputPlaceholderUsername
                  }
                  type={translations.modalTranslations.inputTypeText}
                  Username={translations.modalTranslations.inputNameUsername}
                  value={translations.modalTranslations.inputNameUsername}
                  id={uuidv4()}
                />
                <Input
                  key={uuidv4()}
                  htmlFor={translations.modalTranslations.labelHtmlForPhone}
                  titleName={translations.titlePhone}
                  placeholder={
                    translations.modalTranslations.inputPlaceholderPhone
                  }
                  type={translations.modalTranslations.inputTypeText}
                  Phone={translations.modalTranslations.inputNamePhone}
                  value={translations.modalTranslations.inputNamePhone}
                  id={uuidv4()}
                />
                <div className="div-modal">
                  <div>
                    <button type="submit">
                      {translations.modalTranslations.formButtonSave}
                    </button>
                  </div>
                  <div>
                    <button type="button" onClick={this.props.modalClosed}>
                      {translations.modalTranslations.formButtonExit}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
