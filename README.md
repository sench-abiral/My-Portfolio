# My-Portfolio

Abiral Senchuri — Portfolio (Vanilla HTML/CSS/JS)

A premium dark-mode portfolio built with **plain HTML, CSS, and JavaScript**. No Node.js, no npm, no build step. Just open `index.html` and it works.

---

## 📁 Files

```
vanilla-portfolio/
├── index.html      ← the page
├── styles.css      ← all styling
├── script.js       ← all interactivity
├── data.js         ← 🎯 your content (edit this!)
├── favicon.svg     ← browser tab icon
├── avatar.jpg      ← YOUR PHOTO (add this!)
└── resume.pdf      ← YOUR RESUME (add this!)
```

---

## ▶️ How to run

### Option 1 — Easiest: Just double-click `index.html`

Opens in your browser. Works immediately.

### Option 2 — VS Code Live Server (recommended for development)

1. Open VS Code
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions tab
3. Right-click `index.html` → **Open with Live Server**
4. Your browser opens automatically; saving files auto-refreshes the page

That's it. No `npm install`, no terminal, no build step.

---

## 🎨 Customize your content

Open **`data.js`** in any text editor. Everything you might want to change lives in this one file:

- Your name, email, phone, location, social links
- The typing animation phrases in the hero
- Your skills and their progress percentages
- Your projects (title, description, tech stack, links)
- Your timeline (education, projects, learning milestones)
- Your services and testimonials
- The chatbot's answers

Save the file, refresh the browser. Done.

### Add your photo

Place a file named `avatar.jpg` in the same folder as `index.html`. Use a square image (600×600 or larger) for the best look. If you don't add one, a stylized "A" appears instead — it still looks great.

### Add your resume

Place a file named `resume.pdf` in the same folder. The "Resume" button in the hero will download it.

### Change colors

Open **`styles.css`** and edit the variables at the top:

```css
:root {
  --primary: #7C3AED;     /* Royal Violet */
  --secondary: #06B6D4;   /* Cyan Blue */
  --accent: #EC4899;      /* Neon Pink */
  ...
}
```

Change once, the whole site updates.

---

## 🚀 Deploy to GitHub Pages

1. Go to **github.com** → **New Repository** → name it `portfolio` (or anything you like)
2. Open the repo → **Add file** → **Upload files** → drag the whole folder contents
3. **Commit changes**
4. Go to **Settings** → **Pages** (left sidebar)
5. Source: **Deploy from a branch**, Branch: **main**, Folder: **/ (root)**, **Save**
6. Wait ~60 seconds. Your site is live at `https://YOUR_USERNAME.github.io/portfolio/`

That's the entire deployment. No build commands.

---

## ✨ What's included

- 🌗 Dark / light mode toggle (saved to localStorage)
- 🤖 AI chatbot widget with local knowledge base
- ✍️ Animated typing headline
- ✨ Floating particles in the hero
- 💎 Glassmorphism cards with gradient borders
- 📊 Animated skill progress bars
- 🪜 Animated experience timeline
- 📱 Fully responsive (mobile-first)
- ⬆️ Scroll progress bar + scroll-to-top button
- 💌 Contact form with mailto fallback (no backend needed)
- 📋 Copy-email button
- 🟢 WhatsApp quick-chat
- 🔗 Social links in hero, sidebar (desktop), and footer
- 💼 "Hire Me" button → opens Gmail with prefilled message

---

## 🐛 Troubleshooting

**Site shows white background when I open it**
→ You need an internet connection on first load — the page pulls Google Fonts and Lucide Icons from a CDN. If you're offline, the colors still work but icons might be missing.

**Icons aren't showing**
→ Check your internet connection, or check the browser console for blocked scripts. Lucide loads from `unpkg.com`.

**Photo isn't appearing**
→ Make sure your file is named exactly `avatar.jpg` (lowercase, with the `.jpg` extension) and is in the same folder as `index.html`.

**Chatbot says default answer too often**
→ In `script.js`, find the `getReply()` function and add more keywords to the `if` conditions, or expand `chatbot.responses` in `data.js`.

---

Built with ❤️ by **Abiral Senchuri** — Computing Science student @ CU London.
