import React from 'react';
import {FlatList,StyleSheet} from 'react-native';
import ListItem from '../ListItem/ListItem';


const PlaceList=(props)=> {


       
      
  return (
    <FlatList style={styles.listContainer}
    data={props.pllaces}
    renderItem={()=>{
        <ListItem  placeName={place}  onItemPressed={()=>props.onItDeleted(i)} />
    }}
    >
   
     </FlatList> 
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