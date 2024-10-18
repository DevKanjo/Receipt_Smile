import {
  View,
  SafeAreaView,
  StyleSheet,
  Animated,
  Platform,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import { Button, Text } from "react-native-paper";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import Congratulation from "./Congratulation";

const { Value, Text: AnimatedText } = Animated;
const CELL_COUNT = 6;

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({ hasValue, index, isFocused }) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

export default function Verify({ navigation }) {
  const [counter, setCounter] = React.useState(60);
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const renderCell = ({ index, symbol, isFocused }) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    // Run animation on next event loop tik
    // Because we need first return new style prop and then animate this value
    setTimeout(() => {
      animateCell({ hasValue, index, isFocused });
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: "6%",
      }}
    >
      <View>
        <Text variant="headlineLarge" style={{ color: "#1E1E1E" }}>
          6-Digit Code
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: "#959595",
          }}
        >
          Code sent to +2348000000000 unless you already have an account
        </Text>
      </View>
      <SafeAreaView style={styles.root}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={renderCell}
        />
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "#959595", fontSize: 15 }}>
            {"Resend Code in 00:" + counter}
          </Text>
          <TouchableHighlight onPress={() => navigation.push("Login")}>
            <Text style={{ color: "#3B79FE", fontSize: 15 }}>
              Already have an account? Log in
            </Text>
          </TouchableHighlight>
        </View>

        <Button
          style={styles.nextButton}
          onPress={() => navigation.push("Congratulation")}
        >
          <Text style={styles.nextButtonText}>Verify</Text>
        </Button>
      </SafeAreaView>
    </View>
  );
}

const CELL_SIZE = 30;
const CELL_BORDER_RADIUS = 8;
const DEFAULT_CELL_BG_COLOR = "#fff";
const NOT_EMPTY_CELL_BG_COLOR = "#3557b7";
const ACTIVE_CELL_BG_COLOR = "#f7fafe";

const styles = StyleSheet.create({
  codeFieldRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    ...Platform.select({ web: { lineHeight: 65 } }),
    fontSize: 30,
    textAlign: "center",
    borderRadius: CELL_BORDER_RADIUS,
    color: "#3759b8",
    backgroundColor: "#fff",

    // IOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },

  // =======================

  root: {
    padding: 20,
  },
  title: {
    paddingTop: 50,
    color: "#000",
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    paddingBottom: 40,
  },

  subTitle: {
    paddingTop: 30,
    color: "#000",
    textAlign: "center",
  },
  nextButton: {
    marginTop: 30,
    borderRadius: 60,
    height: 40,
    backgroundColor: "#3B79FE",
    justifyContent: "center",
    width: "100%",
    marginBottom: 100,
  },
  nextButtonText: {
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
  },
});
