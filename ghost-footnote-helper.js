var content=document.getElementById('footnoteHelper');
var index=0;
walkTree(content)

function walkTree(node) {
  if(node.tagName=== 'A') {
    var textC=node.textContent
    var length=textC.length;
    var firstLetter=textC.charAt(0);
    var lastLetter=textC.charAt(length-1);
    if(firstLetter==='['&&lastLetter===']'){
      var content=textC.slice(1, (length-1));
      node.id= 'fnref-'+ content;
      var footnotes=document.getElementById('footnoteList').getElementsByTagName("li");
      var aElem= document.createElement('a');
      aElem.href=("#fnref-"+content+"");
      aElem.className="footnote-backref";
      aElem.innerText=' ↩︎';
      footnotes[index].childNodes[0].appendChild(aElem);
      index= index+1;
    }
  }
  if(node.children){
    node.childNodes.forEach(function(currentValue, currentIndex, listObj) { 
      walkTree(currentValue);
    });
  }
}
