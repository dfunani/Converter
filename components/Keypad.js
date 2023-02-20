import Key from "./Key";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";

export default function Keypad({ input }) {
  let symbols = [
    ["C", "7", "4", "1", "+/-"],
    ["÷", "8", "5", "2", "0"],
    ["*", "9", "6", "3", "."],
    ["⇄", "-", "+"],
  ];
  return (
    <View style={styles.Container}>
      <View style={styles.Column}>
        {symbols[0].map((a) => (
          <TouchableHighlight style={styles.Cell}>
            <Text
              style={{
                color: "white",
                fontSize: 45,
                textAlign: "center",
              }}
            >
              {a}
            </Text>
          </TouchableHighlight>
        ))}
      </View>
      <View style={styles.Column}>
        {symbols[1].map((a) => (
          <TouchableHighlight style={styles.Cell}>
            <Text style={{ color: "white", fontSize: 45, textAlign: "center" }}>
              {a}
            </Text>
          </TouchableHighlight>
        ))}
      </View>
      <View style={styles.Column}>
        {symbols[2].map((a) => (
          <TouchableHighlight style={styles.Cell}>
            <Text style={{ color: "white", fontSize: 45, textAlign: "center" }}>
              {a}
            </Text>
          </TouchableHighlight>
        ))}
      </View>
      <View style={styles.Column}>
        {symbols[3].map((a) => (
          <TouchableHighlight style={styles.Cell}>
            <Text style={{ color: "white", fontSize: 45, textAlign: "center" }}>
              {a}
            </Text>
          </TouchableHighlight>
        ))}
        <TouchableHighlight style={styles.Equals}>
          <Text
            style={{
              color: "white",
              fontSize: 45,
              textAlign: "center",
              marginTop: 30,
            }}
          >
            =
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 2,
    flexDirection: "row",
  },
  Column: {
    flex: 1,
  },
  Cell: {
    flex: 1,
    borderWidth: 0.2,
    borderColor: "#ffffff11",
  },
  Equals: {
    flex: 2,
    borderWidth: 0.2,
    borderColor: "#ffffff11",
  },
});
