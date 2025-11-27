import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CompromissosUsuario from './screens/CompromissosUsuario';
import CompromissosEquipe from './screens/CompromissosEquipe';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Início' }}
        />
        <Stack.Screen 
          name="CompromissosUsuario" 
          component={CompromissosUsuario} 
          options={{ title: 'Usuário' }}
        />
        <Stack.Screen 
          name="CompromissosEquipe" 
          component={CompromissosEquipe} 
          options={{ title: 'Equipe' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
