import * as React from 'react';
import { View, Text, StyleSheet, Button  } from 'react-native';
import BiographieComponent from '../../src/Components/BiographieComponent';




const BiographieScreen = () => {
    return (
        <View style={styles.container}>
            <BiographieComponent />
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

export default BiographieScreen;