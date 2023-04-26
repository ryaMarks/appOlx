import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SimpleBtn from '../../Components/SimpleBtn';

export default function Profile() {
  return(
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Ola, Ryam Marques</Text>
        </View>
        <View style={styles.body}>
          <SimpleBtn label="Meu perfil"/>
          <SimpleBtn label="Meus anúncios"/>
          <SimpleBtn label="Favoritos"/>
          <SimpleBtn label="Buscas salvas"/>
          <SimpleBtn label="Plano Profissional"/>
          <SimpleBtn label="Segurança e privacidade"/>
          <SimpleBtn label="Configurações"/>
          <SimpleBtn label="Informações"/>
          <SimpleBtn label="Sobre o aplicativo"/>
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
  body:{
    justifyContent: 'center',
    width: '100%',
    padding: 10,
  }
});