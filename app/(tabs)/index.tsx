import { StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';

export default function TodayScreen() {
  const router = useRouter();
  const [todayStats, setTodayStats] = useState({
    revenue: 0,
    profit: 0,
    salesCount: 0
  });

  // Get today's date
  const today = new Date().toLocaleDateString('en-GB', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.businessName}>My Business</ThemedText>
        <ThemedText style={styles.date}>{today}</ThemedText>
      </ThemedView>

      {/* Stats Cards */}
      <ThemedView style={styles.statsContainer}>
        <ThemedView style={[styles.statCard, styles.revenueCard]}>
          <ThemedText style={styles.statLabel}>Revenue Today</ThemedText>
          <ThemedText type="title" style={styles.statValue}>${todayStats.revenue.toFixed(2)}</ThemedText>
        </ThemedView>

        <ThemedView style={[styles.statCard, styles.profitCard]}>
          <ThemedText style={styles.statLabel}>Profit Today</ThemedText>
          <ThemedText type="title" style={styles.statValue}>${todayStats.profit.toFixed(2)}</ThemedText>
        </ThemedView>

        <ThemedView style={[styles.statCard, styles.salesCard]}>
          <ThemedText style={styles.statLabel}>Sales Count</ThemedText>
          <ThemedText type="title" style={styles.statValue}>{todayStats.salesCount}</ThemedText>
        </ThemedView>
      </ThemedView>

      {/* Action Buttons */}
      <ThemedView style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.primaryButton]}
          onPress={() => router.push('/sales')}
        >
          <ThemedText style={styles.buttonText}>➕ Record Sale</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.secondaryButton]}
          onPress={() => alert('WhatsApp share coming soon!')}
        >
          <ThemedText style={styles.buttonText}>📤 Send Summary</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Recent Sales */}
      <ThemedView style={styles.recentSection}>
        <ThemedText type="subtitle">Recent Sales</ThemedText>
        <ThemedView style={styles.emptyState}>
          <ThemedText style={styles.emptyText}>No sales yet today</ThemedText>
          <ThemedText style={styles.emptySubtext}>Tap "Record Sale" to get started</ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginTop: 10,
    marginBottom: 20,
  },
  businessName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    opacity: 0.7,
  },
  statsContainer: {
    gap: 15,
    marginBottom: 20,
  },
  statCard: {
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  revenueCard: {
    backgroundColor: '#4CAF50',
  },
  profitCard: {
    backgroundColor: '#2196F3',
  },
  salesCard: {
    backgroundColor: '#FF9800',
  },
  statLabel: {
    fontSize: 14,
    color: 'white',
    opacity: 0.9,
    marginBottom: 5,
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    gap: 10,
    marginBottom: 30,
  },
  button: {
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#4CAF50',
  },
  secondaryButton: {
    backgroundColor: '#25D366',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  recentSection: {
    marginBottom: 20,
  },
  emptyState: {
    padding: 40,
    alignItems: 'center',
    marginTop: 20,
  },
  emptyText: {
    fontSize: 16,
    opacity: 0.6,
  },
  emptySubtext: {
    fontSize: 14,
    opacity: 0.4,
    marginTop: 5,
  },
});
