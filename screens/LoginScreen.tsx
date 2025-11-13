
import React from "react";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
//pagina do login
export default function LoginScreen(){
    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')

    function handleLogin(){
        // 1 passo - Validar usuario e senha
        if(email === 'teste@teste.com' && senha === '123'){
            Alert.alert('Usuário válido');
        }else {
            Alert.alert('Usuário não encontrado')
        }
        // 2 passo - Redirecionar para tela principal   
    }
    return(
        <View style={styles.container}>
            <Text style={styles.textoLogin}>Login</Text>
            <Text>Usuário</Text>
            <TextInput style={styles.input} placeholder="Digite seu e-mail:" onChangeText={(e) => setEmail(e)}></TextInput>
            <Text>Senha</Text>
            <TextInput style={styles.input} placeholder="Informe sua senha:" onChangeText={(e) => setSenha(e)}></TextInput>
            <TouchableOpacity style={styles.botao} onPress={() => Alert.alert(`Usuario: ${email}\n senha: ${senha}`)}>
                <Text style={styles.texto} onPress={handleLogin}>Confirmar Login</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textoLogin: {
        fontSize:  60,
        fontFamily: 'Arial',
        marginBottom: 40, 
        fontWeight: 'bold',
    },
    input: {
        padding: 10,
        height: 40,
        width: 200,
        margin: 5,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    botao: {
        borderColor: '#00002b',
        borderRadius: 20,
        height: 30,
        width: 120,
        backgroundColor: '#5130f6',
    },
    texto: {
        padding: 5,
        textAlign: 'center',
        color: '#ede4ed',
    },
  });
  