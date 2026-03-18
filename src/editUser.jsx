import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const EditUser =()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const {id}= useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        getUser();
    }, []);

    const getUser = async() => {
        console.log(name, email);
        const url = `http://localhost:3000/users/${id}`;
        let res = await fetch(url)
        res= await res.json();
        setName(res.name);
        setEmail(res.email);
            
      
    };
    const updateUser = async()=>{
        console.log(name,email);
        const url = `http://localhost:3000/users/${id}`;
        let response = await fetch (url,{
            method:'PUT',
            body:JSON.stringify({name,email})
        });
        response = await response.json();
        navigate("/Users");


        console.log(response);
    }

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold text-center text-amber-600 mb-6">Edit User</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <input 
                    onChange={(e) => setName(e.target.value)} 
                    type="text" 
                    placeholder="name" 
                    value={name}
                    className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-full focus:border-amber-400 focus:outline-none" 
                />
                <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="email" 
                    value={email}
                    className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-full focus:border-amber-400 focus:outline-none" 
                />
                <button 
                    onClick={updateUser}
                    className="w-full px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                    Update
                </button>
            </div>
        </div>
    );
};
export default EditUser;
