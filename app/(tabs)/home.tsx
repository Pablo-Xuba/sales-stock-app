import { StyleSheet, ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function HomeScreen() {
  const router = useRouter();
  const [businessName] = useState('My Business');

  // Mock data - will come from Firebase later
  const todayStats = {
    revenue: 0,
    profit: 0,
    sales: 0
  };

  const weekStats = {
    revenue: 0,
    profit: 0,
    sales: 0
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome back! 👋</Text>
            <Text style={styles.businessName}>{businessName}</Text>
          </View>
          <TouchableOpacity style={styles.settingsButton}>
            <Ionicons name="settings-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Quick Stats Overview */}
        <View style={styles.statsOverview}>
          <Text style={styles.sectionTitle}>Today's Performance</Text>
          <View style={styles.statsGrid}>
            <View style={[styles.statCard, styles.revenueCard]}>
              <Ionicons name="cash-outline" size={28} color="white" />
              <Text style={styles.statValue}>${todayStats.revenue.toFixed(2)}</Text>
              <Text style={styles.statLabel}>Revenue</Text>
            </View>
            <View style={[styles.statCard, styles.profitCard]}>
              <Ionicons name="trending-up-outline" size={28} color="white" />
              <Text style={styles.statValue}>${todayStats.profit.toFixed(2)}</Text>
              <Text style={styles.statLabel}>Profit</Text>
            </View>
            <View style={[styles.statCard, styles.salesCard]}>
              <Ionicons name="cart-outline" size={28} color="white" />
              <Text style={styles.statValue}>{todayStats.sales}</Text>
              <Text style={styles.statLabel}>Sales</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionGrid}>
            <TouchableOpacity 
              style={styles.actionCard}
              onPress={() => router.push('/(tabs)/sales')}
            >
              <View style={[styles.actionIcon, { backgroundColor: '#4CAF50' }]}>
                <Ionicons name="add-circle" size={32} color="white" />
              </View>
              <Text style={styles.actionTitle}>Record Sale</Text>
              <Text style={styles.actionSubtitle}>Quick sale entry</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.actionCard}
              onPress={() => router.push('/add-product')}
            >
              <View style={[styles.actionIcon, { backgroundColor: '#2196F3' }]}>
                <Ionicons name="cube" size={32} color="white" />
              </View>
              <Text style={styles.actionTitle}>Add Product</Text>
              <Text style={styles.actionSubtitle}>New inventory</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.actionCard}
              onPress={() => router.push('/(tabs)/stock')}
            >
              <View style={[styles.actionIcon, { backgroundColor: '#FF9800' }]}>
                <Ionicons name="archive" size={32} color="white" />
              </View>
              <Text style={styles.actionTitle}>View Stock</Text>
              <Text style={styles.actionSubtitle}>Manage inventory</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.actionCard}
              onPress={() => router.push('/(tabs)/index')}
            >
              <View style={[styles.actionIcon, { backgroundColor: '#9C27B0' }]}>
                <Ionicons name="bar-chart" size={32} color="white" />
              </View>
              <Text style={styles.actionTitle}>Dashboard</Text>
              <Text style={styles.actionSubtitle}>View details</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Weekly Summary */}
        <View style={styles.weeklySummary}>
          <View style={styles.summaryHeader}>
            <Text style={styles.sectionTitle}>This Week</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All →</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.summaryCard}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Total Revenue</Text>
              <Text style={styles.summaryValue}>${weekStats.revenue.toFixed(2)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Total Profit</Text>
              <Text style={styles.summaryValue}>${weekStats.profit.toFixed(2)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Total Sales</Text>
              <Text style={styles.summaryValue}>{weekStats.sales}</Text>
            </View>
          </View>
        </View>

        {/* WhatsApp Share */}
        <TouchableOpacity 
          style={styles.whatsappButton}
          onPress={() => alert('WhatsApp share coming soon!')}
        >
          <Ionicons name="logo-whatsapp" size={24} color="white" />
          <Text style={styles.whatsappText}>Share Today's Summary</Text>
        </TouchableOpacity>

        {/* Business Tips */}
        <View style={styles.tipsCard}>
          <View style={styles.tipHeader}>
            <Ionicons name="bulb" size={24} color="#FF9800" />
            <Text style={styles.tipTitle}>Business Tip</Text>
          </View>
          <Text style={styles.tipText}>
            Track your daily sales to understand your business patterns. Start small and be consistent! 🇿🇼
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: 0,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
  },
  businessName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  settingsButton: {
    padding: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  statsOverview: {
    marginBottom: 25,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
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
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: 'white',
    opacity: 0.9,
    marginTop: 4,
  },
  quickActions: {
    marginBottom: 25,
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  actionCard: {
    width: '48%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  actionIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 12,
    color: '#666',
  },
  weeklySummary: {
    marginBottom: 20,
  },
  summaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  viewAllText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '600',
  },
  summaryCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderRadius: 12,
    marginBottom: 20,
    gap: 10,
  },
  whatsappText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tipsCard: {
    backgroundColor: '#FFF8E1',
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#FF9800',
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  tipText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

