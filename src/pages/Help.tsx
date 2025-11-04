import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Mail, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Help = () => {
  const faqs = [
    {
      question: "Bagaimana cara menawarkan jasa?",
      answer: "Klik tombol 'Tambah Jasa' di dashboard Anda, isi detail jasa, tentukan harga, dan publikasikan. Jasa Anda akan muncul di marketplace.",
    },
    {
      question: "Bagaimana sistem pembayaran bekerja?",
      answer: "Pembayaran ditahan di sistem escrow sampai pekerjaan selesai. Setelah client approve, dana akan ditransfer ke akun Anda.",
    },
    {
      question: "Berapa lama proses penarikan dana?",
      answer: "Penarikan dana diproses dalam 1-3 hari kerja ke rekening bank yang terdaftar.",
    },
    {
      question: "Bagaimana jika terjadi dispute?",
      answer: "Hubungi customer support kami melalui chat atau email. Tim kami akan membantu menyelesaikan masalah.",
    },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Help & Support</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-2xl">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start h-auto py-3">
              <Mail className="h-5 w-5 mr-3" />
              <div className="text-left">
                <p className="font-medium">Email Support</p>
                <p className="text-sm text-muted-foreground">support@campuswork.id</p>
              </div>
            </Button>
            <Button variant="outline" className="w-full justify-start h-auto py-3">
              <MessageCircle className="h-5 w-5 mr-3" />
              <div className="text-left">
                <p className="font-medium">Live Chat</p>
                <p className="text-sm text-muted-foreground">Available 24/7</p>
              </div>
            </Button>
            <Button variant="outline" className="w-full justify-start h-auto py-3">
              <Phone className="h-5 w-5 mr-3" />
              <div className="text-left">
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">+62 812-3456-7890</p>
              </div>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Help;
