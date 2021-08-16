import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const estilos = StyleSheet.create({
    grandeAzul: {
        color: "#6A7EBB",
        fontWeight: "bold",
        fontSize: 20,
    },
    negro: {
        color: "black",
        fontWeight: "bold",
        fontSize: 17,
    },
});

export default function App() {
    return (
        <View style={styles.container}>
            <Image
                style={{ width: 700, height: 350, resizeMode: "stretch" }}
                source={require("./assets/img/programacion.jpg")}
            />
            <Text style={estilos.grandeAzul}>David Alejandro Bonilla </Text>
            <Text style={estilos.negro}> BA181927 </Text>

            <Text style={estilos.negro}>
                Ingeniería en Ciencias de la Computación
            </Text>
            <Text style={estilos.negro}> C# </Text>
            <Text style={[estilos.negro]}>
                Baloncesto, Video Juegos, Viajes
            </Text>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
