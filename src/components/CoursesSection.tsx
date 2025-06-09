import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const courses = [
    {
      title: "Основы Драконьего Языка",
      description: "Изучите базовые команды и жесты для общения с драконами",
      price: "25,000₽",
      duration: "4 недели",
      level: "Начинающий",
      icon: "MessageCircle",
      features: [
        "Базовые команды управления",
        "Язык жестов драконов",
        "Техники безопасности",
        "Практика с молодыми драконами",
      ],
    },
    {
      title: "Воздушная Акробатика",
      description:
        "Научитесь управлять драконом в полете и выполнять сложные маневры",
      price: "45,000₽",
      duration: "8 недель",
      level: "Продвинутый",
      icon: "Plane",
      features: [
        "Техники высшего пилотажа",
        "Боевые маневры в воздухе",
        "Синхронные полеты",
        "Экстремальные трюки",
      ],
    },
    {
      title: "Мастер Драконов",
      description:
        "Полный курс для тех, кто хочет стать профессиональным наездником",
      price: "85,000₽",
      duration: "16 недель",
      level: "Эксперт",
      icon: "Crown",
      features: [
        "Все техники управления",
        "Работа с древними драконами",
        "Магические связи",
        "Сертификат мастера",
      ],
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-oswald font-bold mb-6">
            <span className="flame-text">КУРСЫ</span>
            <span className="text-white ml-4">ОБУЧЕНИЯ</span>
          </h2>
          <p className="text-xl text-gray-300 font-roboto-condensed max-w-2xl mx-auto">
            От базовых навыков до мастерского уровня - выберите программу,
            которая подходит именно вам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
