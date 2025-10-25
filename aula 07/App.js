import React, { useState, useCallback, useMemo } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  SectionList,
  StyleSheet,
  Dimensions,
} from "react-native";

const produtos = [
  { nome: "Notebook", preco: 4500, categoria: "Eletrônicos" },
  { nome: "Smartphone", preco: 2500, categoria: "Eletrônicos" },
  { nome: "TV", preco: 3800, categoria: "Eletrônicos" },
  { nome: "Camiseta", preco: 80, categoria: "Vetuário" },
  { nome: "Calça", preco: 120, categoria: "Vetuário" },
  { nome: "Jaqueta", preco: 250, categoria: "Vetuário" },
  { nome: "Mesa", preco: 600, categoria: "Móveis" },
  { nome: "Cadeira", preco: 250, categoria: "Móveis" },
  { nome: "Sofá", preco: 1500, categoria: "Móveis" },
];

function agruparPorCategoria(lista) {
  const grupos = {};
  lista.forEach((item) => {
    if (!grupos[item.categoria]) grupos[item.categoria] = [];
    grupos[item.categoria].push(item);
  });
  return Object.keys(grupos).map((cat) => ({
    title: cat,
    data: grupos[cat],
  }));
}

export default function App() {
  const [busca, setBusca] = useState("");

  const produtosFiltrados = useMemo(() => {
    return produtos.filter((p) =>
      p.nome.toLowerCase().includes(busca.toLowerCase())
    );
  }, [busca]);

  const seções = useMemo(
    () => agruparPorCategoria(produtosFiltrados),
    [produtosFiltrados]
  );

  const renderItem = useCallback(
    ({ item }) => (
      <View style={styles.card}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
      </View>
    ),
    []
  );

  const renderHeader = useCallback(
    ({ section }) => <Text style={styles.header}>{section.title}</Text>,
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Catálogo de Produtos</Text>

      <TextInput
        style={styles.input}
        placeholder="Filtrar por nome..."
        value={busca}
        onChangeText={setBusca}
      />

      <SectionList
        sections={seções}
        keyExtractor={(item, index) => item.nome + index}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhum produto encontrado.</Text>
        }
      />
    </SafeAreaView>
  );
}

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30,
    color: "#2f3640",
  },
  input: {
    backgroundColor: "#fff",
    color: "#c9c9c9ff",
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    marginBottom: height * 0.02,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "#dcdde1",
    padding: 8,
    borderRadius: 6,
    marginTop: 40,
  },
  card: {
    backgroundColor: "#fff",
    marginVertical: 6,
    padding: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
  },
  nome: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2f3640",
  },
  preco: {
    color: "#718093",
  },
  vazio: {
    textAlign: "center",
    marginTop: 20,
    color: "#888",
  },
});
