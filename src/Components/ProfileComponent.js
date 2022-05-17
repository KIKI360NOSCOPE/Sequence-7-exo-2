import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ProfileComponent = () => {
  return (
    <View style={styles.container}>
      <Image style={{width: 300, height: 300}} source={require('../../src/Assets/Img/imgProfile.png')} />
      <Text style={styles.txt}>Ada LOVELACE</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "lightgray"
    },
    txt: {
        color: 'black',
        fontSize: 20,
        borderColor: 'black',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'justify'
    }
});

export default ProfileComponent