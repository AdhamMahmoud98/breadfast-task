import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const PostCardLoadingItem = () => {
  const {
    cardContainer,
    cardName,
    cardImage,
    cardDetails,
    cardTitle,
    cardSubtitle,
    cardContent,
  } = styles;
  return (
    <SkeletonPlaceholder>
      <View style={cardContainer}>
     
          <View style={cardImage} />
          <View style={cardName} />
       
        <View style={cardContent}>
          <View style={cardDetails}>
            <View style={cardTitle} />
            <View style={cardSubtitle} />
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  cardContent: {
    flexDirection: 'row',
    flex: 1,
    borderRadius: 4,
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
    marginTop: 10,
    height: 60,
    borderRadius: 4,
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export {PostCardLoadingItem};
