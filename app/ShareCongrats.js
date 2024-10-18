import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from 'react-native-paper';

const ShareCongrats = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: "6%",
        paddingVertical: 15,
        paddingTop: 15,
        backgroundColor: "#F2F1F6",
      }}
    >
      <View
        style={{
          height: "90%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="thumb-up" color={"#FFCA28"} size={140} />
        <Text style={{fontSize: 25}}>Congratulations</Text>
        <Text style={{color: "#959595", fontSize: 17}}>File has been successfully Sent</Text>
      </View>
      <View style={{ height: "10%" }}>
        <View style={{ marginHorizontal: -5 }}>
          <Button
            mode="contained"
            onPress={() => navigation.push("CloudStore")}
            buttonColor="#3B79FE"
            textColor="#ffffff"
            style={{ borderRadius: 7, height: 48, justifyContent: "center" }}
          >
            <Text style={{fontSize: 16}}>Return To Homepage</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

export default ShareCongrats