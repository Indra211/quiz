import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Title = () => {
    return (
        <View style={styles.title}>
            <Text style={styles.text}>Quiz App</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    title:{
        paddingVertical: 16,
        justifyContent:'center',
        alignContent:'center',
    },
    text:{
        fontSize:30,
        fontWeight:'600'
    }
})