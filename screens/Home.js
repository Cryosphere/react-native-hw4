import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Image } from "react-native";

//screens
import screens from "../screens";
const { CreateScreen, PostsScreen, ProfileScreen } = screens;

//icons
const backIcon = require("../assets/icon/arrow-left.png");
const LogOutIcon = require("../assets/icon/log-out.png");

const MainTab = createBottomTabNavigator();

export default function Home({ navigation, route }) {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <MainTab.Screen
        name="PostsScreen"
        options={{
          title: "Публикації",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name="grid-outline"
              size={24}
              color="rgba(33, 33, 33, 0.8)"
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate("Login")}
            >
              <Image source={LogOutIcon} style={{ marginRight: 16 }} />
            </TouchableOpacity>
          ),
        }}
        component={PostsScreen}
      />
      <MainTab.Screen
        name="CreateScreen"
        component={CreateScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarVisible: false,
          title: "Створити публикацію",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="add-circle-sharp" size={30} color="#FF6C00" />
          ),
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.6}
              style={{ padding: 10 }}
              onPress={() => navigation.navigate("PostsScreen")}
            >
              <Image source={backIcon} style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          ),
        }}
      />
      <MainTab.Screen
        name="ProfileScreen"
        options={{
          headerShown: false,
          tabBarVisible: true,
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name="person-outline"
              size={24}
              color="rgba(33, 33, 33, 0.8)"
            />
          ),
        }}
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
}
