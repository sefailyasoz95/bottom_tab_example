import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const SettingsScreen = (props: Props) => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>SettingsScreen</Text>
		</SafeAreaView>
	);
};

export default SettingsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 50,
	},
});
