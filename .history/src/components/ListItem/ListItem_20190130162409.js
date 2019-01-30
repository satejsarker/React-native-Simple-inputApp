import React from 'react'
import {

Text,View,StyleSheet
} from 'react-native';


const  ListItem=(props)=> (
<View style={Styles.listItem} onPress>
 <Text>
     {props.placeName}           
</Text>
        </View>
       
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