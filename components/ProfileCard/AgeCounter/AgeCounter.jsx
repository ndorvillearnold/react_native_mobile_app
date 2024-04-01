import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function App() {
    const [movie, setMovie] = useState("Star wars");
  
    function updateMovie() {
      setMovie("Titanic");
    }
  
    console.log(movie);
  
    return (
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <TouchableOpacity onPress={updateMovie}>
            <Text style={{ fontSize: 40 }}>{movie}</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }