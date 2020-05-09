'use babel';

/**
 * The spell checker interface for the custom plugin
 */
export default class CustomChecker {
    constructor(environment) {
        console.log('custom checer constructed ', this.getPluginName())
        this.listOfKnownWords = ['const', 'param', 'seo', 'http', 'boolean'];
    }

    getPluginName() {
        return 'spell-checker-improved-plugin-sample';
    }

    /**
     * Called every time that a word was considered misspelled by the default spell checker or other plugins
     * @param  {string} wordToCheck
     * @return {boolean} boolean true if word is fine, false if not
     */
    onCheckWord(wordToCheck) {
        return this.listOfKnownWords.indexOf(wordToCheck.toLowerCase()) >= 0
    }

    /**
     * Called every time the user requests for suggestions of a specific misspelled word
     * @param  {string} wordThatNeedsSuggestions
     * @return {string[]} list of suggested words for the parameter word
     */
    onGetSuggestions(wordThatNeedsSuggestions) {
        return [];
    }
}
