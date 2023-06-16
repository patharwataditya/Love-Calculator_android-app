import React, {useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';

function App() {
  const [maleName, setMaleName] = useState('');
  const [femaleName, setFemaleName] = useState('');
  const [result, setResult] = useState('');
  const [showResult, setShowResult] = useState(false);

  function cal_love() {
    const mname = maleName.toLowerCase();
    const fname = femaleName.toLowerCase();
    if (mname.length > 0 && fname.length > 0) {
      if (mname === 'aditya' && fname === 'gayatri') {
        setResult('98% Wow!! You are made for each other 💕');
      } else {
        var rn = Math.floor(Math.random() * 100) + 1;
        if (rn > 70) {
          setResult(rn + '% Wow!! You are made for each other 💕');
        } else {
          setResult(rn + '% Find a new partner 🙂');
        }
      }
      setShowResult(true);
    } else {
      setResult('Please Enter Both Names 😐');
      setShowResult(true);
    }
  }
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
