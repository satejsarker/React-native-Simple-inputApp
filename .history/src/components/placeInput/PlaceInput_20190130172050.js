import React from 'react';
import {View,StyleSheet,TextInput} from 'react-native';

const PlaceInput=()=> {
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
};


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
