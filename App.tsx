import { StatusBar } from 'expo-status-bar';
import AuthProvider from './src/contexts/AuthContext';
import { ThemeProvider } from '@shopify/restyle';
import Routes from './src/routes';
import theme from './src/theme';

export default function App() {
  
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor={theme.colors.blue_10}/>
        <Routes/>
      </ThemeProvider>
    </AuthProvider>
  );
}
