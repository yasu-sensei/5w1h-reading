/** ゲームの配信専用。記録の送信・保存や認証処理は行わない。 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('よんで みつけよう')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
