import { atom } from "recoil";

export const selectedMovieState = atom({
    key: 'selectedMovie',
    default: {}
})

export const openMenuState = atom({
    key: 'openMenu',
    default: false
})

export const FavoriteMoviesState = atom({
    key: 'favoriteMovies',
    default: []
})