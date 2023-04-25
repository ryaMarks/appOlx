import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';



export default function MessageChat({label, cliente, data, descMessage, acao, online, newMsg, numMsg, linkImg}) {
  return(
    <View style={styles.base}>
        <TouchableOpacity  style={styles.btn} >
            <View style={styles.container}>
                <View style={styles.imagem}>  
                    <Image
                        style={styles.aImagem}
                        source={{
                            uri: linkImg,
                        }}
                    />
                </View>
                <View style={styles.conteudo}>
                    <View style={{flexDirection: 'row',  justifyContent: 'space-between',}}>
                        <Text style={styles.principal}>{label}</Text>
                        <Text style={styles.data}>{data}</Text>
                    </View>
                    <Text style={styles.client}>
                        
                        {online
                            ? <View style={{backgroundColor: 'green', width: 10, height: 10, borderRadius: 50,}}></View>
                            : <Text></Text>
                        }
                        {cliente}
                    </Text>
                    {newMsg
                        ? <Text style={styles.messageNew}>{descMessage}</Text>
                        : <Text style={styles.message}>{descMessage}</Text>
                    }
                    
                </View>
            </View>
        </TouchableOpacity>
    </View>
  );
}

/* Parametros de CSS*/

const fontTam = 14;
const styles = StyleSheet.create({
    container: {
        height: 130,
        flexDirection: 'row',
    },
    base:{
        padding: 3,
        borderRadius: 50,
    },
    imagem:{
        height: '100%',
        width: '35%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    conteudo:{
        backgroundColor: 'white',
        height: '100%',
        width: '65%',
        textAlign: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    principal:{
        fontSize: fontTam,
        padding: 10,
    },
    client:{
        fontSize: fontTam,
        paddingLeft: 10,
    },
    message:{
        fontSize: fontTam - 2,
        color: 'gray',
        paddingLeft: 10,
        paddingTop: -40,
    },
    messageNew:{
        fontSize: fontTam - 2,
        color: 'green',
        paddingLeft: 10,
        paddingTop: -40,
    },
    aImagem:{
        height: '75%',
        width: '75%',
        borderRadius: 10,
    }
})