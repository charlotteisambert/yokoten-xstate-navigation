import { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { StateMachineContext } from "../stateMachine/StateMachineProvider";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Step3StackParamList } from "../navigation/FlowNavigator/Step3/Step3Navigator";

export const Step32 = () => {
  const { value, send } = useContext(StateMachineContext);
  const navigation = useNavigation<NavigationProp<Step3StackParamList>>();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize:30}}>Step 3.2</Text>
      <Text style={{ fontSize:30}}>State machine state: {value}</Text>
      <Button title="next" onPress={()=>send("NEXT")} />
      <Button title="back" onPress={goBack} />
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
