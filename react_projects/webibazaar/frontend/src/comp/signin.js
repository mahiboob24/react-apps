import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(email, password);
    axios
      .post("http://localhost:3009/api/newuser/signin", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);

        if (res.data.code === 500) {
          alert("User Not Found");
        }
        if (res.data.code === 404) {
          alert("Password is wrong");
        }
        if (res.data.code === 200) {
          // move to home
          navigate("/productlist");
          localStorage.setItem("TOKEN", res.data.token);
          localStorage.setItem("EMAIL", res.data.email);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container d-flex justify-content-center vh-100 align-items-center">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "400px" }}>
              <div className="card-body">
                <div className="card-title text-center">
                  <h1 className="mb-4"> SIGNIN </h1>
                </div>
                <div className="mb-4">
                  Email
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    className="form-control mb-4"
                    type="email"
                  />
                  Password
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    className="form-control mb-4"
                    type="password"
                  />
                  <div className="d-grid mb-4">
                    <button
                      onClick={handleSubmit}
                      className="btn btn-primary btn-lg mb-4"
                    >
                      
                      SUBMIT
                    </button>
                  </div>
                  <div className=" text-center mt-4">
                    <span className=" text-muted">Already Have Account?</span>
                    <Link to={"/"}>SIGN UP </Link>
                  </div>
                  <div className=" text-center mt-4">
                    <Link to={"/forgotpassword"}> Forget Password </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;