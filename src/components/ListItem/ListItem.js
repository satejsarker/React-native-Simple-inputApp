import React from 'react'
import {

Text,View,StyleSheet,TouchableOpacity,Image
} from 'react-native';


const  ListItem=(props)=> (
    <TouchableOpacity onPress={props.onItemPressed}>

<View style={Styles.listItem}  >
 <Image resizeMode="contain" style={Styles.placeImage} source={props.Image} />
 <Text>
     {props.placeName}           
</Text>
        </View>
    </TouchableOpacity>


       
)


const Styles=StyleSheet.create({
        listItem:{
            width:"100%",
            padding: 10,
            marginBottom: 5,
            backgroundColor:"#eeef",
            flexDirection: 'row',
            alignItems: 'center',
        },
        placeImage:{
            marginRight: 8,
        height:30,
        width:30
          }
})



export default ListItem;
