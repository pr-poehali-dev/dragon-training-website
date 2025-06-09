import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dragon Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2000&auto=format&fit=crop")',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dragon-red/40 via-dragon-scale/60 to-black/80" />

      {/* Dragon Silhouette */}
      <div className="absolute top-10 right-10 opacity-20">
        <div className="w-64 h-64 bg-dragon-red/30 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-oswald font-bold mb-6">
          <span className="flame-text">ШКОЛА</span>
          <br />
          <span className="text-white">ДРЕССИРОВКИ</span>
          <br />
          <span className="flame-text">ДРАКОНОВ</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-roboto-condensed">
          Овладей древним искусством управления драконами
          <br />
          <span className="text-dragon-flame">
            Стань легендарным драконьим наездником
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-dragon-red to-dragon-flame hover:from-dragon-red-dark hover:to-dragon-red text-white px-8 py-4 text-lg font-oswald font-bold dragon-glow hover:scale-105 transition-all duration-300"
          >
            <Icon name="Flame" className="mr-2" />
            НАЧАТЬ ОБУЧЕНИЕ
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-dragon-flame text-dragon-flame hover:bg-dragon-flame hover:text-black px-8 py-4 text-lg font-oswald transition-all duration-300"
          >
            <Icon name="Play" className="mr-2" />
            СМОТРЕТЬ ДЕМО
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-oswald font-bold text-dragon-flame mb-2">
              500+
            </div>
            <div className="text-gray-400 font-roboto-condensed">
              Укрощенных драконов
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-oswald font-bold text-dragon-flame mb-2">
              15
            </div>
            <div className="text-gray-400 font-roboto-condensed">Лет опыта</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-oswald font-bold text-dragon-flame mb-2">
              100%
            </div>
            <div className="text-gray-400 font-roboto-condensed">
              Гарантия безопасности
            </div>
          </div>
        </div>
      </div>

      {/* Floating Fire Particles */}
      <div className="absolute bottom-20 left-10 w-2 h-2 bg-dragon-flame rounded-full animate-dragon-breath" />
      <div
        className="absolute bottom-32 left-20 w-1 h-1 bg-dragon-red rounded-full animate-dragon-breath"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-24 left-32 w-1.5 h-1.5 bg-dragon-flame rounded-full animate-dragon-breath"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
};

export default HeroSection;
