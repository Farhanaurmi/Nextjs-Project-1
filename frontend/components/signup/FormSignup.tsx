import Button from "../../node_modules/react-bootstrap/esm/Button";
import Form from "../../node_modules/react-bootstrap/esm/Form";
import React from "react";


import { userSignupProps } from "../../utils/types/reduxTypes";
import { useForm } from "../../node_modules/react-hook-form/dist/useForm";
import { useDispatch } from "../../node_modules/react-redux/es/exports";
import { toast, ToastContainer } from "../../node_modules/react-toastify/dist/index";
import { signupAction, saveUserinfo1Action } from "../../store/users/actions";
import { SignupProps } from "../../utils/types/types";
import { SubmitHandler } from "../../node_modules/react-hook-form/dist/types/fields.d.ts";


const FormSignup = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<SignupProps>();

  const onSubmit: <SignupProps> = async (data) => {
      
    console.log(JSON.stringify(data))
    const request = await fetch(`${API_BASE_URL}/register-user/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (request.status === 200) {
      const response: userSignupProps = await request.json();
      dispatch(signupAction(true));
      dispatch(saveUserinfo1Action(response));
      toast("Signup Successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const response = await request.json();

      toast(`Signup Failed. ${response.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div>
      <ToastContainer containerId="an id" draggable={false} />
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter full name"
            id="full-name"
            required
            {...register("full_name", { required: true })} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" 
          id="email"
          required
          {...register("email", { required: true })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" 
          id="password"
          required
          {...register("password", { required: true })}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormSignup;
