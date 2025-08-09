# CRUSH Configuration for React Portfolio

## Build/Lint/Test Commands
- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run all tests in watch mode
- `npm test -- --watchAll=false` - Run all tests once
- `npm test -- src/path/to/specific.test.js` - Run a single test file
- `npm test -- --coverage` - Run tests with coverage report

## Code Style Guidelines

### Imports
- Use absolute imports when possible
- Group imports in order: built-in, external, internal
- Use named imports for components and utilities
- Place CSS modules imports before component imports

### Formatting
- Use Prettier with default settings (Create React App defaults)
- Function components with arrow functions
- Component return statements with parentheses for multiline JSX
- CSS modules for component styling

### Types
- PropTypes for component prop validation
- JSDoc comments for functions with complex parameters
- Use React functional components with hooks

### Naming Conventions
- PascalCase for components (e.g., HeroSection)
- camelCase for functions and variables
- kebab-case for file names
- CSS module classes in camelCase

### Error Handling
- Use try/catch blocks for async operations
- Handle API errors gracefully with user feedback
- Log errors appropriately for debugging

### Component Structure
- Destructure props at function parameter level
- Use React hooks at the top of functional components
- Group related logic in custom hooks when possible
- Use semantic HTML elements

### Theme Context
- Use ThemeContext for managing light/dark mode
- Implement theme-aware icons and styling
- Store theme preference in localStorage