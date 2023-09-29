# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This app is made as an assignment for recruitment process at Sharpe-AI.

The assignment statement is as follows:
1. Create the UI attached (Untitled_1.png).
2. The input field accepts values > 0 including decimals
3. Show the value input value in the input field on a label on screen (right-hand side). But when a certain value is typed into the input value field, it should not be seen immediately. But wait for 1/1.5 seconds for all the typed values and then only show the complete value
For example: if user types numbers "123" (1...2...3) quickly. the field should show 123 after 1 second but none of them in between. But in case user types "12"(pause for about 1 second ) and then type "3" without editing the previous values. Then it will show 12(after 1 second) and again after another 1 second it shows 123.

## Live Demo

Experience the live version of the AI-Summarizer at [Live Demo](https://sharpe-ai-ui.netlify.app/).