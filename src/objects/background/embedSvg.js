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
        configurableColors: [],
    },
    "alternating-arrowhead": {
        svgData: `<svg xmlns='http://www.w3.org/2000/svg'  width='160' height='160' viewBox='0 0 200 200'><rect fill='#ffffff' width='200' height='200'/><polygon  fill='#DCEFFA' fill-opacity='1' points='100 0 0 100 100 100 100 200 200 100 200 0'/></svg>`,
        configurableColors: [],
    },
    "cornered-stairs": {
        svgData: `<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1600 800'><rect fill='#000000' width='1600' height='800'/><g fill-opacity='1'><polygon  fill='#030303' points='800 100 0 200 0 800 1600 800 1600 200'/><polygon  fill='#070707' points='800 200 0 400 0 800 1600 800 1600 400'/><polygon  fill='#0a0a0a' points='800 300 0 600 0 800 1600 800 1600 600'/><polygon  fill='#0e0e0e' points='1600 800 800 400 0 800'/><polygon  fill='#111111' points='1280 800 800 500 320 800'/><polygon  fill='#151515' points='533.3 800 1066.7 800 800 600'/><polygon  fill='#181818' points='684.1 800 914.3 800 800 700'/></g></svg>`,
        configurableColors: [],
    },
    "wavey-fingerprint": {
        svgData: `<svg xmlns='http://www.w3.org/2000/svg'  width='250' height='30' viewBox='0 0 1000 120'><rect fill='#000000' width='1000' height='120'/><g  fill='none' stroke='#222' stroke-width='10' stroke-opacity='1'><path d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/><path d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/><path d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/><path d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/><path d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/><path d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/></g></svg>`,
        configurableColors: [],
    },
    "zig-zag": {
        svgData: `<svg xmlns='http://www.w3.org/2000/svg'  width='120' height='120' viewBox='0 0 120 120'><rect fill='#00bb77' width='120' height='120'/><polygon  fill='#000' fill-opacity='.1' points='120 0 120 60 90 30 60 0 0 0 0 0 60 60 0 120 60 120 90 90 120 60 120 0'/></svg>`,
        configurableColors: [],
    },
    "sun-tornado": {
        svgData: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'><rect fill='#ee5522' width='2000' height='1500'/><defs><radialGradient id='a' gradientUnits='objectBoundingBox'><stop  offset='0' stop-color='#FB3'/><stop  offset='1' stop-color='#ee5522'/></radialGradient><linearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'><stop  offset='0' stop-color='#f7882b'/><stop  offset='1' stop-color='#ee5522'/></linearGradient><path id='s' fill='url(#b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/><g id='g'><use href='#s' transform='scale(0.12) rotate(60)'/><use href='#s' transform='scale(0.2) rotate(10)'/><use href='#s' transform='scale(0.25) rotate(40)'/><use href='#s' transform='scale(0.3) rotate(-20)'/><use href='#s' transform='scale(0.4) rotate(-30)'/><use href='#s' transform='scale(0.5) rotate(20)'/><use href='#s' transform='scale(0.6) rotate(60)'/><use href='#s' transform='scale(0.7) rotate(10)'/><use href='#s' transform='scale(0.835) rotate(-40)'/><use href='#s' transform='scale(0.9) rotate(40)'/><use href='#s' transform='scale(1.05) rotate(25)'/><use href='#s' transform='scale(1.2) rotate(8)'/><use href='#s' transform='scale(1.333) rotate(-60)'/><use href='#s' transform='scale(1.45) rotate(-30)'/><use href='#s' transform='scale(1.6) rotate(10)'/></g></defs><g  transform='rotate(0 0 0)'><g  transform='rotate(0 0 0)'><circle fill='url(#a)' r='3000'/><g opacity='0.5'><circle fill='url(#a)' r='2000'/><circle fill='url(#a)' r='1800'/><circle fill='url(#a)' r='1700'/><circle fill='url(#a)' r='1651'/><circle fill='url(#a)' r='1450'/><circle fill='url(#a)' r='1250'/><circle fill='url(#a)' r='1175'/><circle fill='url(#a)' r='900'/><circle fill='url(#a)' r='750'/><circle fill='url(#a)' r='500'/><circle fill='url(#a)' r='380'/><circle fill='url(#a)' r='250'/></g><g  transform='rotate(0 0 0)'><use href='#g' transform='rotate(10)'/><use href='#g' transform='rotate(120)'/><use href='#g' transform='rotate(240)'/></g><circle fill-opacity='0.1' fill='url(#a)' r='3000'/></g></g></svg>`,
        configurableColors: [],
    },
    "tortoise-shell": {
        svgData: `<svg xmlns='http://www.w3.org/2000/svg'  width='400' height='400' viewBox='0 0 200 200'><rect fill='#11aa44' width='200' height='200'/><g fill='none' stroke='#7F3'  stroke-width='1' stroke-opacity='0.2'><rect x='-40' y='40' width='75' height='75'/><rect x='-35' y='45' width='65' height='65'/><rect x='-30' y='50' width='55' height='55'/><rect x='-25' y='55' width='45' height='45'/><rect x='-20' y='60' width='35' height='35'/><rect x='-15' y='65' width='25' height='25'/><rect x='-10' y='70' width='15' height='15'/><rect x='-5' y='75' width='5' height='5'/><rect width='35' height='35'/><rect x='5' y='5' width='25' height='25'/><rect x='10' y='10' width='15' height='15'/><rect x='15' y='15' width='5' height='5'/><rect x='40' width='75' height='75'/><rect x='45' y='5' width='65' height='65'/><rect x='50' y='10' width='55' height='55'/><rect x='55' y='15' width='45' height='45'/><rect x='60' y='20' width='35' height='35'/><rect x='65' y='25' width='25' height='25'/><rect x='70' y='30' width='15' height='15'/><rect x='75' y='35' width='5' height='5'/><rect x='40' y='80' width='35' height='35'/><rect x='45' y='85' width='25' height='25'/><rect x='50' y='90' width='15' height='15'/><rect x='55' y='95' width='5' height='5'/><rect x='120' y='-40' width='75' height='75'/><rect x='125' y='-35' width='65' height='65'/><rect x='130' y='-30' width='55' height='55'/><rect x='135' y='-25' width='45' height='45'/><rect x='140' y='-20' width='35' height='35'/><rect x='145' y='-15' width='25' height='25'/><rect x='150' y='-10' width='15' height='15'/><rect x='155' y='-5' width='5' height='5'/><rect x='120' y='40' width='35' height='35'/><rect x='125' y='45' width='25' height='25'/><rect x='130' y='50' width='15' height='15'/><rect x='135' y='55' width='5' height='5'/><rect y='120' width='75' height='75'/><rect x='5' y='125' width='65' height='65'/><rect x='10' y='130' width='55' height='55'/><rect x='15' y='135' width='45' height='45'/><rect x='20' y='140' width='35' height='35'/><rect x='25' y='145' width='25' height='25'/><rect x='30' y='150' width='15' height='15'/><rect x='35' y='155' width='5' height='5'/><rect x='200' y='120' width='75' height='75'/><rect x='40' y='200' width='75' height='75'/><rect x='80' y='80' width='75' height='75'/><rect x='85' y='85' width='65' height='65'/><rect x='90' y='90' width='55' height='55'/><rect x='95' y='95' width='45' height='45'/><rect x='100' y='100' width='35' height='35'/><rect x='105' y='105' width='25' height='25'/><rect x='110' y='110' width='15' height='15'/><rect x='115' y='115' width='5' height='5'/><rect x='80' y='160' width='35' height='35'/><rect x='85' y='165' width='25' height='25'/><rect x='90' y='170' width='15' height='15'/><rect x='95' y='175' width='5' height='5'/><rect x='120' y='160' width='75' height='75'/><rect x='125' y='165' width='65' height='65'/><rect x='130' y='170' width='55' height='55'/><rect x='135' y='175' width='45' height='45'/><rect x='140' y='180' width='35' height='35'/><rect x='145' y='185' width='25' height='25'/><rect x='150' y='190' width='15' height='15'/><rect x='155' y='195' width='5' height='5'/><rect x='160' y='40' width='75' height='75'/><rect x='165' y='45' width='65' height='65'/><rect x='170' y='50' width='55' height='55'/><rect x='175' y='55' width='45' height='45'/><rect x='180' y='60' width='35' height='35'/><rect x='185' y='65' width='25' height='25'/><rect x='190' y='70' width='15' height='15'/><rect x='195' y='75' width='5' height='5'/><rect x='160' y='120' width='35' height='35'/><rect x='165' y='125' width='25' height='25'/><rect x='170' y='130' width='15' height='15'/><rect x='175' y='135' width='5' height='5'/><rect x='200' y='200' width='35' height='35'/><rect x='200' width='35' height='35'/><rect y='200' width='35' height='35'/></g></svg>`,
        configurableColors: [],
    },
    "subtle-prism": {
        svgData: `<svg xmlns='http://www.w3.org/2000/svg' width='100%'><defs><linearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%' gradientTransform='rotate(360,1720,641)'><stop offset='0'  stop-color='#ffffff'/><stop offset='1'  stop-color='#FFFDEA'/></linearGradient><pattern patternUnits='userSpaceOnUse' id='b'  width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'><g fill-opacity='0.1'><polygon fill='#444' points='90 150 0 300 180 300'/><polygon points='90 150 180 0 0 0'/><polygon fill='#AAA' points='270 150 360 0 180 0'/><polygon fill='#DDD' points='450 150 360 300 540 300'/><polygon fill='#999' points='450 150 540 0 360 0'/><polygon points='630 150 540 300 720 300'/><polygon fill='#DDD' points='630 150 720 0 540 0'/><polygon fill='#444' points='810 150 720 300 900 300'/><polygon fill='#FFF' points='810 150 900 0 720 0'/><polygon fill='#DDD' points='990 150 900 300 1080 300'/><polygon fill='#444' points='990 150 1080 0 900 0'/><polygon fill='#DDD' points='90 450 0 600 180 600'/><polygon points='90 450 180 300 0 300'/><polygon fill='#666' points='270 450 180 600 360 600'/><polygon fill='#AAA' points='270 450 360 300 180 300'/><polygon fill='#DDD' points='450 450 360 600 540 600'/><polygon fill='#999' points='450 450 540 300 360 300'/><polygon fill='#999' points='630 450 540 600 720 600'/><polygon fill='#FFF' points='630 450 720 300 540 300'/><polygon points='810 450 720 600 900 600'/><polygon fill='#DDD' points='810 450 900 300 720 300'/><polygon fill='#AAA' points='990 450 900 600 1080 600'/><polygon fill='#444' points='990 450 1080 300 900 300'/><polygon fill='#222' points='90 750 0 900 180 900'/><polygon points='270 750 180 900 360 900'/><polygon fill='#DDD' points='270 750 360 600 180 600'/><polygon points='450 750 540 600 360 600'/><polygon points='630 750 540 900 720 900'/><polygon fill='#444' points='630 750 720 600 540 600'/><polygon fill='#AAA' points='810 750 720 900 900 900'/><polygon fill='#666' points='810 750 900 600 720 600'/><polygon fill='#999' points='990 750 900 900 1080 900'/><polygon fill='#999' points='180 0 90 150 270 150'/><polygon fill='#444' points='360 0 270 150 450 150'/><polygon fill='#FFF' points='540 0 450 150 630 150'/><polygon points='900 0 810 150 990 150'/><polygon fill='#222' points='0 300 -90 450 90 450'/><polygon fill='#FFF' points='0 300 90 150 -90 150'/><polygon fill='#FFF' points='180 300 90 450 270 450'/><polygon fill='#666' points='180 300 270 150 90 150'/><polygon fill='#222' points='360 300 270 450 450 450'/><polygon fill='#FFF' points='360 300 450 150 270 150'/><polygon fill='#444' points='540 300 450 450 630 450'/><polygon fill='#222' points='540 300 630 150 450 150'/><polygon fill='#AAA' points='720 300 630 450 810 450'/><polygon fill='#666' points='720 300 810 150 630 150'/><polygon fill='#FFF' points='900 300 810 450 990 450'/><polygon fill='#999' points='900 300 990 150 810 150'/><polygon points='0 600 -90 750 90 750'/><polygon fill='#666' points='0 600 90 450 -90 450'/><polygon fill='#AAA' points='180 600 90 750 270 750'/><polygon fill='#444' points='180 600 270 450 90 450'/><polygon fill='#444' points='360 600 270 750 450 750'/><polygon fill='#999' points='360 600 450 450 270 450'/><polygon fill='#666' points='540 600 630 450 450 450'/><polygon fill='#222' points='720 600 630 750 810 750'/><polygon fill='#FFF' points='900 600 810 750 990 750'/><polygon fill='#222' points='900 600 990 450 810 450'/><polygon fill='#DDD' points='0 900 90 750 -90 750'/><polygon fill='#444' points='180 900 270 750 90 750'/><polygon fill='#FFF' points='360 900 450 750 270 750'/><polygon fill='#AAA' points='540 900 630 750 450 750'/><polygon fill='#FFF' points='720 900 810 750 630 750'/><polygon fill='#222' points='900 900 990 750 810 750'/><polygon fill='#222' points='1080 300 990 450 1170 450'/><polygon fill='#FFF' points='1080 300 1170 150 990 150'/><polygon points='1080 600 990 750 1170 750'/><polygon fill='#666' points='1080 600 1170 450 990 450'/><polygon fill='#DDD' points='1080 900 1170 750 990 750'/></g></pattern></defs><rect x='0' y='0' fill='url(#a)' width='100%' height='100%'/><rect x='0' y='0' fill='url(#b)' width='100%' height='100%'/></svg>`,
        configurableColors: [],
    },
    "spectrum-gradient": {
        svgData: `<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1200 800'><rect fill='#ffff00' width='1200' height='800'/><defs><radialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'><stop  offset='0' stop-color='#ff8000'/><stop  offset='1' stop-color='#ff8000' stop-opacity='0'/></radialGradient><radialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'><stop  offset='0' stop-color='#00ff19'/><stop  offset='1' stop-color='#00ff19' stop-opacity='0'/></radialGradient><radialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'><stop  offset='0' stop-color='#9900ff'/><stop  offset='1' stop-color='#9900ff' stop-opacity='0'/></radialGradient><radialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'><stop  offset='0' stop-color='#ffff00'/><stop  offset='1' stop-color='#ffff00' stop-opacity='0'/></radialGradient><radialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'><stop  offset='0' stop-color='#FF0000'/><stop  offset='1' stop-color='#FF0000' stop-opacity='0'/></radialGradient><radialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'><stop  offset='0' stop-color='#0CF'/><stop  offset='1' stop-color='#0CF' stop-opacity='0'/></radialGradient></defs><rect fill='url(#a)' width='1200' height='800'/><rect fill='url(#b)' width='1200' height='800'/><rect fill='url(#c)' width='1200' height='800'/><rect fill='url(#d)' width='1200' height='800'/><rect fill='url(#e)' width='1200' height='800'/><rect fill='url(#f)' width='1200' height='800'/></svg>`,
        configurableColors: [],
    },
    "liquid-cheese": {
        svgData: `<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1600 800'><rect fill='#ffaa00' width='1600' height='800'/><g fill-opacity='1'><path fill='#ffb100'  d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/><path fill='#ffb800'  d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/><path fill='#ffbe00'  d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/><path fill='#ffc500'  d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/><path fill='#ffcc00'  d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/><path fill='#ffd914'  d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/><path fill='#ffe529'  d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/><path fill='#ffef3d'  d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/><path fill='#fff852'  d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/><path fill='#ffff66'  d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/></g></svg>`,
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
    const template = EMBED_SVG_TEMPLATE_MAP[config.svgName];
    if (!template) {
        return "";
    }
    let svg = template.svgData;
    const style = [
        `background-image: url("data:image/svg+xml;base64,${encodeURIComponent(btoa(svg))}");`,
        "background-repeat: repeat;",
        "background-position: center;",
    ];
    return style.join(" ");
}
