export const Dashboard = () => {
  return (
    <>
      <div
        className="modal  position-relative d-block bg-body-secondary  "
        tabIndex="-1"
        role="dialog"
        id="modalSignin"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header px-5 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-4">Sign up for free</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body p-5 pt-0">
              <form className="">
                <div className="form">
                  <input
                    type="email"
                    className="form-control rounded-3"
                    id="floatingInput"
                    placeholder="Email address"
                  />
                  <label htmlFor="floatingInput"></label>
                </div>
                <div className="form ">
                  <input
                    type="password"
                    className="form-control rounded-3"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword"></label>
                </div>
                <button
                  className="w-100 mb-2 btn btn-sm rounded-3 btn-primary"
                  type="submit"
                >
                  Sign up
                </button>
                <hr className="" />
                <button
                  className="w-100  mb-2 btn btn-outline-secondary rounded-3"
                  type="submit"
                >
                  <svg className="bi me-1" width="16" height="16">
                    <use xlinkHref="#twitter"></use>
                  </svg>
                  Sign up with Twitter
                </button>
                <button
                  className="w-100  mb-2 btn btn-outline-primary rounded-3"
                  type="submit"
                >
                  <svg className="bi me-1" width="16" height="16">
                    <use xlinkHref="#facebook"></use>
                  </svg>
                  Sign up with Facebook
                </button>
                <button
                  className="w-100  mb-2 btn btn-outline-secondary rounded-3"
                  type="submit"
                >
                  <svg className="bi me-1" width="16" height="16">
                    <use xlinkHref="#github"></use>
                  </svg>
                  Sign up with GitHub
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
