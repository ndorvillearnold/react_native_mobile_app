import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import { Linking, Text } from "react-native";
import { useState } from "react-native"

export default function App() {

  function goToSocialMedia(socialMedia) {

    let url;
    let email;
    switch (socialMedia) {
      case "LinkedIn":
        url = "https://www.linkedin.com/in/naomydarnold/";
        break
      case "Github":
        url = "https://github.com/ndorvillearnold";
        break
      case "Twitter":
        url = "https://twitter.com/Naomy19601982/"
        break
      case "Email":
        const email = 'mailto:ndorvillearnold@gmail.com';
        Linking.openURL(email);
        return; // Stop further execution

    }
    Linking.openURL(url);

  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        {/* <Image/> */}

        <ProfileCard
          onPresssSocialMediaIcon={goToSocialMedia}
          firstName={"Naomy"}
          lastName={"Arnold"}


        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

//below is without case statement
// function goToTwitter() {
//   Linking.openURL("https://twitter.com/")

// }

// function goToLinkedIn() {
//   Linking.openURL("https://www.linkedin.com/in/naomydarnold/")

// }
// function goToGithub() {
//   Linking.openURL("https://github.com/ndorvillearnold");

// }
