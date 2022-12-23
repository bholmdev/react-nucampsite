import { createSlice } from "@reduxjs/toolkit";
import {CAMPSITES} from "../../app/shared/CAMPSITES";

const initialState = {
    campsiteArray: CAMPSITES
};

const campsitesSlice = createSlice({
    name: "campsites",
    initialState
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = () => {
    return CAMPSITES;
}

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
}

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
}

/* export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
    // return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
} */