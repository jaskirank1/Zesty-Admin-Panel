import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {

    //url passed in props from app.jsx
    const [image,setImage] = useState(false);
    const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        // we use this setData function and will pass the previous data ...data , provide field name ie is name written in [] and add its value -> [name]:value 
        setData(data=>({...data,[name]:value}));
    }

    // to make the API CALL 
    const onSubmitHandler = async (event)=>{

        // to prevent the reload of webpage on clicking submit button 
        event.preventDefault();

        const formData = new FormData();
        formData.append("name",data.name);
        formData.append("description",data.description);
        formData.append("price",Number(data.price));    //as the price in database is stored in number and here we have stored in string so chnage
        formData.append("category",data.category);
        formData.append("image",image)    // we will send the image state ie true or false only

        // in repsonse we store the response from the server 
        const response = await axios.post(`${url}/api/food/add`,formData);
        //check if the response sent after adding data to mongo db and adding image to uplaods folder is true or not 
        if(response.data.success){
            // if the response is success then we have to reset the data to initial state again
            setData({
                name:"",
                description:"",
                price:"",
                category:"Salad"
            })
            setImage(false)
            toast.success(response.data.message)    // we want to display the data that is sent by add method 
        }
        else{
            toast.error(response.data.message)
        }
    }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className='add-img-upload flex-col'>
            <p>Upload Image</p>
            <label htmlFor="image">
                {/* we have to give preview of the image if selected otherwise not */}
                <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
        </div>
        <div className="add-product-name flex-col">
            <p>Product Name</p>
            {/* if we chnage anything in this input field that will be updated in the object -> value={data.name} specifies that add new value in data.name*/}
            <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='Type here'/>
        </div>
        <div className='add-product-description flex-col'>
            <p>Product Description</p>
            <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required></textarea>
        </div>
        <div className="add-category-price">
            <div className="add-category flex-col">
                <p>Product Category</p>
                <select onChange={onChangeHandler} name="category">
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Deserts">Deserts</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure Veg">Pure Veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>
                </select>
            </div>
            <div className="add-price flex-col">
                <p>Product Price</p>
                <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$20'/>
            </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add
