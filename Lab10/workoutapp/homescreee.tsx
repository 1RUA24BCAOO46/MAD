import React, { useState } from "react"
import { View, Text, FlatList, StyleSheet, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from "react-native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../App"
import ExerciseCard from "../components/ExerciseCard"
import { exercises, Exercise } from "../data/exercises"

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

type Props = {
  navigation: HomeScreenNavigationProp
}

const CATEGORIES = ["All", "Chest", "Back", "Legs", "Core", "Arms", "Shoulders"]

const HomeScreen = ({ navigation }: Props) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredExercises = exercises.filter(exercise => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "All" || exercise.muscle === activeCategory
    return matchesSearch && matchesCategory
  })

  const renderItem = ({ item }: { item: Exercise }) => (
    <ExerciseCard
      exercise={item}
      onPress={() => navigation.navigate("Details", { exercise: item })}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Good Morning, Riyan</Text>
        <Text style={styles.subtext}>Ready for today's workout?</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput}
          placeholder="Search exercises..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Categories Horizontal Scroll */}
      <View style={styles.categoriesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesScroll}>
          {CATEGORIES.map((category) => (
            <TouchableOpacity 
              key={category} 
              onPress={() => setActiveCategory(category)}
              style={[
                styles.categoryBadge, 
                activeCategory === category && styles.categoryBadgeActive
              ]}
            >
              <Text 
                style={[
                  styles.categoryText, 
                  activeCategory === category && styles.categoryTextActive
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* List Section */}
      <View style={styles.listContainer}>
        <Text style={styles.sectionTitle}>
          {activeCategory === "All" ? "Popular Exercises" : `${activeCategory} Exercises`}
        </Text>
        <FlatList
          data={filteredExercises}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No exercises found.</Text>
          }
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
  },
  greeting: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  subtext: {
    color: '#A0A0A0',
    fontSize: 16,
    marginTop: 5,
    fontWeight: '500',
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#1E1E1E',
    color: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  categoriesScroll: {
    paddingHorizontal: 20,
    gap: 10,
  },
  categoryBadge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#1E1E1E',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  categoryBadgeActive: {
    backgroundColor: '#E2F163',
    borderColor: '#E2F163',
  },
  categoryText: {
    color: '#A0A0A0',
    fontWeight: '600',
    fontSize: 14,
  },
  categoryTextActive: {
    color: '#121212',
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 15,
  },
  flatListContent: {
    paddingBottom: 40,
  },
  emptyText: {
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  }
})

export default HomeScreen
