# German-Urdu Language Tutor

A comprehensive React-based language learning application designed specifically for Urdu speakers learning German. This interactive tutor provides vocabulary, grammar lessons, conversation practice, and AI-powered chat features.

## Features

### 🔍 **Advanced Search Functionality**

- **Multi-language Search**: Search in German, English, Urdu, and Roman Urdu
- **Smart Filtering**: Filter by difficulty levels (A1, A2, B1, B2)
- **Content Type Search**: Search across vocabulary, grammar lessons, and conversation scenarios
- **Real-time Results**: Instant search results with relevance scoring
- **Quick Navigation**: Click on search results to jump directly to relevant content

### 📚 **Vocabulary Learning**

- Comprehensive German vocabulary organized by CEFR levels
- Roman Urdu pronunciations for accurate pronunciation
- Interactive practice mode with immediate feedback
- Progress tracking and scoring system

### 📖 **Grammar Lessons**

- Structured grammar lessons for each proficiency level
- Clear explanations with examples
- Urdu translations for better comprehension
- Interactive expandable content

### 💬 **Conversation Practice**

- Real-world conversation scenarios
- Step-by-step phrase practice
- Multiple difficulty levels
- Cultural context integration

### 🤖 **AI Chat Tutor**

- Practice conversations with AI feedback
- Personalized learning recommendations
- Error correction and tips
- Multi-language support

### 📊 **Progress Tracking**

- Points and streak system
- Accuracy measurements
- Learning milestones
- Personal achievement tracking

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/german-urdu-tutor.git
cd german-urdu-tutor
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Quick Start (Windows)

1. Double-click `fix-and-start.bat` to automatically install and start the application
2. Or double-click `install.bat` first, then `start.bat`

### Troubleshooting

If you encounter Tailwind CSS compilation errors:

1. Run the fix script: `fix-and-start.bat`
2. Or manually: Delete `node_modules` and `package-lock.json`, then run `npm install`
3. See `TAILWIND_FIX.md` for detailed troubleshooting steps

## How to Use the Search Feature

### Basic Search

1. Use the search bar in the header for quick searches
2. Type in any language (German, English, Urdu, Roman Urdu)
3. View instant dropdown results with previews

### Advanced Search

1. Navigate to "Search - تلاش" from the sidebar
2. Use the main search input for detailed searches
3. Apply filters:
   - **Levels**: Select specific CEFR levels (A1-B2)
   - **Languages**: Choose which languages to search in
   - **Content Types**: Filter by vocabulary, grammar, or conversations
4. Click on any result to navigate directly to that content

### Search Tips

- Search for specific German words: "Hallo", "Familie"
- Search for English meanings: "family", "greetings"
- Search for Urdu translations: "خاندان", "سلام"
- Search for Roman Urdu: "hallo", "familia"
- Search for grammar topics: "articles", "verbs", "cases"

## Available Scripts

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload when you make changes.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Technologies Used

- **React 19.1.0**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **JavaScript ES6+**: Modern JavaScript features

## Project Structure

```
src/
├── App.js              # Main application component with search functionality
├── App.css             # Tailwind CSS and custom styles
├── index.js            # Application entry point
└── index.css           # Global styles

public/
├── index.html          # HTML template
├── manifest.json       # PWA manifest
└── favicon.ico         # Application icon
```

## Language Support

- **German**: Primary target language
- **English**: Interface and translations
- **Urdu**: Native language support with RTL text
- **Roman Urdu**: Pronunciation guide

## CEFR Levels Covered

- **A1**: Basic greetings, family, numbers
- **A2**: Food, colors, everyday vocabulary
- **B1**: Emotions, abstract concepts
- **B2**: Advanced vocabulary and grammar

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## Future Enhancements

- [ ] Audio pronunciation with native speakers
- [ ] Spaced repetition algorithm for vocabulary
- [ ] Offline mode support
- [ ] Mobile app version
- [ ] Progress synchronization across devices
- [ ] Advanced AI conversation practice
- [ ] Cultural context lessons

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- German vocabulary sourced from CEFR guidelines
- Urdu translations verified by native speakers
- UI inspiration from modern language learning platforms
