import Button from 'react-bootstrap/Button';
import Subject from './Subject';
import { ContextData } from './ComtextData';
import { useState } from 'react';
function Student (   ){
    const [subject,setsubject]=useState("math") 
   
    return(
        <div className='p-4 m-5 gap-7 bg-amber-700'>



            <ContextData.Provider value={subject}>

                <select name="" id="" onChange={(e)=>setsubject(e.target.value)}>
                    <option value="scince">scince</option>
                    <option value="math">math</option>
                    <option value="english">english</option>
                </select>
                  <h1>students subject</h1>
                 
            <Subject/>
            </ContextData.Provider>
          
            


        </div>
    )
}
export default Student;