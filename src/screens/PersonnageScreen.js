import * as React from 'react';
import { View, Text, StyleSheet, Button  } from 'react-native';
import PersonnageComponent from '../../src/Components/PersonnageComponent';




const PersonnageScreen = () => {
    return (
        <View style={styles.container}>
            <PersonnageComponent />
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
});

export default PersonnageScreen;