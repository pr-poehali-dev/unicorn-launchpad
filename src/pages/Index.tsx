import { useState } from "react";
import {
  Heart,
  Shield,
  Zap,
  Eye,
  Clock,
  ArrowRight,
  Hash,
  Users,
  Mic,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  MessageCircle,
  Phone,
  Video,
  Smile,
  Image,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Message {
  id: number;
  name: string;
  avatar: string;
  color: string;
  text: string;
  time: string;
}

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, name: "Мама", avatar: "👩", color: "from-pink-500 to-rose-500", text: "Дети, как вы там? Уже пообедали? ❤️", time: "12:05" },
    { id: 2, name: "Сын Дима", avatar: "👦", color: "from-blue-500 to-cyan-500", text: "Да, мам, всё хорошо! Уже пообедал 😊 Приеду в субботу, привезу подарки!", time: "12:08" },
    { id: 3, name: "Подруга Наташа", avatar: "👩‍🦰", color: "from-violet-500 to-purple-500", text: "Девочки, сделала ремонт! Смотрите как красиво получилось 🏠✨", time: "12:15" },
  ]);

  const sendMessage = () => {
    if (!inputText.trim()) return;
    const now = new Date();
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), name: "Вы", avatar: "😊", color: "from-green-500 to-teal-500", text: inputText.trim(), time },
    ]);
    setInputText("");
  };

  return (
    <div className="min-h-screen bg-[#36393f] text-white overflow-x-hidden">
      {/* Навигация */}
      <nav className="bg-[#2f3136] border-b border-[#202225] px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">Близкие</h1>
              <p className="text-xs text-[#b9bbbe] hidden sm:block">Мессенджер для семьи и друзей</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b]">
              О приложении
            </Button>
            <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
              Скачать бесплатно
            </Button>
          </div>
          <Button
            variant="ghost"
            className="sm:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-[#202225]">
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b] justify-start">
                О приложении
              </Button>
              <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
                Скачать бесплатно
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Макет в стиле мессенджера */}
      <div className="flex min-h-screen">
        {/* Боковая панель групп */}
        <div className="hidden lg:flex w-[72px] bg-[#202225] flex-col items-center py-3 gap-2">
          <div className="w-12 h-12 bg-[#5865f2] rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div className="w-8 h-[2px] bg-[#36393f] rounded-full"></div>
          {["👨‍👩‍👧", "👫", "🏠", "🎉"].map((emoji, i) => (
            <div
              key={i}
              className="w-12 h-12 bg-[#36393f] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#5865f2] text-lg"
            >
              {emoji}
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Боковая панель чатов */}
          <div
            className={`${mobileSidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-60 bg-[#2f3136] flex flex-col`}
          >
            <div className="p-4 border-b border-[#202225] flex items-center justify-between">
              <h2 className="text-white font-semibold text-base">Семья и друзья</h2>
              <Button
                variant="ghost"
                className="lg:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-1"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 p-2">
              <div className="mb-4">
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Групповые чаты</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["наша-семья", "лучшие-друзья", "родители", "праздники"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Hash className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Голосовые комнаты</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["Семейный звонок", "Вечер с друзьями"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Mic className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Пользователь */}
            <div className="p-2 bg-[#292b2f] flex items-center gap-2">
              <div className="w-8 h-8 bg-[#5865f2] rounded-full flex items-center justify-center relative">
                <span className="text-white text-sm font-medium">М</span>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#292b2f] rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">Мама</div>
                <div className="text-[#3ba55c] text-xs truncate">В сети</div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Mic className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Settings className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Область чата */}
          <div className="flex-1 flex flex-col">
            {/* Заголовок чата */}
            <div className="h-12 bg-[#36393f] border-b border-[#202225] flex items-center px-4 gap-2">
              <Button
                variant="ghost"
                className="lg:hidden text-[#8e9297] hover:text-[#dcddde] hover:bg-[#40444b] p-1 mr-2"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <Hash className="w-5 h-5 text-[#8e9297]" />
              <span className="text-white font-semibold">наша-семья</span>
              <div className="w-px h-6 bg-[#40444b] mx-2 hidden sm:block"></div>
              <span className="text-[#8e9297] text-sm hidden sm:block">Оставайтесь близкими, где бы вы ни были</span>
              <div className="ml-auto flex items-center gap-2 sm:gap-4">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Video className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
              </div>
            </div>

            {/* Сообщения */}
            <div className="flex-1 p-2 sm:p-4 space-y-4 sm:space-y-6 overflow-y-auto">

              {/* Приветственное сообщение бота */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Близкие</span>
                    <span className="text-[#5865f2] text-xs bg-[#5865f2]/20 px-1 rounded">приложение</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 10:00</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    <p className="mb-3 sm:mb-4">
                      <strong>Добро пожаловать в «Близкие»!</strong> Общайтесь с семьёй и друзьями в любой точке мира — легко и с теплом.
                    </p>
                    <div className="bg-[#2f3136] border-l-4 border-[#5865f2] p-3 sm:p-4 rounded">
                      <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Что умеет «Близкие»:</h3>
                      <ul className="space-y-1 text-xs sm:text-sm text-[#b9bbbe]">
                        <li>💬 Текстовые чаты для всей семьи и друзей</li>
                        <li>📞 Голосовые и видеозвонки в один клик</li>
                        <li>📸 Делитесь фото и видео моментально</li>
                        <li>📍 Показывайте своё местоположение близким</li>
                        <li>🔔 Уведомления, чтобы ничего не пропустить</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Динамические сообщения */}
              {messages.map((msg) => (
              <div key={msg.id} className="flex gap-2 sm:gap-4">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${msg.color} rounded-full flex items-center justify-center flex-shrink-0 text-sm`}>
                  {msg.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">{msg.name}</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в {msg.time}</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">{msg.text}</div>
                </div>
              </div>
              ))}

              {/* Карточка профиля мамы (статичная) */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                  👩
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Мама</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Профиль</span>
                  </div>

                  {/* Карточка статуса */}
                  <div className="bg-[#2f3136] border border-[#202225] rounded-lg overflow-hidden w-full max-w-sm">
                    <div className="h-16 sm:h-20 bg-gradient-to-r from-pink-500 to-rose-400 relative">
                      <div className="absolute -bottom-3 sm:-bottom-4 left-3 sm:left-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#2f3136] bg-[#36393f] overflow-hidden relative">
                          <div className="w-full h-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#2f3136] rounded-full flex items-center justify-center">
                              <span className="text-2xl">👩</span>
                            </div>
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-[#3ba55c] border-4 border-[#2f3136] rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 sm:pt-6 px-3 sm:px-4 pb-3 sm:pb-4">
                      <div className="mb-3 sm:mb-4">
                        <h3 className="text-white text-lg sm:text-xl font-bold mb-1">Мама</h3>
                        <div className="flex items-center gap-2 text-[#b9bbbe] text-xs sm:text-sm">
                          <MapPin className="w-3 h-3" />
                          <span>Москва, Россия</span>
                        </div>
                      </div>

                      <div className="mb-3 sm:mb-4">
                        <div className="bg-[#36393f] rounded-lg p-2 sm:p-3 relative">
                          <div className="absolute -top-2 left-3 sm:left-4 w-4 h-4 bg-[#36393f] rotate-45"></div>
                          <div className="flex items-center gap-2 text-[#dcddde] text-xs sm:text-sm">
                            <span>🏠</span>
                            <span>Дома, готовлю борщ</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex border-b border-[#40444b] mb-3 sm:mb-4">
                        <button className="px-3 sm:px-4 py-2 text-[#8e9297] text-xs sm:text-sm font-medium hover:text-[#dcddde]">
                          Обо мне
                        </button>
                        <button className="px-3 sm:px-4 py-2 text-white text-xs sm:text-sm font-medium border-b-2 border-[#5865f2]">
                          Активность
                        </button>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2 sm:mb-3">
                          <span>Статус</span>
                        </div>
                        <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-[#36393f] rounded-lg">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">
                            👩‍👩‍👧‍👦
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-semibold text-xs sm:text-sm mb-1">Наша семья</div>
                            <div className="text-[#dcddde] text-xs sm:text-sm mb-1">Ждёт всех на выходных</div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#3ba55c] rounded-full animate-pulse"></div>
                              <span className="text-[#3ba55c] text-xs font-medium">В сети сейчас</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Блок с функциями */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-3 sm:p-4 max-w-lg">
                <h3 className="text-white font-semibold mb-3 text-sm sm:text-base flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#5865f2]" />
                  Почему «Близкие»
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                  {[
                    {
                      icon: <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Простое общение",
                      desc: "Без лишних настроек и сложностей",
                    },
                    {
                      icon: <Video className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Видеозвонки",
                      desc: "Видьте лица родных в любое время",
                    },
                    {
                      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Всегда на связи",
                      desc: "Уведомления о важных моментах",
                    },
                    {
                      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Безопасно",
                      desc: "Переписка только для своих",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded hover:bg-[#36393f] transition-colors"
                    >
                      <div className="text-[#5865f2] mt-0.5">{feature.icon}</div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-sm">{feature.title}</div>
                        <div className="text-[#b9bbbe] text-xs sm:text-sm">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Поле ввода сообщения */}
            <div className="p-2 sm:p-4">
              <div className="bg-[#40444b] rounded-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-3">
                <input
                  className="bg-transparent flex-1 text-white text-xs sm:text-sm outline-none placeholder-[#72767d]"
                  placeholder="Написать в #наша-семья..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <div className="flex items-center gap-2 text-[#b9bbbe]">
                  <Smile className="w-4 h-4 cursor-pointer hover:text-[#dcddde]" />
                  <button
                    onClick={sendMessage}
                    className="w-7 h-7 bg-[#5865f2] hover:bg-[#4752c4] rounded flex items-center justify-center transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Боковая панель участников */}
          <div className="hidden xl:block w-60 bg-[#2f3136] p-4">
            <div className="mb-4">
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2">В сети — 3</h3>
              <div className="space-y-2">
                {[
                  {
                    name: "Мама",
                    status: "Дома, готовит",
                    avatar: "👩",
                    color: "from-pink-500 to-rose-500",
                  },
                  { name: "Сын Дима", status: "В пути домой", avatar: "👦", color: "from-blue-500 to-cyan-500" },
                  { name: "Подруга Наташа", status: "Сделала ремонт!", avatar: "👩‍🦰", color: "from-violet-500 to-purple-500" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-[#36393f] cursor-pointer">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative text-sm`}
                    >
                      {user.avatar}
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#2f3136] rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{user.name}</div>
                      <div className="text-[#b9bbbe] text-xs truncate">{user.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA блок */}
            <div className="mt-6 p-3 bg-[#5865f2]/10 border border-[#5865f2]/30 rounded-lg">
              <h4 className="text-white text-sm font-semibold mb-2">Присоединяйтесь!</h4>
              <p className="text-[#b9bbbe] text-xs mb-3">Пригласите семью и друзей — общение станет теплее</p>
              <Button className="w-full bg-[#5865f2] hover:bg-[#4752c4] text-white text-xs py-2 rounded">
                Скачать бесплатно
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;