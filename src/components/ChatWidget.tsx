import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        size="lg"
        className="dental-button-primary rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">Chat with us</span>
      </Button>
      <div className="absolute -top-2 -left-2 bg-dental-blue text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
        Chat with us
      </div>
    </div>
  );
};

export default ChatWidget;