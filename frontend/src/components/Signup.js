import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://bookstore-ucwf.onrender.com/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Sign up successfull");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error : User already exists");
        }
      });
  };
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
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
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
