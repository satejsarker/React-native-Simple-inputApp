import {View,StyleSheet,TextInput} from 'react-native';

import React, { Component } from 'react'

class PlaceInput extends Component {

    state={
        placeName:"",
        places:[]
      }
     placeNmaeChange=val=>{
       this.setState({
         placeName:val
       })
     }
      placeSubmit=()=>{
        if(this.state.placeName.trim()===""){
          return
        }
        this.setState(prevState=>{
          return {
            places:prevState.places.concat(prevState.placeName)
          }
        })
      }
  render() {
    return (
        <View style={styles.inputContainer}>
    <TextInput 
    placeholder=" enter text for inoput box "
    style={styles.placeInput}
    value={this.state.placeName} 
    onChangeText={this.placeNmaeChange}
    />
     <Button title="Add" style={styles.buttonInput} onPress={this.placeSubmit}
    color="green"
    />
    </View>
    )
  }
}



const styles = StyleSheet.create({
    inputContainer:{
        // flex:1,
        width:"100%",
        flexDirection: 'row',
        justifyContent:"space-between",
        alignItems:"center"
    
      },
      placeInput:{
        width:"70%"
      },
      buttonInput:{
        width:"30%"
      },
});


export default PlaceInput;
