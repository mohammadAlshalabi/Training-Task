"use strict";

function shortenUrl() {
  var shortenDiv = document.getElementsByClassName('add_links')[0];
  var url = document.forms['shorten']['url'].value;
  var shortenAPICall = "https://cu8.in/api?action=short&urls=|".concat(url, "|");
  console.log('hello');
  console.log(shortenDiv);
  fetch(shortenAPICall).then(function (response) {
    return response.json();
  }).then(function (data) {
    var node = document.createElement('div');
    var originalUrl = document.createElement('p');
    var shortenUrlText = document.createElement('p');
    var copyButton = document.createElement('button');
    originalUrl.textContent = url;
    node.className = 'new_item';
    shortenUrlText.className = 'shorten_url';
    shortenUrlText.textContent = data.data.shortUrl.secure;
    copyButton.textContent = 'Copy';
    copyButton.id = 'copy';
    node.append(originalUrl, copyButton, shortenUrlText);
    shortenDiv.appendChild(node);
    document.getElementById('copy').setAttribute('onclick', 'copyUrl()');
  })["catch"](function (error) {
    return console.log(error);
  });
}

function copyUrl() {
  var url = document.getElementsByClassName('shorten_url')[0].innerHTML;
  navigator.clipboard.writeText(url).then(function () {
    var button = document.getElementById('copy');
    button.textContent = 'Copied!';
    button.style.backgroundColor = 'hsl(257, 27%, 26%)';
  })["catch"](function (error) {
    return error;
  });
}