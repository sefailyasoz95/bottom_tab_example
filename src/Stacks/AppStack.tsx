import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParams } from "../Utils/types";
import SettingsScreen from "../Screens/App/SettingsScreen";
import BottomTabStack from "./BottomTabStack";

const App = createNativeStackNavigator<AppStackParams>();

const AppStack = () => {
	return (
		<App.Navigator screenOptions={{ headerShown: false }}>
			<App.Screen name='BottomTabs' component={BottomTabStack} />
			<App.Screen name='SettingsScreen' component={SettingsScreen} />
		</App.Navigator>
	);
};

export default AppStack;
