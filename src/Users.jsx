import { use, useEffect } from "react";
import { useState } from "react";

const Users =()=>{
    const [users,setUser] = useState([]);
    const [data,setData]= useState([]);
    const [loading,setLoading] = useState(false);
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
        const url ="http://localhost:3000/users"
        let respons = await fetch(url);
        let d = await respons.json();
        console.log(d);
        setData(d);
        setLoading(false);
     }

   return (
    <>
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
  <div>2nd users

    {data.map((d)=>(
        <div key={d.id}>
            <ul className="font-bold flex gap-4  bg-gradient-to-r from-blue-400 to-green-300 p-4 rounded-lg shadow-md mb-4">
                <li>{d.id}</li>
                <li>{d.name}</li>
                <li className="font-semibold">{d.email}</li>
            </ul>
        </div>
    ))}
  </div>
  </>
);
}
export default Users;