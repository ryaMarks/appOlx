import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Profile() {
  return(
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Ola, Ryam Marques</Text>
        </View>
        <View style={styles.body}>

        <TouchableOpacity style={{paddingTop: 10}}>
            <View style={styles.btn}>
              <Text style={styles.text}>Meu perfil</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{paddingTop: 10}}>
            <View style={styles.btn}>
              <Text style={styles.text}>Meus anúncios</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{paddingTop: 10}}>
            <View style={styles.btn}>
              <Text style={styles.text}>Favoritos</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={{paddingTop: 10}}>
            <View style={styles.btn}>
              <Text style={styles.text}>Buscas salvas</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{paddingTop: 10}}>
            <View style={styles.btn}>
              <Text style={styles.text}>Plano Profissional</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{paddingTop: 10}}>
            <View style={styles.btn}>
              <Text style={styles.text}>Segurança e privacidade</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{paddingTop: 10}}>
            <View style={styles.btn}>
              <Text style={styles.text}>Configurações</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{paddingTop: 10}}>
            <View style={styles.btn}>
              <Text style={styles.text}>Informações</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{paddingTop: 10}}>
            <View style={styles.btn}>
              <Text style={styles.text}>Sobre o aplicativo</Text>
            </View>
          </TouchableOpacity>

          
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
  },
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
});