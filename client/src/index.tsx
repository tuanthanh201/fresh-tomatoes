import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import { store } from './store';
import { Provider } from 'react-redux';
import Toast from './components/toast/Toast';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<Provider store={store}>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<App />
			<Toast />
		</ChakraProvider>
	</Provider>
);
