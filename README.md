### Theming Context:
The app uses a theme context to manage light and dark themes, defining `lightTheme` and `darkTheme` objects with properties for colors. `ThemeProvider` handles the current theme state and provides a `toggleTheme` function, wrapping the app's main components to apply themes globally.

### Home Screen:
The `HomeScreen` component uses the `useTheme` hook to access the current theme. It features a profile section, card image, action buttons, and a transaction list, with styles dynamically adapted based on the theme.

### Bottom Tab Navigation:
The `BottomTabs` component sets up navigation using `@react-navigation/bottom-tabs`, including four tabs: Home, My Cards, Statistics, and Settings. Icons and styles are theme-dependent.

### App Entry Point:
The `App` component is the entry point, loading custom fonts asynchronously and displaying a loading indicator. Once fonts are ready, it wraps the navigation container with `ThemeProvider` and renders `BottomTabs`.

### Settings Screen:
The `SettingsScreen` component allows users to toggle the app theme and navigate to various settings options. It uses the `useTheme` hook for theme access and management.

The app utilizes React Native's components, hooks, and context API to create a modular, theme-aware application that is maintainable and scalable, ensuring a consistent user experience across themes.

### Screenshots

![4a](https://github.com/MaameLissa/-rn-assignment5-11263472/assets/170031712/c0f636d7-d3fa-4699-8d74-53a513472963)
![5a](https://github.com/MaameLissa/-rn-assignment5-11263472/assets/170031712/0e195f68-8bf8-4002-a2e4-64564eb8f0e2)
![1a](https://github.com/MaameLissa/-rn-assignment5-11263472/assets/170031712/445de8ff-22cf-4291-bfe5-97ad812e83eb)
![2a](https://github.com/MaameLissa/-rn-assignment5-11263472/assets/170031712/2c21224f-60e0-4da6-8354-cb3beb42aa3b)

