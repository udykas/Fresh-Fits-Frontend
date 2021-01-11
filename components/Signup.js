import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';

class Signup extends Component {
  render() {
    return (
      <Form>
        <fieldset>
          <h2>Sign up for an account</h2>
        </fieldset>
      </Form>
    );
  }
}

export default Signup;