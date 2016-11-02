
w3IncludeHTML();

var addthis_config = addthis_config||{};
		addthis_config.pubid = 'ra-58167a57b6abfd7e';

(function($) {
	"use strict";

	if($('.carousel').length > 0) {
		$('.testimonials-slider').bxSlider({
	    slideWidth: 800,
	    minSlides: 1,
	    maxSlides: 1,
	    slideMargin: 32,
	    auto: true,
	    autoControls: true
	  });
	}
})(jQuery);

$(window).load(function(){

	//Localizations
	if (location.hash) {
		String.locale = location.hash.substr(1);
	}
	var localize = function (string, fallback) {
		var localized = string.toLocaleString();
		if (localized !== string) {
			return localized;
		} else {
			return fallback;
		}
	};

	var slide1 = $("#slide1"),
			slide2 = $("#slide2"),
			slide3 = $("#slide3");
	switch(String.locale) {
		case 'en-US':
			slide1.attr("src", "images/en_donador.jpg");
			slide2.attr("src", "images/en_donacion.jpg");
			slide3.attr("src", "images/en_voluntario.jpg");
			break;
		case 'de':
			slide1.attr("src", "images/de_donador.jpg");
			slide2.attr("src", "images/de_donacion.jpg");
			slide3.attr("src", "images/de_voluntario.jpg");
			break;
		default:
			slide1.attr("src", "images/es_donador.jpg");
			slide2.attr("src", "images/es_donacion.jpg");
			slide3.attr("src", "images/es_voluntario.jpg");
			break;
	}

  document.documentElement.dir = localize("%locale.dir", document.documentElement.dir);
  document.documentElement.lang = String.locale || document.documentElement.lang;

  //Nav
  $("#nav_acerca").text(localize("%nav_acerca", $("#nav_acerca").text()));
  $("#nav_cultura").text(localize("%nav_cultura", $("#nav_cultura").text()));
  $("#nav_sitemap").text(localize("%nav_sitemap", $("#nav_sitemap").text()));
  $("#nav_contacto").text(localize("%nav_contacto", $("#nav_contacto").text()));
  $("#nav_educacion").text(localize("%nav_educacion", $("#nav_educacion").text()));
  $("#nav_educacion_sobre").text(localize("%nav_educacion_sobre", $("#nav_educacion_sobre").text()));
  $("#nav_educacion_temas").text(localize("%nav_educacion_temas", $("#nav_educacion_temas").text()));
  $("#nav_educacion_mundo").text(localize("%nav_educacion_mundo", $("#nav_educacion_mundo").text()));
  $("#nav_educacion_eventos").text(localize("%nav_educacion_eventos", $("#nav_educacion_eventos").text()));
  $("#nav_educacion_redes").text(localize("%nav_educacion_redes", $("#nav_educacion_redes").text()));
  $("#nav_educacion_asociados").text(localize("%nav_educacion_asociados", $("#nav_educacion_asociados").text()));
  $("#nav_ciencias").text(localize("%nav_ciencias", $("#nav_ciencias").text()));
  $("#nav_ciencias_naturales").text(localize("%nav_ciencias_naturales", $("#nav_ciencias_naturales").text()));
  $("#nav_ciencias_sociales").text(localize("%nav_ciencias_sociales", $("#nav_ciencias_sociales").text()));
  $("#nav_ciencias_tecnologia").text(localize("%nav_ciencias_tecnologia", $("#nav_ciencias_tecnologia").text()));
  $("#nav_ciencias_somos").text(localize("%nav_ciencias_somos", $("#nav_ciencias_somos").text()));
  $("#nav_ciencias_trabajamos").text(localize("%nav_ciencias_trabajamos", $("#nav_ciencias_trabajamos").text()));
  $("#nav_ciencias_subdirectora").text(localize("%nav_ciencias_subdirectora", $("#nav_ciencias_subdirectora").text()));
  $("#nav_ciencias_oficinas").text(localize("%nav_ciencias_oficinas", $("#nav_ciencias_oficinas").text()));
  $("#nav_ciencias_estrategia").text(localize("%nav_ciencias_estrategia", $("#nav_ciencias_estrategia").text()));
  $("#nav_ciencias_programas").text(localize("%nav_ciencias_programas", $("#nav_ciencias_programas").text()));
  $("#nav_ciencias_internacionales").text(localize("%nav_ciencias_internacionales", $("#nav_ciencias_internacionales").text()));
  $("#nav_ciencias_centros").text(localize("%nav_ciencias_centros", $("#nav_ciencias_centros").text()));
  $("#nav_ciencias_catedras").text(localize("%nav_ciencias_catedras", $("#nav_ciencias_catedras").text()));
  $("#nav_ciencias_redes").text(localize("%nav_ciencias_redes", $("#nav_ciencias_redes").text()));
  $("#nav_ciencias_contactenos").text(localize("%nav_ciencias_contactenos", $("#nav_ciencias_contactenos").text()));

  $("#footer_title").text(localize("%footer_title", $("#footer_title").text()));
  $("#footer_acerca").text(localize("%footer_acerca", $("#footer_acerca").text()));
  $("#footer_educacion").text(localize("%footer_educacion", $("#footer_educacion").text()));
  $("#footer_ciencias").text(localize("%footer_ciencias", $("#footer_ciencias").text()));
  $("#footer_cultura").text(localize("%footer_cultura", $("#footer_cultura").text()));
  $("#footer_sitemap").text(localize("%footer_sitemap", $("#footer_sitemap").text()));
  $("#footer_contacto").text(localize("%footer_contacto", $("#footer_contacto").text()));

  $("#derechos").text(localize("%derechos", $("#derechos").text()));

  $("#donacion").text(localize("%donacion", $("#donacion").text()));
  $("#donador").text(localize("%donador", $("#donador").text()));
  $("#voluntario").text(localize("%voluntario", $("#voluntario").text()));

	if($('.carousel').length == 0) {
		window.setTimeout(function(){
			$('body')
			 .append($('<script>')
			 .attr('type', 'text/javascript')
			 .attr('src', "http://s7.addthis.com/js/250/addthis_widget.js#"));
		 }, 1000);
	 }

});
