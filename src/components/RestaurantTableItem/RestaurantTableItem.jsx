import RestaurantItemCard from "../RestaurantItemCard/RestaurantItemCard";
export default function RestaurantTableItem({idx, restaurant, selected, setSelected }) {
    return(
        <div className="RestaurantItem" onClick={() => setSelected(restaurant._id)}>
            <RestaurantItemCard idx={idx} restaurant={restaurant} />
        </div>
    );
}