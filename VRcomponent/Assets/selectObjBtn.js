#pragma strict
var text0 : UI.Text;
var obj0 : GameObject;
var obj1 : GameObject;
var obj2 : GameObject;
private var idx : int = 0;
private var itemNum : int = 3;
function Start () {

}

function Update () {
	obj0.SetActive(false);
	obj1.SetActive(false);
	obj2.SetActive(false);
	switch(idx)
	{
		case(0):
			obj0.SetActive (true);
			text0.text= obj0.name;
			break;
		case(1):
			obj1.SetActive (true);
			text0.text= obj1.name;
			break;
		case(2):
			obj2.SetActive (true);
			text0.text= obj2.name;
			break;
		default:
			break;
	}		
}

 function prevBtn() {
 	idx = idx + (itemNum-1);
 	idx = idx%itemNum;
 }

 function nextBtn() {
 	idx++;
 	idx = idx%itemNum;
 }