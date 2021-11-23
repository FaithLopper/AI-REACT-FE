import React from "react";

function SigninScreen() {
  return (
    <>
      <div>
        <div className="layer" />
        <main className="page-center">
          <article className="sign-up">
            <h1 className="sign-up__title">Welcome back!</h1>
            <p className="sign-up__subtitle">
              Sign in to your account to continue
            </p>
            <form className="sign-up-form form" action method>
              <label className="form-label-wrapper">
                <p className="form-label">Email</p>
                <input
                  className="form-input"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </label>
              <label className="form-label-wrapper">
                <p className="form-label">Password</p>
                <input
                  className="form-input"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </label>
              <a className="link-info forget-link" href="##">
                Forgot your password?
              </a>
              <label className="form-checkbox-wrapper">
                <input className="form-checkbox" type="checkbox" required />
                <span className="form-checkbox-label">
                  Remember me next time
                </span>
              </label>
              <button className="form-btn primary-default-btn transparent-btn">
                Sign in
              </button>
            </form>
          </article>
        </main>
      </div>
    </>
  );
}

export default SigninScreen;
