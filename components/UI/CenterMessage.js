import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CenterMessage = ({msg}) => {
  return (
    <View style={styles.container}>
      <Text>{msg}</Text>
    </View>
  );
};

export default CenterMessage;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
