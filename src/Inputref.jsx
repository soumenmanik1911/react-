import { useFormStatus } from "react-dom";
import { useFormState } from "react-dom";


const Inputref = ()=>{
    const HandelSubmit= async()=>{
        await new Promise(res => setTimeout(res,2000));
      
       
        

    }

    const CustomForm = () => {
        const pending = useFormStatus();
        console.log(pending);
        return(
            <div className="">
                 <input type="text" id="name" placeholder="enter name" />
                <br />
                <input type="text" placeholder="enter email" />
               <br />
                <button disabled={pending} className="bg-gray-500 p-4"  type="submit">Submit</button>
            </div>

        )
    }
    
    return(
        <div>
            <form  type="text" action="{handelSubmit}" method="post">
                <CustomForm/>
               
            </form>
            <h1>Input Ref</h1>
        </div>
    )
}
export default Inputref;