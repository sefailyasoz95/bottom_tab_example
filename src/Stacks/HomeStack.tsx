import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { HomeStackParams } from "../Utils/types";
import HomeScreen from "../Screens/BottomTab/Home/HomeScreen";

const Home = createNativeStackNavigator<HomeStackParams>();
const options: NativeStackNavigationOptions = {
	headerShown: false,
};
const HomeStack = () => {
	return (
		<Home.Navigator screenOptions={options}>
			<Home.Screen name='HomeScreen' component={HomeScreen} />
		</Home.Navigator>
	);
};

export default HomeStack;
