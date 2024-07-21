import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div
        style={{ height: "85vh" }}
        className="container d-flex justify-content-center align-items-center"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
            <div className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
          <p className="mt-3">
            Have account?{" "}
            <Link data-bs-toggle="modal" data-bs-target="#exampleModal" to="/">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Signup;
