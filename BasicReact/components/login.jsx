import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form className="w-25 mx-auto border border-primary border-2 rounded-end p-3">
  <div className="mb-3 w-50 mx-auto ">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3 w-50 mx-auto">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
};

export default Login;
