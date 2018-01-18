module.exports = function ($) {
	$('li.chapter').each(function (i, elem) {
		var li = $(elem);
		if (li.text().indexOf('GET') > 0) {
			var newTxt = li.children().first().html().replace("GET", "<code class=\"get\">GET </code>");
			li.children().first().html(newTxt);
		}
		else if (li.text().indexOf('POST') > 0) {
			var newTxt = li.children().first().html().replace("POST", "<code class=\"post\">POST</code>");
			li.children().first().html(newTxt);
		}
		else if (li.text().indexOf('DELETE') > 0) {
			var newTxt = li.children().first().html().replace("DELETE", "<code class=\"delete\">DEL </code>");
			li.children().first().html(newTxt);
		}
		else if (li.text().indexOf('PUT') > 0) {
			var newTxt = li.children().first().html().replace("PUT", "<code class=\"put\">PUT </code>");
			li.children().first().html(newTxt);
		}
		else if (li.text().indexOf('PATCH') > 0) {
			var newTxt = li.children().first().html().replace("PUT", "<code class=\"patch\">PATCH </code>");
			li.children().first().html(newTxt);
		}
	});
	var title = $('title').text();

	if(title.indexOf(' · GitBook')  > 0) {
		var newTitle = title.replace(' · GitBook', '');
		$('title').text(newTitle);
	}

	return $.html();
}
