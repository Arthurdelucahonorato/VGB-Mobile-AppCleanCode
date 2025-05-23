import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const JanelaAtual = ({ titulo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titulo}>{titulo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '30%',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    color: Colors.brancoBase,
    fontFamily: 'KodChasanBold',
    fontSize: 20,
  },
});

export default JanelaAtual;
