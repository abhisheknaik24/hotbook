import Header from '@/components/header/Header';
import '@/styles/globals.css';
import { Nunito } from 'next/font/google';
import { store } from '../redux/store/store';
import { Provider } from 'react-redux';

const nunito = Nunito({ subsets: ['latin'] });

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <div className={nunito.className}>
        <Header />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
};

export default App;
