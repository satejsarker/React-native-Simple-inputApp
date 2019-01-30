import React from 'react';
import {FlatList,StyleSheet} from 'react-native';
import ListItem from '../ListItem/ListItem';


const PlaceList=(props)=> {

    const placesOut= props.places.reverse().map((place,i)=>(
        <ListItem key={i} placeName={place}  onItemPressed={()=>props.onItDeleted(i)} />
       ));
  return (
    <ScrollView style={styles.listContainer}>
    {placesOut}
     </ScrollView> 
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
