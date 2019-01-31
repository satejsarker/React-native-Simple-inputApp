import {ADD_PLACE,DESELECT_PLACE,SELECT_PLACE,DELETE_PLACE} from '../actions/actionTypes';

const initailState={
    places: [],
    selectedPlace:null
}



const reducer=(state=initailState,action)=>{
        switch(action.type){
            case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key:Math.random(),
                    name:action.placeName,
                    image:{
                      uri:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681"
                    }
                  })
            };
        case DELETE_PLACE:
        return {
            ...state,
            places: state.places.filter(place => {
                return place.key !== state.selectedPlace.key;
              }),
              selectedPlace:null
            
        }
            case SELECT_PLACE:
            return {
                ...state,
                selectedPlace:state.places.find(place=>{
                    return place.key === action.placeKey;
                  })
            }
            case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace:null
            }


            default:
            return state;
        }
};

export default reducer;