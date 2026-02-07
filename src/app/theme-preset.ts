import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const FinancyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#E0FAE9',
      100: '#C6F6D5',
      200: '#9AE6B4',
      300: '#68D391',
      400: '#48BB78',
      500: '{brand.base}',
      600: '{brand.dark}',
      700: '#15803D',
      800: '#0F5A2A',
      900: '#0A3D1C',
      950: '#052210',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{brand.base}',
          contrastColor: '#ffffff',
          hoverColor: '{brand.dark}',
          activeColor: '{brand.dark}',
        },
        highlight: {
          background: '{brand.base}',
          focusBackground: '{brand.dark}',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
        surface: {
          0: '#ffffff',
          50: '{gray.100}',
          100: '{gray.200}',
          200: '{gray.300}',
          300: '{gray.400}',
          400: '{gray.500}',
          500: '{gray.600}',
          600: '{gray.700}',
          700: '{gray.800}',
          800: '{gray.800}',
          900: '{gray.800}',
          950: '#000000',
        },
      },
    },
  },
  primitive: {
    brand: {
      base: '#1F6F43',
      dark: '#124B2B',
    },
    gray: {
      100: '#F8F9FA',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#111827',
    },
    blue: {
      light: '#DBEAFE',
      base: '#2563EB',
      dark: '#1D4ED8',
    },
    purple: {
      light: '#F3E8FF',
      base: '#9333EA',
      dark: '#7E22CE',
    },
    pink: {
      light: '#FCE7F3',
      base: '#DB2777',
      dark: '#BE185D',
    },
    red: {
      light: '#FEE2E2',
      base: '#DC2626',
      dark: '#B91C1C',
    },
    orange: {
      light: '#FFEDD5',
      base: '#EA580C',
      dark: '#C2410C',
    },
    yellow: {
      light: '#F7F3CA',
      base: '#CA8A04',
      dark: '#A16207',
    },
    green: {
      light: '#E0FAE9',
      base: '#16A34A',
      dark: '#15803D',
    },
    danger: '#EF4444',
    success: '#19AD70',
    black: '#000000',
    white: '#ffffff',
  },
});
