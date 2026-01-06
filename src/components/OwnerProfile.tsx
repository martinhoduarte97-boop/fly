import globeImage from "@/assets/globe-continents.jpg";
export const OwnerProfile = () => {
  return <section className="py-12 md:py-16 lg:py-20 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Coluna de Texto - Esquerda */}
          <div className="space-y-6">
            <div>
              <p className="text-xs md:text-sm tracking-[0.3em] text-gray-400 mb-3 font-light">
                CONHEÇA O PROPRIETÁRIO
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a8a] leading-tight">
                THIAGO HENRIQUE<br />TOURINHO
              </h2>
            </div>
            
            <div className="space-y-4 text-[#1e3a8a] text-base leading-relaxed">
              <p>
                Sou Thiago Henrique Tourinho de Souza Duarte, fundador da FlyViagensPB. 
                Nascido em Manaus, atualmente moro em Pato Branco – PR. Minha paixão por explorar 
                o mundo começou cedo.
              </p>
              <p>
                Ao longo dos anos, aprendi técnicas para tornar as viagens nacionais e internacionais 
                ainda mais confortáveis e acessíveis.
              </p>
              <p>
                Hoje, ajudo viajantes a desfrutarem do luxo e conforto, proporcionando experiências 
                sofisticadas e mais econômicas, porque acredito que todos merecem viajar com o máximo 
                de tranquilidade e estilo.
              </p>
            </div>
          </div>

          {/* Coluna da Imagem - Direita */}
          <div className="flex justify-center md:justify-end">
            <img alt="Globo terrestre com continentes" className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain" src="/lovable-uploads/c0f5bee2-4777-4d88-86ac-6a0964425ca3.webp" />
          </div>
        </div>
      </div>
    </section>;
};