import { StyleSheet, Text, View, TextInput } from "react-native";;
import { Link } from "@react-navigation/native";
import { useState } from "react";

export default function ForgotPassword() {

    let [email, onchangeEmail] = useState("");

    return (
        <View style={forgotPassword.container}>
            <Text style={forgotPassword.title}>Esqueci minha senha</Text>
            <View>
                <Text style={forgotPassword.text}>Digite seu email de recuperação</Text>
                <TextInput
                    style={forgotPassword.input}
                    value={email}
                    placeholder="E-mail address"
                    onChangeText={onchangeEmail}
                />
            </View>
            <Link
                style={forgotPassword.signin__link}
                to={{ screen: 'Login' }}>
                Restaurar senha
            </Link>
            <View>
                <Text style={forgotPassword.text}>Não tem uma conta?</Text>
                <Link
                    style={forgotPassword.signup__link}
                    to={{ screen: 'Register' }}>
                    Volte para registro
                </Link>
            </View>

        </View>
    );
}

const forgotPassword = StyleSheet.create({
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
    text: {
        marginBottom: "calc(1rem + 1vw)",

        fontSize: "calc(1rem + 1vw)",
        fontWeight: 200,
        textAlign: "center",
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
        marginBottom: "calc(1rem + 1vw)",
        borderRadius: 50,

        textAlign: "center",
        fontSize: "calc(1rem + 1vw)",
        backgroundColor: "#f54c52",
        color: "#EEF1F7",
    },
    signup__link: {
        textAlign: "center",
        fontSize: "calc(1rem + 1vw)",
        color: "#f54c52",
    },
});