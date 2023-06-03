
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import  "./register.css";
import { FaSpinner } from 'react-icons/fa';

const Login = () => {
    const {loginUser} = useContext(AuthContext)
  
    const [loader, setLoader] = useState(false);
    

    
    const handleRegister = (event) =>{
        event.preventDefault()
        setLoader(true)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // const users = {
        //     name, 
        //     email, 
        //     password,
        // }
       
    
       
        loginUser(email, password)
        .then(result =>{
            console.log(result)
            setLoader(false)
            form.reset()
        })
        .catch(err =>{
            console.log(err)
            setLoader(false)
        })
        
        
    }
    
    
        
    
    return (
        <div>
            <div className="register-parent h-[100vh] bg-orange-500 p-5 bg-opacity-25">
            <form onSubmit={handleRegister} action="" className="rounded-md shadow-md md:w-5/12 box p-5 mx-auto bg-white border border-slate-200 bg-opacity-40 grid gap-5">
                <h1 className="text-center text-4xl text-white font-semibold my-5">Login</h1>
              
                <input type="email" name="email" placeholder="Type Your Email" className="pl-4 py-3 outline-none text-black" required/>
                <input type="password" name="password" placeholder="Type your Password" className=" pl-4 py-3 outline-none text-black" required/>
               
                <p className="text-white ">Dont have account? <span>please <Link className="text-sky-500" to="/register"> Register</Link></span></p>
                <div className="text-center">
                    {
                        loader? <FaSpinner className="animate-spin text-center mx-auto text-3xl text-red-500"></FaSpinner> : <button className="border border-sky-500 px-10 py-2 text-white font-semibold hover:bg-rose-500 hover:border-black">Login</button>
                    }
                </div>
                
                
            </form>
        </div>
        </div>
    );
};

export default Login;