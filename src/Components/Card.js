import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Imagem from '../../assets/img/modelos/isso.png'



export default function Card({label, preco, data, local, linkImg, acao}) {
  return(
    <View style={styles.base}>
        <TouchableOpacity  style={styles.btn} onPress= {acao} >
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
                    <Text style={styles.principal}>{label}</Text>
                    <Text style={styles.preco}>R$ {preco}</Text>
                    <Text style={styles.date}>{data}, {local}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
  );
}

/* Parametros de CSS*/

const fontTam = 15;
const styles = StyleSheet.create({
    container: {
        height: 130,
        width: 380,
        borderRadius: 5,
        flexDirection: 'row'
    },
    base:{
        padding: 3, 
        borderRadius: 20,
    },
    imagem:{
        height: '100%',
        width: '35%',
        textAlign: 'center',
        backgroundColor: 'white',
    },
    conteudo:{
        backgroundColor: 'white',
        height: '100%',
        width: '65%',
        textAlign: 'center',
        justifyContent: 'space-between',
    },
    principal:{
        fontSize: fontTam,
        padding: 10,
    },
    preco:{
        fontSize: fontTam,
        paddingLeft: 10,
        fontWeight: 'bold',
    },
    date:{
        fontSize: fontTam - 2,
        color: 'gray',
        paddingLeft: 10,
        paddingTop: -10
    },
    aImagem:{
        height: '100%',
        width: '100%',
        borderRadius: 0
    }
})