import React, { useState } from "react";
import { ScrollView, Touchable, TouchableOpacity, View } from "react-native";

import { Ionicons } from '@expo/vector-icons'

import { Container, UpperView, OptionsIcon, UserIconView, TextWelcome, TotalBalance, AccountView, Subtitle, BalanceTotal, BalanceTotalNotVisible,
    OptionView, OptionText, OptionIcon } from './styles'

export function Header() {
    const [showBalance, setShowBalance] = useState(false)
    return(
        <>
        <Container>
            <UpperView>
                <UserIconView>
                    <Ionicons name="person-outline" size={20} color="#fff" />
                </UserIconView>

                <OptionsIcon>
                    <TouchableOpacity onPress={() => setShowBalance(! showBalance)}>
                        {showBalance ? (
                            <Ionicons name="eye-outline" size={25} color="#fff" style={{marginRight: 16 }} />
                        ) : (
                            <Ionicons name="eye-off-outline" size={25} color="#fff" style={{marginRight: 16 }} />
                        )}
                    </TouchableOpacity>
                    <Ionicons name="help-circle-outline" size={25} color="#fff" style={{marginRight: 16 }} />
                        <Ionicons name="mail-outline" size={25} color="#fff" />
                </OptionsIcon>
            </UpperView>

            <TextWelcome>
                Olá, João
            </TextWelcome>
        </Container>

            <TotalBalance>
                <AccountView>
                    <Subtitle>Conta</Subtitle>

                    <Ionicons name="chevron-forward-outline" size={20} color='#908D91' /> 
                </AccountView>

                {showBalance ? (
                    <BalanceTotal>R$ 837,64</BalanceTotal>
                ) : (
                    <BalanceTotalNotVisible />
                )}
                    
            </TotalBalance>
            
            <View>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{marginLeft: 24, paddingRight: 24}}
                >
                    <OptionView>
                        <OptionIcon>
                        <Ionicons name="cash-outline" size={20} color='#000' />
                        </OptionIcon>

                        <OptionText>Pix</OptionText>
                    </OptionView>

                    <OptionView>
                        <OptionIcon>
                        <Ionicons name="barcode-outline" size={20} color='#000' />
                        </OptionIcon>

                        <OptionText>Pagar</OptionText>
                    </OptionView>

                    <OptionView>
                        <OptionIcon>
                        <Ionicons name="cash-outline" size={20} color='#000' />
                        </OptionIcon>

                        <OptionText>Transferir</OptionText>
                    </OptionView>

                    <OptionView>
                        <OptionIcon>
                        <Ionicons name="cash-outline" size={20} color='#000' />
                        </OptionIcon>

                        <OptionText>Depositar</OptionText>
                    </OptionView>

                    <OptionView>
                        <OptionIcon>
                        <Ionicons name="phone-portrait-outline" size={20} color='#000' />
                        </OptionIcon>

                        <OptionText>Recarga de {'\n'}    celular</OptionText>
                    </OptionView>

                    <OptionView>
                        <OptionIcon>
                        <Ionicons name="cash-outline" size={20} color='#000' />
                        </OptionIcon>

                        <OptionText>Cobrar</OptionText>
                    </OptionView>

                    <OptionView>
                        <OptionIcon>
                        <Ionicons name="heart-outline" size={20} color='#000' />
                        </OptionIcon>

                        <OptionText>Doação</OptionText>
                    </OptionView>

                    <OptionView>
                        <OptionIcon>
                        <Ionicons name="earth-outline" size={20} color='#000' />
                        </OptionIcon>

                        <OptionText>Tranferir {'\n'} Internac.</OptionText>
                    </OptionView>

                    <OptionView>
                        <OptionIcon>
                        <Ionicons name="cellular-outline" size={20} color='#000' />
                        </OptionIcon>

                        <OptionText>Investir</OptionText>
                    </OptionView>
                </ScrollView>
            </View>
    </>
    )
}