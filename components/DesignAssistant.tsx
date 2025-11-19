import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getDesignAdvice } from '../services/geminiService';

const DesignAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    const result = await getDesignAdvice(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="w-full bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-6 md:p-10 shadow-2xl border border-stone-700 text-stone-100 my-12">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-wood-500/20 rounded-lg border border-wood-500/30">
          <Sparkles className="h-8 w-8 text-wood-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-serif font-bold mb-2">AI Design Consultant</h3>
          <p className="text-stone-400 mb-6">
            Not sure exactly what you want? Describe your space or needs, and I'll suggest a custom woodworking concept using the Gemini API.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., I need a small desk for a corner in my bedroom with plants..."
                className="w-full bg-stone-950/50 border border-stone-700 rounded-xl p-4 pr-12 text-stone-200 placeholder-stone-500 focus:ring-2 focus:ring-wood-500 focus:border-transparent focus:outline-none transition-all resize-none h-32"
              />
              <button
                type="submit"
                disabled={loading || !query}
                className="absolute bottom-4 right-4 p-2 bg-wood-600 hover:bg-wood-500 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
              </button>
            </div>
          </form>

          {response && (
            <div className="mt-6 animate-fade-in bg-stone-800/50 border border-stone-700 rounded-xl p-5">
              <h4 className="text-wood-400 text-sm font-bold uppercase tracking-wider mb-2">Suggestion</h4>
              <p className="text-stone-200 leading-relaxed whitespace-pre-line">{response}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignAssistant;