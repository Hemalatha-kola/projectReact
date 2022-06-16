import { useState } from 'react';
import { updateRestaurant } from '../../utilities/restaurants-api';

const initialFormData = {
    restaurantName: '',
    address: '',
    description: ''
};
export default function UpdateRestaurant({id, setShowUpdateForm, setRestaurants, restaurants }){
    const [formData, setFormData] = useState(initialFormData);
    async function handleUpdate(evt) {
        evt.preventDefault();
        const updatedRestaurant = await updateRestaurant(formData, id);
        const newRestaurents = restaurants.map((r) => {
            return r._id === id ? updatedRestaurant : r
        })
        setRestaurants(newRestaurents);
        setFormData(initialFormData);
    }

    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value});
    };
    return(
        <div className="form-container">
            <section clasName="flex-ctr-ctr">
                <form autoComplete='off' onSubmit={handleUpdate}>
                    <label>Restaurant Name</label>
                    <input type="text" name="restaurantName" value={formData.restaurantName} onChange={handleChange} required />
                    <label>Address</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                    <label>Description</label>
                    <input type="text" name="description" value={formData.description} onChange={handleChange} required />
                    <button className='submit-button' type="submit">Submit</button>
                </form>
            </section>
        </div>
    );
}