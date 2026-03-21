import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Instagram, Menu, X, ChevronRight, Phone} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      {/* 1. NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-bar-black/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'}`}>
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
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="bg-bar-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition shadow-lg shadow-orange-500/30"
            >
              Reservar Mesa
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
            Drinks autorais.<br/>
            <span className="text-bar-gold italic">Experiências únicas.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            O ponto de encontro perfeito para quem busca sofisticação, bons momentos e uma atmosfera inesquecível.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* APLICADO NO BOTÃO VER CARDÁPIO TAMBÉM */}
            <a href="#menu" onClick={(e) => scrollToSection(e, 'menu')} className="bg-transparent border-2 border-bar-gold text-bar-gold hover:bg-bar-gold hover:text-bar-black px-8 py-4 rounded-full font-medium transition duration-300">
              Ver Cardápio
            </a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="bg-bar-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium transition duration-300 shadow-lg shadow-orange-500/20">
              Reservar Mesa
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
              <h2 className="text-bar-gold text-sm font-bold tracking-[0.2em] uppercase mb-3">Nossa Essência</h2>
              <h3 className="text-4xl font-serif text-bar-black mb-6">Aconchego em cada detalhe</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nascido do desejo de unir a elegância da alta coquetelaria com o calor de um ambiente acolhedor, o Itatiaia 304 é o seu novo refúgio. 
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nossas mesas de madeira rústica e iluminação quente em tons de mel criam o cenário perfeito para conversas que entram pela noite. Aqui, o sofisticado é acessível.
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
            <h2 className="text-bar-gold text-sm font-bold tracking-[0.2em] uppercase mb-3">Gastronomia & Coquetelaria</h2>
            <h3 className="text-4xl font-serif text-bar-black">Nosso Cardápio</h3>
          </div>

          {/* GRID DE PRATOS E PORÇÕES (COM IMAGENS) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            
            {/* PRATO DO DIA */}
            <div>
              <h4 className="text-2xl font-serif text-bar-wood mb-6 border-b-2 border-bar-gold/30 pb-2 inline-block">Prato do Dia</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Item Prato 1 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group">
                  <div className="h-48 overflow-hidden">
                    <img src="/public/pratos/feijoada.jpg" alt="Prato Executivo" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-medium text-bar-black text-lg">Feijoada</h5>
                      <span className="text-bar-gold font-bold">R$ 23</span>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2">Feijão preto cozido com carnes nobres e arroz.</p>
                  </div>
                </div>

                {/* Item Prato 2 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group">
                  <div className="h-48 overflow-hidden">
                    <img src="/public/pratos/bife.jpg" alt="Prato Especial" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-medium text-bar-black text-lg">Bife de Boi</h5>
                      <span className="text-bar-gold font-bold">R$ 42</span>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2">Bife de boi, arroz, feijão e batata frita.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* PORÇÕES */}
            <div>
              <h4 className="text-2xl font-serif text-bar-wood mb-6 border-b-2 border-bar-gold/30 pb-2 inline-block">Porções</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Item Porção 1 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group">
                  <div className="h-48 overflow-hidden">
                    <img src="/public/pratos/fritas.jpg" alt="Porção de Fritas" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-medium text-bar-black text-lg">Fritas</h5>
                      <span className="text-bar-gold font-bold">R$ 35</span>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2">Batatas fritas com cebolinha.</p>
                  </div>
                </div>

                {/* Item Porção 2 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group">
                  <div className="h-48 overflow-hidden">
                    <img src="/public/pratos/bolinhos.jpg" alt="Tábua de Frios" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-medium text-bar-black text-lg">Bolinhos</h5>
                      <span className="text-bar-gold font-bold">R$ 45</span>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2">Porção de bolinhos recheados com carne.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* LISTA DE BEBIDAS (SEM IMAGENS, SÓ VALORES) */}
          <div className="max-w-4xl mx-auto">
            <h4 className="text-2xl font-serif text-bar-gold mb-6 text-center">Bebidas & Drinks</h4>
            
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
             <button className="bg-bar-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition font-medium shadow-lg hover:shadow-xl">
               Ver Cardápio Completo em PDF
             </button>
          </div>
        </div>
      </section>

      {/* 5. GALERIA / AMBIENTE (Grid estilo Instagram) */}
      <section id="ambiente" className="py-2 bg-bar-black">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            <img src="https://images.unsplash.com/photo-1470337458703-415120a41789?q=80&w=600&auto=format&fit=crop" alt="Detalhe Bar" className="w-full h-64 object-cover hover:opacity-80 transition cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=600&auto=format&fit=crop" alt="Drinks" className="w-full h-64 object-cover hover:opacity-80 transition cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop" alt="Mesas de Madeira" className="w-full h-64 object-cover hover:opacity-80 transition cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1525268323446-0505b6fe7778?q=80&w=600&auto=format&fit=crop" alt="Luzes Quentes" className="w-full h-64 object-cover hover:opacity-80 transition cursor-pointer" />
         </div>
      </section>

      {/* 6. CONTATO & FOOTER */}
      <footer id="contato" className="bg-bar-black pt-20 pb-10 border-t-4 border-bar-gold">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            {/* Info */}
            <div>
              <h4 className="text-2xl font-serif text-bar-gold mb-6">Itatiaia 304</h4>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Seu refúgio de sofisticação e bons drinks. A combinação perfeita entre o clássico e o autoral.
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

            {/* Endereço e Horários */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-bar-orange flex-shrink-0 mt-1" size={24} />
                <div>
                  <h5 className="text-white font-medium mb-1">Localização</h5>
                  <p className="text-gray-400">Rua Itatiaia, 304<br/>Lagoinha, Belo Horizonte, Brazil 31210170</p>
                </div>
              </div>
              
              {/* HORÁRIOS ATUALIZADOS AQUI */}
              <div className="flex items-start gap-4">
                <Clock className="text-bar-orange flex-shrink-0 mt-1" size={24} />
                <div className="w-full">
                  <h5 className="text-white font-medium mb-3">Horário de Funcionamento</h5>
                  <ul className="space-y-3">
                    <li className="flex flex-col">
                      <span className="text-bar-gold text-xs font-bold tracking-[0.1em] uppercase mb-1">
                        Almoço 
                      </span>
                      <span className="text-gray-400 text-sm">
                        Segunda a Sexta • 11:00 às 15:00
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-bar-gold text-xs font-bold tracking-[0.1em] uppercase mb-1">
                        Bar
                      </span>
                      <span className="text-gray-400 text-sm">
                        Quarta a Sábado • 17:00 às 00:00
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* CTA Final */}
            <div className="flex flex-col items-start md:items-end justify-center">
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
              Desenvolvido com ☕ por você
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;