## Chords
The recent times changed a lot about how things are organised and processed, and the effect is no different in case of music industry and casual music jam sessions. Music artists have been struggling to conduct their jam sessions or concerts in an efficient hybrid manner because the conventional platforms for video/audio conferencing are not very well optimised from the concerts' point of view, having various issues, some of them being:- <br>
• high latency <br>
• low quality of audio/video <br>
• plain raw UI/UX <br>
• no added personalisation <br>
• no custom virtual instruments to play <br>

So this was our inspiration and that's how we came up with chordz, a web based platform to organise and attend hybrid music jam sessions, from literally anywhere and on any device, with best quality! <br>


## Introduction
Chordz is a web application that lets users create or attend online jam sessions. Its an audio conferencing application, but very much themed up towards music sessions and optimized well enough to overcome the normal barriers. <br><br>
Basically any user would need to login/create an account on chordz. Thereafter, one member of the performer team would create a new jam room, they'll fill in the requirements of what instruments they'll need virtually, and then they'll get a jam room created! After that, they can easily share the details of this room using in-app share feature, and then any common user who'd like to attend the music session can just enter the room code and they'll be redirected to that specific jam session. The attendees would have the permissions to listen to audio, and the performers would have the permissions to mute/unmute themselves, play virtual instruments and end the meeting. The main aim to create it was to integrate the hybrid environment correctly and letting people have a sense of place, instead of a boring screen show.


## Live Site
https://chordz.netlify.app

## Tech Used
We have used react as our main framework for this web application. For auth and storage of user data, we used Firebase services. For audio conferencing APIs, we used dolby.io's APIs and for deploying the application. we've used netlify!

## Running it locally
1. Clone the repository ```git clone https://github.com/shrutigupta5555/chordss```
2. Make sure you've node installed, redirect to project's root directory then run ```npm install``` ```npm start```
3. open `localhost:3000` <br>
note: you'll need to get your own API keys for firebase and dolby.io
