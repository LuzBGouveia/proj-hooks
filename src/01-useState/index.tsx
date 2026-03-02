import { useState } from "react"
import { Text, TextInput, Touchable, TouchableOpacity, View } from "react-native"
import EvilIcons from '@expo/vector-icons/EvilIcons';

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

  function submit() {
    console.log({
      nome,
      email,
      idade
    })
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
          keyboardType="email-address"
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
          keyboardType="decimal-pad"
        />

        <TouchableOpacity
          onPress={submit}
          style={{
            padding: 10,
            borderRadius: 9,
            backgroundColor: '#fff',
            flexDirection: "row",
            alignItems: "center"
            // alignItems: "center"
          }}
        >
          <EvilIcons name="arrow-right" size={24} color="black" />

          <Text
            style={{
              backgroundColor: "#f0c",
              textAlign: "center",
              width: "100%"
            }}
          >
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}