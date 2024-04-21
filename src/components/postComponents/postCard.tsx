import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Post } from '../../types/types';
import FastImage from 'react-native-fast-image'
import BouncableView from '../animatedComponents/bounceableView';
import { avatarImageLinks } from '../../utilities/constants';


const PostCard = React.memo(({ item }: Post) => {

    const { user_id, title, body } = item;

    const getRandomAvatarImage = (): string => {
        const randomIndex = Math.floor(Math.random() * avatarImageLinks.length);
        return avatarImageLinks[randomIndex];
    }

    const { cardContainer, cardName, cardImage, cardDetails, cardTitle, cardSubtitle, cardContent, avatarContainer } = styles;

    return (
        <BouncableView style={cardContainer}>
            <View style={avatarContainer}>
                <FastImage source={{ uri: getRandomAvatarImage() }} style={cardImage} />
                <Text style={cardName}>{user_id}</Text>
            </View>
            <View style={cardContent}>
                <View style={cardDetails}>
                    <Text style={cardTitle}>{title}</Text>
                    {body && <Text style={cardSubtitle}>{body}</Text>}
                </View>
            </View>
        </BouncableView>
    );
});

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        padding: 16,
        marginBottom: 8,
        backgroundColor: '#fff',
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    cardImage: {
        width: 80,
        height: 80,
    },
    cardContent: {
        flexDirection: 'row',
        flex: 1,
    },
    cardName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardDetails: {
        flex: 1,
        marginLeft: 8,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 4,
    },
    cardSubtitle: {
        fontSize: 12,
        color: '#888',
    },
    avatarContainer: {
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export { PostCard };
