import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar,Image, ImageBase} from "react-native";

interface Item {
    id: string;
    nome: string;
    preco: string;
    ingredientes: string;
    image: Image;
}

const dados: Item[] = [
    {id:"1" , nome: "João", preco:"16" , ingredientes: "joao@teste.com,", image: require('../assets/images/burg1.png')},
    
];


const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.preco}</Text>
        <Text>{item.ingredientes}</Text>
    
        
            </TouchableOpacity>
)


function Cardapio(): React.JSX.Element {
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
        backgroundColor: 'green',
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
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10

    },
    footerIcon: {
        width: 30,
        height: 30 
        
    },
    
});

export default Cardapio; 