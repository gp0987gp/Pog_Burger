import React, { useState } from "react";
import { StatusBar, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from 'axios';

const CadastroCliente: React.FC = () => {

    const [cliente, setCliente] = useState<Cliente[]>([]);
    const [nome, setNome] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');



    const [imagem, setImagem] = useState<any>('');

    const cadastrarCliente = async () => {
        try{
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('endereco', endereco);
        formData.append('telefone', telefone);
        formData.append('email', email);
        formData.append('cpf', cpf);
        formData.append('senha', senha);
        formData.append('imagem', {
            uri:imagem,
            type: 'image/jpeg',
            name: new Date() + '.jpg'
        });

        const response = await axios.post('http://10.137.11.209:8000/api/produtos', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

    }catch(error) {
        console.log(error);
    }
    }

    const abrirCamera = () => {
        const options = {
            mediaType:'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchCamera(options, response => {
            if(response.didCancel){
                console.log('cancelado pelo usuario');
            }
            else if(response.error){
                console.log('erro ao abrir a camera');
            }
            else{
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
                console.log(imageUri);
            }
        });
    }

    const selecionarImagem = () => {
        const options = {
            mediaType: 'phto',
            includeBase64: false, 
            maxHeight: 2000,
            maxWidht: 2000
        };

        launchImageLibrary(options, (response)=>{
            if(response.didCancel){
                console.log('cancelado pelo usuário');
            } else if(response.error) {
                console.log('erro ao abrir a galeria');
            } else {
                let imageUri = response.uir || response.assets?.[0]?.uri;
                setImagem(imageUri);
            }
        });
    }


    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <View style={styles.header}>
                
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="Nome do Cliente"
                    value={nome}
                    onChangeText={setNome} />

                <TextInput style={styles.input}
                    placeholder="Endereço"
                    value={endereco}
                    onChangeText={setEndereco}/>
                
                <TextInput style={styles.input}
                    placeholder="telefone"
                    value={telefone}
                    onChangeText={setTelefone}/>

                <TextInput style={styles.input}
                    placeholder="email"
                    value={email}
                    onChangeText={setEmail}/>

                <TextInput style={styles.input}
                    placeholder="cpf"
                    value={cpf}
                    onChangeText={setCpf}/>

                <TextInput secureTextEntry={true} style={styles.input}
                    placeholder="Senha"
                    value={senha}
                    onChangeText={setSenha}/>

                
                

               

                    <View style={styles.alinhamentoImagensSelecionada}>
                        {imagem ? <Image source={{uri:imagem}} style={styles.imagemSelecionado} /> : null}
                    </View>

                    <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
                        <Text style={styles.imageButtonText}>Selecionar Foto</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                        <Text style={styles.imageButtonText}>Tirar Foto</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.imageButton} onPress={cadastrarCliente}>
                        <Text style={styles.imageButtonText}>Cadastrar Cliente</Text>
                    </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    }, header: {
        backgroundColor: 'purple',
        paddingVertical: 10,
        alignItems: 'center'
    }, headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        justifyContent: 'center',
    },
    form: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10
    },
    input: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    imageButton: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop:10,
        justifyContent: 'center',
    },
    imageButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    imagemSelecionado: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10
    },
    alinhamentoImagensSelecionada: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }






});

export default CadastroCliente;