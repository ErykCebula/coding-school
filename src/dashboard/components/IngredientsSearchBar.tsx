import React, { useState} from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'bootstrap/dist/css/bootstrap.css';
import {connect} from "react-redux";
import {ApplicationState} from "../../store/rootReducer";
import {Ingredient} from "../types/types";
type StateProps = {
    ingredients: Ingredient[]
}
type Props = StateProps;

const IngredientsSearchBar = ({ingredients}: Props) => {
    const [selectedItem, setSelectedItem] = useState([]); // selectedItem is used for "cleaning input"



    return <>
            <Typeahead
                id="basic-example"
                onChange={() => {}}
                options={[]}
                placeholder="Enter ingredients!"
                selected={selectedItem}
            />
        </>;
};


export default connect(
    (state: ApplicationState) => ({
        ingredients: state.ingredients.ingredientsList,
    })
)(IngredientsSearchBar);