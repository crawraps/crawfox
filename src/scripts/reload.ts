// ==UserScript==
// @name Reload firefox hotkey
// @ignorecache
// @onlyonce
// ==/UserScript==

_ucUtils.registerHotkey(
  {
    id: 'crawraps-reload-firefox',
    modifiers: 'ctrl shift',
    key: 'J',
  },
  () => _ucUtils.restart()
)

_ucUtils.registerHotkey(
  {
    id: 'crawraps-reload-styles',
    modifiers: 'ctrl shift',
    key: 'L',
  },
  () => _ucUtils.updateStyleSheet('crawfox.au.css', 'author')
)
