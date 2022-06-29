import React from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';

export function Login() {
    return(
        <View style={styles.container}>

            <Image
                source={require('../../assets/img/Logo.png')}
                style={styles.logo}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite seu email, telefone ou CPF"
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Senha"
            />

            <TouchableOpacity
                style={styles.botton}
                onPress={ () => {this.click()}}
            >
                <Text style={styles.bottonText}>Login</Text>
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
        borderRadius: 100
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
        color: '#66cc9c66c'
    }
})
