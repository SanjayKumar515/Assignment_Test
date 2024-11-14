import { FlatList, SafeAreaView, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CommonAlertModal, CommonLoader, Header, TextView } from '../../components';
import { UserService } from '../../services';
import { HttpStatusCode } from 'axios';
import styles from './cryptoList.styles';
import { HomeStackProps } from '../../@types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type CryptoListScreenNavigationType = NativeStackNavigationProp<
  HomeStackProps,
  "CryptoList"
>;

const CryptoList = () => {
  const navigation = useNavigation<CryptoListScreenNavigationType>();
  const { showLoader, hideLoader } = CommonLoader();
  const { showAlert, hideAlert } = CommonAlertModal();
  const [ cryptoData, setCryptoData ] = useState<any>();
  const [ refreshing, setRefreshing ] = useState<boolean>( false );

  useEffect( () => {
    getCryptoList();
  }, [] );

  const getCryptoList = async ( isRefreshing = false ) => {
    try {
      if ( !isRefreshing ) showLoader();
      await UserService.geCryptoData().then( ( response ) => {
        if ( !isRefreshing ) hideLoader();
        if ( response && response?.status === HttpStatusCode.Ok ) {
          setCryptoData( response?.data );
        } else {
          showAlert(
            'Something went wrong.',
            'Please try again later.',
            'Continue',
            () => hideAlert(),
          );
        }
        if ( isRefreshing ) setRefreshing( false );
      } );
    } catch ( error ) {
      if ( !isRefreshing ) hideLoader();
      setRefreshing( false );
      showAlert(
        'Something went wrong.',
        'Please try again later.',
        'Continue',
        () => hideAlert(),
      );
      console.log( 'Error in getCryptoList', error );
    }
  };

  const onRefresh = () => {
    setRefreshing( true );
    getCryptoList( true );
  };


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


  const renderCryptoItem = ( { item }: any ) => {


    const currencySymbol = showCryptoSymbol( item?.symbol );

    return (

      <TouchableOpacity activeOpacity={ 0.5 } style={ styles.itemListContainer } onPress={ () => navigation.navigate( 'CryptoDetail', { cryptoItem: item } ) }>
        <View style={ styles.itemListView }>
          <TextView style={ styles.itemKeyText }>Name</TextView>
          <TextView style={ styles.itemValueText }>{ item?.name }</TextView>
        </View>
        <View style={ styles.itemListView }>
          <TextView style={ styles.itemKeyText }>Symbol</TextView>
          <TextView style={ styles.itemValueText }>{ item?.symbol }</TextView>
        </View>
        <View style={ styles.itemListView }>
          <TextView style={ styles.itemKeyText }>Current Price</TextView>
          <TextView style={ styles.itemValueText }>{ currencySymbol } { item?.current_price }</TextView>
        </View>
        <View style={ styles.itemListView }>
          <TextView style={ styles.itemKeyText }>Market Cap</TextView>
          <TextView style={ styles.itemValueText }>{ item?.market_cap }</TextView>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={ styles.container }>
      <View>
        <Header headerTitle='Crypto List' />
        <View style={ styles.listView }>
          <FlatList
           showsVerticalScrollIndicator={false}
            data={ cryptoData }
            renderItem={ renderCryptoItem }
            keyExtractor={ ( item: any ) => item?.total_volume.toString() }
            refreshing={ refreshing }
            onRefresh={ onRefresh }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CryptoList;
