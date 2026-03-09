
import { useActionState } from "react";
const Action =()=>{
    const handelSubmit = async(previousData,formData)=>{
        let name = formData.get("name");
        let password = formData.get("password");

        await new Promise(res => setTimeout(res,2000));
        return {name:name,password:password}
    }

    const[data,action,pending]=useActionState(handelSubmit,undefined)

    return(
        <div className="bg-blue-500 text-white p-4 m-4">actionState
        <form action={action}>
       <input defaultValue={data?.name} type="text" placeholder="enter name" name="name" />
       <br />
       <input defaultValue={data?.password} type="password" placeholder="enter your password" name="password" />
       <br />
       <button disabled={pending} className="bg-gray-500 p-4" type="submit">  {pending ? "Loading..." : "Submit"}</button>

        </form>
        <h4>{data?.name}</h4>
        
        </div>
    )
}

export default Action;