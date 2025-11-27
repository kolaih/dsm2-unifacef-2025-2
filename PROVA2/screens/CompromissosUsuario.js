import { View, Text, FlatList, StyleSheet } from 'react-native';

const dadosUsuario = [
  { id: '1', compromisso: 'Reunião "Daily"', horario: '9h30' },
  { id: '2', compromisso: 'Reunião com cliente Carros & Carros', horario: '14h00' },
  { id: '3', compromisso: 'Prazo final Projeto X', horario: '16h00' },
];

export default function CompromissosUsuario() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.headerInfo}>leticia cristina silva - engenharia de software</Text>
      <Text style={styles.titulo}>Meus Compromissos</Text>
      
      <FlatList
        data={dadosUsuario}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.textoCompromisso}>{item.compromisso}</Text>
            <Text style={styles.textoHorario}>{item.horario}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20,
    backgroundColor: '#fff' 
  },
  headerInfo: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
    textAlign: 'center'
  },
  titulo: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20,
    textAlign: 'center',
    color: '#007AFF'
  },
  item: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  textoCompromisso: {
    fontSize: 16,
    flex: 1, 
    marginRight: 10
  },
  textoHorario: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333'
  }
});
