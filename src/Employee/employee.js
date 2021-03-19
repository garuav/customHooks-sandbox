import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import useForm from "../utils/customHooks/useForm";

const Employee = () => {
  const formData = {
    name: {
      validators: {
        required: true
      }
    },
    email: {
      validators: {
        required: true,
        pattern:
          '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/'
      }
    },
    password: {
      validators: {
        required: true
      }
    },
    confirmPassword: {
      validators: {
        required: true
      }
    }
  };
  const formValue = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const { values, setFormData } = useForm({ formData, formValue });
  return (
    <div className="employee-form">
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Button variant="primary">Submit</Button>{" "}
      </Form>
    </div>
  );
};

export default Employee;
