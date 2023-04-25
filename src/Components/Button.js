import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {Entypo} from '@expo/vector-icons'


const Button = ({labelButton, onpress}) => {
    return(
        <TouchableOpacity 
            style={styles.button}
            onPress={onpress}
        >
            <View style={{paddingRight: 15}}>
                <Entypo name='camera' size={25} color="white"/>
            </View>
            <Text style={styles.text}>{labelButton}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#f18000',
        width: 350,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
    },
    text:{
        color: 'white',
        fontSize: 17,
    }
})