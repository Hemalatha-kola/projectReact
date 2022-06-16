import * as restaurantsApi from "../../utilities/restaurants-api";

export default function DeleteRestaurant({id, setShowDeleteForm, setRestaurants, restaurants}){

    async function handleDelete(evt){
        evt.preventDefault();
        await restaurantsApi.deleteOne(id);
        setShowDeleteForm(false);
        let updatedRestaurants = restaurants.filter(r => r._id !== id);
        setRestaurants(updatedRestaurants);
    }
    return(
        <div className="form-container">
            <form autoComplete="off" onSubmit={handleDelete}>
                <label>Are you sure you want to delete!</label>
                <button onClick={() => setShowDeleteForm(false)}>Cancel</button>
            </form>
        </div>
    );
}