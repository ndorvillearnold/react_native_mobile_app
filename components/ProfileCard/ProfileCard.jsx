import { s } from "./ProfileCard.style";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";

export function ProfileCard({
	firstName,
	lastName,
	age,
	onPresssSocialMediaIcon,
}) {
	const handleEmailPress = () => {
		const email = "ndorvillearnold@gmail.com";
		const mailtoUrl = `mailto:${email}`;
		Linking.openURL(mailtoUrl);
	};
	return (
		<View style={s.container}>
			<View style={s.header}>
				<View>
					<Image
						style={s.avatar}
						source={require("../../assets//smiling_avatar.jpg")}
					/>

					{/* 
				<Image style={s.avatar} source={{ uri: "https://i.pravatar.cc/300" }} /> */}

					{/* source = {{ "assets/smiling_avatar.jpg"}} */}
				</View>
				<View style={s.texts}>
					<Text style={s.name}>
						{firstName}
						{lastName}
						{age}
					</Text>

					<Text>Hi I am Software Developer, let's get in touch!.</Text>
				</View>
			</View>

			<View style={s.social}>
				<TouchableOpacity
					onPress={() => onPresssSocialMediaIcon("Twitter")}
					style={s.socialBtn}
				>
					<FontAwesome name="twitter" size={24} color="#1DA1F2" />
				</TouchableOpacity>

				{/* You can just add twitter we had to add a function to the Onpress so it can keep switching and not automaticall run with first option */}
				<TouchableOpacity
					onPress={() => onPresssSocialMediaIcon("LinkedIn")}
					style={s.socialBtn}
				>
					<FontAwesome name="linkedin-square" size={24} color="#0A66C2" />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => onPresssSocialMediaIcon("Github")}
					style={s.socialBtn}
				>
					<FontAwesome name="github" size={24} color="#333" />
				</TouchableOpacity>
				<TouchableOpacity onPress={handleEmailPress} style={s.socialBtn}>
					<FontAwesome name="envelope" size={24} color="#FFA500" />
				</TouchableOpacity>
			</View>
		</View>
	);
}
