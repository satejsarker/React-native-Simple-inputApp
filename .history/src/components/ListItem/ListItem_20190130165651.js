import React from 'react'
import {

Text,View,StyleSheet,Touchable
} from 'react-native';


const  ListItem=(props)=> (
    <Touchable>

<View style={Styles.listItem}  onPress={props.onItemPressed}>
 <Text>
     {props.placeName}           
</Text>
        </View>
    </Touchable>

       
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
