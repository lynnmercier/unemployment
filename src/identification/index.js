import React, {Component} from 'react';
import Document from './document';
import LicenseNumberTextField from './license-number-text-field';
import FirstNameTextField from './first-name-text-field';
import LastNameTextField from './last-name-text-field';
import AddressTextField from './address-text-field';
import '../typography.scss';
import './index.scss';

class Identification extends Component {
  render() {
    return (
      <div className="identification">
        <div className="identification__title mdc-typography--headline6">Identification</div>
        <div className="identification__paragraph mdc-typography--body2">What identification documents have you brought with you?</div>
        <Document/>
        <Document/>
        <Document/>
        <Document/>
        <div className="identification__document-name  mdc-typography--headline6">Divers License</div>
        <LicenseNumberTextField/>
        <div className="identification__name-form">
          <FirstNameTextField/>
          <LastNameTextField/>
        </div>
        <AddressTextField/>
      </div>
    );
  }
}

export default Identification;