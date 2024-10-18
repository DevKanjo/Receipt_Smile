import { View, Text, Image } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Onboard from "../Onboarding.js";
import Signup from "../Signup.js";
import Verify from "../Verify.js";
import Congratulation from "../Congratulation.js";
import Login from "../Login.js";
import Home from "../Home.js";
import FAQ from "../FAQ.js";
import Categories from "../Categories.js";
import Daterange from "../Daterange.js";
import Filter from "../Filter.js";
import Tag from "../Tag.js";
import OnboardingScreen from "../Onboarding.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const Apps = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const appData = await AsyncStorage.getItem("isAppFirstLaunched");
      if (appData == null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem("isAppFirstLaunched", "false");
      } else {
        setIsAppFirstLaunched(false);
      }
    }
    fetchData();

    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, []);

  return (
    isAppFirstLaunched != null && (
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="SignUp">
          {isAppFirstLaunched && (
            <Stack.Screen
              options={{
                header: () => false,
              }}
              name="OnboardingScreen"
              component={OnboardingScreen}
            ></Stack.Screen>
          )}
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ title: "Sign Up or Log In", headerTitleAlign: "center" }}
          ></Stack.Screen>
          <Stack.Screen
            name="Verify"
            component={Verify}
            options={{
              title: "",
              headerShadowVisible: false,
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Filter"
            component={Filter}
            options={{
              headerTitle: "Filter Documents",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Daterange"
            component={Daterange}
            options={{
              headerTitle: "Choose Date Range",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Tag"
            component={Tag}
            options={{
              headerTitle: "Add Tag",
            }}
          />
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{
              headerTitle: "Choose Tags",
              headerTitleStyle: { fontSize: 25 },
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="FAQ"
            component={FAQ}
            options={{
              headerTitle: "Frequently Asked Questions",
              headerTitleStyle: { fontSize: 25 },
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Onboard"
            component={Onboard}
            options={{ header: () => false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: "",
              headerRight: () => (
                <Image source={require("../../assets/images/user.png")} />
              ),
              headerLeft: () => (
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#3B79FE",
                    padding: 2,
                    borderRadius: 50,
                  }}
                >
                  <MaterialCommunityIcons
                    name="filter-variant"
                    color="#3B79FE"
                    size={20}
                  />
                </View>
              ),
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login", headerTitleAlign: "center" }}
          ></Stack.Screen>
          <Stack.Screen
            name="Congratulation"
            component={Congratulation}
            options={{ title: "", headerShadowVisible: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default Apps;
