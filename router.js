import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import screens from "./screens";
const { LoginScreen, RegistrationScreen, ComentsScreen } = screens;

const GeneralStack = createStackNavigator();

const useRoute = () => {
  return (
    <>
      <GeneralStack.Navigator initialRouteName="Auth">
        <GeneralStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <GeneralStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <GeneralStack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        ></GeneralStack.Screen>
        <GeneralStack.Screen
          options={{ title: "Коментарі", headerTitleAlign: "center" }}
          name="Coments"
          component={ComentsScreen}
        />
      </GeneralStack.Navigator>
    </>
  );
};

export default useRoute;
