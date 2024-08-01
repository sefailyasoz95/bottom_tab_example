import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../Utils/types";
import ProfileScreen from "../Screens/BottomTab/Profile/ProfileScreen";

const Profile = createNativeStackNavigator<ProfileStackParams>();
const options: NativeStackNavigationOptions = {
	headerShown: false,
};
const ProfileStack = () => {
	return (
		<Profile.Navigator screenOptions={options}>
			<Profile.Screen name='ProfileScreen' component={ProfileScreen} />
		</Profile.Navigator>
	);
};

export default ProfileStack;
