import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function UserForm({navigation}) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senha2, setSenha2] = useState('');
  const [telefone, setTelefone] = useState('')
  const [erros, setErros] = useState({});

  const handleCadastro = () => {
    const _erros = {}

    if(nome.trim().length < 5) {
      _erros.nome = 'O nome completo deve ter, no mínimo, 5 caracteres'
    }
    else if (!nome.trim().includes(' ')) {
      _erros.nome = 'O nome completo deve ter, no mínimo, duas palavras'
    }

    if (!email.includes('@')) {
      _erros.email = 'Digite um e-mail válido'
    }

    if (senha.length < 6) {
      _erros.senha = 'A senha deve ter no mínimo 6 caracteres'
    }

    if(senha2 !== senha) {
      _erros.setSenha2 = 'A confirmação da senha deve ser igual à senha'
    }

    if(telefone.trim() === '') {
      _erros.telefone = 'O número de telefone deve ser preenchido'
    }
    else if(telefone.trim().length < 7) {
      _erros.telefone = 'O número de telefone deve ter, pelo menos, 7 dígitos'
    }

    setErros(_erros)
    if(Object.keys(_erros).length === 0) {
      navigation.navigate("Detalhes do Usuário", {
        nome, email, telefone
      })
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro </Text>
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
      />
      {erros?.nome ? <Text style={styles.erro}>{erros.nome} </Text> : null}

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      {erros?.email ? <Text style={styles.erro}>{erros.email} </Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      {erros?.senha ? <Text style={styles.erro}>{erros.senha} </Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Confirme a senha"
        secureTextEntry
        value={senha2}
        onChangeText={setSenha2}
      />
      {erros?.senha2 ? <Text style={styles.erro}>{erros.senha2} </Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        keyboardType="numeric"
        autoCapitalize="none"
        value={telefone}
        onChangeText={setTelefone}
      />
      {erros?.telefone ? <Text style={styles.erro}>{erros.telefone} </Text> : null}

      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign:
      'center'
  },
  input: {
    borderWidth: 1, borderColor: '#ccc', marginBottom: 15, padding:
      10, borderRadius: 8
  },
  erro: { color: 'red', marginBottom: 10 }
});