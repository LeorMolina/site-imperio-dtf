import Image from "next/image";
import { Phone, CheckCircle, Shirt, Truck, Palette, ArrowRight, Sun, Wind, ScanFace, ShoppingBag, Leaf, Layers } from "lucide-react";

export default function Home() {
  // Link do WhatsApp
  const whatsappLink = "https://wa.me/5515999999999?text=Olá,%20vi%20o%20site%20e%20quero%20um%20orçamento%20de%20DTF!";

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-imperio-gold selection:text-imperio-black">
      
      {/* --- HEADER (Topo Fixo DOURADO) --- */}
      <header className="fixed w-full top-0 z-50 bg-imperio-gold/95 backdrop-blur-md border-b border-black/5 shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          
          {/* LOGO */}
          <div className="relative w-40 h-12">
            <Image 
              src="/marca.png" 
              alt="Império DTF Print" 
              fill
              className="object-contain object-left"
              priority
            />
          </div>
          
          {/* Botão Desktop */}
          <a 
            href={whatsappLink}
            className="hidden md:flex bg-imperio-black hover:bg-gray-900 text-imperio-gold font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 items-center gap-2 shadow-lg"
          >
            <Phone size={18} />
            Orçamento Rápido
          </a>
        </div>
      </header>

      {/* --- HERO SECTION (A Dobra Principal) --- */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-imperio-black text-white overflow-hidden">
        {/* Fundo decorativo */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-imperio-gold/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          
          {/* Texto de Venda (ESQUERDA) */}
          <div className="md:w-1/2 z-10 space-y-8">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-imperio-gold mb-2">
              🚀 A Revolução da Estamparia Chegou
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Sua Marca, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-imperio-gold to-yellow-200">
                Eternizada.
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
              Impressão DTF de alta definição. Cores vibrantes, toque macio e durabilidade industrial. Peça agora sem quantidade mínima.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={whatsappLink}
                className="flex items-center justify-center gap-3 bg-imperio-gold hover:bg-imperio-goldLight text-imperio-black font-extrabold text-lg py-4 px-8 rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all transform hover:-translate-y-1"
              >
                <Phone size={24} />
                Quero Personalizar
              </a>
              <a 
                href="#como-funciona"
                className="flex items-center justify-center gap-2 bg-transparent border border-white/20 hover:bg-white/10 text-white font-medium text-lg py-4 px-8 rounded-xl transition-all"
              >
                Como funciona
              </a>
            </div>
          </div>
          
          {/* Mockup Visual (DIREITA) */}
          <div className="md:w-1/2 flex justify-center z-10 relative">
            <div className="relative w-full max-w-md aspect-square rounded-3xl border border-white/10 shadow-2xl overflow-hidden group">
              {/* --- MUDANÇA AQUI: AGORA PUXA DO ARQUIVO LOCAL /capa.jpg --- */}
              <Image 
                src="/capa.jpg" 
                alt="Camiseta Personalizada DTF" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-imperio-black/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 border-l-4 border-imperio-gold">
                <p className="text-gray-300 text-sm">Acabamento Impecável</p>
                <p className="text-white font-bold text-xl">Cores que brilham</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VANTAGENS (Grid) --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-imperio-black">Por que escolher o <span className="text-imperio-gold">DTF</span>?</h2>
            <p className="text-gray-600 text-lg">Esqueça o Silk Screen complicado ou o Transfer que desbota. O DTF é o futuro.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-imperio-gold/30">
              <div className="w-16 h-16 bg-imperio-gold/10 rounded-2xl flex items-center justify-center mb-6 text-imperio-gold group-hover:bg-imperio-gold group-hover:text-black transition-colors">
                <Palette size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Cores Infinitas</h3>
              <p className="text-gray-600 leading-relaxed">Degradês, fotos e artes complexas. Imprimimos exatamente o que você vê na tela.</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-imperio-gold/30">
              <div className="w-16 h-16 bg-imperio-black/5 rounded-2xl flex items-center justify-center mb-6 text-imperio-black group-hover:bg-imperio-black group-hover:text-white transition-colors">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Durabilidade Extrema</h3>
              <p className="text-gray-600 leading-relaxed">Pode esticar e lavar na máquina. A tinta ancora na fibra do tecido e não racha.</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-imperio-gold/30">
              <div className="w-16 h-16 bg-imperio-gold/10 rounded-2xl flex items-center justify-center mb-6 text-imperio-gold group-hover:bg-imperio-gold group-hover:text-black transition-colors">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Entrega Flash</h3>
              <p className="text-gray-600 leading-relaxed">Produção agilizada. Ideal para quem tem pressa e não pode esperar prazos longos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO VISEIRAS (TEXTO ESQ / IMAGEM DIR) --- */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            {/* Lado Esquerdo: Texto */}
            <div className="md:w-1/2">
              <span className="text-imperio-gold font-bold tracking-widest text-sm uppercase mb-2 block">Novidade</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-imperio-black">Viseira Esportiva <span className="text-imperio-gold">Premium</span>.</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Ideal para corridas, eventos ao ar livre e uniformização de equipes. Personalize com sua marca em DTF de alta definição.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Sun, title: "Proteção Solar", desc: "Aba curva de 18x7 cm para proteção total." },
                  { icon: ScanFace, title: "Ajuste Perfeito", desc: "Ergonomia ajustável de 52 a 62 cm." },
                  { icon: Palette, title: "Personalização DTF", desc: "Sua logo com cores vivas e durabilidade." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-5 group cursor-default">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center group-hover:bg-imperio-gold group-hover:text-black transition-all shadow-sm">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-gray-900 group-hover:text-imperio-gold transition-colors">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                 {/* BOTÃO PRETO */}
                 <a href={whatsappLink} className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Fazer meu pedido agora 
                    <ArrowRight size={20} />
                 </a>
              </div>
            </div>

            {/* Lado Direito: Imagem Única (ESTILO IGUAL ECOBAG: FUNDO BRANCO, BORDA CLARA) */}
            <div className="md:w-1/2 relative">
               <div className="aspect-[4/3] bg-white rounded-3xl overflow-hidden shadow-2xl relative border border-gray-100 group">
                 {/* IMAGEM VISEIRA */}
                 <Image 
                   src="/viseira-preta.jpg" 
                   alt="Viseira Esportiva Premium" 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-700" 
                 />
                 {/* Overlay igual da Ecobag */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
               </div>
               {/* Card Flutuante */}
               <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs animate-bounce-slow">
                 <div className="flex items-center gap-4">
                   <div className="bg-imperio-gold/20 text-imperio-gold p-3 rounded-full">
                     <Wind size={24} />
                   </div>
                   <div>
                     <p className="font-bold text-gray-900">Tecnologia Dry Fit</p>
                     <p className="text-xs text-gray-500">Secagem rápida e leveza.</p>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SEÇÃO ECOBAG (IMAGEM ESQ / TEXTO DIR) --- */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            {/* Lado Esquerdo: Imagem (JÁ ESTAVA NO ESTILO CERTO) */}
            <div className="md:w-1/2 relative">
               <div className="aspect-[4/3] bg-white rounded-3xl overflow-hidden shadow-2xl relative border border-gray-100 group">
                 <Image src="/ecobag.jpg" alt="Ecobag Brim Pesado" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
               </div>
               <div className="absolute -bottom-6 -right-6 bg-imperio-black text-white p-6 rounded-2xl shadow-xl border border-gray-800 max-w-xs animate-bounce-slow">
                 <div className="flex items-center gap-4">
                   <div className="bg-imperio-gold text-imperio-black p-3 rounded-full">
                     <CheckCircle size={24} />
                   </div>
                   <div>
                     <p className="font-bold">Alta Resistência</p>
                     <p className="text-xs text-gray-400">Suporta uso diário intenso.</p>
                   </div>
                 </div>
               </div>
            </div>

            {/* Lado Direito: Texto */}
            <div className="md:w-1/2">
              <span className="text-imperio-gold font-bold tracking-widest text-sm uppercase mb-2 block">Lançamento</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-imperio-black">Ecobag em Brim <span className="text-imperio-gold">Pesado</span>.</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Produzida em tecido 100% algodão, esta ecobag oferece estrutura encorpada e visual profissional. A escolha certa para marcas que valorizam qualidade e sustentabilidade.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Layers, title: "Tecido Brim Pesado", desc: "Trama firme, toque robusto e alta resistência de carga." },
                  { icon: Leaf, title: "100% Algodão", desc: "Material natural, lavável e ecologicamente correto." },
                  { icon: ShoppingBag, title: "Ideal para Marcas", desc: "Acabamento premium que valoriza sua identidade visual." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-5 group cursor-default">
                    <div className="w-12 h-12 rounded-xl bg-white text-gray-400 flex items-center justify-center group-hover:bg-imperio-gold group-hover:text-black transition-all shadow-sm">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-gray-900 group-hover:text-imperio-gold transition-colors">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                 {/* BOTÃO PRETO */}
                 <a href={whatsappLink} className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Fazer meu pedido agora 
                    <ArrowRight size={20} />
                 </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- COMO FUNCIONA (TEXTO ESQ / IMAGEM DIR) --- */}
      <section id="como-funciona" className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            {/* Lado Esquerdo: Texto */}
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-imperio-black">Do WhatsApp para sua <span className="text-imperio-gold">Camiseta</span>.</h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Envie sua Ideia", desc: "Mande sua foto, logo ou frase pelo WhatsApp." },
                  { step: "02", title: "Aprovação", desc: "Criamos um modelo digital para você ver como fica." },
                  { step: "03", title: "Entrega", desc: "Produzimos e enviamos para você rapidinho." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-400 font-bold text-lg flex items-center justify-center group-hover:bg-imperio-gold group-hover:text-black transition-colors">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1 text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                 {/* BOTÃO PRETO */}
                 <a href={whatsappLink} className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Fazer meu pedido agora 
                    <ArrowRight size={20} />
                 </a>
              </div>
            </div>

            {/* Lado Direito: Imagem (ESTILO IGUAL ECOBAG: FUNDO BRANCO, BORDA CLARA) */}
            <div className="md:w-1/2 relative">
               <div className="aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-2xl relative border border-gray-100 group">
                 {/* FOTO REAL */}
                 <Image 
                   src="/como-funciona.jpg" 
                   alt="Processo de Produção DTF" 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-700" 
                 />
                 {/* Overlay igual da Ecobag */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
               </div>
               <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs">
                 <div className="flex items-center gap-4">
                   <div className="bg-green-100 text-green-600 p-3 rounded-full">
                     <CheckCircle size={24} />
                   </div>
                   <div>
                     <p className="font-bold text-gray-900">Qualidade Garantida</p>
                     <p className="text-xs text-gray-500">Revisamos sua arte antes de imprimir.</p>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-imperio-black text-gray-400 py-12 border-t border-white/10">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-white text-2xl font-bold mb-2">Império <span className="text-imperio-gold">DTF</span></div>
              <p className="text-sm max-w-xs">A tecnologia que faltava para sua marca brilhar.</p>
            </div>
            <div className="flex gap-6 text-sm font-medium">
              <a href="#" className="hover:text-imperio-gold transition-colors">Instagram</a>
              <a href="#" className="hover:text-imperio-gold transition-colors">WhatsApp</a>
              <a href="#" className="hover:text-imperio-gold transition-colors">Localização</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
            © {new Date().getFullYear()} Império DTF Print. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* --- BOTÃO FLUTUANTE (Mobile) --- */}
      <a 
        href={whatsappLink}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all hover:scale-110 hover:-translate-y-1 animate-bounce md:hidden"
        aria-label="Falar no WhatsApp"
      >
        <Phone size={28} fill="white" />
      </a>
    </main>
  );
}