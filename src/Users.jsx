import { useEffect } from "react";
import { useState } from "react";

const Users =()=>{
    const [users,setUser] = useState([]);
    useEffect(()=>{
        fetchUsers();

    },[])

     const fetchUsers=async()=>{

        const url = "https://jsonplaceholder.typicode.com/users";
        let res = await fetch(url);
       let data = await res.json();
        setUser(data);

     }
     console.log(users);

   return (
  <div>
    <h2>Users details</h2>
    {users.map((user) => (
      <div className="min-w-5" key={user.id}>
        <ul className="font-bold flex gap-4  bg-gradient-to-r from-amber-400 to-amber-300 p-4 rounded-lg shadow-md mb-4">
            <li>{user.id}</li>
            
          <li>{user.name}</li>
          <li className="font-semibold">{user.email}</li>
        </ul>
      </div>
    ))}
  </div>
);
}
export default Users;