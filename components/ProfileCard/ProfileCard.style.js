
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: "white",
    shadowColor: "000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadoRadius: 3.84,
    elevation: 5
  },

  avatar: {
    width: 120,
    height: 120,
    // borderRadius: 20,
   
    
   

  },
  name: {


    fontSize: 24,
    fontWeight: "bold",
    // marginBotton: 6,
  },
  texts: {
    flex: 1,
    paddingLeft: 15,
  },
  header: {
    flexDirection: "row",
  },
  social: {
    padding: 10,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  socialBtn: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: "#eee",
  },
});
