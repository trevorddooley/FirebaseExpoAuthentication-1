import React, {useState} from 'react';
//import * as React from 'react';
import {View, Alert} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { StyleSheet, Text, SafeAreaView, Dimensions  } from 'react-native';
import MapView from 'react-native-maps';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

function MemberSign({navigation}) {
  const [userName, setAnimalSpecies] = useState(null);
  const [userSurName, setAnimalAge] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurName || !userAge || !userMail) {
      Alert.alert('Tiger Fitness Salonu', 'Bilgiler boş bırakılamaz!');
      return;
    }

    const animal = {
      animalSpecies,
      animalAge,
      userAge,
      userMail,
    };
    navigation.navigate('MemberResultScreen', {animal});
  }

  return (
<SafeAreaView style={{ flex: 1 }}>
      {/* <Text>Member Sign</Text> */}
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
      
      <Input
        label="Species"
        placeholder="Insert species..."
        onChangeText={setAnimalSpecies}
      />
      <Input
        label="Age"
        placeholder="Approximate age..."
        onChangeText={setAnimalAge}
      />
      <Input
        label="Date and Time"
        placeholder="Select the date and time..."
        onChangeText={setUserAge}
      />
      <Input
        label="Deceases?"
        placeholder="Yes or No..."
        onChangeText={setUserMail}
      />
      <Button text="Complete Submission" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

export default MemberSign;
