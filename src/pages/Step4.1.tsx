import { StyleSheet, Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Step4StackParamList } from "../navigation/FlowNavigator/Step4/Step4Navigator";

export const Step41 = () => {
  const navigation = useNavigation<NavigationProp<Step4StackParamList>>();

  const goBack = () => {
    send("BACK");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Step 4.1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
