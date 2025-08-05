import { create } from "zustand"

export type Message = {
  isBot: boolean
  name: string
  message: string
  sources: any[]
  images?: string[]
  modelName?: string
  modelImage?: string
}

export type ChatHistory = {
  role: "user" | "assistant" | "system"
  content: string
  image?: string
  messageType?: string
}[]

// 新增搜尋模式類型
export type SearchMode = "chat" | "internet" | "social" | "academic" | "x" | "custom"

type State = {
  messages: Message[]
  setMessages: (messages: Message[]) => void
  history: ChatHistory
  setHistory: (history: ChatHistory) => void
  streaming: boolean
  setStreaming: (streaming: boolean) => void
  isFirstMessage: boolean
  setIsFirstMessage: (isFirstMessage: boolean) => void
  historyId: string | null
  setHistoryId: (history_id: string | null) => void
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  isProcessing: boolean
  setIsProcessing: (isProcessing: boolean) => void
  selectedModel: string | null
  setSelectedModel: (selectedModel: string) => void
  chatMode: "normal" | "rag" | "vision"
  setChatMode: (chatMode: "normal" | "rag" | "vision") => void
  isEmbedding: boolean
  setIsEmbedding: (isEmbedding: boolean) => void
  speechToTextLanguage: string
  setSpeechToTextLanguage: (speechToTextLanguage: string) => void
  currentURL: string
  setCurrentURL: (currentURL: string) => void
  selectedSystemPrompt: string | null
  setSelectedSystemPrompt: (selectedSystemPrompt: string) => void
  selectedQuickPrompt: string | null
  setSelectedQuickPrompt: (selectedQuickPrompt: string) => void
  useOCR: boolean
  setUseOCR: (useOCR: boolean) => void
  customSearchKeyword: string
  setCustomSearchKeyword: (keyword: string) => void
  
  // 新增搜尋模式相關狀態
  searchMode: SearchMode
  setSearchMode: (searchMode: SearchMode) => void
  
  // 保留原有的 webSearch 以向後兼容
  webSearch: boolean
  setWebSearch: (webSearch: boolean) => void
}

export const useStoreMessage = create<State>((set, get) => ({
  messages: [],
  setMessages: (messages) => set({ messages }),
  history: [],
  setHistory: (history) => set({ history }),
  streaming: false,
  setStreaming: (streaming) => set({ streaming }),
  isFirstMessage: true,
  setIsFirstMessage: (isFirstMessage) => set({ isFirstMessage }),
  historyId: null,
  setHistoryId: (historyId) => set({ historyId }),
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
  isProcessing: false,
  setIsProcessing: (isProcessing) => set({ isProcessing }),
  defaultSpeechToTextLanguage: "en-US",
  selectedModel: null,
  setSelectedModel: (selectedModel) => set({ selectedModel }),
  chatMode: "normal",
  setChatMode: (chatMode) => set({ chatMode }),
  isEmbedding: false,
  setIsEmbedding: (isEmbedding) => set({ isEmbedding }),
  speechToTextLanguage: "en-US",
  setSpeechToTextLanguage: (speechToTextLanguage) =>
    set({ speechToTextLanguage }),
  currentURL: "",
  setCurrentURL: (currentURL) => set({ currentURL }),
  selectedSystemPrompt: null,
  setSelectedSystemPrompt: (selectedSystemPrompt) =>
    set({ selectedSystemPrompt }),
  selectedQuickPrompt: null,
  setSelectedQuickPrompt: (selectedQuickPrompt) => set({ selectedQuickPrompt }),
  useOCR: false,
  setUseOCR: (useOCR) => set({ useOCR }),
  customSearchKeyword: "",
  setCustomSearchKeyword: (keyword) => set({ customSearchKeyword: keyword }),
  
  // --- 開始偵錯 ---
  searchMode: "chat",
  setSearchMode: (newMode) => {
    console.log(`%c[STORE] setSearchMode called. New mode: "${newMode}"`, 'color: blue; font-weight: bold;');
    console.trace("Trace for setSearchMode");
    set({ searchMode: newMode });
    set({ webSearch: newMode !== "chat" });
  },
  
  webSearch: false,
  setWebSearch: (newWebSearch) => {
    console.log(`%c[STORE] setWebSearch called. New value: ${newWebSearch}`, 'color: red; font-weight: bold;');
    console.trace("Trace for setWebSearch");
    set({ webSearch: newWebSearch });
    if (newWebSearch && get().searchMode === "chat") {
      console.log('%c[STORE] Side effect triggered: webSearch is true, forcing searchMode to "internet"', 'color: orange;');
      set({ searchMode: "internet" });
    } else if (!newWebSearch && get().searchMode !== "chat") {
      console.log('%c[STORE] Side effect triggered: webSearch is false, forcing searchMode to "chat"', 'color: orange;');
      set({ searchMode: "chat" });
    }
  }
  // --- 結束偵錯 ---
}))