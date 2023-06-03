
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { imgUpload } from "../../Api/imgApi";
import { AuthContext } from "../../Provider/AuthProvider";
import  "./register.css";
import { FaSpinner } from 'react-icons/fa';
const Register = () => {
    const {createEmail, updateUser} = useContext(AuthContext)
    const [imageName, setImageName] = useState('Upload Image');
    const [loader, setLoader] = useState(false);
    

    const handleImageChange = image =>{
        setImageName(image.name)
    }
    const handleRegister = (event) =>{
        event.preventDefault()
        setLoader(true)
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0];
        // const users = {
        //     name, 
        //     email, 
        //     password,
        // }
       imgUpload(image).then(data =>{
         const imgSa = data.data.display_url;
    
       
        createEmail(email, password)
        .then(result =>{
            const loggedUser = result.user;
            updateUser(loggedUser, name, imgSa)
            setLoader(false)
            form.reset()
        })
        .catch(err =>{
            console.log(err)
            setLoader(false)
        })
        
        
    })
    
    
        
    }
    
    return (
        <div className="register-parent h-[100vh] bg-orange-500 p-5 bg-opacity-25">
            <form onSubmit={handleRegister} action="" className="rounded-md shadow-md md:w-5/12 box p-5 mx-auto bg-white border border-slate-200 bg-opacity-40 grid gap-5">
                <h1 className="text-center text-4xl text-white font-semibold my-5">Register</h1>
               <input type="name" name="name" className="pl-4 py-3 outline-none text-black" placeholder="Name" required/>
                <input type="email" name="email" placeholder="Type Your Email" className="pl-4 py-3 outline-none text-black" required/>
                <input type="password" name="password" placeholder="Type your Password" className=" pl-4 py-3 outline-none text-black" required/>
                <div className='flex flex-col w-max mx-auto text-center border border-white px-10 py-2 border-dashed '>
                  <label>
                    <input
                      onChange={(event)=>handleImageChange(event.target.files[0])}
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                      {imageName}
                    </div>
                  </label>
                </div>
                <p className="text-white ">Already have a account? <span>please <Link className="text-sky-500" to="/login"> Login</Link></span></p>
                <div className="text-center">
                    {
                        loader? <FaSpinner className="animate-spin text-center mx-auto text-3xl text-red-500"></FaSpinner> : <button className="border border-sky-500 px-10 py-2 text-white font-semibold hover:bg-rose-500 hover:border-black">Register</button>
                    }
                </div>
                
                
            </form>
        </div>
    );
};

export default Register;