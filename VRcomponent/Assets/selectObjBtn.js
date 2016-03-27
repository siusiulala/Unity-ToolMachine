#pragma strict
var text0 : UI.Text;
var obj0 : GameObject;
var obj1 : GameObject;
var obj2 : GameObject;
private var idx : int=0;
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
			text0.text="s";
			break;
		case(1):
			obj1.SetActive (true);
			break;
		case(2):
			obj2.SetActive (true);
			break;
		default:
			break;
	}		
}

 function prevBtn() {
 	idx--;
 	idx = idx%3;
 }

 function nextBtn() {
 	idx++;
 	idx = idx%3;
 }