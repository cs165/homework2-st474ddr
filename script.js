// TODO(you): Write the JavaScript necessary to complete the homework.

//選擇
function choose(event) 
{
  const clicked = event.currentTarget;
  //console.log(clicked);
  const item = clicked.parentElement;
  //console.log(item.dataset.choiceId);
  var score;
  unselect(item.dataset.questionId);
  
  //freeBoxes.push(item.dataset.choiceId);
 
  if(item.dataset.questionId == "one")
  {
	  freeBoxes.splice(0,1);
	  freeBoxes.splice(0,0,item.dataset.choiceId);  
  }
  if(item.dataset.questionId == "two")
  {
	  freeBoxes.splice(1,1);
	  freeBoxes.splice(1,0,item.dataset.choiceId); 
  }
  if(item.dataset.questionId == "three")
  {
	  freeBoxes.splice(2,1);
	  freeBoxes.splice(2,0,item.dataset.choiceId); 
  }
  //console.log(freeBoxes);
  switch(item.dataset.questionId)
  {
	  case "one" :
	  	one = 1;
	  	break;
	  case "two" :
	 	 two = 1;
	  	break;
      case "three" :
	 	 three = 1;
	 	 break;
  }
  //console.log("one:"+ one + " two: "+two+" three: "+three);
  const checkbox = item.querySelector('.checkbox');
  checkbox.src = check;
  item.style.opacity = 1;
  item.style.backgroundColor = "#cfe3ff";
  if(one == 1 && two == 1 && three == 1)
  {
	  //console.log("done");
	  //計算分數
	  var repeat = freeBoxes.filter(function(element, index, arr){
   		 return arr.indexOf(element) !== index;
});
 	  if(repeat == "")
	  {
			//console.log("no repeat");
			score = freeBoxes[0];
	  }
	  else
	  {
		    score = repeat[0];
	  }
	 // console.log(repeat);
	  ShowRes(score);
  }
}

//沒被選到的
function unselect(questionId)
{
	//console.log(questionId);
	allQuestion = document.querySelectorAll('div[data-question-id=' + questionId + ']');
  	for (let item of allQuestion)
	{
		const checkbox = item.querySelector('.checkbox');
		checkbox.src = uncheck;
		item.style.background = '#f4f4f4';
		item.style.opacity = 0.6;
	}
}

function ShowRes(res)
{
	console.log(res);
	for (const choice of choices)
  	{
       choice.removeEventListener('click', choose);
  	}
	const article = document.querySelector('article');
	const Section = document.createElement('section');
	Section.classList.add('result');
	article.appendChild(Section);
	const resultContainer = document.querySelector('.result');
	const header = document.createElement('h1');
		header.textContent = 'You got: ' + RESULTS_MAP[res].title;
	const content = document.createElement('p');
		content.textContent = RESULTS_MAP[res].contents;
	const resultButton = document.createElement('button');
	resultButton.textContent = 'Restart quiz';
	resultButton.addEventListener('click', reload);

	resultContainer.appendChild(header);
	resultContainer.appendChild(content);
	resultContainer.appendChild(resultButton);
}

function reload()
{
	window.location.reload();
}

// ----
// MAIN
// ----
const check = "images/checked.png";
const uncheck = "images/unchecked.png";
const checkboxes = document.querySelectorAll('.checkbox');
const choices=document.querySelectorAll('section.choice-grid > div');
const freeBoxes = ["one","two","three"];
var one,two,three;

for (const box of checkboxes) {
  box.addEventListener('click', choose);
}
// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.
