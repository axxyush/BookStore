import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit(onSubmit)} className="p-3">
              <div className=" mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-danger">This field is required</span>
                )}
                <div id="emailHelp" className="form-text">
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
                  id="exampleInputPassword1"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <p className="mt-3">
                Not registered? <a href="/signup">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
