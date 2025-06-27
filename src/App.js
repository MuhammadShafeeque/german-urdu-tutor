import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, BookOpen, MessageSquare, Brain, Target, TrendingUp, Volume2, Mic, CheckCircle, XCircle, Star, Award, ChevronRight, ChevronDown, Search, Filter, X } from 'lucide-react';
import './App.css';

// Comprehensive German vocabulary with Roman Urdu pronunciations
const GERMAN_VOCABULARY = {
  A1: {
    greetings: {
      title: "Greetings - سلام و کلام",
      words: [
        { german: "Hallo", romanUrdu: "ہالو", pronunciation: "haa-lo", english: "Hello", urdu: "سلام" },
        { german: "Guten Morgen", romanUrdu: "گوٹن مورگن", pronunciation: "goo-ten mor-gen", english: "Good morning", urdu: "صبح بخیر" },
        { german: "Guten Tag", romanUrdu: "گوٹن ٹاگ", pronunciation: "goo-ten taag", english: "Good day", urdu: "دن بخیر" },
        { german: "Guten Abend", romanUrdu: "گوٹن آبنڈ", pronunciation: "goo-ten aa-bent", english: "Good evening", urdu: "شام بخیر" },
        { german: "Auf Wiedersehen", romanUrdu: "آؤف ویڈرزین", pronunciation: "auf vee-der-zayn", english: "Goodbye", urdu: "الوداع" },
        { german: "Tschüss", romanUrdu: "چُوس", pronunciation: "chuus", english: "Bye", urdu: "بائے" },
        { german: "Wie geht es dir?", romanUrdu: "وی گیٹ ایس دیر", pronunciation: "vee gate es deer", english: "How are you?", urdu: "آپ کیسے ہیں؟" },
        { german: "Mir geht es gut", romanUrdu: "میر گیٹ ایس گوٹ", pronunciation: "meer gate es goot", english: "I'm fine", urdu: "میں ٹھیک ہوں" },
      ]
    },
    family: {
      title: "Family - خاندان",
      words: [
        { german: "die Familie", romanUrdu: "دی فامیلیا", pronunciation: "dee fa-mee-lee-ya", english: "family", urdu: "خاندان" },
        { german: "der Vater", romanUrdu: "دیر فاٹر", pronunciation: "der faa-ter", english: "father", urdu: "والد" },
        { german: "die Mutter", romanUrdu: "دی موٹر", pronunciation: "dee moot-ter", english: "mother", urdu: "والدہ" },
        { german: "der Sohn", romanUrdu: "دیر زون", pronunciation: "der zoon", english: "son", urdu: "بیٹا" },
        { german: "die Tochter", romanUrdu: "دی ٹوختر", pronunciation: "dee tokh-ter", english: "daughter", urdu: "بیٹی" },
        { german: "der Bruder", romanUrdu: "دیر بروڈر", pronunciation: "der broo-der", english: "brother", urdu: "بھائی" },
        { german: "die Schwester", romanUrdu: "دی شویسٹر", pronunciation: "dee shves-ter", english: "sister", urdu: "بہن" },
      ]
    },
    numbers: {
      title: "Numbers - نمبرز",
      words: [
        { german: "null", romanUrdu: "نُل", pronunciation: "nool", english: "zero", urdu: "صفر" },
        { german: "eins", romanUrdu: "آئنس", pronunciation: "ains", english: "one", urdu: "ایک" },
        { german: "zwei", romanUrdu: "زوائی", pronunciation: "tsvai", english: "two", urdu: "دو" },
        { german: "drei", romanUrdu: "ڈرائی", pronunciation: "drai", english: "three", urdu: "تین" },
        { german: "vier", romanUrdu: "فیر", pronunciation: "feer", english: "four", urdu: "چار" },
        { german: "fünf", romanUrdu: "فُونف", pronunciation: "fuunf", english: "five", urdu: "پانچ" },
        { german: "sechs", romanUrdu: "زیکس", pronunciation: "zeks", english: "six", urdu: "چھ" },
        { german: "sieben", romanUrdu: "زیبن", pronunciation: "zee-ben", english: "seven", urdu: "سات" },
        { german: "acht", romanUrdu: "آخت", pronunciation: "akht", english: "eight", urdu: "آٹھ" },
        { german: "neun", romanUrdu: "نائن", pronunciation: "noin", english: "nine", urdu: "نو" },
        { german: "zehn", romanUrdu: "زین", pronunciation: "tsayn", english: "ten", urdu: "دس" },
      ]
    }
  },
  A2: {
    food: {
      title: "Food & Drinks - کھانا پینا",
      words: [
        { german: "das Essen", romanUrdu: "داس ایسن", pronunciation: "daas es-sen", english: "food", urdu: "کھانا" },
        { german: "das Wasser", romanUrdu: "داس واسر", pronunciation: "daas vas-ser", english: "water", urdu: "پانی" },
        { german: "das Brot", romanUrdu: "داس بروٹ", pronunciation: "daas broat", english: "bread", urdu: "روٹی" },
        { german: "der Käse", romanUrdu: "دیر کیزے", pronunciation: "der kae-ze", english: "cheese", urdu: "پنیر" },
        { german: "das Fleisch", romanUrdu: "داس فلائش", pronunciation: "daas flaish", english: "meat", urdu: "گوشت" },
        { german: "der Fisch", romanUrdu: "دیر فش", pronunciation: "der fish", english: "fish", urdu: "مچھلی" },
        { german: "das Gemüse", romanUrdu: "داس گموزے", pronunciation: "daas ge-muu-ze", english: "vegetables", urdu: "سبزیاں" },
        { german: "das Obst", romanUrdu: "داس اوبسٹ", pronunciation: "daas opst", english: "fruit", urdu: "پھل" },
      ]
    },
    colors: {
      title: "Colors - رنگ",
      words: [
        { german: "rot", romanUrdu: "روٹ", pronunciation: "roat", english: "red", urdu: "سرخ" },
        { german: "blau", romanUrdu: "بلاؤ", pronunciation: "blau", english: "blue", urdu: "نیلا" },
        { german: "grün", romanUrdu: "گرُون", pronunciation: "gruun", english: "green", urdu: "سبز" },
        { german: "gelb", romanUrdu: "گیلب", pronunciation: "gelb", english: "yellow", urdu: "پیلا" },
        { german: "schwarz", romanUrdu: "شوارز", pronunciation: "shvarts", english: "black", urdu: "کالا" },
        { german: "weiß", romanUrdu: "وائس", pronunciation: "vais", english: "white", urdu: "سفید" },
        { german: "grau", romanUrdu: "گراؤ", pronunciation: "grau", english: "gray", urdu: "خاکستری" },
      ]
    }
  },
  B1: {
    emotions: {
      title: "Emotions - جذبات",
      words: [
        { german: "glücklich", romanUrdu: "گلُوکلش", pronunciation: "gluuk-likh", english: "happy", urdu: "خوش" },
        { german: "traurig", romanUrdu: "تراؤرگ", pronunciation: "trau-rikh", english: "sad", urdu: "غمگین" },
        { german: "müde", romanUrdu: "موڈے", pronunciation: "muu-de", english: "tired", urdu: "تھکا ہوا" },
        { german: "wütend", romanUrdu: "ووتنڈ", pronunciation: "vuu-tent", english: "angry", urdu: "غصے میں" },
        { german: "nervös", romanUrdu: "نیرووس", pronunciation: "ner-voos", english: "nervous", urdu: "گھبرایا ہوا" },
        { german: "aufgeregt", romanUrdu: "آؤفگےرگٹ", pronunciation: "auf-ge-regt", english: "excited", urdu: "پرجوش" },
      ]
    }
  },
  B2: {
    abstract: {
      title: "Abstract Concepts - تجریدی تصورات",
      words: [
        { german: "die Verantwortung", romanUrdu: "دی فیرانتورٹونگ", pronunciation: "dee fer-ant-vor-toong", english: "responsibility", urdu: "ذمہ داری" },
        { german: "die Gerechtigkeit", romanUrdu: "دی گےرےختگکائت", pronunciation: "dee ge-rekh-tikh-kait", english: "justice", urdu: "انصاف" },
        { german: "die Entwicklung", romanUrdu: "دی انتوکلونگ", pronunciation: "dee ent-vik-loong", english: "development", urdu: "ترقی" },
        { german: "die Erfahrung", romanUrdu: "دی ایرفارونگ", pronunciation: "dee er-faa-roong", english: "experience", urdu: "تجربہ" },
      ]
    }
  }
};

// German Grammar Lessons
const GRAMMAR_LESSONS = {
  A1: [
    {
      id: 'articles',
      title: 'German Articles - آرٹیکلز',
      content: `
## German Articles (Der, Die, Das)

German has three genders: **Masculine**, **Feminine**, and **Neuter**.

### Definite Articles (The)
| Gender | Article | Roman Urdu | Example |
|--------|---------|------------|---------|
| Masculine | **der** | دیر (der) | der Mann (دیر مان) - the man |
| Feminine | **die** | دی (dee) | die Frau (دی فراؤ) - the woman |
| Neuter | **das** | داس (daas) | das Kind (داس کنڈ) - the child |

### Indefinite Articles (A/An)
| Gender | Article | Roman Urdu | Example |
|--------|---------|------------|---------|
| Masculine | **ein** | آئن (ain) | ein Mann (آئن مان) - a man |
| Feminine | **eine** | آئنے (ai-ne) | eine Frau (آئنے فراؤ) - a woman |
| Neuter | **ein** | آئن (ain) | ein Kind (آئن کنڈ) - a child |

### 🎯 Memory Tip
**DER** = **D**addy (Masculine)  
**DIE** = **D**aughter/**I**daughter (Feminine)  
**DAS** = **D**oll/**A**nything/**S**omething (Neuter)
      `
    },
    {
      id: 'verbs',
      title: 'Present Tense Verbs - فعل حال',
      content: `
## Present Tense Conjugation

### Verb "sein" (to be) - ہونا
| Person | German | Roman Urdu | English | Urdu |
|--------|--------|------------|---------|------|
| ich | ich bin | ایش بن (ikh bin) | I am | میں ہوں |
| du | du bist | دو بسٹ (doo bist) | you are | تم ہو |
| er/sie/es | er/sie/es ist | ایر/زی/ایس اسٹ (er/zee/es ist) | he/she/it is | وہ ہے |
| wir | wir sind | ویر زنڈ (veer zint) | we are | ہم ہیں |
| ihr | ihr seid | ایر زائیڈ (eer zait) | you all are | تم سب ہو |
| sie/Sie | sie/Sie sind | زی/زی زنڈ (zee/zee zint) | they/You are | وہ/آپ ہیں |

### Regular Verb Example: "spielen" (to play) - کھیلنا
| Person | German | Roman Urdu | English |
|--------|--------|------------|---------|
| ich | ich spiele | ایش شپیلے (ikh shpee-le) | I play |
| du | du spielst | دو شپیلسٹ (doo shpeelst) | you play |
| er/sie/es | er/sie/es spielt | ایر/زی/ایس شپیلٹ (er/zee/es shpeelt) | he/she/it plays |
      `
    }
  ],
  A2: [
    {
      id: 'cases',
      title: 'German Cases - کیسز',
      content: `
## German Cases System

German has **4 cases** that change the articles and adjectives:

### 1. Nominativ (Subject) - فاعل
**Who/What is doing the action?**
- der Mann, die Frau, das Kind
- **Example**: Der Mann liest. (دیر مان لیسٹ) - The man reads.

### 2. Akkusativ (Direct Object) - مفعول
**Who/What receives the action?**
- den Mann (masculine changes!), die Frau, das Kind
- **Example**: Ich sehe den Mann. (ایش زیے دین مان) - I see the man.

### 3. Dativ (Indirect Object) - مفعول غیر مباشر
**To whom/For whom?**
- dem Mann, der Frau, dem Kind
- **Example**: Ich gebe dem Mann ein Buch. (ایش گیبے دیم مان آئن بوخ) - I give the man a book.

### 4. Genitiv (Possession) - مضاف الیہ
**Whose?**
- des Mannes, der Frau, des Kindes
- **Example**: Das Auto des Mannes. (داس آؤٹو دیس مانیس) - The man's car.

### 🎯 Case Memory Trick
**N**ominativ = **N**ame (Subject)
**A**kkusativ = **A**ction receiver  
**D**ativ = **D**irection (to/for)
**G**enitiv = **G**ives ownership
      `
    }
  ]
};

// Conversation scenarios
const CONVERSATION_SCENARIOS = [
  {
    id: 'restaurant',
    title: 'At the Restaurant - ریسٹورنٹ میں',
    level: 'A1',
    phrases: [
      { german: "Einen Tisch für zwei Personen, bitte.", romanUrdu: "آئنن ٹش فُور زوائی پیرزونن، بٹے", pronunciation: "ai-nen tish fuur tsvai per-zo-nen, bit-te", english: "A table for two people, please.", urdu: "دو لوگوں کے لیے میز، براہ کرم" },
      { german: "Die Speisekarte, bitte.", romanUrdu: "دی شپائزکارٹے، بٹے", pronunciation: "dee shpai-ze-kar-te, bit-te", english: "The menu, please.", urdu: "مینو، براہ کرم" },
      { german: "Ich hätte gern...", romanUrdu: "ایش ہیٹے گیرن", pronunciation: "ikh haet-te gern", english: "I would like...", urdu: "میں چاہوں گا..." },
      { german: "Die Rechnung, bitte.", romanUrdu: "دی رےخنونگ، بٹے", pronunciation: "dee rekh-noong, bit-te", english: "The bill, please.", urdu: "بل، براہ کرم" },
    ]
  },
  {
    id: 'shopping',
    title: 'Shopping - خریداری',
    level: 'A2',
    phrases: [
      { german: "Wo finde ich...?", romanUrdu: "وو فندے ایش", pronunciation: "voo fin-de ikh", english: "Where can I find...?", urdu: "مجھے کہاں ملے گا...؟" },
      { german: "Wie viel kostet das?", romanUrdu: "وی فیل کوسٹیٹ داس", pronunciation: "vee feel kos-tet daas", english: "How much does it cost?", urdu: "یہ کتنے کا ہے؟" },
      { german: "Das ist zu teuer.", romanUrdu: "داس اسٹ زو تائر", pronunciation: "daas ist tsoo toi-er", english: "That's too expensive.", urdu: "یہ بہت مہنگا ہے" },
      { german: "Haben Sie etwas Billiges?", romanUrdu: "ہابن زی ایتواس بلگیس", pronunciation: "haa-ben zee et-vas bil-li-ges", english: "Do you have something cheaper?", urdu: "کیا آپ کے پاس کچھ سستا ہے؟" },
    ]
  }
];

// Mock AI function for demo (you'll need to implement actual AI integration)
const mockAIResponse = async (message, level) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    germanResponse: "Das ist sehr gut! Wie heißt du?",
    romanUrduPronunciation: "داس اسٹ زیئر گوٹ! وی ہائسٹ دو؟",
    englishTranslation: "That's very good! What's your name?",
    urduTranslation: "یہ بہت اچھا ہے! آپ کا نام کیا ہے؟",
    feedback: "Great job on your German sentence structure!",
    correction: null,
    tip: "Try to use more descriptive adjectives in your sentences."
  };
};

const GermanUrduTutor = () => {
  const [currentSection, setCurrentSection] = useState('vocabulary');
  const [selectedLevel, setSelectedLevel] = useState('A1');
  const [selectedCategory, setSelectedCategory] = useState('greetings');
  const [showPronunciation, setShowPronunciation] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [practiceMode, setPracticeMode] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [expandedGrammar, setExpandedGrammar] = useState(null);
  const [selectedScenario, setSelectedScenario] = useState('restaurant');
  const [conversationStep, setConversationStep] = useState(0);
  const [userProgress, setUserProgress] = useState({
    vocabularyMastered: new Set(),
    grammarCompleted: new Set(),
    conversationsCompleted: new Set(),
    totalPoints: 0,
    streak: 0
  });

  const [chatMessages, setChatMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Search functionality state
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    levels: ['A1', 'A2', 'B1', 'B2'],
    languages: ['german', 'english', 'urdu', 'romanUrdu'],
    categories: []
  });

  // Get current vocabulary based on selected level and category
  const getCurrentVocabulary = () => {
    return GERMAN_VOCABULARY[selectedLevel]?.[selectedCategory]?.words || [];
  };

  const getCurrentWord = () => {
    const vocab = getCurrentVocabulary();
    return vocab[currentWordIndex] || {};
  };

  // Practice functions
  const checkAnswer = () => {
    const currentWord = getCurrentWord();
    const isCorrect = userInput.toLowerCase().trim() === currentWord.german.toLowerCase();
    
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));

    if (isCorrect) {
      setUserProgress(prev => ({
        ...prev,
        vocabularyMastered: new Set([...prev.vocabularyMastered, `${selectedLevel}-${selectedCategory}-${currentWordIndex}`]),
        totalPoints: prev.totalPoints + 10,
        streak: prev.streak + 1
      }));
    } else {
      setUserProgress(prev => ({ ...prev, streak: 0 }));
    }

    setShowAnswer(true);
    setTimeout(() => {
      nextWord();
    }, 2000);
  };

  const nextWord = () => {
    const vocab = getCurrentVocabulary();
    setCurrentWordIndex((prev) => (prev + 1) % vocab.length);
    setUserInput('');
    setShowAnswer(false);
  };

  const startPronunciationPractice = () => {
    setPracticeMode(true);
    setCurrentWordIndex(0);
    setUserInput('');
    setShowAnswer(false);
  };

  // Chat functionality
  const sendChatMessage = async () => {
    if (!currentMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: currentMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsLoading(true);

    try {
      // Use mock AI response for demo - replace with actual AI integration
      const parsedResponse = await mockAIResponse(currentMessage, selectedLevel);

      const tutorMessage = {
        id: Date.now() + 1,
        text: parsedResponse.germanResponse,
        romanUrdu: parsedResponse.romanUrduPronunciation,
        english: parsedResponse.englishTranslation,
        urdu: parsedResponse.urduTranslation,
        feedback: parsedResponse.feedback,
        correction: parsedResponse.correction,
        tip: parsedResponse.tip,
        sender: 'tutor',
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, tutorMessage]);

    } catch (error) {
      console.error('Error getting tutor response:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "Entschuldigung, ich verstehe nicht. (معذرت، میں نہیں سمجھا)",
        sender: 'tutor',
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Search functionality
  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const results = [];
    const searchTerm = query.toLowerCase();

    // Search through vocabulary
    Object.keys(GERMAN_VOCABULARY).forEach(level => {
      if (!searchFilters.levels.includes(level)) return;
      
      Object.keys(GERMAN_VOCABULARY[level]).forEach(category => {
        const categoryData = GERMAN_VOCABULARY[level][category];
        
        categoryData.words.forEach((word, index) => {
          const matches = [];
          
          if (searchFilters.languages.includes('german') && word.german.toLowerCase().includes(searchTerm)) {
            matches.push('German');
          }
          if (searchFilters.languages.includes('english') && word.english.toLowerCase().includes(searchTerm)) {
            matches.push('English');
          }
          if (searchFilters.languages.includes('urdu') && word.urdu.includes(searchTerm)) {
            matches.push('Urdu');
          }
          if (searchFilters.languages.includes('romanUrdu') && word.romanUrdu.toLowerCase().includes(searchTerm)) {
            matches.push('Roman Urdu');
          }

          if (matches.length > 0) {
            results.push({
              type: 'vocabulary',
              level,
              category,
              categoryTitle: categoryData.title,
              word,
              index,
              matches,
              relevance: matches.length
            });
          }
        });
      });
    });

    // Search through grammar lessons
    Object.keys(GRAMMAR_LESSONS).forEach(level => {
      if (!searchFilters.levels.includes(level)) return;
      
      GRAMMAR_LESSONS[level].forEach(lesson => {
        if (lesson.title.toLowerCase().includes(searchTerm) || 
            lesson.content.toLowerCase().includes(searchTerm)) {
          results.push({
            type: 'grammar',
            level,
            lesson,
            matches: ['Content'],
            relevance: lesson.title.toLowerCase().includes(searchTerm) ? 2 : 1
          });
        }
      });
    });

    // Search through conversation scenarios
    CONVERSATION_SCENARIOS.forEach(scenario => {
      if (!searchFilters.levels.includes(scenario.level)) return;
      
      if (scenario.title.toLowerCase().includes(searchTerm)) {
        results.push({
          type: 'conversation',
          scenario,
          matches: ['Title'],
          relevance: 2
        });
      }
      
      scenario.phrases.forEach((phrase, index) => {
        const matches = [];
        if (phrase.german.toLowerCase().includes(searchTerm)) matches.push('German');
        if (phrase.english.toLowerCase().includes(searchTerm)) matches.push('English');
        if (phrase.urdu.includes(searchTerm)) matches.push('Urdu');
        
        if (matches.length > 0) {
          results.push({
            type: 'conversation',
            scenario,
            phrase,
            phraseIndex: index,
            matches,
            relevance: matches.length
          });
        }
      });
    });

    // Sort by relevance
    results.sort((a, b) => b.relevance - a.relevance);
    setSearchResults(results);
    setIsSearching(false);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };

  const navigateToResult = (result) => {
    switch (result.type) {
      case 'vocabulary':
        setCurrentSection('vocabulary');
        setSelectedLevel(result.level);
        setSelectedCategory(result.category);
        setCurrentWordIndex(result.index);
        break;
      case 'grammar':
        setCurrentSection('grammar');
        setSelectedLevel(result.level);
        setExpandedGrammar(result.lesson.id);
        break;
      case 'conversation':
        setCurrentSection('conversation');
        setSelectedScenario(result.scenario.id);
        if (result.phraseIndex !== undefined) {
          setConversationStep(result.phraseIndex);
        }
        break;
    }
    clearSearch();
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, searchFilters]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages]);

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-xl border-r border-gray-200">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo1.png" 
                alt="German-Urdu Tutor Logo" 
                className="h-8 w-8 object-contain rounded-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }}
              />
              <BookOpen className="h-8 w-8 hidden" />
              <div>
                <h1 className="text-xl font-bold">German für Urdu</h1>
                <p className="text-blue-100 text-sm">جرمن زبان سیکھیں</p>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-4 relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-300" />
                <input
                  type="text"
                  placeholder="Search words, grammar, conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 bg-blue-500 bg-opacity-30 border border-blue-400 rounded-lg text-white placeholder-blue-200 focus:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              
              {/* Search Results Dropdown */}
              {(searchQuery || searchResults.length > 0) && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
                  {isSearching ? (
                    <div className="p-4 text-center text-gray-500">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        <span>Searching...</span>
                      </div>
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="p-2">
                      {searchResults.slice(0, 10).map((result, index) => (
                        <button
                          key={index}
                          onClick={() => navigateToResult(result)}
                          className="w-full text-left p-3 rounded-lg hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                              {result.type === 'vocabulary' && <BookOpen className="h-5 w-5 text-blue-500" />}
                              {result.type === 'grammar' && <Brain className="h-5 w-5 text-green-500" />}
                              {result.type === 'conversation' && <MessageSquare className="h-5 w-5 text-purple-500" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className={`px-2 py-1 rounded text-xs font-medium ${
                                  result.type === 'vocabulary' ? 'bg-blue-100 text-blue-700' :
                                  result.type === 'grammar' ? 'bg-green-100 text-green-700' :
                                  'bg-purple-100 text-purple-700'
                                }`}>
                                  {result.type}
                                </span>
                                <span className="text-xs text-gray-500">{result.level || result.scenario?.level}</span>
                              </div>
                              <p className="font-medium text-gray-800 truncate">
                                {result.type === 'vocabulary' && result.word.german}
                                {result.type === 'grammar' && result.lesson.title}
                                {result.type === 'conversation' && (result.phrase?.german || result.scenario.title)}
                              </p>
                              <p className="text-sm text-gray-600 truncate">
                                {result.type === 'vocabulary' && `${result.word.english} - ${result.word.urdu}`}
                                {result.type === 'grammar' && `Grammar lesson for ${result.level} level`}
                                {result.type === 'conversation' && (result.phrase?.english || result.scenario.title)}
                              </p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {result.matches.map((match, idx) => (
                                  <span key={idx} className="text-xs bg-yellow-100 text-yellow-700 px-1 rounded">
                                    {match}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                      {searchResults.length > 10 && (
                        <div className="p-3 text-center text-sm text-gray-500">
                          Showing 10 of {searchResults.length} results
                        </div>
                      )}
                    </div>
                  ) : searchQuery ? (
                    <div className="p-4 text-center text-gray-500">
                      No results found for "{searchQuery}"
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="p-4">
          <div className="space-y-2">
            <button
              onClick={() => setCurrentSection('vocabulary')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                currentSection === 'vocabulary' 
                  ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                  : 'hover:bg-gray-50'
              }`}
            >
              <BookOpen className="h-5 w-5" />
              <span className="font-medium">Vocabulary - الفاظ</span>
            </button>
            
            <button
              onClick={() => setCurrentSection('grammar')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                currentSection === 'grammar' 
                  ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                  : 'hover:bg-gray-50'
              }`}
            >
              <Brain className="h-5 w-5" />
              <span className="font-medium">Grammar - گرامر</span>
            </button>
            
            <button
              onClick={() => setCurrentSection('conversation')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                currentSection === 'conversation' 
                  ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                  : 'hover:bg-gray-50'
              }`}
            >
              <MessageSquare className="h-5 w-5" />
              <span className="font-medium">Conversation - گفتگو</span>
            </button>

            <button
              onClick={() => setCurrentSection('chat')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                currentSection === 'chat' 
                  ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                  : 'hover:bg-gray-50'
              }`}
            >
              <MessageSquare className="h-5 w-5" />
              <span className="font-medium">AI Chat - چیٹ</span>
            </button>

            <button
              onClick={() => setCurrentSection('search')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                currentSection === 'search' 
                  ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                  : 'hover:bg-gray-50'
              }`}
            >
              <Search className="h-5 w-5" />
              <span className="font-medium">Search - تلاش</span>
            </button>
          </div>
        </div>

        {/* Level Selector */}
        <div className="p-4 border-t border-gray-200">
          <h3 className="font-semibold text-gray-700 mb-3">Level - لیول</h3>
          <div className="grid grid-cols-2 gap-2">
            {['A1', 'A2', 'B1', 'B2'].map(level => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedLevel === level
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Progress */}
        <div className="p-4 border-t border-gray-200">
          <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
            <Award className="h-5 w-5 mr-2" />
            Progress - پیش قدمی
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Points - پوائنٹس</span>
              <span className="font-medium text-blue-600">{userProgress.totalPoints}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Streak - سلسلہ</span>
              <span className="font-medium text-green-600">{userProgress.streak}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Accuracy - درستگی</span>
              <span className="font-medium text-purple-600">
                {score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Vocabulary Section */}
        {currentSection === 'vocabulary' && (
          <div className="flex-1 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Vocabulary Learning - الفاظ سیکھیں
              </h2>
              <div className="flex items-center space-x-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setCurrentWordIndex(0);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  {Object.keys(GERMAN_VOCABULARY[selectedLevel] || {}).map(category => (
                    <option key={category} value={category}>
                      {GERMAN_VOCABULARY[selectedLevel][category]?.title}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => setShowPronunciation(!showPronunciation)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    showPronunciation 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Roman Urdu
                </button>
                <button
                  onClick={startPronunciationPractice}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Practice - مشق
                </button>
              </div>
            </div>

            {!practiceMode ? (
              /* Vocabulary Display */
              <div className="grid gap-4">
                {getCurrentVocabulary().map((word, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* German Side */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Volume2 className="h-5 w-5 text-blue-600" />
                          <h3 className="text-2xl font-bold text-gray-800">{word.german}</h3>
                        </div>
                        {showPronunciation && (
                          <div className="space-y-2">
                            <p className="text-lg text-blue-600 font-medium">
                              {word.romanUrdu}
                            </p>
                            <p className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded">
                              Pronunciation: {word.pronunciation}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Translation Side */}
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-500 uppercase tracking-wide">English</p>
                          <p className="text-xl font-medium text-gray-700">{word.english}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 uppercase tracking-wide">اردو</p>
                          <p className="text-xl font-medium text-gray-700" style={{direction: 'rtl'}}>{word.urdu}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Practice Mode */
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">Practice Mode - مشق</h3>
                    <p className="text-gray-600">
                      Word {currentWordIndex + 1} of {getCurrentVocabulary().length}
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentWordIndex + 1) / getCurrentVocabulary().length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <p className="text-lg text-gray-600 mb-2">Translate to German:</p>
                    <p className="text-2xl font-bold text-blue-600 mb-2">
                      {getCurrentWord().english}
                    </p>
                    <p className="text-xl text-gray-700" style={{direction: 'rtl'}}>
                      {getCurrentWord().urdu}
                    </p>
                    {showPronunciation && (
                      <p className="text-lg text-blue-500 mt-2">
                        {getCurrentWord().romanUrdu}
                      </p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && !showAnswer && checkAnswer()}
                      placeholder="Type the German word..."
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-lg"
                      disabled={showAnswer}
                    />

                    {!showAnswer ? (
                      <button
                        onClick={checkAnswer}
                        disabled={!userInput.trim()}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                      >
                        Check Answer - جواب چیک کریں
                      </button>
                    ) : (
                      <div className="text-center">
                        {userInput.toLowerCase().trim() === getCurrentWord().german.toLowerCase() ? (
                          <div className="text-green-600">
                            <CheckCircle className="h-12 w-12 mx-auto mb-2" />
                            <p className="text-lg font-semibold">Correct! صحیح!</p>
                          </div>
                        ) : (
                          <div className="text-red-600">
                            <XCircle className="h-12 w-12 mx-auto mb-2" />
                            <p className="text-lg font-semibold">
                              Correct answer: {getCurrentWord().german}
                            </p>
                            <p className="text-sm">({getCurrentWord().romanUrdu})</p>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex justify-between">
                      <button
                        onClick={() => setPracticeMode(false)}
                        className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                      >
                        Exit Practice
                      </button>
                      <div className="text-sm text-gray-600">
                        Score: {score.correct}/{score.total}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Grammar Section */}
        {currentSection === 'grammar' && (
          <div className="flex-1 p-6 overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Grammar Lessons - گرامر کے اسباق
            </h2>
            
            <div className="space-y-4">
              {GRAMMAR_LESSONS[selectedLevel]?.map((lesson) => (
                <div key={lesson.id} className="bg-white rounded-xl shadow-md border border-gray-200">
                  <button
                    onClick={() => setExpandedGrammar(expandedGrammar === lesson.id ? null : lesson.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-gray-800">{lesson.title}</h3>
                    {expandedGrammar === lesson.id ? (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  
                  {expandedGrammar === lesson.id && (
                    <div className="px-6 pb-6">
                      <div className="prose max-w-none">
                        <div dangerouslySetInnerHTML={{ 
                          __html: lesson.content.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        }} />
                      </div>
                    </div>
                  )}
                </div>
              )) || (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Grammar lessons for {selectedLevel} level coming soon!
                  </p>
                  <p className="text-gray-400 mt-2">
                    {selectedLevel} لیول کے لیے گرامر کے اسباق جلد آرہے ہیں!
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Conversation Section */}
        {currentSection === 'conversation' && (
          <div className="flex-1 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Conversation Practice - گفتگو کی مشق
              </h2>
              <select
                value={selectedScenario}
                onChange={(e) => {
                  setSelectedScenario(e.target.value);
                  setConversationStep(0);
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {CONVERSATION_SCENARIOS.map(scenario => (
                  <option key={scenario.id} value={scenario.id}>
                    {scenario.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              {(() => {
                const scenario = CONVERSATION_SCENARIOS.find(s => s.id === selectedScenario);
                return (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">{scenario?.title}</h3>
                      <p className="text-gray-600">Level: {scenario?.level}</p>
                    </div>

                    <div className="space-y-6">
                      {scenario?.phrases.map((phrase, index) => (
                        <div 
                          key={index} 
                          className={`p-6 rounded-lg border-2 transition-all ${
                            index === conversationStep 
                              ? 'border-blue-500 bg-blue-50' 
                              : 'border-gray-200 bg-gray-50'
                          }`}
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2">
                                <Volume2 className="h-5 w-5 text-blue-600" />
                                <p className="text-xl font-bold text-gray-800">{phrase.german}</p>
                              </div>
                              <p className="text-lg text-blue-600">{phrase.romanUrdu}</p>
                              <p className="text-sm text-gray-600 bg-white px-3 py-1 rounded">
                                {phrase.pronunciation}
                              </p>
                            </div>
                            
                            <div className="space-y-3">
                              <div>
                                <p className="text-sm text-gray-500 uppercase tracking-wide">English</p>
                                <p className="text-lg text-gray-700">{phrase.english}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500 uppercase tracking-wide">اردو</p>
                                <p className="text-lg text-gray-700" style={{direction: 'rtl'}}>{phrase.urdu}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center mt-8 space-x-4">
                      <button
                        onClick={() => setConversationStep(Math.max(0, conversationStep - 1))}
                        disabled={conversationStep === 0}
                        className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50"
                      >
                        Previous - پچھلا
                      </button>
                      <button
                        onClick={() => setConversationStep(Math.min((scenario?.phrases.length || 1) - 1, conversationStep + 1))}
                        disabled={conversationStep === (scenario?.phrases.length || 1) - 1}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                      >
                        Next - اگلا
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* AI Chat Section */}
        {currentSection === 'chat' && (
          <div className="flex-1 flex flex-col">
            <div className="bg-white border-b border-gray-200 p-4">
              <h2 className="text-xl font-bold text-gray-800">
                AI German Tutor - اے آئی جرمن ٹیوٹر
              </h2>
              <p className="text-gray-600">Practice conversational German with AI feedback</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.length === 0 && (
                <div className="text-center py-12">
                  <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">
                    Start practicing German! - جرمن کی مشق شروع کریں!
                  </h3>
                  <p className="text-gray-500">
                    Type a message in German or English and get personalized feedback
                  </p>
                </div>
              )}

              {chatMessages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xl rounded-lg p-4 ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white border border-gray-200 shadow-sm'
                  }`}>
                    <p className="font-medium">{message.text}</p>
                    
                    {message.sender === 'tutor' && (
                      <div className="mt-3 space-y-2 text-sm">
                        {message.romanUrdu && (
                          <div className="bg-blue-50 p-2 rounded">
                            <p className="text-blue-700 font-medium">Roman Urdu:</p>
                            <p className="text-blue-600">{message.romanUrdu}</p>
                          </div>
                        )}
                        
                        {message.english && (
                          <div className="bg-green-50 p-2 rounded">
                            <p className="text-green-700 font-medium">English:</p>
                            <p className="text-green-600">{message.english}</p>
                          </div>
                        )}
                        
                        {message.urdu && (
                          <div className="bg-purple-50 p-2 rounded">
                            <p className="text-purple-700 font-medium">اردو:</p>
                            <p className="text-purple-600" style={{direction: 'rtl'}}>{message.urdu}</p>
                          </div>
                        )}

                        {message.feedback && (
                          <div className="bg-yellow-50 p-2 rounded">
                            <p className="text-yellow-700 font-medium">Feedback:</p>
                            <p className="text-yellow-600">{message.feedback}</p>
                          </div>
                        )}

                        {message.tip && (
                          <div className="bg-indigo-50 p-2 rounded">
                            <p className="text-indigo-700 font-medium">💡 Tip:</p>
                            <p className="text-indigo-600">{message.tip}</p>
                          </div>
                        )}
                      </div>
                    )}
                    
                    <p className={`text-xs mt-2 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                      <span className="text-sm text-gray-500">Tutor is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="bg-white border-t border-gray-200 p-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                  placeholder="Type in German or English... (جرمن یا انگریزی میں لکھیں)"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  disabled={isLoading}
                />
                <button
                  onClick={sendChatMessage}
                  disabled={isLoading || !currentMessage.trim()}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Search Section */}
        {currentSection === 'search' && (
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Advanced Search - تفصیلی تلاش
              </h2>

              {/* Search Input */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for German words, grammar rules, or conversation phrases..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-lg"
                  />
                </div>

                {/* Search Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Level Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Levels - لیولز
                    </label>
                    <div className="space-y-2">
                      {['A1', 'A2', 'B1', 'B2'].map(level => (
                        <label key={level} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={searchFilters.levels.includes(level)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSearchFilters(prev => ({
                                  ...prev,
                                  levels: [...prev.levels, level]
                                }));
                              } else {
                                setSearchFilters(prev => ({
                                  ...prev,
                                  levels: prev.levels.filter(l => l !== level)
                                }));
                              }
                            }}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">{level}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Language Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Search In - میں تلاش کریں
                    </label>
                    <div className="space-y-2">
                      {[
                        { key: 'german', label: 'German - جرمن' },
                        { key: 'english', label: 'English - انگریزی' },
                        { key: 'urdu', label: 'Urdu - اردو' },
                        { key: 'romanUrdu', label: 'Roman Urdu - رومن اردو' }
                      ].map(lang => (
                        <label key={lang.key} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={searchFilters.languages.includes(lang.key)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSearchFilters(prev => ({
                                  ...prev,
                                  languages: [...prev.languages, lang.key]
                                }));
                              } else {
                                setSearchFilters(prev => ({
                                  ...prev,
                                  languages: prev.languages.filter(l => l !== lang.key)
                                }));
                              }
                            }}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">{lang.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Content Type Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Content Type - مواد کی قسم
                    </label>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-600">
                        <BookOpen className="inline h-4 w-4 mr-1" />
                        Vocabulary
                      </div>
                      <div className="text-sm text-gray-600">
                        <Brain className="inline h-4 w-4 mr-1" />
                        Grammar
                      </div>
                      <div className="text-sm text-gray-600">
                        <MessageSquare className="inline h-4 w-4 mr-1" />
                        Conversations
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search Results */}
              {searchQuery && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Search Results - تلاش کے نتائج
                    </h3>
                    {searchResults.length > 0 && (
                      <span className="text-sm text-gray-600">
                        {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
                      </span>
                    )}
                  </div>

                  {isSearching ? (
                    <div className="text-center py-12">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-gray-600">Searching...</span>
                      </div>
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="space-y-4">
                      {searchResults.map((result, index) => (
                        <div
                          key={index}
                          onClick={() => navigateToResult(result)}
                          className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-colors"
                        >
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 mt-1">
                              {result.type === 'vocabulary' && <BookOpen className="h-6 w-6 text-blue-500" />}
                              {result.type === 'grammar' && <Brain className="h-6 w-6 text-green-500" />}
                              {result.type === 'conversation' && <MessageSquare className="h-6 w-6 text-purple-500" />}
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-3 mb-2">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                  result.type === 'vocabulary' ? 'bg-blue-100 text-blue-700' :
                                  result.type === 'grammar' ? 'bg-green-100 text-green-700' :
                                  'bg-purple-100 text-purple-700'
                                }`}>
                                  {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                                </span>
                                <span className="text-sm text-gray-500 font-medium">
                                  {result.level || result.scenario?.level}
                                </span>
                                <div className="flex flex-wrap gap-1">
                                  {result.matches.map((match, idx) => (
                                    <span key={idx} className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                                      {match}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              
                              <h4 className="font-semibold text-gray-800 mb-1">
                                {result.type === 'vocabulary' && result.word.german}
                                {result.type === 'grammar' && result.lesson.title}
                                {result.type === 'conversation' && (result.phrase?.german || result.scenario.title)}
                              </h4>
                              
                              <div className="text-sm text-gray-600 space-y-1">
                                {result.type === 'vocabulary' && (
                                  <>
                                    <p><strong>English:</strong> {result.word.english}</p>
                                    <p><strong>اردو:</strong> {result.word.urdu}</p>
                                    <p><strong>Roman Urdu:</strong> {result.word.romanUrdu}</p>
                                    <p><strong>Category:</strong> {result.categoryTitle}</p>
                                  </>
                                )}
                                {result.type === 'grammar' && (
                                  <p>{result.lesson.title} - Grammar lesson for {result.level} level</p>
                                )}
                                {result.type === 'conversation' && result.phrase && (
                                  <>
                                    <p><strong>English:</strong> {result.phrase.english}</p>
                                    <p><strong>اردو:</strong> {result.phrase.urdu}</p>
                                    <p><strong>Scenario:</strong> {result.scenario.title}</p>
                                  </>
                                )}
                                {result.type === 'conversation' && !result.phrase && (
                                  <p>Conversation scenario for {result.scenario.level} level</p>
                                )}
                              </div>
                            </div>
                            
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-600 mb-2">
                        No results found
                      </h3>
                      <p className="text-gray-500">
                        Try different keywords or adjust your search filters
                      </p>
                    </div>
                  )}
                </div>
              )}

              {!searchQuery && (
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Advanced Search
                  </h3>
                  <p className="text-gray-600">
                    Search through vocabulary, grammar lessons, and conversation scenarios
                  </p>
                  <p className="text-gray-500 mt-2">
                    الفاظ، گرامر کے اسباق، اور گفتگو کے منظرنامے میں تلاش کریں
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GermanUrduTutor;