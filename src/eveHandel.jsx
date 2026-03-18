import React, { useState } from "react";
const  Handel =()=>{
const[name, setName] = useState("");
const[err,setNameErr] = useState("");
const [pass,setPass] = useState("");
const [errPass,setPassErr] = useState("");

const handelname =(e)=>{
    setName(e.target.value);
    if(name.length < 3){
        setNameErr("name must be at least 3 characters");
    }else{
        setNameErr("");
    }
}
const handlepass =(e)=>{
    setPass(e.target.value);
    if(pass.length < 6){
        setPassErr("password must be at least 6 characters");
    }else{
        setPassErr("");
    }
}

    return(
        <div className="w-5/12 mx-auto p-4">
            <h1 className="text-2xl font-bold text-center text-amber-600 mb-6">Handel</h1>
            <div  className=" flex flex-col gap-4">
                 <input type="text" placeholder="eneter name" className="items-center" onChange={handelname}/>
            <br />
            {err && <p className="text-red-500">{err}</p>}
            <input type="text" placeholder="enter password" className="items-center" onChange={handlepass}/>
            {errPass && <p className="text-red-500">{errPass}</p>}

            <br />
            <button className="bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700">Submit</button>

            </div>
           
        </div>
    )
}
export default Handel;