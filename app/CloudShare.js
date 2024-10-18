import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

export default function CloudShare({ navigation }) {
  const [text, setText] = useState("");
  const [note, setNote] = useState("")

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: "6%",
        paddingVertical: 15,
        paddingTop: 15,
        backgroundColor: "#F2F1F6",
        justifyContent: "space-between",
      }}
    >
      <View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontSize: 16, color: "#959595" }}>EMAIL</Text>

          <TextInput
            placeholder="Enter Recipient Email"
            placeholderTextColor="#959595"
            value={text}
            onChangeText={(text) => setText(text)}
            underlineColor="false"
            keyboardType="numeric"
            style={styles.txtinput}
          />
        </View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontSize: 16, color: "#959595" }}>NOTE</Text>

          <TextInput
            placeholder="Add a Note......."
            placeholderTextColor="#959595"
            value={text}
            onChangeText={(text) => setNote(note)}
            underlineColor="false"
            keyboardType="numeric"
            style={styles.txtinput1}
          />
        </View>
      </View>
      <View style={{ marginHorizontal: -5 }}>
        <Button
          mode="contained"
          onPress={() => navigation.replace("ShareCongrats")}
          buttonColor="#3B79FE"
          textColor="#ffffff"
          style={{ borderRadius: 7, height: 48, justifyContent: "center" }}
        >
          <Text style={{ fontSize: 16 }}>Share</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtinput: {
    borderRadius: 8,
    height: 44,
    fontSize: 16,
    borderColor: "#CDCDCD",
    borderWidth: 1,
    backgroundColor: "#ffffff",
  },
  txtinput1: {
    borderRadius: 8,
    height: 65,
    fontSize: 16,
    borderColor: "#CDCDCD",
    borderWidth: 1,
    backgroundColor: "#ffffff",
  },
});
