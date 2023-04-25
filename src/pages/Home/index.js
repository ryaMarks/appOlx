import React from 'react';
import {
  View, 
  StyleSheet, 
  ScrollView,
} from 'react-native';

/*importa os componentes*/
import BtnPlus from '../../Components/Button';
import MenuI from '../../Components/MenuItems';
import Card from '../../Components/Card';
/*importa o arquivo com os produtos*/
import { Produtos } from '../../../assets/base/Products';


export default function Home() {
  return(
    <View style={styles.container}>
      <MenuI/>
      <ScrollView disableIntervalMomentum={true}>
        {
          Produtos.map((item) => {
            return(
            <Card 
              key={item.id}
              label={item.nome} 
              preco={item.preço} 
              data={item.data}
              local={item.localidade}
              linkImg={item.imagem}
              acao={ () => alert(item.nome)}
            />
            )
          })
        }
      </ScrollView>
      <View style={styles.button}>
        <BtnPlus labelButton="Anunciar agora" onpress={() => alert('anunciar')}/>
      </View>
    </View>
  );
}
/* Configuração CSS */

const corFundo = '#f0f5f1';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    position:'relative', 
    margin: 0,
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: corFundo,
  },
  button:{
    padding: 10,
    position:'absolute',
    bottom:0, 
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    backgroundColor: corFundo,
  }
});