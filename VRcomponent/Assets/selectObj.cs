using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class selectObj : MonoBehaviour {
	public Dropdown dropDown;
	public GameObject obj0,obj1,obj2;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		obj0.SetActive(false);
		obj1.SetActive(false);
		obj2.SetActive(false);
		switch(dropDown.value)
		{
		case(0):
			obj0.SetActive (true);
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
}
