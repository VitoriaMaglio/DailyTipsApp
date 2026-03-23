import React, { useState, useEffect } from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { Image } from 'react-native';
export default function App() {

  const tips = [
    "Drink more water",
    "Take a short walk",
    "Organize your tasks",
    "Study for 30 minutes",
    "Avoid distractions",
    "Sleep well tonight",
    "Try something new today",
    "Write down three things you're grateful for",
    "Stretch for 5 minutes",
    "Read a few pages of a book",
    "Plan your meals for the day",
    "Take a moment to breathe deeply",
    "Review your goals for the week",
    "Listen to a piece of music you enjoy"
  ];

  const getRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    return tips[randomIndex];
  };

  const [tip, setTip] = useState(getRandomTip());

  const updateTip = () => {
    setTip(getRandomTip());
  };

return (
  <View style={styles.container}>
    
    <Text style={styles.title}>Daily Tip</Text>

    
    <View style={styles.middle}>
      <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Image 
      source={require('./assets/lamp.png')}
      style={styles.lamp}
    />
    
        <Text style={styles.tipText}>{tip}</Text>
        </View>
      </View>
    </View>

  
    <TouchableOpacity style={styles.button} onPress={updateTip}>
      <Text style={styles.buttonText}>Update Tip</Text>
    </TouchableOpacity>

  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9f4fc',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    
  },

  title: {
    marginTop: 40,
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },

  middle: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
},
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
},
lamp: {
  width: 100,
  height: 100,
  position: 'absolute',
  top: -50, 
  zIndex: 1,
},

  card: {
    backgroundColor: '#ffffff',
    paddingTop: 60,
    padding: 25,
    borderRadius: 12,
    elevation: 4,
    marginBottom: 20,
    width: '100%',
  },

  tipText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#444',
  },

  button: {
    backgroundColor: '#006fee',
    paddingVertical: 32,
    paddingHorizontal: 70,
    borderRadius: 58,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
//Projeto
//rodar-> android studio device manager, ligar; cmd-> npx expo start , a, wait -> build and run in android studio, wait -> app running in emulator, click update tip to see new tip. 