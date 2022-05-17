import * as React from 'react';
import { View, Text, StyleSheet, Button  } from 'react-native';
import HomeComponent from '../../src/Components/HomeComponent';



const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <HomeComponent />
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

export default HomeScreen;
