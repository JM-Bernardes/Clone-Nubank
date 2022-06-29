import React, { ReactNode } from "react";
import { Linking } from "react-native";

import { Container } from './styles'

type Props = {
    text: ReactNode
    link: string
}

export function CardBlog({ link, text }: Props) {
    return(
        <Container onPress={() => Linking.openURL(link)}>
            {text}
        </Container>
    )
}