import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import ProfileComponent from '../../src/Components/ProfileComponent';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <ProfileComponent />
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "lightgray"
    },
    img: {
        width: 200,
        height: 200
    }
});