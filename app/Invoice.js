import { View, TextInput, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { Text, Button } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Invoice = ({navigation}) => {
  const [text, setText] = React.useState("");
  return (
    <View
      style={{
        paddingHorizontal: "6%",
        backgroundColor: "#F2F1F6",
        flex: 1,
        justifyContent: "space-between",
        paddingTop: 5,
        paddingBottom: "5%",
      }}
    >
      <View>
        <Text variant="displayMedium" style={{ color: "#1E1E1E" }}>
          Invoice
        </Text>
        <TextInput
          value={text}
          placeholder="Search Invoice"
          style={{
            backgroundColor: "#ffffff",
            marginTop: 12,
            color: "#959595",
            fontSize: 20,
            paddingHorizontal: 10,
            height: 40,
          }}
        ></TextInput>
        <TouchableHighlight onPress={()=> navigation.navigate("Filter")}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              marginRight: "auto",
              padding: 5,
            }}
          >
            <MaterialCommunityIcons name="view-dashboard" color="#3B79FE" />
            <Text style={{ backgroundColor: "#ffffff" }}>All Categories</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View
        style={{
          backgroundColor: "#ffffff",
          height: "15%",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#959595", fontSize: 19 }}>
          Click the “+” button to snapshot a invoice and get started.
        </Text>
      </View>
      <View style={{ marginHorizontal: -5 }}>
        <Button
          mode="contained"
          onPress={() => console.log("Pressed")}
          buttonColor="#3B79FE"
          textColor="#ffffff"
          style={{ borderRadius: 7, height: 48, justifyContent: "center" }}
        >
          <Text style={{ color: "#ffffff", fontSize: 16 }}>Search</Text>
        </Button>
      </View>
    </View>
  );
};

export default Invoice;
