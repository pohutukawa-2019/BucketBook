exports.seed = function(knex) {
  return knex('Countries').del()
    .then(function () {
      return knex('Countries').insert([
        { id: 1, name: 'afghanistan' },
        { id: 2, name: 'albania' },
        { id: 3, name: 'algeria' },
        { id: 4, name: 'andorra' },
        { id: 5, name: 'angola' },
        { id: 6, name: 'antigua and barbuda' },
        { id: 7, name: 'argentia' },
        { id: 8, name: 'armenia' },
        { id: 9, name: 'australia' },
        { id: 10, name: 'austria' },
        { id: 11, name: 'azerbaijan' },
        { id: 12, name: 'the bahamas' },
        { id: 13, name: 'bahrain' },
        { id: 14, name: 'bangladesh' },
        { id: 15, name: 'barbados' },
        { id: 16, name: 'belarus' },
        { id: 17, name: 'belguim' },
        { id: 18, name: 'belize' },
        { id: 19, name: 'benin' },
        { id: 20, name: 'bhutan' },
        { id: 21, name: 'bolivia' },
        { id: 22, name: 'bosnia and herzegovina' },
        { id: 23, name: 'botswana' },
        { id: 24, name: 'brazil' },
        { id: 25, name: 'brunei' },
        { id: 26, name: 'bulgaria' },
        { id: 27, name: 'burkina faso' },
        { id: 28, name: 'burundi' },
        { id: 29, name: 'cabo verde' },
        { id: 30, name: 'cambodia' },
        { id: 31, name: 'cameroon' },
        { id: 32, name: 'canada' },
        { id: 33, name: 'central african republic' },
        { id: 34, name: 'chad' },
        { id: 35, name: 'chile' },
        { id: 36, name: 'china' },
        { id: 37, name: 'colombia' },
        { id: 38, name: 'comoros' },
        { id: 39, name: 'democratic republic of congo' },
        { id: 40, name: 'costa rica' },
        { id: 41, name: 'cote divoire' },
        { id: 42, name: 'croatia' },
        { id: 43, name: 'cuba' },
        { id: 44, name: 'cyprus' },
        { id: 45, name: 'czech republic' },
        { id: 46, name: 'denmark' },
        { id: 47, name: 'dibouti' },
        { id: 48, name: 'dominica' },
        { id: 49, name: 'dominican republic' },
        { id: 50, name: 'east timor' },
        { id: 51, name: 'ecuador' },
        { id: 52, name: 'egypt' },
        { id: 53, name: 'el salvador' },
        { id: 54, name: 'equatorial guinea' },
        { id: 55, name: 'eritrea' },
        { id: 56, name: 'estonia' },
        { id: 57, name: 'eswatini' },
        { id: 58, name: 'ethiopia' },
        { id: 59, name: 'fiji' },
        { id: 60, name: 'finland' },
        { id: 61, name: 'france' },
        { id: 62, name: 'gabon' },
        { id: 63, name: 'the gambia' },
        { id: 64, name: 'georgia' },
        { id: 65, name: 'germany' },
        { id: 66, name: 'ghana' },
        { id: 67, name: 'greece' },
        { id: 68, name: 'grenada' },
        { id: 69, name: 'guatemala' },
        { id: 70, name: 'guinea' },
        { id: 71, name: 'guyana' },
        { id: 72, name: 'haiti' },
        { id: 73, name: 'honduras' },
        { id: 74, name: 'hungary' },
        { id: 75, name: 'iceland' },
        { id: 76, name: 'india' },
        { id: 77, name: 'indonesia' },
        { id: 78, name: 'iran' },
        { id: 79, name: 'iraq' },
        { id: 80, name: 'ireland' },
        { id: 81, name: 'israel' },
        { id: 82, name: 'italy' },
        { id: 83, name: 'jamaica' },
        { id: 84, name: 'japan' },
        { id: 85, name: 'jordan' },
        { id: 86, name: 'kazakhstan' },
        { id: 87, name: 'kenya' },
        { id: 88, name: 'kiribati' },
        { id: 89, name: 'north korea' },
        { id: 90, name: 'south korea' },
        { id: 91, name: 'kosoyo' },
        { id: 92, name: 'kyrgyzstan' },
        { id: 93, name: 'laos' },
        { id: 94, name: 'latvia' },
        { id: 95, name: 'lebanon' },
        { id: 96, name: 'lesotho' },
        { id: 97, name: 'liberia' },
        { id: 98, name: 'libya' },
        { id: 99, name: 'liechtenstein' },
        { id: 100, name: 'lithuania' },
        { id: 101, name: 'luxembourg' },
        { id: 102, name: 'madagascar' },
        { id: 103, name: 'malawi' },
        { id: 104, name: 'malaysia' },
        { id: 105, name: 'maldives' },
        { id: 106, name: 'mali' },
        { id: 107, name: 'malta' },
        { id: 108, name: 'marshall islands' },
        { id: 109, name: 'mauritania' },
        { id: 110, name: 'maurritius' },
        { id: 111, name: 'mexico' },
        { id: 112, name: 'moldova' },
        { id: 113, name: 'monaco' },
        { id: 114, name: 'mongolia' },
        { id: 115, name: 'montenegro' },
        { id: 116, name: 'morocco' },
        { id: 117, name: 'mozambique' },
        { id: 118, name: 'myanmar' },
        { id: 119, name: 'namibia' },
        { id: 120, name: 'nauru' },
        { id: 121, name: 'nepal' },
        { id: 122, name: 'netherlands' },
        { id: 123, name: 'new zealand' },
        { id: 124, name: 'nicaragua' },
        { id: 125, name: 'niger' },
        { id: 126, name: 'nigeria' },
        { id: 127, name: 'north macedonia' },
        { id: 128, name: 'norway' },
        { id: 129, name: 'oman' },
        { id: 130, name: 'pakistan' },
        { id: 131, name: 'palau' },
        { id: 132, name: 'panama' },
        { id: 133, name: 'papua new guinea' },
        { id: 134, name: 'paraguay' },
        { id: 135, name: 'peru' },
        { id: 136, name: 'philippines' },
        { id: 137, name: 'poland' },
        { id: 138, name: 'portugal' },
        { id: 139, name: 'qatar' },
        { id: 140, name: 'romania' },
        { id: 141, name: 'russia' },
        { id: 142, name: 'rwanda' },
        { id: 143, name: 'saint kitts and nevis' },
        { id: 144, name: 'saint lucia' },
        { id: 145, name: 'saint vincent and the grenadines' },
        { id: 146, name: 'samoa' },
        { id: 147, name: 'san marino' },
        { id: 148, name: 'sao tome and principe' },
        { id: 149, name: 'saudi arabia' },
        { id: 150, name: 'senegal' },
        { id: 151, name: 'serbia' },
        { id: 152, name: 'seychelles' },
        { id: 153, name: 'sierra leone' },
        { id: 154, name: 'singapore' },
        { id: 155, name: 'slovakia' },
        { id: 156, name: 'slovenia' },
        { id: 157, name: 'solomon islands' },
        { id: 158, name: 'somalia' },
        { id: 159, name: 'south africa' },
        { id: 160, name: 'spain' },
        { id: 161, name: 'sri lanka' },
        { id: 162, name: 'sudan' },
        { id: 163, name: 'south sudan' },
        { id: 164, name: 'suriname' },
        { id: 165, name: 'sweden' },
        { id: 166, name: 'switzerland' },
        { id: 168, name: 'syria' },
        { id: 169, name: 'taiwan' },
        { id: 170, name: 'tajikistan' },
        { id: 171, name: 'tanzania' },
        { id: 172, name: 'thailand' },
        { id: 173, name: 'togo' },
        { id: 174, name: 'tonga' },
        { id: 175, name: 'trinidad and tobago' },
        { id: 176, name: 'tunisia' },
        { id: 177, name: 'turkey' },
        { id: 178, name: 'turkenistan' },
        { id: 179, name: 'tuvalu' },
        { id: 180, name: 'uganda' },
        { id: 181, name: 'ukraine' },
        { id: 182, name: 'united arab emirates' },
        { id: 183, name: 'united kingdom' },
        { id: 184, name: 'united states' },
        { id: 185, name: 'uruguay' },
        { id: 186, name: 'uzbekistan' },
        { id: 187, name: 'vanuatu' },
        { id: 188, name: 'vatican city' },
        { id: 189, name: 'venezuela' },
        { id: 190, name: 'vietnam' },
        { id: 191, name: 'yemen' },
        { id: 192, name: 'zambia' },
        { id: 193, name: 'zimbabwe' },
      ])
    })
}
