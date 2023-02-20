import {StyleSheet, Text, View,} from 'react-native' 
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Display({ tab, history, flagged })
{
	return (
		<View style={styles.Container}>
			
		</View>
	)
}

const styles = StyleSheet.create({
	Container: {
		borderWidth: 5,
		borderColor: 'red',
		flex: 2
	}

})