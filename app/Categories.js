import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";

const Categories = ({ navigation }) => {
  const [text, setText] = useState("");
  const [value, setValue] = useState("first");
  return (
    <ScrollView
      style={{
        paddingHorizontal: "6%",
        backgroundColor: "#F2F1F6",
        paddingVertical: 5,
      }}
    >
      <TextInput
        value={text}
        placeholder="Search tags"
        style={{
          backgroundColor: "#ffffff",
          marginTop: 12,
          color: "#959595",
          fontSize: 17,
          paddingHorizontal: 10,
          height: 30,
        }}
      ></TextInput>
      <View style={{ paddingHorizontal: 10, paddingTop: 15 }}>
        <Text style={{ color: "#959595" }}>SELECTED TAGS</Text>
      </View>
      <View style={styles.whitecont}>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <RadioButton value={1} />
            <Text
              style={{
                color: "#FFA537",
                fontSize: 18,
                paddingVertical: 8,
              }}
            >
              Reimbursable
            </Text>
          </View>
          <View style={styles.borderLine}>
            <RadioButton value={2} />
            <Text
              style={{
                color: "#FF6584",
                fontSize: 18,
                paddingVertical: 8,
              }}
            >
              Deductible
            </Text>
          </View>
          <View style={styles.borderLine}>
            <RadioButton value={3} />
            <Text
              style={{
                color: "#3B79F8",
                fontSize: 18,
                paddingVertical: 8,
              }}
            >
              I'm not sure
            </Text>
          </View>
          <View style={styles.borderLine}>
            <RadioButton value={4} />
            <Text
              style={{
                color: "#4FF700",
                fontSize: 18,
                paddingVertical: 8,
              }}
            >
              Mileage
            </Text>
          </View>
          <View style={styles.borderLine}>
            <RadioButton value={5} />
            <Text style={styles.txt}>Reimbursed</Text>
          </View>
          <View style={styles.borderLine}>
            <RadioButton value={6} />
            <Text style={styles.txt}>Auto / Fuel</Text>
          </View>
          <View style={styles.borderLine}>
            <RadioButton value={7} />
            <Text style={styles.txt}>Bank / ATM</Text>
          </View>
          <View style={styles.borderLine}>
            <RadioButton value={8} />
            <Text style={styles.txt}>Computer / Internet</Text>
          </View>
          <View style={styles.borderLine}>
            <RadioButton value={9} />
            <Text style={styles.txt}>General Retail</Text>
          </View>
          <View style={styles.borderLine}>
            <RadioButton value={10} />
            <Text style={styles.txt}>Groceries</Text>
          </View>
          <View style={styles.borderLine}>
            <RadioButton value={11} />
            <Text style={styles.txt}>Insurance</Text>
          </View>
          <View style={styles.borderLine}>
            <RadioButton value={12} />
            <Text style={styles.txt}>Meals / Entertainment</Text>
          </View>
          <View style={styles.borderLine}>
            <RadioButton value={13} />
            <Text style={styles.txt}>Medical / Health</Text>
          </View>
          <View style={styles.borderLine}>
            <RadioButton value={14} />
            <Text style={styles.txt}>Office Supplies</Text>
          </View>
        </RadioButton.Group>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button
          title="Clear"
          color={"#959595"}
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Apply"
          color={"#FFA537"}
          onPress={() => navigation.goBack()}
        />
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
  borderLine: {
    borderTopColor: "#D9D9D9",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  txt: {
    fontSize: 18,
    paddingVertical: 8,
  },
});

export default Categories;
