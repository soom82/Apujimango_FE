import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Iconify } from "react-native-iconify";

import Home from "../screens/Home";
import Food_Chatbot from "../screens/Food_Chatbot";
import Medicine_Analysis from "../screens/Medicine_Analysis";
import AI_Question from "../screens/AI_Question";
import Disease_Encyclopedia from "../screens/Disease_Encyclopedia";

// const BottomTabNavigationIcon = ({ iconName, color, size }) => {
//   return <Iconify icon={iconName} color={color} size={size} />;
// };

const AlertButton = () => {
  return <Iconify icon="akar-icons:bell" />;
};

const BottomTabNavigator = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <BottomTabNavigator.Navigator
      initialRouteName="홈"
      screenOptions={{
        tabBarActiveTintColor: "#FBB144",
      }}
    >
      <BottomTabNavigator.Screen
        name="홈"
        component={Home}
        options={{
          tabBarIcon: () => <Iconify icon="lucide:baby" size={24} />,
          headerRight: (props) => <AlertButton {...props} />,
          tabBarStyle: {
            height: 63,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderTopWidth: 0,
            elevation: 30,
          },
        }}
      />
      <BottomTabNavigator.Screen
        name="식품 챗봇"
        component={Food_Chatbot}
        options={{
          tabBarIcon: () => <Iconify icon="ep:bowl" size={25} />,
        }}
      />
      <BottomTabNavigator.Screen
        name="약 분석"
        component={Medicine_Analysis}
        options={{
          tabBarIcon: () => (
            <Iconify icon="healthicons:medicines-outline" size={28} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="AI 질문"
        component={AI_Question}
        options={{
          tabBarIcon: () => <Iconify icon="solar:cat-linear" size={29} />,
        }}
      />
      <BottomTabNavigator.Screen
        name="질환백과"
        component={Disease_Encyclopedia}
        options={{
          tabBarIcon: () => <Iconify icon="iconoir:book" size={24} />,
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};

export default BottomTabNavigation;
