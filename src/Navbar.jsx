import { Link, Routes, Route } from "react-router-dom";
import Student from "./Student";
import Subject from "./Subject";
import Action from "./AcionState";
import Change from "./Change";
import Users from "./Users";

export default function Navbar(){
    return(
        <>
        <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-amber-400 to-amber-300 shadow-md">
            <div className="text-2xl font-extrabold text-emerald-700 tracking-wide">LOGO</div>
            <div className="flex gap-4">
                <Link 
                    to="/" 
                    className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                    Home
                </Link>
                <Link 
                    to="/Action" 
                    className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                    Action
                </Link>
                <Link 
                    to="/Change" 
                    className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                    Change
                </Link>
                <Link 
                    to="/Subject" 
                    className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                    Subject
                </Link>
                <Link 
                    to="/Users" 
                    className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                    Users
                </Link>
            </div>
        </nav> 
        <Routes>
            <Route path="/Student" element={<Student />} />
            <Route path="/Subject" element={<Subject />} />
            <Route path="/Action" element={<Action />} />
            <Route path="/Change" element={<Change />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/" element={<h1 className="text-4xl font-bold text-center mt-10 text-emerald-700">Home</h1>} />
        </Routes>
        </>
    )
}
