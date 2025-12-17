import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function AddProductScreen() {
  const router = useRouter();
  const [productName, setProductName] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [stock, setStock] = useState('');

  const handleSave = () => {
    // Validation
    if (!productName.trim()) {
      Alert.alert('Error', 'Please enter product name');
      return;
    }
    if (!costPrice || parseFloat(costPrice) <= 0) {
      Alert.alert('Error', 'Please enter valid cost price');
      return;
    }
    if (!sellingPrice || parseFloat(sellingPrice) <= 0) {
      Alert.alert('Error', 'Please enter valid selling price');
      return;
    }
    if (!stock || parseInt(stock) < 0) {
      Alert.alert('Error', 'Please enter valid stock quantity');
      return;
    }

    // Calculate profit margin
    const cost = parseFloat(costPrice);
    const selling = parseFloat(sellingPrice);
    const profitMargin = ((selling - cost) / cost * 100).toFixed(1);

    // For now, just show success (will save to Firebase later)
    Alert.alert(
      'Product Added!',
      `${productName}\nCost: $${cost}\nSelling: $${selling}\nProfit: ${profitMargin}%\nStock: ${stock}`,
      [
        {
          text: 'OK',
          onPress: () => {
            // Clear form
            setProductName('');
            setCostPrice('');
            setSellingPrice('');
            setStock('');
            router.back();
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#4CAF50" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerText}>Add New Product</Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Product Name"
            placeholderTextColor="#999"
            value={productName}
            onChangeText={setProductName}
            autoCapitalize="words"
          />
          <TextInput
            style={styles.input}
            placeholder="Cost Price (Buy Price)"
            placeholderTextColor="#999"
            value={costPrice}
            onChangeText={setCostPrice}
            keyboardType="decimal-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Selling Price"
            placeholderTextColor="#999"
            value={sellingPrice}
            onChangeText={setSellingPrice}
            keyboardType="decimal-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Starting Stock"
            placeholderTextColor="#999"
            value={stock}
            onChangeText={setStock}
            keyboardType="number-pad"
          />

          {/* Profit Preview */}
          {costPrice && sellingPrice && parseFloat(costPrice) > 0 && parseFloat(sellingPrice) > 0 && (
            <View style={styles.profitPreview}>
              <Text style={styles.profitLabel}>Profit per item:</Text>
              <Text style={styles.profitValue}>
                ${(parseFloat(sellingPrice) - parseFloat(costPrice)).toFixed(2)}
              </Text>
              <Text style={styles.profitPercent}>
                ({((parseFloat(sellingPrice) - parseFloat(costPrice)) / parseFloat(costPrice) * 100).toFixed(1)}%)
              </Text>
            </View>
          )}
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Product</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  formContainer: {
    backgroundColor: '#f5f5f5',
    width: '80%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 12,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    width: '80%',
    maxWidth: 400,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 1,
  },
  profitPreview: {
    backgroundColor: '#E8F5E9',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  profitLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  profitValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  profitPercent: {
    fontSize: 14,
    color: '#4CAF50',
    marginTop: 3,
  },
});

