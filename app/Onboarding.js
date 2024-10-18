import { Image, View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

import Onboarding from "react-native-onboarding-swiper";

const CustomButtons = ({ navigation }) => (
  <Onboarding
    titleStyles={{ color: "blue" }} // set default color for the title
    pages={[
      {
        backgroundColor: "#fff",
        image: <Image source={require("../assets/images/shop.png")} />,
        title: "SHOP",
        subtitle: "",
        titleStyles: { color: "#1E1E1E" }, // overwrite default color
      },
      {
        backgroundColor: "#fff",
        image: <Image source={require("../assets/images/snap.png")} />,
        title: "SNAP",
        subtitle: "",
        titleStyles: { color: "#1E1E1E" },
      },
      {
        backgroundColor: "#fff",
        image: <Image source={require("../assets/images/smile.png")} />,
        title: "SMILE",
        subtitle: (
          <View
            style={{
              width: "100%",
              paddingHorizontal: "6%",
              paddingVertical: 15,
              paddingTop: 15,
              justifyContent: "flex-end",
            }}
          >
            <View style={{ marginHorizontal: -5, marginVertical: 10 }}>
              <Button
                mode="contained"
                onPress={() => navigation.navigate("Signup")}
                buttonColor="#3B79FE"
                textColor="#ffffff"
                style={{
                  borderRadius: 7,
                  height: 48,
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 16 }}>Get Started</Text>
              </Button>
            </View>
            <View style={{ marginHorizontal: -5 }}>
              <Button
                mode="contained"
                onPress={() => navigation.navigate("Login")}
                buttonColor="#"
                textColor="#3B79FE"
                style={{
                  borderRadius: 7,
                  height: 48,
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 16 }}>Sign In</Text>
              </Button>
            </View>
          </View>
        ),
        titleStyles: { color: "#1E1E1E" },
      },
    ]}
  />
);

export default CustomButtons;
