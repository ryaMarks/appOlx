import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';


export default function Components() {
  return(
    <View style={styles.container}>
        <TouchableOpacity 
            style={styles.button}
            onPress= {() => alert('foi')}
        >
            <Text style={styles.text}>DDD 98-...</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.button2}
            onPress= {() => alert('foi')}
        >
            <Text style={styles.text}>Categoria</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.button2}
            onPress= {() => alert('foi')}
        >
            <Text style={styles.text}>Filtros</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    button:{
        paddingVertical: 10,
        flex: 1,
        alignItems: 'center',
    },
    button2:{
        paddingVertical: 10,
        flex: 1,
        alignItems: 'center',
        borderColor: 'gray',
        borderLeftWidth: 0.3,
    },
    text:{
        color: '#6d0ad6',
        fontSize: 18,
    }
})