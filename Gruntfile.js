var 
    grunt       = require('grunt')
  , readJSON    = grunt.file.readJSON
  , opensauceID = readJSON('private/open-sauce-identification.json')

  , opensauce_username = process.env.SAUCE_USERNAME   || opensauceID.username
  , opensauce_key      = process.env.SAUCE_ACCESS_KEY || opensauceID.key

  , browsers = []
;

// curl -X POST https://saucelabs.com/rest/v1/Omega3k/js-tests -u Omega3k:1f241b16-57f5-43a6-84d4-2dd7be8d9a9a -d platforms='[["Windows 8", "internet explorer", "10"], ["OS X 10.8", "safari", "6"]]' -d url="https://saucelabs.com/test_helpers/front_tests/index.html" -d framework=jasmine -d name=sauce-sample-test


// browsers.push({
//   browserName: 'firefox', 
//   version    : '19', 
//   platform   : 'XP'
// });

// browsers.push({
//   browserName: 'internet explorer', 
//   version    : '6', 
//   platform   : 'XP'
// });

browsers.push({
  browserName: 'internet explorer', 
  version    : '7', 
  platform   : 'XP'
});

module.exports = function (grunt) {
  // var browsers = [{
  //   browserName: 'firefox',
  //   version: '19',
  //   platform: 'XP'
  // }, {
  //   browserName: 'googlechrome',
  //   platform: 'XP'
  // }, {
  //   browserName: 'googlechrome',
  //   platform: 'linux'
  // }, {
  //   browserName: 'internet explorer',
  //   platform: 'WIN8',
  //   version: '10'
  // }, {
  //   browserName: 'internet explorer',
  //   platform: 'VISTA',
  //   version: '9'
  // }];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          base: '',
          port: 9999
        }
      }
    },

    'saucelabs-jasmine': {
      all: {
        options: {
          username: opensauce_username, 
          key     : opensauce_key, 
          urls: [
            'http://127.0.0.1:9999/spec/SpecRunner.html'
            // , 'http://127.0.0.1:9999/spec/SpecRunnerDos.html'
          ],
          browsers: browsers,
          build: process.env.TRAVIS_JOB_ID,
          testname: 'backwards.js tests',
          // tunnelTimeout: 5, 
          // concurrency: 3
          passed: true, 
          throttled: 3,
          sauceConfig: {
            'video-upload-on-pass': false
          }
        }
      }
    },
    watch: {}
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-saucelabs');

  grunt.registerTask('default', ['connect', 'saucelabs-jasmine']);
  grunt.registerTask('test', ['connect', 'saucelabs-jasmine']);
};