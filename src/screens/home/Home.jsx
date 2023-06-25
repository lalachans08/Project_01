import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

import userProfile from '../../../public/assets/images/aku.jpg';
import styles from './home.style';
import {
  NotificationIcon,
  PlayIcon,
  SearchIcon,
} from '../../../public/assets/icons';
import {
  COLORS,
  FONT,
  SIZES,
  horrorPodcast,
  popularPodcast,
  trendingPodcast,
} from '../../constants';

// import library tambahan untuk membuat efek blur di background
import {BlurView} from '@react-native-community/blur';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}) => {
  // state untuk inputan pada text input
  const [input, setInput] = useState('');

  // fungsi untuk menghandle inputan pada text input
  const onHandleClick = e => {
    // meng-set inputan ke state input
    setInput(e);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerWrapper}>
        {/* user detail */}
        <View style={styles.userContainer}>
          <TouchableOpacity style={styles.profile}>
            <Image
              source={userProfile}
              alt="user-profile"
              style={{width: '100%', height: '100%'}}
            />
          </TouchableOpacity>
          <View style={styles.profileInfo}>
            <Text style={styles.sayHello}>Hello, </Text>
            <Text style={styles.userName}>Ratna Komalasari</Text>
          </View>
        </View>
        {/* end__user-detail */}

        {/* notification */}
        <View>
          <TouchableOpacity
            style={styles.bellContainer}
            onPress={() => navigation.navigate('DetailsNotification')}>
            {/* notification=-icon */}
            <NotificationIcon />
          </TouchableOpacity>
        </View>
        {/* end__notification */}
      </View>

      {/* heading */}
      <View style={styles.headingTitleContainer}>
        <Text style={styles.headingTitle}>Listen The Favorite </Text>
        <Text style={styles.headingTitle}>Podcast</Text>
      </View>
      {/* end__heading */}

      {/* search */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TextInput
          // value = untuk menampilkan inputan dari state input
          value={input}
          // onChangeText = untuk menghandle inputan dari text input
          onChangeText={onHandleClick}
          placeholder="Search podcast"
          style={{
            paddingHorizontal: 18,
            backgroundColor: '#F3F4F8',
            borderRadius: 16,
            height: 50,
            width: '80%',
            fontSize: 16,
          }}
        />
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FF7754',
            borderRadius: 16,
          }}>
          <SearchIcon />
        </TouchableOpacity>
      </View>
      {/* end__search */}

      {/* POPULAR PODCAST */}
      <View>
        {/* heading-podcast */}
        <View style={styles.popularPodcastHeading}>
          <Text style={styles.popularPodcastTitle}>Popular Podcast</Text>
          <TouchableOpacity>
            <Text>View all</Text>
          </TouchableOpacity>
        </View>
        {/* end__heading-podcast */}

        {/* podcast-list */}
        <FlatList
          // data = data yang akan di tampilkan
          data={popularPodcast}
          // contentContainerStyle = style untuk container dari flatlist
          contentContainerStyle={styles.popularPodcastList}
          // horizontal = untuk menampilkan data secara horizontal
          horizontal={true}
          // renderItem = untuk menampilkan data, untuk nama "item" bisa di ganti/ bebas
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={styles.popularPodcastListImageContainer}>
                <Image
                  // source = untuk menampilkan gambar/ data dari image
                  source={item.image}
                  // alt = untuk menampilkan text ketika gambar tidak muncul
                  alt={item.title}
                  style={{height: '100%'}}
                />
              </View>
              <View style={styles.popularPodcastListDescContainer}>
                {/* BlurView = pake library tambahan, untuk membuat efek blur di background */}
                <BlurView blurType="light">
                  <View>
                    <Text style={styles.popularPodcastListTitle}>
                      {item.title}
                    </Text>
                    <Text style={styles.popularPodcastListStudio}>
                      {item.studio}
                    </Text>
                  </View>
                </BlurView>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* END__POPULAR PODCAST */}

      {/* TRENDING PODCAST */}
      <View>
        {/* heading-podcast */}
        <View style={styles.trendingPodcastHeading}>
          <Text style={styles.trendingPodcastTitle}>Trending Podcast</Text>
          <TouchableOpacity>
            <Text>View all</Text>
          </TouchableOpacity>
        </View>
        {/* end__heading-podcast */}

        {/* podcast-list */}
        <FlatList
          data={trendingPodcast}
          // scrollEnabled = untuk mengaktifkan scroll pada flatlist, karena disini saya pake scrollview maka saya matikan. jika tidak di matikan maka akan ada warning
          scrollEnabled={false}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={styles.trendingPodcastListContent}>
                <View style={styles.trendingPodcastListImageContainer}>
                  <Image
                    source={item.image}
                    alt={item.title}
                    style={{height: '100%', width: '100%', borderRadius: 20}}
                  />
                </View>
                <View style={styles.trendingPodcastListDescContainer}>
                  <View>
                    <Text style={styles.trendingPodcastListTitle}>
                      {item.title}
                    </Text>
                    <Text style={styles.trendingPodcastListStudio}>
                      {item.studio}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.playIcon}>
                    <PlayIcon />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* END__TRENDING PODCAST */}

      {/* HORROR PODCAST */}
      <View>
        {/* heading-podcast */}
        <View style={styles.horrorPodcastHeading}>
          <Text style={styles.horrorPodcastTitle}>Horror Podcast</Text>
          <TouchableOpacity>
            <Text>View all</Text>
          </TouchableOpacity>
        </View>

        {/* podcast-list */}
        <FlatList
          data={horrorPodcast}
          // scrollEnabled = untuk mengaktifkan scroll pada flatlist, karena disini saya pake scrollview maka saya matikan. jika tidak di matikan maka akan ada warning
          scrollEnabled={false}
          style={{marginBottom: 50}}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={styles.horrorPodcastListContent}>
                <View style={styles.horrorPodcastListImageContainer}>
                  <Image
                    source={{uri: item.image}}
                    alt={item.title}
                    style={{height: '100%', width: '100%', borderRadius: 20}}
                  />
                </View>
                <View style={styles.horrorPodcastListDescContainer}>
                  <View>
                    <Text style={styles.horrorPodcastListTitle}>
                      {item.title}
                    </Text>
                    <Text style={styles.horrorPodcastListStudio}>
                      {item.time}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.playIcon}>
                    {/* <PlayIcon /> */}
                    <Ionicons name="heart-outline" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* end__podcast-list */}
      </View>
      {/* end__heading-podcast */}

      {/* END__HORROR PODCAST */}
    </ScrollView>
  );
};

export default Home;
