﻿#pragma strict

function Start () {
	yield WaitForSeconds(1);
	Destroy(this.gameObject);
}
