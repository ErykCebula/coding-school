import { ADD_INGREDIENT } from "../constants/constants";
import {Ingredient} from "../../types/types";
import { Reducer} from "redux";

type IngredientsState = {
    ingredientsList: Ingredient[];
    dupa: string
}
const initialState: IngredientsState = {
    ingredientsList: [],
    dupa: "a",
};


// redux element for array of elements
const ingredientsReducer: Reducer<IngredientsState, any> = (state = initialState, action) => {
    switch(action.type) {
        case ADD_INGREDIENT:
            return {...state, ingredientsList: [...state.ingredientsList, action]};
/*        case 'REMOVE_INGREDIENT':
            return [...state,
                state.filter(val => val !== action.id)
            ];*/
        default:
            return state;
    }
};

export default ingredientsReducer;
