const countryOptions = [
  {
    country_iso_code: 'RW',
    country_name: 'Rwanda'
  },
  {
    country_iso_code: 'SO',
    country_name: 'Somalia'
  },
  {
    country_iso_code: 'YE',
    country_name: 'Yemen'
  },
  {
    country_iso_code: 'IQ',
    country_name: 'Iraq'
  },
  {
    country_iso_code: 'SA',
    country_name: 'Saudi Arabia'
  },
  {
    country_iso_code: 'IR',
    country_name: 'Iran'
  },
  {
    country_iso_code: 'CY',
    country_name: 'Cyprus'
  },
  {
    country_iso_code: 'TZ',
    country_name: 'Tanzania'
  },
  {
    country_iso_code: 'SY',
    country_name: 'Syria'
  },
  {
    country_iso_code: 'AM',
    country_name: 'Armenia'
  },
  {
    country_iso_code: 'KE',
    country_name: 'Kenya'
  },
  {
    country_iso_code: 'CD',
    country_name: 'Congo'
  },
  {
    country_iso_code: 'DJ',
    country_name: 'Djibouti'
  },
  {
    country_iso_code: 'UG',
    country_name: 'Uganda'
  },
  {
    country_iso_code: 'CF',
    country_name: 'Central African Republic'
  },
  {
    country_iso_code: 'SC',
    country_name: 'Seychelles'
  },
  {
    country_iso_code: 'JO',
    country_name: 'Hashemite Kingdom of Jordan'
  },
  {
    country_iso_code: 'LB',
    country_name: 'Lebanon'
  },
  {
    country_iso_code: 'KW',
    country_name: 'Kuwait'
  },
  {
    country_iso_code: 'OM',
    country_name: 'Oman'
  },
  {
    country_iso_code: 'QA',
    country_name: 'Qatar'
  },
  {
    country_iso_code: 'BH',
    country_name: 'Bahrain'
  },
  {
    country_iso_code: 'AE',
    country_name: 'United Arab Emirates'
  },
  {
    country_iso_code: 'IL',
    country_name: 'Israel'
  },
  {
    country_iso_code: 'TR',
    country_name: 'Turkey'
  },
  {
    country_iso_code: 'ET',
    country_name: 'Ethiopia'
  },
  {
    country_iso_code: 'ER',
    country_name: 'Eritrea'
  },
  {
    country_iso_code: 'EG',
    country_name: 'Egypt'
  },
  {
    country_iso_code: 'SD',
    country_name: 'Sudan'
  },
  {
    country_iso_code: 'GR',
    country_name: 'Greece'
  },
  {
    country_iso_code: 'BI',
    country_name: 'Burundi'
  },
  {
    country_iso_code: 'EE',
    country_name: 'Estonia'
  },
  {
    country_iso_code: 'LV',
    country_name: 'Latvia'
  },
  {
    country_iso_code: 'AZ',
    country_name: 'Azerbaijan'
  },
  {
    country_iso_code: 'LT',
    country_name: 'Republic of Lithuania'
  },
  {
    country_iso_code: 'SJ',
    country_name: 'Svalbard and Jan Mayen'
  },
  {
    country_iso_code: 'GE',
    country_name: 'Georgia'
  },
  {
    country_iso_code: 'MD',
    country_name: 'Republic of Moldova'
  },
  {
    country_iso_code: 'BY',
    country_name: 'Belarus'
  },
  {
    country_iso_code: 'FI',
    country_name: 'Finland'
  },
  {
    country_iso_code: 'AX',
    country_name: 'Åland'
  },
  {
    country_iso_code: 'UA',
    country_name: 'Ukraine'
  },
  {
    country_iso_code: 'MK',
    country_name: 'North Macedonia'
  },
  {
    country_iso_code: 'HU',
    country_name: 'Hungary'
  },
  {
    country_iso_code: 'BG',
    country_name: 'Bulgaria'
  },
  {
    country_iso_code: 'AL',
    country_name: 'Albania'
  },
  {
    country_iso_code: 'PL',
    country_name: 'Poland'
  },
  {
    country_iso_code: 'RO',
    country_name: 'Romania'
  },
  {
    country_iso_code: 'XK',
    country_name: 'Kosovo'
  },
  {
    country_iso_code: 'ZW',
    country_name: 'Zimbabwe'
  },
  {
    country_iso_code: 'ZM',
    country_name: 'Zambia'
  },
  {
    country_iso_code: 'KM',
    country_name: 'Comoros'
  },
  {
    country_iso_code: 'MW',
    country_name: 'Malawi'
  },
  {
    country_iso_code: 'LS',
    country_name: 'Lesotho'
  },
  {
    country_iso_code: 'BW',
    country_name: 'Botswana'
  },
  {
    country_iso_code: 'MU',
    country_name: 'Mauritius'
  },
  {
    country_iso_code: 'SZ',
    country_name: 'Eswatini'
  },
  {
    country_iso_code: 'RE',
    country_name: 'Réunion'
  },
  {
    country_iso_code: 'ZA',
    country_name: 'South Africa'
  },
  {
    country_iso_code: 'YT',
    country_name: 'Mayotte'
  },
  {
    country_iso_code: 'MZ',
    country_name: 'Mozambique'
  },
  {
    country_iso_code: 'MG',
    country_name: 'Madagascar'
  },
  {
    country_iso_code: 'AF',
    country_name: 'Afghanistan'
  },
  {
    country_iso_code: 'PK',
    country_name: 'Pakistan'
  },
  {
    country_iso_code: 'BD',
    country_name: 'Bangladesh'
  },
  {
    country_iso_code: 'TM',
    country_name: 'Turkmenistan'
  },
  {
    country_iso_code: 'TJ',
    country_name: 'Tajikistan'
  },
  {
    country_iso_code: 'LK',
    country_name: 'Sri Lanka'
  },
  {
    country_iso_code: 'BT',
    country_name: 'Bhutan'
  },
  {
    country_iso_code: 'IN',
    country_name: 'India'
  },
  {
    country_iso_code: 'MV',
    country_name: 'Maldives'
  },
  {
    country_iso_code: 'IO',
    country_name: 'British Indian Ocean Territory'
  },
  {
    country_iso_code: 'NP',
    country_name: 'Nepal'
  },
  {
    country_iso_code: 'MM',
    country_name: 'Myanmar'
  },
  {
    country_iso_code: 'UZ',
    country_name: 'Uzbekistan'
  },
  {
    country_iso_code: 'KZ',
    country_name: 'Kazakhstan'
  },
  {
    country_iso_code: 'KG',
    country_name: 'Kyrgyzstan'
  },
  {
    country_iso_code: 'TF',
    country_name: 'French Southern Territories'
  },
  {
    country_iso_code: 'HM',
    country_name: 'Heard Island and McDonald Islands'
  },
  {
    country_iso_code: 'CC',
    country_name: 'Cocos [Keeling] Islands'
  },
  {
    country_iso_code: 'PW',
    country_name: 'Palau'
  },
  {
    country_iso_code: 'VN',
    country_name: 'Vietnam'
  },
  {
    country_iso_code: 'TH',
    country_name: 'Thailand'
  },
  {
    country_iso_code: 'ID',
    country_name: 'Indonesia'
  },
  {
    country_iso_code: 'LA',
    country_name: 'Laos'
  },
  {
    country_iso_code: 'TW',
    country_name: 'Taiwan'
  },
  {
    country_iso_code: 'PH',
    country_name: 'Philippines'
  },
  {
    country_iso_code: 'MY',
    country_name: 'Malaysia'
  },
  {
    country_iso_code: 'CN',
    country_name: 'China'
  },
  {
    country_iso_code: 'HK',
    country_name: 'Hong Kong'
  },
  {
    country_iso_code: 'BN',
    country_name: 'Brunei'
  },
  {
    country_iso_code: 'MO',
    country_name: 'Macao'
  },
  {
    country_iso_code: 'KH',
    country_name: 'Cambodia'
  },
  {
    country_iso_code: 'KR',
    country_name: 'South Korea'
  },
  {
    country_iso_code: 'JP',
    country_name: 'Japan'
  },
  {
    country_iso_code: 'KP',
    country_name: 'North Korea'
  },
  {
    country_iso_code: 'SG',
    country_name: 'Singapore'
  },
  {
    country_iso_code: 'CK',
    country_name: 'Cook Islands'
  },
  {
    country_iso_code: 'TL',
    country_name: 'Democratic Republic of Timor-Leste'
  },
  {
    country_iso_code: 'RU',
    country_name: 'Russia'
  },
  {
    country_iso_code: 'MN',
    country_name: 'Mongolia'
  },
  {
    country_iso_code: 'AU',
    country_name: 'Australia'
  },
  {
    country_iso_code: 'CX',
    country_name: 'Christmas Island'
  },
  {
    country_iso_code: 'MH',
    country_name: 'Marshall Islands'
  },
  {
    country_iso_code: 'FM',
    country_name: 'Federated States of Micronesia'
  },
  {
    country_iso_code: 'PG',
    country_name: 'Papua New Guinea'
  },
  {
    country_iso_code: 'SB',
    country_name: 'Solomon Islands'
  },
  {
    country_iso_code: 'TV',
    country_name: 'Tuvalu'
  },
  {
    country_iso_code: 'NR',
    country_name: 'Nauru'
  },
  {
    country_iso_code: 'VU',
    country_name: 'Vanuatu'
  },
  {
    country_iso_code: 'NC',
    country_name: 'New Caledonia'
  },
  {
    country_iso_code: 'NF',
    country_name: 'Norfolk Island'
  },
  {
    country_iso_code: 'NZ',
    country_name: 'New Zealand'
  },
  {
    country_iso_code: 'FJ',
    country_name: 'Fiji'
  },
  {
    country_iso_code: 'LY',
    country_name: 'Libya'
  },
  {
    country_iso_code: 'CM',
    country_name: 'Cameroon'
  },
  {
    country_iso_code: 'SN',
    country_name: 'Senegal'
  },
  {
    country_iso_code: 'CG',
    country_name: 'Republic of the Congo'
  },
  {
    country_iso_code: 'PT',
    country_name: 'Portugal'
  },
  {
    country_iso_code: 'LR',
    country_name: 'Liberia'
  },
  {
    country_iso_code: 'CI',
    country_name: 'Ivory Coast'
  },
  {
    country_iso_code: 'GH',
    country_name: 'Ghana'
  },
  {
    country_iso_code: 'GQ',
    country_name: 'Equatorial Guinea'
  },
  {
    country_iso_code: 'NG',
    country_name: 'Nigeria'
  },
  {
    country_iso_code: 'BF',
    country_name: 'Burkina Faso'
  },
  {
    country_iso_code: 'TG',
    country_name: 'Togo'
  },
  {
    country_iso_code: 'GW',
    country_name: 'Guinea-Bissau'
  },
  {
    country_iso_code: 'MR',
    country_name: 'Mauritania'
  },
  {
    country_iso_code: 'BJ',
    country_name: 'Benin'
  },
  {
    country_iso_code: 'GA',
    country_name: 'Gabon'
  },
  {
    country_iso_code: 'SL',
    country_name: 'Sierra Leone'
  },
  {
    country_iso_code: 'ST',
    country_name: 'São Tomé and Príncipe'
  },
  {
    country_iso_code: 'GI',
    country_name: 'Gibraltar'
  },
  {
    country_iso_code: 'GM',
    country_name: 'Gambia'
  },
  {
    country_iso_code: 'GN',
    country_name: 'Guinea'
  },
  {
    country_iso_code: 'TD',
    country_name: 'Chad'
  },
  {
    country_iso_code: 'NE',
    country_name: 'Niger'
  },
  {
    country_iso_code: 'ML',
    country_name: 'Mali'
  },
  {
    country_iso_code: 'EH',
    country_name: 'Western Sahara'
  },
  {
    country_iso_code: 'TN',
    country_name: 'Tunisia'
  },
  {
    country_iso_code: 'ES',
    country_name: 'Spain'
  },
  {
    country_iso_code: 'MA',
    country_name: 'Morocco'
  },
  {
    country_iso_code: 'MT',
    country_name: 'Malta'
  },
  {
    country_iso_code: 'DZ',
    country_name: 'Algeria'
  },
  {
    country_iso_code: 'FO',
    country_name: 'Faroe Islands'
  },
  {
    country_iso_code: 'DK',
    country_name: 'Denmark'
  },
  {
    country_iso_code: 'IS',
    country_name: 'Iceland'
  },
  {
    country_iso_code: 'GB',
    country_name: 'United Kingdom'
  },
  {
    country_iso_code: 'CH',
    country_name: 'Switzerland'
  },
  {
    country_iso_code: 'SE',
    country_name: 'Sweden'
  },
  {
    country_iso_code: 'NL',
    country_name: 'Netherlands'
  },
  {
    country_iso_code: 'AT',
    country_name: 'Austria'
  },
  {
    country_iso_code: 'BE',
    country_name: 'Belgium'
  },
  {
    country_iso_code: 'DE',
    country_name: 'Germany'
  },
  {
    country_iso_code: 'LU',
    country_name: 'Luxembourg'
  },
  {
    country_iso_code: 'IE',
    country_name: 'Ireland'
  },
  {
    country_iso_code: 'MC',
    country_name: 'Monaco'
  },
  {
    country_iso_code: 'FR',
    country_name: 'France'
  },
  {
    country_iso_code: 'AD',
    country_name: 'Andorra'
  },
  {
    country_iso_code: 'LI',
    country_name: 'Liechtenstein'
  },
  {
    country_iso_code: 'JE',
    country_name: 'Jersey'
  },
  {
    country_iso_code: 'IM',
    country_name: 'Isle of Man'
  },
  {
    country_iso_code: 'GG',
    country_name: 'Guernsey'
  },
  {
    country_iso_code: 'SK',
    country_name: 'Slovakia'
  },
  {
    country_iso_code: 'CZ',
    country_name: 'Czechia'
  },
  {
    country_iso_code: 'NO',
    country_name: 'Norway'
  },
  {
    country_iso_code: 'VA',
    country_name: 'Vatican City'
  },
  {
    country_iso_code: 'SM',
    country_name: 'San Marino'
  },
  {
    country_iso_code: 'IT',
    country_name: 'Italy'
  },
  {
    country_iso_code: 'SI',
    country_name: 'Slovenia'
  },
  {
    country_iso_code: 'ME',
    country_name: 'Montenegro'
  },
  {
    country_iso_code: 'HR',
    country_name: 'Croatia'
  },
  {
    country_iso_code: 'BA',
    country_name: 'Bosnia and Herzegovina'
  },
  {
    country_iso_code: 'AO',
    country_name: 'Angola'
  },
  {
    country_iso_code: 'NA',
    country_name: 'Namibia'
  },
  {
    country_iso_code: 'SH',
    country_name: 'Saint Helena'
  },
  {
    country_iso_code: 'BV',
    country_name: 'Bouvet Island'
  },
  {
    country_iso_code: 'BB',
    country_name: 'Barbados'
  },
  {
    country_iso_code: 'CV',
    country_name: 'Cabo Verde'
  },
  {
    country_iso_code: 'GY',
    country_name: 'Guyana'
  },
  {
    country_iso_code: 'GF',
    country_name: 'French Guiana'
  },
  {
    country_iso_code: 'SR',
    country_name: 'Suriname'
  },
  {
    country_iso_code: 'PM',
    country_name: 'Saint Pierre and Miquelon'
  },
  {
    country_iso_code: 'GL',
    country_name: 'Greenland'
  },
  {
    country_iso_code: 'PY',
    country_name: 'Paraguay'
  },
  {
    country_iso_code: 'UY',
    country_name: 'Uruguay'
  },
  {
    country_iso_code: 'BR',
    country_name: 'Brazil'
  },
  {
    country_iso_code: 'FK',
    country_name: 'Falkland Islands'
  },
  {
    country_iso_code: 'GS',
    country_name: 'South Georgia and the South Sandwich Islands'
  },
  {
    country_iso_code: 'JM',
    country_name: 'Jamaica'
  },
  {
    country_iso_code: 'DO',
    country_name: 'Dominican Republic'
  },
  {
    country_iso_code: 'CU',
    country_name: 'Cuba'
  },
  {
    country_iso_code: 'MQ',
    country_name: 'Martinique'
  },
  {
    country_iso_code: 'BS',
    country_name: 'Bahamas'
  },
  {
    country_iso_code: 'BM',
    country_name: 'Bermuda'
  },
  {
    country_iso_code: 'AI',
    country_name: 'Anguilla'
  },
  {
    country_iso_code: 'TT',
    country_name: 'Trinidad and Tobago'
  },
  {
    country_iso_code: 'KN',
    country_name: 'St Kitts and Nevis'
  },
  {
    country_iso_code: 'DM',
    country_name: 'Dominica'
  },
  {
    country_iso_code: 'AG',
    country_name: 'Antigua and Barbuda'
  },
  {
    country_iso_code: 'LC',
    country_name: 'Saint Lucia'
  },
  {
    country_iso_code: 'TC',
    country_name: 'Turks and Caicos Islands'
  },
  {
    country_iso_code: 'AW',
    country_name: 'Aruba'
  },
  {
    country_iso_code: 'VG',
    country_name: 'British Virgin Islands'
  },
  {
    country_iso_code: 'VC',
    country_name: 'Saint Vincent and the Grenadines'
  },
  {
    country_iso_code: 'MS',
    country_name: 'Montserrat'
  },
  {
    country_iso_code: 'MF',
    country_name: 'Saint Martin'
  },
  {
    country_iso_code: 'BL',
    country_name: 'Saint Barthélemy'
  },
  {
    country_iso_code: 'GP',
    country_name: 'Guadeloupe'
  },
  {
    country_iso_code: 'GD',
    country_name: 'Grenada'
  },
  {
    country_iso_code: 'KY',
    country_name: 'Cayman Islands'
  },
  {
    country_iso_code: 'BZ',
    country_name: 'Belize'
  },
  {
    country_iso_code: 'SV',
    country_name: 'El Salvador'
  },
  {
    country_iso_code: 'GT',
    country_name: 'Guatemala'
  },
  {
    country_iso_code: 'HN',
    country_name: 'Honduras'
  },
  {
    country_iso_code: 'NI',
    country_name: 'Nicaragua'
  },
  {
    country_iso_code: 'CR',
    country_name: 'Costa Rica'
  },
  {
    country_iso_code: 'VE',
    country_name: 'Venezuela'
  },
  {
    country_iso_code: 'EC',
    country_name: 'Ecuador'
  },
  {
    country_iso_code: 'CO',
    country_name: 'Colombia'
  },
  {
    country_iso_code: 'PA',
    country_name: 'Panama'
  },
  {
    country_iso_code: 'HT',
    country_name: 'Haiti'
  },
  {
    country_iso_code: 'AR',
    country_name: 'Argentina'
  },
  {
    country_iso_code: 'CL',
    country_name: 'Chile'
  },
  {
    country_iso_code: 'BO',
    country_name: 'Bolivia'
  },
  {
    country_iso_code: 'PE',
    country_name: 'Peru'
  },
  {
    country_iso_code: 'MX',
    country_name: 'Mexico'
  },
  {
    country_iso_code: 'PF',
    country_name: 'French Polynesia'
  },
  {
    country_iso_code: 'PN',
    country_name: 'Pitcairn Islands'
  },
  {
    country_iso_code: 'KI',
    country_name: 'Kiribati'
  },
  {
    country_iso_code: 'TK',
    country_name: 'Tokelau'
  },
  {
    country_iso_code: 'TO',
    country_name: 'Tonga'
  },
  {
    country_iso_code: 'WF',
    country_name: 'Wallis and Futuna'
  },
  {
    country_iso_code: 'WS',
    country_name: 'Samoa'
  },
  {
    country_iso_code: 'NU',
    country_name: 'Niue'
  },
  {
    country_iso_code: 'MP',
    country_name: 'Northern Mariana Islands'
  },
  {
    country_iso_code: 'GU',
    country_name: 'Guam'
  },
  {
    country_iso_code: 'PR',
    country_name: 'Puerto Rico'
  },
  {
    country_iso_code: 'VI',
    country_name: 'U.S. Virgin Islands'
  },
  {
    country_iso_code: 'UM',
    country_name: 'U.S. Minor Outlying Islands'
  },
  {
    country_iso_code: 'AS',
    country_name: 'American Samoa'
  },
  {
    country_iso_code: 'CA',
    country_name: 'Canada'
  },
  {
    country_iso_code: 'US',
    country_name: 'United States'
  },
  {
    country_iso_code: 'PS',
    country_name: 'Palestine'
  },
  {
    country_iso_code: 'RS',
    country_name: 'Serbia'
  },
  {
    country_iso_code: 'AQ',
    country_name: 'Antarctica'
  },
  {
    country_iso_code: 'SX',
    country_name: 'Sint Maarten'
  },
  {
    country_iso_code: 'CW',
    country_name: 'Curaçao'
  },
  {
    country_iso_code: 'BQ',
    country_name: 'Bonaire, Sint Eustatius, and Saba'
  },
  {
    country_iso_code: 'SS',
    country_name: 'South Sudan'
  }
]

const order = (a: any, b: any) => (a.value < b.value ? -1 : 1)

export const CountryOptions = countryOptions
  .map(country => ({
    value: country.country_name,
    key: country.country_iso_code
  }))
  .sort(order)

export const getCountryName = (country_code: string) => {
  let result = countryOptions.find(country => country.country_iso_code === country_code)
  return (result || { country_name: '--' }).country_name
}