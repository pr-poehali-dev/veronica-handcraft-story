import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const techniques = [
    {
      id: 'resin',
      title: 'Работа со смолой',
      description: 'Уникальные изделия из эпоксидной смолы с блестками и декором',
      image: 'https://cdn.poehali.dev/projects/2eaedf85-16c8-4370-9d16-18fc81fdb776/files/6ccaac08-5ba4-4224-a44e-1db5973abc6a.jpg',
      icon: 'Sparkles'
    },
    {
      id: 'painting',
      title: 'Живопись',
      description: 'Картины акрилом и маслом, различные техники и стили',
      image: 'https://cdn.poehali.dev/projects/2eaedf85-16c8-4370-9d16-18fc81fdb776/files/771bea34-2012-4ee7-8a5c-ca7cf90d9a89.jpg',
      icon: 'Palette'
    },
    {
      id: 'crafts',
      title: 'Поделки',
      description: 'Декоративные изделия ручной работы из различных материалов',
      image: 'https://cdn.poehali.dev/projects/2eaedf85-16c8-4370-9d16-18fc81fdb776/files/aa433a28-0210-46b6-a243-4124dec4575b.jpg',
      icon: 'Scissors'
    }
  ];

  const userWorks = [
    { url: 'https://cdn.poehali.dev/files/81454db1-f19b-4017-9435-8a778e4d1fb8.jpg', title: 'Смола с блестками' },
    { url: 'https://cdn.poehali.dev/files/55478992-8d72-4e7c-991f-f947d7cc2e25.jpg', title: 'Живопись' },
    { url: 'https://cdn.poehali.dev/files/84e5ada8-068e-42f9-a6a1-3135da06fa14.jpg', title: 'Творческая мастерская' },
    { url: 'https://cdn.poehali.dev/files/be04c3bf-7ee8-44ad-8391-b5fc5a29f236.jpg', title: 'Поделка-котик' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Творческое Портфолио
            </h1>
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'works', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'Обо мне'}
                  {section === 'works' && 'Работы'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => scrollToSection('contact')}
            >
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary">
                <Icon name="Sparkles" size={14} className="mr-1" />
                Творчество с душой
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Создаю красоту
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  своими руками
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Работаю в разных техниках: смола, живопись, поделки. Каждая работа - это часть моей души и творческого пути.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                  onClick={() => scrollToSection('works')}
                >
                  <Icon name="Eye" size={20} className="mr-2" />
                  Смотреть работы
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('about')}
                >
                  Моя история
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              {userWorks.map((work, idx) => (
                <div
                  key={idx}
                  className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                    idx === 0 ? 'col-span-2' : ''
                  }`}
                >
                  <img
                    src={work.url}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">{work.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-secondary to-accent">
              <Icon name="Heart" size={14} className="mr-1" />
              Моя история
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Обо мне</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Творчество - это не просто хобби, это способ самовыражения и источник радости
            </p>
          </div>

          <div className="space-y-8 animate-slide-up">
            <Card className="border-2 hover:border-primary transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                    <Icon name="Sparkles" size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Начало пути - 4 года назад</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Всё началось в новый год, когда бабушка подарила мне алмазную мозаику. 
                      Я начала её делать, но оказалось сложно, и я её бросила на целых 3 года. 
                      Но когда я наконец её доделала - меня понесло! Картина по номерам, эпоксидная смола, вязание - 
                      творчество захватило меня полностью.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl">
                    <Icon name="Palette" size={28} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Развитие и эксперименты</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      После первой законченной мозаики я не могла остановиться. Картины по номерам, 
                      работа с эпоксидной смолой, вязание - каждая новая техника открывала целый мир возможностей. 
                      С каждым проектом я становилась увереннее и смелее в своих творческих экспериментах.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl">
                    <Icon name="Star" size={28} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Сегодня</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Сейчас творчество - это неотъемлемая часть моей жизни. Каждая работа наполнена эмоциями и любовью, 
                      и я рада делиться своими творениями с миром.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="works" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-accent to-primary">
              <Icon name="Brush" size={14} className="mr-1" />
              Галерея
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Мои работы</h2>
            <p className="text-xl text-muted-foreground">
              Разные техники, единый стиль - творчество без границ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techniques.map((technique, idx) => (
              <Card
                key={technique.id}
                className="group overflow-hidden border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl animate-fade-in"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={technique.image}
                    alt={technique.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name={technique.icon as any} size={24} />
                        <h3 className="text-2xl font-bold">{technique.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {technique.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-primary to-accent">
              <Icon name="Mail" size={14} className="mr-1" />
              Связаться
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Давайте создадим что-то вместе</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Хотите заказать уникальное изделие или просто поговорить о творчестве? Буду рада обсудить ваши идеи!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity text-lg px-8"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать мне
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Instagram" size={20} className="mr-2" />
                Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Творческое Портфолио. Создано с{' '}
            <Icon name="Heart" size={16} className="inline text-primary" />
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;