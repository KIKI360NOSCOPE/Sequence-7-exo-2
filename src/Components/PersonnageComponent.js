import { View, Text, StyleSheet, Button, Image, Platform } from 'react-native';
import React from 'react';

const PersonnageComponent = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Ada Lovelace, de son nom complet Augusta Ada King, comtesse de Lovelace, née Ada Byron le 10 décembre 1815 à Londres et morte le 27 novembre 1852 à Marylebone dans la même ville, est une pionnière de la science informatique.</Text>
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

export default PersonnageComponent;