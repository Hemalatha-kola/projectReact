import {useEffect, useState} from 'react';
import * as restaurantsApi from "../../utilities/restaurants-api";
import RestaurantListTable from '../../components/RestaurantListTable/RestaurantListTable';
import RestaurantCrudButtons from '../../components/RestaurantCrudButtons/RestaurantCrudButtons';

export default function Restaurant(){
    const [showCreateForm, setShowCreateForm] = useState(false);
    const[showDeleteForm, setShowDeleteForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [restaurants, setRestaurants] = useState([]);
    const [selected, setSelected] = useState();

    function pressNewRestaurant() {
        setShowCreateForm(true);
    }

    useEffect(function () {
        async function getRestaurants() {
            const restaurants = await restaurantsApi.getAll();
            setRestaurants(restaurants);
        }
        getRestaurants();
    }, []);

    function changeSelected(id) {
        if(id !== selected) {
            setSelected(id)
        }else{
            setSelected()
        }
    }

    return(
        <>
        <h1>Restaurants</h1>
        <RestaurantCrudButtons pressNewRestaurant={pressNewRestaurant} showCreateForm={showCreateForm} setShowCreateForm={setShowCreateForm}
        showDeleteForm={showDeleteForm} setShowDeleteForm={setShowDeleteForm} showUpdateForm={showUpdateForm}
        setShowUpdateForm={setShowUpdateForm} setRestaurants={setRestaurants} restaurants={restaurants} selected={selected} />
        <RestaurantListTable selected={selected} setSelected={changeSelected} restaurants={restaurants} />

        </>
    );
}