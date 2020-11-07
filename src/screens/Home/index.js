import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Post from '../../components/Post';

const post1 = {
  id: 'p1',
  videoUri:
    'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
  user: {
    id: 'u1',
    username: 'daviddobrik',
    imageUri:
      'https://influencermarketinghub.com/wiki/wp-content/uploads/2020/08/1657369265111046_c5_720x720.jpeg',
  },
  description: 'hahahah oh boy @borat',
  songName: 'NF - The search',
  songImage:
    'https://influencermarketinghub.com/wiki/wp-content/uploads/2020/08/1657369265111046_c5_720x720.jpeg',
  likes: 123,
  comments: 12,
  shares: 44,
};

const Home = () => {
  return (
    <View>
      <Post posts={post1} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
