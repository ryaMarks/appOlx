import React from 'react';
import {
  View, 
  StyleSheet, 
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';

/*importa os componentes*/
import Card from '../../Components/Card';
/*importa o arquivo com os produtos*/
import { Produtos } from '../../../assets/base/Products';



export default function Favoritos() {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Favoritos</Text>
      </View>
      <ScrollView disableIntervalMomentum={true}>
        {
          Produtos.map((item) => {
            if(item.favorito == 1){
              return(
                <Card 
                  key={item.id}
                  label={item.nome} 
                  preco={item.preço} 
                  data={item.data}
                  local={item.localidade}
                  linkImg={item.imagem}
                />
              )
            }
          })
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    position:'relative', 
    margin: 0,
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#f0f5f1',
  },
  button:{
    padding: 10,
    position:'absolute',
    bottom:0, 
    marginTop: 10,
    width: '100%',
    alignItems: 'center'
  },
  text: {
    color: '#6d0ad6',
    fontSize: 18,
    fontWeight: 'bold'
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
  }
});