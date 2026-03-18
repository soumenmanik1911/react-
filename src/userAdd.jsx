import { useState } from "react";
const Useradd =()=>{



    const[name,setName]=useState("");
    const[email,setEmail]=useState("");

    const submitData = async()=>{
        console.log(name,email);
        const url = "http://localhost:3000/users";
        let response = await fetch(url,{
            method:'POST',
            body:JSON.stringify({name, email})
           
            
    })
     response = await response.json();
     if(response){
        alert("user added successfully");
     }
    }

    return(
        <div className=" items-center">

            <h1 className="font-bold text-amber-300"> add the users here</h1>
            <div className="  m-5 w-72">
                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="name" className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-full" />
                <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email" className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-full" />
                <button onClick={submitData} className="px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg">
                    Add User
                </button>
            </div>

        </div>
    )
}

export default Useradd;