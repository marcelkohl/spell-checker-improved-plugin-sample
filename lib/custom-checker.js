'use babel';

/**
 * The spell checker interface for the custom plugin
 */
export default class CustomChecker {
    constructor(environment) {
        console.log('custom checer constructed ', this.getPluginName())
        this.listOfKnownWords = ['const', 'param', 'seo', 'http', 'boolean'];
    }

    /**
     * Gives a list of file scopes to be covered by the plugin.
     * @return {string[]} Atom scope names. Ex.:source.js, text.html.basic, etc. Leave empty if the scope could be any.
     */
    getScopes() {
        return [];
    }

    /**
     * returns the name of the plugin/module so the spell checker module can identify this plugin
     * @return {string}
     */
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

    /**
     * Event called when the improved spell checker finishes to mark the misspelled words.
     * This method is optional and can be implemented only when is needed
     * @param  {array} misspelledWords List of words marked with they're respective range/position in the text
     * @param  {object} timersAt Timers at event occurrence, to check performance
     */
    onMisspellMarked(misspelledWords, timersAt) {
        console.log('onMisspellMarked-plugin-sample', misspelledWords, timersAt);
    }
}
