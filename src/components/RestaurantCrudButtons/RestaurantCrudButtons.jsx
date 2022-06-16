import CreateRestaurant from "../CreateRestaurant/CreateRestaurant";
import DeleteRestaurant from "../DeleteRestaurant/DeleteRestaurant";
import UpdateRestaurant from "../UpdateRestaurant/UpdateRestaurant";

export default function RestaurantCrudButtons({ showCreateForm, setShowCreateForm, showUpdateForm, setShowUpdateForm, showDeleteForm, setShowDeleteForm, pressNewRestaurant, restaurants, setRestaurants, selected }){
    if(showDeleteForm && selected){
        return(
            <>
            <DeleteRestaurant setShowDeleteForm={setShowDeleteForm} id={selected} restaurants={restaurants} setRestaurants={setRestaurants} />

            </>
        );
    }else if (showUpdateForm && selected) {
        return(
            <>
            <UpdateRestaurant setShowUpdateForm={setShowUpdateForm} id={selected} restaurants={restaurants} setRestaurants={setRestaurants} />
            <button onClick={() => setShowUpdateForm(false)}>Cancel</button>
            </>
        );
    }else{
        return(
            showCreateForm ?
            <>
            <CreateRestaurant setShowCreateForm={setShowCreateForm} setRestaurants={setRestaurants} restaurants={restaurants} />

            </>
            :
            <>
            <button onClick={() => pressNewRestaurant()}>Create new Restaurant</button>
            <button onClick={() => setShowDeleteForm(true)}>Delete Restaurant</button>
            <button onClick={() => setShowUpdateForm(true)}>Update Restaurant</button>
            </>
        );
    }
}