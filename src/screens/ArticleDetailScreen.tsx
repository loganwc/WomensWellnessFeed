import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { colors } from '../theme/colors';
import { Article } from '../types';

type HomeStackParamList = {
    ArticleDetail: { article: Article };
};

type ArticleDetailScreenProps = NativeStackScreenProps<HomeStackParamList, 'ArticleDetail'>;

export const ArticleDetailScreen: React.FC<ArticleDetailScreenProps> = ({ route }) => {
    const { article } = route.params;
    const publishedDate = article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : '';

    return (
        <ScrollView style={styles.container}>
            {article.imageUrl ? <Image source={{ uri: article.imageUrl }} style={styles.heroImage} /> : null}
            <View style={styles.content}>
                {article.category ? <Text style={styles.category}>{article.category}</Text> : null}
                <Text style={styles.title}>{article.title}</Text>
                <Text style={styles.author}>
                    By {article.author ?? 'Author'}{article.readTime ? ` • ${article.readTime} min read` : ''}
                </Text>
                <Text style={styles.body}>{article.content ?? article.excerpt}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    heroImage: {
        width: '100%',
        height: 250,
    },
    content: {
        padding: 16,
    },
    category: {
        fontSize: 12,
        color: colors.primary,
        fontWeight: '600',
        marginBottom: 8,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: colors.text,
        marginBottom: 8,
    },
    author: {
        fontSize: 14,
        color: colors.textSecondary,
        marginBottom: 18,
    },
    body: {
        fontSize: 16,
        lineHeight: 20,
        color: colors.text,
        marginBottom: 24,
    },
});
