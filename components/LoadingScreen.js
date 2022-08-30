import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={100} color="#136c8e" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: 280
  }
});

export default LoadingScreen