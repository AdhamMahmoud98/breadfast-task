import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Post, PostScreenProps } from '../../types/types';
import FastImage from 'react-native-fast-image'
import BouncableView from '../animatedComponents/bounceableView';
import { avatarImageLinks } from '../../utilities/constants';
import { useNavigation } from '@react-navigation/native';

interface Props {
    item: Post;
  }

const PostCard = React.memo(({ item }: Props) => {

    const [avatar, setAvatar] = useState<string | undefined>();

    const navigation = useNavigation<PostScreenProps>();

    const getRandomAvatarImage = (): string => {
        const randomIndex = Math.floor(Math.random() * avatarImageLinks.length);
        setAvatar(avatarImageLinks[randomIndex])
        return avatarImageLinks[randomIndex];
    }

    useEffect(() => {
        getRandomAvatarImage()
    }, [])

    const { user_id, title, body, id } = item;

    const onCardPress = () => {
        navigation?.navigate('Post', {id, user_id, title, body, avatarUrl: avatar })
    }

    const { cardContainer, cardName, cardImage, cardDetails, cardTitle, cardSubtitle, cardContent, avatarContainer } = styles;

    return (
        <BouncableView style={cardContainer} onPress={onCardPress}>
            <View style={avatarContainer}>
                <FastImage source={{ uri: avatar }} style={cardImage} />
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
        shadowOffset: { width: 0, height: 2 },
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
