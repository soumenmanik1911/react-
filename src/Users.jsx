import { use, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Users =()=>{
    const [users,setUser] = useState([]);
    const [data,setData]= useState([]);
     const url ="http://localhost:3000/users"
    const [loading,setLoading] = useState(false);
    const Navigate = useNavigate();
    useEffect(()=>{
        setLoading(true);
        fetchUsers();
        fetchData();

    },[])

     const fetchUsers=async()=>{

        const url = "https://jsonplaceholder.typicode.com/users";
        let res = await fetch(url);
       let data = await res.json();
        setUser(data);
        setLoading(false);

     }
     console.log(users);

     const fetchData =async()=>{
       
        let respons = await fetch(url);
        let d = await respons.json();
        console.log(d);
        setData(d);
        setLoading(false);
     }
     const deletUser =async(id)=>{
      let res = await fetch(`${url}/${id}`,{
        method:'delete'
      })
      console.log(res,id);
      res= await res.json();
      if(res){
        alert("user deleted successfully");
        fetchData();
      }
     }
     const editUser =(id)=>{
      Navigate("/edituser/"+id);

     }

   return (
    <>
    <div><h1>2nd users</h1>

    {data.map((d)=>(
        <div key={d.id}>
            <ul className="font-bold flex gap-4  bg-gradient-to-r from-red-400 to-green-300 p-4 rounded-lg shadow-md mb-4">
                <li>{d.id}</li>
                <li>{d.name}</li>
                <li className="font-semibold">{d.email}</li>
                <li><button onClick={() => deletUser(d.id)} className="bg-red-800 p-4 text-white rounded-md hover:bg-red-600">Delete</button></li>
                <li><button onClick={()=>editUser(d.id)} className="bg-blue-800 p-4 text-white rounded-md hover:bg-blue-600">Edit</button></li>
            </ul>
        </div>
    ))}
  </div>
  <div>
    <h2>Users details</h2>
    {!loading?
    users.map((user) => (
      <div className="min-w-5" key={user.id}>
        <ul className="font-bold flex gap-4  bg-gradient-to-r from-blue-400 to-green-300 p-4 rounded-lg shadow-md mb-4">
            <li>{user.id}</li>
            
          <li>{user.name}</li>
          <li className="font-semibold">{user.email}</li>
        </ul>
      </div>
    ))
    : <p>Loading...</p>
    }
  </div>
  
  </>
);
}
export default Users;