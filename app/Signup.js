import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TextInput, Button } from "react-native-paper";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Signup = ({navigation}) => {
  const [text, setText] = React.useState("");
  const options = [{ title: "United State (+1)" }, { title: "Nigeria (+234)" }];
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: "6%",
        paddingVertical: 15,
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
          <SelectDropdown
            data={options}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  {selectedItem && (
                    <Icon
                      name={selectedItem.icon}
                      style={styles.dropdownButtonIconStyle}
                    />
                  )}
                  <Text style={styles.dropdownButtonTxtStyle}>
                    {(selectedItem && selectedItem.title) || "Country/Region"}
                  </Text>
                  <Icon
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    style={styles.dropdownButtonArrowStyle}
                  />
                </View>
              );
            }}
            renderItem={(item, isSelected) => {
              return (
                <View
                  style={{
                    ...styles.dropdownItemStyle,
                    ...(isSelected && { backgroundColor: "#D2D9DF" }),
                  }}
                >
                  <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
                  <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
          />
          <TextInput
            label="Phone Number"
            value={text}
            onChangeText={(text) => setText(text)}
            underlineColor="false"
            keyboardType="numeric"
            style={{
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              fontSize: 16,
              borderColor: "#CDCDCD",
              borderWidth: 1,
              backgroundColor: "#ffffff",
            }}
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
            onPress={() => navigation.navigate("Verify")}
            buttonColor="#3B79FE"
            textColor="#ffffff"
            style={{ borderRadius: 7, height: 48, justifyContent: "center" }}
          >
            <Text style={{ fontSize: 16 }}>Continue</Text>
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
  dropdownButtonStyle: {
    width: "100%",
    height: 56,
    backgroundColor: "#E9ECEF",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    borderColor: "#CDCDCD",
    borderWidth: 1,
    backgroundColor: "#ffffff",
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dbutton: {
    color: "#959595",
  },
  dicon: {
    alignItems: "center",
    height: "auto",
    marginVertical: 8,
    borderRadius: 7,
    paddingVertical: 3,
  },
});

export default Signup;
