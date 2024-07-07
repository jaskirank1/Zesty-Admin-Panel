import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({url}) => {

  //url passed through props
  const [list,setList] = useState([]);

  const fetchList = async ()=>{
    const response = await axios.get(`${url}/api/food/list`); 
    if(response.data.success){
      // if the response is success that we got data, so add the data in setList
      setList(response.data.data);
    }
    else{
      toast.error("Error");
    }
  } 

  const removeFood = async(foodId)=>{
    // we used axios.post method as we created the remove method using post, the remove api need food id to remove data from database
    const response = await axios.post(`${url}/api/food/remove`,{"id":foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error");
    }
  }

  // we have to run the function whenever the list page is loaded 
  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='list add flex-col'>
      <p>Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>&#8377;{item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
