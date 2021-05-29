import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from 'react-native';
//
import { theme } from 'theme';
import Test from 'components/Test';
import HomeScreen from 'screens/HomeScreen';

export default function App() {
  let [opensansLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  if (!opensansLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
          <ImageBackground
            style={styles.app__Background}
            source={require('./src/assets/images/ref1.jpg')}
          >
            <HomeScreen />
          </ImageBackground>
        </SafeAreaView>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  app__Background: {
    flex: 1,
  },
});
