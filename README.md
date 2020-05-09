# spell-checker-improved-plugin-sample
Sample plugin structure for spell checker improved atom module

## How it works
This plugin supports the [spell checker improved] atom module just by subscribing to the module services.
The available methods that could be implemented are:

| method | parameter  | return  | description  |
|---|---|---|---|
|onCheckWord|<em>string</em> wordToCheck|<em>boolean</em> true if word is fine, false if not|This method is called every time that a word was considered misspelled by the default spell checker or other plugins|
|onGetSuggestions|<em>string</em> wordThatNeedsSuggestions|<em>string[]</em> a list of suggested words for the parameter word|This method is called every time the user requests for suggestions of a specific misspelled word|
