import { StyleSheet, View, TextInput, Text } from "react-native";
import { Link } from "@react-navigation/native";
import { useState } from "react";

export default function Login() {

    let [username, onChangeUsername] = useState("");
    let [password, onChangePassword] = useState("");

    return (
        <View style={signin.container}>
            <Text style={signin.title}>Bem-vindo novamente!</Text>
            <View style={signin.textInput__container}>
                <TextInput
                    style={signin.input}
                    value={username}
                    placeholder="Username"
                    onChangeText={onChangeUsername}
                />
                <TextInput
                    style={signin.input}
                    value={password}
                    placeholder="Password"
                    onChangeText={onChangePassword}
                    secureTextEntry
                />
            </View>
            <View>
                <Link
                    style={signin.signin__link}
                    to={{ screen: 'Dashboard' }}>
                    Painel
                </Link>
                <View style={signin.line__container}>
                    <View style={signin.line}></View>
                    <Text style={signin.line__text}>ou</Text>
                    <View style={signin.line}></View>
                </View>
                <Link
                    style={signin.signin__link}
                    to={{ screen: 'Register' }}>
                    Registro
                </Link>
                <Link
                    style={signin.forgotPassword__link}
                    to={{ screen: 'ForgotPassword' }}>
                    Esqueci minha senha
                </Link>
            </View>
        </View>
    );
}

const signin = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",

        padding: 20,
        backgroundColor: "#630624",
    },
    title: {
        fontSize: "calc(2rem + 2vw)",
        fontWeight: 200,
        color: "#EEF1F7",
    },
    input: {
        padding: "calc(0.8rem + 0.4vw)",
        marginBottom: "calc(1rem + 1vw)",
        borderRadius: 50,

        fontSize: "calc(1rem + 1vw)",
        backgroundColor: "#282F3B",
        color: "#EEF1F7",
    },
    signin__link: {
        padding: "calc(0.8rem + 0.4vw)",
        borderRadius: 50,

        textAlign: "center",
        fontSize: "calc(1rem + 1vw)",
        backgroundColor: "#f54c52",
        color: "#EEF1F7",
    },
    forgotPassword__link: {
        marginTop: "calc(1rem + 1vw)",

        textAlign: "center",
        fontSize: "calc(1rem + 1vw)",
        color: "#f54c52",
    },
    line__container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        marginTop: "calc(0.5rem + 0.5vw)",
        marginBottom: "calc(0.5rem + 0.5vw)",
    },
    line: {
        width: "40%",
        height: 0.5,
        backgroundColor: "#404855",
    },
    line__text: {
        fontSize: "calc(1rem + 1vw)",
        textAlign: "center",
        color: "#404855",
    },
});