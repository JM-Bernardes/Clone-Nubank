import React from "react";

import { Container, TextCard } from './styles'

import { Ionicons } from '@expo/vector-icons'

export function CardMyCards() {
    return(
        <Container>
            <Ionicons name="card" size={20} color="#000" />
            <TextCard>Meus cartões                                                                          3</TextCard>
        </Container>
    )
}