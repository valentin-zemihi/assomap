var isActive = false ; //isActive = false, master or map

window.onload = function()
{
	if (mobilecheck()) {
		$("#base").className = "container-fluid" ;
	}
	else {
		$("#base").className = "container" ;
	}

	if (document.title == "Accueil - Association MAP" || document.title == "Présentation Asso MAP - Association MAP") {
		initializeBDDNEWS() ;
		initializeFiveBigNews() ;
	}

	if (document.title == "Actualités - Asso MAP") {
		initializeBDDNEWS() ;

		initializeFiveBigNews() ;
		initializeNews() ;
	}
}

window.onresize = function() {
	if (mobilecheck()) {
		document.getElementById('base').className = "container-fluid" ;
	}
	else {
		document.getElementById('base').className = "container" ;
	}
}

function activeMaster() {
	if(!isActive) {
		$("#btnAccordionMaster").addClass("active") ;
		isActive = "master" ;
	}
	else if (isActive == "asso") {
		$("#btnAccordionMaster").addClass("active") ;
		$("#btnAccordionAsso").removeClass("active") ;
		isActive = "master" ;
	}
	else {
		$("#btnAccordionMaster").removeClass("active") ;
		isActive = false ;
	}
}

function activeMAP() {
	if(!isActive) {
		$("#btnAccordionAsso").addClass("active") ;
		isActive = "asso" ;
	}
	else if (isActive == "master") {
		$("#btnAccordionAsso").addClass("active") ;
		$("#btnAccordionMaster").removeClass("active") ;
		isActive = "asso" ;
	}
	else {
		$("#btnAccordionAsso").removeClass("active") ;
		isActive = false ;
	}
}

/*---Specific tools---*/
//Retourne True si le sité est déployé sur un mobile
function mobilecheck() {
	var temp = false ;
	if (window.innerWidth <= 1000) {temp = true ;}
	return temp ;
}