import { StyleSheet, ScrollView, TouchableOpacity, View, TextInput } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useState } from 'react';

export default function SalesScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products] = useState<any[]>([]); // Will connect to Firebase later

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.title}>Record Sale</ThemedText>
        <ThemedText style={styles.subtitle}>Search and select product</ThemedText>
      </ThemedView>

      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search products..."
        placeholderTextColor="#999"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Product List */}
      <ScrollView style={styles.productList}>
        {products.length === 0 ? (
          <ThemedView style={styles.emptyState}>
            <ThemedText style={styles.emptyText}>No products yet</ThemedText>
            <ThemedText style={styles.emptySubtext}>Add products in the Stock tab first</ThemedText>
          </ThemedView>
        ) : (
          products.map((product) => (
            <TouchableOpacity 
              key={product.id} 
              style={styles.productCard}
              onPress={() => alert('Sale recording coming soon!')}
            >
              <View>
                <ThemedText style={styles.productName}>{product.name}</ThemedText>
                <ThemedText style={styles.productStock}>Stock: {product.stock}</ThemedText>
              </View>
              <ThemedText style={styles.productPrice}>${product.sellingPrice}</ThemedText>
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
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.7,
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 20,
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
  productName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  productStock: {
    fontSize: 14,
    opacity: 0.6,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
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

