import {Link} from "react-router-dom";

export default function RestaurantItemCard({restaurant}){
    return(
        <>
        <Link t={`/details/${restaurant._id}`}>
            <button>{restaurant.restaurantName}</button>
        </Link>
        </>
    );
}