
exports.ios84 = {
  browserName: '',
  'appium-version': '1.5',
  platformName: 'iOS',
  platformVersion: '8.4',
  deviceName: 'iPad Simulator',
  app: undefined // will be set later
};


exports.ios92 = {
  browserName: '',
  'appium-version': '1.5',
  platformName: 'iOS',
  platformVersion: '9.2',
  deviceName: 'iPad Air',
  app: undefined // will be set later
};

exports.ios93 = {
  browserName: '',
  'appium-version': '1.5',
  platformName: 'iOS',
  platformVersion: '9.3',
  deviceName: 'iPad Air',
  app: undefined // will be set later
};

exports.ios92popup = {
  browserName: '',
  'appium-version': '1.4',
  platformName: 'iOS',
  platformVersion: '9.2',
  deviceName: 'iPad Air',
  app: undefined,
  'waitForAppScript':'$.delay(3000); $.acceptAlert();'
};

exports.android18 = {
  browserName: '',
  'appium-version': '1.3',
  platformName: 'Android',
  platformVersion: '4.3',
  deviceName: 'Android Emulator',
  app: undefined // will be set later
};

exports.android19 = {
  browserName: '',
  'appium-version': '1.3',
  platformName: 'Android',
  platformVersion: '4.4.2',
  deviceName: 'Android Emulator',
  app: undefined // will be set later
};

exports.selendroid16 = {
  browserName: '',
  'appium-version': '1.3',
  platformName: 'Android',
  platformVersion: '4.1',
  automationName: 'selendroid',
  deviceName: 'Android Emulator',
  app: undefined // will be set later
};
