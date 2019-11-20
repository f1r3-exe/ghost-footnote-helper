var content = document.getElementById('footnoteHelper'); // id of  DOM element surrounding your content
var index = 0;
const fn_charLeft = '['; // First character of a footnote
const fn_charRight = ']'; // Last character of a footnote
const fn_backSymbol = '↩︎'; // Clickable symbol in the footnote (at the end of a page) to jump to the main text
const fn_className = 'footnote-backref'; // Class of icon for custom styling. Do not change it if you use the casper theme

walkTree(content);

function walkTree (node) {
	if (node.tagName === 'A') {
		var textC = node.textContent;
		var length = textC.length;
		var firstLetter = textC.charAt(0);
		var lastLetter = textC.charAt(length - 1);
		if (firstLetter === fn_charLeft && lastLetter === fn_charRight) {
			var content = textC.slice(1, length - 1);
			node.id = 'fnref-' + content;
			var footnotes = document.getElementById('footnoteList').getElementsByTagName('li'); // id of DOM element surrounding your footnote list
			var aElem = document.createElement('a');
			aElem.href = '#fnref-' + content;
			aElem.className = fn_className;
			aElem.innerText = fn_backSymbol;
			footnotes[index].childNodes[0].appendChild(aElem);
			index = index + 1;
		}
	}
	if (node.children) {
		node.childNodes.forEach(function (currentValue, currentIndex, listObj) {
			walkTree(currentValue);
		});
	}
}
