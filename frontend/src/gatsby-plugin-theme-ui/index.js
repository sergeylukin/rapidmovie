import { tailwind, baseColors } from "@theme-ui/preset-tailwind"

export default {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  fontWeights: {
    body: 400,
    heading: 700,
  },
  text: {
    paragraph: {
      py: 1,
    }
  },
  styles: {
    header: {
      background: 'white',
    },
    p: {
      variant: 'text.paragraph'
    },
    root: {
      // uses the theme values provided above
      fontSize: 3,
      fontFamily: 'body',
      fontWeight: 'body',
    },
  },
  colors: {
    ...tailwind.colors,
    background: 'white',
    text: baseColors.black[1],
    textGray: "#6e6e6e",
    primary: '#0e0e0e',
    textOpen: baseColors.gray[8],
    icons: baseColors.gray[6],
    iconsOpen: baseColors.gray[8],
    footer: {
      background: baseColors.gray[2],
      text: baseColors.gray[8],
      links: baseColors.gray[8],
      icons: baseColors.gray[8],
    },
    // You can delete dark mode by removing the "modes" object and setting useColorMode to false in gatsby-theme-catalyst-core
    modes: {
      dark: {
        background: baseColors.gray[9],
        text: baseColors.gray[1],
        textGray: "#9f9f9f",
        primary: "#458ad2",
        secondary: baseColors.orange[7],
        accent: baseColors.gray[8],
        highlight: baseColors.orange[5],
        muted: baseColors.gray[8],
        header: {
          text: baseColors.gray[1],
          textOpen: baseColors.gray[1],
          background: "#232946",
          backgroundOpen: baseColors.gray[8],
          icons: baseColors.gray[1],
          iconsOpen: baseColors.gray[1],
        },
        footer: {
          background: "#232946",
          text: baseColors.gray[1],
          links: baseColors.gray[1],
          icons: baseColors.gray[1],
        },
      },
    },
  },
  variants: {
    movie: {
      title: {
        py: 4,
        fontSize: 5,
        fontWeight: 'bold',
        textAlign: ['center', null, 'left', null],
      },
      label: {
        fontWeight: 'bold',
        fontSize: 2,
      },
      cover: {
        '> img': {
          maxWidth: '300px'
        }
      },
      details: {
        flexGrow: 2,
        p: 3,
        margin: '0 auto',
        mt: [4, null, 0, null],
        maxWidth: ['400px', '100%', '100%', '100%'],
        background: '#f3f3f3',
        ' dl': {
          m: 0,
        },
        ' dt': {
          pt: 3,
        },
        ' dt:first-child': {
          pt: 0,
        },
        ' dd': {
          py: 1,
          m: 0,
        }
      }
    },
    siteHeader: {
      background: baseColors.gray[6],
      textAlign: 'center',
      padding: [4, null, null, 3],
    },
    siteContainer: {
      maxWidth: 960,
      margin: '0 auto',
      py: 2,
      px: 3,
    }
  },
}
