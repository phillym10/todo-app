import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		"InterTight": require("../assets/fonts/InterTight.ttf")
	})

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded])

	if (!fontsLoaded) return null;

	return <Stack screenOptions={{ headerShown: false }} />;
}
