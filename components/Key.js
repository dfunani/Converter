import {Button, View, StyleSheet} from 'react-native';
  

export default function Key({ value })
{
	return (<View style={styles.Container}><Button title={value} color="red"/></View>)
}

const styles = StyleSheet.create({
	Container: {
		flex: 3
	}

})