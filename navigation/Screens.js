import { Dimensions } from "react-native";
import { Header, Icon } from "../components/";
import { Images } from "../constants/";

import AboutScreen from "../screens/About";
import AgreementScreen from "../screens/Agreement";
import CartScreen from "../screens/Cart";
import CategoriesScreen from "../screens/Categories";
import CategoryScreen from "../screens/Category";
import ChatScreen from "../screens/Chat";
import ComponentsScreen from "../screens/Components";
import DealsScreen from "../screens/Deals";
import GalleryScreen from "../screens/Gallery";
import HomeScreen from "../screens/Home";
import ServiceScreen from "../screens/Service";
import KidsScreen from "../screens/Kids";
import ManScreen from "../screens/Man";
import NewCollectionScreen from "../screens/NewCollection";
import NotificationsScreen from "../screens/NotificationSettings";
// screens
import OnboardingScreen from "../screens/Onboarding";
import PrivacyScreen from "../screens/Privacy";
import ProductScreen from "../screens/Product";
import ProfileScreen from "../screens/Profile";
import React from "react";
import SearchScreen from "../screens/Search";
import SettingsScreen from "../screens/Settings";
import WomanScreen from "../screens/Woman";
import SocialScreen from "../screens/Social"
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabs } from "../constants/";
import ViewAllScreen from "../screens/ViewAll";
import MaidProfileScreen from "../screens/MaidProfile";
import VisitorsListScreen from "../screens/VisitorsList";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const profile = {
  avatar: Images.Profile,
  name: "Rachel Brown",
  type: "Seller",
  plan: "Pro",
  rating: 4.8,
};

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

function SocialStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Social"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Social"
        component={SocialScreen}
        options={{
          header: ({ navigation }) => (
            <Header title="Social" navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function WomanStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Woman"
        component={WomanScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              search
              options
              title="Woman"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Deals"
        component={DealsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              tabs={tabs.deals}
              title="Best Deals"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              tabs={tabs.categories}
              tabIndex={tabs.categories[1].id}
              title="Categories"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          header: ({ navigation, scene }) => {
            // const { params } = scene.descriptor;
            // const title = (params && params.headerTitle) || "Category";
            return (
              <Header
                back
                title='Category'
                navigation={navigation}
                scene={scene}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              white
              transparent
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              white
              transparent
              title=""
              navigation={navigation}
              scene={scene}
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
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header back title="Search" navigation={navigation} scene={scene} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function ManStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Man"
        component={ManScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              search
              options
              title="Man"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Deals"
        component={DealsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              tabs={tabs.deals}
              title="Best Deals"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              tabs={tabs.categories}
              tabIndex={tabs.categories[1].id}
              title="Categories"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          header: ({ navigation, scene }) => {
            // const { params } = scene.descriptor;
            // const title = (params && params.headerTitle) || "Category";
            return (
              <Header
                back
                title='Category'
                navigation={navigation}
                scene={scene}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              white
              transparent
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              white
              transparent
              title=""
              navigation={navigation}
              scene={scene}
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
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header back title="Search" navigation={navigation} scene={scene} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function KidsStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Kids"
        component={KidsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              search
              options
              title="Kids"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Deals"
        component={DealsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              tabs={tabs.deals}
              title="Best Deals"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              tabs={tabs.categories}
              tabIndex={tabs.categories[1].id}
              title="Categories"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          header: ({ navigation, scene }) => {
            // const { params } = scene.descriptor;
            // const title = (params && params.headerTitle) || "Category";
            return (
              <Header
                back
                title='Category'
                navigation={navigation}
                scene={scene}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              white
              transparent
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              white
              transparent
              title=""
              navigation={navigation}
              scene={scene}
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
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header back title="Search" navigation={navigation} scene={scene} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function NewCollectionStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="NewCollection"
        component={NewCollectionScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              search
              options
              title="New Collection"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Deals"
        component={DealsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              tabs={tabs.deals}
              title="Best Deals"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              tabs={tabs.categories}
              tabIndex={tabs.categories[1].id}
              title="Categories"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          header: ({ navigation, scene }) => {
            // const { params } = scene.descriptor;
            // const title = (params && params.headerTitle) || "Category";
            return (
              <Header
                back
                title='Category'
                navigation={navigation}
                scene={scene}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              white
              transparent
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              white
              transparent
              title=""
              navigation={navigation}
              scene={scene}
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
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header back title="Search" navigation={navigation} scene={scene} />
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
      {/*<Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              tabs={tabs.categories}
              tabIndex={tabs.categories[1].id}
              title="Categories"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          header: ({ navigation, scene }) => {
            // const { params } = scene.descriptor;
            // const title = (params && params.headerTitle) || "Category";
            return (
              <Header
                back
                title='Category'
                navigation={navigation}
                scene={scene}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              white
              transparent
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              white
              transparent
              title=""
              navigation={navigation}
              scene={scene}
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
      /> */}
      {/* <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header back title="Search" navigation={navigation} scene={scene} />
          ),
        }}
      /> */}
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
      />
    </BottomTab.Navigator>
  );
}

function AppStack(props) {
  return (
    <>
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
        <Stack.Screen name="VisitorsList" component={VisitorsListScreen} />
        <Stack.Screen name="MaidProfile" component={MaidProfileScreen} />
      </Stack.Navigator>
    {/* <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => (
        <CustomDrawerContent {...props} profile={profile} />
      )}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      screenOptions={{
        activeTintColor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: materialTheme.COLORS.ACTIVE,
        inactiveBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.74,
          paddingHorizontal: 12,
          // paddingVertical: 4,
          justifyContent: "center",
          alignContent: "center",
          // alignItems: 'center',
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          fontWeight: "normal",
        },
      }}
      initialRouteName="HomeDrawer"
    >
      <Drawer.Screen
        name="DrawerAppStack"
        component={DrawerAppStack}
      />
     </Drawer.Navigator> */}
    </>
    
  );
}


// function DrawerAppStack(props) {
//   return (
//     <>
    
//         <Drawer.Screen
//         name={'BottomTabNavigator'}
//         component={MainTabs}
//         options={{
//           drawerLabel: 'Home Screen',
          
//         }}
//       />
//         <Drawer.Screen
//           name="HomeDrawer"
//           component={HomeStack}
//           options={{
//             headerShown: false,
//             drawerIcon: ({ focused }) => (
//               <Icon
//                 size={16}
//                 name="shop"
//                 family="GalioExtra"
//                 color={focused ? "white" : materialTheme.COLORS.MUTED}
//               />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="WomanDrawer"
//           component={WomanStack}
//           options={{
//             headerShown: false,
//             drawerIcon: ({ focused }) => (
//               <Icon
//                 size={16}
//                 name="md-woman"
//                 family="ionicon"
//                 color={focused ? "white" : materialTheme.COLORS.MUTED}
//                 style={{ marginLeft: 4, marginRight: 4 }}
//               />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="ManDrawer"
//           component={ManStack}
//           options={{
//             headerShown: false,
//             drawerIcon: ({ focused }) => (
//               <Icon
//                 size={16}
//                 name="man"
//                 family="entypo"
//                 color={focused ? "white" : materialTheme.COLORS.MUTED}
//               />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="KidsDrawer"
//           component={KidsStack}
//           options={{
//             headerShown: false,
//             drawerIcon: ({ focused }) => (
//               <Icon
//                 size={16}
//                 name="baby"
//                 family="GalioExtra"
//                 color={focused ? "white" : materialTheme.COLORS.MUTED}
//               />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="New Collection"
//           component={NewCollectionStack}
//           options={{
//             headerShown: false,
//             drawerIcon: ({ focused }) => (
//               <Icon
//                 size={16}
//                 name="grid-on"
//                 family="material"
//                 color={focused ? "white" : materialTheme.COLORS.MUTED}
//               />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="ProfileDrawer"
//           component={ProfileStack}
//           options={{
//             headerShown: false,
//             drawerIcon: ({ focused }) => (
//               <Icon
//                 size={16}
//                 name="circle-10"
//                 family="GalioExtra"
//                 color={focused ? "white" : materialTheme.COLORS.MUTED}
//               />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="SettingsDrawer"
//           component={SettingsStack}
//           options={{
//             headerShown: false,
//             drawerIcon: ({ focused }) => (
//               <Icon
//                 size={16}
//                 name="gears"
//                 family="font-awesome"
//                 color={focused ? "white" : materialTheme.COLORS.MUTED}
//                 style={{ marginRight: -3 }}
//               />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="ComponentsDrawer"
//           component={ComponentsStack}
//           options={{
//             headerShown: false,
//             drawerIcon: ({ focused }) => (
//               <Icon
//                 size={16}
//                 name="md-switch"
//                 family="ionicon"
//                 color={focused ? "white" : materialTheme.COLORS.MUTED}
//                 style={{ marginRight: 2, marginLeft: 2 }}
//               />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="Sign In"
//           component={SignInScreen}
//           options={{
//             headerShown: false,
//             drawerIcon: ({ focused }) => (
//               <Icon
//                 size={16}
//                 name="ios-log"
//                 family="ionicon"
//                 color={focused ? "white" : materialTheme.COLORS.MUTED}
//               />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="Sign Up"
//           component={SignUpScreen}
//           options={{
//             headerShown: false,
//             drawerIcon: ({ focused }) => (
//               <Icon
//                 size={16}
//                 name="md-person"
//                 family="ionicon"
//                 color={focused ? "white" : materialTheme.COLORS.MUTED}
//               />
//             ),
//           }}
//         />
//     </>
//   );
// }
