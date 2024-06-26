import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { FlashList } from "@shopify/flash-list";
import { useLazyGetPostsQuery } from '../state/services/posts/postApi'
import { PostCard } from '../components/postComponents/postCard';
import { Post } from '../types/types';
import { PostCardLoadingItem } from '../components/loadingComponents/postCardLoadingItem';

const HomeWindow = () => {
    const [getPostList, { data, isLoading, isFetching }] = useLazyGetPostsQuery();

    useEffect(() => {
        getPostList();
    }, []);

    const onRefresh = () => {
        getPostList();
    }

    const renderItem = ({ item }: { item: Post }) => {

        if (item) return <PostCard item={item} />
        return (
            <PostCardLoadingItem />
        )
    }

    const {container} = styles;

    return (
        <View style={container}>
            <FlashList
                data={isLoading ? Array(10).fill(0) : data}
                renderItem={renderItem}
                estimatedItemSize={50}
                showsVerticalScrollIndicator={false}
                onRefresh={onRefresh}
                refreshing={isFetching}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { backgroundColor: 'white', flex: 1 }
})

export { HomeWindow }