import React from 'react';
import { CardBlog } from '../../components/CardBlog';
import { CardMyCards } from '../../components/CardMyCards';
import { Header } from '../../components/Header';

import { StyleSheet, ScrollView, Text, Touchable } from 'react-native'

import { Container, CardMyCardsView, CardBlogView, CardBlogItem, CardFunction, CardFunctionRow } from './styles';

import Ionicons from '@expo/vector-icons/Ionicons';

export function Nubank() {
    return (
        <Container>
            <ScrollView contentContainerStyle={{paddingBottom: 50}}>
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
                        <CardBlog link='http://nubank.com.br/emprestimo/' 
                        text={
                            <Text style={styles.textBlack}>Você tem R$ 5.000,00 disponíveis para
                                <Text style={styles.textPurple}>empréstimo</Text>.
                            </Text>}/>
                        </CardBlogItem>

                        <CardBlogItem>
                        <CardBlog link='http://nubank.com.br/seguros/' 
                        text={
                            <Text style={styles.textBlack}>Conheça Nubank vida: Seguro e simples 
                            <Text style={styles.textPurple}>cabe no seu bolso</Text>.
                            </Text>}/>
                        </CardBlogItem>
                    </ScrollView>
                </CardBlogView>

                <CardFunction>
                        <Ionicons name='card' size={25}/>

                        <CardFunctionRow>
                            <Text style={styles.subtitle}>Cartão de crédito</Text>
                            <Ionicons name='chevron-forward' size={15} color={'#c2bebe'} />
                        </CardFunctionRow>

                        <Text style={styles.textGray}>Fatura atual</Text>
                        <Text style={styles.textGray}>R$ 757,89</Text>
                        <Text style={styles.textGray}>Limite disponível de R$ 2.742,11</Text>
                </CardFunction>
            </ScrollView>
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