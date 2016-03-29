#!/bin/sh
curl -u : -X POST -H "Content-Type: application/octet-stream" https://saucelabs.com/rest/v1/storage/joustie/todo.app.zip?overwrite=true --data-binary @/Users/joostevertse/tmp/blogpost/todomvcios/platforms/ios/build/emulator/TodoMVCiOS.zip

