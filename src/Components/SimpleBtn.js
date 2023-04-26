import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';


export default function SimpleBtn({label, action}) {
  return(
    <TouchableOpacity style={{paddingTop: 10}} onPress={action}>
        <View style={styles.btn}>
        <Text style={styles.text}>{label}</Text>
        </View>
    </TouchableOpacity>
  );
}

/* Parametros de CSS*/
const styles = StyleSheet.create({
    btn:{
        backgroundColor: 'white',
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#6d0ad6',
    }
})