import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function TopNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { name: 'Home', path: '/(tabs)/home', icon: 'home' },
    { name: 'Today', path: '/(tabs)', icon: 'calendar' },
    { name: 'Sales', path: '/(tabs)/sales', icon: 'cart' },
    { name: 'Stock', path: '/(tabs)/stock', icon: 'archive' },
  ];

  const isActive = (path: string) => {
    if (path === '/(tabs)' && pathname === '/(tabs)') return true;
    if (path !== '/(tabs)' && pathname.includes(path.split('/').pop() || '')) return true;
    return false;
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const active = isActive(tab.path);
        return (
          <TouchableOpacity
            key={tab.name}
            style={[styles.tab, active && styles.activeTab]}
            onPress={() => router.push(tab.path as any)}
          >
            <Ionicons 
              name={tab.icon as any} 
              size={20} 
              color={active ? '#4CAF50' : '#999'} 
            />
            <Text style={[styles.tabText, active && styles.activeTabText]}>
              {tab.name}
            </Text>
            {active && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    position: 'relative',
  },
  activeTab: {
    // Active state styling handled by children
  },
  tabText: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#4CAF50',
    fontWeight: '700',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -10,
    left: '25%',
    right: '25%',
    height: 3,
    backgroundColor: '#4CAF50',
    borderRadius: 2,
  },
});

