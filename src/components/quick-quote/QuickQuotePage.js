import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as peopleActions from '../../actions/peopleActions';
import * as ratingsActions from '../../actions/ratingsActions';
import {store} from '../../index';
import * as PropTypes from 'react/lib/ReactPropTypes';
import {
  Button, ControlLabel, DropdownButton, Form, FormControl, FormGroup, InputGroup,
  MenuItem
} from 'react-bootstrap';
import {countryCodes} from "../../common/countryCodes";



class QuickQuotePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.getValidationStateRequired = this.getValidationStateRequired.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleCountryCodeSelect = this.handleCountryCodeSelect.bind(this);

    this.countryCodes = countryCodes;

    this.state = {
      firstName: '',
      firstNameTouched: null,
      lastName: '',
      lastNameTouched: null,
      email: '',
      countryCode:countryCodes[0].dial_code
    };
  }

  componentDidMount() {
    store.dispatch(peopleActions.loadPeople());
  }

  getValidationStateRequired(input) {
    const inputTouched = `${input}Touched`;
    if(this.state[inputTouched]) {
      const length = this.state[input].length;
      return length > 0 ? 'success':'error';
    }
    else {
      return null;
    }
  }

  getValidationStateEmail(input) {
    const inputTouched = `${input}Touched`;
    if(this.state[inputTouched]) {
      const value = this.state[input];
      const emailPattern = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$");
      return emailPattern.test(value) ? 'success':'error';
    }
    else {
      return null;
    }
  }

  handleChange(e) {
    const id = e.target.id;
    this.setState(Object.assign({}, this.state, { [id]: e.target.value }));
  }

  handleCountryCodeSelect(e) {
    this.setState(Object.assign({}, this.state, { countryCode: e.target.text }));
  }

  handleFocus(e) {
    const idTouched = `${e.target.id}Touched`;
    if(!this.state[idTouched]) {
      this.setState(Object.assign({}, this.state, { [idTouched]: true }));
    }
  }

  render() {
    const countryCodes = this.countryCodes.map((countryCode) => {
      return <MenuItem key={`${countryCode.name}`} onClick={this.handleCountryCodeSelect}>{countryCode.dial_code}</MenuItem>;
    });
    return (
      <div className="col-sm-12">
        <Form>
          <div className="col-sm-6">
            <FormGroup
              controlId="firstName"
              validationState={this.getValidationStateRequired('firstName')}>
              <ControlLabel className="required">First Name</ControlLabel>
              <FormControl
                type="text"
                value={this.state.firstName}
                placeholder="First Name"
                onFocus={this.handleFocus}
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
            </FormGroup>
          </div>

          <div className="col-sm-6">
            <FormGroup
              controlId="lastName"
              validationState={this.getValidationStateRequired('lastName')}>
              <ControlLabel className="required">Last Name</ControlLabel>
              <FormControl
                type="text"
                value={this.state.lastName}
                placeholder="Last Name"
                onFocus={this.handleFocus}
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
            </FormGroup>
          </div>

          <div className="col-sm-12">
            <FormGroup
              controlId="email"
              validationState={this.getValidationStateEmail('email')}>
              <ControlLabel>Email</ControlLabel>
              <FormControl
                type="text"
                value={this.state.email}
                placeholder="Email"
                onFocus={this.handleFocus}
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
            </FormGroup>
          </div>

          <div className="col-sm-12">
            <FormGroup>
              <ControlLabel>Telephone / Mobile</ControlLabel>
              <InputGroup>
                <DropdownButton
                  componentClass={InputGroup.Button}
                  id="input-dropdown-addon"
                  title={this.state.countryCode}>
                  {countryCodes}
                </DropdownButton>
                <FormControl type="text" />
              </InputGroup>
            </FormGroup>
          </div>

          <Button type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

QuickQuotePage.propTypes = {
  searchFilter: PropTypes.string,
  people: PropTypes.array.isRequired,
  planets: PropTypes.array.isRequired,
  ratings: PropTypes.array.isRequired,
  peopleActions: PropTypes.object.isRequired,
  ratingsActions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    people: state.people,
    planets: state.planets,
    ratings:state.ratings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    peopleActions: bindActionCreators(peopleActions, dispatch),
    ratingsActions: bindActionCreators(ratingsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickQuotePage);
