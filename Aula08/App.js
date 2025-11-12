import React, { useState } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const [fotoPerfil, setFotoPerfil] = useState(null);

  const usarCamera = async () => {
    const perm = await ImagePicker.requestCameraPermissionsAsync();
    if (perm.status !== "granted") return;

    const pic = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!pic.canceled) {
      setFotoPerfil(pic.assets[0].uri);
    }
  };

  const pegarDaGaleria = async () => {
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (perm.status !== "granted") return;

    const img = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!img.canceled) {
      setFotoPerfil(img.assets[0].uri);
    }
  };

  const limparFoto = () => {
    setFotoPerfil(null);
  };

  return (
    <View style={estilos.area}>
      <Text style={estilos.titulo}>Meu Perfil</Text>

      {fotoPerfil ? (
        <Image source={{ uri: fotoPerfil }} style={estilos.foto} />
      ) : (
        <View style={[estilos.foto, estilos.fotoVazia]}>
          <MaterialCommunityIcons name="account" size={75} />
        </View>
      )}

      <View style={estilos.botaoBox}>
        <Button title="Tirar Foto" onPress={usarCamera} />
      </View>

      <View style={estilos.botaoBox}>
        <Button title="Da Galeria" onPress={pegarDaGaleria} />
      </View>

      {fotoPerfil && (
        <View style={estilos.botaoBox}>
          <Button title="Apagar Foto" onPress={limparFoto} />
        </View>
      )}
    </View>
  );
}

const TAM = 150;

const estilos = StyleSheet.create({
  area: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 10,
  },
  foto: {
    width: TAM,
    height: TAM,
    borderRadius: TAM / 2,
    marginVertical: 15,
  },
  fotoVazia: {
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  botaoBox: {
    marginTop: 6,
    width: 130,
  },
});
