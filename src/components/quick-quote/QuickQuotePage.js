import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as peopleActions from '../../actions/peopleActions';
import * as ratingsActions from '../../actions/ratingsActions';
import {store} from '../../index';
import * as PropTypes from 'react/lib/ReactPropTypes';
import {Button, Checkbox, Col, Form, FormControl, FormGroup} from 'react-bootstrap';



class QuickQuotePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    store.dispatch(peopleActions.loadPeople());
  }

  render() {
    const ControlLabel = 'quick-quote';
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>
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
