import { useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"

export default function UseStatePage() {
  const [valor, setValor] = useState(0);
  //       ⬆      ⬆.         ⬆
  //    Atual,  FN p/mudar   inicial

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");

  function handleSomaValor(value: number) {
    setValor(value + 1)
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        backgroundColor: "#f0c",
        padding: 20
      }}
    >
      {/* ===== Versão Simples ===== */}
      {/* <Text>Valor atual: {valor}</Text>

      <TouchableOpacity
        onPress={() => handleSomaValor(valor)}
        style={{
          borderWidth: 1,
          borderColor: "#000",
          padding: 9,
          borderRadius: 9
        }}
      >
        <Text>Me aperte</Text>
      </TouchableOpacity> */}

      {/* ===== Versão Formulario ===== */}
      {/* Form */}
      <View
        style={{
          backgroundColor: "#cee710",
          // flex: 1
          width: "100%",
          gap: 10
        }}
      >
        <TextInput
          style={{
            borderColor: "#000",
            borderWidth: 1,
            width: "100%",
            backgroundColor: '#fff',
            borderRadius: 10,
          }}
          value={nome}
          onChangeText={(text) => setNome(text)}
          placeholderTextColor="#00f"
          placeholder="Digite seu nome"
        />

        <TextInput
          style={{
            borderColor: "#000",
            borderWidth: 1,
            width: "100%",
            backgroundColor: '#fff',
            borderRadius: 10,
          }}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor="#00f"
          placeholder="Digite seu email"
        />

        <TextInput
          style={{
            borderColor: "#000",
            borderWidth: 1,
            width: "100%",
            backgroundColor: '#fff',
            borderRadius: 10,
          }}
          value={idade}
          onChangeText={(text) => setIdade(text)}
          placeholderTextColor="#00f"
          placeholder="Digite sua idade"
          keyboardType=""
        />
      </View>
    </View>
  )
}