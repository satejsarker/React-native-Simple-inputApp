import React from 'react'
import {

Text,ScrollView,StyleSheet,TouchableOpacity
} from 'react-native';


const  ListItem=(props)=> (
    <TouchableOpacity onPress={props.onItemPressed}>

<ScrollView style={Styles.listItem}  >
 <Text>
     {props.placeName}           
</Text>
        </ScrollView>
    </TouchableOpacity>


       
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
