import { use, useState } from "react";

const Change =()=>{
const[data,setdata]= useState({
    name:"rini",
    address:{
        city:"kochi",
        state:"kerala"
    },
    age:200
})

const handelSubmit =(val)=>{
    data.name =val;
    setdata({...data})
}
 const handelCity = (val) => {
    setdata((prev) => ({
      ...prev,
      address: { ...prev.address, city: val }
    }));
  };

    return (
        <div className="bg-gray-400 m-4 p-4 ">
            <h1>Change Component</h1>
            <input className="border-2" type="text"  placeholder="enter name" onChange={(event)=>handelSubmit(event.target.value)} />
            <input className="border-2" type="text"  placeholder="enter city" onChange={(event)=>handelCity(event.target.value)} />

           <div className="text-2xl text-amber-900"><h4>{data.name?data.name:"Name not entered"}</h4>
            <h4>{data.address.city}</h4>
            <h4>{data.age}</h4></div> 
        
        </div>
    )
}

export default Change;