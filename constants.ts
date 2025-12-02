import { Category } from './types';
import { Home, Hand, Users, Hash, Palette, Dog, Plane, CloudSun, Brain } from 'lucide-react';

export const CATEGORIES: Record<string, Category> = {
  saludos: {
      id: 'saludos',
      title: "Saudações e Expressões Básicas",
      desc: "'Olá' e 'Adeus' são essenciais. 'Por favor' e 'Obrigado/a' são cortesías fundamentales.",
      items: [
          { it: "Olá", pron: "olá", es: "Hola", context: "Saludo común", fraseIt: "Olá, tudo bem com você?", fraseEs: "Hola, ¿todo bien contigo?", frasePron: "olá, túdu bem kon vosé" },
          { it: "Adeus", pron: "adéush", es: "Adiós", context: "Despedida", fraseIt: "Adeus, até amanhã!", fraseEs: "Adiós, ¡hasta mañana!", frasePron: "adéush, até amanyán" },
          { it: "Bom dia", pron: "bong yía", es: "Buenos días", context: "Formal (Mañana)", fraseIt: "Bom dia, eu gostaria de um café.", fraseEs: "Buenos días, me gustaría un café.", frasePron: "bong yía, éu gostaría ji un kafé" },
          { it: "Boa tarde", pron: "bôa tárji", es: "Buenas tardes", context: "Formal (Tarde/Noche)", fraseIt: "Boa tarde, esta mesa está livre?", fraseEs: "Buenas tardes, ¿está libre esta mesa?", frasePron: "bôa tárji, esta meza está lívri?" },
          { it: "Obrigado/a", pron: "obrigádu/a", es: "Gracias", context: "Cortesía essencial", fraseIt: "Muito obrigado pela sua ajuda.", fraseEs: "Muchas gracias por su ayuda.", frasePron: "múitu obrigádu péla súa ayúda" },
          { it: "Por favor", pron: "por favôr", es: "Por favor", context: "Para pedir algo", fraseIt: "Posso ver o cardápio, por favor?", fraseEs: "¿Puedo ver el menú, por favor?", frasePron: "pósu ver u cardápiu, por favôr?" },
          { it: "Com licença", pron: "kon lisénsa", es: "Disculpa / Disculpe", context: "Para llamar la atención", fraseIt: "Com licença, onde é a estação?", fraseEs: "Disculpe, ¿dónde está la estación?", frasePron: "kon lisénsa, óndji é a estazón?" },
          { it: "Como está?", pron: "kómu está", es: "¿Cómo está?", context: "Pregunta común", fraseIt: "Estou bem, e o senhor/a?", fraseEs: "Estoy bien, ¿y usted?", frasePron: "estou beng, i u senyor/a?" }
      ]
  },
  presentacion: {
      id: 'presentacion',
      title: "Apresentações Pessoais",
      desc: "Frases chave para falar de você e conhecer a outros.",
      items: [
          { it: "Meu nome é...", pron: "meu nómi eh", es: "Mi nombre es...", context: "Tu nombre", fraseIt: "Meu nome é João, e sou estudante.", fraseEs: "Mi nombre es João, y soy estudiante.", frasePron: "meu nómi eh zhoáng, i sou estuzhangtchi" },
          { it: "Eu sou de...", pron: "éu sou ji", es: "Soy de...", context: "Tu origen", fraseIt: "Eu sou do México, mas moro aqui.", fraseEs: "Soy de México, pero vivo aquí.", frasePron: "éu sou du méshicu, ma móru akí" },
          { it: "Eu moro em...", pron: "éu móru én", es: "Vivo en...", context: "Tu residencia", fraseIt: "Eu moro em um apartamento pequeno.", fraseEs: "Vivo en un apartamento pequeño.", frasePron: "éu móru én un apartaméntchi pekénu" },
          { it: "Quantos anos você tem?", pron: "kuántus ánus vosé ten", es: "¿Cuántos años tienes?", context: "Pregunta de edad", fraseIt: "Eu tenho vinte e cinco anos.", fraseEs: "Tengo veinticinco años.", frasePron: "éu tényu víntchi i síngku ánus" },
          { it: "Qual é o seu trabalho?", pron: "kual é u seu trabályu", es: "¿Cuál es tu trabajo?", context: "Pregunta de profesión", fraseIt: "Eu sou professor na escola local.", fraseEs: "Soy profesor en la escuela local.", frasePron: "éu sou proféssor na éskola lokál" }
      ]
  },
  numeros: {
      id: 'numeros',
      title: "Números (1-10)",
      desc: "Essenciais para preços, horas e quantidades.",
      items: [
          { it: "Um", pron: "ung", es: "Uno", context: "Para contar", fraseIt: "Preciso de um quilo de maçãs.", fraseEs: "Necesito un kilo de manzanas.", frasePron: "presízu ji un kílu ji massans" },
          { it: "Dois", pron: "doish", es: "Dos", context: "Para contar", fraseIt: "Eles têm dois carros.", fraseEs: "Ellos tienen dos coches.", frasePron: "élis tein doish kárrush" },
          { it: "Três", pron: "tresh", es: "Tres", context: "Para contar", fraseIt: "O trem chega em três minutos.", fraseEs: "El tren llega en tres minutos.", frasePron: "u treng shéga eng tresh minútus" },
          { it: "Quatro", pron: "kuátru", es: "Cuatro", context: "Para contar", fraseIt: "O ônibus sai às quatro.", fraseEs: "El autobús sale a las quatro.", frasePron: "u ônibush sái ash kuátru" },
          { it: "Cinco", pron: "síngku", es: "Cinco", context: "Para contar", fraseIt: "Custa cinco dólares.", fraseEs: "Cuesta cinco dólares.", frasePron: "kusta síngku dólarish" },
          { it: "Seis", pron: "séish", es: "Seis", context: "Para contar", fraseIt: "Há seis pessoas esperando.", fraseEs: "Hay seis personas esperando.", frasePron: "a séish pessôash esperángdu" },
          { it: "Sete", pron: "sétchi", es: "Siete", context: "Para contar", fraseIt: "Hoje é o sétimo dia.", fraseEs: "Hoy es el séptimo día.", frasePron: "óji é u sétchimu yía" },
          { it: "Oito", pron: "ôitu", es: "Ocho", context: "Para contar", fraseIt: "Eu tenho oito livros.", fraseEs: "Tengo ocho libros.", frasePron: "éu tényu ôitu lívrush" },
          { it: "Nove", pron: "nóvi", es: "Nueve", context: "Para contar", fraseIt: "A loja fecha às nove.", fraseEs: "La tienda cierra a las nueve.", frasePron: "a lója fésha ash nóvi" },
          { it: "Dez", pron: "désh", es: "Diez", context: "Para contar", fraseIt: "Precisamos de dez xícaras.", fraseEs: "Necesitamos diez tazas.", frasePron: "prezisámush ji désh shíkarash" }
      ]
  },
  colores: {
      id: 'colores',
      title: "Cores Essenciais",
      desc: "Para descrever objetos e ambientes.",
      items: [
          { it: "Vermelho", pron: "vermélyu", es: "Rojo", context: "Minha camisa é vermelha.", color: "#EF4444", text: "white", fraseIt: "O carro vermelho é rápido.", fraseEs: "El coche rojo es rápido.", frasePron: "u cárru vermélyu é hápidu" },
          { it: "Verde", pron: "vérji", es: "Verde", context: "A grama é verde.", color: "#22C55E", text: "white", fraseIt: "Verde é a minha cor favorita.", fraseEs: "El verde es mi color favorito.", frasePron: "vérji é a mñia côr favorita" },
          { it: "Amarelo", pron: "amarélou", es: "Amarillo", context: "A luz do sol é amarela.", color: "#FACC15", text: "black", fraseIt: "A banana é amarela.", fraseEs: "El plátano es amarillo.", frasePron: "a banana é amarélou" },
          { it: "Preto", pron: "prétu", es: "Negro", context: "O céu está preto à noite.", color: "#000000", text: "white", fraseIt: "Eu comprei sapatos pretos novos.", fraseEs: "Compré zapatos negros nuevos.", frasePron: "éu compréi sapátush prétush novush" },
          { it: "Branco", pron: "brángku", es: "Blanco", context: "A neve é branca.", color: "#FFFFFF", text: "black", border: true, fraseIt: "Ela está usando um vestido branco.", fraseEs: "Ella lleva un vestido blanco.", frasePron: "éla está usándu ung vestidu brángku" },
          { it: "Azul", pron: "azúl", es: "Azul", context: "O céu é azul.", color: "#3B82F6", text: "white", fraseIt: "O mar é azul profundo.", fraseEs: "El mar es azul oscuro.", frasePron: "u mar é azúl prufúndu" }
      ]
  },
  animales: {
      id: 'animales',
      title: "Animais e Objetos da Casa",
      desc: "Vocabulário para descrever seu ambiente cotidiano.",
      items: [
          { it: "Cachorro", pron: "kashórru", es: "Perro", context: "Animal", icon: "🐕", fraseIt: "Eu tenho um cachorro pequeno.", fraseEs: "Tengo un perro pequeño.", frasePron: "éu tényu ung kashórru pekénu" },
          { it: "Gato", pron: "gátu", es: "Gato", context: "Animal", icon: "🐈", fraseIt: "O gato está dormindo na cadeira.", fraseEs: "El gato está durmiendo en la silla.", frasePron: "u gátu está dormíndu na kadeira" },
          { it: "Pássaro", pron: "pássaru", es: "Pájaro", context: "Animal", icon: "🐦", fraseIt: "O pássaro está cantando alto.", fraseEs: "El pájaro está cantando fuerte.", frasePron: "u pássaru está cantángdu altu" },
          { it: "Peixe", pron: "péishi", es: "Pez", context: "Animal", icon: "🐟", fraseIt: "Eu gosto de comer peixe.", fraseEs: "Me gusta comer pescado.", frasePron: "éu góstu ji komer péishi" },
          { it: "Mesa", pron: "méza", es: "Mesa", context: "Casa", icon: "🪑", fraseIt: "Ponha o livro na mesa.", fraseEs: "Pon el libro en la mesa.", frasePron: "póñia u lívru na méza" },
          { it: "Cama", pron: "káma", es: "Cama", context: "Casa", icon: "🛏️", fraseIt: "É hora de ir para a cama.", fraseEs: "Es hora de ir a la cama.", frasePron: "é óra ji ir pára a káma" },
          { it: "Janela", pron: "zhanéla", es: "Ventana", context: "Casa", icon: "🪟", fraseIt: "Por favor, feche a janela.", fraseEs: "Por favor, cierra la ventana.", frasePron: "por favôr, féshi a zhanéla" },
          { it: "Porta", pron: "pórta", es: "Puerta", context: "Casa", icon: "🚪", fraseIt: "A porta está aberta.", fraseEs: "La puerta está abierta.", frasePron: "a pórta está abérta" }
      ]
  },
  viajes: {
      id: 'viajes',
      title: "Viagem e Saúde",
      desc: "Frases críticas para o aeroporto e emergências médicas.",
      items: [
          { it: "Passaporte", pron: "passaportchi", es: "Pasaporte", context: "Aeroporto", fraseIt: "Preciso renovar meu passaporte.", fraseEs: "Necesito renovar mi pasaporte.", frasePron: "presízu henovár meu passaportchi" },
          { it: "Bilhete", pron: "biliétchi", es: "Boleto / Tiquete", context: "Viagem", fraseIt: "Onde posso comprar um bilhete?", fraseEs: "¿Dónde puedo comprar un boleto?", frasePron: "óndji pósu comprár ung biliétchi?" },
          { it: "Bagagem", pron: "bagázhen", es: "Equipaje", context: "Aeroporto", fraseIt: "Minha bagagem está muito pesada.", fraseEs: "Mi equipaje está muy pesado.", frasePron: "mínya bagázhen está múitu pezáda" },
          { it: "Estou doente", pron: "estou duéntchi", es: "Me siento enfermo", context: "Saúde", fraseIt: "Estou doente, eu deveria ir para casa.", fraseEs: "Me siento enfermo, debería ir a casa.", frasePron: "estou duéntchi, éu devería ir pára káza" },
          { it: "Preciso de um médico", pron: "presízu ji un médiku", es: "Necesito un doctor", context: "Emergência", fraseIt: "É uma emergência, preciso de um médico.", fraseEs: "Es una emergencia, necesito un doctor.", frasePron: "é uma emergénsia, presízu ji un médiku" },
          { it: "Socorro", pron: "sokórru", es: "Ayuda", context: "Emergência", fraseIt: "Socorro! Chame uma ambulância!", fraseEs: "¡Ayuda! ¡Llama a una ambulancia!", frasePron: "sokórru! shámi uma ambulánsia!" }
      ]
  },
  clima: {
      id: 'clima',
      title: "Clima e Tempo",
      desc: "Expressões meteorológicas e momentos do dia.",
      items: [
          { it: "Está frio", pron: "está fríu", es: "Hace frío", context: "Clima", icon: "❄️", fraseIt: "Está frio lá fora hoje.", fraseEs: "Hace frío afuera hoy.", frasePron: "está fríu lá fóra óji" },
          { it: "Está calor", pron: "está calôr", es: "Hace calor", context: "Clima", icon: "☀️", fraseIt: "Está muito calor para caminhar.", fraseEs: "Hace demasiado calor para caminar.", frasePron: "está múitu calôr pára caminyár" },
          { it: "Está chovendo", pron: "está shuvéndu", es: "Está lloviendo", context: "Clima", icon: "🌧️", fraseIt: "Pegue um guarda-chuva, está chovendo.", fraseEs: "Lleva un paraguas, está lloviendo.", frasePron: "pégi ung guárda shúva, está shuvéndu" },
          { it: "De manhã", pron: "ji manyán", es: "Por la mañana", context: "Tempo", fraseIt: "Eu tomo café de manhã.", fraseEs: "Tomo café por la mañana.", frasePron: "éu tómu café ji manyán" },
          { it: "De noite", pron: "ji nóitchi", es: "Por la noche", context: "Tempo", fraseIt: "Vamos assistir um filme de noite.", fraseEs: "Veremos una película por la noche.", frasePron: "vámush assístir ung fíumi ji nóitchi" }
      ]
  }
};

export const MENU_ITEMS = [
  { id: 'home', label: 'Inicio / Dashboard', icon: Home, highlight: true },
  { id: 'saludos', label: 'Saludos y Básicos', icon: Hand },
  { id: 'presentacion', label: 'Presentaciones', icon: Users },
  { id: 'numeros', label: 'Números (1-10)', icon: Hash },
  { id: 'colores', label: 'Colores', icon: Palette },
  { id: 'animales', label: 'Animales y Casa', icon: Dog },
  { id: 'viajes', label: 'Viajes y Salud', icon: Plane },
  { id: 'clima', label: 'Clima y Tiempo', icon: CloudSun },
  { id: 'quiz', label: 'Test de Vocabulario', icon: Brain, highlight: false },
];