import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useLazyGetPostCommentsQuery } from '../state/services/posts/postApi';
import { FlashList } from '@shopify/flash-list';
import { Comment } from '../types/types';
import { CommentCard } from '../components/postComponents/commentCard';
import { PostCardLoadingItem } from '../components/loadingComponents/postCardLoadingItem';

interface Props {
    route: {
        params: {
            id: string;
            user_id: string;
            avatarUrl?: string;
            title: string;
            body: string;
        }
    }

}

const PostWindow = ({ route }: Props) => {

    const { id, user_id, avatarUrl, title, body } = route?.params;

    const [getPostComments, { data, isLoading, isFetching }] = useLazyGetPostCommentsQuery();

    useEffect(() => {
        getPostComments(id)
    }, []);

    const onRefresh = () => {
        getPostComments(id)
    }

    const renderItem = ({ item }: { item: Partial<Comment> }) => {

        if (item) return <CommentCard item={item} />
        return (
            <PostCardLoadingItem />
        )
    }

    const {container, avatarContainer, userId, avatar, contentContainer,titleStyle, bodyStyle, commentsListContainer} = styles;

    return (
        <View style={container}>
            <View style={avatarContainer}>
                <FastImage source={{ uri: avatarUrl }} style={avatar} />
                <Text style={userId}>{user_id}</Text>
            </View>
            <View style={contentContainer}>
                <Text style={titleStyle}>{title}</Text>
                <Text style={bodyStyle}>{body}</Text>
            </View>
            {/* Comments Section */}
            <View style={commentsListContainer}>
             { data?.length !== 0 ?  <FlashList
                    data={isLoading ? Array(10).fill(0) : data}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    estimatedItemSize={10}
                    onRefresh={onRefresh}
                    refreshing={isFetching}
                /> : <Text style={{...titleStyle, marginTop: 20}}>{'No Comments at the moment'}</Text> }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'white'
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 50,
        marginBottom: 10,
    },
    userId: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    contentContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },
    bodyStyle: {
        fontSize: 14,
        textAlign: 'center',
    },
    commentsListContainer: {
         width: '100%',
        height: '100%',
        marginTop: 20
    }
});

export { PostWindow };
