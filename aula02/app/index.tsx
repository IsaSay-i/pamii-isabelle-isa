import { Text, View } from "react-native";
import BotaoProps from '../components/botao';

export default function Index() {
  const handlePress = () => {
    console.log('Botão pressionado');
  };

  const teste = () => {
    console.log('Segundo teste');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });



return (
  <View
    style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    }}
  >
    <Text>Edit app/index.tsx to edit this screen.</Text>
  </View>
  );
}
