import React, {useState} from 'react';
import {Text, View, TextInput, Button, ImageBackground} from 'react-native';

const backgroundImage = require('./img1.jpg');

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
    <View style={{flex: 1, backgroundColor: 'rgba(194, 255, 245, 0.5)'}}>
      <ImageBackground
        source={backgroundImage}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        imageStyle={{opacity: 100}}>
        <View
          style={{
            backgroundColor: 'rgba(194, 255, 245, 0.8)',
            padding: 15,
            borderRadius: 20,
          }}>
          <Text
            style={{
              color: '#0E86D4',
              fontSize: 40,
              margin: 20,
              textAlign: 'center',
            }}>
            Love Calculator
          </Text>
          <TextInput
            placeholder="Enter Male Name"
            placeholderTextColor="#055C9D"
            value={maleName}
            onChangeText={text => setMaleName(text)}
            style={{
              width: 300,
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              marginBottom: 20,
              paddingHorizontal: 10,
              color: 'black',
              borderBottomLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
          />
          <TextInput
            placeholder="Enter Female Name"
            placeholderTextColor="#055C9D"
            value={femaleName}
            onChangeText={text => setFemaleName(text)}
            style={{
              width: 300,
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              marginBottom: 20,
              paddingHorizontal: 10,
              color: 'black',
              borderBottomLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
          />
          <Button title="Calculate" onPress={cal_love} />
          <Text style={{marginTop: 10, color: 'black'}}>
            Male Name: {maleName}
          </Text>
          <Text style={{marginTop: 10, marginBottom: 20, color: 'black'}}>
            Female Name: {femaleName}
          </Text>

          {showResult && (
            <Text style={{marginBottom: 20, color: 'black'}}>
              Result: {result}
            </Text>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

export default App;
