import React, { useState } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';

import { Container, UpperView, UserIconView, OptionsIcon, TextWeIcome, TotalBalance, AccountView, Subtitle, BalanceTotal, BalanceTotalNotVisible,
    OptionText, OptionView} from './styles';

import { ScrollView, TouchableOpacity, View } from 'react-native';

export function Header() {
    const [showBalance, setShowBalance] = useState(false)

    return (
        <View>
        <Container>
            <UpperView>
                <UserIconView>
                    <Ionicons name='person-outline' size={20} color="#fff" />
                </UserIconView>

                <OptionsIcon>
                    <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
                        {showBalance ? (
                            <Ionicons name='eye-outline' size={25} color="#fff" style={{marginRight: 16}} />
                        ) : (
                            <Ionicons name='eye-off-outline' size={25} color="#fff" style={{marginRight: 16}} />    
                        )}
                    </TouchableOpacity>
                    <Ionicons name='help-circle-outline' size={25} color="#fff" style={{marginRight: 16}} />
                    <Ionicons name='mail-outline' size={25} color="#fff" />
                </OptionsIcon>
            </UpperView>

            <TextWeIcome>
                Olá, João
            </TextWeIcome>
        </Container>
        
        <TotalBalance>
            <AccountView>
             <Subtitle>Conta</Subtitle>

             <Ionicons name='chevron-forward-outline' size={20} color="#908D91" />
            </AccountView>

            {showBalance ? (
              <BalanceTotal>R$ 1244,98</BalanceTotal>  
            ) : (
                <BalanceTotalNotVisible />
            )}
        </TotalBalance>

        <View>
            <ScrollView 
                horizontal showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ marginLeft: 24, paddingRight: 50 }}
            >
                <OptionView>
                <OptionsIcon>
                    <Ionicons nome='cash-outline' size={25} color="#000" />
                </OptionsIcon>

                <OptionText>Pix</OptionText>
                </OptionView>

                <OptionView>
                <OptionsIcon>
                    <Ionicons nome='barcode-outline' size={25} color="#000" />
                </OptionsIcon>

                <OptionText>Pagar</OptionText>
                </OptionView>

                <OptionView>
                <OptionsIcon>
                    <Ionicons nome='cash-outline' size={25} color="#000" />
                </OptionsIcon>

                <OptionText>Transferir</OptionText>
                </OptionView>

                <OptionView>
                <OptionsIcon>
                    <Ionicons nome='cash-outline' size={25} color="#000" />
                </OptionsIcon>

                <OptionText>Depositar</OptionText>
                </OptionView>

                <OptionView>
                <OptionsIcon>
                    <Ionicons nome='phone-portrait-outline' size={25} color="#000" />
                </OptionsIcon>

                <OptionText>Recarga de celular</OptionText>
                </OptionView>

                <OptionView>
                <OptionsIcon>
                    <Ionicons nome='cash-outline' size={25} color="#000" />
                </OptionsIcon>

                <OptionText>Cobrar</OptionText>
                </OptionView>

                <OptionView>
                <OptionsIcon>
                    <Ionicons nome='heart-outline' size={25} color="#000" />
                </OptionsIcon>

                <OptionText>Doação</OptionText>
                </OptionView>
                
                
            </ScrollView>
        </View>
        </View>
    )
}