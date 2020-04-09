import * as actionTypes from "./action";
import Data from "./data.json"

const initialState = {
    persons: [...Data],
    filter: null,
    isEdit: false,
    editedPersonIndex: null,
    editedPerson: null,
    isOrdered: "MFO" 
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            const timeNow = new Date();
            const updatedDate = timeNow.toISOString();

            const newPerson = {
                name: action.e.target.name.value,
                age: action.e.target.age.value,
                sex: action.e.target.sex.value,
                updatedDate: updatedDate
            };
            const updatedPersons = [...state.persons, newPerson];

            action.e.preventDefault();
            return {
                ...state,
                persons: updatedPersons
            }

        case actionTypes.PREP_EDIT_PERSON:
            if(state.isEdit && state.editedPersonIndex === action.personIndex) {
                return {
                    ...state,
                    isEdit: false,
                    editedPersonIndex: null,
                    editedPerson: null
                }
            } 
            const editedPerson = state.persons[action.personIndex];
            return {
                ...state,
                isEdit: true, 
                editedPersonIndex: action.personIndex,
                editedPerson: editedPerson
            }
            
        case actionTypes.UPDATE_PERSON:
            const timeeNow = new Date();
            const updateedDate = timeeNow.toISOString();
            const persons = [...state.persons];
        
            const updatedPersonIndex = state.persons.findIndex((_, index) => {
                return state.editedPersonIndex === index;
            });
        
            persons[updatedPersonIndex].name = action.e.target.name.value;
            persons[updatedPersonIndex].age = action.e.target.age.value;
            persons[updatedPersonIndex].sex = action.e.target.sex.value;
            persons[updatedPersonIndex].updatedDate = updateedDate;
        
            action.e.preventDefault();

            return {
                ...state,
                persons: persons, 
                isEdit: false, 
                editedPersonIndex: null, 
                editedPerson: null
            }
        case actionTypes.REMOVE_PERSON:
            const uupdatedPersons = [...state.persons];
            uupdatedPersons.splice(action.personIndex, 1);
            
            return {
                ...state,
                persons: uupdatedPersons, 
                isEdit: false, 
                editedPersonIndex: null, 
                editedPerson: null
            }
        case actionTypes.ORDER_BY_AGE:
            if(!state.isOrdered) {
                const orderedPersons = [...state.persons];
                orderedPersons.sort((a,b) => (a.age > b.age)? 1 : -1);
                
                return {
                    ...state,
                    persons: orderedPersons, 
                    isOrdered: true
                }
            }  
            const orderedDescPersons = [...state.persons];
            orderedDescPersons.sort((a,b) => (a.age > b.age)? -1 : 1);

            return {
                ...state,
                persons: orderedDescPersons, 
                isOrdered: false
            }
            
        case actionTypes.ORDER_BY_SEX:
            if(action.e.target.value === "null"){
                return {
                    ...state,
                    filter: null
                }
            } return {
                ...state,
                filter: action.e.target.value
            }
    }
    return state;
}


export default reducer;