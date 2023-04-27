import React from 'react';
import { Groups } from '@screens/Groups';
import { NewGroup } from '@screens/NewGroup';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';

export default function App() {

	//fontsLoaded recebe um valor boolean
	const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold});

	return (
		<ThemeProvider theme={theme}>
			{ fontsLoaded ? <NewGroup /> : <Loading />}
			<StatusBar
				barStyle="light-content"
				translucent
				backgroundColor='transparent'
			/>
		</ThemeProvider>
	);
}