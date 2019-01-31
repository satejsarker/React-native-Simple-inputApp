import React from 'react';
import {StyleSheet,FlatList} from 'react-native';
import ListItem from '../ListItem/ListItem';


const PlaceList=(props)=> {

  
  return (
    <FlatList style={styles.listContainer} 
    data={props.places}
    renderItem={(info)=>(
        <ListItem  placeName={info.item.name} 
        Image={info.item.image}
        onItemPressed={()=>props.onItemSelected(info.item.key)} />
    )

    }
    
    />
  )


  
}

const styles = StyleSheet.create({
    listContainer:{
        width:"100%",
        padding:10,
        marginBottom:5,
      
      },
     
       
      
});

export default PlaceList;
