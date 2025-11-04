import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Wallet, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Withdrawal = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState("");
  const availableBalance = 2450000;

  const handleWithdraw = () => {
    if (!amount || parseInt(amount) <= 0) {
      toast({
        title: "Error",
        description: "Please enter a valid amount",
        variant: "destructive",
      });
      return;
    }

    if (parseInt(amount) > availableBalance) {
      toast({
        title: "Error",
        description: "Insufficient balance",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Withdrawal Requested",
      description: "Your withdrawal request is being processed",
    });
    setAmount("");
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/home">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Penarikan Dana</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-2xl">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              Available Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-success">
              Rp {availableBalance.toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Withdraw Funds</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="bank">Bank Account</Label>
              <Select>
                <SelectTrigger id="bank">
                  <SelectValue placeholder="Select bank account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bca">BCA - 1234567890</SelectItem>
                  <SelectItem value="mandiri">Mandiri - 0987654321</SelectItem>
                  <SelectItem value="bni">BNI - 5555555555</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button onClick={handleWithdraw} className="w-full gradient-primary">
              Request Withdrawal
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Recent Withdrawals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { date: "2025-01-15", amount: 500000, status: "Completed" },
              { date: "2025-01-08", amount: 750000, status: "Completed" },
              { date: "2025-01-01", amount: 300000, status: "Processing" },
            ].map((withdrawal, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div>
                  <p className="font-medium">Rp {withdrawal.amount.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">{withdrawal.date}</p>
                </div>
                <span
                  className={`text-sm px-3 py-1 rounded-full ${
                    withdrawal.status === "Completed"
                      ? "bg-success/10 text-success"
                      : "bg-warning/10 text-warning"
                  }`}
                >
                  {withdrawal.status}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Withdrawal;
