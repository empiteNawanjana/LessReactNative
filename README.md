# LessRN

Developers are spending lot of time on creating base project when they starting a new project in React Native. LessRN gives you a perfect
solution for that. It helps you to create base project which heducing the time you spend on base project of your new project
and allow you to jump directly to develop requirement features.

# New Features

- Basic authentication flow added

- Tab bar component added

- List view compoenent added with swipe delete

# Prerequisite

- Node installed (LTS version)

  - https://nodejs.org/en/download/

- React Native installed and set up

  - https://facebook.github.io/react-native/docs/getting-started.html

- Xcode installed for build app for IOS
- Android Studio installed and setup for build app for Android

- Yeoman installed and set up
  - http://yeoman.io/

# Usage

- Clone the Repo to your mac or windows pc

  - git clone https://github.com/empitechathu/LessRN.git

- Go inside to the LessRN repo and Go inside to the generator-lessRN folder

  - cd LessRN
  - cd generator-lessRN

- Link the generator to yeoman
  - npm link
- Create a react native project in somewhere else in your system
  - react-native init SampleProject
- Go inside to your newly created project
  - cd SampleProject
- Generate the React native code structure and template files using yeoman

  - yo lessrn:base

- Link the libraries to the projects

  - react-native link

- Compatible With latest React Native Versions >= 0.57

  - IOS -
    Right Click Libraries "Add Files to Project"
    /node_modules/react-native-gesture-handlers/ios/RNGestureHandler.xcodeproj
    Go to build phases and add libRNGestureHandler.a
  - Android -
    Automatically link for Android by react-native link react-native-gesture-handler

- Configure Android App with Android SDK

  - Create a file inside android folder and name it to 'local.properties'
  - Add your android sdk path -
    sdk.dir=/Users/{YOUR HOME}/Library/Android/sdk

- Clear cache and run the react native packager

  - react-native start --reset-cache

- Install Pods
  sudo gem install cocoapods

* Run IOS and Android builds

  - react-native run-ios
  - react-native run-android

# Current Status

    - Adding More components for the base ..
