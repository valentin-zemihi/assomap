/**dateToStringFR : converti la date jquerry en un string au format français*/
function dateToStringFR(date) {
	var temp = date.getDate()+" "
	switch (date.getMonth()) {
		case 0 :
			temp = temp+"janvier"
			break ;
		case 1 :
			temp = temp+"février"
			break ;
		case 2 :
			temp = temp+"mars"
			break ;
		case 3 :
			temp = temp+"avril"
			break ;
		case 4 :
			temp = temp+"mai"
			break ;
		case 5 :
			temp = temp+"juin"
			break ;
		case 6 :
			temp = temp+"juillet"
			break ;
		case 7 :
			temp = temp+"août"
			break ;
		case 8 :
			temp = temp+"septembre"
			break ;
		case 9 :
			temp = temp+"octobre"
			break ;
		case 10 :
			temp = temp+"novembre"
			break ;
		case 11 :
			temp = temp+"décembre"
			break ;
		default :
			console.log("Error in switch dateToStringFR : date.gateMonth() = "+date.getMonth())
	}
	temp = temp+" "+date.getFullYear() ;
	return temp ;
}

/**createAddHTMLBasicElement : crée et ajoute une élément html
* type : type d'élément HTML à créer
* id : id de l'élément HTML créé
* cla : class de l'élément HTML créé
* idLocation : id de l'élément HTML où ajouter le nouvelle élément HTML
*/
function creaddBasicElement(type, id, cla, txt, img, idLocation) {
	var tempTxt ;
	var tempImg ;

	var element = document.createElement(type) ;

	if(id != null) {element.id = id ;}
	if(cla != null) {element.className = cla ;}
	if(txt != null) {
		tempTxt = document.createTextNode(txt) ;
		element.appendChild(tempTxt) ;
	}
	if (img != null) {
		tempImg = document.createElement("img") ;
		tempImg.src = img ;
		if (detailMode) {tempImg.className = "btnLogoAsso" ;}
		element.appendChild(tempImg) ;
	}

	document.getElementById(idLocation).appendChild(element) ;
}

function creaddAElement (id, cla, link, txt, idLocation) {
	var tempTxt ;

	var element = document.createElement("a") ;
	if(id != null) {element.id = id ;}
	if(cla != null) {element.className = cla ;}
	if(link != null) {element.href = link ;}
	if(txt != null) {
		tempTxt = document.createTextNode(txt) ;
		element.appendChild(tempTxt) ;
	}

	document.getElementById(idLocation).appendChild(element) ;
}

function creaddTextNode(txt, idLocation) {
	var tempTxt = document.createTextNode(txt) ;
	console.log(idLocation) ;
	document.getElementById(idLocation).appendChild(tempTxt) ;
}