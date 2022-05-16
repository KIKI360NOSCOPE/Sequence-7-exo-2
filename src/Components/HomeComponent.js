import { View, text, StyleSheet, Button, Image, Platform } from 'react-native';
import React from 'react';

const HomeComponent = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Bienvenue</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
        </View>
    );
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

export default HomeComponent;