import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabStackParams } from "../Utils/types";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";

const BottomTab = createBottomTabNavigator<BottomTabStackParams>();

const BottomTabStack = () => {
	return (
		<BottomTab.Navigator screenOptions={{ headerShown: false }}>
			<BottomTab.Screen name='HomeStack' component={HomeStack} />
			<BottomTab.Screen name='ProfileStack' component={ProfileStack} />
		</BottomTab.Navigator>
	);
};

export default BottomTabStack;
