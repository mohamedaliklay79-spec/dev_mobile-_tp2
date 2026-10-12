
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ProductScreen from './src/screen/ProductScreen';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Text>awlid modification</Text>
      <Text>thani modification</Text>

      <ProductScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});