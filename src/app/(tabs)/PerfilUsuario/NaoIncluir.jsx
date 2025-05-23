import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
import FormularioNaoIncluir from '../../../../components/Formularios/FormularioNaoIncluir';
import Header from '../../../../components/Header';
import JanelaAtual from '../../../../components/JanelaAtual';
import Colors from '../../../../constants/Colors';

const NaoIncluir = () => {
  return (
    <LinearGradient
      colors={[Colors.grdienteInicio, Colors.gradienteFim]}
      style={styles.containerGlobal}
    >
      <View style={styles.container}>
        <Header ativo={true} />
        <JanelaAtual titulo="Não Incluir" />
        <FormularioNaoIncluir />
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  containerGlobal: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
  },
});

export default NaoIncluir;
