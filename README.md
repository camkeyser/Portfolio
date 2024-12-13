# Portfolio Site

Welcome to my **Portfolio Website**! This project showcases my skills, projects, and experience through an interactive and visually appealing interface. Built using **React**, **Vite**, and **SCSS**, it is designed for speed and simplicity.

## 🚀 Features
- **Hero Section**: A captivating introduction.
- **Projects Section**: Highlights my best work.
- **Experience Section**: Details about my professional journey.
- **Responsive Design**: Fully functional on all device sizes.
- **SCSS Styling**: Modular and reusable styles.

## 📂 Project Structure
```
portfolio/
│
├── dist/                 # Production build output
├── src/                  # Source files
│   ├── assets/           # Static assets (images, icons, etc.)
│   ├── components/       # React components
│   │   ├── Experience/   # Experience section
│   │   ├── Footer/       # Footer section
│   │   ├── Header/       # Header section
│   │   ├── Hero/         # Hero section
│   │   └── Projects/     # Projects section
│   ├── sass/             # SCSS stylesheets
│   │   └── main.scss     # Main SCSS file
│   ├── main.jsx          # Entry point
│   └── vite.config.js    # Vite configuration
│
├── index.html            # HTML template
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

## 🛠️ Getting Started

### Prerequisites
- **Node.js** (v16+ recommended)
- **npm** or **yarn**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/camkeyser/Portfolio.git
   cd portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open your browser and navigate to `http://localhost:5173`.

### Build for Production
To create a production build:
```bash
npm run build
# or
yarn build
```
The optimized build will be output to the `dist/` folder.

## 📦 Dependencies
- [**React**](https://reactjs.org/): Component-based UI framework.
- [**Vite**](https://vitejs.dev/): Lightning-fast build tool.
- [**SCSS**](https://sass-lang.com/): CSS preprocessor for modular styles.

## 🖋️ License
This project is licensed under the [MIT License](LICENSE).

---