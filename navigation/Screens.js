import { Dimensions } from "react-native";
import { Header, Icon } from "../components/";

import AboutScreen from "../screens/About";
import AgreementScreen from "../screens/Agreement";
import CartScreen from "../screens/Cart";
import ChatScreen from "../screens/Chat";
import ComponentsScreen from "../screens/Components";
import HomeScreen from "../screens/Home";
import GateHomeScreen from "../screens/Gate/GateHome";
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
import GateServiceProviderScreen from "../screens/Gate/GateServiceProvider";
import GateVisitorsScreen from "../screens/Gate/GateVisitors";
import CreateVisitors from "../screens/Gate/CreateVisitors";
import CreateServiceProvider from "../screens/Gate/CreateServiceProvider";
import EventsScreen from "../screens/Events";
import CustomHeader from "../screens/CustomerHeader";
import GateUpdates from "../screens/gateUpdatesComponents/GateUpdates";
import MyHelps from "../screens/MyHelps";
import GateDeliveryScreen from "../screens/Gate/Delivery/GateDelivery";
import DeliveryApprovalScreen from "../screens/Gate/Delivery/DeliveryApproval";
import DeliveryWaitingScreen from "../screens/Gate/Delivery/DeliveryWaiting";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const getScreenOptions = (route) => ({
  tabBarIcon: ({ focused, color }) => {
    let iconName;
    let iconSize = focused ? 30 : 20;
    if (route.name === "Home") {
      iconName = "home";
    }
    return (
      <Icon
        name={iconName}
        size={iconSize}
        color={color}
        style={styles.tabBarIcon}
      />
    );
  },
  tabBarStyle: {
    backgroundColor: "#ffffff",
    borderTopWidth: 0,
    elevation: 0,
    height: 60,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

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
              transparent={true}
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
    <BottomTab.Navigator screenOptions={({ route }) => getScreenOptions(route)}>
      <BottomTab.Screen
        name="Home"
        component={GateHomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" family="material" color={color} margtop={2} />
          ),
          headerTitle: () => (
            <CustomHeader
              name={"Main Gate"}
              description={"Aspen woods Apartment"}
              showBackButton={false}
              showSettings={true}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Delivery"
        component={DeliveryWaitingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="electric-moped" family="material" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Regular"
        component={GateServiceProviderScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="restart-alt" family="material" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="More"
        component={ServiceStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="add" family="material" color={color} />
          ),
        }}
      />
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
            <CustomHeader
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
            <CustomHeader
              name={"Visitors"}
              description={"check your Visitors here..."}
              showBackButton={true}
              showSettings={false}
            />
          ),
        }}
      />
      <Stack.Screen
        name="GateDelivery"
        component={GateDeliveryScreen}
        options={{
          headerShown: true,
          header: () => (
            <CustomHeader
              name={"Delivery Person"}
              description={"check your Delivery here..."}
              showBackButton={true}
              showSettings={false}
            />
          ),
        }}
      />
      <Stack.Screen
        name="DeliveryApproval"
        component={DeliveryApprovalScreen}
        options={{
          headerShown: true,
          header: () => (
            <CustomHeader
              name={"Delivery Person"}
              description={"check your Delivery address here..."}
              showBackButton={true}
              showSettings={false}
            />
          ),
        }}
      />
      <Stack.Screen
        name="DeliveryWaiting"
        component={DeliveryWaitingScreen}
        options={{
          headerShown: true,
          header: () => (
            <CustomHeader
              name={"Delivery Waiting"}
              description={"check your Delivery man here..."}
              showBackButton={false}
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
            <CustomHeader
              name={"Service Provider"}
              description={"Add your service provider here..."}
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
            <CustomHeader
              name={"Visitors"}
              description={"Add your visitors here..."}
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
          header: (props) => (
            <CustomHeader
              {...props}
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
