import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const HomeScreen = (props: Props) => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>HomeScreen</Text>
		</SafeAreaView>
	);
};

export default HomeScreen;

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
