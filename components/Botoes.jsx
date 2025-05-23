import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/Colors';

const Botoes = ({ texto, urlProximo, urlAnterior, ativo, padding, submit }) => {
  const router = useRouter();

  const paddingStyle = padding
    ? { paddingHorizontal: padding }
    : { paddingHorizontal: 40 };

  return (
    <View style={styles.container}>
      {ativo && (
        <TouchableOpacity
          onPress={() => router.push(`/${urlAnterior}`)}
          style={styles.botaoAnterior}
        >
          <Text style={styles.textoBotaoAnterior}>Voltar</Text>
        </TouchableOpacity >
      )}
      <TouchableOpacity
        style={[styles.botaoProximo, paddingStyle]}
        onPress={submit}
      >
        <Text style={styles.textoBotaoProximo}>{texto}</Text>
      </TouchableOpacity >
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 80,
  },
  botaoProximo: {
    backgroundColor: Colors.verdeBase,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  textoBotaoProximo: {
    fontSize: 16,
    fontFamily: 'KodChasanMedium',
  },
  textoBotaoAnterior: {
    fontSize: 16,
    fontFamily: 'KodChasanMedium',
    color: Colors.brancoBase,
  },
});

export default Botoes;
