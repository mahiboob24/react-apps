import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewSubmit() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(otp, password);
    axios
      .post("http://localhost:3009/api/newuser/submitotp", {
        otp: otp,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 200) {
          navigate("/signin");
          alert("Password Updated.");
        } else {
          alert("server err / wrong OTP");
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
            <div className="card ">
              <div className="card-body">
                <h1 className="center"> FORGET PASSWORD </h1>

                <div className="outcard  form-group">
                  OTP
                  <input
                    style={{ marginBottom: "15px" }}
                    onChange={(e) => {
                      setOtp(e.target.value);
                    }}
                    value={otp}
                    className="inputs form-control"
                    type="text"
                  />
                  New Password
                  <input
                    style={{ marginBottom: "20px" }}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="inputs form-control"
                    type="text"
                  />
                  <button onClick={handleSubmit} className="btns form-control">
                    
                    CHANGE PASSWORD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewSubmit;