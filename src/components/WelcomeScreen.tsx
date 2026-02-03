import { Send } from 'lucide-react';

interface WelcomeScreenProps {
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isLoading: boolean;
}

export const WelcomeScreen = ({
  input,
  setInput,
  handleSubmit,
  isLoading
}: WelcomeScreenProps) => (
  <div className="flex items-center justify-center flex-1 px-4 py-6">
    <div className="w-full max-w-3xl mx-auto text-center">
      <h1 className="mb-4 text-5xl font-bold text-transparent uppercase bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text sm:text-6xl">
        <span className="text-white">Chat Bot</span> AI
      </h1>
      <p className="w-full px-4 mx-auto mb-6 text-base text-gray-400 sm:w-2/3 sm:text-lg">
        You can ask me about anything, I might or might not have a good
        answer, but you can still ask.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="relative max-w-xl mx-auto">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSubmit(e)
              }
            }}
            placeholder="Type something clever (or don't, we won't judge)..."
            className="w-full py-3 pl-4 pr-12 overflow-hidden text-base text-white placeholder-gray-400 border rounded-lg resize-none border-blue-500/20 bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
            rows={1}
            style={{ minHeight: '88px' }}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute p-2 text-blue-500 transition-colors -translate-y-1/2 right-2 top-1/2 hover:text-blue-400 disabled:text-gray-500 focus:outline-none"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  </div>
); 