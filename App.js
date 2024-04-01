import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import { Linking, Alert, Text } from "react-native";
import { useState } from "react-native"

export default function App() {
  function goToSocialMedia(socialMedia) {
    Linking.openURL(url);
    // let url;
    // switch (socialMedia) {
    //   case "twitter":
    //     url = "https://www.linkedin.com/in/naomydarnold/";
    //     break;
    //   case "github":
    //     url = "https://www.linkedin.com/in/naomydarnold/";
    //     break;
    //   case "linkdn":
    //     url = "https://www.linkedin.com/in/naomydarnold/;
    //     break;
    // }

  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <ProfileCard
          // onPressSocialMediaIcon={goToSocialMedia}
          firstName={"Codiku"}
          lastName={"TheDev"}
          age={30}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}