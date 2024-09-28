import React from "react";
import { Image, Text ,View } from "react-native";
import styles from './styles'

const Card = (props) => {
    return(
        <View style={styles.container}>
                
                     <Image style={styles.image} src={props.products.imgURL}/>
               
            <Text style={styles.title}>{props.products.title}</Text>
            <Text style={styles.price}>{props.products.price}</Text>
        </View>
    )
}

export default Card;