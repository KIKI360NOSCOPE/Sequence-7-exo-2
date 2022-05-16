import * as React from 'react';
import {View } from 'react-native';
import DrawerNavigation from '../sequence7/src/Navigation/DrawerNavigation';

const App = () => {
  return (
    <DrawerNavigation style={StyleSheet.container} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "lightblue",
    marginTop: 50
  },
});
export default App;