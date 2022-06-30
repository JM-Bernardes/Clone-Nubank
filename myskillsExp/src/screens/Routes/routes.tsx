
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from '../Login'
import { Nubank } from '../Nubank'

const Tab = createBottomTabNavigator();

export type ParamListRoutesTab = {
    Login:undefined;
    Nubank:undefined;
}

export const Routes = () => {

    return (
        <NavigationContainer >
            <Tab.Navigator
                screenOptions={{
                    headerShown:false}}
            >
                <Tab.Screen name="Login" component={Login} />
                <Tab.Screen name="Nubank" component={Nubank} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

