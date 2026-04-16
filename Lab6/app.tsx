import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function App() {
  const [search, setSearch] = useState("");

  const students = [
    { id: "1", name: "laxman bhatt", course: "BCA" },
    { id: "2", name: "lavanya", course: "BBA" },
    { id: "3", name: "athirath", course: "BCA" },
    { id: "4", name: "vineet", course: "BCom" },
    { id: "5", name: "Anurag", course: "BCA" },
    { id: "6", name: "virat", course: "BBA" },
  ];

  // 🔍 Filter logic
  const filteredStudents = students.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }: { item: { id: string; name: string; course: string } }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => Alert.alert("Student Selected", item.name)}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.course}>Course: {item.course}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student List</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.input}
        placeholder="Search student..."
        value={search}
        onChangeText={setSearch}
      />

      {/* FlatList */}
      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 15,
    marginTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  card: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  course: {
    color: "#fff",
    fontSize: 14,
  },
});
