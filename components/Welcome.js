import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
const Welcome = ({name,years}) =>(
    <>
      <Text style={styles.text}>Hello {name}</Text>
      {/* <Text>I am an experienced programmer with {years} years experience</Text> */}
    </>
  )

  const styles = StyleSheet.create({
    text:{
        color: '#fff',
      },
  })

export default Welcome;