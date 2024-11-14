import { View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import styles from './cryptoDetail.styles';
import { Header, TextView } from '../../components';


const CryptoDetail = () => {
  const data: any = useRoute();

  const cryptoData = data?.params?.cryptoItem
  console.log( "data", cryptoData );


  const showCryptoSymbol = ( symbol: string | undefined ) => {
    let result = '';

    switch ( symbol?.toUpperCase() ) {
      case 'USDT':
        result = '$';
        break;
      case 'BTC':
        result = '₿';
        break;
      case 'ETH':
        result = 'Ξ';
        break;
      case 'LTC':
        result = 'Ł';
        break;
      case 'JASMY':
        result = 'JASMY';
        break;
      case 'LBTC':
        result = '₿ (LBTC)';
        break;
      default:
        result = '';
        break;
    }
    return result;
  };

  const currencySymbol = showCryptoSymbol( cryptoData?.symbol );
  return (
    <SafeAreaView style={ styles.container }>
      <View>
        <View>
          <Header
            headerTitle='Crypto Detail'
            backButtonEnable={ true }

          />
        </View>
        <View style={ styles.currencyDetail }>
          <TextView style={styles.currentPriceText}> { currencySymbol } { cryptoData?.current_price }</TextView>
          <Image source={ { uri: cryptoData?.image } } style={ styles.headerImage } />

        </View>
        <View style={ styles.itemListContainer }>
          <View style={ styles.itemListView }>
            <TextView style={styles.itemKeyText}>Current Price</TextView>
            <TextView style={styles.itemValueText}> { currencySymbol } { cryptoData?.current_price }</TextView>
          </View>
          <View style={ styles.itemListView }>
            <TextView style={styles.itemKeyText}>Market Cap</TextView>
            <TextView style={styles.itemValueText}>{ cryptoData?.market_cap }</TextView>
          </View>

          <View style={ styles.itemListView }>
            <TextView style={styles.itemKeyText}>24h Price Change</TextView>
            <TextView style={styles.itemValueText}>{ cryptoData?.market_cap_change_24h }</TextView>
          </View>

          <View style={ styles.itemListView }>
            <TextView style={styles.itemKeyText}>All-time High</TextView>
            <TextView style={styles.itemValueText}>{ cryptoData?.high_24h }</TextView>
          </View>
          <View style={ styles.itemListView }>
            <TextView style={styles.itemKeyText}>Description</TextView>
            <TextView style={styles.itemValueText}>N/A</TextView>
          </View>
        </View>


      </View>
    </SafeAreaView>
  )
}

export default CryptoDetail
