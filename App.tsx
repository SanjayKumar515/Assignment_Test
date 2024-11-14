import React, { FC } from 'react';
import { LogBox } from 'react-native';
import Route from './src/routes';
import {CommonLoaderProvider} from './src/components/CommonLoader/commonLoader';
import {CommonAlertProvider} from './src/components/CommonAlertModal/commonAlertModal';

const App: FC = () => {
  // Hiding warning logs - only used in debug mode
  LogBox.ignoreLogs( [ 'Warning: ...' ] );
  LogBox.ignoreAllLogs();

  return (
    <>
      <CommonLoaderProvider>
        <CommonAlertProvider>
          <Route />
        </CommonAlertProvider>
      </CommonLoaderProvider>
    </>
  );
};

export default App;