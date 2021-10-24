import React from "react";

function Login() {
  return (
    <div>
      <div class="containerrrr" data-aos="zoom-in">
        <form class="signUp">
          <h3>Create Your Account</h3>
          <p>Enter the correct credentials</p>
          <div class="space"></div>
          <input
            class="w100"
            type="email"
            placeholder="Email Id"
            reqired
            autocomplete="off"
          />
          <input
            class="leftalign"
            type="password"
            placeholder="Password"
            reqired
          />
          <input
            class="leftalign"
            type="password"
            placeholder=" Verify Password"
            reqired
          />
          <button class="form-btn sx log-in" type="button">
            Log In
          </button>
          <button class="form-btn dx" type="submit">
            Sign Up
          </button>
        </form>
        <form class="signIn">
          <h3>Welcome Back !</h3>
          <p>Please Enter Your Correct Credentials</p>
          <div class="space"></div>
          <input
            class="leftalign"
            type="email"
            placeholder="email Id"
            autocomplete="off"
            reqired
          />
          <input
            class="leftalign"
            type="password"
            placeholder="Password"
            reqired
          />
          <button class="form-btn sx back" type="button">
            Back
          </button>
          <button class="form-btn dx" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
