
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
//pagina do login
export default function LoginScreen(){
    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')
    return(
        <View style={styles.container}>
            <Text>Usuário {email}</Text>
            <TextInput style={styles.input} placeholder="Digite seu e-mail:" onChangeText={(e) => setEmail(e)}></TextInput>
            <Text>Senha {senha}</Text>
            <TextInput style={styles.input} placeholder="Informe sua senha:" onChangeText={(e) => setSenha(e)}></TextInput>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.texto}>Confirmar Login</Text>
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
    input: {
        padding: 10,
        height: 40,
        width: 200,
        margin: 5,
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
  