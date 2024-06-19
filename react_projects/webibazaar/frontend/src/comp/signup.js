import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Signup() {  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(email, password);
    axios
      .post("http://localhost:3009/api/newuser/signup", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 200) {
          alert("Signup success.");
          navigate("/signin");
        } else {
          alert("Error.");
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
                  <h1 className="mb-4 mt-2"> SIGNUP </h1>
                </div>
                <div className="">
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
                  <div className="d-grid">
                    <button
                      onClick={handleSubmit}
                      className="btn btn-primary btn-lg mb-4"
                    >
                      SUBMIT
                    </button>
                  </div>
                  <div className=" text-center mt-4">
                    <span className=" text-muted">Already Have Account?</span>
                    <Link to={"/signin"}> SIGN IN </Link>
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

export default Signup;