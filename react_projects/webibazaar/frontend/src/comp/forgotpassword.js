import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log(email);
    axios
      .post("http://localhost:3009/api/newuser/sendotp", {
        email: email,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 200) {
          navigate("/otp");
        } else {
          alert("Email / Server Error.");
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
                  <h1 className="mb-4 mt-2"> Forget Password </h1>
                </div>
                <div className="mb-4">
                  Email
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="form-control mb-4"
                    type="text"
                  />
                  <div className="d-grid">
                    <button onClick={handleSubmit} className="btn btn-primary btn-lg mb-4">
                      SEND OTP
                    </button>
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

export default ForgetPassword;