import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface InstructorCardProps {
  name: string;
  title: string;
  experience: string;
  specialization: string;
  dragons: number;
  image: string;
}

const InstructorCard = ({
  name,
  title,
  experience,
  specialization,
  dragons,
  image,
}: InstructorCardProps) => {
  return (
    <Card className="bg-dragon-scale/20 border-dragon-flame/30 hover:border-dragon-flame transition-all duration-300 overflow-hidden group">
      <CardHeader className="text-center pb-4">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-dragon-flame">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h3 className="text-xl font-oswald font-bold text-white">{name}</h3>
        <p className="text-dragon-flame font-roboto-condensed">{title}</p>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center gap-2">
          <Icon name="Clock" size={16} className="text-dragon-flame" />
          <span className="text-gray-300 text-sm font-roboto-condensed">
            {experience}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Icon name="Zap" size={16} className="text-dragon-flame" />
          <span className="text-gray-300 text-sm font-roboto-condensed">
            {specialization}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Icon name="Award" size={16} className="text-dragon-flame" />
          <span className="text-gray-300 text-sm font-roboto-condensed">
            {dragons} укрощенных драконов
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default InstructorCard;
