import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface CourseCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  level: string;
  icon: string;
  features: string[];
}

const CourseCard = ({
  title,
  description,
  price,
  duration,
  level,
  icon,
  features,
}: CourseCardProps) => {
  return (
    <Card className="bg-dragon-scale/20 border-dragon-flame/30 hover:border-dragon-flame transition-all duration-300 hover:scale-105 dragon-glow">
      <CardHeader className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-dragon-red to-dragon-flame rounded-full flex items-center justify-center animate-flame">
          <Icon name={icon as any} size={32} className="text-white" />
        </div>
        <CardTitle className="text-2xl font-oswald text-white mb-2">
          {title}
        </CardTitle>
        <p className="text-gray-300 font-roboto-condensed">{description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex justify-between items-center text-sm">
          <span className="text-dragon-flame font-roboto-condensed">
            Уровень: {level}
          </span>
          <span className="text-dragon-flame font-roboto-condensed">
            Длительность: {duration}
          </span>
        </div>

        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Icon name="Check" size={16} className="text-dragon-flame" />
              <span className="text-gray-300 text-sm font-roboto-condensed">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-4">
        <div className="text-center">
          <span className="text-3xl font-oswald font-bold text-dragon-flame">
            {price}
          </span>
          <span className="text-gray-400 font-roboto-condensed ml-2">
            за курс
          </span>
        </div>
        <Button className="w-full bg-gradient-to-r from-dragon-red to-dragon-flame hover:from-dragon-red-dark hover:to-dragon-red text-white font-oswald font-bold">
          ВЫБРАТЬ КУРС
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
