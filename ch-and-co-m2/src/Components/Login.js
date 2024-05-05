import { useState } from 'react';
import {ReactComponent as GraphicSVG} from '../SVGs/sign-up-graphic.svg';

function Login(props) {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    const [password, setPassword] = useState("");

    const handleMailChange = (e) => {
		setEmail(e.target.value);
	};

    const handlePassChange = (e) => {
		setPassword(e.target.value);
	};

    const handleLogin = (e) => {
		e.preventDefault();
        if(email === "donor@gmail.com" && password === "donor") {
            props.setIsLoggedin(true);
            props.setUserType("donor");
            setError(false);
            props.setPage("donations");
        }
        else if(email === "teacher@gmail.com" && password === "teacher") {
            props.setIsLoggedin(true);
            props.setUserType("teacher");
            setError(false);
            props.setPage("donations");
        }
        else if(email === "doctor@gmail.com" && password === "doctor") {
            props.setIsLoggedin(true);
            props.setUserType("doctor");
            setError(false);
            props.setPage("donations");
        }
        else if(email === "admin@gmail.com" && password === "admin") {
            props.setIsLoggedin(true);
            props.setUserType("admin");
            setError(false);
        }
        else if(email === "organization@gmail.com" && password === "organization") {
            props.setIsLoggedin(true);
            props.setUserType("organization");
            setError(false);
        }
        else {
            props.setIsLoggedin(false);
            setError(true);
        }
	};
    
    return(
        <div className='flex justify-center items-center gap-24 h-screen -mb-8 -mt-24'>
            <div className="shrink-0 w-[550px]">
                <GraphicSVG className="w-full" />
            </div>
            <div className='flex flex-col w-[500px] bg-white shadow-md rounded-lg gap-4 p-8'>
                <h2 className='text-center text-2xl font-medium mb-4'>
                    Welcome to donate<span className='font-sans'>لي</span>
                </h2>
                <form>
                    <label className='text-base font-medium'>E-mail</label>
                    <input type="email" value={email} name="name" placeholder="Type here..." onChange={handleMailChange}
                        className="rounded-md px-2 py-1 inline bg-gray-100 w-full mt-1 mb-3"/>
                    <label className='text-base font-medium'>Password</label>
                    <input type="password" value={password} name="name" placeholder="Type here..." onChange={handlePassChange}
                        className="rounded-md px-2 py-1 inline bg-gray-100 w-full mt-1 mb-3" />
                    {error && <p className='text-center text-sm mb-3 text-red-600 italic'>Incorrect email or password, please try again</p>}
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            className='py-1 px-3 rounded-md bg-farahgreen-300 text-farahgreen-700 font-medium enabled:hover:bg-farahgreen-400 disabled:opacity-30'
                            disabled={email === "" || password === ""}
                            onClick={handleLogin}>
                            Log in
                        </button>
                    </div>
                </form>
                {/*Redirect*/}
                <div className='text-center text-sm'>
                    <p>New user?
                        <span className='underline cursor-pointer w-max mx-auto italic ml-1' 
                            onClick={() => props.setPage("registration")}>
                            Create an account 
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Login;