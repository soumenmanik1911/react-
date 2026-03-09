
function Table(){
    const users = [
        {id:1,name:"hi",age:22},
        {id:2,name:"hi1",age:23},
        {id:3,name:"hi2",age:24},

    ]
    
    return(
        <div className="bg-gray-400 m-5">

            <h1>Table</h1>
            <table border="8" className="border-collapse border border-black">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default Table;