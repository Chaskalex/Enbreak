# ENBREAK — Project Guide for Claude
**Last Updated:** December 2025  
**Project Phase:** MVP (no backend, vanilla HTML/CSS/JS only)

---

## Overview
ENBREAK is an English-learning website where students can book private lessons, enroll in courses, and study with different resources.

**Core Philosophy:**  
Claude should ALWAYS prioritize minimalism, clarity, and clean structure. Avoid over-engineering. Keep it simple.

---

## 🔧 Tech Stack
- **HTML** (vanilla, no framework)
- **CSS** (vanilla, no preprocessors)
- **JavaScript** (vanilla, ES6+)
- **No backend** (static site only)
- **No build tools** (no webpack, vite, etc.)

---

## 📁 Project Structure
```
ENBREAK/
├── .claude/           # Ignore (VS Code metadata)
├── .vscode/           # Ignore (VS Code settings)
├── assets/            # Static files (images, fonts, etc.)
├── css/
│   └── style.css      # Main stylesheet
├── favicon/           # Favicon files
├── js/                # JavaScript files
├── pages/
│   ├── biblioteca/    # Library/resources page
│   ├── clases/        # Classes page
│   └── soporte/       # Support page
├── Claude.md          # This file
├── footer.html        # Reusable footer component
├── header.html        # Reusable header component
├── index.html         # Homepage
├── netlify.toml       # Netlify config (ignore unless deployment issue)
├── page-template.html # Template for new pages
└── test.html          # Test/sandbox file
```

---

## 🚫 NEVER READ OR LOAD THESE
These waste tokens and provide no value:

- `node_modules/` (if it exists)
- `dist/`, `build/`, `.cache/`
- `.git/`, `.vscode/`, `.claude/`
- `coverage/`, `*.log`
- `netlify.toml` (unless I mention deployment)
- Binary files: `*.mp4`, `*.png`, `*.jpg`, `*.gif`, `*.pdf`, `*.woff`, `*.ttf`
- `assets/` folder (unless I explicitly reference an image)
- `favicon/` folder

**Rule:** If a file is NOT inside `css/`, `js/`, `pages/`, or is NOT a root `.html` file, assume it's irrelevant unless I explicitly mention it.

---

## 💡 How Claude Should Assist

### Core Principles
1. **Only work with files I explicitly mention** — Do NOT scan the entire project
2. **Modify ONLY what I ask for** — Do not refactor unrelated code
3. **Keep answers concise** — No lengthy explanations unless I ask "why" or "explain"
4. **Assume the open file is your only context** — If you need another file, ask me to open it

### When Writing Code
- **DO NOT add comments** (unless I request them)
- Use **clear, semantic names** for classes, IDs, and variables
- Keep HTML **semantic** (use `<nav>`, `<section>`, `<article>`, etc.)
- Keep CSS **minimal** — avoid unnecessary nesting or complexity
- Use **vanilla JavaScript** — no jQuery, no external libraries unless approved
- Match the **existing style** of the project

### Code Style Standards
- **CSS classes:** `kebab-case` (e.g., `hero-section`, `btn-primary`)
- **JavaScript variables:** `camelCase` (e.g., `studentName`, `fetchData`)
- **Indentation:** 2 spaces (no tabs)
- **HTML attributes:** Use double quotes (`class="container"`)

### Output Format Rules
**Default output style:**
```html
<!-- Show only the changed section with minimal context -->

<!-- BEFORE -->
<div class="old-class">
  <p>Old content</p>
</div>

<!-- AFTER -->
<div class="new-class">
  <p>Updated content</p>
</div>
```

- Provide **minimal code snippets** showing only what changed
- Include **2-3 lines of surrounding context** so I know where to apply the change
- Use comments like `<!-- ... existing code ... -->` for omitted parts
- **Full file rewrites** only if I explicitly say "rewrite the entire file"

### When NOT to Help (and what to do instead)
- **If my request would create messy code:** Briefly explain why, then suggest a cleaner alternative
- **If something requires a backend:** Say "This needs a backend" immediately — don't try to fake it with localStorage hacks
- **If I'm asking for something overly complex:** Ask if a simpler solution would work first

### Using @filename References
- **ONLY use `@filename`** when you need to reference specific code from another file
- **DO NOT scan files proactively** — ask me to open them if needed
- If I say "update the header," assume I mean `header.html` (the root file, not a nested one)

---

## 🎯 Project Goals
- **Clean, modern, maintainable** website
- **Fast loading** with minimal dependencies
- **Clear UX** for students to navigate lessons, booking, and resources
- **Mobile-responsive** design (assume mobile-first approach)

---

## 🧭 Working with Pages
- **`index.html`** → Homepage
- **`pages/clases/`** → Private lessons and courses
- **`pages/biblioteca/`** → Study resources
- **`pages/soporte/`** → Support/contact
- **`header.html` / `footer.html`** → Shared components (likely included via JS or manually)

If I reference "the biblioteca page," assume I mean files inside `pages/biblioteca/`.

---

## ⚡ Quick Reference Commands
When I say... | Claude should...
--- | ---
"Update X" | Show minimal diff for that section only
"Explain why" | Provide reasoning/context
"Rewrite this file" | Output the complete updated file
"Make it responsive" | Add mobile-first CSS adjustments
"Add a section for Y" | Create new HTML + minimal CSS
"Debug this" | Analyze and suggest fixes with explanation

---

## 🔒 Final Rules
1. **Never assume** — If unclear, ask a single clarifying question
2. **Never over-deliver** — If I ask for one change, don't refactor the entire file
3. **Never add cruft** — No unnecessary divs, classes, or JavaScript
4. **Always match existing patterns** — Look at current code style before suggesting changes
5. **Bias toward simplicity** — The simplest solution that works is the best solution

---

**End of Guide** — This document is the source of truth for how Claude should interact with this project.