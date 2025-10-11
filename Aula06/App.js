import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BasicExample from './screens/Exemplo';
import FormValidation from './screens/FormValidation'
import UserForm from './screens/UserForm'
import UserView from './screens/UserDetails'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Exemplo Básico" component={BasicExample} />
        <Stack.Screen name="Formulário" component={FormValidation} />
        <Stack.Screen name="Cadastro Completo" component={UserForm} />
        <Stack.Screen name="Detalhes do Usuário" component={UserView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
