
export const ADD_CELEB = "ADD_CELEB";
export const REMOVE_CELEB = "REMOVE_CELEB";


export function addCeleb(celeb) {
    return {
        type: ADD_CELEB,
        payload: celeb
    };
}

export function removeCeleb(celeb) {
    return {
        type: REMOVE_CELEB,
        payload: celeb
    };
}