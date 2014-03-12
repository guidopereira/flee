﻿#pragma strict

var isPause = false;
var audioSrc : AudioSource;

function Update(){
	if (Input.GetKeyDown(KeyCode.Escape)){
	
		isPause = !isPause;
		
		if(isPause){
			audioSrc.Pause();
			Time.timeScale = 0;
		}else{
			Time.timeScale = 1;
			audioSrc.Play();
	    }
	}
}

function OnGUI(){
	var MainMenu : Rect = Rect(Screen.width/3, Screen.height/3 - 50, 200, 200);
   if(isPause)
       GUI.Window(0, MainMenu, TheMainMenu, "Pause");
}
 
function TheMainMenu() {
	if(GUILayout.Button("Main Menu")){
		Application.LoadLevel("MainMenu");
		Time.timeScale = 1;
	}
	
	if(GUILayout.Button("Restart")){
		Application.LoadLevel("Game");
		Time.timeScale = 1;
	}
	
	if(GUILayout.Button("Quit")){
		Application.Quit();
	}
}