[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Naereen/ama)

# spell-checker-improved-plugin-sample
Sample plugin structure for spell checker improved atom module

## How it works
This plugin supports the [spell checker improved] atom module just by subscribing to the module services.
The available methods that could be implemented are:

| method | parameter  | return  | description  |
|---|---|---|---|
|onCheckWord|<em>string</em> wordToCheck|<em>boolean</em> true if word is fine, false if not|This method is called every time that a word was considered misspelled by the default spell checker or other plugins|
|onGetSuggestions|<em>string</em> wordThatNeedsSuggestions|<em>string[]</em> a list of suggested words for the parameter word|This method is called every time the user requests for suggestions of a specific misspelled word|
