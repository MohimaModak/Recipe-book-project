import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  console.log(signInUser);

  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    let condition =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;

    if (!condition.test(password)) {
      Swal.fire("Password is invalid");
      return;
    }

    const emailCondition = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailCondition.test(email)) {
      Swal.fire("Email is invalid");
      return;
    }

    signInUser(email, password)
      .then((result) => {
        const logInKoraUser = result.user;
        console.log(logInKoraUser);
        Swal.fire("User successfully log-in");
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="relative  text-white">
        <div>
          <img
            src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="object-cover w-full h-[610px] "
          />
        </div>
        <div className="absolute flex justify-center items-center inset-0 text-center">
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl back">
                <form
                  onSubmit={handleLogIn}
                  className="card-body text-white font-semibold lg:grid grid-cols-2"
                >
                  <div className="form-control">
                    <label className="label text-white">
                      <span className="label-text text-white">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      name="email"
                      className="input input-bordered shadow-2xl  px-1 py-1 rounded-md w-full max-w-xs text-white"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      name="password"
                      className="input input-bordered text-white"
                      required
                    />
                  </div>
                  <div className="text-center form-control lg:col-span-2 mt-3">
                    <button className="input input-bordered">Sign-In</button>
                  </div>

                  <div className="flex justify-center items-center text-center form-control lg:col-span-2 font-bold">
                    Sign in with{" "}
                    <span
                      onClick={handleGoogle}
                      className="text-2xl cursor-pointer text-white "
                    >
                      <AiOutlineGoogle></AiOutlineGoogle>
                    </span>
                  </div>

                  <div className="text-center form-control lg:col-span-2 font-bold p-2">
                    <p className="">
                      If you are new please <br />
                      <Link
                        className="underline uppercase text-white"
                        to={"/signup"}
                      >
                        Sign-Up
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
