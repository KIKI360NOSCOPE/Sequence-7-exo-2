import * as React from 'react';
import { View, Text, StyleSheet, Button  } from 'react-native';
import HomeComponent from '../../src/Components/HomeComponent';



const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HomeComponent navigation={navigation} />
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "lightblue"
    },
});

export default HomeScreen;
