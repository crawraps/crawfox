// ==UserScript==
// @name crawfox main script
// @ignorecache
// @onlyonce
// ==/UserScript==

function main() {
  document.querySelector('body').setAttribute('id', 'crawfox')

  // update styles to override defaults
  _ucUtils.updateStyleSheet('crawfox.au.css', 'author')

  tabs()
}

_ucUtils.startupFinished().then(main)
