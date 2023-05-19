[![Maintenance](https://img.shields.io/badge/Maintained%3F-no-red.svg)](#)
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/marcelkohl)

# spell-checker-improved-plugin-sample
Sample plugin structure for spell checker improved atom module

## How it works
This plugin supports the [spell checker improved](https://github.com/marcelkohl/spell-checker-improved) atom module just by subscribing to the module services.
The available methods that must be implemented are:

| method | parameter  | return  | description  |
|---|---|---|---|
|getScopes| |<em>string[]</em>|Gives a list of file scopes to be covered by the plugin. Ex.:source.js, text.html.basic, etc. Live empty if the scope could be any.|
|getPluginName| |<em>string</em>|Returns the name of the plugin/module so the spell checker module can identify this plugin|
|onCheckWord|<em>string</em> wordToCheck|<em>boolean</em> true if word is fine, false if not|This method is called every time that a word was considered misspelled by the default spell checker or other plugins|
|onGetSuggestions|<em>string</em> wordThatNeedsSuggestions|<em>string[]</em> a list of suggested words for the parameter word|This method is called every time the user requests for suggestions of a specific misspelled word|
|onMisspellMarked|<em>array</em> misspelledWords<br /><em>object</em> timersAt||Event called when the improved spell checker finishes to mark the misspelled words.This method is optional and can be implemented only when is needed.|
