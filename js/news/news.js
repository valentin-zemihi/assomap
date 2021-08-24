var BDDNEWS = [] ;
var bigFive = [] ;
/*
Article (title, author, date, thumbnail, banner,  leadParagraph, text)
Date(year, month, day, hours, minutes, seconds, milliseconds)
*/

/***Danger : Attention au classement des articles dans la base de donnée***/

function initializeBDDNEWS() {
	var selectedBigFive = 0 ;
	var stopLoopBigFive = false ;
	var iteLoopBigFive ;
	var isImportant ;

	var temp ;
	var tempTag ;

	temp = new Article("[News importante 1]",
		"Rédacteur Asso MAP",
		new Date(2021, 5, 28),
		null,
		null,
		"[Chapeau news importante 1]",
		"[Texte news importante 1]",
		["Important"]) ;
	BDDNEWS[BDDNEWS.length] = temp ;
	temp = new Article("Premier pas sur la Lune",
		"Valentin Z.",
		new Date(1969, 6, 21),
		null,
		null,
		"A une époque sans smartphone ni internet, trois hommes, guidés par les plus brillants esprits américains, soutenu par la puissante industrie de cette nation, vont repousser les limites de l'humanité et marcher sur la Lune.",
		"Le 21 juillet 1969, Niel A. Armstrong fait un petit pas et touche le sol lunaire. Le 21 juillet 1969, l'humanité fait un grand pas quittant sa planète pour atteindre son satellite.",
		["Faux"]) ;
	BDDNEWS[BDDNEWS.length] = temp ;
	temp = new Article ("[New importante 2]",
		"Rédacteur Asso MAP",
		new Date(2021, 5, 29),
		null,
		null,
		"[Chapeau news importante 2]",
		"[Texte news importante 2]",
		["Important"]) ;
	BDDNEWS[BDDNEWS.length] = temp ;
	temp = new Article ("[New importante 3]",
		"Rédacteur Asso MAP",
		new Date(2021, 5, 30),
		null,
		null,
		"[Chapeau news importante 3]",
		"[Texte news importante 3]",
		["Important"]) ;
	BDDNEWS[BDDNEWS.length] = temp
	temp = new Article ("[New importante 4]",
		"Rédacteur Asso MAP",
		new Date(2021, 6, 6),
		null,
		null,
		"[Chapeau news importante 4]",
		"[Texte news importante 4]",
		["Important", "Newsletter"]) ;
	BDDNEWS[BDDNEWS.length] = temp ;
	temp = new Article("[New importante 5]",
		"Rédacteur Asso MAP",
		new Date(2021, 6, 9),
		null,
		null,
		"[Chapeau news importante 5]",
		"[Texte news importante 5]",
		["Important"]) ;
	BDDNEWS[BDDNEWS.length] = temp ;

	iteLoopBigFive = BDDNEWS.length-1 ;

	while (!stopLoopBigFive && selectedBigFive < 5 && iteLoopBigFive >= 0) {
		isImportant = false ;

		tempTag = BDDNEWS[iteLoopBigFive].tag

		for (var i = 0; i < tempTag.length; i++) {
			if(tempTag[i] == "Important"){isImportant = true ;}
		}

		if (isImportant) {
			bigFive[selectedBigFive] = BDDNEWS[iteLoopBigFive] ;
			++selectedBigFive ;
		}

		iteLoopBigFive-- ;
	}

}

function initializeFiveBigNews() {
	var tempDate ;

	for (var i = 0; i < bigFive.length; i++) {
		//creaddBasicElement(type, id, cla, txt, img, idLocation) ;
		creaddBasicElement("div", "zoneBNNews"+i, "row divNews", null, null, "bigNews"+i) ;
			creaddBasicElement("div", "zoneBNThumbnail"+i, "col-2 tCThumbnail", null, null, "zoneBNNews"+i) ;
			creaddBasicElement("div", "zoneBNTxt"+i, "col-10 divNewsTxt", null, null, "zoneBNNews"+i)
				/*Row titre*/
				creaddBasicElement("div", "zoneBNNewsTitle"+i, "row", null, null, "zoneBNTxt"+i) ;
					/*Titre*/
					creaddBasicElement("div", "newsBNTitle"+i, "bigNewsTitle", bigFive[i].title, null, "zoneBNNewsTitle"+i) ;
				/*Row auteur & date*/
				creaddBasicElement("div", "zoneBNAuthorDate"+i, "row", null, null, "zoneBNTxt"+i) ;
					/*Auteur & date*/
					tempDate = dateToStringFR(bigFive[i].date) ;
					creaddBasicElement("div", "authorBNDate"+i, "newsAuthorDate", "Par "+bigFive[i].author+", publié le "+tempDate, null, "zoneBNAuthorDate"+i) ;
				/*Row leadParagraph*/
				creaddBasicElement("div", "zoneBNLeadPara"+i, "row", null, null, "zoneBNTxt"+i) ;
					/*leadParagraph*/
					creaddBasicElement("div", "BNLeadPara"+i, "newsLeadPara", bigFive[i].leadParagraph, null, "zoneBNLeadPara"+i)
	}
}

function initializeNews() {
	var isImportant ;

	var tempDate ;
	var tempClass ;
	var tempTag ;
	var tempIdLocation ;

	for (var i = BDDNEWS.length - 1; i >= 0; i--) {
		tempTag = BDDNEWS[i].tag
		isImportant = false ;
		for (var j = 0; j < tempTag.length; j++) {
			if(tempTag[j] == "Important"){isImportant = true ;}
		}
		//creaddBasicElement(type, id, cla, txt, img, idLocation) ;
		if (isImportant) {tempClass = "" ;}
		else {tempClass = "divNewsTxt" ;}
		creaddBasicElement("div", "zoneNews"+i, "row divNews "+tempClass, null, null, "listNews") ;
		if (isImportant) {
			creaddBasicElement("div", "zoneThumbnail"+i, "col-2 tCThumbnail", null, null, "zoneNews"+i) ;
			creaddBasicElement("div", "zoneTxt"+i, "col-10 divNewsTxt", null, null, "zoneNews"+i) ;
			
			tempIdLocation = "zoneTxt"+i ;
		}
		else {tempIdLocation = "zoneNews"+i ;}
			/*Row titre*/
			creaddBasicElement("div", "zoneNewsTitle"+i, "row", null, null, tempIdLocation) ;
				/*Titre*/
				if (isImportant) {tempClass = "bigNewsTitle" ;}
				else {tempClass = "newsTitle" ;}
				creaddBasicElement("div", "newsTitle"+i, tempClass, BDDNEWS[i].title, null, "zoneNewsTitle"+i) ;
			/*Row auteur & date*/
			creaddBasicElement("div", "zoneAuthorDate"+i, "row", null, null, tempIdLocation) ;
				/*Auteur & date*/
				tempDate = dateToStringFR(BDDNEWS[i].date) ;
				creaddBasicElement("div", "authorDate"+i, "newsAuthorDate", "Par "+BDDNEWS[i].author+", publié le "+tempDate, null, "zoneAuthorDate"+i)
			/*Row leadParagraph*/
			creaddBasicElement("div", "zoneLeadPara"+i, "row", null, null, tempIdLocation) ;
				/*LeadParagraph*/
				creaddBasicElement("div", "leadParagraph"+i, "newsLeadPara", BDDNEWS[i].leadParagraph, null, "zoneLeadPara"+i)
	}
}