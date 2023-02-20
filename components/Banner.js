import {StyleSheet, Text, View,} from 'react-native' 
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function Banner({ tab, history, flagged })
{
	return (
		<View style={styles.Container}>
			<Text style={styles.Text}>
					{tab}
				</Text>
			<View style={styles.Star}>
				<FontAwesome5 name="star" size={40} color="white" />
				
			</View>
			<View style={styles.Clock}>
				<Feather name="clock" size={40} color="white" />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	Container: {
		flex: 0.8,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	Text: {
		fontSize: 50,
		flex: 5,
		marginStart: 15,
		color: "white"
	},
	Star: {
		flex: 1,
		marginEnd: 15
	},
	Clock: {
		flex: 1,
		marginEnd: 5
		}

})