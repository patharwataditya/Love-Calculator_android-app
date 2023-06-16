import React, {useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';

function cal_love() {}
function App() {
  return (
    <View>
      <Text style={{color: 'red', fontSize: 40}}>Love Calculator</Text>
      <TextInput placeholder="Enter Male Name" />
      <TextInput placeholder="Enter Female Name" />
      <Button title="CALCULATE" onPress={cal_love} />
    </View>
  );
}

export default App;
