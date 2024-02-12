import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('./assets/backround.png')} style={styles.background}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        
        {/* Top_class with text */}
        <View style={styles.Top_class}>
          <Text>Hello</Text>
          <Text>You are currently viewing information for </Text>
        </View>

        {/* Bottom_class with text */}
        <View style={styles.Bottom_class}>
          <Text>Base Depth: </Text>
          <Text>Snowfall in the last 24 hr:  </Text>
          <Text> Snowfall in the last 48 hr: </Text>
          <Text> Snowfall in the last 72 hr: </Text>
          
        </View>
      </View>

      {/* Icon */}
      <Image style={styles.Icon} source={require('./assets/snowflake.png')} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Add transparency to make text readable
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  Top_class: {
    position: 'absolute',
    justifyContent: 'center',
    top: 50,
  },
  Bottom_class: {
    position: 'absolute',
    justifyContent: 'left',
    bottom: -80,
    fontSize: 20000, // Corrected the property name to fontSize
  },
  Icon: {
    width: 50,
    height: 100,
    resizeMode: 'contain',
  },
});


