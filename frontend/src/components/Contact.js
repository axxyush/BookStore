import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
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
        className="container d-flex flex-column justify-content-center align-items-center"
      >
        <h1>
          <b className="m-4">Contact us</b>
        </h1>
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
              Message
            </label>
            <textarea
              type="message"
              className="form-control"
              rows={3}
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
