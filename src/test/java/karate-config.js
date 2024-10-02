function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
    myVarName: 'someValue',
    userType:karate.properties['userType']
  }
  if (env == 'dev') {
    // customize
    config.dummyURL = "www.abc.com"
  } else if (env == 'e2e') {
    // customize
  }
  return config;
}