# React Native Template

Modern React Native template built with Expo Router, Redux Toolkit, and TypeScript. Includes pre-configured navigation, state management, UI components, and development tools for rapid mobile app development.

## Features

- **Expo Router**: File-based routing with TypeScript support
- **Redux Toolkit**: State management with Redux Persist
- **TanStack Query**: Server state management and caching
- **React Native Paper**: Material Design UI components
- **Custom Components**: Pre-built UI components (Button, Input, Modal, Toast, etc.)
- **TypeScript**: Full type safety throughout the app
- **EAS Build**: Production-ready build configuration

## Quick Setup

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run on specific platform
npm run ios     # iOS simulator
npm run android # Android emulator
```

## Pre-built Components

The template includes a comprehensive set of custom components:

- **Alert** - Customizable alert dialogs
- **Button** - Themed button variants
- **Card** - Container component with elevation
- **Divider** - Visual content separator
- **IconButton** - Icon-based interactive buttons
- **Input** - Styled text input fields
- **Link** - Navigation and external links
- **Loading** - Loading indicators
- **Modal** - Overlay modal dialogs
- **Searchbar** - Platform-native search input
- **Switch** - Toggle switch component
- **Text** - Typography with theme variants
- **Toast** - Non-intrusive notifications

## Development Commands

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm start`       | Start Expo dev server    |
| `npm run ios`     | Run on iOS simulator     |
| `npm run android` | Run on Android emulator  |
| `npm run web`     | Run in web browser       |
| `npm test`        | Run tests in watch mode  |
| `npm run lint`    | Run ESLint               |

## Build & Deploy

```bash
# Install EAS CLI
npm install -g @expo/eas-cli

# Build for development
eas build --profile development

# Build for production
eas build --profile production

# Submit to app stores
eas submit --profile production
```