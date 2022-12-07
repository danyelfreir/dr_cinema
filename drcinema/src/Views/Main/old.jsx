// import React, { useEffect, useState } from 'react';
// import { View, Text, Pressable } from 'react-native';
// import styles from './styles';
// import UpcomingMoviesCarousel from '../../components/UpcomingMoviesCarousel';
// import { token } from '../../security/token';
// import HomeButton from '../../components/HomeButton';

// const CINEMAS = true;
// const UPCOMING = false;

// const Main = () => {
//   const [visibleContent, setvisibleContent] = useState(CINEMAS);

//   const config = {
//     headers: {
//       'x-access-token': token,
//     },
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.content}>
//         {visibleContent ? (
//           <Text>CinemaList Here</Text>
//         ) : (
//           <UpcomingMoviesCarousel data={upComingMovies} />
//         )}
//       </View>
//       {/* <CinemaList /> */}
//       <View style={styles.buttonContainer}>
//         <HomeButton
//           title="Kvikmyndahús"
//           onPress={() => setvisibleContent(CINEMAS)}
//         />
//         <HomeButton
//           title="Væntanlegt í bíó"
//           onPress={() => setvisibleContent(UPCOMING)}
//         />
//       </View>
//     </View>
//   );
// };

// export default Main;
