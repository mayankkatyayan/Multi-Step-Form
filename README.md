# Multi-Step Form with Next.js, Tailwind CSS, Zustand, ShadCN UI, and Framer Motion

This project is a modern, responsive, and accessible multi-step form built with cutting-edge technologies like Next.js, Tailwind CSS, Zustand, ShadCN UI components, and Framer Motion. The form includes validation, tooltips, progress indicators, toast notifications, and a review step for submission.

## Features
- **Multi-step navigation**: Navigate seamlessly between form steps.
- **Form validation**: Client-side validation for required fields and proper formats.
- **Progress Indicator**: Visual feedback on the current step's progress.
- **Tooltips**: Contextual hints for better user guidance.
- **Toast Notifications**: Alerts for successful submissions or errors.
- **Responsive Design**: Fully responsive and optimized for various devices.
- **Accessible**: WCAG-compliant features like keyboard navigation and ARIA roles.
- **Animations**: Smooth transitions powered by Framer Motion.

---

## Technologies Used
- **Next.js**: Framework for server-rendered React applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Zustand**: State management for form data.
- **ShadCN UI**: UI components for consistent and accessible design.
- **Framer Motion**: Animations for interactive transitions.
- **Jest and React Testing Library**: Unit testing for key components.

---

## Project Structure
```plaintext
.
├── app/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── tooltip.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── ToastContext.tsx
│   │   └── Stepper.tsx
│   ├── steps/
│   │   ├── Step1.tsx
│   │   ├── Step2.tsx
│   │   ├── Step3.tsx
│   │   └── Step4.tsx
│   ├── store/
│   │   └── formStore.ts
│   └── page.tsx
├── styles/
├── public/
├── tests/
├── README.md
├── package.json
└── tailwind.config.js
```

---

## Installation and Setup

### Prerequisites
- Node.js (v16 or later)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
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
4. Open the application in your browser at `http://localhost:3000`.

---

## Features Explained

### 1. Multi-Step Form Navigation
- Steps include **Personal Information**, **Address**, **Preferences**, and **Review & Submit**.
- `Stepper.tsx` visually displays progress and the current step.

### 2. Form Validation
- `validateRequired` and `validateEmail` functions ensure required fields and valid email formats.
- Errors are displayed dynamically under inputs.

### 3. Tooltips
- Helpful hints using `Tooltip`, `TooltipTrigger`, and `TooltipContent` components from ShadCN UI.
- Example: A tooltip to explain the "Full Name" field.

### 4. Toast Notifications
- Toasts notify users of successful form submission or errors.
- Implemented using a custom `ToastContext`.

### 5. Animations
- Framer Motion is used for hover and click effects on buttons and transitions between steps.

### 6. Accessibility
- Includes keyboard navigation and ARIA roles for accessibility compliance.

### 7. Responsive Design
- Tailwind CSS ensures the form adapts to various screen sizes.

### 8. Testing
- Key components are tested using Jest and React Testing Library to ensure reliability.

---

## Folder Overview

### `components/ui`
Contains reusable components such as `Button`, `Tooltip`, and `Progress`. All are styled and accessible.

### `components/steps`
Includes individual step components for the form. Each step contains its specific fields and logic.

### `store`
Centralized state management for the form using Zustand.

---

## How to Customize

### Styling
- Update `tailwind.config.js` to change colors, fonts, or spacing.
- Modify styles directly in the components using Tailwind classes.

### Adding New Steps
1. Create a new step component (e.g., `Step5.tsx`) in `components/steps`.
2. Add the new step to the `steps` array in `page.tsx`.

### Localization
- Add `next-i18next` for multi-language support.
- Create translation files in the `public/locales` directory.

---

## Known Issues
- **Submit Button**: If the form doesn't submit, check the `handleSubmit` function and ensure no default form behavior is interfering.

---

## Future Enhancements
- Add a backend for form data submission.
- Implement real-time validation feedback.
- Include file upload functionality.

---

## Contributors
- **Mayank Katyayan**

---

## License
This project is licensed under the MIT License. Feel free to use and modify as needed.

