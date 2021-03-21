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
        pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
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
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const [values, errors, handleChange] = useForm({ formData, formValue });
  console.log("values = ", values);
  return (
    <div className="employee-form">
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            {errors.name && errors.errorMessage}
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            {errors.email && errors.errorMessage}
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            {errors.confirmPassword && errors.errorMessage}
          </Form.Text>
        </Form.Group>
        <Button disabled={errors.isInValidForm} variant="primary">
          Submit
        </Button>{" "}
      </Form>
    </div>
  );
};

export default Employee;
