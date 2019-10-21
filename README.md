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
```yarn ```

#### To create a dummy url install ngrok globally in your system
```npm install -g ngrok```
**and to run server just go to server directory and hit command**
```ngrok http 3000```
