import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'
import Banner from './components/Banner';
import Keypad from './components/Keypad';
import Display from "./components/Display"

export default function App() {
  const [tab, setTab] = useState("Length")
  const [input, setInput] = useState('Hello')
  return (
    <View style={styles.Container}>
      <Banner tab={tab} />
      <Display/>
      <Keypad input={input} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#1b263b",
    flex: 1
  }
});
