import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TextInput, Button } from "react-native-paper";

const Login = ({ navigation }) => {
  const [text, setText] = React.useState("");
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: "6%",
        paddingVertical: 15,
        paddingTop: 15,
        backgroundColor: "#FFFFFF",
      }}
    >
      <View
        style={{
          flex: 2,

          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 16 }}>Phone Number</Text>

          <TextInput
            placeholder="Enter Phone Number"
            value={text}
            onChangeText={(text) => setText(text)}
            underlineColor="false"
            keyboardType="numeric"
            style={styles.txtinput}
          />
        </View>
        <View>
          <Text style={{ fontWeight: 400, color: "#959595" }}>
            We’ll call or text to confirm your number. Standard message and data
            rates apply.
          </Text>
        </View>
        <View style={{ marginHorizontal: -5 }}>
          <Button
            mode="contained"
            onPress={() => navigation.push("Home")}
            buttonColor="#3B79FE"
            textColor="#ffffff"
            style={{ borderRadius: 7, height: 48, justifyContent: "center" }}
          >
            <Text style={{ fontSize: 16 }}>Login</Text>
          </Button>
        </View>
      </View>
      <View style={{ flex: 0.5, justifyContent: "flex-end" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1, height: 1, backgroundColor: "#D9D9D9" }} />
          <View>
            <Text style={{ width: 50, textAlign: "center" }}>or</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "#D9D9D9" }} />
        </View>
      </View>
      <View style={{ flex: 3, justifyContent: "center" }}>
        <Button
          mode="outlined"
          icon="gmail"
          onPress={() => console.log("Pressed")}
          style={styles.dicon}
          textColor="#3B79FE"
        >
          <Text style={styles.dbutton}>Continue with Email</Text>
        </Button>
        <Button
          mode="outlined"
          icon="apple"
          onPress={() => console.log("Pressed")}
          style={styles.dicon}
          textColor="#3B79FE"
        >
          <Text style={styles.dbutton}>Continue with Apple</Text>
        </Button>
        <Button
          mode="outlined"
          icon="google"
          onPress={() => console.log("Pressed")}
          style={styles.dicon}
          textColor="#3B79FE"
        >
          <Text style={styles.dbutton}>Continue with Google</Text>
        </Button>
        <Button
          mode="outlined"
          icon="facebook"
          style={styles.dicon}
          onPress={() => console.log("Pressed")}
          textColor="#3B79FE"
        >
          <Text style={styles.dbutton}>Continue with Facebook</Text>
        </Button>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  dbutton: {
    color: "#959595",
  },
  dicon: {
    alignItems: "center",
    height: "auto",
    marginVertical: 8,
    borderRadius: 7,
    paddingVertical: 3,
    justifyContent: "center",
  },
  txtinput: {
    borderRadius: 8,
    height: 44,
    fontSize: 16,
    borderColor: "#CDCDCD",
    borderWidth: 1,
    backgroundColor: "#ffffff",
  },
});

export default Login;
