import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HomeScreen } from '../screens/HomeScreen';
import { ArticleDetailScreen } from '../screens/ArticleDetailScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { colors } from '../theme/colors';
import { ChatScreen } from '../screens/ChatScreen';
import { DiscoveryScreen } from '../screens/DiscoveryScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const HomeStackScreen: React.FC = () => (
    <HomeStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.primary,
            },
            headerTintColor: colors.surface,
            headerTitleStyle: {
                fontWeight: '700',
            },
        }}
    >
        <HomeStack.Screen
            name="HomeMain"
            component={HomeScreen}
            options={{ headerShown: false }}
        />
        <HomeStack.Screen
            name="ArticleDetail"
            component={ArticleDetailScreen}
            options={{ title: 'Article' }}
        />
    </HomeStack.Navigator>
);

export const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: colors.textSecondary,
                    headerShown: false,
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeStackScreen}
                    options={{
                        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
                            <Icon name="home" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Chat"
                    component={ChatScreen}
                    options={{
                        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
                            <Icon name="search" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Discovery"
                    component={DiscoveryScreen}
                    options={{
                        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
                            <Icon name="person" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Care"
                    component={SearchScreen}
                    options={{
                        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
                            <Icon name="person" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
                            <Icon name="person" size={size} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
