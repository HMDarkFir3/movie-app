export const dark = {
  colors: {
    screens: {
      home: {
        background: "#0e0e15",

        components: {
          categoryItem: {
            isActive: "#f31233",
            isNotActive: "#e1e2eb",
          },
          upcomingCard: {
            background: "#1b1a23",
            text: "#e1e2eb",
            icon: "#feaa2b",
          },
          movieCard: {
            background: "#1b1a23",
            text: "#e1e2eb",
            iconPrimary: "#73727a",
            iconSecondary: "#feaa2b",
          },
        },
      },
      details: {
        backgroundPrimary: "#0e0e15",
        backgroundSecondary: "#1b1a23",
        textPrimary: "#e1e2eb",
        textSecondary: "#73727a",
        iconPrimary: "#e1e2eb",
        iconSecondary: "#feaa2b",
        iconTertiary: "#73727a",
        certification: {
          free: "#00a64d",
          adult: "#1b1a23",
        },
        gradient: ["transparent", "#0e0e15"],

        components: {
          genreCard: {
            background: "#1b1a23",
            text: "#e1e2eb",
          },
          actorCard: {
            background: "#1b1a23",
            textPrimary: "#e1e2eb",
            textSecondary: "#f31233",
            icon: "#73727a",
          },
          recommendedCard: {
            background: "#1b1a23",
            text: "#e1e2eb",
            iconSecondary: "#feaa2b",
            iconPrimary: "#73727a",
          },
        },
      },
    },
    components: {
      loading: {
        load: "#f31233",
      },
    },
    statusBar: {
      background: "#0e0e15",
    },
    navigationBar: {
      background: "#0e0e15",
    },
    androidRipple: {
      primary: "#333333",
      secondary: "#c1c1c1",
    },
  },

  fonts: {
    regular: "Roboto_400Regular",
    medium: "Roboto_500Medium",
    bold: "Roboto_700Bold",
  },
};
