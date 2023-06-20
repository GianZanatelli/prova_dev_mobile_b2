import { StyleSheet, View, TextInput, Text } from "react-native";
import { Link } from "@react-navigation/native";
import { useState } from "react";

export default function Register() {

    let [username, onChangeUsername] = useState("");
    let [email, onChangeEmail] = useState("");
    let [password, onChangePassword] = useState("");
    let [confirmPassword, onChangeConfirmPassword] = useState("");

    return (
        <View style={signup.container}>
            <Text style={signup.title}>Criar conta</Text>
            <View style={signup.textInput__container}>
            <TextInput
                    style={signup.input}
                    value={username}
                    placeholder="Username"
                    onChangeText={onChangeUsername}
                />
                <TextInput
                    style={signup.input}
                    value={email}
                    placeholder="E-mail address"
                    onChangeText={onChangeEmail}
                />
                <TextInput
                    style={signup.input}
                    value={password}
                    placeholder="Password"
                    onChangeText={onChangePassword}
                    secureTextEntry
                />
                <TextInput
                    style={signup.input}
                    value={confirmPassword}
                    placeholder="Confirm password"
                    onChangeText={onChangeConfirmPassword}
                    secureTextEntry
                />
            </View>
            <View>
                <Link
                    style={signup.signup__link}
                    to={{ screen: 'Login' }}>
                    Voltar ao login
                </Link>
                <Link
                    style={signup.forgotPassword__link}
                    to={{ screen: 'ForgotPassword' }}>
                    Esqueci minha senha
                </Link>
            </View>
        </View>
    );
}

const signup = StyleSheet.create({
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
    signup__link: {
        padding: "calc(0.8rem + 0.4vw)",
        marginBottom: "calc(1rem + 1vw)",
        borderRadius: 50,

        textAlign: "center",
        fontSize: "calc(1rem + 1vw)",
        backgroundColor: "#f54c52",
        color: "#EEF1F7",
    },
    forgotPassword__link: {
        textAlign: "center",
        fontSize: "calc(1rem + 1vw)",
        color: "#f54c52",
    },
});