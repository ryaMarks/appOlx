import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native'
import noNotify from '../../../assets/img/modelos/sem_notificacoes.png'

export default function Noticias() {
  return(
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Notificações</Text>
        </View>
        <View style={{height: '92%', alignItems: 'center', justifyContent: 'center'}}>
          <Image source={noNotify}/>
          <View style={styles.fieldText}>
            <Text style={styles.text}>Você não tem notificações.</Text>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 30,
    }, 
    header:{
      backgroundColor: '#6d0ad6',
      width: '100%',
      height: '7%',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
    }, 
    textHeader:{
      color: 'white',
      fontSize: 19,
      fontWeight: 'bold'
    },
    fieldText:{
      padding: 10,
    }, 
    text: {
      fontSize: 25,
      fontWeight: 'bold',
    }
});