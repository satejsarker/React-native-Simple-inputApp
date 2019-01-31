import React from 'react';
import {Modal,View,Image,Text,Button,StyleSheet} from 'react-native';

const PlaceDetails=(props) =>{
    let moduleContent=null
    if(props.selectedPlace){
        moduleContent=(
            <View>

<Image source={props.selectedPlace.image }  style={Styles.placeImage} />
            <Text style={Styles.plcaeName}>
        {props.selectedPlace.name}
        
            </Text>
            </View>
         
        )
    }
  return (
    
 <Modal onRequestClose={props.OnClosed} visible={props.selectedPlace !==null} animationType="slide">
<View  style={Styles.moduleContent}>
    {moduleContent}
    <View>
        <Button color="red" title="Delete" onPress={props.OnItemDeleted}
        />
        <Button title="Close" onPress={props.OnClosed} />
    </View> 
</View>
 </Modal>
  )
};


const Styles=StyleSheet.create({
    moduleContent:{
        margin:22
    },
    placeImage: {

        height: 200,
        width: "100%"
    },
      plcaeName:{
        fontWeight:"bold",
        textAlign:"center",
        fontSize: 30 ,
        margin:21
    }  
      
})

export default PlaceDetails;
