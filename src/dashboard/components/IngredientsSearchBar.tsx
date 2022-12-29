import React, { useState} from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'bootstrap/dist/css/bootstrap.css';
import {connect} from "react-redux";
import {ApplicationState} from "../../store/rootReducer";
import {Ingredient} from "../types/types";
import {addIngredient} from "../redux/actions/actions";
type StateProps = {
    ingredients: Ingredient[]
}

type DispatchProps = {
    addIngredient: typeof addIngredient
}
type Props = StateProps & DispatchProps;

const IngredientsSearchBar = ({ingredients, addIngredient}: Props) => {
    const [selectedItem, setSelectedItem] = useState([]); // selectedItem is used for "cleaning input"



    return <>
            <Typeahead
                id="basic-example"
                onChange={() => addIngredient({name: "pewki", unit: "kilogramy"})}
                options={["dupa"]}
                placeholder="Enter ingredients!"
                selected={selectedItem}
            />
        </>;
};


export default connect(
    (state: ApplicationState) => ({
        ingredients: state.ingredients.ingredientsList,
    }), {
        addIngredient: addIngredient
    }
)(IngredientsSearchBar);