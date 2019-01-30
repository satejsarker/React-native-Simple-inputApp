import React from 'react';
import {View,StyleSheet} from 'react-native';
import ListItem from '../ListItem/ListItem';


const PlaceList=(props)=> {

    const placesOut= props.places.reverse().map((place,i)=>(
        <ListItem key={i} placeName={place}  onItemPressed={()=>(alert("item pressed  : "+ place))} />
       ));
  return (
    <View style={styles.listContainer}>
    {placesOut}
     </View> 
  )


  
}

const styles = StyleSheet.create({
    listContainer:{
        width:"100%",
        padding:10,
        marginBottom:5
      }
});

export default PlaceList;
