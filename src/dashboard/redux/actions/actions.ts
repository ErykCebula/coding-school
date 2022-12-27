import { Ingredient } from "../../types/types";

export const addIngredient = (
    payload: Ingredient) => ({
    type: 'ADD_INGREDIENT',
    payload
});