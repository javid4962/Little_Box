import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderCart from './components/HeaderCart';
import HomeScreen from './screens/HomeScreen';
import GroceriesScreen from './screens/GroceriesScreen';
import VegScreen from './screens/VegScreen';
import NonVegScreen from './screens/NonVegScreen';
import OffersScreen from './screens/OffersScreen';
import ContactScreen from './screens/ContactScreen';
import Header from './components/Header';

const Stack = createStackNavigator();

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const toggleCart = () => {
    setCartVisible((prev) => !prev);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerRight: () => (
            <HeaderCart
            cartVisible={cartVisible}
            toggleCart={toggleCart}
            cartItems={cartItems}
            setCartItems={setCartItems}
            />
          ),
        }}
      >
        <Stack.Screen name='Header' component={Header}/>
        <Stack.Screen name="Home">
          {() => <HomeScreen addToCart={addToCart} />}
        </Stack.Screen>

        <Stack.Screen name="Groceries">
          {() => <GroceriesScreen addToCart={addToCart} />}
        </Stack.Screen>

        <Stack.Screen name="Veg">{() => <VegScreen addToCart={addToCart} />}</Stack.Screen>
        <Stack.Screen name="NonVeg">{() => <NonVegScreen addToCart={addToCart} />}</Stack.Screen>
        <Stack.Screen name="Offers" component={OffersScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}