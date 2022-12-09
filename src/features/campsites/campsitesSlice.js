import {CAMPSITES} from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => {
    return CAMPSITES;
}

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === id);
}

/* export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
    // return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
} */