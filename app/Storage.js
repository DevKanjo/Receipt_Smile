import { View, TextInput, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ActivityIndicator, Button, Text } from "react-native-paper";
import CloudShare from "./CloudShare";
import ShareCongrats from "./ShareCongrats";
import Receipts from "./Receipts";
import filter from "lodash.filter";

const Stack = createNativeStackNavigator();

const Storage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CloudStore"
        component={CloudStore}
        options={{ header: () => false }}
      />
      <Stack.Screen
        name="CloudShare"
        component={CloudShare}
        options={{ headerTitle: "Cloud Storage" }}
      />
      <Stack.Screen
        name="ShareCongrats"
        component={ShareCongrats}
        options={{ header: () => false,  }}
      />
    </Stack.Navigator>
  );
};

function CloudStore({ navigation }) {
  const DATA = [
    { id: 1, pdf: "Purchase001.pdf" },
    { id: 1, pdf: "Purchase002.pdf" },
    { id: 2, pdf: "Purchase003.pdf" },
    { id: 3, pdf: "Purchase004.pdf" },
    { id: 4, pdf: "Purchase of July Invoice.pdf" },
  ];

  const [fullData, setFullData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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
      <View style={{}}>
        <Text variant="displayMedium" style={{ color: "#1E1E1E" }}>
          Cloud Storage
        </Text>
        <TextInput
          value={searchQuery}
          onChangeText={(query) => handleSearch(query)}
          placeholder="Search Receipts"
          clearButtonMode="always"
          style={{
            backgroundColor: "#ffffff",
            marginTop: 12,
            color: "#959595",
            fontSize: 20,
            paddingHorizontal: 10,
            height: 40,
          }}
        ></TextInput>
      </View>
      <View style={{ height: "73%" }}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.pdf}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "#ffffff",
                marginVertical: 5,
                borderRadius: 8,
                paddingVertical: 5,
                paddingHorizontal: 15,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#959595", fontSize: 18, fontWeight: 50 }}>
                {item.pdf}
              </Text>
              <MaterialCommunityIcons
                name="file-star-outline"
                color={"#ED8796"}
              />
            </View>
          )}
        />
      </View>

      <View style={{ marginHorizontal: -5 }}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("CloudShare")}
          buttonColor="#3B79FE"
          textColor="#ffffff"
          style={{ borderRadius: 7, height: 48, justifyContent: "center" }}
        >
          <Text style={{ color: "#ffffff", fontSize: 16 }}>Share</Text>
        </Button>
      </View>
    </View>
  );
}

export default Storage;
