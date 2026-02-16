import { useState } from "react";
import { Phone, Mail, MessageCircle, MessageSquare, X } from "lucide-react";

const CommunicationWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ text: string; sender: "user" | "bot" }>>([]);
  const [chatInput, setChatInput] = useState("");

  const phoneNumber = "0911508734";
  const email = "g.fikre2@gmail.com";
  const whatsappNumber = "251911508734"; // Format for WhatsApp link

  const handlePhone = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello, I need help with Abet Delivery.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}?subject=Inquiry from Abet Website`;
  };

  const handleChat = () => {
    setShowChat(true);
    setIsOpen(false);
    if (chatMessages.length === 0) {
      setChatMessages([
        {
          text: "Hello! Welcome to Abet Delivery. How can I help you today?",
          sender: "bot",
        },
      ]);
    }
  };

  const sendChatMessage = () => {
    if (chatInput.trim()) {
      const newMessages = [
        ...chatMessages,
        { text: chatInput, sender: "user" as const },
        {
          text: "Thank you for your message! Our team will get back to you soon. For immediate assistance, please call us or use WhatsApp.",
          sender: "bot" as const,
        },
      ];
      setChatMessages(newMessages);
      setChatInput("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendChatMessage();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!showChat && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#1565C0] text-white rounded-full p-4 shadow-2xl hover:bg-[#0d47a1] transition-all duration-300 hover:scale-110 flex items-center justify-center w-16 h-16"
            aria-label="Open communication options"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MessageCircle className="w-6 h-6" />
            )}
          </button>
        )}

        {/* Communication Options Popup */}
        {isOpen && !showChat && (
          <div className="absolute bottom-20 right-0 mb-2 bg-white rounded-2xl shadow-2xl p-4 min-w-[200px] animate-fadeIn">
            <div className="space-y-3">
              <button
                onClick={handlePhone}
                className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors text-left"
              >
                <div className="bg-green-100 p-2 rounded-full">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-xs text-gray-500">{phoneNumber}</p>
                </div>
              </button>

              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 transition-colors text-left"
              >
                <div className="bg-green-100 p-2 rounded-full">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">WhatsApp</p>
                  <p className="text-xs text-gray-500">Chat with us</p>
                </div>
              </button>

              <button
                onClick={handleEmail}
                className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors text-left"
              >
                <div className="bg-blue-100 p-2 rounded-full">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-xs text-gray-500">{email}</p>
                </div>
              </button>

              <button
                onClick={handleChat}
                className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-left"
              >
                <div className="bg-purple-100 p-2 rounded-full">
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">App Chat</p>
                  <p className="text-xs text-gray-500">Live chat support</p>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Chat Window */}
        {showChat && (
          <div className="absolute bottom-0 right-0 mb-0 bg-white rounded-t-2xl shadow-2xl w-80 h-96 flex flex-col">
            {/* Chat Header */}
            <div className="bg-[#1565C0] text-white p-4 rounded-t-2xl flex justify-between items-center">
              <div>
                <p className="font-semibold">Abet Support</p>
                <p className="text-xs text-blue-100">We're here to help</p>
              </div>
              <button
                onClick={() => {
                  setShowChat(false);
                  setIsOpen(false);
                }}
                className="text-white hover:text-[#FFA726] transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.sender === "user"
                        ? "bg-[#1565C0] text-white"
                        : "bg-white text-gray-800 shadow-sm"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1565C0] text-sm"
                />
                <button
                  onClick={sendChatMessage}
                  className="bg-[#1565C0] text-white p-2 rounded-full hover:bg-[#0d47a1] transition"
                >
                  <MessageSquare className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default CommunicationWidget;
