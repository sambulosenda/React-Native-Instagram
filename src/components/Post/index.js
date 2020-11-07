import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';

import Video from 'react-native-video';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = (props) => {
  const [posts, setPosts] = useState(props.posts);
  const [isLiked, setisLiked] = useState(false);

  // const {posts} = props;
  const [paused, setpaused] = useState(false);

  const onPlayPausePress = () => {
    setpaused(!paused);
  };

  const onlikePress = () => {
    const linkesToAdd = isLiked ? -1 : 1;
    setPosts({
      ...posts,
      likes: posts.likes + linkesToAdd,
    });
    setisLiked(!isLiked);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
          <Video
            source={{
              uri: posts.videoUri,
            }}
            style={styles.video}
            resizeMode={'cover'}
            onError={(e: LoadError) => console.log(e)}
            repeat={true}
            paused={paused}
          />

          <View style={styles.uiContainer}>
            <View style={styles.rightContainer}>
              <View style={styles.profilePictureContainer}>
                <Image
                  style={styles.profilePicture}
                  source={{
                    uri: posts.user.imageUri,
                  }}
                />
              </View>

              <TouchableOpacity
                onPress={onlikePress}
                style={styles.iconContainer}>
                <AntDesign name={'heart'} size={40} color={isLiked ? 'red': 'white'} />
                <Text style={styles.statsLabel}>{posts.likes}</Text>
              </TouchableOpacity>

              <View style={styles.iconContainer}>
                <FontAwesome name={'commenting'} size={40} color="white" />
                <Text style={styles.statsLabel}>123</Text>
              </View>

              <View style={styles.iconContainer}>
                <Fontisto name={'share-a'} size={35} color="white" />
                <Text style={styles.statsLabel}>123</Text>
              </View>
            </View>

            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.handle}>@{posts.user.username}</Text>
                <Text style={styles.description}>{posts.description}</Text>

                <View style={styles.songrow}>
                  <Entypo name={'beamed-note'} size={24} color="white" />

                  <Text style={styles.songname}>{posts.songName}</Text>
                </View>
              </View>

              <View style={styles.profilePictureContainer}>
                <Image
                  style={styles.songImage}
                  source={{
                    uri: posts.songImage,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
