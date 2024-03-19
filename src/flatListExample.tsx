import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar,Image} from "react-native";

interface Item {
    id: string,
    nome: string,
    preco: string,
    ingredientes: string,
    imagem: Image,


}

const dados: Item[] = [
    {id:"1" , 
    nome:"x-Burguer", 
    preco:"29,90R$" , 
    ingredientes: "Pão, queijo, hamburguer artesanal de 100g, maionese de bacon", 
    imagem:""
},

{id:"2" , 
    nome:"x-Salada", 
    preco:"35,90R$" , 
    ingredientes: "Pão, queijo, hamburguer artesanal de 100g, maionese de bacon", 
    imagem:""
},


{id:"3" , 
    nome:"x-Bacon", 
    preco:"35,90R$" , 
    ingredientes:  "Pão, queijo, hamburguer artesanal de 100g, maionese de bacon", 
    imagem:""
},


{id:"4" , 
    nome:"x-Frango", 
    preco:"" , 
    ingredientes:  "Pão, queijo, hamburguer artesanal de 100g, maionese de bacon", 
    imagem: ""
},


{id:"5" , 
    nome:"x-POGGERS", 
    preco:"" , 
    ingredientes: "Pão, queijo, hamburguer artesanal de 100g, maionese de bacon", 
    imagem: require('./assets/images/burg1.png'),
},

];


const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.preco}</Text>
        <Text>{item.ingredientes}</Text>
        <Image source={item.imagem} />
        
        
   
    </TouchableOpacity>
)


function FlatListEXample(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="orange" barStyle='light-content'/>
            <View style={styles.header}>
                <Text style={styles.headerText}>Pog Burger</Text>
            </View>
            <FlatList
            showsVerticalScrollIndicator={false} 
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image 
                    source={require('./assets/images/home.png')}
                    style={ styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                    source={require('./assets/images/orders.png')}
                    style={ styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                    source={require('./assets/images/profile.png')}
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
        backgroundColor: 'yellow',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    header: {
        backgroundColor: 'orange',
        alignItems: 'center',
        paddingVertical: 10
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    footer: {
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
    
});

export default FlatListEXample;