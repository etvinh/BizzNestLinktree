# Ethan's Links

Linktree-style page for Ethan Vinh, themed as a Matrix-style decoder terminal. Built with React + Vite.

**Live:** https://etvinh.github.io/BizzNestLinktree/

## Run locally

```bash
npm install
npm run dev      
npm test        
npm run build    
```

## JS feature: "Escape the Matrix"

Clicking the button triggers a full-screen overlay of falling 1s and 0s for 3 seconds. The page text also decodes from scrambled characters into the real labels on initial load.

**Why this feature:** I like The Matrix and wanted to experiment with animations since the functionality of this app was fairly simple.

**Tricky part:** The decoding animation was rather tricky since I had little experience with. `requestAnimationFrame` and had to read documentation and use AI to understand this feature. I also had to create a loop with a frame counter, which was the most technically challenging part of this assignment.
