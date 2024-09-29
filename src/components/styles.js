import { StyleSheet ,Dimensions} from "react-native";

export default StyleSheet.create({
    container: {backgroundColor: "#f5f5f5",
    margin: 7,
    borderRadius: 10,
    marginLeft: 0,
    width:Dimensions.get('window').width/2,
    flexDirection:'column',
    width:Dimensions.get('window').width/2-14, //Ekranı ikiye böl, kenar boşluklarını hesaba kat
    },

  
    inner_container:{  marginTop: 10,
        marginBottom: 5,
        alignItems: "center",
         flexDirection:'column',
         justifyContent:'space-between',
         alignItems:'baseline',
         alignItems: 'center',
         
         
        

    },
    top:{  marginLeft: 5,
        marginRight:5},
        bottom: {
            marginTop:3,
            marginBottom:4},
    title: {fontSize:20 ,
        fontWeight:'bold',
        marginBottom:10,

    },
    price:{fontSize:16,
      
    },
    image : {borderRadius: 10,
        width: 160,
        height: 180,
       
    },
    inStock: {
        fontWeight: 'bold',
        fontSize: 12,
        color: 'red'
    }



})
