const minhaVariavel = 'o que sera que dá'

function myFunction() {
	document.getElementById("play").innerHTML = minhaVariavel;
}

function toqueDJ() {
	/*
	Tocar audios
	*/
	/*
	document.getElementById("obarro").play();
	document.getElementById("obarrinho").play();
	document.getElementById("obarrao").play();
	*/
	/*
	Mudar texto de PLAY para PAUSE
	*/
	const largue = document.getElementById("largue");
	const obarro = document.getElementById("obarro")
	const obarrinho = document.getElementById("obarrinho")
	const obarrao = document.getElementById("obarrao")
	
   if (largue.textContent == "TOCAR")
   {
       largue.textContent = "PAUSAR";
	obarro.play();
	obarrinho.play();
	obarrao.play();
   }
   else 
   {
     largue.textContent = "TOCAR";
	obarro.pause();
	obarrinho.pause();
	obarrao.pause();
   }
}

function desligaDJ() {
	var obarro = document.getElementById("obarro");
	var obarrinho = document.getElementById("obarrinho");
	var obarrao = document.getElementById("obarrao")
		
		obarro.pause();
		obarro.currentTime = 0;
		obarrinho.pause();
		obarrinho.currentTime = 0;
		obarrao.pause();
		obarrao.currentTime = 0;

	var ol = document.getElementById("largue");
		
	if (ol.textContent == "PAUSAR")
	{
		ol.textContent = "TOCAR";
	}
}

