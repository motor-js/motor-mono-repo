declare const theme: {
    borders: {
        none: number;
        "1px": string;
        "2px": string;
        "4px": string;
        "8px": string;
    };
    colors: {
        black: string;
        white: string;
        primary: string;
        secondary: string;
        success: string;
        info: string;
        warning: string;
        danger: string;
        light: string;
        dark: string;
        brand: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        gray: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        red: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        orange: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        yellow: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        green: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        teal: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        blue: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        cyan: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        purple: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        pink: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
    };
    radii: {
        none: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        full: string;
    };
    shadows: {
        xs: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        outline: string;
        inner: string;
        none: string;
        "dark-lg": string;
    };
    sizes: {
        container: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        body: {
            xsmall: string;
            small: string;
            medium: string;
            large: string;
            xlarge: string;
        };
        h1: string[];
        h2: string[];
        h3: string[];
        h4: string[];
        h5: string[];
        h6: string[];
        max: string;
        min: string;
        full: string;
        "3xs": string;
        "2xs": string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": string;
        "6xl": string;
        "7xl": string;
        "8xl": string;
        px: string;
        0.5: string;
        1: string;
        1.5: string;
        2: string;
        2.5: string;
        3: string;
        3.5: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    typography: {
        letterSpacings: {
            tighter: string;
            tight: string;
            normal: string;
            wide: string;
            wider: string;
            widest: string;
        };
        lineHeights: {
            normal: string;
            none: number;
            shorter: number;
            short: number;
            base: number;
            tall: number;
            taller: string;
            "3": string;
            "4": string;
            "5": string;
            "6": string;
            "7": string;
            "8": string;
            "9": string;
            "10": string;
        };
        fontWeights: {
            hairline: number;
            thin: number;
            light: number;
            normal: number;
            medium: number;
            semibold: number;
            bold: number;
            extrabold: number;
            black: number;
        };
        fonts: {
            heading: string;
            body: string;
            mono: string;
        };
        fontSizes: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            "2xl": string;
            "3xl": string;
            "4xl": string;
            "5xl": string;
            "6xl": string;
            "7xl": string;
            "8xl": string;
            "9xl": string;
        };
    };
    filter: {
        border: string;
        borderRadius: string;
        borderHovered: string;
        size: {
            small: {
                fontSize: string;
                tagSize: string;
                itemHeight: number;
            };
            medium: {
                fontSize: string;
                tagSize: string;
                itemHeight: number;
            };
            large: {
                fontSize: string;
                tagSize: string;
                itemHeight: number;
            };
        };
    };
};
export declare type Theme = typeof theme;
export default theme;
