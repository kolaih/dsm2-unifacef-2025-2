import { View, Text, SectionList, StyleSheet } from 'react-native';

const dadosEquipe = [
  { 
    title: '(Eu)', 
    data: [
      '9h30 Reunião "Daily"', 
      '14h00: Reunião com cliente Carros & Carros', 
      '16h00: Prazo final Projeto X'
    ] 
  },
  { 
    title: 'Jurema(Chefe)', 
    data: [
      '9h30 Reunião "Daily"', 
      '12h00 Almoço com a diretoria', 
      '15h00 Saída viagem'
    ] 
  },
  { 
    title: 'Adebal', 
    data: [
      '9h30 Reuniao "Daily"', 
      '13h30 Visita técnica Uni-FACEF', 
      '16h30 Prazo final Projeto X'
    ] 
  },
];

export default function CompromissosEquipe() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerInfo}>Leticia Cristina Silva 21352 - Engenharia de Software</Text>
      <Text style={styles.titulo}>Agenda da Equipe</Text>
      
      <SectionList
        sections={dadosEquipe}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.textoItem}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
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
    color: 'green'
  },
  header: {
    fontSize: 20,
    backgroundColor: '#f2f2f2',
    padding: 10,
    fontWeight: 'bold',
    marginTop: 15,
    borderLeftWidth: 5,
    borderLeftColor: 'green'
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  textoItem: {
    fontSize: 16
  }
});
