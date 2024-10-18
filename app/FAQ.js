import { View, Text, FlatList } from "react-native";
import React from "react";

const FAQ = () => {
  const DATA = [
    {
      id: 1,
      ques: "Can I change plans at anytime",
      answer:
        "You bet! Change or cancel your monthly plan at any time in the “subscriptions” tab of the “iTunes & App Store” section of your Account  Settings. Any unused portion of a free trial period will be forfeited if you purchase a subscription before the trial is complete.",
    },
    {
      id: 2,
      ques: "How wil you bill me?",
      answer:
        "Upon conclusion of your 30-day free trial,  the credit card associated with your iTunes Account will be billed on a monthly auto-renewable basis. All receiptsmile digital sub-scription plans (Starter, Lite & Pro) renews every 30 days and continue to bill until auto-renew is turned off in Accountsettings. To avoid being charged, auto-renew must be turned off at least 24 hours before the next billing date.",
    },
    {
      id: 3,
      ques: "How does the 30-days trial work?",
      answer:
        "Upon conclusion of your 30-day free trial,  the credit-card associated with your iTunes Account will be billed on a monthly auto-renewable basis. All receiptsmile digital sub-scription plans (Starter, Lite & Pro) renews every 30 days and continue to bill until auto-renew is turned off in Accountsettings. To avoid being charged, auto-renew must be turned off at least 24 hours before the next billing date.",
    },
    {
      id: 4,
      ques: "Where are your terms of service and privacy policy?",
      answer:
        "Our terms of service can be found here, and our privacy &policy is here",
    },
  ];
  return (
    <View
      style={{
        paddingHorizontal: "6%",
        backgroundColor: "#F2F1F6",
        flex: 1,
        paddingVertical: 5,
      }} 
    >
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.answer || item.ques}
        renderItem={({ item }) => (
          <View>
            <View style={{marginTop: 12}}>
              <Text style={{ color: "#3B79FE" }}>{item.ques}</Text>
            </View>
            <View
              style={{
                backgroundColor: "#ffffff",
                marginVertical: 5,
                borderRadius: 8,
                paddingVertical: 5,
                paddingHorizontal: 15,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#1E1E1E", fontSize: 14, fontWeight: 50 }}>
                {item.answer}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default FAQ;
