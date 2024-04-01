import { s } from "./ProfileCard.style";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function App() {
	return (
		<View style={s.container}>
			<View style={s.header}>
				<View>
					<Image
						style={s.avatar}
						// source = {{url: "assets/smiling_avatar.jpg"}}
						source={{ uri: "https://i.pravatar.cc/300" }}
					/>
				</View>
				<View style={s.texts}>
					<TouchableOpacity onPress={onPressTitle_}>
						<Text style={s.name}>
							{firstName}
							{lastName}
							{age}
						</Text>
					</TouchableOpacity>
					<Text>
						Hi I am React native developer, let's get in touch, and soon.
					</Text>
					{isOpenToWork ? (
						<Text>I am available to work to work at this time! </Text>
					) : (
						<Text>"I am not avalable to work right now"</Text>
					)}
				</View>
			</View>

			<View style={s.social}>
				<TouchableOpacity style={s.socialBtn}>
					<FontAwesome name="twitter" size={24} color="#1DA1F2" />
				</TouchableOpacity>
				<TouchableOpacity style={s.socialBtn}>
					<FontAwesome name="linkedin-square" size={24} color="#0A66C2" />
				</TouchableOpacity>
				<TouchableOpacity style={s.socialBtn}>
					<FontAwesome name="github" size={24} color="#333" />
				</TouchableOpacity>
			</View>
		</View>
	);
}
