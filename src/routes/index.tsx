import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CryptoList, CryptoDetail } from '../screens'
import NetInfo from '@react-native-community/netinfo';
import { CommonAlertModal } from '../components';


const Stack = createNativeStackNavigator();




const Route = () => {
    const { showAlert, hideAlert } = CommonAlertModal();
    
    // //! For Fetch Internet Connectvity
useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        showAlert(
          'Internet Issue',
          `It's look like you are offline! Please check device internet`,
          'Try Again',
          () => tryAgainWithInternet(),
          'internet',
        );
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //For Check Internet Connection And Try Again
  const tryAgainWithInternet = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        hideAlert();
      }
    });
  };

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="CryptoList" component={CryptoList} />
                <Stack.Screen name="CryptoDetail" component={CryptoDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Route;