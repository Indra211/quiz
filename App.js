import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import Home from './pages/home'
import Quiz from './pages/quiz';
import Result from './pages/result';
import MyStack from './navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#556',
    paddingTop:40,
    paddingHorizontal:10
  },
});
