import * as React from "react";

import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Receipts from "./Receipts";
import Invoice from "./Invoice";
import Storage from "./Storage";
import Settings from "./Settings";

const Tab = createBottomTabNavigator();

function ModalScreen({ navigation }) {
  const openCameraLib = async () => {
    console.log("PRESS=====>>>");
    const result = await ImagePicker.launchCameraAsync();
    settingUrl(result?.assets[0]?.uri);
    console.log("RESULT===>>", result);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#959595",
        justifyContent: "center",
        paddingHorizontal: 15,
      }}
    >
      <View style={styles.whitecont}>
        <View
          style={{
            alignItems: "center",
            borderBottomColor: "#D9D9D9",
            borderBottomWidth: 1,
          }}
        >
          <Text style={styles.blackText}>Upload Photo of Document</Text>
          <Text>Please choose photo source</Text>
        </View>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={openCameraLib}
        >
          <View style={{}}>
            <Text style={styles.bluetext}>Scan a receipt</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={openCameraLib}
        >
          <View style={{ borderTopColor: "#D9D9D9", borderTopWidth: 1 }}>
            <Text style={styles.bluetext}>Scan an Invoice</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate("Tag")}
        >
          <View style={{ borderTopColor: "#D9D9D9", borderTopWidth: 1 }}>
            <Text style={styles.bluetext}>Photo Library</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => navigation.goBack()}
        >
          <View style={{ borderTopColor: "#D9D9D9", borderTopWidth: 1 }}>
            <Text style={styles.redText}>Cancel</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#3B79FE",
        tabBarLabelStyle: { fontSize: 13 },
      }}
    >
      <Tab.Screen
        name="Receipts"
        component={Receipts}
        options={{
          tabBarLabel: "Receipt",
          header: () => false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="receipt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Invoice"
        component={Invoice}
        options={{
          header: () => false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="equal-box"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Group screenOptions={{ presentation: "modal" }}>
        <Tab.Screen
          name="MyModal"
          component={ModalScreen}
          options={{
            title: "",
            header: () => false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="plus-circle"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Group>
      <Tab.Screen
        name="Storage"
        component={Storage}
        options={{
          header: () => false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cloud-print-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitleStyle: { fontSize: 25 },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={15} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  whitecont: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 15,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bluetext: {
    color: "#3B79FE",
    fontSize: 22,
    paddingVertical: 4,
  },
  redText: {
    color: "#FF0000",
    fontSize: 22,
    paddingVertical: 4,
  },
  blackText: {
    color: "#959595",
    fontSize: 18,
    paddingTop: 4,
  },
});
