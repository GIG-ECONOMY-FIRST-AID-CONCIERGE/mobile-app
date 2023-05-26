// LIBS
import { ApiService } from "../libs/axios";

export const getAddressDetails = async (lat: number, lng: number) => {
    const { data: { results } } = await ApiService.getAddressByCoords(lat, lng);
    const addressDetails = {
        latitude: lat,
        longitude: lng,
        number: results[0].address_components[0].long_name,
        street: results[0].address_components[1].long_name,
        postalCode: results[0].address_components[6].long_name,
        city: results[0].address_components[3].long_name,
        state: results[0].address_components[4].short_name,
    }
    
    return addressDetails;
};
