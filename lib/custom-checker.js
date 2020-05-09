'use babel';

/**
 * The spell checker interface for the custom plugin
 */
export default class CustomChecker {
    constructor(environment) {
        console.log('custom plugin constructed', environment);
    }

    onCheckWord(wordToCheck) {
        console.log('custom plugin check', wordToCheck);
    }

    onGetSuggestions(wordThatNeedsSuggestions) {
        console.log('custom getSuggestions', wordThatNeedsSuggestions);
    }
}
