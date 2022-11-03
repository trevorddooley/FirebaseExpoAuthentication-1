import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import Button from '../components/Button';

const HomeScreen = () => {
  const navigation = useNavigation()
}
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  function Form({navigation}) {
    function goToForm() {
      navigation.navigate('Form');
    }
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome!</Text>
        <Button text="Submit an Animal" onPress={goToForm} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    header: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      margin: 10,
    },
  });
  
  export default HomeScreen;
  
