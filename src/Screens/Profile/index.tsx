import {StyleSheet, Text, View} from 'react-native';
import {black, white} from '../../Theme/color';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={{color: white}}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
