import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import menu from "./menu.json";

type MenuItem = {
  id: number;
  name: string;
  category: "Veg" | "Non-Veg" | "Beverage";
  price: number;
  rating: number;
};

const typedMenu: MenuItem[] = menu as MenuItem[];

export default function App() {
  const getCardColor = (category: MenuItem["category"]) => {
    switch (category) {
      case "Veg":
        return "#d4edda";
      case "Non-Veg":
        return "#f8d7da";
      case "Beverage":
        return "#d1ecf1";
      default:
        return "#ffffff";
    }
  };

  const renderItem = ({ item }: { item: MenuItem }) => (
    <View
      style={[
        styles.card,
        { backgroundColor: getCardColor(item.category) },
      ]}
    >
      <Text style={styles.foodName}>🍽 {item.name}</Text>
      <Text style={styles.text}>📂 Category: {item.category}</Text>
      <Text style={styles.text}>💰 Price: ₹{item.price}</Text>
      <Text style={styles.text}>⭐ Rating: {item.rating}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <FlatList<MenuItem>
        data={typedMenu}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text style={styles.header}>Restaurant Menu</Text>
        }
        ListFooterComponent={
          <Text style={styles.footer}>Thank You for Visiting</Text>
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={
          <Text style={styles.empty}>No Food Items Available</Text>
        }
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: StatusBar.currentHeight || 20,
  },

  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },

  footer: {
    fontSize: 18,
    marginTop: 16,
    textAlign: "center",
  },

  empty: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },

  card: {
    padding: 16,
    borderRadius: 12,
  },

  foodName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  text: {
    fontSize: 16,
    marginBottom: 4,
  },

  separator: {
    height: 12,
  },
});