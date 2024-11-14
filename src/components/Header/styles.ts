import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../../constant/dimentions";

import { Typography } from "../../constant";

const styles = StyleSheet.create( {
  headerContainer: {
    marginTop: hp( 1 ),
    padding:hp(2)
  },
  headerBackImage:{
    width:24,
    height:24
  },
  headerTitle: {
    ...Typography.H3Semibold24,
    marginTop: hp( 3 )

  },
  headerImage:{
     height:40,
     width:40,
     marginTop: hp( 3 )
  }
} );

export default styles;
