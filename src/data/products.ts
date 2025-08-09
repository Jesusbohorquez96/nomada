import { Product } from "../types";

export const products: Product[] = [
  {
    id: 1,
    name: "La Hechicera",
    description:
      "PAN BRIDGIE ARTESANAL SELLADO CON MANTEQUILLA DE ROMERO.UN SELECTO Y JUGOSO CORTE DE RES ASADO DURANTE MÁS DE OCHO HORAS.ACOMPAÑADO DE NUESTRA MERMELADA ISLA ROJA, ELABORADA CON PIMIENTOS ROJOS DULCES.CEBOLLA ENCURTIDA QUE REALZA SU SABOR Y TOMATE FRESCO.CORONADA CON NUESTRO FAMOSO QUESO CHEDDAR AMERICANO Y UNA SALSA ASADA ARTESANAL HECHA EN LA CASA DE LA TRIBU.\n\nCREADA PARA DESPERTAR LOS SENTIDOS Y LLEVARNOS EN UN VIAJE GASTRONÓMICO MEDIEVAL.LA HECHICERA OCUPÓ EL 2º LUGAR EN EL FESTIVAL BURGER KINGS, ¡UNA EXPERIENCIA QUE NO TE PUEDES PERDER!",
    prices: {
      solo: 24.0,
      conPapas: 27.0,
      conPapasAdicionales: 30.0,
    },
    image: "/la hechicera.png",
    category: "Hamburguesa",
  },
  {
    id: 2,
    name: "Bocado Sublime",
    description:
      "UN HOMENAJE A LA SIMPLICIDAD Y AL PLACER.CARNE ANCESTRAL DE 170GR.DÚO DE QUESOS FUNDIDOS (CHEDDAR Y MOZZARELLA).SABOR Y CREMOSIDAD EN CADA BOCADO.VEGETALES FRESCOS.TODO EN UN SOLO BOCADO QUE TE TRANSPORTARÁ A UN MUNDO DE SABORES.SENCILLO, PERO ABSOLUTAMENTE SUBLIME.",
    prices: {
      solo: 17.5,
      conPapas: 20.5,
      conPapasAdicionales: 23.5,
    },
    image: "/bocado sublime.png",
    category: "Hamburguesa",
  },
  {
    id: 3,
    name: "La Odisea",
    description:
      "NUESTRA CARNE ANCESTRAL DE 170GR SE COMBINA CON EL SABOR INTENSO DEL QUESO CHEDDAR.CRUJIENTE TOCINETA DOBLE.SE ELEVA A OTRO NIVEL CON CROQUETAS DE QUESO AÑEJADO.SORPRENDENTE TEXTURA DE LA CEBOLLA CRISPY.UNA EXPERIENCIA GASTRONÓMICA QUE SIMPLEMENTE EXPLOTA EN TU PALADAR.",
    prices: {
      solo: 21.5,
      conPapas: 24.5,
      conPapasAdicionales: 27,
    },
    image: "/la odicea.png",
    category: "Hamburguesa",
  },
  {
    id: 4,
    name: "Texicana Aventurera",
    description:
      "LA TEXICANA AVENTURERA ES UNA EXPEDICIÓN DE SABORES CON SU CARNE DOBLE ANCESTRAL DE 170GR. CADA UNA.DÚO DE QUESOS CHEDDAR Y MOZZARELLA.CRUJIENTE TOCINETA DOBLE Y CEBOLLA CRISPY, QUE AGREGAN TEXTURA Y SABOR.INYECCIÓN DE QUESO CHEDDAR QUE SE CONVIERTE EN UNA SORPRESA DELICIOSA.¡ESTA HAMBURGUESA TE LLEVARÁ EN UN VIAJE CULINARIO DIRECTO A TEXAS!",
    prices: {
      solo: 30.5,
      conPapas: 33.5,
      conPapasAdicionales: 36.5,
    },
    image: "/texicana aventurera.png",
    category: "Hamburguesa",
  },
  {
    id: 5,
    name: "La Trinidad",
    description:
      "LA CARNE ANCESTRAL DE 170GR SE COMBINA CON EL SUAVE QUESO MOZZARELLA.SABROSO PULLED PORK Y MADURO EN CUBOS.UNA COMBINACIÓN DE SABORES INSPIRADA EN TRINIDAD.SOUR CREAM, CEBOLLA MORADA Y VEGETALES FRESCOS.PICADA DE CHICHARRÓN PARA UN TOQUE CRUJIENTE.¡UN VIAJE A COSTA RICA EN CADA BOCADO!",
    prices: {
      solo: 26.5,
      conPapas: 29.5,
      conPapasAdicionales: 32.5,
    },
    image: "/la trinidad.png",
    category: "Hamburguesa",
  },
  {
    id: 6,
    name: "Pinchada de Arequipa",
    description:
      "CON UNA JUGOSA CARNE ANCESTRAL DE 170GR, QUESO CHEDDAR, CREMOSO DE POLLO CON MAÍZ Y UNA DOBLE PORCIÓN DE TOCINETA. CADA BOCADO ES UNA EXPERIENCIA DE SABORES ÚNICOS.LA CEBOLLA CRISPY Y LOS VEGETALES APORTAN FRESCURA Y TEXTURA, MIENTRAS QUE LA PICADA DE CHORIZO CARAMELIZADO AGREGA UN TOQUE ESPECIAL.¡DISFRUTA DE UNA EXPERIENCIA CULINARIA QUE TE TRANSPORTARÁ A LOS SABORES TRADICIONALES DE AREQUIPA PERÚ!",
    prices: {
      solo: 26.5,
      conPapas: 29.5,
      conPapasAdicionales: 32.5,
    },
    image: "/pinchada de arequipa.png",
    category: "Hamburguesa",
  },
  {
    id: 7,
    name: "Hilo Tropical",
    description:
      "UNA ODA A LOS SABORES EXÓTICOS.LA CARNE ANCESTRAL DE 170GR SE COMBINA CON EL QUESO CHEDDAR Y MOZZARELLA, CREANDO UNA DELICIOSA COMBINACIÓN.LA TAPA SUPERIOR DEL PAN TE SORPRENDERÁ CON UN GIRO ÚNICO.CADA BOCADO ES UNA EXPLOSIÓN DE SABORES TROPICALES, CON EL PEPERONI Y LA PIÑA ASADA.SE MEZCLAN PERFECTAMENTE CON LA CEBOLLA MORADA Y LOS VEGETALES.UNA EXPERIENCIA CULINARIA QUE TE TRANSPORTARÁ DIRECTAMENTE A HAWÁI, UN LUGAR LLENO DE AUTENTICIDAD.",
    prices: {
      solo: 23.0,
      conPapas: 26.0,
      conPapasAdicionales: 29.0,
    },
    image: "/hilo tropical.png",
    category: "Hamburguesa",
  },
  {
    id: 8,
    name: "Franklin Whiskey",
    description:
      "LA FRANKLIN WHISKEY ES UNA HAMBURGUESA CON CARÁCTER.LA CARNE ANCESTRAL DE 170GR SE COMBINA CON QUESO CHEDDAR Y EL CREMOSO DE QUESO, CREANDO UNA ARMONÍA DE SABORES.LA MERMELADA DE TOCINETA Y LA CEBOLLA CRISPY SE BAÑAN CON UNAS IRRESISTIBLES GOTAS DE JACK DANIEL'S, BRINDANDO UN TOQUE AGRIODULCE Y AHUMADO.UNA EXPERIENCIA CULINARIA QUE TE TRANSPORTA A FRANKLIN, UNA CIUDAD LLENA DE HISTORIA EN EL ESTADO DE WISCONSIN, EE.UU.",
    prices: {
      solo: 26.0,
      conPapas: 29.0,
      conPapasAdicionales: 32.0,
    },
    image: "/franklin whiskey.png",
    category: "Hamburguesa",
  },
  {
    id: 9,
    name: "La Galway",
    description:
      "LA CARNE ANCESTRAL DE 170GR SE COMBINA CON EL QUESO CHEDDAR Y EL QUESO MOZZARELLA, CREANDO UNA COMBINACIÓN DE QUESOS IRRESISTIBLE.LA TOCINETA DOBLE Y EL POLLO EN CUBOS APORTAN VARIEDAD.LA CEBOLLA CRISPY Y LOS VEGETALES AÑADEN FRESCURA.UNA EXPERIENCIA CULINARIA QUE TE TRANSPORTA A GALWAY, UNA CIUDAD LLENA DE AUTENTICIDAD EN IRLANDA.",
    prices: {
      solo: 26.0,
      conPapas: 29.0,
      conPapasAdicionales: 32.0,
    },
    image: "/la galway.png",
    category: "Hamburguesa",
  },
  {
    id: 10,
    name: "Positano Delizia",
    description:
      "LA POSITANO DELIZIA ES UNA OBRA MAESTRA DE SABORES MEDITERRÁNEOS.LA CARNE ANCESTRAL DE 170GR SE COMBINA CON EL QUESO MOZZARELLA, GALLETA DE PARMESANO Y CHAMPIÑONES.LA CEBOLLA CRISPY Y LOS VEGETALES AÑADEN FRESCURA.LA PICADA DE MAZORCA AGREGA UN TOQUE ESPECIAL.UNA EXPERIENCIA CULINARIA QUE EVOCA LOS SABORES DE POSITANO, UNA CIUDAD COSTERA CON ENCANTO EN ITALIA.",
    prices: {
      solo: 27.0,
      conPapas: 30.0,
      conPapasAdicionales: 33.0,
    },
    image: "/positano delizia.png",
    category: "Hamburguesa",
  },
  {
    id: 11,
    name: "Guadalajara Picosa",
    description:
      "LA GUADALAJARA PICOSA ES UNA EXPLOSIÓN DE SABORES PICANTES.LA CARNE ANCESTRAL DE 170GR SE COMBINA CON QUESO CHEDDAR, PULLED PORK Y PICO DE GALLO.EL GUACAMOLE, SOUR CREAM Y MERMELADA DE JALAPEÑOS AÑADEN FRESCURA Y UN TOQUE AGRIODULCE.LOS JALAPEÑOS EMPANADOS APORTAN UN CRUJIENTE ÚNICO.UNA EXPERIENCIA QUE TE LLEVA DIRECTO A MÉXICO, UN PAÍS LLENO DE SABOR Y TRADICIÓN.",
    prices: {
      solo: 29.0,
      conPapas: 32.0,
      conPapasAdicionales: 35.0,
    },
    image: "/guadalajara picosa.png",
    category: "Hamburguesa",
  },
  {
    id: 12,
    name: "Santafé Gaucha",
    description:
      "LA SANTAFÉ GAUCHA ES UNA CELEBRACIÓN DE SABORES PAMPEANOS.LA CARNE ANCESTRAL DE 170GR SE COMBINA CON QUESO MOZZARELLA, QUESO CHEDDAR Y CHORIZO MARIPOSA, CREANDO UNA FUSIÓN EXPLOSIVA.EL CHIMICHURRI CASERO, LA CEBOLLA CRISPY Y LOS VEGETALES FRESCOS COMPLETAN ESTA EXPERIENCIA.UNA HAMBURGUESA QUE TE TRANSPORTA A LAS PAMPAS ARGENTINAS, CON EL AUTÉNTICO ESPÍRITU GAUCHO.",
    prices: {
      solo: 23.0,
      conPapas: 26.0,
      conPapasAdicionales: 29.0,
    },
    image: "/santafe gaucha.png",
    category: "Hamburguesa",
  },
  {
    id: 13,
    name: "La Bergen",
    description:
      "LA BERGEN ES UNA EXPERIENCIA DE SABORES NÓRDICOS.LA CARNE ANCESTRAL DE 170GR SE COMBINA CON EL QUESO CHEDDAR, EL QUESO MOZZARELLA, LA PECHUGA APANADA Y TOCINETA.CREA UNA COMBINACIÓN RICA Y TEXTURA CRUJIENTE.LA CEBOLLA MORADA, LOS VEGETALES Y EL COLE SLAW AÑADEN FRESCURA Y UN TOQUE ESPECIAL.UNA EXPERIENCIA CULINARIA QUE EVOCA LOS SABORES DE BERGEN, UNA CIUDAD CON UNA TRADICIÓN CULINARIA ÚNICA EN NORUEGA.",
    prices: {
      solo: 26.0,
      conPapas: 29.0,
      conPapasAdicionales: 32.0,
    },
    image: "/la bergen.png",
    category: "Hamburguesa",
  },
  {
    id: 14,
    name: "La Santorine",
    description:
      "LA CARNE ANCESTRAL DE 170GR SE COMBINA CON EL CREMOSO DE POLLO.EL CHORIZO MARIPOSA EN BBQ Y LA CEBOLLA CRISPY.DÚO DE QUESOS CHEDDAR Y MOZZARELLA, CREANDO UNA EXQUISITA COMBINACIÓN INSPIRADA EN SANTORINI.UNA ISLA LLENA DE SABORES EN GRECIA LO QUE HACE QUE ESTA HAMBURGUESA SEA VERDADERAMENTE ESPECIAL.CADA BOCADO TE TRANSPORTA DIRECTAMENTE A LAS PLAYAS SOLEADAS DE SANTORINI.",
    prices: {
      solo: 26.0,
      conPapas: 29.0,
      conPapasAdicionales: 32.0,
    },
    image: "/la santorine.png",
    category: "Hamburguesa",
  },
  {
    id: 15,
    name: "Puerto Hamburgo",
    description:
      "LA PUERTO HAMBURGO ES UNA HAMBURGUESA QUE TE TRANSPORTA A LA CREACION DE LA CIUDAD DE HAMBURGO.EN ALEMANIA.DONDE LOS SABORES CLASICOS SE FUSIONAN DE MANERA EXCEPCIONAL.LA CARNE TRIPLE ANCESTRAL DE 1700RC/U SE COMBINA CON EL QUESO CHEDDAR, LA TOCINETA TRIPLE Y LA CEBOLLA CRISPY.CADA BOCADO ES UN VIAJE CULINARIO EN SI MISMO.LLEVANDOTE A LAS RAICES DE LA HAMBURGUESA EN PUERTO HAMBURGO.",
    prices: {
      solo: 38.0,
      conPapas: 41.0,
      conPapasAdicionales: 44.0,
    },
    image: "/puerto hamburgo.png",
    category: "Hamburguesa",
  },
  {
    id: 16,
    name: "Cowboy Texano",
    description:
      "EL COWBOY TEXANO ES UN PERRO CALIENTE CON AUTENTICO SABOR A LA PARRILLA DEL SUROESTE DE ESTADOS UNIDOS.LA SALCHICHA AMERICANA SE COMBINA CON QUESO MOLIDO, TOCINETA CRISPY Y UNA GENEROSA PORCIÓN DE SALSA CHEDDAR PARA CREAR UNA EXPERIENCIA CULINARIA LLENA DE AUDACES SABORES.CADA MORDISCO TE TRANSPORTA DIRECTAMENTE A LAS TIERRAS DEL COWBOY, DONDE LOS SABORES SON TAN GRANDES COMO EL CIELO DE TEXAS.",
    prices: {
      solo: 16.0,
      conPapas: 19.0,
      conPapasAdicionales: 22.0,
    },
    image: "/cowboy texano.png",
    category: "Perros Calientes",
  },
  {
    id: 17,
    name: "Moquegua Quesudo",
    description:
      "EL MOQUEGUA QUESUDO ES UN VIAJE CULINARIO QUE CELEBRA EL QUESO Y EL POLLO EN SU MÁXIMA EXPRESIÓN.LA SALCHICHA AMERICANA SE COMBINA CON UN CREMOSO DE POLLO, TOCINETA Y CEBOLLA CRISPY. PERO LO QUE HACE QUE ESTE PERRO CALIENTE SEA REALMENTE EXCEPCIONAL ES SU BAÑO DE QUESO, QUE SE DERRITE SOBRE CADA INGREDIENTE, CREANDO UNA EXPLOSIÓN DE SABOR EN CADA BOCADO.ESTE PERRO CALIENTE TE LLEVA A MOQUEGUA, UNA CIUDAD EN PERÚ, DONDE EL QUESO Y EL POLLO SON ADORADOS POR SU SABOR INIGUALABLE Y EL BAÑO DE QUESO ES LA JOYA DE SU GASTRONOMÍA.",
    prices: {
      solo: 21.0,
      conPapas: 24.0,
      conPapasAdicionales: 27.0,
    },
    image: "/moquegua quesudo.png",
    category: "Perros Calientes",
  },
  {
    id: 18,
    name: "Puerto de Mérida",
    description:
      "EL PUERTO DE MÉRIDA ES UN AUTÉNTICO FESTÍN DE SABORES INSPIRADO EN LA REGIÓN DEL SUROESTE.LA SALCHICHA AMERICANA SE COMBINA CON UNA DOBLE PORCIÓN DE QUESO CHEDDAR GRATINADO, PULLED PORK, PIMENTÓN EN CUBOS, CEBOLLA CRISPY Y TOCINETA CRISPY, TODO BAÑADO CON UNA SALSA ESPECIAL Y BBQ.ESTE PERRO CALIENTE TE TRANSPORTA A MÉRIDA, UNA CIUDAD LLENA DE AUTENTICIDAD EN MÉXICO, DONDE LOS SABORES DEL SUROESTE SE UNEN PARA CREAR UNA EXPERIENCIA CULINARIA EXTRAORDINARIA.",
    prices: {
      solo: 24.0,
      conPapas: 27.0,
      conPapasAdicionales: 30.0,
    },
    image: "/puerto de merida.png",
    category: "Perros Calientes",
  },
  {
    id: 19,
    name: "San Antonio",
    description:
      "EL SAN ANTONIO ES UN HOMENAJE A LA VIBRANTE CIUDAD DE SAN ANTONIO EN TEXAS, DONDE LOS JALAPEÑOS SON UNA PARTE FUNDAMENTAL DE SU CULTURA CULINARIA.LA SALCHICHA AMERICANA SE COMBINA CON QUESO MOZZARELLA GRATINADO, PULLED PORK, GUACAMOLE, PICO DE GALLO Y MERMELADA DE JALAPEÑOS. TODO ESTO ES CORONADO CON SALSA CHEDDAR Y SOUR CREAM.CADA BOCADO DE ESTE PERRO CALIENTE TE TRANSPORTA A SAN ANTONIO, DONDE LOS SABORES PICANTES Y DELICIOSOS TE HACEN SENTIR COMO EN UNA FIESTA TEXANA LLENA DE ALEGRÍA Y SABOR.",
    prices: {
      solo: 24.5,
      conPapas: 27.5,
      conPapasAdicionales: 30.5,
    },
    image: "/san antonio.png",
    category: "Perros Calientes",
  },
  {
    id: 20,
    name: "El Encanto de Lisboa",
    description:
      "EL ENCANTO DE LISBOA ES UN PERRO CALIENTE QUE TE LLEVA A UN VIAJE CULINARIO POR LOS SABORES DE ESTA ENCANTADORA CIUDAD PORTUGUESA.LA SALCHICHA AMERICANA SE COMBINA CON QUESO CHEDDAR GRATINADO Y SE UNE AL CREMOSO DE POLLO CON MAÍZ Y LAS IRRESISTIBLES RODAJAS DE CHORIZO CARAMELIZADO. TODA ESTA DELICIOSA COMBINACIÓN SE ENCUENTRA SOBRE UNA CAMA DE CEBOLLA CRISPY Y TOCINETA CRISPY.DONDE LOS SABORES SE ENTRELAZAN EN UNA DANZA DE DELICIAS. DESCUBRE EL AUTÉNTICO ENCANTO DE LISBOA A TRAVÉS DE ESTE PERRO CALIENTE QUE DELEITARÁ TUS SENTIDOS.",
    prices: {
      solo: 24.0,
      conPapas: 27.0,
      conPapasAdicionales: 30.0,
    },
    image: "/el encanto de lisboa.png",
    category: "Perros Calientes",
  },
  {
    id: 21,
    name: "Dubrovnik",
    description:
      "EL DELIRIO DE DUBROVNIK ES UNA FIESTA DE SABORES QUE TE TRANSPORTA A ESTA HERMOSA CIUDAD COSTERA, CROATA.ESTE PERRO CALIENTE COMBINA LA SALCHICHA AMERICANA CON TIERNAS TIRAS DE POLLO Y FAJITAS DE RES. TODO CUBIERTO CON UNA DOBLE CAPA DE QUESO CHEDDAR GRATINADO Y QUESO MOZZARELLA.CADA BOCADO ES UN DELIRIO CULINARIO QUE CELEBRA LA AUTENTICIDAD DE DUBROVNIK, DONDE LOS SABORES DE LA CARNE SE FUSIONAN CON EL ENCANTO DE LA CIUDAD Y TE LLEVAN EN UN VIAJE GASTRONÓMICO ÚNICO.",
    prices: {
      solo: 24.0,
      conPapas: 27.0,
      conPapasAdicionales: 30.0,
    },
    image: "/dubrovnik.png",
    category: "Perros Calientes",
  },
  {
    id: 22,
    name: "Bacon de Baviera",
    description:
      "EL BACON DE SAVIERA ES UN TRADITO AL TOCINO DE LA REGIÓN ALEMANA DE SAVIERA. ESTE PERRO CALIENTE COMIDIAL LA SALONCHA AMERICANA CON UN CREMOSO DE QUESO QUE ENVUELVE CADA ROCADO. LUEGO, SE ADREGA LA INVESTIBLE MENNELLADA DE TOCINO Y LA GEBULLA CRISPY PARA UN TOQUE DE ONUIENTE Y DULZURA. CADA MODDISCO ES UN HOMEMÁJE A LA TRADICIÓN DEL TOCINO DE SAVIERA, DOBDE LA AUTENTICIDAD Y LA CALIDAD SE FISIONAN EN UN SOLO SABOR.",
    prices: {
      solo: 21.0,
      conPapas: 24.0,
      conPapasAdicionales: 27.0,
    },
    image: "/bacon de baviera.png",
    category: "Perros Calientes",
  },
  {
    id: 23,
    name: "Peperonni de Nápoles",
    description:
      "EL AUTÉNTICO SABOR SE CELEBRA EN LA CIUDAD ITALIANA DE NÁPOLES Y SU INCONFUNDIBLE PEPERONIU. ESTE PERIOD CALIENTE COMBINA LA SALENCIAL AMERICANA CON QUESO MOZZARELLA DIDLE GRATINADO Y EL AUTÉNTICO PEPERONIU IMPORTADO DE ITALIA. QUE LE DA UN SABOR VERDADERAMENTE INGUALABLE. EL PANNESANO Y LOS CHICANDRONES CRUJIENTES COMPLETAN ESTA EXPERIENCIA CULMARIA QUE TE TRANSPORTA A LAS AUTÉNTICAS PIZZERÍAS DE NÁPOLES.",
    prices: {
      solo: 24.0,
      conPapas: 27.0,
      conPapasAdicionales: 30.0,
    },
    image: "/peperonni de napoles.png",
    category: "Perros Calientes",
  },
  {
    id: 24,
    name: "Le Havre Especial",
    description:
      "NUESTRA TE HAYME ESPECIAL: TE LLEVA DIRECTAMENTE A LAS PINTORESCAS CORTAS DE LE HAYME.FRANCIA. ESTA CABAL DE PAPAS A LA FRANCESA ES UNA OBRA MAESTRA CULINARIA QUE COMBINA LA CRUJIENTE TEXTURA DE LAS PAPAS CON UNA GENEROSA CAPA DE CREMISO DE FOLLO.RODALAS DE CHORIZO,GRANOS DE MAZO DULCE Y QUESO OREDLAR DOBLE BRATNADO.PARA, DABLE UN TOQUE ANN MAS TENTADOR.CORONAMOS ESTE PLATO CON CRUJIENTE TICIMETA.CADA BOCADO ES UN YLAJE A LA AUTENTICIDAD / ELEGANCIA DE LE HAYME",
    prices: {
      solo: 25.0,
    },
    image: "/le havre especial.png",
    category: "Salchipapa Gourmet",
  },
  {
    id: 25,
    name: "Papitas de Lucerna",
    description:
      "NUESTRAS 'PAPITAS DE LUGERNA' SON UN HOMENAJE A LA PINTORESCA CIUDAD SUIZA DE LUGERNA. ESTAS CRUJIENTES PAPITAS FRITAS SIRVEN COMO BASE PARA JUGOSOS CUBOS DE POLLO Y EXQUISITAS FAJITAS DE RES. EL QUESO MOLIDO SE FUSIONA SOBRE LOS INGREDIENTES, CREANDO UN EQUILIBRIO PERFECTO DE SABORES. LAS CEBOLLAS CRISPY AÑADEN UN TOQUE CRUJIENTE Y FRESCO A ESTE DELICIOSO PLATO. DISFRUTA DE ESTA EXPERIENCIA CULINARIA CON UN TOQUE SUIZO EN CADA BOCADO.",
    prices: {
      solo: 25.0,
    },
    image: "/papitas de lucerna.png",
    category: "Salchipapa Gourmet",
  },
  {
    id: 26,
    name: "Papitas de Tequila",
    description:
      "NUESTRAS 'PAPIJAS DE TEQUILA' SON UNA DELICIOSA CREACIÓN QUE NOS TRANSPORTA A TEQUILA, UN PUEBLO ENCANTADOR EN MEXICO. ESTAS CRUJIENTES PAPITAS FRITAS SIRVEN DE CAMA PARA EL PULLED PORK, EL GUACAMOLE, EL PICO DE GALLO Y LA SALSA CHEDDAR, CREANDO UN FESTÍN DE SABORES INSPIRADO EN LA RICA TRADICIÓN CULINARIA DE TEQUILA. EL SOUR CREAM APORTA UNA SUAVIDAD REFRESCANTE, MIENTRAS QUE EL JALAPEÑO APANADO AÑADE UN TOQUE PICANTE QUE TE LLEVA A LAS CALLES HISTÓRICAS DE TEQUILA.",
    prices: {
      solo: 25.0,
    },
    image: "/papitas de tequila.png",
    category: "Salchipapa Gourmet",
  },
  {
    id: 27,
    name: "Papitas de Guanajuato",
    description:
      "NUESTRAS 'PAPITAS DE GUANAJUATO' SON UNA EXPLOSION DE SABORES QUE RINDEN HOMENAJE A GUANAJUATO.UNA CIUDAD PINTORESCA EN MEXICO.LAS PAPITAS FRITAS CRUJIENTES SIRVEN DE BASE PARA UNA MEZCLA DELICIOSA DE PULLED PORK.ROBAJAS DE CHORIZO.QUESO MOLIDO Y TOCHNETA CRISPY.CADA BOCADO ES UNA INMERSION EN LA AUTENTICIDAD Y TRADICION CULINARIA DE GUANAJUATO.DONDE LOS SABORES SON TAN VIBRANTES COMO SU CULTURA",
    prices: {
      solo: 25.0,
    },
    image: "/papitas de guanajuato.png",
    category: "Salchipapa Gourmet",
  },
  {
    id: 28,
    name: "Papitas del Bosque de Montes",
    description:
      "LAS 'PAPITAS DEL BOSQUE DE MONTES' SON UNA DELICIA QUE RINDE HOMENAJE A LA BELLEZA NATURAL DE ESTE BOSQUE SITUADO EN MONTES, UN PUEBLO PINTORESCO EN ESPAÑA. NUESTRAS PAPITAS FRITAS SIRVEN DE LIENZO PARA EL POLLO APANADO EN TIRAS, CUBIERTO DE QUESO MOLIDO Y TOCHKETA CRISPY, Y BAÑADO EN UNA SUAVE SALSA CHEDDAR. CADA BOCADO ES UNA EXPERIENCIA CULINARIA QUE TE TRANSPORTARÁ A LA SERENIDAD Y AUTENTICIDAD DE MONTES, DONDE LA NATURALEZA Y LA GASTRONOMÍA SE ENTRELAZAN DE MANERA PERFECTA.",
    prices: {
      solo: 25.0,
    },
    image: "/papitas del bosque de montes.png",
    category: "Salchipapa Gourmet",
  },
  {
    id: 29,
    name: "Papitas de Huatulco",
    description:
      "LAS 'PAPITAS DE LA TRADICIÓN EN HUATULCO' TE LLEVAN A UN VIAJE CULINARIO POR LAS TRADICIONES CULINARIAS DE ESTE HERMOSO DESTINO DE LA COSTA MEXICANA. NUESTRAS PAPITAS FRITAS SON EL LIENZO PARA UNA MEZCLA ÚNICA DE CHICHARRÓN, MADURITO EN CUBOS Y QUESO MOLIDO. ADEMÁS, CORONAMOS ESTAS DELICIOSAS PAPITAS CON ELOTE CUBIERTO DE SOUR CREAM Y QUESO, UN SABOR QUE RINDE HOMENAJE A LAS RAÍCES AUTÉNTICAS DE HUATULCO. CADA BOCADO TE TRANSPORTA A LAS VIBRANTES FESTIVIDADES Y LA RICA CULTURA DE ESTE LUGAR COSTERO.",
    prices: {
      solo: 26.0,
    },
    image: "/papitas de huatulco.png",
    category: "Salchipapa Gourmet",
  },
  {
    id: 30,
    name: "Las Salchichas de Munich",
    description:
      "NUESTRO 'FESTÍN DE LAS SALCHICHAS EN MÚNICH' TE INVITA A DISFRUTAR DE LA ESENCIA DE LA FAMOSA TRADICIÓN CULINARIA DE MÚNICH, ALEMANIA. ESTAS PAPITAS FRITAS SE CONVIERTEN EN EL LIENZO DE UNA DELICIOSA COMBINACIÓN DE SALCHICHAS DOBLES, BAÑADAS EN UNA CASCADA DE QUESO DERRETIDO Y CORONADAS CON TOCINETA CRISPY. CADA BOCADO ES UN VIAJE DIRECTO A LOS FESTIVALES DE CERVEZA, LA MÚSICA Y LA ALEGRÍA DE LA CIUDAD BÁVARA.",
    prices: {
      solo: 25.0,
    },
    image: "/las salchichas de munich.png",
    category: "Salchipapa Gourmet",
  },
  {
    id: 31,
    name: "Maicero de Villanueva",
    description:
      "NUESTRO 'FESTÍN MAICERO EN VILLANUEVA' TE LLEVA A UN VIAJE CULINARIO POR EL VIBRANTE PUEBLO DE VILLANUEVA EN SANTANDER, COLOMBIA, DONDE EL MAÍZ ES UNA ESTRELLA. ESTE PLATO ESTÁ CUBIERTO DE ABUNDANTE MAÍZ CREMOSO DE POLLO Y QUESO MOZZARELLA GRATINADO. PARA DARLE UN TOQUE ESPECIAL, AÑADIMOS DOS ROSAS DE TOCINETA QUE APORTA UNA EXPLOSIÓN DE SABOR. UN FESTÍN QUE CELEBRA LA AUTENTICIDAD Y LA TRADICIÓN MAICERA DE VILLANUEVA. ADICIONAL PODRÁS AÑADIRLE UNA PORCIÓN DE PAPAS SI LO DESEAS.",
    prices: {
      solo: 21.0,
      conPapas: 25.0,
    },
    image: "/maicero de villanueva.png",
    category: "Especialidades de Maíz",
  },
  {
    id: 32,
    name: "Pompeii Crujiente",
    description:
      "EL 'POMPEII CRUJIENTE' ES UN SÁNDWICH QUE TE TRANSPORTA DIRECTAMENTE A POMPEYA, LA ANTIGUA CIUDAD ITALIANA. ENTRE DOS REBANADAS DE PAN CRUJIENTE, ENCONTRARÁS JUGOSAS TIRAS DE POLLO APANADO, COLE SLOW PARA UN TOQUE REFRESCANTE Y QUESO CHEDDAR PARA ESA CREMOSIDAD IRRESISTIBLE. ESTE PANINI ES UNA EXPLOSIÓN DE SABORES QUE HARÁ ERUPCIÓN EN TU PALADAR, COMO UN VIAJE A LA HISTORIA CULINARIA DE POMPEYA.",
    prices: {
      solo: 16.0,
      conPapas: 19.0,
      conPapasAdicionales: 22.0,
    },
    image: "/pompell crujiente.png",
    category: "Sándwiches",
  },
  {
    id: 33,
    name: "Athena",
    description:
      "'EL ATHENA POLLO DELIGHT' TE LLEVA A LAS CALLES DE ATENAS, LA CUNA DE LA CIVILIZACIÓN. ENTRE DOS REBANADAS DE PAN CRUJIENTE, ENCONTRARÁS UN POLLO CREMOSO CON MAÍZ, QUESO MOZZARELLA QUE SE DERRITE SUAVEMENTE, Y UNA SELECCIÓN DE VEGETALES FRESCOS QUE APORTAN UN TOQUE DE FRESCURA. ESTE SÁNDWICH ES UN PASEO CULINARIO POR ATENAS, UNA CIUDAD LLENA DE HISTORIA Y SABOR EN CADA BOCADO.",
    prices: {
      solo: 16.0,
      conPapas: 19.0,
      conPapasAdicionales: 22.0,
    },
    image: "/athena.png",
    category: "Sándwiches",
  },
  {
    id: 34,
    name: "Marsella Chicken Fusion",
    description:
      "EL 'MARSELLA CHICKEN FUSION' ES UNA COMBINACIÓN DE SABORES QUE RINDE HOMENAJE A LA DIVERSIDAD CULINARIA DE MARSELLA, UNA CIUDAD PORTUARIA EN EL SUR DE FRANCIA. ESTE SÁNDWICH PRESENTA UNA BASE DE CREMOSO DE POLLO, ACOMPAÑADA DE CHAMPIÑONES FRESCOS QUE APORTAN UNA TEXTURA ÚNICA, QUESO BLANCO QUE SE DERRITE SUAVEMENTE, Y UNA SELECCIÓN DE VEGETALES QUE REALZAN SU FRESCURA. CADA BOCADO ES COMO UN PASEO POR LAS CALLES DE MARSELLA, DONDE LOS SABORES SE FUSIONAN EN PERFECTA ARMONÍA.",
    prices: {
      solo: 17.5,
      conPapas: 20.5,
      conPapasAdicionales: 23.5,
    },
    image: "/marsella chicken fusion.png",
    category: "Sándwiches",
  },
  {
    id: 35,
    name: "El Veracruz",
    description:
      "EL 'VERACRUZ PULLED PORK FIESTA' TE TRANSPORTA DIRECTAMENTE A LA COSTA DE VERACRUZ, MÉXICO. ESTE SÁNDWICH REÚNE SUCULENTO PULLED PORK, GUACAMOLE FRESCO, PICO DE GALLO Y UNA GENEROSA CUCHARADA DE SOUR CREAM. CADA BOCADO ES UNA CELEBRACIÓN DE SABORES Y UNA FIESTA EN TU PALADAR. DISFRUTA DE LA AUTÉNTICA COCINA COSTEÑA DE VERACRUZ EN CADA MORDISCO",
    prices: {
      solo: 18.5,
      conPapas: 21.5,
      conPapasAdicionales: 24.5,
    },
    image: "/el veracruz.png",
    category: "Sándwiches",
  },
  {
    id: 36,
    name: "Filet Rosemary",
    description:
      "NUESTRA 'TERRERA EXQUISITA A LA MANTEQUILLA DE ROMERO' ES UN MANJAR PARA LOS AMANTES DE LA CARNE. ESTE DELICIOSO FILET MIGNON DE 300 GRAMOS ES ASADO A LA PERFECCIÓN Y ACOMPAÑADO DE CRUJIENTES PAPAS Y UNA FRESCA ENSALADA. PERO LO QUE REALMENTE HACE QUE ESTE PLATILLO SEA EXTRAORDINARIO ES EL CHIMICHURRI CASERO Y EL BAÑO EN NUESTRA AUTÉNTICA MANTEQUILLA ANCESTRAL DE ROMERO. CADA BOCADO ES UNA EXPERIENCIA CULINARIA ÚNICA QUE DELEITARÁ TUS SENTIDOS Y TE LLEVARÁ A UN VIAJE GASTRONÓMICO INOLVIDABLE.",
    prices: {
      solo: 40.0,
    },
    image: "/filet rosemary.png",
    category: "Parrilla",
  },
  {
    id: 37,
    name: "Pincho con Altura",
    description:
      "NUESTRO PINCHO CON ALTURA ES UNA EXPERIENCIA CULINARIA ÚNICA CON UNA MEZCLA PERFECTA DE CARNE, POLLO, CEBOLLA, PIMENTÓN Y PAPITAS. ESTE PINCHO TE LLEVARÁ A SABORES QUE DESAFÍAN LA GRAVEDAD. CADA BOCADO ES UN VIAJE A LAS ALTURAS DE LA GASTRONOMÍA, DONDE LOS INGREDIENTES SE COMBINAN EN ARMONÍA PARA CREAR UN FESTÍN COLGANTE QUE NUNCA OLVIDARÁS.",
    prices: {
      solo: 28.0,
    },
    image: "/pincho con altura.png",
    category: "Parrilla",
  },
  {
    id: 38,
    name: "Tacos X3",
    description:
      "FIESTA DE SABORES MEXICANOS TE TRAE UNA AUTÉNTICA EXPERIENCIA CULINARIA DESDE MÉXICO. TRES DELICIOSOS TACOS RELLENOS DE PICO DE GALLO, GUACAMOLE, QUESO MOZZARELLA, TROCITOS DE PIÑA Y SOUR CREAM TE TRANSPORTARÁN A LAS CALLES DE MÉXICO CON CADA BOCADO. ADEMÁS, ACOMPAÑAMOS ESTOS SABORES CON TOTOPOS CRUJIENTES Y UNA GENEROSA SALSA CHEDDAR. ¡PREPÁRATE PARA UNA FIESTA DE SABORES QUE TE HARÁ SENTIR COMO SI ESTUVIERAS EN PLENO CORAZÓN DE MÉXICO!\n\nELIGE TUS PROTEÍNAS (1 o 3 opciones):\n- Pulled Pork\n- Fajitas de Res\n- Cubos de Pollo\n- Carne Molida\n\n Envianos tus proteinas en observaciones",
    prices: {
      solo: 25.0,
    },
    image: "/tacos por tres.png",
    category: "Tacos",
  },
  {
    id: 39,
    name: "Burrito Tropical",
    description:
      "DELEITA TUS SENTIDOS CON NUESTRO 'BURRITO TROPICAL'. ENROLLADO EN UNA TORTILLA, ESTE BURRITO ES UNA EXPLOSIÓN DE SABORES TROPICALES CON PICO DE GALLO, GUACAMOLE, QUESO BLANCO Y SOUR CREAM. ADEMÁS, AGREGAMOS UN TOQUE FRESCO Y JUGOSO DE PIÑA PARA LLEVARTE DIRECTO A UNA EXPERIENCIA TROPICAL. COMPLETA ESTA DELICIOSA CREACIÓN CON TOTOPOS CRUJIENTES Y UNA GENEROSA SALSA CHEDDAR. ¡CADA BOCADO ES UN VIAJE A LA PLAYA EN UN BURRITO!\n\nELIGE TU PROTEÍNA (1 opción):\n- Pulled Pork\n- Fajitas de Res\n- Cubos de Pollo\n- Carne Molida\n\nEnvianos tu proteina elegida en observaciones",
    prices: {
      solo: 23.0,
    },
    image: "/burrito tropical.png",
    category: "Burritos",
  },
  {
    id: 40,
    name: "Quesadilla Supreme",
    description:
      "NUESTRA 'QUESADILLA SUPREME' ES UN AUTÉNTICO DELEITE PARA LOS AMANTES DEL QUESO. CON UNA GENEROSA PORCIÓN DE QUESO MOZZARELLA GRATINADO QUE SE DERRITE EN CADA BOCADO, ESTA TORTILLA ES UNA OBRA MAESTRA CULINARIA. PUEDES ELEGIR TU PROTEÍNA FAVORITA PARA ACOMPAÑAR ESTE FESTÍN DE QUESO. TE GARANTIZAMOS UNA EXPERIENCIA SUPREMA DE SABOR Y TEXTURA. ¿ESTÁS LISTO PARA SUMERGIRTE EN UN MAR DE QUESO?\n\nELIGE TU PROTEÍNA (1 opción):\n- Pulled Pork\n- Fajitas de Res\n- Cubos de Pollo\n- Carne Molida\n\nEnvianos tu proteina elegida en observaciones",
    prices: {
      solo: 23.0,
    },
    image: "/quesadilla supreme.png",
    category: "Quesadillas",
  },
  {
    id: 41,
    name: "Nachos Caribeños",
    description:
      "ESTOS NACHOS SON UNA DELICIOSA MEZCLA DE SABORES Y TEXTURAS QUE NO PODRÁS RESISTIR. LOS TOTOPOS CRUJIENTES SON LA BASE PERFECTA PARA UN GENEROSO MONTÓN DE PULLED PORK, QUE SE COMBINA CON EL FRESCOR DEL PICO DE GALLO Y EL TOQUE TROPICAL DE LA PIÑA. LA CREMOSIDAD DEL SOUR CREAM Y EL QUESO MOZZARELLA, CORONADO CON LA SALSA CHEDDAR, COMPLETA ESTA EXPERIENCIA CARIBEÑA ÚNICA EN CADA BOCADO.\n\nELIGE TU PROTEÍNA (1 opción):\n- Pulled Pork\n- Fajitas de Res\n- Cubos de Pollo\n- Carne Molida\n\nEnvianos tu proteina elegida en observaciones",
    prices: {
      solo: 25.0,
    },
    image: "/nachos caribeños.png",
    category: "Nachos",
  },
  {
    id: 42,
    name: "Limonada Natural",
    description:
      "REFRESCANTE LIMONADA CON LIMONES FRESCOS Y UN TOQUE DE DULZURA.",
    prices: {
      jarra: 16.0,
      vaso: 10.0,
    },
    image: "/limonada naturales.png",
    category: "Naturales",
  },
  {
    id: 43,
    name: "Limonfresa",
    description: "REFRESCANTE MEZCLA DE LIMONADA CON FRESAS NATURALES.",
    prices: {
      jarra: 18.0,
      vaso: 10.0,
    },
    image: "/limonfresa.png",
    category: "Naturales",
  },
  {
    id: 44,
    name: "Limococo",
    description: "SUAVE LIMONADA CON LECHE DE COCO.",
    prices: {
      vaso: 13.0,
    },
    image: "/limococo.png",
    category: "Naturales",
  },
  {
    id: 45,
    name: "Coffeecream",
    description: "CAFÉ FRÍO CON ESPUMA CREMOSA.",
    prices: {
      vaso: 10.0,
    },
    image: "/coffeecream.png",
    category: "Naturales",
  },
  {
    id: 46,
    name: "Soda de Patilla",
    description: "REFRESCANTE SODA CON JUGO NATURAL DE SANDÍA.",
    prices: {
      vaso: 12.0,
    },
    image: "/patilla.png",
    category: "Sodas",
  },
  {
    id: 47,
    name: "Soda de Mango Biche",
    description: "REFRESCANTE SODA CON SABOR A MANGO VERDE.",
    prices: {
      vaso: 12.0,
    },
    image: "/mango biche.png",
    category: "Sodas",
  },
  {
    id: 48,
    name: "Soda de Curacao",
    description: "COLORIDA SODA AZUL CON SABOR CÍTRICO.",
    prices: {
      vaso: 12.0,
    },
    image: "/curacao.png",
    category: "Sodas",
  },
  {
    id: 49,
    name: "Soda de Frutos Rojos",
    description: "REFRESCANTE SODA CON MEZCLA DE FRUTOS ROJOS.",
    prices: {
      vaso: 12.0,
    },
    image: "/frutos rojos.png",
    category: "Sodas",
  },
  {
    id: 50,
    name: "Soda de Lychee",
    description: "EXÓTICA SODA CON SABOR A LYCHEE.",
    prices: {
      vaso: 14.0,
    },
    image: "/lychee.png",
    category: "Sodas",
  },
  {
    id: 51,
    name: "Soda de Frutos Amarillos",
    description: "REFRESCANTE SODA CON SABORES CÍTRICOS.",
    prices: {
      vaso: 12.0,
    },
    image: "/frutos amarillos.png",
    category: "Sodas",
  },
  {
    id: 52,
    name: "Soda de Neonberry",
    description: "VIBRANTE SODA CON SABOR A BAYAS EXÓTICAS.",
    prices: {
      vaso: 12.0,
    },
    image: "/neonberry.png",
    category: "Sodas",
  },
  {
    id: 53,
    name: "Brebaje Ancestral",
    description: "COCTEL ARTESANAL CON MEZCLA DE ESPECIAS Y LICORES PREMIUM.",
    prices: {
      vaso: 28.0,
    },
    image: "/brebaje ancestral.png",
    category: "Cocteles",
  },
  {
    id: 54,
    name: "Paloma Volantona",
    description:
      "EXCLUSIVO COCTEL PREMIUM CON MEZCLA DE LICORES DE ALTA CALIDAD.",
    prices: {
      vaso: 187.0,
    },
    image: "/paloma volantona.png",
    category: "Cocteles",
  },
  {
    id: 55,
    name: "Beso Blanco",
    description:
      "SUAVE COCTEL CREMOSO CON NOTAS DE VAINILLA Y LICORES SELECTOS.",
    prices: {
      vaso: 18.0,
    },
    image: "/beso blanco.png",
    category: "Cocteles",
  },
  {
    id: 56,
    name: "Daikiri",
    description: "CLÁSICO COCTEL A BASE DE RON Y LIMÓN CON UN TOQUE DE AZÚCAR.",
    prices: {
      vaso: 17.0,
    },
    image: "/daikiri.png",
    category: "Cocteles",
  },
  {
    id: 57,
    name: "Pinapol Cream",
    description: "EXQUISITO COCTEL CREMOSO DE PIÑA CON UN TOQUE TROPICAL.",
    prices: {
      vaso: 22.0,
    },
    image: "/pinapol cream.png",
    category: "Cocteles",
  },
  {
    id: 58,
    name: "Tinto Tameño",
    description: "VINO TINTO DE SABOR INTENSO CON NOTAS DE FRUTOS ROJOS.",
    prices: {
      vaso: 16.0,
    },
    image: "/tinto tameño.png",
    category: "Vinos",
  },
  {
    id: 59,
    name: "Sangría",
    description: "REFRESCANTE COCTEL A BASE DE VINO TINTO Y FRUTAS FRESCAS.",
    prices: {
      vaso: 18.0,
      jarra: 72.0,
    },
    image: "/sangria.png",
    category: "Cocteles",
  },
  {
    id: 60,
    name: "Moscow Mule",
    description: "CLÁSICO COCTEL CON VODKA, CERVEZA DE JENGIBRE Y LIMÓN.",
    prices: {
      vaso: 28.0,
    },
    image: "/moscow mule.png",
    category: "Cocteles",
  },
  {
    id: 61,
    name: "Gin Rose",
    description: "ELEGANTE COCTEL DE GINEBRA CON TOQUES FLORALES Y CÍTRICOS.",
    prices: {
      vaso: 28.0,
    },
    image: "/gin rose.png",
    category: "Cocteles",
  },
  {
    id: 62,
    name: "Gin Berry",
    description:
      "REFRESCANTE COCTEL DE GINEBRA CON BAYAS ROJAS Y TOQUES CÍTRICOS.",
    prices: {
      vaso: 28.0,
    },
    image: "/gin berry.png",
    category: "Cocteles",
  },
  {
    id: 63,
    name: "Mojito",
    description: "CLÁSICO COCTEL CUBANO CON RON, MENTA FRESCA, LIMÓN Y AZÚCAR.",
    prices: {
      vaso: 17.0,
    },
    image: "/mojito.png",
    category: "Cocteles",
  },
  {
    id: 64,
    name: "Margarita",
    description:
      "CLÁSICO COCTEL MEXICANO CON TEQUILA, TRIPLE SEC Y JUGO DE LIMÓN.",
    prices: {
      vaso: 21.0,
    },
    image: "/margarita.png",
    category: "Cocteles",
  },
];
