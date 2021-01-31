import { tailwind, baseColors } from "@theme-ui/preset-tailwind"

export default {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  styles: {
    header: {
      background: 'white',
    },
    root: {
      // uses the theme values provided above
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
    siteTitle: {
      fontSize: [3, 4, null, 5, null],
    },
    siteHeader: {
      // background: baseColors.gray[6],
      background: 'linear-gradient(180deg, #0e0e0e, #212121 15%, #0e0e0e)',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      padding: [4, null, null, 5],
      // borderBottom: "10px solid red",
    },
    siteContentArea: {
      // backgroundColor: '#351212',
      // background: 'linear-gradient(180deg, #0e0e0e, #212121 15%, #0e0e0e)',
      // boxShadow: '0 -1px 0px 1px #2f2f2f',
      boxShadow: '0 -1px 0px 1px #d22626, 0 -2px 0px 1px #bf0000',
      padding: [2, null, null, 4],
    },
    siteContainer: {
      maxWidth: 1280,
      margin: '0 auto',
      pt: [2, 0, 0, 0],
    }
  },
}
