import React from 'react'
import {

Text,View,StyleSheet
} from 'react-native';


const  ListItem=(props)=> (
<View>
 <Text>
     {}           
</Text>
        </View>
       
)


const Styles=StyleSheet.create({
        listItem:{
            width:"100%",
            padding: 10,
            backgroundColor:"#eee"
        }
})



export default ListItem;
