import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const commonStyles = StyleSheet.create({
  alignItemCenter: {
    alignItems: "center",
  },
  alignItemLeft: {
    alignItems: "flex-start",
  },
  alignItemRight: {
    alignItems: "flex-end",
  },
  flexDirectionRow: {
    flexDirection: "row",
  },
  flexDirectionColumn: {
    flexDirection: "column",
  },
  headerText: {
    fontSize: 16,
    fontFamily: "Poppins-ExtraLight",
  },
  headerBoldText: {
    fontSize: 16,
    fontWeight: "condensedBold",
    fontFamily: "Poppins-ExtraLight",
  },
  descriptionText: {
    fontSize: 14,
    color: "#555",
    fontFamily: "Poppins-Regular",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    fontFamily: "Poppins-Regular",
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  searchBar: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    fontFamily: "Poppins-Regular",
  },
  dropdown: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    fontFamily: "Poppins-Regular",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  rounded: {
    borderRadius: 15,
  },
  fontPoppins: {
    fontFamily: "Poppins-Regular",
  },
});

export default commonStyles;
