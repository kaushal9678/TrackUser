# TrackUser

TrackUser is a mobile application build using react-native technology to track user locations and save that to **mongoseDB**. Show all the visited places in list with the help of Google geocoding api and draw a path between these coordinates on Map. It's just a demo app that build for learning purpose using latest features of React version 0.60 like >hooks (useEffect, useState, useContext,withNavigator, etc).

## This project contains two folder
* Server
  > Server folder is used to save data on a mongoseDB with the help of **ngrok** to generate dummy URL for API request
* tracks
  > it is a mobile application that is build using expo-cli
### Installation of Server
**Server** 
> used following dependencies
* "bcrypt": "^3.0.6", -> to save password in encryption format
* "express": "^4.17.1", -> 
* "jsonwebtoken": "^8.5.1", -> for json webtoken
* "mongoose": "^5.7.1", -> to save data to cloud
* "nodemon": "^1.19.2" -> automatic refresh of changes

> To install these dependecies just run following command
>```yarn ```

**use following url to create a mongodb database**
```https://cloud.mongodb.com/```

#### To create a dummy url install ngrok globally in your system

>```npm install -g ngrok```

**and to run server just go to server directory and hit command**

>```ngrok http 3000```

### Installation of Tracks mobile app
>###Dependencies
*  "axios": "^0.19.0",
*    "expo": "^35.0.0",
*   "react": "16.8.3",
*    "react-dom": "16.8.3",
*    "react-native": "https://github.com/expo/react-native/archive/sdk-35.0.0.tar.gz",
*    "react-native-elements": "^1.2.6",
*    "react-native-gesture-handler": "~1.3.0",
*    "react-native-paper": "^2.16.0",
*    "react-native-reanimated": "~1.2.0",
*    "react-native-screens": "^2.0.0-alpha.4",
*    "react-native-web": "^0.11.7",
*   "react-navigation": "^4.0.10",
*    "react-navigation-material-bottom-tabs": "^2.1.2",
*    "react-navigation-stack": "^1.10.2",
*    "react-navigation-tabs": "^2.5.6"

**install using following command**
 >```yarn```

 ## To run expo app use following command
> ```expo start```
