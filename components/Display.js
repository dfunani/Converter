import { StyleSheet, Text, View } from "react-native";

export default function Display({ tab, history, flagged }) {
  return (
    <View style={styles.Container}>
      <Conversion />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    borderWidth: 5,
    borderColor: "red",
    flex: 2,
  },
});
