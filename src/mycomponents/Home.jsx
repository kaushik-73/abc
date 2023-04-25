import React, {useState} from 'react'
function TodoList(){
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addActivity(){
      setlistData((listData)=>{
        const updatedList =[...listData, activity]
        console.log(updatedList)
        setActivity('');
        return updatedList
      }) 
  }
  return(
    <>
      <div className='container mt-3 mb-3'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6 abc'>
            <div className='header'><h1>TODO LIST</h1></div>
            <div className="d-flex justify-content-center">
             <div className="input-group w-auto">
               <input type='text' placeholder='Add Activity'  aria-label="Example input"
                      aria-describedby="button-addon1" className='form-control' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
                <button disabled={!activity} className="btn btn-warning" onClick={addActivity} id="button-addon1" data-mdb-ripple-color="dark">
                  Add
                </button>
                
             </div>
            </div>
            <br/>
            <p className='list-heading'>Here is your list : {")"}</p>
            
                {listData !==[] && listData.map((data, i)=>{
                  return(
                    <>
                      <p key={i}>
                        <div className='listdata'>{data}</div>
                      </p>
                  
                      <button class='btn btn-danger btn-sm pull-right'>Remove</button>
                    </>
                    
                  )
                })}
          </div>
          
          <div className='col-md-3'></div>
        </div>
        
      </div>
    </>
  )
}
export default TodoList


