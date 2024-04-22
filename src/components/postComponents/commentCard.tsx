import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Comment, Post, PostScreenProps } from '../../types/types';
import FastImage from 'react-native-fast-image'
import BouncableView from '../animatedComponents/bounceableView';
import { avatarImageLinks } from '../../utilities/constants';
import { useNavigation } from '@react-navigation/native';

interface Props {
    Comment: Comment
}

const CommentCard = React.memo(({ item }: Props) => {


    const getRandomAvatarImage = (): string => {
        const randomIndex = Math.floor(Math.random() * avatarImageLinks.length);
        return avatarImageLinks[randomIndex];
    }


    const { name, body } = item;

    const { cardContainer, cardName, cardImage, cardDetails, cardSubtitle, cardContent, avatarContainer } = styles;

    return (
        <View style={cardContainer}>
            <View style={avatarContainer}>
                <FastImage source={{ uri: getRandomAvatarImage() }} style={cardImage} />
            </View>
            <View style={cardContent}>
                <View style={cardDetails}>
                <Text style={cardName}>{name}</Text>
                    {body && <Text style={cardSubtitle}>{body}</Text>}
                </View>
            </View>
        </View>
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
        width: 60,
        height: 60,
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
    cardSubtitle: {
        fontSize: 14,
        marginTop: 2,
        color: '#888',
    },
    avatarContainer: {
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export { CommentCard };
