import React from 'react';
import { View, Text, FlatList } from 'react-native';
import axios, { isCancel, AxiosError } from 'axios';
import xtoken from '../../security/index';
import Cinema from '../../components/CinemaListItem';
import styles from './styles';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const CinemaList = ({ navigation: { navigate } }) => {
  const [cinemas, setCinemas] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

  const token = xtoken.token;

  let config = {
    headers: {
      'x-access-token': token,
    },
  };

  const sortCinemas = (cinemas) => {
    return cinemas.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  };

  const getCinemas = async () => {
    try {
      const response = await axios.get('http://api.kvikmyndir.is/theaters', config);
      sortCinemas(response.data);
      setCinemas(response.data);
    } catch (error) {
      setError(error);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    getCinemas().then(() => setRefreshing(false));
  };

  React.useEffect(() => {
    getCinemas();
  }, []);

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.error}>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cinemas}
        renderItem={({ item }) => (
          <View>
            <Pressable onPress={() => navigate('Cinema', item)}>
              <Cinema item={item} />
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

export default CinemaList;
