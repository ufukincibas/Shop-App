import { StyleSheet ,Dimensions} from "react-native";

export default StyleSheet.create({
    container: {backgroundColor: "#f5f5f5",
    margin: 7,
    borderRadius: 10,
    marginLeft: 0,
    width:180,
    flex:2,
    flexDirection:'column'
    },

  
    inner_container:{  marginTop: 10,
        marginBottom: 5,
        alignItems: "center",
        flex:1,
         flexDirection:'row'
        

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

