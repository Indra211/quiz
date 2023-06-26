import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, View, Text,Image} from "react-native";

const Result = ({navigation,route}) => {
    const {score} = route.params
    const resultPic = score < 40 ? "https://img.freepik.com/free-vector/flat-people-asking-questions-illustration_23-2148910626.jpg" :"https://media.istockphoto.com/id/659111108/vector/business-goal-achievement-vector-happy-successful-businessman-holding-golden-cup-award-in-hand.jpg?s=612x612&w=0&k=20&c=-0pdHdUDSO40Y6LhtELD64ECmvAvtDR4hP6CFipZoeg="
    return (
        <View>
            <View style={{justifyContent:'center',alignItems:'center',paddingVertical:20,marginTop:'20%'}}>
                <Text style={{fontSize:30,fontWeight:'600'}}>Score</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:30,fontWeight:'600'}}>{score}</Text>
            </View>
            {<View style={{ justifyContent: 'center', alignItems: 'center' ,paddingTop:60}}>
                <Image
                    style={{ height: 300, width: 300, }}
                    source={{ uri: resultPic }}
                />
            </View>}
            <View> 
                <TouchableOpacity onPress={() => navigation.navigate("Home")}
                    style={{ alignItems: 'center', justifyContent: 'center', height: '15%', width: '60%', borderRadius: 50, borderWidth: 1, borderColor: 'blue', backgroundColor: '#abcdef', marginLeft: '20%', marginTop: '50%' }}
                >
                    <Text>HOME</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result


const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: 40,
        paddingHorizontal: 20

    }})