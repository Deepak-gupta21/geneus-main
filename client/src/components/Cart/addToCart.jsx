import axios from 'axios';
import { toast } from 'react-toastify';

const addToCart = async (courseDetails) =>{
  const cartItem = {
    id: courseDetails.id,
    title: courseDetails.title,
    description: courseDetails.description,
    image: courseDetails.image,
    price: courseDetails.price,
    discountPrice: courseDetails.discountPrice,
  }; 
  try{
    const {item} = await axios.post('http://localhost:8000/addToCart',{cartItem});
    console.log("Cart item added : ",item);
    toast.success("Course added to cart");
  }
  catch(error){
    toast.error(error.response.data);
  }
};

export {addToCart};