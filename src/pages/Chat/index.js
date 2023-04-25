import React from 'react';
import {View, Text, StyleSheet, ScrollView } from 'react-native'
import {chatsData} from '../../../assets/base/chats'
import MessageChat from '../../Components/MessageCard';

export default function Chat() {
  return(
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Mensagens</Text>
      </View>
      <ScrollView disableIntervalMomentum={true}>
        {chatsData.map((item) => {
          return(
            <MessageChat 
              key={item.id} 
              label={item.descricao} 
              data={item.data} 
              cliente={item.interessado} 
              descMessage={item.message}
              online={item.online}
              newMsg={item.newMsg}
              numMsg={item.numberNewMsg}
              linkImg={item.imagem}
            />
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        width: '100%',
        backgroundColor: '#f0f5f1',
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
    text: {
      color: '#6d0ad6',
      fontSize: 18,
      fontWeight: 'bold',
    }
});