const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

const MATCH_LIST_ = {
  'there\n': 'their\n',
  'their\n': 'there\n',
  'they\'re\n': 'there\n',
  'There\n': 'Their\n',
  'Their\n': 'There\n',
  'They\'re\n': 'There\n',
  'THERE\n': 'THEIR\n',
  'THEIR\n': 'THERE\n',
  'THEY\'RE\n': 'THERE\n'
};

function transformTextNodes(node) {
  // TODO(you): Implement this function! See HW spec for details.
  //console.log(node.childNodes);
  //nodeType = 1 代表Node.ELEMENT_NODE
  //標籤(如:<p>/<div>/<body>)
  //console.log(node.nodeType);
  for(const childNode of node.childNodes) {
		transformTextNodes(childNode);
	}
  //nodeType = 3 代表Node.TEXT_NODE
  //裡面的文字(包含換行和空格)
  if(node.nodeType == 3)
  {
	  //console.log(node.textContent.trim());
	  //消空格
	  var text = node.textContent.trim();
	  var chgWord = text.split(' ');
	  //console.log(chgWord);
	  for(var i=0; i<chgWord.length; i++) 
	  {
			if(MATCH_LIST[chgWord[i]] != undefined) 
			{
				chgWord[i] = MATCH_LIST[chgWord[i]];
			}
			else if(MATCH_LIST_[chgWord[i]] != undefined) 
			{
				chgWord[i] = MATCH_LIST_[chgWord[i]];
			}
			if(chgWord[i] != "\n") 
			{
				chgWord[i] = chgWord[i]+' ';
			}
	  }
			node.textContent = chgWord.join('');
			//console.log(node.textContent);
  }
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
//console.log('Evil extension loaded!');

//console.log('Extension updated');