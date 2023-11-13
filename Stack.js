import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Encyclpedia_HomeScreen from "./encyclpedia_Home";
import Encyclpedia_DetailScreen from "./encyclopedia_Detail";

const NavigationApp = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Encyclpedia_HomeScreen} />
        <Stack.Screen name="Detail" component={Encyclpedia_DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationApp;
