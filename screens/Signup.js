import React, {useState} from "react";
import { Text, View, TextInput } from "react-native";

import UserInput from "../components/auth/UserInput";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text
        style={{
          color: "#333",
          fontSize: 25,
          fontWeight: "800",
          textAlign: "center",
          marginBottom: 30,
        }}
      >
        Signup
      </Text>
      <View style={{ marginHorizontal: 24 }}>
        <UserInput name="NAME" placeholder="Enter Name" value={name} setValue={setName}/>
        <UserInput name="EMAIL" placeholder="Enter Email" value={email} setValue={setEmail}/>
        <UserInput name="PASSWORD" placeholder="Enter Password" value={password} setValue={setPassword}/>
        {/* <UserInput name="CONFIRM PASSWORD"/> */}

        <Text>{JSON.stringify({name, email, password}, null, 4)}</Text>
      </View>
    </View>
  );
};

export default Signup;
