import download from '../assets/download.png';
import play from '../assets/play.png';
import insta from '../assets/insta.png';
import {Link}  from 'react-router-dom';
import React,{useState} from'react';

function Signup(props)
{
   const [sname,setSname]=useState("");
   const [spswrd,setSpswrd]=useState("");
   const [mno, setMno] = useState("");
   const [fullname, setFullname] = useState("");

   function handlesnamechange(e){
      setSname(e.target.value);
    }
  
    function handlespswrdchange(e){
      setSpswrd(e.target.value);
    }

   function handleMnochange(e) {
     setMno(e.target.value);
   }
 
   function handleFullNamechange(e) {
     setFullname(e.target.value);
   }

    function handleSignup() {
     if (sname === "" || spswrd === "") {
       window.alert("Signup details are empty");
     } else {
       props.addUser({ username: sname, password: spswrd });
       setSname("");
       setSpswrd("");
       setMno("");
       setFullname("");
       
       window.alert("Signup successful!click on log in to open your account");
     }
   }


   return(
      <div className="h-full box-border">
        <center>
        <div className="border-2  border-gray-300 h-[630px] mx-auto mt-9 w-[360px] ">
         
         <img src={insta}  className="block w-56 h-20 mt-6 mb-2 cursor-pointer" alt="INSTAGRAM"></img>
         
         <p className="text-gray-400 font-bold mx-10">Sign up to see photos and videos from your friends.</p>

         <button className="bg-blue-500 rounded-md w-64 text-white h-8 my-4 cursor-default" >Log in with facebook</button>

         <div className="flex items-center justify-center my-4">
              <div className="border-t border-gray-300 flex-grow mr-4 ml-8"></div>
              <span className="text-gray-500">OR</span>
              <div className="border-t border-gray-300 flex-grow ml-4 mr-8"></div>
        </div>

        <form >
            <input id="mno" type="text" placeholder="Mobile number or Email" className="block w-64 border-2  border-gray-300 h-8 my-2 focus:outline-none "  value={mno} onChange={(e)=>handleMnochange(e)} ></input>
            <input id="fullname" type="text" placeholder="Full Name" className="block w-64 border-2   border-gray-300 h-8 my-2 focus:outline-none " value={fullname} onChange={(e)=>handleFullNamechange(e)}></input>
            <input type="text" placeholder="Username"  className="block w-64 border-2  border-gray-300 h-8 my-2 focus:outline-none " value={sname} onChange={(e)=>handlesnamechange(e)}></input>
            <input type="password" placeholder="Password" className="block w-64 border-2  border-gray-300 h-8 my-2 focus:outline-none " value={spswrd} onChange={(e)=>handlespswrdchange(e)} ></input>
        </form>

        <p className="text-gray-500 text-xs mt-6 mx-12"> People who use our service may have uploaded your contact information to Instagram. <a className="text-blue-950">Learn More.</a></p>

        <p className="text-gray-500 text-xs mt-6 mx-12">By signing up, you agree to our<a className="text-blue-950">Terms</a> , <a className="text-blue-950">Privacy Policy</a> and <a className="text-blue-950">Cookies Policy .</a></p>

        <button className="bg-blue-400 rounded-md w-64 text-white h-8 my-4 cursor-default" onClick={handleSignup}>Sign up</button>
         
       </div>
       <div className="mt-4 border-2  border-gray-300 w-[360px] h-12 flex items-center justify-center font-sans text-[13px]">
            <p>Have an account?<Link to="/" className="text-blue-500 ">Log in</Link></p>
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

export default Signup