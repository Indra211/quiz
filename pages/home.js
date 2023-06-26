import React from "react"; 
import { StyleSheet,View,Text,TouchableOpacity,Image } from "react-native";
import Title from "../components/title";

const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Title />
            <View style={styles.container1}>
                <Image
                    style={{height:300,width:300,}}
                    source={{ uri:'https://img.freepik.com/premium-vector/quiz-cartoon-logo_430232-69.jpg'}}
                />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Quiz")}
            style={styles.button}>
                <Text>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        paddingTop:20,
        paddingHorizontal:20,
        alignItems:'center',
        justifyContent:'center',
        height:'100%'
    },
    container1:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    button:{
        height:'5%',
        width:'60%',
        borderWidth:1,
        borderColor:'#852963',
        marginTop:50 ,   
        borderRadius:50,
        backgroundColor:'#1A759F',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    }
})