import axios from "axios";
import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar,Image, ImageBackground, Linking} from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

interface Item {
    id: string,
    nome: string,
    imagem: Image,
    preco: string,
    ingredientes: string,
   

}

function linkExternal(){
    Linking.openURL('https://github.com/gp0987gp/Pog_Burger');
  }

const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.nomeText}>{item.nome}</Text>
        <Text style={styles.itemText}>{item.preco}</Text>
        <Text style={styles.itemText}>{item.ingredientes}</Text>
        <Image style={styles.burgIcon} source={item.imagem} />
        
        
   
    </TouchableOpacity>
)


function Cardapio(): React.JSX.Element {
    const [produto, setProduto] = useState<Produto[]>([]);
    const [erro, setErro] = useState<string>("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://10.137.11.205:8000/api/produtos/index');
                setProduto(response.data);
                console.log(response.data);
                
            } catch (error) {
                setErro("Ocorreu um erro");
                console.log(error)
            }
        }
        fetchData();
    }, []);


const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../src/assets/images/bcimg.png')} resizeMode="cover" style={styles.backimg}>
            <StatusBar backgroundColor="black" barStyle='light-content'/>
            <View style={styles.header}>
            <Image source={require('../src/assets/images/pog.png')} style={styles.logoimg}/>
            </View>
            <FlatList
            showsVerticalScrollIndicator={false} 
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            </ImageBackground>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image 
                    source={require('./assets/images/home.png')}
                    style={ styles.footerHome}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('pedidos')}>
                    <Image  
                    source={require('./assets/images/pedidos.png')}
                    style={ styles.footerIcon}/>
                    
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                    source={require('./assets/images/perfil.png')}
                    style={ styles.footerIcon}
                    
                    />
                </TouchableOpacity>

                
                <TouchableOpacity style={styles.zapIcon} onPress={linkExternal}>
                    <Image
                    source={require('./assets/images/whatsapp.png')}
                    style={ styles.Iconzap}
                    />
                </TouchableOpacity>

                
                <TouchableOpacity>
                    <Image
                    source={require('./assets/images/menu.png')}
                    style={ styles.footerIcon}
                    />
                </TouchableOpacity>



            
  
            </View>
        </View>
    )       
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
       
    },
    Iconzap: {
        width: 60,
        height: 60,
        
    },



    item: {
        backgroundColor: 'black',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
        borderWidth: 2,
        borderColor:'orange',
   
    },
    header: {
        alignItems: 'center',



    },
    headerText: {
    
        
    },
    footer: {
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        borderTopWidth: 0.2,
        backgroundColor: 'orange',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10

    },
    footerIcon: {
        width: 35,
        height: 35,
        
    },

    burgIcon: {
        width: 320,
        height: 200,
        borderWidth: 1,
        borderColor:'orange',
        borderRadius:10,

    },

    nomeText: {
        fontSize: 40,
        color: 'orange',
        fontWeight:'bold'

    },

    itemText: {
        fontSize: 20,
         color: 'orange',
    
    },

    backimg: {
        flex: 1,
        justifyContent: 'center',
    },

    logoimg: {
        width:400,
        height:40,
        justifyContent: 'center',
       
    },

    zapIcon: {
        position: 'absolute',
        width: 40,
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
      },


    
});

export default Cardapio;