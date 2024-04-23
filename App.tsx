

import React from 'react';

import Cardapio from './src/Cardapio';
import CadastroProduto from './src/interface/screens/CadastroProduto';
import CadastroCliente from './src/interface/screens/CadastroCliente';
import Carrinho from './src/assets/Carrinho';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


function App(): React.JSX.Element {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Cardapio' component={Cardapio}
        options={{headerShown: false}}/>

        <Stack.Screen name='Carrinho' component={Carrinho}
        options={{headerShown: false}}/>

        <Stack.Screen name='CadastroProduto' component={CadastroProduto}
        options={{headerShown: false}}/>

        <Stack.Screen name='CadastroCliente' component={CadastroCliente}
        options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>


  );
}


export default App;
