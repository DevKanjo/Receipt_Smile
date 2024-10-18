import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  PermissionsAndroid,
  TextInput
} from "react-native";
import { Switch, ProgressBar } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

const Settings = ({navigation}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () =>
    setIsSwitchOn(!isSwitchOn || requestCameraPermission);
  const [isSwitchOn1, setIsSwitchOn1] = React.useState(false);
  const onToggleSwitch1 = () => setIsSwitchOn1(!isSwitchOn1);
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <ScrollView
      style={{
        paddingHorizontal: "6%",
        backgroundColor: "#F2F1F6",
        paddingVertical: 5,
      }}
    >
      <View style={styles.whitecont}>
        <TextInput placeholder="Add first and last name"/>
        <Text style={{ color: "#3B79FE", fontSize: 16 }}>receiptsmile@gmail,com</Text>
      </View>
      <View style={styles.whitecont}>
        <Text style={{ color: "#959595", fontSize: 20 }}>Receiptsmile</Text>
        <Text style={{ color: "#959595" }}>Current Usage 0 of 0</Text>
        <View style={{ marginVertical: 15 }}>
          <ProgressBar progress={0} color="#D9D9D9" />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#959595", fontSize: 15 }}>Plan Type</Text>
            <Text style={{ color: "#959595", fontSize: 15 }}>Free</Text>
          </View>
        </View>
        <TouchableHighlight onPress={() => console.log("Pressed")}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#18BB3C", fontSize: 17 }}>
              Change Your Plan
            </Text>
            <MaterialCommunityIcons
              name="greater-than"
              color="#1E1E1E"
              size={15}
            />
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.whitecont}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.blackText}>Open Camera With App</Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
        <View
          style={{
            borderTopColor: "#D9D9D9",
            borderTopWidth: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.blackText}>Save Images To Gallery</Text>
          <Switch value={isSwitchOn1} onValueChange={onToggleSwitch1} />
        </View>
      </View>
      <View style={styles.whitecont}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => console.log("Pressed!")}
        >
          <View>
            <Text style={styles.bluetext}>Contact Us</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => console.log("Pressed!")}
        >
          <View style={{ borderTopColor: "#D9D9D9", borderTopWidth: 1 }}>
            <Text style={styles.bluetext}>Terms and Conditons</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate("FAQ")}
        >
          <View style={{ borderTopColor: "#D9D9D9", borderTopWidth: 1 }}>
            <Text style={styles.bluetext}>Frequently Asked Questions</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => console.log("Pressed!")}
        >
          <View style={{ borderTopColor: "#D9D9D9", borderTopWidth: 1 }}>
            <Text style={styles.bluetext}>Privacy Policy</Text>
          </View>
        </TouchableHighlight>
      </View>

      <View style={styles.whitecont}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => console.log("Pressed!")}
        >
          <View>
            <Text style={styles.redText}>Delete Receiptsmile Account</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => navigation.push("Signup")}
        >
          <View style={{ borderTopColor: "#D9D9D9", borderTopWidth: 1 }}>
            <Text style={styles.redText}>Logout</Text>
          </View>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  whitecont: {
    backgroundColor: "#ffffff",
    marginVertical: 5,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  bluetext: {
    color: "#3B79FE",
    fontSize: 18,
    paddingVertical: 4,
  },
  redText: {
    color: "#FF0000",
    fontSize: 18,
    paddingVertical: 4,
  },
  blackText: {
    color: "#1E1E1E",
    fontSize: 18,
    paddingVertical: 4,
  },
});

export default Settings;
