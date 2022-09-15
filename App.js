import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="UserScreen"
        screenOptions={{
          headerStyle: { backgroundColor: "purple" },
          headerTintColor: "white",
          drawerActiveBackgroundColor: "white",
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "purple",
          drawerStyle: {
            backgroundColor: "purple",
          },
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: "Welcome Screen",
            drawerIcon: (
              { color, size } // prop values change based on whether drawer label is active or not
            ) => <Ionicons name="home" color={color} size={size} />,
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
