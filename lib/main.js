'use babel';

import CustomChecker from './custom-checker';

/**
 * The main file is responsible for initialize and subscribe this plugin to the spell checker atom module
 */
export default {
  activate() {
      console.log('sample spell checker plugin activated!');
  },

  /**
   * subscribes to the spell checker improved service
   * @return {callable} a callable with an instance of the custom checker from this plugin
   */
  subscribePlugin() {
    return (environment)=>new CustomChecker(environment);
  },
};
