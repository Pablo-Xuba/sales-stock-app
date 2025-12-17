import { StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function StockScreen() {
  const router = useRouter();
  const [products] = useState<any[]>([]); // Will connect to Firebase later

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.title}>Stock</ThemedText>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => router.push('/add-product')}
        >
          <ThemedText style={styles.addButtonText}>➕ Add Product</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Product List */}
      <ScrollView style={styles.productList}>
        {products.length === 0 ? (
          <ThemedView style={styles.emptyState}>
            <ThemedText style={styles.emptyText}>No products yet</ThemedText>
            <ThemedText style={styles.emptySubtext}>Tap "Add Product" to get started</ThemedText>
          </ThemedView>
        ) : (
          products.map((product) => (
            <TouchableOpacity 
              key={product.id} 
              style={styles.productCard}
              onPress={() => alert('Product details coming soon!')}
            >
              <View style={styles.productInfo}>
                <ThemedText style={styles.productName}>{product.name}</ThemedText>
                <ThemedText style={styles.productPrice}>${product.sellingPrice}</ThemedText>
              </View>
              <View style={styles.stockBadge}>
                <ThemedText style={styles.stockText}>{product.stock}</ThemedText>
                <ThemedText style={styles.stockLabel}>in stock</ThemedText>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productList: {
    flex: 1,
  },
  productCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    marginBottom: 10,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '500',
  },
  stockBadge: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  stockText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  stockLabel: {
    color: 'white',
    fontSize: 12,
    opacity: 0.9,
  },
  emptyState: {
    padding: 40,
    alignItems: 'center',
    marginTop: 60,
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

