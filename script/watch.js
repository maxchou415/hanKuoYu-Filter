// Author: Max Yi-Hsun Chou <yihsunmaxchou@icloud.com>
// Github: https://github.com/maxchou415

const blocklist = ['韓國瑜', '韓市長', '韓總', '國瑜', '韓流', '韓粉', '韓導']
const templateHtml = '<div><h1 style="padding: 30px; text-align: center;">草包已被隱藏！</h1></div>'

function removeElems () {
  blocklist.map(function (text) {
    $('#pagelet_timeline_main_column div:contains(' + '"' + text + '"' + ')').children('.userContentWrapper').html(templateHtml)
    $('#pagelet_timeline_main_column p:contains(' + '"' + text + '"' + ')').children('.userContentWrapper').html(templateHtml)
    $('#pagelet_timeline_main_column span:contains(' + '"' + text + '"' + ')').children('.userContentWrapper').html(templateHtml)
    $('#pagelet_timeline_main_column a:contains(' + '"' + text + '"' + ')').children('.userContentWrapper').html(templateHtml)

    $('#contantArea div:contains(' + '"' + text + '"' + ')').children('.userContentWrapper').html(templateHtml)
    $('#contantArea p:contains(' + '"' + text + '"' + ')').children('.userContentWrapper').html(templateHtml)
    $('#contantArea span:contains(' + '"' + text + '"' + ')').children('.userContentWrapper').html(templateHtml)
    $('#contantArea a:contains(' + '"' + text + '"' + ')').children('.userContentWrapper').html(templateHtml)
  })
}

$('#pagelet_timeline_main_column').bind('DOMSubtreeModified', function (event) {
  removeElems()
})

$('#content').bind('DOMSubtreeModified', function (event) {
  removeElems()
})
