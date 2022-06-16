import sendRequest from "./send-request";

const BASE_URL = '/api/restaurants';

export function getAll(){
    return sendRequest(`${BASE_URL}`);
}

export function addRestaurant(restaurantData){
    return sendRequest(`${BASE_URL}/create`, 'POST', restaurantData, true);
}

export async function updateRestaurant(restaurantData, id){
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', restaurantData)
}

export function getOne(id){
    return sendRequest(`${BASE_URL}/${id}`);
}

export async function deleteOne(id){
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}