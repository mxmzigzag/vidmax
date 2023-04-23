import { WorldRegions } from './types/country.enum';
import { CountryEntity } from './entities/country.entity';

export const countries: Omit<CountryEntity, 'id' | 'users'>[] = [
  { name: 'Afghanistan', abbreviation: 'AF', region: WorldRegions.ASIA },
  { name: 'Åland Islands', abbreviation: 'AX', region: WorldRegions.EUROPE },
  { name: 'Albania', abbreviation: 'AL', region: WorldRegions.EUROPE },
  { name: 'Algeria', abbreviation: 'DZ', region: WorldRegions.AFRICA },
  { name: 'American Samoa', abbreviation: 'AS', region: WorldRegions.OCEANIA },
  { name: 'Andorra', abbreviation: 'AD', region: WorldRegions.EUROPE },
  { name: 'Angola', abbreviation: 'AO', region: WorldRegions.AFRICA },
  { name: 'Anguilla', abbreviation: 'AI', region: WorldRegions.NORTH_AMERICA },
  {
    name: 'Antigua and Barbuda',
    abbreviation: 'AG',
    region: WorldRegions.NORTH_AMERICA,
  },
  { name: 'Argentina', abbreviation: 'AR', region: WorldRegions.SOUTH_AMERICA },
  { name: 'Armenia', abbreviation: 'AM', region: WorldRegions.ASIA },
  { name: 'Aruba', abbreviation: 'AW', region: WorldRegions.NORTH_AMERICA },
  { name: 'Australia', abbreviation: 'AU', region: WorldRegions.OCEANIA },
  { name: 'Austria', abbreviation: 'AT', region: WorldRegions.EUROPE },
  { name: 'Azerbaijan', abbreviation: 'AZ', region: WorldRegions.ASIA },
  { name: 'Bahamas', abbreviation: 'BS', region: WorldRegions.NORTH_AMERICA },
  { name: 'Bahrain', abbreviation: 'BH', region: WorldRegions.ASIA },
  { name: 'Bangladesh', abbreviation: 'BD', region: WorldRegions.ASIA },
  { name: 'Barbados', abbreviation: 'BB', region: WorldRegions.NORTH_AMERICA },
  { name: 'Belarus', abbreviation: 'BY', region: WorldRegions.EUROPE },
  { name: 'Belgium', abbreviation: 'BE', region: WorldRegions.EUROPE },
  { name: 'Belize', abbreviation: 'BZ', region: WorldRegions.NORTH_AMERICA },
  { name: 'Benin', abbreviation: 'BJ', region: WorldRegions.AFRICA },
  { name: 'Bermuda', abbreviation: 'BM', region: WorldRegions.NORTH_AMERICA },
  { name: 'Bhutan', abbreviation: 'BT', region: WorldRegions.ASIA },
  { name: 'Bolivia', abbreviation: 'BO', region: WorldRegions.SOUTH_AMERICA },
  {
    name: 'Bonaire, Sint Eustatius and Saba',
    abbreviation: 'BQ',
    region: WorldRegions.NORTH_AMERICA,
  },
  {
    name: 'Bosnia and Herzegovina',
    abbreviation: 'BA',
    region: WorldRegions.EUROPE,
  },
  { name: 'Botswana', abbreviation: 'BW', region: WorldRegions.AFRICA },
  { name: 'Brazil', abbreviation: 'BR', region: WorldRegions.SOUTH_AMERICA },
  {
    name: 'British Indian Ocean Territory',
    abbreviation: 'IO',
    region: WorldRegions.AFRICA,
  },
  { name: 'Brunei Darussalam', abbreviation: 'BN', region: WorldRegions.ASIA },
  { name: 'Bulgaria', abbreviation: 'BG', region: WorldRegions.EUROPE },
  { name: 'Burkina Faso', abbreviation: 'BF', region: WorldRegions.AFRICA },
  { name: 'Burundi', abbreviation: 'BI', region: WorldRegions.AFRICA },
  { name: 'Cabo Verde', abbreviation: 'CV', region: WorldRegions.AFRICA },
  { name: 'Cambodia', abbreviation: 'KH', region: WorldRegions.ASIA },
  { name: 'Cameroon', abbreviation: 'CM', region: WorldRegions.AFRICA },
  { name: 'Canada', abbreviation: 'CA', region: WorldRegions.NORTH_AMERICA },
  {
    name: 'Cayman Islands',
    abbreviation: 'KY',
    region: WorldRegions.NORTH_AMERICA,
  },
  {
    name: 'Central African Republic',
    abbreviation: 'CF',
    region: WorldRegions.AFRICA,
  },
  { name: 'Chad', abbreviation: 'TD', region: WorldRegions.AFRICA },
  { name: 'Chile', abbreviation: 'CL', region: WorldRegions.SOUTH_AMERICA },
  { name: 'China', abbreviation: 'CN', region: WorldRegions.ASIA },
  {
    name: 'Christmas Island',
    abbreviation: 'CX',
    region: WorldRegions.OCEANIA,
  },
  {
    name: 'Cocos (Keeling) Islands',
    abbreviation: 'CC',
    region: WorldRegions.OCEANIA,
  },
  { name: 'Colombia', abbreviation: 'CO', region: WorldRegions.SOUTH_AMERICA },
  { name: 'Comoros', abbreviation: 'KM', region: WorldRegions.AFRICA },
  { name: 'Congo', abbreviation: 'CG', region: WorldRegions.AFRICA },
  {
    name: 'Congo, Democratic Republic of the',
    abbreviation: 'CD',
    region: WorldRegions.AFRICA,
  },
  { name: 'Cook Islands', abbreviation: 'CK', region: WorldRegions.OCEANIA },
  {
    name: 'Costa Rica',
    abbreviation: 'CR',
    region: WorldRegions.NORTH_AMERICA,
  },
  { name: "Côte d'Ivoire", abbreviation: 'CI', region: WorldRegions.AFRICA },
  { name: 'Croatia', abbreviation: 'HR', region: WorldRegions.EUROPE },
  { name: 'Cuba', abbreviation: 'CU', region: WorldRegions.NORTH_AMERICA },
  { name: 'Curaçao', abbreviation: 'CW', region: WorldRegions.NORTH_AMERICA },
  { name: 'Cyprus', abbreviation: 'CY', region: WorldRegions.ASIA },
  { name: 'Czechia', abbreviation: 'CZ', region: WorldRegions.EUROPE },
  { name: 'Denmark', abbreviation: 'DK', region: WorldRegions.EUROPE },
  { name: 'Djibouti', abbreviation: 'DJ', region: WorldRegions.AFRICA },
  { name: 'Dominica', abbreviation: 'DM', region: WorldRegions.NORTH_AMERICA },
  {
    name: 'Dominican Republic',
    abbreviation: 'DO',
    region: WorldRegions.NORTH_AMERICA,
  },
  { name: 'Ecuador', abbreviation: 'EC', region: WorldRegions.SOUTH_AMERICA },
  { name: 'Egypt', abbreviation: 'EG', region: WorldRegions.AFRICA },
  {
    name: 'El Salvador',
    abbreviation: 'SV',
    region: WorldRegions.NORTH_AMERICA,
  },
  {
    name: 'Equatorial Guinea',
    abbreviation: 'GQ',
    region: WorldRegions.AFRICA,
  },
  { name: 'Eritrea', abbreviation: 'ER', region: WorldRegions.AFRICA },
  { name: 'Estonia', abbreviation: 'EE', region: WorldRegions.EUROPE },
  { name: 'Eswatini', abbreviation: 'SZ', region: WorldRegions.AFRICA },
  { name: 'Ethiopia', abbreviation: 'ET', region: WorldRegions.AFRICA },
  {
    name: 'Falkland Islands',
    abbreviation: 'FK',
    region: WorldRegions.SOUTH_AMERICA,
  },
  { name: 'Faroe Islands', abbreviation: 'FO', region: WorldRegions.EUROPE },
  { name: 'Fiji', abbreviation: 'FJ', region: WorldRegions.OCEANIA },
  { name: 'Finland', abbreviation: 'FI', region: WorldRegions.EUROPE },
  { name: 'France', abbreviation: 'FR', region: WorldRegions.EUROPE },
  {
    name: 'French Guiana',
    abbreviation: 'GF',
    region: WorldRegions.SOUTH_AMERICA,
  },
  {
    name: 'French Polynesia',
    abbreviation: 'PF',
    region: WorldRegions.OCEANIA,
  },
  {
    name: 'French Southern Territories',
    abbreviation: 'TF',
    region: WorldRegions.AFRICA,
  },
  { name: 'Gabon', abbreviation: 'GA', region: WorldRegions.AFRICA },
  { name: 'Gambia', abbreviation: 'GM', region: WorldRegions.AFRICA },
  { name: 'Georgia', abbreviation: 'GE', region: WorldRegions.ASIA },
  { name: 'Germany', abbreviation: 'DE', region: WorldRegions.EUROPE },
  { name: 'Ghana', abbreviation: 'GH', region: WorldRegions.AFRICA },
  { name: 'Gibraltar', abbreviation: 'GI', region: WorldRegions.EUROPE },
  { name: 'Greece', abbreviation: 'GR', region: WorldRegions.EUROPE },
  { name: 'Greenland', abbreviation: 'GL', region: WorldRegions.NORTH_AMERICA },
  { name: 'Grenada', abbreviation: 'GD', region: WorldRegions.NORTH_AMERICA },
  {
    name: 'Guadeloupe',
    abbreviation: 'GP',
    region: WorldRegions.NORTH_AMERICA,
  },
  { name: 'Guam', abbreviation: 'GU', region: WorldRegions.OCEANIA },
  { name: 'Guatemala', abbreviation: 'GT', region: WorldRegions.NORTH_AMERICA },
  { name: 'Guernsey', abbreviation: 'GG', region: WorldRegions.EUROPE },
  { name: 'Guinea', abbreviation: 'GN', region: WorldRegions.AFRICA },
  { name: 'Guinea-Bissau', abbreviation: 'GW', region: WorldRegions.AFRICA },
  { name: 'Guyana', abbreviation: 'GY', region: WorldRegions.SOUTH_AMERICA },
  { name: 'Haiti', abbreviation: 'HT', region: WorldRegions.NORTH_AMERICA },
  {
    name: 'Heard Island and McDonald Islands',
    abbreviation: 'HM',
    region: WorldRegions.OCEANIA,
  },
  { name: 'Holy See', abbreviation: 'VA', region: WorldRegions.EUROPE },
  { name: 'Honduras', abbreviation: 'HN', region: WorldRegions.NORTH_AMERICA },
  { name: 'Hong Kong', abbreviation: 'HK', region: WorldRegions.ASIA },
  { name: 'Hungary', abbreviation: 'HU', region: WorldRegions.EUROPE },
  { name: 'Iceland', abbreviation: 'IS', region: WorldRegions.EUROPE },
  { name: 'India', abbreviation: 'IN', region: WorldRegions.ASIA },
  { name: 'Indonesia', abbreviation: 'ID', region: WorldRegions.ASIA },
  {
    name: 'Iran (Islamic Republic of)',
    abbreviation: 'IR',
    region: WorldRegions.ASIA,
  },
  { name: 'Iraq', abbreviation: 'IQ', region: WorldRegions.ASIA },
  { name: 'Ireland', abbreviation: 'IE', region: WorldRegions.EUROPE },
  { name: 'Isle of Man', abbreviation: 'IM', region: WorldRegions.EUROPE },
  { name: 'Israel', abbreviation: 'IL', region: WorldRegions.ASIA },
  { name: 'Italy', abbreviation: 'IT', region: WorldRegions.EUROPE },
  { name: 'Jamaica', abbreviation: 'JM', region: WorldRegions.NORTH_AMERICA },
  { name: 'Japan', abbreviation: 'JP', region: WorldRegions.ASIA },
  { name: 'Jersey', abbreviation: 'JE', region: WorldRegions.EUROPE },
  { name: 'Jordan', abbreviation: 'JO', region: WorldRegions.ASIA },
  { name: 'Kazakhstan', abbreviation: 'KZ', region: WorldRegions.ASIA },
  { name: 'Kenya', abbreviation: 'KE', region: WorldRegions.AFRICA },
  { name: 'Kiribati', abbreviation: 'KI', region: WorldRegions.OCEANIA },
  { name: 'North Korea', abbreviation: 'KP', region: WorldRegions.ASIA },
  { name: 'South Korea', abbreviation: 'KR', region: WorldRegions.ASIA },
  { name: 'Kuwait', abbreviation: 'KW', region: WorldRegions.ASIA },
  { name: 'Kyrgyzstan', abbreviation: 'KG', region: WorldRegions.ASIA },
  {
    name: "Lao People's Democratic Republic",
    abbreviation: 'LA',
    region: WorldRegions.ASIA,
  },
  { name: 'Latvia', abbreviation: 'LV', region: WorldRegions.EUROPE },
  { name: 'Lebanon', abbreviation: 'LB', region: WorldRegions.ASIA },
  { name: 'Lesotho', abbreviation: 'LS', region: WorldRegions.AFRICA },
  { name: 'Liberia', abbreviation: 'LR', region: WorldRegions.AFRICA },
  { name: 'Libya', abbreviation: 'LY', region: WorldRegions.AFRICA },
  { name: 'Liechtenstein', abbreviation: 'LI', region: WorldRegions.EUROPE },
  { name: 'Lithuania', abbreviation: 'LT', region: WorldRegions.EUROPE },
  { name: 'Luxembourg', abbreviation: 'LU', region: WorldRegions.EUROPE },
  { name: 'Macao', abbreviation: 'MO', region: WorldRegions.ASIA },
  { name: 'Madagascar', abbreviation: 'MG', region: WorldRegions.AFRICA },
  { name: 'Malawi', abbreviation: 'MW', region: WorldRegions.AFRICA },
  { name: 'Malaysia', abbreviation: 'MY', region: WorldRegions.ASIA },
  { name: 'Maldives', abbreviation: 'MV', region: WorldRegions.ASIA },
  { name: 'Mali', abbreviation: 'ML', region: WorldRegions.AFRICA },
  { name: 'Malta', abbreviation: 'MT', region: WorldRegions.EUROPE },
  {
    name: 'Marshall Islands',
    abbreviation: 'MH',
    region: WorldRegions.OCEANIA,
  },
  {
    name: 'Martinique',
    abbreviation: 'MQ',
    region: WorldRegions.NORTH_AMERICA,
  },
  { name: 'Mauritania', abbreviation: 'MR', region: WorldRegions.AFRICA },
  { name: 'Mauritius', abbreviation: 'MU', region: WorldRegions.AFRICA },
  { name: 'Mayotte', abbreviation: 'YT', region: WorldRegions.AFRICA },
  { name: 'Mexico', abbreviation: 'MX', region: WorldRegions.NORTH_AMERICA },
  { name: 'Micronesia', abbreviation: 'FM', region: WorldRegions.OCEANIA },
  {
    name: 'Moldova, Republic of',
    abbreviation: 'MD',
    region: WorldRegions.EUROPE,
  },
  { name: 'Monaco', abbreviation: 'MC', region: WorldRegions.EUROPE },
  { name: 'Mongolia', abbreviation: 'MN', region: WorldRegions.ASIA },
  { name: 'Montenegro', abbreviation: 'ME', region: WorldRegions.EUROPE },
  {
    name: 'Montserrat',
    abbreviation: 'MS',
    region: WorldRegions.NORTH_AMERICA,
  },
  { name: 'Morocco', abbreviation: 'MA', region: WorldRegions.AFRICA },
  { name: 'Mozambique', abbreviation: 'MZ', region: WorldRegions.AFRICA },
  { name: 'Myanmar', abbreviation: 'MM', region: WorldRegions.ASIA },
  { name: 'Namibia', abbreviation: 'NA', region: WorldRegions.AFRICA },
  { name: 'Nauru', abbreviation: 'NR', region: WorldRegions.OCEANIA },
  { name: 'Nepal', abbreviation: 'NP', region: WorldRegions.ASIA },
  { name: 'Netherlands', abbreviation: 'NL', region: WorldRegions.EUROPE },
  { name: 'New Caledonia', abbreviation: 'NC', region: WorldRegions.OCEANIA },
  { name: 'New Zealand', abbreviation: 'NZ', region: WorldRegions.OCEANIA },
  { name: 'Nicaragua', abbreviation: 'NI', region: WorldRegions.NORTH_AMERICA },
  { name: 'Niger', abbreviation: 'NE', region: WorldRegions.AFRICA },
  { name: 'Nigeria', abbreviation: 'NG', region: WorldRegions.AFRICA },
  { name: 'Niue', abbreviation: 'NU', region: WorldRegions.OCEANIA },
  { name: 'Norfolk Island', abbreviation: 'NF', region: WorldRegions.OCEANIA },
  { name: 'North Macedonia', abbreviation: 'MK', region: WorldRegions.EUROPE },
  {
    name: 'Northern Mariana Islands',
    abbreviation: 'MP',
    region: WorldRegions.OCEANIA,
  },
  { name: 'Norway', abbreviation: 'NO', region: WorldRegions.EUROPE },
  { name: 'Oman', abbreviation: 'OM', region: WorldRegions.ASIA },
  { name: 'Pakistan', abbreviation: 'PK', region: WorldRegions.ASIA },
  { name: 'Palau', abbreviation: 'PW', region: WorldRegions.OCEANIA },
  {
    name: 'Palestine, State of',
    abbreviation: 'PS',
    region: WorldRegions.ASIA,
  },
  { name: 'Panama', abbreviation: 'PA', region: WorldRegions.NORTH_AMERICA },
  {
    name: 'Papua New Guinea',
    abbreviation: 'PG',
    region: WorldRegions.OCEANIA,
  },
  { name: 'Paraguay', abbreviation: 'PY', region: WorldRegions.SOUTH_AMERICA },
  { name: 'Peru', abbreviation: 'PE', region: WorldRegions.SOUTH_AMERICA },
  { name: 'Philippines', abbreviation: 'PH', region: WorldRegions.ASIA },
  { name: 'Pitcairn', abbreviation: 'PN', region: WorldRegions.OCEANIA },
  { name: 'Poland', abbreviation: 'PL', region: WorldRegions.EUROPE },
  { name: 'Portugal', abbreviation: 'PT', region: WorldRegions.EUROPE },
  {
    name: 'Puerto Rico',
    abbreviation: 'PR',
    region: WorldRegions.NORTH_AMERICA,
  },
  { name: 'Qatar', abbreviation: 'QA', region: WorldRegions.ASIA },
  { name: 'Réunion', abbreviation: 'RE', region: WorldRegions.AFRICA },
  { name: 'Romania', abbreviation: 'RO', region: WorldRegions.EUROPE },
  {
    name: 'Russian Federation',
    abbreviation: 'RU',
    region: WorldRegions.EUROPE,
  },
  { name: 'Rwanda', abbreviation: 'RW', region: WorldRegions.AFRICA },
  {
    name: 'Saint Barthélemy',
    abbreviation: 'BL',
    region: WorldRegions.NORTH_AMERICA,
  },
  {
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    abbreviation: 'SH',
    region: WorldRegions.AFRICA,
  },
  {
    name: 'Saint Kitts and Nevis',
    abbreviation: 'KN',
    region: WorldRegions.NORTH_AMERICA,
  },
  {
    name: 'Saint Lucia',
    abbreviation: 'LC',
    region: WorldRegions.NORTH_AMERICA,
  },
  {
    name: 'Saint Martin (French part)',
    abbreviation: 'MF',
    region: WorldRegions.NORTH_AMERICA,
  },
  {
    name: 'Saint Pierre and Miquelon',
    abbreviation: 'PM',
    region: WorldRegions.NORTH_AMERICA,
  },
  {
    name: 'Saint Vincent and the Grenadines',
    abbreviation: 'VC',
    region: WorldRegions.NORTH_AMERICA,
  },
  { name: 'Samoa', abbreviation: 'WS', region: WorldRegions.OCEANIA },
  { name: 'San Marino', abbreviation: 'SM', region: WorldRegions.EUROPE },
  {
    name: 'Sao Tome and Principe',
    abbreviation: 'ST',
    region: WorldRegions.AFRICA,
  },
  { name: 'Saudi Arabia', abbreviation: 'SA', region: WorldRegions.ASIA },
  { name: 'Senegal', abbreviation: 'SN', region: WorldRegions.AFRICA },
  { name: 'Serbia', abbreviation: 'RS', region: WorldRegions.EUROPE },
  { name: 'Seychelles', abbreviation: 'SC', region: WorldRegions.AFRICA },
  { name: 'Sierra Leone', abbreviation: 'SL', region: WorldRegions.AFRICA },
  { name: 'Singapore', abbreviation: 'SG', region: WorldRegions.ASIA },
  {
    name: 'Sint Maarten (Dutch part)',
    abbreviation: 'SX',
    region: WorldRegions.NORTH_AMERICA,
  },
  { name: 'Slovakia', abbreviation: 'SK', region: WorldRegions.EUROPE },
  { name: 'Slovenia', abbreviation: 'SI', region: WorldRegions.EUROPE },
  { name: 'Solomon Islands', abbreviation: 'SB', region: WorldRegions.OCEANIA },
  { name: 'Somalia', abbreviation: 'SO', region: WorldRegions.AFRICA },
  { name: 'South Africa', abbreviation: 'ZA', region: WorldRegions.AFRICA },
  {
    name: 'South Georgia and the South Sandwich Islands',
    abbreviation: 'GS',
    region: WorldRegions.SOUTH_AMERICA,
  },
  { name: 'South Sudan', abbreviation: 'SS', region: WorldRegions.AFRICA },
  { name: 'Spain', abbreviation: 'ES', region: WorldRegions.EUROPE },
  { name: 'Sri Lanka', abbreviation: 'LK', region: WorldRegions.ASIA },
  { name: 'Sudan', abbreviation: 'SD', region: WorldRegions.AFRICA },
  { name: 'Suriname', abbreviation: 'SR', region: WorldRegions.SOUTH_AMERICA },
  {
    name: 'Svalbard and Jan Mayen',
    abbreviation: 'SJ',
    region: WorldRegions.EUROPE,
  },
  { name: 'Sweden', abbreviation: 'SE', region: WorldRegions.EUROPE },
  { name: 'Switzerland', abbreviation: 'CH', region: WorldRegions.EUROPE },
  {
    name: 'Syrian Arab Republic',
    abbreviation: 'SY',
    region: WorldRegions.ASIA,
  },
  {
    name: 'Taiwan, Province of China',
    abbreviation: 'TW',
    region: WorldRegions.ASIA,
  },
  { name: 'Tajikistan', abbreviation: 'TJ', region: WorldRegions.ASIA },
  {
    name: 'Tanzania, United Republic of',
    abbreviation: 'TZ',
    region: WorldRegions.AFRICA,
  },
  { name: 'Thailand', abbreviation: 'TH', region: WorldRegions.ASIA },
  { name: 'Timor-Leste', abbreviation: 'TL', region: WorldRegions.ASIA },
  { name: 'Togo', abbreviation: 'TG', region: WorldRegions.AFRICA },
  { name: 'Tokelau', abbreviation: 'TK', region: WorldRegions.OCEANIA },
  { name: 'Tonga', abbreviation: 'TO', region: WorldRegions.OCEANIA },
  {
    name: 'Trinidad and Tobago',
    abbreviation: 'TT',
    region: WorldRegions.NORTH_AMERICA,
  },
  { name: 'Tunisia', abbreviation: 'TN', region: WorldRegions.AFRICA },
  { name: 'Turkey', abbreviation: 'TR', region: WorldRegions.ASIA },
  { name: 'Turkmenistan', abbreviation: 'TM', region: WorldRegions.ASIA },
  {
    name: 'Turks and Caicos Islands',
    abbreviation: 'TC',
    region: WorldRegions.NORTH_AMERICA,
  },
  { name: 'Tuvalu', abbreviation: 'TV', region: WorldRegions.OCEANIA },
  { name: 'Uganda', abbreviation: 'UG', region: WorldRegions.AFRICA },
  { name: 'Ukraine', abbreviation: 'UA', region: WorldRegions.EUROPE },
  {
    name: 'United Arab Emirates',
    abbreviation: 'AE',
    region: WorldRegions.ASIA,
  },
  {
    name: 'United Kingdom of Great Britain and Northern Ireland',
    abbreviation: 'GB',
    region: WorldRegions.EUROPE,
  },
  {
    name: 'United States of America',
    abbreviation: 'US',
    region: WorldRegions.NORTH_AMERICA,
  },
  {
    name: 'United States Minor Outlying Islands',
    abbreviation: 'UM',
    region: WorldRegions.OCEANIA,
  },
  { name: 'Uruguay', abbreviation: 'UY', region: WorldRegions.SOUTH_AMERICA },
  { name: 'Uzbekistan', abbreviation: 'UZ', region: WorldRegions.ASIA },
  { name: 'Vanuatu', abbreviation: 'VU', region: WorldRegions.OCEANIA },
  {
    name: 'Venezuela (Bolivarian Republic of)',
    abbreviation: 'VE',
    region: WorldRegions.SOUTH_AMERICA,
  },
  { name: 'Viet Nam', abbreviation: 'VN', region: WorldRegions.ASIA },
  {
    name: 'Virgin Islands (British)',
    abbreviation: 'VG',
    region: WorldRegions.NORTH_AMERICA,
  },
  {
    name: 'Virgin Islands (U.S.)',
    abbreviation: 'VI',
    region: WorldRegions.NORTH_AMERICA,
  },
  {
    name: 'Wallis and Futuna',
    abbreviation: 'WF',
    region: WorldRegions.OCEANIA,
  },
  { name: 'Western Sahara', abbreviation: 'EH', region: WorldRegions.AFRICA },
  { name: 'Yemen', abbreviation: 'YE', region: WorldRegions.ASIA },
  { name: 'Zambia', abbreviation: 'ZM', region: WorldRegions.AFRICA },
  { name: 'Zimbabwe', abbreviation: 'ZW', region: WorldRegions.AFRICA },
];
