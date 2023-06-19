// ==UserScript==
// @name Custom tabs component
// @ignorecache
// @onlyonce
// ==/UserScript==

function tabs() {
  document.getElementById('browser').prepend(gBrowser.tabContainer)

  const tabs = document.getElementById('tabbrowser-tabs')
  const scrollbox = document.getElementById('tabbrowser-arrowscrollbox')

  const shadow = scrollbox.shadowRoot

  setVertical(tabs)
  setVertical(scrollbox)
  setVertical(shadow.querySelector('.scrollbox-clip'))
  setVertical(shadow.querySelector('.scrollbox-clip').children[0])
}

function setVertical(elem: Element) {
  elem.setAttribute('orient', 'vertical')
}
