$(document).ready(function(){

	/*Elementos a Ocultar*/
	$("#searcher, #searcher .search-list, #faderLayer, #searcher .search-list li, #inputRow").hide();

	/*Boton de Busqueda*/
	$("#search").click(function(e){
		e.preventDefault();
		$("#searcher").show();
		$("#inputRow").slideDown();
		$("#faderLayer").fadeIn();
		$("#inputSearch").focus();
	});

	/*Boton Cerrar Busqueda*/
	$("#close").click(function(e){
		e.preventDefault();
		$("#inputRow").slideUp(function(){$("#searcher").hide();});		
		$("#faderLayer").fadeOut();
		$("#searcher .search-list li").hide();
		$("#inputSearch").val("");
		$(document).scrollTop(0);
	});

	/*Evento Keyup Input Busqueda*/
	$("#inputSearch").keyup(function(){
		var $this = $(this);
		var $thisVal = $this.val();
		$("#searcher .search-list a").each(function(){
			var str = $(this).text();
			if (str.toLowerCase().indexOf($thisVal) >= 0 && $thisVal.length > 0){
				$(this).closest("ul").show();
				$(this).closest("li").slideDown();
				$(this).unhighlight().highlight($thisVal);
				$(document).scrollTop(0);			
			} else {
				$(this).unhighlight().closest("li").slideUp();			
			}
		});
	});

});