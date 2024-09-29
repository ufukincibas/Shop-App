import React from "react";
import { Image, Text ,View } from "react-native";
import styles from './styles'

const Card = (props) => {
    return(
        <View style={styles.container}>
        <View style={styles.inner_container}>
            <View style={styles.deneme}>
                     <View style={styles.top}>
                
                        <Image style={styles.image} src={props.products.imgURL}/>
                     </View>
               <View style={styles.bottom}>
            <Text style={styles.title}>{props.products.title}</Text>
            <Text style={styles.price}>{props.products.price}</Text>
            {!props.products.inStock && (
                        <Text style={styles.inStock}>STOKTA YOK</Text>
                    )}
                    </View>
            </View>
           
        </View>
        </View>
    )
}

export default Card;