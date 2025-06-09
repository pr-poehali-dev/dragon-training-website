import InstructorCard from "./InstructorCard";

const InstructorsSection = () => {
  const instructors = [
    {
      name: "Элара Огненное Сердце",
      title: "Главный Мастер Драконов",
      experience: "20 лет опыта",
      specialization: "Древние огненные драконы",
      dragons: 127,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Торин Стальная Воля",
      title: "Инструктор Воздушной Акробатики",
      experience: "15 лет опыта",
      specialization: "Боевые маневры",
      dragons: 89,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Селена Лунный Всадник",
      title: "Специалист по Ночным Драконам",
      experience: "12 лет опыта",
      specialization: "Теневые драконы",
      dragons: 64,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b378?w=300&h=300&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-dragon-scale/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Декоративный дракон */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none hidden lg:block">
          <img
            src="https://cdn.poehali.dev/files/7d1de9fc-fafe-4dd8-924a-4ddd87de1d88.png"
            alt="Декоративный дракон"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-5xl font-oswald font-bold mb-6">
            <span className="text-white">НАШИ</span>
            <span className="flame-text ml-4">МАСТЕРА</span>
          </h2>
          <p className="text-xl text-gray-300 font-roboto-condensed max-w-2xl mx-auto">
            Опытные драконьи наездники с многолетним стажем обучат вас всем
            секретам мастерства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {instructors.map((instructor, index) => (
            <InstructorCard key={index} {...instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
