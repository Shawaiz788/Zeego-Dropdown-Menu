# Zeego Dropdown & Context Menu App 👋

A premium React Native mobile application showcasing native menu integrations using the **Zeego** library. Built on top of **Expo (SDK 54)** and **React Native**, this project demonstrates how to implement high-quality, high-performance platform-native Dropdown and Context Menus for iOS and Android.

---

## 🚀 Features

The application showcases two primary types of native interactions:

### 1. Native Dropdown Menu (`DropDownMenu.tsx`)
- Integrated directly into the Expo Router Navigation Bar (`headerRight`).
- Uses native dropdown rendering (`zeego/dropdown-menu`).
- Platform-optimized icons: SF Symbols on iOS (e.g., `info.circle`) and system drawables on Android (e.g., `ic_dialog_info`).
- Supports sub-groups, custom menu items, and native checkbox toggles.

### 2. Native Context Menu (`ImageWithContext.tsx`)
- Triggers when long-pressing an image asset.
- Implements platform-native Haptic feedback and Context Menus (`zeego/context-menu`).
- Includes customizable features:
  - **Menu Actions**: Copy, Save to Photos, and Share.
  - **Menu Preview**: Custom view preview on long press (iOS native feature).
  - **Rich Content Items**: Inline images inside menu items (`ContextMenu.ItemImage`).

---

## 🛠️ Project Structure

```bash
├── app/
│   ├── _layout.tsx       # Root layout defining the stack navigator
│   └── index.tsx         # Main Screen containing DropDownMenu and ImageWithContext
├── components/
│   ├── DropDownMenu.tsx  # Wrapper for platform-native dropdown menus
│   ├── ImageWithContext.tsx # Context menu attached to a pressable image
│   └── ui/               # Reusable base styling components
├── package.json          # Dependency list (Expo v54, React Native, Zeego, etc.)
└── tsconfig.json         # TypeScript configuration
```

---

## ⚙️ Prerequisites & Setup

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- **Android**: Android Studio & Emulator or a physical device with USB debugging enabled.
- **iOS**: macOS with Xcode (to run on Simulator or iOS physical device).

### 1. Install Dependencies
Clone the repository, navigate to the project directory, and install dependencies:
```bash
npm install
```

### 2. Native Menu Setup Requirement
Because Zeego relies on native packages (`@react-native-menu/menu`), the app must run in a **Development Build** rather than the standard Expo Go sandbox.

To generate the native `android` and `ios` folders and build the development client:

#### Build & Run for Android
```bash
npx expo run:android
```

#### Build & Run for iOS
```bash
npx expo run:ios
```

### 3. Start Development Server
Once the native client is installed on your device or emulator, start the Metro bundler:
```bash
npx expo start
```
- Press `a` to open the app on your Android device/emulator.
- Press `i` to open the app on your iOS device/simulator.
- Press `r` to reload the Metro bundler.

---

## 💡 How to Customize Menus

### Adding Dropdown Items
To modify or add dropdown items, update the properties passed to the `<DropDownMenu />` in [app/index.tsx](file:///c:/Users/lenovo/Desktop/Internship/Zeego/ZeegoApp/app/index.tsx):
```tsx
<DropDownMenu
  onSelect={(key) => console.log(key)}
  items={[
    {
      key: 'new-action',
      title: 'New Action',
      icon: 'sparkles',             // SF Symbol name (iOS)
      iconAndroid: 'btn_star_big_on' // Android Drawable name (Android)
    }
  ]}
/>
```

### Modifying Context Menu Actions
Customize the array structure inside [ImageWithContext.tsx](file:///c:/Users/lenovo/Desktop/Internship/Zeego/ZeegoApp/components/ImageWithContext.tsx):
```tsx
const contextItems = [
    { 
      title: 'Copy', 
      systemIcon: 'doc.on.doc', 
      action: () => contextActionPress('copy') 
    },
    // Add custom actions here...
];
```

---

## 📚 Libraries & Documentation

- [Zeego Documentation](https://zeego.menu)
- [Expo v54 Documentation](https://docs.expo.dev/versions/v54.0.0/)
- [@react-native-menu/menu GitHub](https://github.com/react-native-menu/menu)
