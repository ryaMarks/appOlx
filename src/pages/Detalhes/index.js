import React from 'react';
import {
  View, 
  Text,
  StyleSheet, 
  ScrollView,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


/*importa o arquivo com os produtos*/
import { Produtos } from '../../../assets/base/Products';
import BtnPlus from '../../Components/Button';



export default function Detalhes() {
    const Tab = createBottomTabNavigator();
    return(
        <NavigationContainer>
            <View style={styles.container}>
            <Text>Detalhes</Text>
            
            <View style={styles.button}>
                <BtnPlus labelButton="Inserir Anuncio" />
            </View>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    position:'relative', 
    margin: 0,
    alignItems: 'center',
  },
  button:{
    padding: 10,
    position:'absolute',
    bottom:0, 
    marginTop: 10,
  }
});