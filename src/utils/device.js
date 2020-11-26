const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '480px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};

export const largeDesktop = (style) => {
    return `
        @media ${device.desktopL} {
            ${style}
        }
    `
}

export const desktop = (style) => {
    return `
        @media (max-width: ${size.desktop}) and ${device.laptop} {
            ${style}
        }
    `
}

export const tabletPortrait = (style) => {
    return `
        @media ${device.tablet} and (max-width: ${size.laptop}) {
            ${style}
        }
    `
}

export const tabletLandscape = (style) => {
    return `
        @media ${device.tablet} and (max-width: ${size.laptop}) and (orientation: landscape) {
            ${style}
        }
    `
}

export const mobileLandscape = (style) => {
    return `
        @media ${device.mobileL} and (max-width: ${size.tablet}) {
            ${style}
        }
    `
}

export const mobilePortrait = (style) => {
    return `
        @media ${device.mobileS} and (max-width: ${size.mobileL}) {
            ${style}
        }
    `
}