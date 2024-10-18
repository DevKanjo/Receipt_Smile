import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import CalendarPicker from "react-native-calendar-picker";

const Daterange = ({navigation}) => {
  const minDate = new Date(2000, 0, 0); // Today
  const maxDate = new Date(2026, 6, 3);
  const [selectedStartDate, setSelectedStartDate] = useState("DD/MM/YYYY");
  const [selectedEndDate, setSelectedEndDate] = useState("DD/MM/YYYY");
  const onDateChange = (date, type) => {
    console.log(JSON.stringify(date));
    const newDate = JSON.stringify(date);
    const newDate1 = newDate.substring(1, newDate.length - 1);
    const dates = newDate1.split("T");
    const date1 = dates[0].split("-");
    const day = date1[2];
    const month = date1[1];
    const year = date1[0];
    console.log(day + "/" + month + "/" + year);

    if (type == "END_DATE") {
      if (day == undefined) {
        setSelectedEndDate("DD/MM/YYYY");
      } else {
        setSelectedEndDate(day + "/" + month + "/" + year);
      }
    } else {
      setSelectedStartDate(day + "/" + month + "/" + year);
      setSelectedEndDate("DD/MM/YYYY");
    }
  };
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        marginVertical: "6%",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text style={{ color: "#959595", fontSize: 18, marginBottom: 12 }}>
          Select Date Range
        </Text>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#7300e6"
          selectedDayTextColor="#FFFFFF"
          onDateChange={onDateChange}
        />
        <View style={styles.whitecont}>
          <View>
            <Text style={styles.txt}>{"Start Date: " + selectedStartDate}</Text>
          </View>
          <View style={{borderTopWidth: 1, borderTopColor: "#959595"}}>
            <Text style={styles.txt}>{"End Date: " + selectedEndDate}</Text>
          </View>
        </View>
      </View>
      <View>
        <Button color={"#FFA537"} title="Done" onPress={()=> navigation.goBack()}/>
      </View>
    </View>
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
  txt:{
    fontSize: 18,
    marginVertical: 7
  }
});

export default Daterange;
