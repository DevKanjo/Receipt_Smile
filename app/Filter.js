import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Button,
} from "react-native";
import React from "react";

const Filter = ({ navigation }) => {
  return (
    <View
      style={{
        paddingHorizontal: "6%",
        backgroundColor: "#F2F1F6",
        paddingVertical: 15,
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ color: "#9D9D9D" }}>DATE RANGE</Text>
          <View style={styles.whitecont}>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => console.log("Pressed!")}
            >
              <View>
                <Text style={{ fontSize: 18, paddingVertical: 4 }}>
                  All dates
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => navigation.navigate("Daterange")}
            >
              <View style={{ borderTopColor: "#D9D9D9", borderTopWidth: 1 }}>
                <Text
                  style={{ color: "#3B79FE", fontSize: 18, paddingVertical: 4 }}
                >
                  Set date ranges
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ color: "#9D9D9D" }}>CATEGORIES</Text>
          <View style={styles.whitecont}>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => console.log("Pressed!")}
            >
              <View>
                <Text style={{ fontSize: 18, paddingVertical: 4 }}>
                  All Categories
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => navigation.navigate("Categories")}
            >
              <View style={{ borderTopColor: "#D9D9D9", borderTopWidth: 1 }}>
                <Text
                  style={{ color: "#3B79FE", fontSize: 18, paddingVertical: 4 }}
                >
                  Set Categories
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  whitecont: {
    backgroundColor: "#FFFFFF",
    marginVertical: 5,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
});

export default Filter;
