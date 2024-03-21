import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar,Image, ImageBackground, Linking} from "react-native";

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




const dados: Item[] = [
    {id:"1" , 
    nome:"Cheese-Burguer", 
    imagem: require('./assets/imagesburg/cheeseburger.png'),
    preco:"29,90R$" , 
    ingredientes: "Pão, queijo, hamburguer artesanal de 100g, maionese de bacon", 
},

{id:"2" , 
    nome:"Cheese-Burger-Duplo", 
    preco:"35,90R$" , 
    ingredientes: "Pão, queijo, hamburguer artesanal de 100g, maionese de bacon", 
    imagem: require('./assets/imagesburg/Cheeseburger_duplo.png'),
},

{id:"3" , 
    nome:"Pog-Salada-Duplo", 
    preco:"35,90R$" , 
    ingredientes:  "Pão, queijo, hamburguer artesanal de 100g, maionese de bacon", 
    imagem: require('./assets/imagesburg/pog_salada_dp.png'),
},

{id:"4" , 
    nome:"Pog-Salada-Mini", 
    preco:"" , 
    ingredientes:  "Pão, queijo, hamburguer artesanal de 100g, maionese de bacon", 
    imagem: require('./assets/imagesburg/pog-salada-mini.png'),
},


{id:"5" , 
    nome:"Pog-Salada", 
    preco:"" , 
    ingredientes: "Pão, queijo, hamburguer artesanal de 100g, maionese de bacon", 
    imagem: require('./assets/imagesburg/pog-salada.png'),
},

{id:"6" , 
nome:"Pog-Burger", 
preco:"35,90R$" , 
ingredientes: "Pão, queijo, hamburguer artesanal de 100g, maionese de bacon", 
imagem: require('./assets/imagesburg/pog-burger.png'),
},

{id:"7" , 
nome:"x-Frango Salada", 
imagem: require('./assets/imagesburg/pog-burger.png'),
preco:"35,90R$" , 
ingredientes: "Pão, queijo, hamburguer artesanal de 100g, maionese de bacon", 
},

{id:"8" , 
nome:"x-Frango Salada", 
imagem: require('./assets/imagesburg/pog-burger.png'),
preco:"35,90R$" , 
ingredientes: "Pão, queijo, hamburguer artesanal de 100g, maionese de bacon", 
},

{id:"9" , 
nome:"x-Frango Salada", 
imagem: require('./assets/imagesburg/pog-burger.png'),
preco:"35,90R$" , 
ingredientes: "Pão, queijo, hamburguer artesanal de 100g, maionese de bacon", 
},

{id:"10" , 
nome:"x-Frango Salada", 
imagem: require('./assets/imagesburg/pog-burger.png'),
preco:"35,90R$" , 
ingredientes: "Pão, queijo, hamburguer artesanal de 100g, maionese de bacon", 
},

{id:"11" , 
nome:"x-Frango Salada", 
imagem: require('./assets/imagesburg/pog-burger.png'),
preco:"35,90R$" , 
ingredientes: "Pão, queijo, hamburguer artesanal de 100g, maionese de bacon", 
},

{id:"12" , 
nome:"x-Frango Salada", 
imagem: require('./assets/imagesburg/pog-burger.png'),
preco:"35,90R$" , 
ingredientes: "Pão, queijo, hamburguer artesanal de 100g, maionese de bacon", 
},

{id:"13" , 
nome:"Água", 
imagem: require('./assets/imagesburg/pog-burger.png'),
preco:"35,90R$" , 
ingredientes: "Pão, queijo, hamburguer artesanal de 100g, maionese de bacon", 
},

{id:"14" , 
nome:"Guaraná", 
imagem: require('./assets/imagesburg/pog-burger.png'),
preco:"35,90R$" , 
ingredientes: "Pão, queijo, hamburguer artesanal de 100g, maionese de bacon", 
},

{id:"15" , 
nome:"Coca Cola", 
imagem: require('./assets/imagesburg/pog-burger.png'),
preco:"35,90R$" , 
ingredientes: "Pão, queijo, hamburguer artesanal de 100g, maionese de bacon", 
},




];


const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.nomeText}>{item.nome}</Text>
        <Text style={styles.itemText}>{item.preco}</Text>
        <Text style={styles.itemText}>{item.ingredientes}</Text>
        <Image style={styles.burgIcon} source={item.imagem} />
        
        
   
    </TouchableOpacity>
)


function FlatListEXample(): React.JSX.Element {
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
                    style={ styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image  
                    source={require('./assets/images/pedidos.png')}
                    style={ styles.footerIcon}
                    />
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
                    style={ styles.footerIcon}
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

export default FlatListEXample;