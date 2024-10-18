import { View, Image } from "react-native";
import React from "react";
import { Text, Button } from "react-native-paper";

export default function Congratulation({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: "6%",
        paddingBottom: "10%",
        justifyContent: "space-between",
      }}
    >
      <View>
        <View>
          <Text
            variant="displayMedium"
            style={{ color: "#1E1E1E", fontWeight: 600 }}
          >
            Congratulations
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: "#959595",
            }}
          >
            You have successfully verified your Phone number , Kindly proceed to
            your dashboard.
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={require("../assets/images/congrat.png")} />
      </View>
      <View style={{ marginHorizontal: -5 }}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Home")}
          buttonColor="#3B79FE"
          textColor="#ffffff"
          style={{ borderRadius: 7, height: 48, justifyContent: "center" }}
        >
          <Text style={{ fontSize: 16, color: "#ffffff" }}>Continue</Text>
        </Button>
      </View>
    </View>
  );
}
