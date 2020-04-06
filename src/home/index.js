import React from 'react';
import { 
    Text, 
    View,
    TouchableOpacity,
    Image,
    FlatList,
    SafeAreaView,
 } from 'react-native';
import { 
    Feather, 
    EvilIcons, 
    Ionicons,
    MaterialIcons,
    SimpleLineIcons,
    Entypo,
    MaterialCommunityIcons
 } from '@expo/vector-icons';
import data_tweets from './data';

import styles from './style';

import avatarImg from '../assets/avatar-1.png';
import preferencesImg from '../assets/preferences.png';

export default function Home() {
    console.log(data_tweets);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.writeTweetButton}>
                <MaterialCommunityIcons style={styles.writeTweetIcon} name="pencil"></MaterialCommunityIcons>
            </TouchableOpacity>

            <View style={styles.header}>
                <TouchableOpacity>
                    <Feather style={[styles.headerIcon, styles.hamburguerIcon]} name="menu" size={32} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <EvilIcons style={styles.headerIcon} name="sc-twitter" size={45} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={preferencesImg} style={styles.startIcon} />
                </TouchableOpacity>
            </View>

            <SafeAreaView style={styles.all_tweets}>
                <FlatList 
                    data={data_tweets}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.tweet}>
                            <TouchableOpacity style={styles.downButton}>
                                <EvilIcons name="chevron-down" size={32} color="#c1c1c1"/>
                            </TouchableOpacity>

                            <View style={styles.tweetAvatar}>
                                <Image style={styles.avatarImg} source={avatarImg}></Image>
                            </View>

                            <View style={styles.tweetContent}>
                                <View style={styles.userInfo}>
                                    <Text style={styles.nickName}>{item.nickName}</Text>
                                    <Text style={styles.profileName}> {item.profileName}</Text>
                                    <Text style={styles.timePosted}> • {item.timePosted}</Text>
                                </View>

                                <View style={styles.tweetText}>
                                    <Text>{item.tweetText}</Text>
                                </View>

                                <View style={styles.tweetButtons}>
                                    <TouchableOpacity>
                                        <Ionicons style={styles.buttonIcon} name="ios-chatbubbles" size={24} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <EvilIcons style={[styles.buttonIcon, styles.retweet]} name="retweet" />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <MaterialIcons style={styles.buttonIcon} name="favorite-border" size={24} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <SimpleLineIcons style={[styles.share, styles.buttonIcon]} name="share" size={20} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                
                />
            </SafeAreaView>

            <View style={styles.bottomMenu}>
                <TouchableOpacity>
                    <Entypo style={[styles.menuIcon, { color: '#00bfff' }]} name="home" size={20} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather style={styles.menuIcon} name="search" size={20} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons style={styles.menuIcon} name="ios-notifications" size={20} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons style={styles.menuIcon} name="email" size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );
}