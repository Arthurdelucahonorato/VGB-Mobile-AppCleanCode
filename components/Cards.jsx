import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import Colors from '../constants/Colors';
import { buscaRefeicoes } from '../database/buscaRefeicoes';
import { dropRefeicoes } from '../database/dropRefeicoes';
import { updateRefeicoes } from '../database/updateRefeicoes';


const Cards = () => {
  const router = useRouter();
  const [refeicoes, setRefeicoes] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await buscaRefeicoes();
      setRefeicoes(data);
    } catch (error) {
      console.error('Erro ao carregar dados das refeicoes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const endWeek = (refeicoes) => {
    if (refeicoes && refeicoes.every((item) => item.status === '1')) {
      console.log(true);
      dropRefeicoes();
      router.push('GuiaAlimentar/GerarGuia');
    } else {
      console.log(false);
    }
  };

  const toggleCheckbox = async (id, status) => {
    try {
      await updateRefeicoes(id, status);
      await fetchData();
      endWeek(refeicoes);
    } catch (error) {
      console.error('Erro ao atualizar e buscar dados:', error);
    }
  };

  const renderItem = ({ item, id }) => {
    return (
      <View style={styles.cardContainer}>
        <ScrollView>
          <Text style={item.status === '1' ? styles.pratoM : styles.prato}>
            {item.texto}
          </Text>
        </ScrollView>
        <View style={styles.checkboxArea}>
          <Checkbox
            status={item.status === '1' ? 'checked' : 'unchecked'}
            onPress={() => toggleCheckbox(item.ID, item.status)}
            uncheckedColor={Colors.brancoBase}
            color={Colors.verdeBase}
          />
        </View>
      </View>
    );
  };

  return (

    <View style={styles.container}>
      <Carousel
        layout="default"
        data={refeicoes}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width * 0.8}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: Colors.brancoBase,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    top: '10%',
    padding: 20,
    maxHeight:'85%' ,
  },

  prato: {
    color: Colors.brancoBase,
    fontSize: 16,
    fontFamily: 'KodChasanMedium',
    margin: 10,
  },
  pratoM: {
    color: Colors.verdeBase,
    fontSize: 16,
    fontFamily: 'KodChasanMedium',
    margin: 10,
    textDecorationLine: 'line-through',
  },
  checkboxArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cards;
