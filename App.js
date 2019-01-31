import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PlaceList from './src/components/placeList/PlaceList';

import PlaceInput from './src/components/placeInput/PlaceInput';
// import ImgSatej from './src/assets/satej.jpg'
import PlaceDetails from './src/placedetails/PlaceDetails';

export default class App extends Component {
	state = {
    places: [],
    selectedPlace:null
	};

	placeAddedHandler = (placeName) => {
		this.setState((prevState) => {
			return {
				places: prevState.places.concat({
          key:Math.random(),
          name:placeName,
          image:{
            uri:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681"
          }
        })
			};
		});
	};


  placeSelected = key => {
    this.setState(prevState=> {
      return {selectedPlace:prevState.places.find(place=>{
        return place.key === key;
      })
      }
    })
   

  };

  onDeleteHandeler=(key)=>{
     this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace:null
      };
    });
  }
  moduleCloseHandeler=()=>{
    this.setState({
      selectedPlace:null
    })
  }

	render() {
		return (
			<View style={styles.container}>
      <PlaceDetails selectedPlace={this.state.selectedPlace} OnItemDeleted={this.onDeleteHandeler} OnClosed ={this.moduleCloseHandeler}/>
				<PlaceInput onPlaceAdded={this.placeAddedHandler} />
				<PlaceList places={this.state.places} onItemSelected={this.placeSelected} />

				<Text>Developed by satej sarker</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 26,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},

	title: {
		fontSize: 19,
		fontWeight: 'bold',
		color: 'green'
	},

	inputContainer: {
		// flex:1,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	placeInput: {
		width: '70%'
	},
	buttonInput: {
		width: '30%'
	}
});
