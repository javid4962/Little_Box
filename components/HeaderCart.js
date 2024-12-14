import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HeaderCart = ({ cartVisible, toggleCart, cartItems, setCartItems }) => {
  // Function to remove an item from the cart
  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  // Calculate total price and item count
  var count = 0;
  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <View>
      {/* Cart Icon */}
      <TouchableOpacity onPress={toggleCart} style={styles.cartIcon}>
        <Ionicons name="cart-outline" size={24} color="black" />
        {totalItems > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{totalItems}</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Cart Menu */}
      {cartVisible && (
        <View style={styles.cartMenu}>
          {totalItems > 0 ? (
            <>
              <FlatList
                data={cartItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <View style={styles.cartItem}>
                    <View style={styles.itemDetails}>
                     
                      <Text style={styles.cartItemText}>{++count + ') '}
                      <Image source={item.image} style={styles.image} />
                        {item.name}  </Text>
                      <Text style={styles.cartItemPrice}>₹{item.price}</Text>
                    </View>
                    <TouchableOpacity onPress={() => removeItem(index)} style={styles.removeButton}>
                      <Ionicons name="trash-outline" size={20} color="red" />
                    </TouchableOpacity>
                  </View>
                )}
              />
              <View style={styles.cartSummary}>
                <Text style={styles.summaryText}>
                  Total Items: <Text style={styles.bold}>{totalItems}</Text>
                </Text>
                <Text style={styles.summaryText}>
                  Total Price: <Text style={styles.bold}>₹{totalPrice}</Text>
                </Text>
              </View>
            </>
          ) : (
            <Text style={styles.emptyCart}>Your cart is empty</Text>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cartIcon: {
    marginRight: 16,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 12,
    padding: 4,
    minWidth: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cartMenu: {
    position: 'absolute',
    right: 0,
    height:"100vh",
    top: 40,
    width: Dimensions.get('window').width * 0.6,
    maxHeight: Dimensions.get('window').height * 0.5,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 10,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: { width: '30%', height: 75, borderRadius: 8 },
  itemDetails: {
    flexDirection: 'column',
    flex: 1,
    marginRight: 8,
  },
  cartItemText: {
    fontSize: 16,
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: {
    alignSelf: 'center',
  },
  cartSummary: {
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 8,
  },
  summaryText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
  emptyCart: {
    textAlign: 'center',
    marginTop: 16,
    color: '#555',
    fontSize: 16,
  },
});

export default HeaderCart;
