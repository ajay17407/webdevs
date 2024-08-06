import download from '../assets/download.png';
import play from '../assets/play.png';
import insta from '../assets/insta.png';
import React,{useState} from 'react';
import {Link} from 'react-router-dom';



function App(props) {

 

  

  const [name,setName]=useState("");
  const [pswrd,setPswrd]=useState("");

  function handlenamechange(e){
    setName(e.target.value);
  }

  function handlepswrdchange(e){
    setPswrd(e.target.value);
  }

  function handleLogin()  {
    const user = props.users.find((user) => user.username === name && user.password === pswrd);
    if (user) {
      window.alert("Login successful!");
    } else {
      window.alert("Invalid username or password");
    }
  };


  return(
        <div className="h-full box-border">
          <center>
          <div className="border-2 h-[400px] mx-auto mt-9 w-[360px] ">
           
           <img src={insta}  className="block w-56 h-20 my-6 cursor-pointer" alt="INSTAGRAM"></img>
           
           <form>
              <input className="block w-64 border-2 h-8 my-2 focus:outline-none " type="text" placeholder="Phone number,username, or email" autoComplete="on" value={name} onChange={(e)=>handlenamechange(e)}></input>
              <input className="block w-64 border-2 h-8 my-2 focus:outline-none" type="password" placeholder="Password" value={pswrd} onChange={(e)=>handlepswrdchange(e)}></input>
           </form>

           <button className="bg-blue-400 rounded-md w-64 text-white h-8 my-4 cursor-default" onClick={handleLogin}>Log in</button>

           <div className="flex items-center justify-center my-4">
                <div className="border-t border-gray-300 flex-grow mr-3 ml-3"></div>
                <span className="text-gray-500">OR</span>
                <div className="border-t border-gray-300 flex-grow ml-3 mr-3"></div>
          </div>


           <a className="block text-blue-700 mt-2 mb-4 cursor-pointer" >Log in with Facebook</a>

           <a className="block text-blue-700 my-2 text-xs cursor-pointer">Forgot passsword?</a>

           
         </div>
         <div className="mt-4 border-2 w-[360px] h-12 flex items-center justify-center font-sans">
              <p>Don't have an account ?<Link className="text-blue-500" to="/Signup"> sign up</Link></p>
         </div>

         <div className="mt-2 ">
              Get the app
         </div>

         <div className="flex justify-center m-2">
             <a href="https://apps.apple.com/in/app/instagram/id389801252" target="_blank"><img src={download} alt="download on app store" className="h-12 m-1 cursor-pointer"></img></a>
             <a href="https://play.google.com/store/search?q=instagram&c=apps&hl=en" target="_blank"><img src={play} alt="download on google play" className="h-12 m-1 cursor-pointer"></img></a>
         </div>

         </center>

  </div>);
}

export default App
