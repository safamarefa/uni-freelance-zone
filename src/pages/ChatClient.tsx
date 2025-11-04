import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ChatClient = () => {
  const [message, setMessage] = useState("");

  const messages = [
    { sender: "client", text: "Hi, saya tertarik dengan jasa web development Anda", time: "10:30" },
    { sender: "me", text: "Halo! Terima kasih sudah menghubungi. Ada yang bisa saya bantu?", time: "10:32" },
    { sender: "client", text: "Saya butuh website untuk startup saya. Kira-kira berapa lama pengerjaannya?", time: "10:33" },
    { sender: "me", text: "Untuk website company profile biasanya 1-2 minggu. Bisa diskusi lebih detail tentang fitur yang dibutuhkan?", time: "10:35" },
  ];

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <header className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/home">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="" />
                <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="font-semibold">John Doe</h1>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6 max-w-2xl overflow-y-auto">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              <Card
                className={`max-w-[70%] ${
                  msg.sender === "me" ? "bg-primary text-primary-foreground" : ""
                }`}
              >
                <CardContent className="p-3">
                  <p className="text-sm">{msg.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {msg.time}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </main>

      <div className="sticky bottom-0 bg-card border-t border-border p-4">
        <div className="container mx-auto max-w-2xl">
          <div className="flex gap-2">
            <Input
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setMessage("");
                }
              }}
            />
            <Button size="icon" className="gradient-primary">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatClient;
