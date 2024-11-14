import { StyleSheet } from 'react-native';
import { Colors, Fonts, Typography } from '../../constant';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../constant/dimentions';

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        padding: hp( 1 ),
        marginBottom: hp( 2 ),
    },
    listView: {
        marginTop: hp( 2 )
    },
    itemListContainer: {
        width: wp( 90 ),
        backgroundColor: Colors.PRIMARY[ 300 ],
        padding: hp( 1 ),
        marginTop: hp( 2 ),
        alignSelf: 'center',
        borderRadius: wp( 4 ),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    itemListView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp( .5 )
    },
    itemKeyText: {
        ...Typography.H6Semibold13,
        color: Colors.PRIMARY[ 400 ]
    },
    itemValueText: {
        ...Typography.H6Semibold13,
        color: Colors.PRIMARY[ 100 ]
    }


} );

export default styles;
