import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const UserInput = ({name, placeholder, value, setValue}) => {
    
  return (
    <View>
      <Text>{name}</Text>
        <TextInput
          style={{
            borderBottomColor: "#8e93a1",
            borderBottomWidth: 0.5,
            height: 40,
            marginVertical: 10,
          }}
          placeholder={placeholder}
          value={value}
          onChangeText={(text) => setValue(text)}
          
        />
    </View>
  )
}

export default UserInput

const styles = StyleSheet.create({})