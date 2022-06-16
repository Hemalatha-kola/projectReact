import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { addRestaurant } from "../../utilities/restaurants-api";

const initialFormData = {
    restaurantName: '',
    address: '',
    description: '',
    content: ''
};

export default function CreateRestaurant({setShowForm, restaurants, setRestaurants}){
    const [formData, setFormData] = useState(initialFormData);
    const history = useHistory();

    const fileInputRef = useRef();

    async function handleSubmit(evt){
        evt.preventDefault();
        const formObj = new FormData();
        formObj.append('restaurantName',formData.restaurantName);
        formObj.append('address',formData.address);
        formObj.append('description', formData.description);
        formObj.append('content', formData.content);
        const newRestaurant = await addRestaurant(formObj);
        setRestaurants([newRestaurant, ...restaurants]);
        history.push(`/details/${newRestaurant._id}`)
    }

    function handleChange(evt){
        setFormData({ ...formData, [evt.target.name]: evt.target.value});
    };

    return(
        <div className="form-container">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Restaurant Name</label>
                <input type="text" name="restaurantName" value={formData.restaurantName} onChange={handleChange} required />
                <label>Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                <label>Description</label>
                <input type="text" name="description" value={formData.description} onChange={handleChange} required />
                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    );

}