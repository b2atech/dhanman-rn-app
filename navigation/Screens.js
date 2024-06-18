import { Dimensions } from "react-native";
import { Header, Icon } from "../components/";

import AboutScreen from "../screens/About";
import AgreementScreen from "../screens/Agreement";
import CartScreen from "../screens/Cart";
import ChatScreen from "../screens/Chat";
import ComponentsScreen from "../screens/Components";
import HomeScreen from "../screens/Home";
import ServiceScreen from "../screens/Service";
import NotificationsScreen from "../screens/NotificationSettings";
// screens
import OnboardingScreen from "../screens/Onboarding";
import PrivacyScreen from "../screens/Privacy";
import ProfileScreen from "../screens/Profile";
import React from "react";
import SettingsScreen from "../screens/Settings";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ViewAllScreen from "../screens/ViewAll";
import MaidProfileScreen from "../screens/MaidProfile";
import VisitorsListScreen from "../screens/VisitorsList";
import PaymentListScreen from "../screens/PaymentList";
import EventsScreen from "../screens/Events";
import CustomHeader from "../screens/CustomerHeader";
import GateUpdates from "../screens/gateUpdatesComponents/GateUpdates";
import MyHelps from "../screens/MyHelps";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function ProfileStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              title="Profile"
              scene={scene}
              navigation={navigation}
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Rachel Brown"
              scene={scene}
              navigation={navigation}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header back title="Cart" scene={scene} navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function SettingsStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Settings" scene={scene} navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="Agreement"
        component={AgreementScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Agreement"
              scene={scene}
              navigation={navigation}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Privacy"
        component={PrivacyScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Privacy"
              scene={scene}
              navigation={navigation}
            />
          ),
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="About us"
              scene={scene}
              navigation={navigation}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Notifications Settings"
              scene={scene}
              navigation={navigation}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Rachel Brown"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Shopping Cart"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function ComponentsStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Components"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Components"
        component={ComponentsScreen}
        options={{
          header: ({ navigation }) => (
            <Header title="Components" navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false, 
        }}
      />
    </Stack.Navigator>
  );
}

function ServiceStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Service"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Service"
        headerShown={false}
        component={ServiceScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header 
            search
            options 
            title="Services" 
            scene={scene} 
            navigation={navigation} 
            back={true}
            transparent={true}/>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" family="font-awesome" color={color} />
          ),
          tabBarLabel: 'Home',
          headerTitle: () => 
          <CustomHeader 
          name={'Arun Patil, A101'} 
          description={'Aspen woods Apartment'} 
          showBackButton={false} 
          showSettings={true}
          />,
        }}
      />
      <BottomTab.Screen
        name="My Units"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="person" family="material" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Community"
        component={ComponentsStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="apartment" family="material" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Services"
        component={ServiceStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="handyman" family="material" color={color} />
          ),
        }}
      /> 
      {/* <BottomTab.Screen
        name="Social"
        component={SocialStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="groups" family="material" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Buy & Sell"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="handshake" family="material" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Services"
        component={ServiceStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="handyman" family="material" color={color} />
          ),
        }}
      /> */}
      {/* <BottomTab.Screen
        name="Buy & Sell"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="handshake" family="material" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Services"
        component={ServiceStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="handyman" family="material" color={color} />
          ),
        }}
      /> */}
    </BottomTab.Navigator>
  );
}

function AppStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="MainTabs"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainTabs" component={MainTabs}/>
      <Stack.Screen 
        name="ViewAll" 
        component={ViewAllScreen} 
        options={{
          header: ({ navigation, scene }) => (
            <Header
              search
              options
              title="A 101"
              navigation={navigation}
              scene={scene}
              transparent={true}
            />
          ),
      }}/>
      
      <Stack.Screen name="MyHelps" component={MyHelps} />
      <Stack.Screen name="GateUpdates" component={GateUpdates} />
      <Stack.Screen name="VisitorsList" component={VisitorsListScreen} />
      <Stack.Screen name="MaidProfile" component={MaidProfileScreen} />
      <Stack.Screen name="PaymentList" component={PaymentListScreen} />

      <Stack.Screen 
      name="Events" 
      component={EventsScreen} 
      options={{
        headerShown: true,
        header: () => 
        <CustomHeader 
        name={'Events'} 
        description={'check your events here...'} 
        showBackButton={true} 
        showSettings={false}
        />,
      }}/>
    </Stack.Navigator>
  );
}

