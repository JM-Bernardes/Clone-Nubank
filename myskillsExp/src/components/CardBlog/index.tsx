import React, { ReactNode } from 'react';

import { Container } from './styles';

import { Linking } from 'react-native'

type Props = {
    text: ReactNode
    link: string
}

export function CardBlog({ link, text }: Props) {
    return (
        <Container onPress={() => Linking.openURL}>
           {text} 
        </Container>
    );
}