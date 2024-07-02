import { Dimensions } from "react-native";
import { Icon } from "../components/";
import ComponentsScreen from "../screens/Components";
import HomeScreen from "../screens/Home";
import GateHomeScreen from "../screens/Gate/GateHome";
import ServiceScreen from "../screens/Service";
// screens
import OnboardingScreen from "../screens/Onboarding";
import ProfileScreen from "../screens/Profile";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ViewAllScreen from "../screens/ViewAll";
import MaidProfileScreen from "../screens/MaidProfile";
import VisitorsListScreen from "../screens/VisitorsList";
import PaymentListScreen from "../screens/PaymentList";
import GateServiceProviderScreen from "../screens/Gate/GateServiceProvider";
import GateVisitorsScreen from "../screens/Gate/GateVisitors";
import CreateVisitors from "../screens/Gate/CreateVisitors";
import CreateServiceProvider from "../screens/Gate/CreateServiceProvider";
import EventsScreen from "../screens/Events";
import CustomHeader from "../screens/CustomerHeader";
import GateUpdates from "../screens/gateUpdatesComponents/GateUpdates";
import MyHelps from "../screens/MyHelps";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const CommonCustomHeader = ({
  name,
  description,
  showBackButton,
  showSettings,
}) => (
  <CustomHeader
    name={name}
    description={description}
    showBackButton={showBackButton}
    showSettings={showSettings}
  />
);

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
          header: () => (
            <CommonCustomHeader
              name={""}
              description={""}
              showBackButton={true}
              showSettings={false}
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          header: () => (
            <CommonCustomHeader
              name={""}
              description={""}
              showBackButton={true}
              showSettings={false}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          header: () => (
            <CommonCustomHeader
              name={""}
              description={""}
              showBackButton={true}
              showSettings={false}
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
          header: () => (
            <CommonCustomHeader
              name={""}
              description={""}
              showBackButton={true}
              showSettings={false}
            />
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
          header: () => (
            <CommonCustomHeader
              name={""}
              description={""}
              showBackButton={true}
              showSettings={false}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function GateHomeStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Home"
        component={GateHomeScreen}
        options={{
          headerShown: false,
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
        component={GateHomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" family="font-awesome" color={color} />
          ),
          tabBarLabel: "Home",
          headerTitle: () => (
            <CommonCustomHeader
              name={"Arun Patil, A101"}
              description={"Aspen woods Apartment"}
              showBackButton={false}
              showSettings={true}
            />
          ),
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
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen
        name="ViewAll"
        component={ViewAllScreen}
        options={{
          header: () => (
            <CommonCustomHeader
              name={""}
              description={""}
              showBackButton={true}
              showSettings={false}
            />
          ),
        }}
      />

      <Stack.Screen name="MyHelps" component={MyHelps} />
      <Stack.Screen name="GateUpdates" component={GateUpdates} />
      <Stack.Screen name="VisitorsList" component={VisitorsListScreen} />
      <Stack.Screen name="MaidProfile" component={MaidProfileScreen} />
      <Stack.Screen name="PaymentList" component={PaymentListScreen} />
      <Stack.Screen
        name="GateServiceProvider"
        component={GateServiceProviderScreen}
        options={{
          headerShown: true,
          header: () => (
            <CommonCustomHeader
              name={"Service Provider"}
              description={"check Service Providers"}
              showBackButton={true}
              showSettings={false}
            />
          ),
        }}
      />
      <Stack.Screen
        name="GateVisitors"
        component={GateVisitorsScreen}
        options={{
          headerShown: true,
          header: () => (
            <CommonCustomHeader
              name={"Visitors"}
              description={"check your Visitors here..."}
              showBackButton={true}
              showSettings={false}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CreateVisitors"
        component={CreateVisitors}
        options={{
          headerShown: true,
          header: () => (
            <CommonCustomHeader
              name={"Visitors"}
              description={"Add your visitors here..."}
              showBackButton={true}
              showSettings={false}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CreateServiceProvider"
        component={CreateServiceProvider}
        options={{
          headerShown: true,
          header: () => (
            <CommonCustomHeader
              name={"Service Provider"}
              description={"Add your service provider here..."}
              showBackButton={true}
              showSettings={false}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Events"
        component={EventsScreen}
        options={{
          headerShown: true,
          header: () => (
            <CommonCustomHeader
              name={"Events"}
              description={"check your events here..."}
              showBackButton={true}
              showSettings={false}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
