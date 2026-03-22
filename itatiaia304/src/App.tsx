import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Instagram, Menu, X, ChevronRight, Phone, Quote, Star, Ticket } from 'lucide-react';
import { motion, animate } from "framer-motion";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);  //promoção ativa ou nn
  const [visibleCount, setVisibleCount] = useState(4);

  const avaliacoes = [
    { name: "Gina Valéria", relation: "Cliente Fiel", text: "Comida saborosa, bem servida, acompanhada de uma salada que não se encontra em qualquer PF. Se a procura for por tira-gosto, esse é o lugar, com muita variedade e sabor. A cerveja sempre gelada." },
    { name: "Sandra Mascarenhas", relation: "Cliente Fiel", text: "Comida deliciosa, ambiente agradável e limpo. Pessoal atencioso e educado. Maravilha." },
    { name: "Daniel Gonçalves", relation: "Cliente Fiel", text: "Ambiente limpo e organizado; a comida estava excelente!" },
    { name: "Leticia Silva", relation: "Cliente Fiel", text: "Comida simplesmente divina , não gostei... amei !!!! Hoje devido a véspera de ano novo e outros restaurantes estarem fechados ficou um pouco cheio e esperei 25 minutos mas valeu a pena . Preço acessível para o trabalhador." },
    { name: "Amanda Trindade", relation: "Cliente Fiel", text: "Estava tudo muito gostoso e o local é muito agradável." },
    { name: "Helena Lima", relation: "Cliente Fiel", text: "Comida deliciosa e atendimento perfeito!" },
    { name: "Vanda Mascarenhas", relation: "Cliente Fiel", text: "Excelente atendimento, estabelecimento bem decorado e limpissimo, comida saborosa e de qualidade." },
    { name: "Simone Gonçalves", relation: "Cliente Fiel", text: "Comida deliciosa, de qualidade e com preço justo!" },
    { name: "Consolação Aparecida", relation: "Cliente Fiel", text: "Atendimento top e de primeira, lugar aconchegante." },
    { name: "Izabella Gomes", relation: "Cliente Fiel", text: "Comida temperada, tudo novinho e preço justo pela boa qualidade. Ambiente uma delícia." },
    { name: "Juliana Mascarenhas", relation: "Cliente Fiel", text: "Comida deliciosa, de qualidade e com preço justo!" },
    { name: "Fabiano Marcal", relation: "Cliente Fiel", text: "Comida maravilhosa !!!" },
    { name: "Eliane Mascarenhas", relation: "Cliente Fiel", text: "Melhor restaurante de BH!! Comida deliciosa, cerveja geladae atendimento nota 1000!!!" },
    { name: "Organização Serco", relation: "Cliente Fiel", text: "Lugar maravilhoso, atendimento impecável." },
    { name: "Mateus Silveira", relation: "Cliente Fiel", text: "Lugar agradável." },
    { name: "Marcelo Mascarenhas", relation: "Cliente Fiel", text: "Excelente." }
  ];

  // Efeito para a Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FUNÇÃO DE SCROLL SUAVE QUE VOCÊ TROUXE
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
        const headerOffset = 112; // Compensação do tamanho do menu fixo
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  // Função auxiliar para o menu mobile (fecha o menu e rola a tela)
  const handleMobileClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    setIsMenuOpen(false);
    scrollToSection(e, sectionId);
  };

  const whatsappNumber = "5531996625970";

  return (

    <div className="min-h-screen bg-bar-white text-bar-black font-sans">

      {/* HEADER AGRUPADO (Fixo no topo, segura o Banner e a Navbar juntos) */}
      <header className="fixed w-full top-0 z-50 flex flex-col">
        
        {/* 1. BANNER DE PROMOÇÃO (TOP BAR) */}
        {showPromo && (
          <div className="bg-bar-gold text-bar-black py-3 px-6 relative flex justify-center items-center shadow-md">
            <div className="flex items-center gap-3 max-w-4xl pr-8">
              <Ticket size={18} className="flex-shrink-0" />
              <p className="text-xs sm:text-sm font-bold tracking-[0.1em] uppercase text-center">
                Quarta do Futebol: Chopp Artesanal em dobro até as 20h! 🍻
              </p>
            </div>
            
            {/* Botão de Fechar */}
            <button 
              onClick={() => setShowPromo(false)} 
              className="absolute right-4 p-1 hover:bg-black/10 rounded-full transition duration-300"
              aria-label="Fechar promoção"
            >
              <X size={20} />
            </button>
          </div>
        )}
        
        {/* 2. NAVBAR (Agora sem o 'fixed' e 'z-50', pois o header já faz isso) */}
        <nav className={`w-full transition-all duration-300 ${isScrolled ? 'bg-bar-black/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'}`}>
          <div className="container mx-auto px-6 flex justify-between items-center">
            <a href="#" className="text-2xl font-serif font-bold text-bar-gold tracking-wider" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              ITATIAIA 304
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              <a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')} className="text-white hover:text-bar-gold transition">Sobre</a>
              <a href="#menu" onClick={(e) => scrollToSection(e, 'menu')} className="text-white hover:text-bar-gold transition">Cardápio</a>
              <a href="#ambiente" onClick={(e) => scrollToSection(e, 'ambiente')} className="text-white hover:text-bar-gold transition">Ambiente</a>
              <a href="#contato" onClick={(e) => scrollToSection(e, 'contato')} className="text-white hover:text-bar-gold transition">Contato</a>
              <a 
                href={`https://www.ifood.com.br/delivery/belo-horizonte-mg/itatiaia-304-bonfim/af20a8e8-5791-45e5-bc50-7a12732ac233?utm_medium=share`}
                target="_blank"
                rel="noreferrer"
                className="bg-bar-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition shadow-lg shadow-orange-500/30"
              >
                Realizar Pedido
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-bar-black flex flex-col items-center py-6 gap-6 border-t border-gray-800 shadow-xl">
              <a href="#sobre" onClick={(e) => handleMobileClick(e, 'sobre')} className="text-white text-lg hover:text-bar-gold">Sobre</a>
              <a href="#menu" onClick={(e) => handleMobileClick(e, 'menu')} className="text-white text-lg hover:text-bar-gold">Cardápio</a>
              <a href="#ambiente" onClick={(e) => handleMobileClick(e, 'ambiente')} className="text-white text-lg hover:text-bar-gold">Ambiente</a>
              <a href="#contato" onClick={(e) => handleMobileClick(e, 'contato')} className="text-white text-lg hover:text-bar-gold">Contato</a>
            </div>
          )}
        </nav>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center">
        {/* ... (código da imagem de fundo igual) ... */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1920&auto=format&fit=crop" 
            alt="Interior do Bar" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-bar-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Comida de verdade.<br/>
            <span className="text-bar-gold italic">Cerveja gelada.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            O ponto de encontro perfeito para quem não abre mão de pratos caprichados, porções generosas e boas conversas em um ambiente acolhedor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* APLICADO NO BOTÃO VER CARDÁPIO TAMBÉM */}
            <a href="#menu" onClick={(e) => scrollToSection(e, 'menu')} className="bg-transparent border-2 border-bar-gold text-bar-gold hover:bg-bar-gold hover:text-bar-black px-8 py-4 rounded-full font-medium transition duration-300">
              Ver Cardápio
            </a>
            <a href={`https://www.ifood.com.br/delivery/belo-horizonte-mg/itatiaia-304-bonfim/af20a8e8-5791-45e5-bc50-7a12732ac233?utm_medium=share`} target="_blank" rel="noreferrer" className="bg-bar-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium transition duration-300 shadow-lg shadow-orange-500/20">
              Realizar Pedido
            </a>
          </div>
        </div>
      </section>

      

      {/* 3. SOBRE O BAR */}
      <section id="sobre" className="py-24 bg-bar-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1543007631-283050bb3e8c?q=80&w=1000&auto=format&fit=crop" 
                alt="Ambiente Aconchegante" 
                className="rounded-lg shadow-2xl object-cover h-[500px] w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-bar-gold text-sm font-bold tracking-[0.2em] uppercase mb-3">Nossa História</h2>
              <h3 className="text-4xl font-serif text-bar-black mb-6">A alma da Lagoinha</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fundado em 2024, o Itatiaia 304 nasceu do desejo de celebrar a essência de um dos bairros mais emblemáticos de Belo Horizonte. Estamos de portas abertas na Lagoinha, um verdadeiro berço de história, cultura e muita diversão.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nossas mesas de madeira rústica e iluminação quente criam o cenário ideal para saborear pratos caprichados e tomar aquela cerveja trincando. Aqui, unimos a boemia tradicional do bairro com um ambiente acolhedor, onde o sofisticado é acessível.
              </p>
              <a href="#ambiente" className="group inline-flex items-center text-bar-wood font-semibold hover:text-bar-orange transition" onClick={(e) => scrollToSection(e, 'ambiente')}>
                Conheça o espaço <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MENU */}
      <section id="menu" className="py-24 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-bar-gold text-sm font-bold tracking-[0.2em] uppercase mb-3">Sabor & Tradição</h2>
            <h3 className="text-4xl font-serif text-bar-black">Nosso Cardápio</h3>
          </div>

          {/* GRID DE PRATOS E PORÇÕES (COM IMAGENS) */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
            
            {/* PRATO DO DIA */}
            <div>
              <h4 className="text-2xl font-serif text-bar-wood mb-6 border-b-2 border-bar-gold/30 pb-2 inline-block">Prato do Dia</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Item Prato 1 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group flex flex-col h-full">
                  <div className="h-48 overflow-hidden flex-shrink-0">
                    <img src="/pratos/frango.jpeg" alt="Prato Executivo" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h5 className="font-medium text-bar-black text-lg leading-tight">Bife Frango com Fritas</h5>
                      <span className="text-bar-gold font-bold whitespace-nowrap">R$ 30</span>
                    </div>
                    <p className="text-sm text-gray-500 flex-grow">Bife de frango grelhado com fritas crocantes, salada do Dia, arroz e feijão. Uma opção leve e deliciosa para o seu Dia.</p>
                  </div>
                </div>

                {/* Item Prato 2 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group flex flex-col h-full">
                  <div className="h-48 overflow-hidden flex-shrink-0">
                    <img src="/pratos/boi.jpeg" alt="Prato Especial" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h5 className="font-medium text-bar-black text-lg leading-tight">Bife Boi com Fritas</h5>
                      <span className="text-bar-gold font-bold whitespace-nowrap">R$ 32</span>
                    </div>
                    <p className="text-sm text-gray-500 flex-grow">Delicioso bife de boi suculento acompanhado de fritas crocantes, salada do Dia, arroz e feijão. Uma combinação perfeita para um almoço saboroso e satisfatório.</p>
                  </div>
                </div>

                {/* Item Prato 3 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group flex flex-col h-full">
                  <div className="h-48 overflow-hidden flex-shrink-0">
                    <img src="/pratos/porco.jpeg" alt="Prato Especial" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h5 className="font-medium text-bar-black text-lg leading-tight">Bife Porco com Fritas</h5>
                      <span className="text-bar-gold font-bold whitespace-nowrap">R$ 30</span>
                    </div>
                    <p className="text-sm text-gray-500 flex-grow">Bife de porco tenro e saboroso, servido com fritas douradas, salada do Dia, arroz e feijão. Uma refeição que agrada a todos os paladares.</p>
                  </div>
                </div>

                {/* Item Prato 4 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group flex flex-col h-full">
                  <div className="h-48 overflow-hidden flex-shrink-0">
                    <img src="/pratos/feijoada.jpeg" alt="Prato Especial" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h5 className="font-medium text-bar-black text-lg leading-tight">Feijoada</h5>
                      <span className="text-bar-gold font-bold whitespace-nowrap">R$ 38</span>
                    </div>
                    <p className="text-sm text-gray-500 flex-grow">Tradicional feijoada brasileira, rica em sabores e acompanhada de couve, farofa, laranja, arroz e vinagrete. Uma experiência gastronômica completa.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* PORÇÕES */}
            <div>
              <h4 className="text-2xl font-serif text-bar-wood mb-6 border-b-2 border-bar-gold/30 pb-2 inline-block">Porções</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Item Porção 1 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group flex flex-col h-full">
                  <div className="h-48 overflow-hidden flex-shrink-0">
                    <img src="/pratos/fritas.jpg" alt="Porção de Fritas" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h5 className="font-medium text-bar-black text-lg leading-tight">Fritas</h5>
                      <span className="text-bar-gold font-bold whitespace-nowrap">R$ 35</span>
                    </div>
                    <p className="text-sm text-gray-500 flex-grow">Batatas fritas com cebolinha.</p>
                  </div>
                </div>

                {/* Item Porção 2 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group flex flex-col h-full">
                  <div className="h-48 overflow-hidden flex-shrink-0">
                    <img src="/pratos/bolinhos.jpg" alt="Tábua de Frios" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h5 className="font-medium text-bar-black text-lg leading-tight">Bolinhos</h5>
                      <span className="text-bar-gold font-bold whitespace-nowrap">R$ 45</span>
                    </div>
                    <p className="text-sm text-gray-500 flex-grow">Porção de bolinhos recheados com carne.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* LISTA DE BEBIDAS (SEM IMAGENS, SÓ VALORES) */}
          <div className="max-w-4xl mx-auto">
            <h4 className="text-2xl font-serif text-bar-gold mb-6 text-center">Cervejas & Bebidas</h4>
            
            <div className="bg-bar-black p-8 md:p-12 rounded-xl shadow-lg border border-bar-gold/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-gray-300">
                
                {/* Coluna 1 Bebidas */}
                <ul className="space-y-4">
                  <li className="flex justify-between border-b border-gray-800 pb-2 hover:text-white transition cursor-default">
                    <span>Chopp Artesanal (300ml)</span>
                    <span className="text-bar-gold font-medium">R$ 12</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-800 pb-2 hover:text-white transition cursor-default">
                    <span>Cerveja Long Neck (Heineken)</span>
                    <span className="text-bar-gold font-medium">R$ 14</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-800 pb-2 hover:text-white transition cursor-default">
                    <span>Caipirinha de Limão</span>
                    <span className="text-bar-gold font-medium">R$ 22</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-800 pb-2 hover:text-white transition cursor-default">
                    <span>Moscow Mule</span>
                    <span className="text-bar-gold font-medium">R$ 30</span>
                  </li>
                </ul>

                {/* Coluna 2 Bebidas */}
                <ul className="space-y-4">
                  <li className="flex justify-between border-b border-gray-800 pb-2 hover:text-white transition cursor-default">
                    <span>Negroni</span>
                    <span className="text-bar-gold font-medium">R$ 28</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-800 pb-2 hover:text-white transition cursor-default">
                    <span>Gin Tônica Clássica</span>
                    <span className="text-bar-gold font-medium">R$ 32</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-800 pb-2 hover:text-white transition cursor-default">
                    <span>Refrigerante (Lata)</span>
                    <span className="text-bar-gold font-medium">R$ 7</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-800 pb-2 hover:text-white transition cursor-default">
                    <span>Água com/sem gás</span>
                    <span className="text-bar-gold font-medium">R$ 5</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
             <a 
               href="/cardapio.pdf" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-block bg-bar-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition font-medium shadow-lg hover:shadow-xl"
             >
               Ver Cardápio Completo em PDF
             </a>
          </div>
        </div>
      </section>

      {/* 5. INSTAGRAM FEED */}
      <section id="ambiente" className="py-20 bg-[#0d0d0d] border-t border-gray-900">
        <div className="container mx-auto px-6 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Instagram className="text-bar-gold w-8 h-8" />
              <h2 className="text-3xl font-serif text-bar-gold">Siga nosso Instagram</h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Acompanhe nossos pratos, a cerveja sempre trincando e os melhores momentos do bar mais tradicional da Lagoinha.<br/>
              <a href="https://www.instagram.com/itatiaia304/" target="_blank" rel="noreferrer" className="font-medium text-bar-orange hover:text-orange-400 transition">
                @itatiaia304
              </a>
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            {/* Array de Posts (Você deve colocar as imagens na pasta public) */}
            {[
              { id: 1, img: '/local/insta1.png', link: 'https://www.instagram.com/p/DVi4zaTDV1O/' },
              { id: 2, img: '/local/insta2.png', link: 'https://www.instagram.com/p/DTx-zDSkShg/' },
              { id: 3, img: '/local/insta3.png', link: 'https://www.instagram.com/p/DSvHhdSkaur/' },
              { id: 4, img: '/local/insta4.png', link: 'https://www.instagram.com/p/DSZ_-5JjdOK/?img_index=1' },
            ].map((post) => (
              <motion.a 
                key={post.id} 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative overflow-hidden rounded-xl shadow-lg aspect-square block border border-bar-gold/10"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "backOut" } }
                }}
              >
                <img 
                  src={post.img} 
                  alt={`Postagem do Instagram ${post.id}`}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition duration-700" 
                />
                {/* Overlay Escuro com o Ícone (Ficou muito elegante!) */}
                <div className="absolute inset-0 bg-bar-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                  <Instagram className="text-bar-gold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition duration-300 w-10 h-10" />
                </div>
              </motion.a>
            ))}
          </motion.div>
          
        </div>
      </section>

      {/* 6. AVALIAÇÕES / DEPOIMENTOS */}
      <section id="depoimentos" className="py-24 bg-stone-100 border-t border-gray-200 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative">
          
          {/* Título da Seção */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-bar-gold text-sm font-bold tracking-[0.2em] uppercase mb-3">A Voz da Lagoinha</h2>
            <h3 className="text-4xl font-serif text-bar-black">O que dizem os clientes</h3>
          </motion.div>

          {/* Grid de Cards (Carrossel no Mobile, Grid expansível no PC) */}
          <motion.div 
            className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-4 pt-8 pb-12 md:pb-0 md:pt-0 px-4 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            {avaliacoes.map((review, index) => (
              <motion.div 
                key={index} 
                // A MÁGICA ESTÁ AQUI: Esconde no PC se o index for maior que o visibleCount
                className={`w-[320px] md:w-auto flex-shrink-0 md:flex-shrink snap-center bg-white p-8 rounded-2xl shadow-md border border-bar-gold/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-between ${index >= visibleCount ? 'md:hidden' : ''}`}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
              >
                {/* Ícone de Aspas Premium */}
                <div className="absolute -top-5 -left-2 bg-bar-black p-3 rounded-full shadow-lg border-2 border-bar-gold z-10">
                  <Quote className="text-bar-gold w-5 h-5 fill-bar-gold" />
                </div>

                <div>
                  {/* Estrelas */}
                  <div className="flex text-bar-gold mb-5 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" stroke="none" className="mr-1" />
                    ))}
                  </div>

                  {/* Texto da Avaliação */}
                  <p className="text-gray-600 italic mb-8 leading-relaxed text-sm whitespace-normal">
                    "{review.text}"
                  </p>
                </div>

                {/* Autor da Avaliação */}
                <div className="border-t border-gray-100 pt-5 mt-auto">
                  <p className="font-serif font-bold text-bar-black text-lg">{review.name}</p>
                  <p className="text-[10px] text-bar-gold uppercase tracking-[0.1em] font-bold mt-1">{review.relation}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* BOTÃO VER MAIS / VER MENOS (Visível apenas no PC) */}
          <div className="hidden md:flex justify-center mt-12">
            <button
              onClick={() => {
                if (visibleCount >= avaliacoes.length) {
                  // VISUALIZAR MENOS
                  const section = document.getElementById('depoimentos');
                  if (section) {
                    const targetY = section.getBoundingClientRect().top + window.scrollY - 100;
                    
                    // 1º Anima a câmara a subir INSTANTANEAMENTE
                    animate(window.scrollY, targetY, {
                      duration: 0.6,
                      ease: "easeInOut",
                      onUpdate: (latest) => window.scrollTo(0, latest),
                      // 2º Só esconde as cartas quando chegar lá acima! Fica super fluido.
                      onComplete: () => setVisibleCount(4) 
                    });
                  }
                } else {
                  // VER MAIS
                  setVisibleCount(prev => prev + 4);
                  
                  // Dá 50ms para o React "pintar" as novas cartas antes de rolar
                  setTimeout(() => {
                    const currentY = window.scrollY;
                    // Aumentamos para 320px para descer a medida exata
                    animate(currentY, currentY + 320, {
                      duration: 0.6,
                      ease: "easeInOut",
                      onUpdate: (latest) => window.scrollTo(0, latest)
                    });
                  }, 50);
                }
              }}
              className="bg-transparent border-2 border-bar-gold text-bar-gold hover:bg-bar-gold hover:text-bar-black px-8 py-3 rounded-full font-medium transition duration-300 shadow-sm cursor-pointer"
            >
              {visibleCount >= avaliacoes.length ? "Visualizar menos" : "Ver mais avaliações"}
            </button>
          </div>

        </div>
      </section>

      {/* 7. CONTATO & FOOTER */}
      <footer id="contato" className="bg-bar-black pt-20 pb-10 border-t-4 border-bar-gold">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            
            {/* Info (Coluna 1) */}
            <div>
              <h4 className="text-2xl font-serif text-bar-gold mb-6">Itatiaia 304</h4>
              <p className="text-gray-400 mb-6 leading-relaxed">
                O verdadeiro sabor da Lagoinha. Comida de qualidade, cerveja sempre trincando e aquele ambiente acolhedor para reunir os amigos.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/itatiaia304/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-bar-gold hover:bg-bar-orange hover:text-white transition">
                  <Instagram size={20} />
                </a>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-bar-gold hover:bg-bar-orange hover:text-white transition">
                  <Phone size={20} />
                </a>
              </div>
            </div>

            {/* Endereço, Horários e Mapa Integrado (Coluna 2) */}
            <div className="flex flex-col xl:flex-row gap-6 items-start xl:items-center">
              
              {/* O QUADRADO PEQUENO DO MAPA */}
              <div className="w-full xl:w-40 h-48 xl:h-40 aspect-square overflow-hidden rounded-xl shadow-lg border border-gray-800 flex-shrink-0 opacity-80 hover:opacity-100 transition duration-300">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.139417855639!2d-43.94723142469145!3d-19.918512481467433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e4b6c3bd81%3A0x6b83f06c13ebde0a!2sR.%20Itatiaia%2C%20304%20-%20Lagoinha%2C%20Belo%20Horizonte%20-%20MG%2C%2031210-170!5e0!3m2!1spt-BR!2sbr!4v1711204000000!5m2!1spt-BR!2sbr"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Itatiaia 304 no Google Maps"
                ></iframe>
              </div>

              {/* AS INFORMAÇÕES AO LADO (TEXTOS) */}
              <div className="space-y-5 w-full">
                <div className="flex items-start gap-4">
                  <MapPin className="text-bar-orange flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h5 className="text-white font-medium mb-1">Localização</h5>
                    <p className="text-gray-400 text-sm">Rua Itatiaia, 304<br/>Lagoinha, BH - MG<br/>31210-170</p>
                  </div>
                </div>
                
                {/* HORÁRIOS */}
                <div className="flex items-start gap-4">
                  <Clock className="text-bar-orange flex-shrink-0 mt-1" size={20} />
                  <div className="w-full">
                    <h5 className="text-white font-medium mb-2">Horários</h5>
                    <ul className="space-y-2">
                      <li className="flex flex-col">
                        <span className="text-bar-gold text-[10px] font-bold tracking-[0.1em] uppercase">Almoço</span>
                        <span className="text-gray-400 text-sm">Seg a Sex • 11h às 15h</span>
                      </li>
                      <li className="flex flex-col">
                        <span className="text-bar-gold text-[10px] font-bold tracking-[0.1em] uppercase">Bar</span>
                        <span className="text-gray-400 text-sm">Qua a Sáb • 17h às 00h</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Final (Coluna 3) */}
            <div className="flex flex-col items-start lg:items-end justify-center">
              <h5 className="text-white font-serif text-xl mb-4">Garanta sua mesa</h5>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="bg-bar-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition w-full text-center shadow-lg shadow-orange-500/20"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2026 Itatiaia 304. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-sm">
              Desenvolvido por Bernardo Pires
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;