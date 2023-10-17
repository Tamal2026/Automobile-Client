import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, Navigate } from "react-router-dom";


const Login = () => {

const auth = getAuth(app);
const { user,signIn } = useContext(AuthContext);
const [logError, setlogError] = useState("");
const [logSuccess, setLogSuccess] = useState("");

const handleLogin = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    setLogSuccess("");
    setlogError("");

    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        setLogSuccess("logged in SucccessFully");
      
      })
      .catch((error) => {
        console.error(error);
        setlogError("Your Email and password is not correct");
      });
  };
  const googleProvider = new GoogleAuthProvider();
  const handlegoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
       
      })
      .catch(error =>{
        console.error(error);
      });
  };

  if (user) {
    return <Navigate to="/"></Navigate>;
  }


    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-white">Login now!</h1>
      <p className="py-6">AutoAccess: Your Key to a Seamless Experience.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div>
        <div className="mt-4  items-center justify-evenly">
              <p>Sign In With:</p>
              <div>
                <button
                  onClick={handlegoogleSignIn}
                  className="mt-2 bg-red-500 text-white px-2 py-1 rounded-lg"
                >
                  Google
                </button>
              </div>
            </div>
        </div>
        <div className="text-center mb-4">
            <p>
              New Here ? Please Go To{" "}
              <Link className="font-bold text-yellow-500" to="/register">
                Register
              </Link>
            </p>
            {logError && <p className="text-red-700">{logError}</p>}
            {logSuccess && <p className="text-green-600">{logSuccess}</p>}
          </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;