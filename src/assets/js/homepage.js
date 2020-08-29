function shortenUrl() {
	const shortenDiv = document.getElementsByClassName('add_links')[0];
	const url = document.forms['shorten']['url'].value;

	const shortenAPICall = `https://cu8.in/api?action=short&urls=|${url}|`;
	console.log('hello');
	console.log(shortenDiv);

	fetch(shortenAPICall)
		.then(response => response.json())
		.then(data => {
			const node = document.createElement('div');
			const originalUrl = document.createElement('p');
			const shortenUrlText = document.createElement('p');
			const copyButton = document.createElement('button');

			originalUrl.textContent = url;
			node.className = 'new_item';
			shortenUrlText.className = 'shorten_url'
			shortenUrlText.textContent = data.data.shortUrl.secure;
			copyButton.textContent = 'Copy';
			copyButton.id = 'copy';
			node.append(originalUrl, copyButton, shortenUrlText);
			shortenDiv.appendChild(node);

			document.getElementById('copy').setAttribute('onclick', 'copyUrl()');
		}).catch(error => console.log(error));
}

function copyUrl() {
	const url = document.getElementsByClassName('shorten_url')[0].innerHTML;
	navigator.clipboard.writeText(url).then(() => {
		const button = document.getElementById('copy');
		button.textContent = 'Copied!';
		button.style.backgroundColor = 'hsl(257, 27%, 26%)';
	}).catch((error => error));
}
