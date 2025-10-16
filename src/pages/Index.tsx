import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const properties = [
    {
      id: 1,
      title: 'Резиденция "Лесной Уют"',
      location: 'Истринский район',
      price: '45 000 000 ₽',
      area: '350 м²',
      image: 'https://cdn.poehali.dev/projects/2d9a5aac-168f-480e-88b0-d75079695742/files/9eca8051-fc27-40e1-aaf6-40298b18e47d.jpg'
    },
    {
      id: 2,
      title: 'Усадьба "Белый Сад"',
      location: 'Одинцовский район',
      price: '62 000 000 ₽',
      area: '420 м²',
      image: 'https://cdn.poehali.dev/projects/2d9a5aac-168f-480e-88b0-d75079695742/files/adfd8506-32c2-4294-a597-d7f9364109c0.jpg'
    },
    {
      id: 3,
      title: 'Особняк "Дворянское Гнездо"',
      location: 'Рублево-Успенское шоссе',
      price: '78 000 000 ₽',
      area: '500 м²',
      image: 'https://cdn.poehali.dev/projects/2d9a5aac-168f-480e-88b0-d75079695742/files/ef7e390e-af48-49f6-9ca5-b9a59442a043.jpg'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gold/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-serif font-bold text-deep-black">
              ELITE COUNTRY HOMES
            </h1>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'properties', label: 'Объекты' },
                { id: 'mortgage', label: 'Ипотека' },
                { id: 'location', label: 'Локация' },
                { id: 'about', label: 'О компании' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-gold ${
                    activeSection === item.id ? 'text-gold' : 'text-deep-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-b from-white to-cream">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-6xl md:text-7xl font-serif font-bold text-deep-black mb-6">
            Элитная загородная
            <br />
            недвижимость
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Престижные резиденции в лучших локациях Подмосковья.
            Воплотите мечту о загородной жизни класса люкс.
          </p>
          <Button 
            onClick={() => scrollToSection('properties')}
            className="bg-gold hover:bg-gold/90 text-deep-black font-medium px-8 py-6 text-lg rounded-none border-2 border-gold"
          >
            Смотреть объекты
          </Button>
        </div>
      </section>

      <section id="properties" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif font-bold text-deep-black text-center mb-4">
            Наши объекты
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Каждая резиденция — произведение архитектурного искусства
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <Card 
                key={property.id} 
                className="overflow-hidden border-2 border-gold/20 hover:border-gold transition-all duration-300 hover:shadow-2xl animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-deep-black px-4 py-2 font-bold">
                    {property.price}
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="text-2xl font-serif font-bold text-deep-black mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Icon name="MapPin" size={16} />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-6">
                    <Icon name="Home" size={16} />
                    <span>{property.area}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-gold text-deep-black hover:bg-gold hover:text-deep-black rounded-none"
                  >
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="mortgage" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-serif font-bold text-deep-black text-center mb-4">
            Условия ипотеки
          </h2>
          <p className="text-center text-muted-foreground mb-16">
            Выгодные условия кредитования от ведущих банков
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-gold/20 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <Icon name="Percent" size={24} className="text-gold" />
                </div>
                <h3 className="text-2xl font-serif font-bold">Ставка от 6.5%</h3>
              </div>
              <p className="text-muted-foreground">
                Специальные программы для элитной недвижимости с минимальной процентной ставкой
              </p>
            </Card>
            <Card className="border-2 border-gold/20 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <Icon name="CalendarDays" size={24} className="text-gold" />
                </div>
                <h3 className="text-2xl font-serif font-bold">До 30 лет</h3>
              </div>
              <p className="text-muted-foreground">
                Длительный срок кредитования для максимального комфорта
              </p>
            </Card>
            <Card className="border-2 border-gold/20 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <Icon name="Wallet" size={24} className="text-gold" />
                </div>
                <h3 className="text-2xl font-serif font-bold">От 20%</h3>
              </div>
              <p className="text-muted-foreground">
                Первоначальный взнос от 20% стоимости объекта
              </p>
            </Card>
            <Card className="border-2 border-gold/20 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <Icon name="FileCheck" size={24} className="text-gold" />
                </div>
                <h3 className="text-2xl font-serif font-bold">За 3 дня</h3>
              </div>
              <p className="text-muted-foreground">
                Быстрое одобрение заявки и минимальный пакет документов
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="location" className="py-20 px-6 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-serif font-bold text-deep-black text-center mb-4">
            О локации и инфраструктуре
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Престижные районы с развитой инфраструктурой для комфортной жизни
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                <Icon name="Car" size={32} className="text-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">15-25 км от МКАД</h3>
              <p className="text-muted-foreground">
                Удобная транспортная доступность по основным магистралям
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                <Icon name="Trees" size={32} className="text-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Экология</h3>
              <p className="text-muted-foreground">
                Чистый воздух, леса, водоемы и охраняемые природные зоны
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                <Icon name="ShoppingBag" size={32} className="text-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Инфраструктура</h3>
              <p className="text-muted-foreground">
                Магазины, школы, медицинские центры, спортивные клубы
              </p>
            </div>
          </div>
          <Separator className="my-12 bg-gold/20" />
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">Рядом с вами</h3>
              <ul className="space-y-4">
                {[
                  'Гольф-клубы и конные центры',
                  'Частные школы и детские сады',
                  'Премиум торговые центры',
                  'Фитнес-клубы и SPA-центры',
                  'Рестораны высокой кухни',
                  'Медицинские центры премиум-класса'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">Безопасность</h3>
              <p className="text-muted-foreground mb-4">
                Все поселки оборудованы современными системами безопасности:
              </p>
              <ul className="space-y-4">
                {[
                  'Круглосуточная охрана и видеонаблюдение',
                  'КПП с системой распознавания',
                  'Огороженная территория',
                  'Патрулирование поселка',
                  'Система тревожной сигнализации'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-serif font-bold text-deep-black mb-6">
            О компании
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Elite Country Homes — ведущий застройщик элитной загородной недвижимости 
            с 15-летним опытом работы на рынке премиум-сегмента. Мы создаем не просто дома, 
            а образ жизни высочайшего уровня.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-6">
              <div className="text-5xl font-serif font-bold text-gold mb-2">15+</div>
              <p className="text-muted-foreground">лет на рынке</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-serif font-bold text-gold mb-2">200+</div>
              <p className="text-muted-foreground">построенных домов</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-serif font-bold text-gold mb-2">98%</div>
              <p className="text-muted-foreground">довольных клиентов</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-cream to-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-serif font-bold text-deep-black text-center mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
          </p>
          <Card className="border-2 border-gold/20 p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input 
                  placeholder="Иван Петров" 
                  className="border-gold/30 focus:border-gold rounded-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input 
                  placeholder="+7 (900) 000-00-00" 
                  className="border-gold/30 focus:border-gold rounded-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  placeholder="ivan@example.com" 
                  className="border-gold/30 focus:border-gold rounded-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о ваших пожеланиях..." 
                  className="border-gold/30 focus:border-gold rounded-none min-h-32"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-gold hover:bg-gold/90 text-deep-black font-medium py-6 rounded-none border-2 border-gold"
              >
                Отправить заявку
              </Button>
            </form>
            <Separator className="my-8 bg-gold/20" />
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={20} className="text-gold" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={20} className="text-gold" />
                <span>info@elitecountryhomes.ru</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={20} className="text-gold" />
                <span>Москва, Рублевское шоссе, д. 123</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-deep-black text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-serif font-bold mb-4 text-gold">
            ELITE COUNTRY HOMES
          </h3>
          <p className="text-gray-400 mb-6">
            Элитная загородная недвижимость
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Elite Country Homes. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
