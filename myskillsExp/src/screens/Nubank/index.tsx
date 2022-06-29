import React from "react";
import { CardMyCards } from "../../components/CardMyCards";
import { Header } from "../../components/Header";
import { CardBlog } from "../../components/CardBlog";

import { Text, StyleSheet, ScrollView } from "react-native";

import { Ionicons } from '@expo/vector-icons'

import { Container, CardMyCardsView, CardFunctionRow, CardBlogView, CardBlogItem, CardFunction, BorderTopFunction } from './styles'

export function Nubank() {
    return(
        <Container>
            <Header />
            <CardMyCardsView>
                <CardMyCards />
            </CardMyCardsView>

            <CardBlogView>
                <ScrollView 
                    horizontal 
                    contentContainerStyle={{paddingHorizontal: 24}}
                    showsHorizontalScrollIndicator={false}
                >
                        <CardBlogItem>
                            <CardBlog link='https://nubank.com.br/emprestimo/'
                            text={
                                <Text style={styles.textBlack}>Você tem R$ 5.000,00 disponíveis para 
                                <Text style={styles.textPurple}> empréstimo</Text>.
                                </Text>} />
                        </CardBlogItem>
                    
                        <CardBlogItem>
                            <CardBlog link='https://nubank.com.br/seguros/'
                            text={
                                <Text style={styles.textBlack}>Conheça
                                <Text style={styles.textPurple}> Nubank vida</Text>: um seguro simples e que cabe no bolso.
                                </Text>} />
                        </CardBlogItem>
                </ScrollView>
            </CardBlogView>

            <BorderTopFunction />

            <CardFunction>
                <Ionicons name='card' size={25} />

                <CardFunctionRow>
                    <Text style={styles.subtitle}>Cartão de crédito</Text>
                    <Ionicons name="chevron-forward" size={15} color={'c2bebe'} />
                </CardFunctionRow>

                <Text style={styles.textGray}>Fatura atual</Text>
                <Text style={styles.title}>R$ 712,45</Text>
                <Text style={styles.textGray}>Limite disponível de R$ 2.287,55</Text>
            
            </CardFunction>
        </Container>
    )
}

const styles = StyleSheet.create({
    textBlack: {
        color: '#000'
    },
    textPurple: {
        color: '#820AD1'
    },
    textGray: {
       color: '#c2bebe',
       fontWeight: 'bold',
       marginTop: 8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 8
    }, 
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})