import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    Image,
    FlatList
 } from 'react-native';
import { 
    Feather, 
    EvilIcons, 
    Ionicons,
    MaterialIcons,
    SimpleLineIcons
 } from '@expo/vector-icons';

import styles from './style';

import avatarImg from '../assets/avatar-1.png';
import preferencesImg from '../assets/preferences.png';

export default function Home() {
    return (
        <View style={styles.container}>
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

            <View style={styles.tweet}>
                <TouchableOpacity style={styles.downButton}>
                    <EvilIcons name="chevron-down" size={32} color="#c1c1c1"/>
                </TouchableOpacity>

                <View style={styles.tweetAvatar}>
                    <Image style={styles.avatarImg} source={avatarImg}></Image>
                </View>

                <View style={styles.tweetContent}>
                    <View style={styles.userInfo}>
                        <Text style={styles.nickName}>Rick</Text>
                        <Text style={styles.profileName}> @rickandmorty</Text>
                        <Text style={styles.timePosted}> • 10s</Text>
                    </View>

                    <View style={styles.tweetText}>
                        <Text>Paz entre os mundos!</Text>
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
                            <SimpleLineIcons style={[styles.share, styles.buttonIcon]} name="share" size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}