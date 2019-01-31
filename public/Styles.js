
import {StyleSheet} from 'react-native'
export  const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 26,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},

	title: {
		fontSize: 19,
		fontWeight: 'bold',
		color: 'green'
	},

	inputContainer: {
		// flex:1,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	placeInput: {
		width: '70%'
	},
	buttonInput: {
		width: '30%'
	}
});