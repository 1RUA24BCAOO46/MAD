import { useState } from "react";
import { StatusBar, View, SafeAreaView, StyleSheet, TouchableOpacity, Text } from "react-native";
import LoginForm from "./components/LoginForm";

export default function App() {
  const [isStatusBarVisible, setIsStatusBarVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#F3F4F6"
        barStyle="dark-content"
        hidden={isStatusBarVisible}
      />

      <View style={styles.header}>
        <TouchableOpacity 
           style={styles.toggleButton}
           onPress={() => setIsStatusBarVisible(!isStatusBarVisible)}
        >
          <Text style={styles.toggleText}>
             {isStatusBarVisible ? 'Show Status Bar' : 'Hide Status Bar'}
          </Text>
        </TouchableOpacity>
      </View>

      <LoginForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: '#F3F4F6'
  },
  header: {
     alignItems: 'flex-end',
     paddingHorizontal: 20,
     marginTop: 10,
  },
  toggleButton: {
     paddingVertical: 6,
     paddingHorizontal: 12,
     backgroundColor: '#E5E7EB',
     borderRadius: 16,
  },
  toggleText: {
     fontSize: 12,
     color: '#4B5563',
     fontWeight: '500'
  }
});