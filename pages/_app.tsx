import { AppProps } from 'next/app';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import Header from '../components/Header';

import { RelayEnvironmentProvider } from 'relay-hooks';

import environment from '../graphql';

const App = ({ Component, pageProps }: AppProps) => (
  <RelayEnvironmentProvider environment={environment}>
    <div className='App'>
      <Header />
      <div className='auth-wrapper'>
        <div className='auth-inner'>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
    <ToastContainer />
  </RelayEnvironmentProvider>
);

export default App;
