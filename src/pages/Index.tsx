import { useState } from "react";
import {
  Heart,
  ArrowRight,
  Hash,
  Users,
  Mic,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  Phone,
  Video,
  Smile,
  UserPlus,
  Send,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  name: string;
  avatar: string;
  color: string;
  text: string;
  time: string;
}

interface Contact {
  name: string;
  avatar: string;
  color: string;
  status: string;
}

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [showAddContact, setShowAddContact] = useState(false);
  const [newContactName, setNewContactName] = useState("");
  const [newContactEmoji, setNewContactEmoji] = useState("😊");

  const [contacts, setContacts] = useState<Contact[]>([
    { name: "Мама", avatar: "👩", color: "from-pink-500 to-rose-500", status: "Дома, готовит" },
    { name: "Сын Дима", avatar: "👦", color: "from-blue-500 to-cyan-500", status: "В пути домой" },
    { name: "Подруга Наташа", avatar: "👩‍🦰", color: "from-violet-500 to-purple-500", status: "Сделала ремонт!" },
  ]);

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, name: "Мама", avatar: "👩", color: "from-pink-500 to-rose-500", text: "Дети, как вы там? Уже пообедали? ❤️", time: "12:05" },
    { id: 2, name: "Сын Дима", avatar: "👦", color: "from-blue-500 to-cyan-500", text: "Да, мам, всё хорошо! Приеду в субботу 😊", time: "12:08" },
    { id: 3, name: "Подруга Наташа", avatar: "👩‍🦰", color: "from-violet-500 to-purple-500", text: "Девочки, сделала ремонт! 🏠✨", time: "12:15" },
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

  const addContact = () => {
    if (!newContactName.trim()) return;
    const colors = ["from-orange-500 to-yellow-500", "from-teal-500 to-green-500", "from-red-500 to-pink-500", "from-indigo-500 to-blue-500"];
    setContacts((prev) => [
      ...prev,
      { name: newContactName.trim(), avatar: newContactEmoji, color: colors[prev.length % colors.length], status: "Только что добавлен" },
    ]);
    setNewContactName("");
    setNewContactEmoji("😊");
    setShowAddContact(false);
  };

  return (
    <div className="min-h-screen bg-[#36393f] text-white overflow-x-hidden">
      {/* Навигация */}
      <nav className="bg-[#2f3136] border-b border-[#202225] px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#5865f2] rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold text-white">Близкие</h1>
              <p className="text-xs text-[#b9bbbe] hidden sm:block">Мессенджер для семьи и друзей</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-5 py-2 rounded text-sm font-medium">
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
          <div className="sm:hidden mt-3 pt-3 border-t border-[#202225]">
            <Button className="w-full bg-[#5865f2] hover:bg-[#4752c4] text-white py-2 rounded text-sm font-medium">
              Скачать бесплатно
            </Button>
          </div>
        )}
      </nav>

      {/* Основной макет */}
      <div className="flex" style={{ height: "calc(100vh - 57px)" }}>

        {/* Боковая панель серверов */}
        <div className="hidden lg:flex w-[64px] bg-[#202225] flex-col items-center py-3 gap-2 flex-shrink-0">
          <div className="w-11 h-11 bg-[#5865f2] rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <div className="w-7 h-[2px] bg-[#36393f] rounded-full my-1"></div>
          {["👨‍👩‍👧", "👫", "🏠", "🎉"].map((emoji, i) => (
            <div key={i} className="w-11 h-11 bg-[#36393f] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#5865f2] text-lg">
              {emoji}
            </div>
          ))}
        </div>

        {/* Боковая панель чатов */}
        <div className={`${mobileSidebarOpen ? "flex" : "hidden"} lg:flex w-full lg:w-56 bg-[#2f3136] flex-col flex-shrink-0`}>
          <div className="p-3 border-b border-[#202225] flex items-center justify-between">
            <h2 className="text-white font-semibold text-sm">Семья и друзья</h2>
            <Button variant="ghost" className="lg:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-1" onClick={() => setMobileSidebarOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex-1 p-2 overflow-y-auto">
            <div className="mb-3">
              <div className="flex items-center justify-between px-2 py-1">
                <span className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide">Чаты</span>
                <button onClick={() => setShowAddContact(true)} className="text-[#8e9297] hover:text-white transition-colors">
                  <UserPlus className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="mt-1 space-y-0.5">
                {["наша-семья", "лучшие-друзья", "родители", "праздники"].map((channel) => (
                  <div key={channel} className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer">
                    <Hash className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-xs">{channel}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="px-2 py-1">
                <span className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide">Голосовые</span>
              </div>
              <div className="mt-1 space-y-0.5">
                {["Семейный звонок", "Вечер с друзьями"].map((channel) => (
                  <div key={channel} className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer">
                    <Mic className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-xs">{channel}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Пользователь внизу */}
          <div className="p-2 bg-[#292b2f] flex items-center gap-2">
            <div className="w-7 h-7 bg-[#5865f2] rounded-full flex items-center justify-center relative flex-shrink-0">
              <span className="text-white text-xs font-medium">Я</span>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#3ba55c] border-2 border-[#292b2f] rounded-full"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-xs font-medium truncate">Вы</div>
              <div className="text-[#3ba55c] text-xs truncate">В сети</div>
            </div>
            <Button variant="ghost" size="sm" className="w-7 h-7 p-0 hover:bg-[#40444b]">
              <Settings className="w-3.5 h-3.5 text-[#b9bbbe]" />
            </Button>
          </div>
        </div>

        {/* Основная область чата */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Заголовок чата */}
          <div className="h-11 bg-[#36393f] border-b border-[#202225] flex items-center px-4 gap-2 flex-shrink-0">
            <Button variant="ghost" className="lg:hidden text-[#8e9297] hover:text-[#dcddde] hover:bg-[#40444b] p-1 mr-1" onClick={() => setMobileSidebarOpen(true)}>
              <Menu className="w-4 h-4" />
            </Button>
            <Hash className="w-4 h-4 text-[#8e9297] flex-shrink-0" />
            <span className="text-white font-semibold text-sm">наша-семья</span>
            <div className="ml-auto flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
              <Video className="w-4 h-4 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
              <Bell className="w-4 h-4 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
              <Search className="w-4 h-4 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
            </div>
          </div>

          {/* Сообщения */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className="flex gap-3 group">
                <div className={`w-9 h-9 bg-gradient-to-r ${msg.color} rounded-full flex items-center justify-center flex-shrink-0 text-base`}>
                  {msg.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <span className="text-white font-medium text-sm">{msg.name}</span>
                    <span className="text-[#72767d] text-xs">{msg.time}</span>
                  </div>
                  <div className="text-[#dcddde] text-sm leading-relaxed">{msg.text}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Поле ввода */}
          <div className="p-3 sm:p-4 flex-shrink-0">
            <div className="bg-[#40444b] rounded-lg flex items-center gap-2 px-2 py-2">
              <button
                onClick={sendMessage}
                className="w-8 h-8 bg-[#5865f2] hover:bg-[#4752c4] rounded-md flex items-center justify-center transition-colors flex-shrink-0"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
              <input
                className="bg-transparent flex-1 text-white text-sm outline-none placeholder-[#72767d]"
                placeholder="Написать сообщение..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <Smile className="w-5 h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde] flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* Правая панель участников */}
        <div className="hidden xl:flex w-56 bg-[#2f3136] flex-col flex-shrink-0">
          <div className="p-3 border-b border-[#202225] flex items-center justify-between">
            <span className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide">Контакты ({contacts.length})</span>
            <button onClick={() => setShowAddContact(true)} className="text-[#8e9297] hover:text-white transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 p-2 overflow-y-auto space-y-1">
            {contacts.map((user, index) => (
              <div key={index} className="flex items-center gap-2 p-2 rounded hover:bg-[#36393f] cursor-pointer">
                <div className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative text-sm flex-shrink-0`}>
                  {user.avatar}
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#3ba55c] border-2 border-[#2f3136] rounded-full"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-xs font-medium truncate">{user.name}</div>
                  <div className="text-[#b9bbbe] text-xs truncate">{user.status}</div>
                </div>
              </div>
            ))}
            <button
              onClick={() => setShowAddContact(true)}
              className="w-full mt-2 flex items-center gap-2 p-2 rounded border border-dashed border-[#40444b] text-[#8e9297] hover:text-[#dcddde] hover:border-[#5865f2] transition-colors"
            >
              <UserPlus className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs">Добавить контакт</span>
            </button>
          </div>
        </div>
      </div>

      {/* Модалка добавления контакта */}
      {showAddContact && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-[#2f3136] rounded-xl p-6 w-full max-w-sm shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-semibold text-base">Добавить контакт</h3>
              <button onClick={() => setShowAddContact(false)} className="text-[#b9bbbe] hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mb-4">
              <label className="text-[#b9bbbe] text-xs font-semibold uppercase tracking-wide mb-2 block">Имя</label>
              <input
                className="w-full bg-[#40444b] text-white text-sm rounded-md px-3 py-2.5 outline-none placeholder-[#72767d] focus:ring-2 focus:ring-[#5865f2]"
                placeholder="Например: Бабушка Люда"
                value={newContactName}
                onChange={(e) => setNewContactName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addContact()}
                autoFocus
              />
            </div>
            <div className="mb-5">
              <label className="text-[#b9bbbe] text-xs font-semibold uppercase tracking-wide mb-2 block">Аватар (эмодзи)</label>
              <div className="flex gap-2 flex-wrap">
                {["👩", "👨", "👧", "👦", "👴", "👵", "👩‍🦰", "🧑", "😊", "🐶"].map((e) => (
                  <button
                    key={e}
                    onClick={() => setNewContactEmoji(e)}
                    className={`w-9 h-9 rounded-lg text-lg flex items-center justify-center transition-all ${newContactEmoji === e ? "bg-[#5865f2] scale-110" : "bg-[#40444b] hover:bg-[#4f5460]"}`}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" className="flex-1 text-[#b9bbbe] hover:text-white hover:bg-[#40444b]" onClick={() => setShowAddContact(false)}>
                Отмена
              </Button>
              <Button className="flex-1 bg-[#5865f2] hover:bg-[#4752c4] text-white" onClick={addContact}>
                Добавить
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
