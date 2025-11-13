import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

export default function LoginScreen() {
  const navigation = useNavigation(); 
  const [email, setEmail] = useState('')
  const [senha, setSenha ] = useState('')

  function handleLogin(){
    //1 passo - Validar usuario e senha
    if(email === 'teste@teste.com' && senha === '123'){
      navigation.navigate('Home')
    } else {
      Alert.alert('Usuário não encontrado');
    }
    //2 passo - Redirecionar para tela principal
  }

  return (
    <View style={styles.container}>
      <Text>Usuário</Text>
      <TextInput placeholder="Digite seu email" 
      onChangeText={(e) => setEmail(e) } ></TextInput>
      <Text>Senha</Text>
      <TextInput placeholder="Informe sua senha" 
      onChangeText={(e) => setSenha(e)}></TextInput>
      <Button title="Confirmar" onPress={handleLogin}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});