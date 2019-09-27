# iTinerary

## To run application

`npm start`

A browser window should appear. Scan the QR code with your camera to open Expo on your mobile phone.

Don't forget to npm install & install the [Expo-CLI](https://facebook.github.io/react-native/docs/getting-started)!

## Component Structure

<App>
  <AppEntry(Navigate to AppNavigator)>
</App>
-------------------------
<AppNavigator>
  <MainTabNavigator>
    <HomeScreen />
    <Settings />
  </MainTabNavigator>
</AppNavigator>
-------------------------
<HomeScreen>
  <Header />
  <Post />
  <Post />
  <Post />
</HomeScreen>
-------------------------
<Header>
  <CreatePost />
</Header>

## Component Structure
