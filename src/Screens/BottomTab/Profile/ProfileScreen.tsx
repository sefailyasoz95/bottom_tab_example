import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppStackParams } from "../../../Utils/types";

type Props = {};

const ProfileScreen = (props: Props) => {
	const globalNavigation = useNavigation<StackNavigationProp<AppStackParams>>();
	const handlePress = () => {
		globalNavigation.navigate("SettingsScreen");
	};
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>ProfileScreen</Text>
			<Button onPress={handlePress} title='go to settings screen without showing bottom tab :)' />
		</SafeAreaView>
	);
};

export default ProfileScreen;

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
