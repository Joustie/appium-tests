if (process.env.DEV) {
  exports.iosToDoApp = "/Users/joostevertse/tmp/blogpost/todomvcios/platforms/ios/build/emulator/TodoMVCiOS.app";
} else {
  exports.iosToDoApp = "sauce-storage:todo.app.zip";
}
