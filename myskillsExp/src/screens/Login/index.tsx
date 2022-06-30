import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Nubank } from "../Nubank";

export function Login() {
    const navigation = useNavigation()

    return(

        <View style={styles.container}>
            

            <Image
                source={require('../../assets/img/Logo.png')}
                style={styles.logo}
            />
                <TextInput
                    style={styles.input}
                    placeholder="CPF" 
                />

                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Senha"
                />
            

            <TouchableOpacity
                style={styles.botton}
                onPress={ () => navigation.navigate('Nubank')}
            >
                <Text style={styles.bottonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botton2}
            >
                <Text style={styles.textPurple}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botton2}
            >
                <Text style={styles.textPurple}>Ainda não sou cliente</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#820AD1'
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginLeft: 9
    },
    input: {
        marginTop: 10,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3
    },
    botton: {
        width: 300,
        height: 42,
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'

    },
    bottonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },
    textPurple: {
        color: '#fff',
        fontSize: 12,
        alignItems: 'center',
        marginTop: 8
    },
    botton2: {
        width: 120,
        height: 42,
        marginTop: 0,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
