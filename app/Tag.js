import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Button } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";

const Tag = ({ route, navigation }) => {
  const [imgUrl, settingUrl] = useState(
    ""
  );

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      settingUrl(result.assets[0].uri);
    } else {
      alert("You did not select any image");
    }
  };
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const data = [
    { label: "PDF", value: "1" },
    { label: "PNG", value: "2" },
    { label: "JPEG", value: "3" },
  ];

  return (
    <View style={{ backgroundColor: "#959595", flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          flex: 1,
          width: "100%",
          backgroundColor: "#FFFFFF",
          paddingHorizontal: "10%",
          marginTop: "35%",
          paddingTop: 5,
        }}
      >
        <View>
          <Text style={{ fontSize: 19 }}>Invoice 001</Text>
        </View>
        <View style={{ marginVertical: 5 }}>
          <Button
            icon="upload"
            mode="contained"
            buttonColor="#3B79FE"
            textColor="#ffffff"
            onPress={pickImage}
          >
            <Text>Import From Photo Library</Text>
          </Button>
        </View>
        <Image
          source={{ uri: imgUrl }}
          height={150}
          width={"100%"}
          borderRadius={10}
        />
        <Text style={{ marginTop: 5, fontSize: 19 }}>Tags</Text>
        <TextInput
          placeholder="Enter The Tags For Your Receipt/Invoice"
          placeholderTextColor={"#959595"}
          style={{
            backgroundColor: "#F2F1F6",
            width: "100%",
            height: 40,
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
        />
        <Text style={{ marginTop: 5, fontSize: 19 }}>Note</Text>
        <TextInput
          placeholder="Notes......"
          style={{
            backgroundColor: "#F2F1F6",
            width: "100%",
            height: 40,
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
        />
        <Text style={{ marginTop: 5, fontSize: 19 }}>Save Document As</Text>
        <Dropdown
          data={data}
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select type" : "..."}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        <View style={{ width: "100%", marginTop: 20 }}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("Home", { screen: "Receipt" })}
            buttonColor="#3B79FE"
            textColor="#ffffff"
            style={{
              borderRadius: 7,
              height: 48,
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16 }}>Save To The Cloud</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 40,
    borderColor: "gray",

    borderRadius: 5,
    paddingHorizontal: 8,
    backgroundColor: "#F2F1F6",
    width: "100%",
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
export default Tag;
