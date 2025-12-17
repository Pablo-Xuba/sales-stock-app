import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { TopNavigation } from '@/components/top-navigation';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: '#999',
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarStyle: {
          display: 'none',
        },
        header: () => <TopNavigation />,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Today',
        }}
      />
      <Tabs.Screen
        name="sales"
        options={{
          title: 'Sales',
        }}
      />
      <Tabs.Screen
        name="stock"
        options={{
          title: 'Stock',
        }}
      />
    </Tabs>
  );
}
