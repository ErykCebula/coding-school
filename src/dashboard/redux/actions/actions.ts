import { Ingredient } from "../../types/types";
import {ADD_INGREDIENT} from "../constants/constants";

export const addIngredient = (
    payload: Ingredient) => ({
    type: ADD_INGREDIENT,
    payload
});