import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-oswald font-bold mb-6">
            <span className="flame-text">ЗАПИСАТЬСЯ</span>
            <span className="text-white ml-4">НА КУРС</span>
          </h2>
          <p className="text-xl text-gray-300 font-roboto-condensed">
            Начните свое путешествие к мастерству уже сегодня
          </p>
        </div>

        <Card className="bg-dragon-scale/20 border-dragon-flame/30 dragon-glow">
          <CardHeader>
            <CardTitle className="text-2xl font-oswald text-center text-white">
              Заявка на обучение
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-dragon-flame font-roboto-condensed"
                >
                  Имя *
                </Label>
                <Input
                  id="name"
                  placeholder="Ваше имя"
                  className="bg-dragon-scale/40 border-dragon-flame/50 text-white placeholder:text-gray-400"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-dragon-flame font-roboto-condensed"
                >
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-dragon-scale/40 border-dragon-flame/50 text-white placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="course"
                className="text-dragon-flame font-roboto-condensed"
              >
                Выберите курс *
              </Label>
              <Select>
                <SelectTrigger className="bg-dragon-scale/40 border-dragon-flame/50 text-white">
                  <SelectValue placeholder="Выберите программу обучения" />
                </SelectTrigger>
                <SelectContent className="bg-dragon-scale border-dragon-flame">
                  <SelectItem
                    value="basics"
                    className="text-white hover:bg-dragon-flame/20"
                  >
                    Основы Драконьего Языка (25,000₽)
                  </SelectItem>
                  <SelectItem
                    value="aerobatics"
                    className="text-white hover:bg-dragon-flame/20"
                  >
                    Воздушная Акробатика (45,000₽)
                  </SelectItem>
                  <SelectItem
                    value="master"
                    className="text-white hover:bg-dragon-flame/20"
                  >
                    Мастер Драконов (85,000₽)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="experience"
                className="text-dragon-flame font-roboto-condensed"
              >
                Опыт работы с драконами
              </Label>
              <Select>
                <SelectTrigger className="bg-dragon-scale/40 border-dragon-flame/50 text-white">
                  <SelectValue placeholder="Выберите ваш уровень" />
                </SelectTrigger>
                <SelectContent className="bg-dragon-scale border-dragon-flame">
                  <SelectItem
                    value="none"
                    className="text-white hover:bg-dragon-flame/20"
                  >
                    Никогда не работал с драконами
                  </SelectItem>
                  <SelectItem
                    value="basic"
                    className="text-white hover:bg-dragon-flame/20"
                  >
                    Базовые навыки
                  </SelectItem>
                  <SelectItem
                    value="intermediate"
                    className="text-white hover:bg-dragon-flame/20"
                  >
                    Средний уровень
                  </SelectItem>
                  <SelectItem
                    value="advanced"
                    className="text-white hover:bg-dragon-flame/20"
                  >
                    Продвинутый уровень
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="text-dragon-flame font-roboto-condensed"
              >
                Дополнительная информация
              </Label>
              <Textarea
                id="message"
                placeholder="Расскажите о ваших целях и ожиданиях от курса..."
                rows={4}
                className="bg-dragon-scale/40 border-dragon-flame/50 text-white placeholder:text-gray-400"
              />
            </div>

            <Button className="w-full bg-gradient-to-r from-dragon-red to-dragon-flame hover:from-dragon-red-dark hover:to-dragon-red text-white font-oswald font-bold text-lg py-3">
              <Icon name="Send" className="mr-2" />
              ОТПРАВИТЬ ЗАЯВКУ
            </Button>

            <div className="text-center text-sm text-gray-400 font-roboto-condensed">
              * Обязательные поля для заполнения
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
