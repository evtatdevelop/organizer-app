import Service from "../../services";

const service = new Service();



const _apiBase = 'http://localhost/finorg';

export const getInstantBalance = ( time )  => service.getResource(`${_apiBase}/?q=balance&time=${time}`);

export const APIRates = () => service.APIRates('http://www.floatrates.com/daily/rub.json');
// export const APIRates = () => {return {
//   usd: {
//     code: 'USD',
//     alphaCode: 'USD',
//     numericCode: '840',
//     name: 'U.S. Dollar',
//     rate: 0.016660737294289,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 60.021353337272
//   },
//   eur: {
//     code: 'EUR',
//     alphaCode: 'EUR',
//     numericCode: '978',
//     name: 'Euro',
//     rate: 0.016424777661514,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 60.883624765476
//   },
//   gbp: {
//     code: 'GBP',
//     alphaCode: 'GBP',
//     numericCode: '826',
//     name: 'U.K. Pound Sterling',
//     rate: 0.013811358449139,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 72.404173976264
//   },
//   cad: {
//     code: 'CAD',
//     alphaCode: 'CAD',
//     numericCode: '124',
//     name: 'Canadian Dollar',
//     rate: 0.021437453469915,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 46.647331568714
//   },
//   jpy: {
//     code: 'JPY',
//     alphaCode: 'JPY',
//     numericCode: '392',
//     name: 'Japanese Yen',
//     rate: 2.2822291776675,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.43816809012233
//   },
//   aud: {
//     code: 'AUD',
//     alphaCode: 'AUD',
//     numericCode: '036',
//     name: 'Australian Dollar',
//     rate: 0.024002621109284,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 41.662116626638
//   },
//   chf: {
//     code: 'CHF',
//     alphaCode: 'CHF',
//     numericCode: '756',
//     name: 'Swiss Franc',
//     rate: 0.016037759251982,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 62.352850188622
//   },
//   uzs: {
//     code: 'UZS',
//     alphaCode: 'UZS',
//     numericCode: '860',
//     name: 'Uzbekistan Sum',
//     rate: 222.32977295837,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.0044978231511406
//   },
//   etb: {
//     code: 'ETB',
//     alphaCode: 'ETB',
//     numericCode: '230',
//     name: 'Ethiopian birr',
//     rate: 0.8765853543832,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 1.1407902208264
//   },
//   ttd: {
//     code: 'TTD',
//     alphaCode: 'TTD',
//     numericCode: '780',
//     name: 'Trinidad Tobago Dollar',
//     rate: 0.11310778766235,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 8.8411242114044
//   },
//   pgk: {
//     code: 'PGK',
//     alphaCode: 'PGK',
//     numericCode: '598',
//     name: 'Papua New Guinean kina',
//     rate: 0.058701082027457,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 17.035461110108
//   },
//   bwp: {
//     code: 'BWP',
//     alphaCode: 'BWP',
//     numericCode: '072',
//     name: 'Botswana Pula',
//     rate: 0.21113453696972,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 4.7363165418238
//   },
//   omr: {
//     code: 'OMR',
//     alphaCode: 'OMR',
//     numericCode: '512',
//     name: 'Omani Rial',
//     rate: 0.0064111835146583,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 155.97744124991
//   },
//   ils: {
//     code: 'ILS',
//     alphaCode: 'ILS',
//     numericCode: '376',
//     name: 'Israeli New Sheqel',
//     rate: 0.057203833078247,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 17.481346025049
//   },
//   ngn: {
//     code: 'NGN',
//     alphaCode: 'NGN',
//     numericCode: '566',
//     name: 'Nigerian Naira',
//     rate: 6.9209129693138,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.14448960771994
//   },
//   tjs: {
//     code: 'TJS',
//     alphaCode: 'TJS',
//     numericCode: '972',
//     name: 'Tajikistan Ruble',
//     rate: 0.2152575132712,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 4.6455985893516
//   },
//   gmd: {
//     code: 'GMD',
//     alphaCode: 'GMD',
//     numericCode: '270',
//     name: 'Gambian dalasi',
//     rate: 0.91010484070379,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 1.0987745095682
//   },
//   cve: {
//     code: 'CVE',
//     alphaCode: 'CVE',
//     numericCode: '132',
//     name: 'Cape Verde escudo',
//     rate: 1.8181029572393,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.55002385646985
//   },
//   zmw: {
//     code: 'ZMW',
//     alphaCode: 'ZMW',
//     numericCode: '967',
//     name: 'Zambian kwacha',
//     rate: 0.28070781898762,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 3.5624230333395
//   },
//   khr: {
//     code: 'KHR',
//     alphaCode: 'KHR',
//     numericCode: '116',
//     name: 'Cambodian riel',
//     rate: 68.238095354247,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.014654570805481
//   },
//   sek: {
//     code: 'SEK',
//     alphaCode: 'SEK',
//     numericCode: '752',
//     name: 'Swedish Krona',
//     rate: 0.17166492972611,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 5.8253016594331
//   },
//   sgd: {
//     code: 'SGD',
//     alphaCode: 'SGD',
//     numericCode: '702',
//     name: 'Singapore Dollar',
//     rate: 0.02311210624969,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 43.267367724801
//   },
//   huf: {
//     code: 'HUF',
//     alphaCode: 'HUF',
//     numericCode: '348',
//     name: 'Hungarian Forint',
//     rate: 6.6400059722879,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.1506022741807
//   },
//   byn: {
//     code: 'BYN',
//     alphaCode: 'BYN',
//     numericCode: '933',
//     name: 'Belarussian Ruble',
//     rate: 0.046754776157014,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 21.388189233155
//   },
//   clp: {
//     code: 'CLP',
//     alphaCode: 'CLP',
//     numericCode: '152',
//     name: 'Chilean Peso',
//     rate: 15.36509876282,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.065082562464211
//   },
//   bsd: {
//     code: 'BSD',
//     alphaCode: 'BSD',
//     numericCode: '044',
//     name: 'Bahamian Dollar',
//     rate: 0.016660737294289,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 60.021353337272
//   },
//   xpf: {
//     code: 'XPF',
//     alphaCode: 'XPF',
//     numericCode: '953',
//     name: 'CFP Franc',
//     rate: 1.9603166713108,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.51012166280835
//   },
//   all: {
//     code: 'ALL',
//     alphaCode: 'ALL',
//     numericCode: '008',
//     name: 'Albanian lek',
//     rate: 1.9142123699822,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.52240807534291
//   },
//   scr: {
//     code: 'SCR',
//     alphaCode: 'SCR',
//     numericCode: '690',
//     name: 'Seychelles rupee',
//     rate: 0.21389446555757,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 4.6752027799936
//   },
//   dop: {
//     code: 'DOP',
//     alphaCode: 'DOP',
//     numericCode: '214',
//     name: 'Dominican Peso',
//     rate: 1.0855325703527,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.92120681342161
//   },
//   cny: {
//     code: 'CNY',
//     alphaCode: 'CNY',
//     numericCode: '156',
//     name: 'Chinese Yuan',
//     rate: 0.1125570696537,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 8.8843819679798
//   },
//   isk: {
//     code: 'ISK',
//     alphaCode: 'ISK',
//     numericCode: '352',
//     name: 'Icelandic Krona',
//     rate: 2.2828688678093,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.43804530961063
//   },
//   lyd: {
//     code: 'LYD',
//     alphaCode: 'LYD',
//     numericCode: '434',
//     name: 'Libyan Dinar',
//     rate: 0.097327862330582,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 10.274550124233
//   },
//   htg: {
//     code: 'HTG',
//     alphaCode: 'HTG',
//     numericCode: '332',
//     name: 'Haitian gourde',
//     rate: 1.937563789881,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.51611203988356
//   },
//   bnd: {
//     code: 'BND',
//     alphaCode: 'BND',
//     numericCode: '096',
//     name: 'Brunei Dollar',
//     rate: 0.023125087667158,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 43.2430793082
//   },
//   kmf: {
//     code: 'KMF',
//     alphaCode: 'KMF',
//     numericCode: '174',
//     name: '\tComoro franc',
//     rate: 8.096283656606,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.12351345906514
//   },
//   lsl: {
//     code: 'LSL',
//     alphaCode: 'LSL',
//     numericCode: '426',
//     name: 'Lesotho loti',
//     rate: 0.28080817930904,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 3.5611498299679
//   },
//   tzs: {
//     code: 'TZS',
//     alphaCode: 'TZS',
//     numericCode: '834',
//     name: 'Tanzanian shilling',
//     rate: 38.843742706596,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.025744172170881
//   },
//   ang: {
//     code: 'ANG',
//     alphaCode: 'ANG',
//     numericCode: '532',
//     name: 'Neth. Antillean Guilder',
//     rate: 0.029921506138617,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 33.42077752929
//   },
//   lbp: {
//     code: 'LBP',
//     alphaCode: 'LBP',
//     numericCode: '422',
//     name: 'Lebanese Pound',
//     rate: 29.957888128586,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.033380190075742
//   },
//   mxn: {
//     code: 'MXN',
//     alphaCode: 'MXN',
//     numericCode: '484',
//     name: 'Mexican Peso',
//     rate: 0.34100237503739,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 2.9325308948079
//   },
//   kzt: {
//     code: 'KZT',
//     alphaCode: 'KZT',
//     numericCode: '398',
//     name: 'Kazakhstani Tenge',
//     rate: 7.9605531272425,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.12561941161825
//   },
//   uyu: {
//     code: 'UYU',
//     alphaCode: 'UYU',
//     numericCode: '858',
//     name: 'Uruguayan Peso',
//     rate: 0.69293672558209,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 1.4431332083892
//   },
//   jmd: {
//     code: 'JMD',
//     alphaCode: 'JMD',
//     numericCode: '388',
//     name: 'Jamaican Dollar',
//     rate: 2.5500664854785,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.39214663840906
//   },
//   ssp: {
//     code: 'SSP',
//     alphaCode: 'SSP',
//     numericCode: '728',
//     name: 'South Sudanese pound',
//     rate: 9.9106684861494,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.10090136718805
//   },
//   mru: {
//     code: 'MRU',
//     alphaCode: 'MRU',
//     numericCode: '929',
//     name: 'Mauritanian ouguiya',
//     rate: 0.62088575298607,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 1.6106022648944
//   },
//   mnt: {
//     code: 'MNT',
//     alphaCode: 'MNT',
//     numericCode: '496',
//     name: 'Mongolian togrog',
//     rate: 52.571651775595,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.019021658369582
//   },
//   jod: {
//     code: 'JOD',
//     alphaCode: 'JOD',
//     numericCode: '400',
//     name: 'Jordanian Dinar',
//     rate: 0.011820064171933,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 84.60190955431
//   },
//   php: {
//     code: 'PHP',
//     alphaCode: 'PHP',
//     numericCode: '608',
//     name: 'Philippine Peso',
//     rate: 0.92638767658136,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 1.0794616824894
//   },
//   xaf: {
//     code: 'XAF',
//     alphaCode: 'XAF',
//     numericCode: '950',
//     name: 'Central African CFA Franc',
//     rate: 10.776491403643,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.092794580586957
//   },
//   amd: {
//     code: 'AMD',
//     alphaCode: 'AMD',
//     numericCode: '051',
//     name: 'Armenia Dram',
//     rate: 8.3249671345753,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.12012059433205
//   },
//   kgs: {
//     code: 'KGS',
//     alphaCode: 'KGS',
//     numericCode: '417',
//     name: 'Kyrgyzstan Som',
//     rate: 1.6278130434054,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.61432116178893
//   },
//   mga: {
//     code: 'MGA',
//     alphaCode: 'MGA',
//     numericCode: '969',
//     name: 'Malagasy ariary',
//     rate: 70.189497544895,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.014247145726615
//   },
//   srd: {
//     code: 'SRD',
//     alphaCode: 'SRD',
//     numericCode: '968',
//     name: 'Surinamese dollar',
//     rate: 0.3999085934457,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 2.5005714215435
//   },
//   ghs: {
//     code: 'GHS',
//     alphaCode: 'GHS',
//     numericCode: '936',
//     name: 'Ghanaian Cedi',
//     rate: 0.13590940950465,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 7.3578422836556
//   },
//   cup: {
//     code: 'CUP',
//     alphaCode: 'CUP',
//     numericCode: '192',
//     name: 'Cuban peso',
//     rate: 0.016660737294289,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 60.021353337272
//   },
//   nzd: {
//     code: 'NZD',
//     alphaCode: 'NZD',
//     numericCode: '554',
//     name: 'New Zealand Dollar',
//     rate: 0.02678332977351,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 37.336657109343
//   },
//   'try': {
//     code: 'TRY',
//     alphaCode: 'TRY',
//     numericCode: '949',
//     name: 'Turkish Lira',
//     rate: 0.29831198115234,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 3.3521952290925
//   },
//   vnd: {
//     code: 'VND',
//     alphaCode: 'VND',
//     numericCode: '704',
//     name: 'Vietnamese Dong',
//     rate: 431.14749390429,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.0023193918882478
//   },
//   rsd: {
//     code: 'RSD',
//     alphaCode: 'RSD',
//     numericCode: '941',
//     name: 'Serbian Dinar',
//     rate: 2.2817423564114,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.43826157549739
//   },
//   nio: {
//     code: 'NIO',
//     alphaCode: 'NIO',
//     numericCode: '558',
//     name: 'Nicaraguan Córdoba',
//     rate: 0.59818772088908,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 1.6717160267244
//   },
//   sbd: {
//     code: 'SBD',
//     alphaCode: 'SBD',
//     numericCode: '090',
//     name: 'Solomon Islands dollar',
//     rate: 0.13576844901078,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 7.3654815038845
//   },
//   mwk: {
//     code: 'MWK',
//     alphaCode: 'MWK',
//     numericCode: '454',
//     name: 'Malawian kwacha',
//     rate: 17.096658196069,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.058490962884779
//   },
//   yer: {
//     code: 'YER',
//     alphaCode: 'YER',
//     numericCode: '886',
//     name: 'Yemeni rial',
//     rate: 4.167571248686,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.23994790738498
//   },
//   nok: {
//     code: 'NOK',
//     alphaCode: 'NOK',
//     numericCode: '578',
//     name: 'Norwegian Krone',
//     rate: 0.16354193724089,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 6.1146395650617
//   },
//   qar: {
//     code: 'QAR',
//     alphaCode: 'QAR',
//     numericCode: '634',
//     name: 'Qatari Rial',
//     rate: 0.061196583993873,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 16.340781375969
//   },
//   czk: {
//     code: 'CZK',
//     alphaCode: 'CZK',
//     numericCode: '203',
//     name: 'Czech Koruna',
//     rate: 0.40334487395433,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 2.4792679034102
//   },
//   ars: {
//     code: 'ARS',
//     alphaCode: 'ARS',
//     numericCode: '032',
//     name: 'Argentine Peso',
//     rate: 2.1782107067338,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.45909240869515
//   },
//   stn: {
//     code: 'STN',
//     alphaCode: 'STN',
//     numericCode: '930',
//     name: 'São Tomé and Príncipe Dobra',
//     rate: 0.40653233826468,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 2.4598289136569
//   },
//   bif: {
//     code: 'BIF',
//     alphaCode: 'BIF',
//     numericCode: '108',
//     name: 'Burundian franc',
//     rate: 34.31282121133,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.029143625172674
//   },
//   mmk: {
//     code: 'MMK',
//     alphaCode: 'MMK',
//     numericCode: '104',
//     name: 'Myanma Kyat',
//     rate: 30.837081960242,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.032428489871036
//   },
//   mur: {
//     code: 'MUR',
//     alphaCode: 'MUR',
//     numericCode: '480',
//     name: 'Mauritian Rupee',
//     rate: 0.75739679607268,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 1.3203118962019
//   },
//   ves: {
//     code: 'VES',
//     alphaCode: 'VES',
//     numericCode: '928',
//     name: 'Venezuelan Bolivar',
//     rate: 0.095462054067889,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 10.475366466437
//   },
//   bdt: {
//     code: 'BDT',
//     alphaCode: 'BDT',
//     numericCode: '050',
//     name: 'Bangladeshi taka',
//     rate: 1.8612905557374,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.5372616311395
//   },
//   ron: {
//     code: 'RON',
//     alphaCode: 'RON',
//     numericCode: '946',
//     name: 'Romanian New Leu',
//     rate: 0.080967145862634,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 12.350688533551
//   },
//   dzd: {
//     code: 'DZD',
//     alphaCode: 'DZD',
//     numericCode: '012',
//     name: 'Algerian Dinar',
//     rate: 2.9086772703843,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.34379888418073
//   },
//   crc: {
//     code: 'CRC',
//     alphaCode: 'CRC',
//     numericCode: '188',
//     name: 'Costa Rican Colón',
//     rate: 11.191551439846,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.089353116533923
//   },
//   bzd: {
//     code: 'BZD',
//     alphaCode: 'BZD',
//     numericCode: '084',
//     name: 'Belize dollar',
//     rate: 0.033575021481955,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 29.784046468517
//   },
//   gnf: {
//     code: 'GNF',
//     alphaCode: 'GNF',
//     numericCode: '324',
//     name: 'Guinean franc',
//     rate: 144.11384908759,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.0069389583744461
//   },
//   szl: {
//     code: 'SZL',
//     alphaCode: 'SZL',
//     numericCode: '748',
//     name: 'Swazi lilangeni',
//     rate: 0.28080817930904,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 3.5611498299679
//   },
//   sos: {
//     code: 'SOS',
//     alphaCode: 'SOS',
//     numericCode: '706',
//     name: 'Somali shilling',
//     rate: 9.4697429168964,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.10559948762872
//   },
//   aed: {
//     code: 'AED',
//     alphaCode: 'AED',
//     numericCode: '784',
//     name: 'U.A.E Dirham',
//     rate: 0.071392722324649,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 14.007029952614
//   },
//   idr: {
//     code: 'IDR',
//     alphaCode: 'IDR',
//     numericCode: '360',
//     name: 'Indonesian Rupiah',
//     rate: 249.53003190382,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.0040075336518429
//   },
//   krw: {
//     code: 'KRW',
//     alphaCode: 'KRW',
//     numericCode: '410',
//     name: 'South Korean Won',
//     rate: 21.884931272278,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.045693540800227
//   },
//   uah: {
//     code: 'UAH',
//     alphaCode: 'UAH',
//     numericCode: '980',
//     name: 'Ukrainian Hryvnia',
//     rate: 0.60995117222104,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 1.6394754949952
//   },
//   pyg: {
//     code: 'PYG',
//     alphaCode: 'PYG',
//     numericCode: '600',
//     name: 'Paraguayan Guaraní',
//     rate: 115.05352642837,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.0086916066898877
//   },
//   gyd: {
//     code: 'GYD',
//     alphaCode: 'GYD',
//     numericCode: '328',
//     name: 'Guyanese dollar',
//     rate: 3.4848721161033,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.28695457585921
//   },
//   rwf: {
//     code: 'RWF',
//     alphaCode: 'RWF',
//     numericCode: '646',
//     name: 'Rwandan franc',
//     rate: 17.092937486993,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.058503694918499
//   },
//   ern: {
//     code: 'ERN',
//     alphaCode: 'ERN',
//     numericCode: '232',
//     name: 'Eritrean nakfa',
//     rate: 0.25109350304584,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 3.9825801459205
//   },
//   wst: {
//     code: 'WST',
//     alphaCode: 'WST',
//     numericCode: '882',
//     name: 'Samoan tala',
//     rate: 0.044847854595293,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 22.297610644344
//   },
//   brl: {
//     code: 'BRL',
//     alphaCode: 'BRL',
//     numericCode: '986',
//     name: 'Brazilian Real',
//     rate: 0.089829516742125,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 11.132198371619
//   },
//   inr: {
//     code: 'INR',
//     alphaCode: 'INR',
//     numericCode: '356',
//     name: 'Indian Rupee',
//     rate: 1.3311910560817,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.75120697020268
//   },
//   npr: {
//     code: 'NPR',
//     alphaCode: 'NPR',
//     numericCode: '524',
//     name: 'Nepalese Rupee',
//     rate: 2.1280701677533,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.46990931744311
//   },
//   zar: {
//     code: 'ZAR',
//     alphaCode: 'ZAR',
//     numericCode: '710',
//     name: 'South African Rand',
//     rate: 0.28052950997483,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 3.5646873660091
//   },
//   azn: {
//     code: 'AZN',
//     alphaCode: 'AZN',
//     numericCode: '944',
//     name: 'Azerbaijan Manat',
//     rate: 0.028255940179825,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 35.390788401867
//   },
//   iqd: {
//     code: 'IQD',
//     alphaCode: 'IQD',
//     numericCode: '368',
//     name: 'Iraqi dinar',
//     rate: 29.851010651906,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.033499703298527
//   },
//   afn: {
//     code: 'AFN',
//     alphaCode: 'AFN',
//     numericCode: '971',
//     name: 'Afghan afghani',
//     rate: 1.508306564875,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.66299519161932
//   },
//   nad: {
//     code: 'NAD',
//     alphaCode: 'NAD',
//     numericCode: '516',
//     name: 'Namibian dollar',
//     rate: 0.28080817930904,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 3.5611498299679
//   },
//   syp: {
//     code: 'SYP',
//     alphaCode: 'SYP',
//     numericCode: '760',
//     name: 'Syrian pound',
//     rate: 41.337919869862,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.024190864057702
//   },
//   mop: {
//     code: 'MOP',
//     alphaCode: 'MOP',
//     numericCode: '446',
//     name: 'Macanese pataca',
//     rate: 0.1347436056832,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 7.4215024522285
//   },
//   bam: {
//     code: 'BAM',
//     alphaCode: 'BAM',
//     numericCode: '977',
//     name: 'Bosnia and Herzegovina convertible mark',
//     rate: 0.032202561604239,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 31.05343022986
//   },
//   dkk: {
//     code: 'DKK',
//     alphaCode: 'DKK',
//     numericCode: '208',
//     name: 'Danish Krone',
//     rate: 0.12218305652919,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 8.1844408578953
//   },
//   lkr: {
//     code: 'LKR',
//     alphaCode: 'LKR',
//     numericCode: '144',
//     name: 'Sri Lanka Rupee',
//     rate: 6.0036348468353,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.16656575982917
//   },
//   tnd: {
//     code: 'TND',
//     alphaCode: 'TND',
//     numericCode: '788',
//     name: 'Tunisian Dinar',
//     rate: 0.061409893256383,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 16.284021140129
//   },
//   twd: {
//     code: 'TWD',
//     alphaCode: 'TWD',
//     numericCode: '901',
//     name: 'New Taiwan Dollar ',
//     rate: 0.50913858384575,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 1.9641017823606
//   },
//   tmt: {
//     code: 'TMT',
//     alphaCode: 'TMT',
//     numericCode: '934',
//     name: 'New Turkmenistan Manat',
//     rate: 0.071558715347825,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 13.974538183634
//   },
//   svc: {
//     code: 'SVC',
//     alphaCode: 'SVC',
//     numericCode: '222',
//     name: 'Salvadoran colon',
//     rate: 0.14582630477671,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 6.8574733586728
//   },
//   xcd: {
//     code: 'XCD',
//     alphaCode: 'XCD',
//     numericCode: '951',
//     name: 'East Caribbean Dollar',
//     rate: 0.045175455971895,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 22.135913816169
//   },
//   lak: {
//     code: 'LAK',
//     alphaCode: 'LAK',
//     numericCode: '418',
//     name: 'Lao kip',
//     rate: 250.9330599129,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.0039851265526635
//   },
//   gtq: {
//     code: 'GTQ',
//     alphaCode: 'GTQ',
//     numericCode: '320',
//     name: 'Guatemalan Quetzal',
//     rate: 0.12884194185161,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 7.7614477524078
//   },
//   pkr: {
//     code: 'PKR',
//     alphaCode: 'PKR',
//     numericCode: '586',
//     name: 'Pakistani Rupee',
//     rate: 4.1646804436784,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.24011446100694
//   },
//   bgn: {
//     code: 'BGN',
//     alphaCode: 'BGN',
//     numericCode: '975',
//     name: 'Bulgarian Lev',
//     rate: 0.032099022637304,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 31.153596522215
//   },
//   pen: {
//     code: 'PEN',
//     alphaCode: 'PEN',
//     numericCode: '604',
//     name: 'Peruvian Nuevo Sol',
//     rate: 0.065323818315227,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 15.308351927231
//   },
//   gel: {
//     code: 'GEL',
//     alphaCode: 'GEL',
//     numericCode: '981',
//     name: 'Georgian lari',
//     rate: 0.059627588537899,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 16.770760389956
//   },
//   mkd: {
//     code: 'MKD',
//     alphaCode: 'MKD',
//     numericCode: '807',
//     name: 'Macedonian denar',
//     rate: 1.011852925108,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.98828592099314
//   },
//   awg: {
//     code: 'AWG',
//     alphaCode: 'AWG',
//     numericCode: '533',
//     name: 'Aruban florin',
//     rate: 0.030152813172887,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 33.164401419738
//   },
//   aoa: {
//     code: 'AOA',
//     alphaCode: 'AOA',
//     numericCode: '973',
//     name: 'Angolan kwanza',
//     rate: 7.1401861593397,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.14005237086038
//   },
//   mvr: {
//     code: 'MVR',
//     alphaCode: 'MVR',
//     numericCode: '462',
//     name: 'Maldivian rufiyaa',
//     rate: 0.25751491066472,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 3.8832702829468
//   },
//   sar: {
//     code: 'SAR',
//     alphaCode: 'SAR',
//     numericCode: '682',
//     name: 'Saudi Riyal',
//     rate: 0.063932681377771,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 15.641452516141
//   },
//   pln: {
//     code: 'PLN',
//     alphaCode: 'PLN',
//     numericCode: '985',
//     name: 'Polish Zloty',
//     rate: 0.078702211025955,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 12.706123334581
//   },
//   gip: {
//     code: 'GIP',
//     alphaCode: 'GIP',
//     numericCode: '292',
//     name: 'Gibraltar pound',
//     rate: 0.013814726922519,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 72.386519517077
//   },
//   cop: {
//     code: 'COP',
//     alphaCode: 'COP',
//     numericCode: '170',
//     name: 'Colombian Peso',
//     rate: 73.881816905456,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.013535130048029
//   },
//   bbd: {
//     code: 'BBD',
//     alphaCode: 'BBD',
//     numericCode: '052',
//     name: 'Barbadian Dollar',
//     rate: 0.033632530190012,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 29.733118333659
//   },
//   djf: {
//     code: 'DJF',
//     alphaCode: 'DJF',
//     numericCode: '262',
//     name: 'Djiboutian franc',
//     rate: 2.9653055367816,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.33723337699809
//   },
//   hnl: {
//     code: 'HNL',
//     alphaCode: 'HNL',
//     numericCode: '340',
//     name: 'Honduran Lempira',
//     rate: 0.40971334247645,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 2.440730863085
//   },
//   kes: {
//     code: 'KES',
//     alphaCode: 'KES',
//     numericCode: '404',
//     name: 'Kenyan shilling',
//     rate: 1.9787878603431,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.50535988219909
//   },
//   bhd: {
//     code: 'BHD',
//     alphaCode: 'BHD',
//     numericCode: '048',
//     name: 'Bahrain Dinar',
//     rate: 0.0062754322004753,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 159.35157421098
//   },
//   egp: {
//     code: 'EGP',
//     alphaCode: 'EGP',
//     numericCode: '818',
//     name: 'Egyptian Pound',
//     rate: 0.31550789487703,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 3.1694927963364
//   },
//   hrk: {
//     code: 'HRK',
//     alphaCode: 'HRK',
//     numericCode: '191',
//     name: 'Croatian Kuna',
//     rate: 0.12332155902513,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 8.1088822417195
//   },
//   mro: {
//     code: 'MRO',
//     alphaCode: 'MRO',
//     numericCode: '478',
//     name: 'Mauritanian Ouguiya',
//     rate: 0.62620364419083,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 1.5969245935836
//   },
//   pab: {
//     code: 'PAB',
//     alphaCode: 'PAB',
//     numericCode: '590',
//     name: 'Panamanian Balboa',
//     rate: 0.016660737294289,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 60.021353337272
//   },
//   fjd: {
//     code: 'FJD',
//     alphaCode: 'FJD',
//     numericCode: '242',
//     name: 'Fiji Dollar',
//     rate: 0.036671046667633,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 27.269469809888
//   },
//   cdf: {
//     code: 'CDF',
//     alphaCode: 'CDF',
//     numericCode: '976',
//     name: 'Congolese franc',
//     rate: 33.294636605654,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.030034867532694
//   },
//   mzn: {
//     code: 'MZN',
//     alphaCode: 'MZN',
//     numericCode: '943',
//     name: 'Mozambican metical',
//     rate: 1.0642553896035,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.939624088136
//   },
//   ugx: {
//     code: 'UGX',
//     alphaCode: 'UGX',
//     numericCode: '800',
//     name: 'Ugandan shilling',
//     rate: 64.431540404215,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.015520349098073
//   },
//   hkd: {
//     code: 'HKD',
//     alphaCode: 'HKD',
//     numericCode: '344',
//     name: 'Hong Kong Dollar',
//     rate: 0.1307704297327,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 7.6469887117757
//   },
//   mad: {
//     code: 'MAD',
//     alphaCode: 'MAD',
//     numericCode: '504',
//     name: 'Moroccan Dirham',
//     rate: 0.20227370808905,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 4.9437962523521
//   },
//   myr: {
//     code: 'MYR',
//     alphaCode: 'MYR',
//     numericCode: '458',
//     name: 'Malaysian Ringgit',
//     rate: 0.078271785920229,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 12.775995695552
//   },
//   mdl: {
//     code: 'MDL',
//     alphaCode: 'MDL',
//     numericCode: '498',
//     name: 'Moldova Lei',
//     rate: 0.32202823092755,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 3.1053178074471
//   },
//   bob: {
//     code: 'BOB',
//     alphaCode: 'BOB',
//     numericCode: '068',
//     name: 'Bolivian Boliviano',
//     rate: 0.11440106558127,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 8.7411773213738
//   },
//   lrd: {
//     code: 'LRD',
//     alphaCode: 'LRD',
//     numericCode: '430',
//     name: 'Liberian dollar',
//     rate: 2.5418138431307,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.39341984178051
//   },
//   sdg: {
//     code: 'SDG',
//     alphaCode: 'SDG',
//     numericCode: '938',
//     name: 'Sudanese pound',
//     rate: 9.4628973196066,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.10567587983102
//   },
//   top: {
//     code: 'TOP',
//     alphaCode: 'TOP',
//     numericCode: '776',
//     name: 'Tongan paʻanga',
//     rate: 0.039015472531289,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 25.630857070821
//   },
//   vuv: {
//     code: 'VUV',
//     alphaCode: 'VUV',
//     numericCode: '548',
//     name: 'Vanuatu vatu',
//     rate: 1.9509189933366,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.51257894531527
//   },
//   kwd: {
//     code: 'KWD',
//     alphaCode: 'KWD',
//     numericCode: '414',
//     name: 'Kuwaiti Dinar',
//     rate: 0.005118209363756,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 195.38083124958
//   },
//   thb: {
//     code: 'THB',
//     alphaCode: 'THB',
//     numericCode: '764',
//     name: 'Thai Baht',
//     rate: 0.64022991780431,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 1.5619388788164
//   },
//   xof: {
//     code: 'XOF',
//     alphaCode: 'XOF',
//     numericCode: '952',
//     name: 'West African CFA Franc',
//     rate: 10.772651208228,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.092827659660623
//   },
//   irr: {
//     code: 'IRR',
//     alphaCode: 'IRR',
//     numericCode: '364',
//     name: 'Iranian rial',
//     rate: 858.91723508406,
//     date: 'Wed, 27 Jul 2022 23:55:01 GMT',
//     inverseRate: 0.001164256530377
//   }
// }}