import express from 'express';
import { getFavourite, postFavourite, postFavouriteToLoggedInUser, removeFromFavourites } from '../Controllers/favouritesController.js';

const favouriteRouter = express.Router();

favouriteRouter.get('/favourites', getFavourite);

// favouriteRouter.post('/addFavourite', postFavourite);

favouriteRouter.post("/addFavourite", postFavouriteToLoggedInUser);

favouriteRouter.delete('/favourites/:id', removeFromFavourites)

export default favouriteRouter;