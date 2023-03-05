module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__scanCodes'],
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          // '@/*': ['./src/*'],
          '@/components': ['./src/components/index.ts'],
          '@/components/*': ['./src/components/*'],
          '@/types': ['./src/types/index.ts'],
          '@/types/*': ['./src/types/*'],
          '@/services': ['./src/services/index.ts'],
          '@/services/*': ['./src/services/*'],
          '@/utils': ['./src/utils/index.ts'],
          '@/utils/*': ['./src/utils/*'],
          '@/helpers': ['./src/helpers/index.ts'],
          '@/helpers/*': ['./src/helpers/*'],
          '@/hooks': ['./src/hooks/index.ts'],
          '@/hooks/*': ['./src/hooks/*'],
          '@/assets': ['./src/assets/index.ts'],
          '@/assets/*': ['./src/assets/*'],
          '@/constants': ['./src/constants/index.ts'],
          '@/constants/*': ['./src/constants.ts/*'],
          '@/screens': ['./src/screens/index.ts'],
          '@/screens/*': ['./src/screens/*'],
          '@/screen-components/*': ['./src/screen/components/*'],
          '@/screen-components': ['./src/screens/components/index.ts'],
          '@/screen-components/*': ['./src/screens/components/*'],
          '@/store/*': ['./src/store/*'],
          '@/store': ['./src/store/index.ts'],
          '@/navigation/*': ['./src/navigation/*'],
          '@/navigation': ['./src/navigation/index.ts'],
          '@/theme': ['./src/theme/index.ts'],
          '@/theme/*': ['./src/theme/*'],
        },
      },
    ],
  ],
  // plugins: [['module-resolver', { root: './src' }]]
}
