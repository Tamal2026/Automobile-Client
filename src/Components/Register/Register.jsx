import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [regError, setRegError] = useState('');
    const [regSuccess,setRegSuccess] = useState('');
    
    
    
const handleRegister = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {email,password}
    console.log(user);

    setRegError('');
    setRegSuccess('')
    if(password.length < 6){
      setRegError('Password Should be at least 6 character or longer')
      return;
    }
    else  if (!/[A-Z]/.test(password)) {
      setRegError('Must Have One UpperCase In Password')
      return ;
    }
    else  if (!/[^A-Za-z0-9]/.test(password)) {
      setRegError('Password Should Have One Special Character')
      return ;
    }



    createUser(email,password)
    .then(result =>{
        console.log(result.user);
    })
    .catch(error =>{
        console.error(error);
    })
}
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">Register Now!</h1>
            <p className="py-6">Join the Drive: Register for an Automotive Adventure.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div className="text-center pb-6">
              <p>
                Already Have Account?Please Go To{" "}
                <Link className="font-bold text-blue-600 " to="/login">
                  Login
                </Link>
              </p>
              <div>{regError && <p className="text-red-700">{regError}</p>}</div>
              <div>
                {
                  regSuccess && <p className="text-green-600">{regSuccess}</p>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;