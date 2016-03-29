#!/bin/sh

#change these variables
SAUCE_USERNAME=sauceuser
SAUCE_ACCESS_KEY=saucekey
#make sure the files are zipped (ususally just zip the .app dir on the mac)
REMOTE_FILE=remotefile
LOCAL_FILE=localfile

curl -u $SAUCE_USERNAME:$SAUCE_ACCESS_KEY -X POST -H "Content-Type: application/octet-stream" https://saucelabs.com/rest/v1/storage/joustie/$REMOTE_FILE?overwrite=true --data-binary @$LOCAL_FILE

