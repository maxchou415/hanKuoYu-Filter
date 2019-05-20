// Author: Max Yi-Hsun Chou <yihsunmaxchou@icloud.com>
// Github: https://github.com/maxchou415

const blocklist = ['韓國瑜', '韓市長', '韓總', '國瑜', '韓流', '韓粉', '韓導']
const templateHtml = '<div><h1 style="padding: 30px; text-align: center;">草包已被隱藏！</h1></div>'

const contentFromPosts = document.querySelector('#contentArea')
const contentFromPages = document.querySelector('#pagelet_timeline_main_column')
const content = contentFromPosts || contentFromPages;

function removeElems () {
  const articles = content.querySelectorAll(`div[id][role="article"]`)

  function hasSensitiveWordInBlocklist (article) {
    return blocklist.some((sensitiveWord) => article.innerHTML.includes(sensitiveWord))
  }

  articles.forEach((article) => {
    if (hasSensitiveWordInBlocklist(article)) {
      article.innerHTML = templateHtml
    }
  })
}

content.addEventListener('DOMSubtreeModified', function (event) {
  removeElems()
})