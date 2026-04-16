import React from "react"
import { ScrollView, Text, View, StyleSheet, SafeAreaView, Dimensions, ImageBackground } from "react-native"
import { RouteProp } from "@react-navigation/native"
import { RootStackParamList } from "../App"
import { Exercise } from "../data/exercises"

const { height } = Dimensions.get('window')

type ExerciseDetailScreenRouteProp = RouteProp<RootStackParamList, 'Details'>

type Props = {
  route: ExerciseDetailScreenRouteProp
}

const ExerciseDetailScreen = ({ route }: Props) => {

  const exercise: Exercise = route.params.exercise

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <ImageBackground 
          source={{ uri: exercise.image }} 
          style={styles.heroContainer}
          imageStyle={styles.heroImage}
        >
          {/* Overlay to ensure text readability if overlaid */}
          <View style={styles.heroOverlay} />
        </ImageBackground>

        {/* Content Section */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{exercise.name}</Text>
          
          <View style={styles.badgeContainer}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>TARGET: {exercise.muscle}</Text>
            </View>
            <View style={[styles.badge, styles.badgeAccent]}>
              <Text style={[styles.badgeText, { color: '#121212' }]}>{exercise.steps.length} STEPS</Text>
            </View>
          </View>

          <View style={styles.separator} />

          <Text style={styles.sectionTitle}>Instructions</Text>

          {/* Steps List */}
          <View style={styles.stepsContainer}>
            {exercise.steps.map((step, index) => (
              <View key={index} style={styles.stepRow}>
                <View style={styles.stepNumberContainer}>
                  <Text style={styles.stepNumberText}>{index + 1}</Text>
                </View>
                <Text style={styles.stepText}>{step}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  heroContainer: {
    height: height * 0.40,
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    backgroundColor: '#1E1E1E',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
  },
  heroImage: {
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  contentContainer: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  badgeContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  badge: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  badgeAccent: {
    backgroundColor: '#E2F163',
  },
  badgeText: {
    color: '#A0A0A0',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#2A2A2A',
    marginVertical: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  stepsContainer: {
    marginTop: 8,
  },
  stepRow: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  stepNumberContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#1E1E1E',
    borderWidth: 1,
    borderColor: '#E2F163',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    marginTop: 2,
  },
  stepNumberText: {
    color: '#E2F163',
    fontWeight: '700',
    fontSize: 14,
  },
  stepText: {
    flex: 1,
    fontSize: 16,
    color: '#D0D0D0',
    lineHeight: 24,
    fontWeight: '500',
  }
})

export default ExerciseDetailScreen
