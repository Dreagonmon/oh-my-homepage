/**
 * @typedef {Object} EmbedSVGTemplate
 * @property {string} svgData
 * @property {Array<string>} configurableColors
 */

/**
 * @typedef {Object} EmbedSVGConfig
 * @property {string} svgName
 * @property {Record<string, string>} [colors]
 */

/** @type {Record<string, EmbedSVGTemplate>} */
const EMBED_SVG_TEMPLATE_MAP = {
    "dragon-scales": {
        svgData: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'><rect fill='#220055' width='100' height='1000'/><g fill-opacity='1'><circle  fill='#220055' cx='50' cy='0' r='50'/><g fill='#270059' ><circle cx='0' cy='50' r='50'/><circle cx='100' cy='50' r='50'/></g><circle  fill='#2c005e' cx='50' cy='100' r='50'/><g fill='#310062' ><circle cx='0' cy='150' r='50'/><circle cx='100' cy='150' r='50'/></g><circle  fill='#360066' cx='50' cy='200' r='50'/><g fill='#3c006a' ><circle cx='0' cy='250' r='50'/><circle cx='100' cy='250' r='50'/></g><circle  fill='#41006f' cx='50' cy='300' r='50'/><g fill='#460073' ><circle cx='0' cy='350' r='50'/><circle cx='100' cy='350' r='50'/></g><circle  fill='#4b0077' cx='50' cy='400' r='50'/><g fill='#50007b' ><circle cx='0' cy='450' r='50'/><circle cx='100' cy='450' r='50'/></g><circle  fill='#550080' cx='50' cy='500' r='50'/><g fill='#5a0084' ><circle cx='0' cy='550' r='50'/><circle cx='100' cy='550' r='50'/></g><circle  fill='#5f0088' cx='50' cy='600' r='50'/><g fill='#64008c' ><circle cx='0' cy='650' r='50'/><circle cx='100' cy='650' r='50'/></g><circle  fill='#690091' cx='50' cy='700' r='50'/><g fill='#6f0095' ><circle cx='0' cy='750' r='50'/><circle cx='100' cy='750' r='50'/></g><circle  fill='#740099' cx='50' cy='800' r='50'/><g fill='#79009d' ><circle cx='0' cy='850' r='50'/><circle cx='100' cy='850' r='50'/></g><circle  fill='#7e00a2' cx='50' cy='900' r='50'/><g fill='#8300a6' ><circle cx='0' cy='950' r='50'/><circle cx='100' cy='950' r='50'/></g><circle  fill='#8800AA' cx='50' cy='1000' r='50'/></g></svg>`,
        configurableColors: [],
    },
    "protruding-squares": {
        svgData: `<svg xmlns='http://www.w3.org/2000/svg'  width='100' height='100' viewBox='0 0 200 200'><rect fill='#04B3FF' width='200' height='200'/><defs><linearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'><stop offset='0' stop-color='#000' stop-opacity='0'/><stop offset='1' stop-color='#000' stop-opacity='1'/></linearGradient><linearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'><stop offset='0' stop-color='#000' stop-opacity='0'/><stop offset='1' stop-color='#000' stop-opacity='1'/></linearGradient></defs><g  fill='#0097e1' fill-opacity='0.6'><rect x='100'  width='100' height='100'/><rect y='100'  width='100' height='100'/></g><g fill-opacity='0.5'><polygon fill='url(#a)' points='100 30 0 0 200 0'/><polygon fill='url(#b)' points='100 100 0 130 0 100 200 100 200 130'/></g></svg>`,
        configurableColors: [
            "#04B3FF",
            "#0097e1",
        ],
    },
    "alternating-arrowhead": {
        svgData: `<svg xmlns='http://www.w3.org/2000/svg'  width='160' height='160' viewBox='0 0 200 200'><rect fill='#ffffff' width='200' height='200'/><polygon  fill='#DCEFFA' fill-opacity='1' points='100 0 0 100 100 100 100 200 200 100 200 0'/></svg>`,
        configurableColors: [
            "#ffffff",
            "#DCEFFA",
        ],
    },
    "wavey-fingerprint": {
        svgData: `<svg xmlns='http://www.w3.org/2000/svg'  width='250' height='30' viewBox='0 0 1000 120'><rect fill='#000000' width='1000' height='120'/><g  fill='none' stroke='#222' stroke-width='10' stroke-opacity='1'><path d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/><path d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/><path d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/><path d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/><path d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/><path d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/></g></svg>`,
        configurableColors: [
            "#000000",
            "#222",
        ],
    },
    "zig-zag": {
        svgData: `<svg xmlns='http://www.w3.org/2000/svg'  width='120' height='120' viewBox='0 0 120 120'><rect fill='#00bb77' width='120' height='120'/><polygon  fill='#000' fill-opacity='.1' points='120 0 120 60 90 30 60 0 0 0 0 0 60 60 0 120 60 120 90 90 120 60 120 0'/></svg>`,
        configurableColors: [
            "#00bb77",
            "#000",
        ],
    },
    "tortoise-shell": {
        svgData: `<svg xmlns='http://www.w3.org/2000/svg'  width='400' height='400' viewBox='0 0 200 200'><rect fill='#11aa44' width='200' height='200'/><g fill='none' stroke='#7F3'  stroke-width='1' stroke-opacity='0.2'><rect x='-40' y='40' width='75' height='75'/><rect x='-35' y='45' width='65' height='65'/><rect x='-30' y='50' width='55' height='55'/><rect x='-25' y='55' width='45' height='45'/><rect x='-20' y='60' width='35' height='35'/><rect x='-15' y='65' width='25' height='25'/><rect x='-10' y='70' width='15' height='15'/><rect x='-5' y='75' width='5' height='5'/><rect width='35' height='35'/><rect x='5' y='5' width='25' height='25'/><rect x='10' y='10' width='15' height='15'/><rect x='15' y='15' width='5' height='5'/><rect x='40' width='75' height='75'/><rect x='45' y='5' width='65' height='65'/><rect x='50' y='10' width='55' height='55'/><rect x='55' y='15' width='45' height='45'/><rect x='60' y='20' width='35' height='35'/><rect x='65' y='25' width='25' height='25'/><rect x='70' y='30' width='15' height='15'/><rect x='75' y='35' width='5' height='5'/><rect x='40' y='80' width='35' height='35'/><rect x='45' y='85' width='25' height='25'/><rect x='50' y='90' width='15' height='15'/><rect x='55' y='95' width='5' height='5'/><rect x='120' y='-40' width='75' height='75'/><rect x='125' y='-35' width='65' height='65'/><rect x='130' y='-30' width='55' height='55'/><rect x='135' y='-25' width='45' height='45'/><rect x='140' y='-20' width='35' height='35'/><rect x='145' y='-15' width='25' height='25'/><rect x='150' y='-10' width='15' height='15'/><rect x='155' y='-5' width='5' height='5'/><rect x='120' y='40' width='35' height='35'/><rect x='125' y='45' width='25' height='25'/><rect x='130' y='50' width='15' height='15'/><rect x='135' y='55' width='5' height='5'/><rect y='120' width='75' height='75'/><rect x='5' y='125' width='65' height='65'/><rect x='10' y='130' width='55' height='55'/><rect x='15' y='135' width='45' height='45'/><rect x='20' y='140' width='35' height='35'/><rect x='25' y='145' width='25' height='25'/><rect x='30' y='150' width='15' height='15'/><rect x='35' y='155' width='5' height='5'/><rect x='200' y='120' width='75' height='75'/><rect x='40' y='200' width='75' height='75'/><rect x='80' y='80' width='75' height='75'/><rect x='85' y='85' width='65' height='65'/><rect x='90' y='90' width='55' height='55'/><rect x='95' y='95' width='45' height='45'/><rect x='100' y='100' width='35' height='35'/><rect x='105' y='105' width='25' height='25'/><rect x='110' y='110' width='15' height='15'/><rect x='115' y='115' width='5' height='5'/><rect x='80' y='160' width='35' height='35'/><rect x='85' y='165' width='25' height='25'/><rect x='90' y='170' width='15' height='15'/><rect x='95' y='175' width='5' height='5'/><rect x='120' y='160' width='75' height='75'/><rect x='125' y='165' width='65' height='65'/><rect x='130' y='170' width='55' height='55'/><rect x='135' y='175' width='45' height='45'/><rect x='140' y='180' width='35' height='35'/><rect x='145' y='185' width='25' height='25'/><rect x='150' y='190' width='15' height='15'/><rect x='155' y='195' width='5' height='5'/><rect x='160' y='40' width='75' height='75'/><rect x='165' y='45' width='65' height='65'/><rect x='170' y='50' width='55' height='55'/><rect x='175' y='55' width='45' height='45'/><rect x='180' y='60' width='35' height='35'/><rect x='185' y='65' width='25' height='25'/><rect x='190' y='70' width='15' height='15'/><rect x='195' y='75' width='5' height='5'/><rect x='160' y='120' width='35' height='35'/><rect x='165' y='125' width='25' height='25'/><rect x='170' y='130' width='15' height='15'/><rect x='175' y='135' width='5' height='5'/><rect x='200' y='200' width='35' height='35'/><rect x='200' width='35' height='35'/><rect y='200' width='35' height='35'/></g></svg>`,
        configurableColors: [
            "#11aa44",
            "#7F3",
        ],
    },
    "subtle-prism": {
        svgData: `<svg xmlns='http://www.w3.org/2000/svg' width='100%'><defs><linearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%' gradientTransform='rotate(360,1720,641)'><stop offset='0'  stop-color='#ffffff'/><stop offset='1'  stop-color='#FFFDEA'/></linearGradient><pattern patternUnits='userSpaceOnUse' id='b'  width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'><g fill-opacity='0.1'><polygon fill='#444' points='90 150 0 300 180 300'/><polygon points='90 150 180 0 0 0'/><polygon fill='#AAA' points='270 150 360 0 180 0'/><polygon fill='#DDD' points='450 150 360 300 540 300'/><polygon fill='#999' points='450 150 540 0 360 0'/><polygon points='630 150 540 300 720 300'/><polygon fill='#DDD' points='630 150 720 0 540 0'/><polygon fill='#444' points='810 150 720 300 900 300'/><polygon fill='#FFF' points='810 150 900 0 720 0'/><polygon fill='#DDD' points='990 150 900 300 1080 300'/><polygon fill='#444' points='990 150 1080 0 900 0'/><polygon fill='#DDD' points='90 450 0 600 180 600'/><polygon points='90 450 180 300 0 300'/><polygon fill='#666' points='270 450 180 600 360 600'/><polygon fill='#AAA' points='270 450 360 300 180 300'/><polygon fill='#DDD' points='450 450 360 600 540 600'/><polygon fill='#999' points='450 450 540 300 360 300'/><polygon fill='#999' points='630 450 540 600 720 600'/><polygon fill='#FFF' points='630 450 720 300 540 300'/><polygon points='810 450 720 600 900 600'/><polygon fill='#DDD' points='810 450 900 300 720 300'/><polygon fill='#AAA' points='990 450 900 600 1080 600'/><polygon fill='#444' points='990 450 1080 300 900 300'/><polygon fill='#222' points='90 750 0 900 180 900'/><polygon points='270 750 180 900 360 900'/><polygon fill='#DDD' points='270 750 360 600 180 600'/><polygon points='450 750 540 600 360 600'/><polygon points='630 750 540 900 720 900'/><polygon fill='#444' points='630 750 720 600 540 600'/><polygon fill='#AAA' points='810 750 720 900 900 900'/><polygon fill='#666' points='810 750 900 600 720 600'/><polygon fill='#999' points='990 750 900 900 1080 900'/><polygon fill='#999' points='180 0 90 150 270 150'/><polygon fill='#444' points='360 0 270 150 450 150'/><polygon fill='#FFF' points='540 0 450 150 630 150'/><polygon points='900 0 810 150 990 150'/><polygon fill='#222' points='0 300 -90 450 90 450'/><polygon fill='#FFF' points='0 300 90 150 -90 150'/><polygon fill='#FFF' points='180 300 90 450 270 450'/><polygon fill='#666' points='180 300 270 150 90 150'/><polygon fill='#222' points='360 300 270 450 450 450'/><polygon fill='#FFF' points='360 300 450 150 270 150'/><polygon fill='#444' points='540 300 450 450 630 450'/><polygon fill='#222' points='540 300 630 150 450 150'/><polygon fill='#AAA' points='720 300 630 450 810 450'/><polygon fill='#666' points='720 300 810 150 630 150'/><polygon fill='#FFF' points='900 300 810 450 990 450'/><polygon fill='#999' points='900 300 990 150 810 150'/><polygon points='0 600 -90 750 90 750'/><polygon fill='#666' points='0 600 90 450 -90 450'/><polygon fill='#AAA' points='180 600 90 750 270 750'/><polygon fill='#444' points='180 600 270 450 90 450'/><polygon fill='#444' points='360 600 270 750 450 750'/><polygon fill='#999' points='360 600 450 450 270 450'/><polygon fill='#666' points='540 600 630 450 450 450'/><polygon fill='#222' points='720 600 630 750 810 750'/><polygon fill='#FFF' points='900 600 810 750 990 750'/><polygon fill='#222' points='900 600 990 450 810 450'/><polygon fill='#DDD' points='0 900 90 750 -90 750'/><polygon fill='#444' points='180 900 270 750 90 750'/><polygon fill='#FFF' points='360 900 450 750 270 750'/><polygon fill='#AAA' points='540 900 630 750 450 750'/><polygon fill='#FFF' points='720 900 810 750 630 750'/><polygon fill='#222' points='900 900 990 750 810 750'/><polygon fill='#222' points='1080 300 990 450 1170 450'/><polygon fill='#FFF' points='1080 300 1170 150 990 150'/><polygon points='1080 600 990 750 1170 750'/><polygon fill='#666' points='1080 600 1170 450 990 450'/><polygon fill='#DDD' points='1080 900 1170 750 990 750'/></g></pattern></defs><rect x='0' y='0' fill='url(#a)' width='100%' height='100%'/><rect x='0' y='0' fill='url(#b)' width='100%' height='100%'/></svg>`,
        configurableColors: [],
    },
};

/**
 * @param {string} parameter 
 * @returns {string}
 */
export const parseStyleForEmbedSvg = (parameter) => {
    /** @type {EmbedSVGConfig} */
    const config = JSON.parse(parameter);
    const template = EMBED_SVG_TEMPLATE_MAP[ config.svgName ];
    if (!template) {
        return "";
    }
    let svg = template.svgData;
    // replace color
    if (config.colors) {
        for (const originColor of template.configurableColors) {
            if (Object.hasOwnProperty.call(config.colors, originColor)) {
                const replaceColor = config.colors[ originColor ];
                svg = svg.replaceAll(originColor, replaceColor);
            }
        }
    }
    const style = [
        `background-image: url("data:image/svg+xml;base64,${encodeURIComponent(btoa(svg))}");`,
        "background-repeat: repeat;",
        "background-position: top;",
    ];
    return style.join(" ");
};
