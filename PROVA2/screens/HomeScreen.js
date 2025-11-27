import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.aluno}>Aluno: Leticia Cristina Silva 21352</Text>
      <Text style={styles.turma}>Turma: Engenharia de Software</Text>
      
      <Text style={styles.titulo}>Gerenciador de Compromissos</Text>
      
      <View style={styles.botaoContainer}>
        <Button
          title="Compromissos do Usuário"
          onPress={() => navigation.navigate('CompromissosUsuario')}
        />
      </View>
      
      <View style={styles.botaoContainer}>
        <Button
          title="Compromissos da Equipe"
          onPress={() => navigation.navigate('CompromissosEquipe')}
          color="green"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f0f0f0' 
  },
  aluno: {
    fontSize: 16,
    marginBottom: 5
  },
  turma: {
    fontSize: 16,
    marginBottom: 40
  },
  titulo: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  botaoContainer: {
    marginVertical: 10,
    width: '80%'
  }
});
