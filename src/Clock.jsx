function Clock (colour){
    return(
        <div className={`bg-${colour}-200 p-4 rounded-lg`}>
         <h2 className="text-xl font-bold">Current Time</h2>
         <p className="text-lg">{new Date().toLocaleTimeString()}</p>
        </div>
    )
}
export default Clock;