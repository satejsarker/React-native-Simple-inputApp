import React from 'react'
import {

Text,View,StyleSheet,TouchableWithoutFeedback
} from 'react-native';


const  ListItem=(props)=> (
    <TouchableWithoutFeedback onPress={props.onItemPressed}>

<View style={Styles.listItem}  >
 <Text>
     {props.placeName}           
</Text>
        </View>
    </TouchableWithoutFeedback>


       
)


const Styles=StyleSheet.create({
        listItem:{
            width:"100%",
            padding: 10,
            marginBottom: 5,
            backgroundColor:"#eeef"
        }
})



export default ListItem;
