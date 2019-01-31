import React, { Component } from 'react';
import {  Text, View } from 'react-native';
import PlaceList from './src/components/placeList/PlaceList';
import {addplace,deletePlace,selectPlace,deseletePlace} from './src/store/actions/index'
import PlaceInput from './src/components/placeInput/PlaceInput';
// import ImgSatej from './src/assets/satej.jpg'
import PlaceDetails from './src/placedetails/PlaceDetails';
import {connect} from 'react-redux'
import { styles } from './public/Styles';


class App extends Component {
	state = {
    places: [],
    selectedPlace:null
	};

	placeAddedHandler = (placeName) => {
    this.props.onAddPlace(placeName);
	};


  placeSelected = key => {
  this.props.onSelectPlace(key);
   

  };

  onDeleteHandeler=(key)=>{
     this.props.onDeletePlace();
  }
  moduleCloseHandeler=()=>{
    this.props.onDeselectPlace()
  }

	render() {
		return (
			<View style={styles.container}>
      <PlaceDetails selectedPlace={this.props.selectedPlace} OnItemDeleted={this.onDeleteHandeler} OnClosed ={this.moduleCloseHandeler}/>
				<PlaceInput onPlaceAdded={this.placeAddedHandler} />
				<PlaceList places={this.props.places} onItemSelected={this.placeSelected} />

				<Text>Developed by satej sarker</Text>
			</View>
		);
	}
}




const mapStateToProps=state=>{
  return {
    places:state.places.places,
    selectedPlace:state.places.selectedPlace
  }
};
const mapDispatchToProps=dispatch=>{
  return {
    onAddPlace:(name)=>dispatch(addplace(name)),
    onDeletePlace:()=>dispatch(deletePlace()),
    onSelectPlace:(key)=>dispatch(selectPlace(key)),
    onDeselectPlace:()=>dispatch(deseletePlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
