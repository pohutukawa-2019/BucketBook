exports.seed = function(knex) {
  return knex('Countries').del()
    .then(function () {
      return knex('Countries').insert([
        { id: 1, name:"Zimbabwe"},
        { id: 2, name:"Zambia"},
        { id: 3, name:"Yemen"},
        { id: 4, name:"Vietnam"},
        { id: 5, name:"Venezuela"},
        { id: 6, name:"Vatican"},
        { id: 7, name:"Vanuatu"},        
        { id: 8, name:"Uzbekistan"},
        { id: 9, name:"Uruguay"},
        { id: 10, name:"Micronesia"},
        { id: 11, name:"Marshall Is."},
        { id: 12, name:"N. Mariana Is."},
        { id: 13, name:"U.S. Virgin Is."},
        { id: 14, name:"Guam"},
        { id: 15, name:"American Samoa"},
        { id: 16, name:"Puerto Rico"},
        { id: 17, name:"United States of America"},
        { id: 18, name:"S. Geo. and the Is."},
        { id: 19, name:"Br. Indian Ocean Ter."},
        { id: 20, name:"Saint Helena"},
        { id: 21, name:"Pitcairn Is."},
        { id: 22, name:"Anguilla"},
        { id: 23, name:"Falkland Is."},
        { id: 24, name:"Cayman Is."},
        { id: 25, name:"Bermuda"},
        { id: 26, name:"British Virgin Is."},
        { id: 27, name:"Turks and Caicos Is."},
        { id: 28, name:"Montserrat"},
        { id: 29, name:"Jersey"},
        { id: 30, name:"Guernsey"},
        { id: 31, name:"Isle of Man"},
        { id: 32, name:"United Kingdom"},
        { id: 33, name:"United Arab Emirates"},
        { id: 34, name:"Ukraine"},
        { id: 35, name:"Uganda"},
        { id: 36, name:"Turkmenistan"},
        { id: 37, name:"Turkey"},
        { id: 38, name:"Tunisia"},
        { id: 39, name:"Trinidad and Tobago"},
        { id: 40, name:"Tonga"},
        { id: 41, name:"Togo"},
        { id: 42, name:"Timor-Leste"},
        { id: 43, name:"Thailand"},
        { id: 44, name:"Tanzania"},
        { id: 45, name:"Tajikistan"},
        { id: 46, name:"Taiwan"},
        { id: 47, name:"Syria"},
        { id: 48, name:"Switzerland"},
        { id: 49, name:"Sweden"},
        { id: 50, name:"Eswatini"},
        { id: 51, name:"Suriname"},
        { id: 52, name:"S. Sudan"},
        { id: 53, name:"Sudan"},
        { id: 54, name:"Sri Lanka"},
        { id: 55, name:"Spain"},
        { id: 56, name:"South Korea"},
        { id: 57, name:"South Africa"},
        { id: 58, name:"Somalia"},
        { id: 59, name:"Somaliland"},
        { id: 60, name:"Solomon Is."},
        { id: 61, name:"Slovakia"},
        { id: 62, name:"Slovenia"},
        { id: 63, name:"Singapore"},
        { id: 64, name:"Sierra Leone"},
        { id: 65, name:"Seychelles"},
        { id: 66, name:"Serbia"},
        { id: 67, name:"Senegal"},
        { id: 68, name:"Saudi Arabia"},
        { id: 69, name:"São Tomé and Principe"},
        { id: 70, name:"San Marino"},
        { id: 71, name:"Samoa"},
        { id: 72, name:"St. Vin. and Gren."},
        { id: 73, name:"Saint Lucia"},
        { id: 74, name:"St. Kitts and Nevis"},
        { id: 75, name:"Rwanda"},
        { id: 76, name:"Russia"},
        { id: 77, name:"Romania"},
        { id: 78, name:"Qatar"},
        { id: 79, name:"Portugal"},
        { id: 80, name:"Poland"},
        { id: 81, name:"Philippines"},
        { id: 82, name:"Peru"},
        { id: 83, name:"Paraguay"},
        { id: 84, name:"Papua New Guinea"},
        { id: 85, name:"Panama"},
        { id: 86, name:"Palau"},
        { id: 87, name:"Pakistan"},
        { id: 88, name:"Oman"},
        { id: 89, name:"Norway"},
        { id: 90, name:"North Korea"},
        { id: 91, name:"Nigeria"},
        { id: 92, name:"Niger"},
        { id: 93, name:"Nicaragua"},
        { id: 94, name:"New Zealand"},
        { id: 95, name:"Niue"},
        { id: 96, name:"Cook Is."},
        { id: 97, name:"Netherlands"},
        { id: 98, name:"Aruba"},
        { id: 99, name:"Curaçao"},
        { id: 100, name:"Nepal"},
        { id: 101, name:"Nauru"},
        { id: 102, name:"Namibia"},
        { id: 103, name:"Mozambique"},
        { id: 104, name:"Morocco"},
        { id: 105, name:"W. Sahara"},
        { id: 106, name:"Montenegro"},
        { id: 107, name:"Mongolia"},
        { id: 108, name:"Moldova"},
        { id: 109, name:"Monaco"},
        { id: 110, name:"Mexico"},
        { id: 111, name:"Mauritius"},
        { id: 112, name:"Mauritania"},
        { id: 113, name:"Malta"},
        { id: 114, name:"Mali"},
        { id: 115, name:"Maldives"},
        { id: 116, name:"Malaysia"},
        { id: 117, name:"Malawi"},
        { id: 118, name:"Madagascar"},
        { id: 119, name:"Macedonia"},
        { id: 120, name:"Luxembourg"},
        { id: 121, name:"Lithuania"},
        { id: 122, name:"Liechtenstein"},
        { id: 123, name:"Libya"},
        { id: 124, name:"Liberia"},
        { id: 125, name:"Lesotho"},
        { id: 126, name:"Lebanon"},
        { id: 127, name:"Latvia"},
        { id: 128, name:"Laos"},
        { id: 129, name:"Kyrgyzstan"},
        { id: 130, name:"Kuwait"},
        { id: 131, name:"Kosovo"},
        { id: 132, name:"Kiribati"},
        { id: 133, name:"Kenya"},
        { id: 134, name:"Kazakhstan"},
        { id: 135, name:"Jordan"},
        { id: 136, name:"Japan"},
        { id: 137, name:"Jamaica"},
        { id: 138, name:"Italy"},
        { id: 139, name:"Israel"},
        { id: 140, name:"Palestine"},
        { id: 141, name:"Ireland"},
        { id: 142, name:"Iraq"},
        { id: 143, name:"Iran"},
        { id: 144, name:"Indonesia"},
        { id: 145, name:"India"},
        { id: 146, name:"Iceland"},
        { id: 147, name:"Hungary"},
        { id: 148, name:"Honduras"},
        { id: 149, name:"Haiti"},
        { id: 150, name:"Guyana"},
        { id: 151, name:"Guinea-Bissau"},
        { id: 152, name:"Guinea"},
        { id: 153, name:"Guatemala"},
        { id: 154, name:"Grenada"},
        { id: 155, name:"Greece"},
        { id: 156, name:"Ghana"},
        { id: 157, name:"Germany"},
        { id: 158, name:"Georgia"},
        { id: 159, name:"Gambia"},
        { id: 160, name:"Gabon"},
        { id: 161, name:"France"},
        { id: 162, name:"St. Pierre and Miquelon"},
        { id: 163, name:"Wallis and Futuna Is."},
        { id: 164, name:"St-Martin"},
        { id: 165, name:"St-Barthélemy"},
        { id: 166, name:"Fr. Polynesia"},
        { id: 167, name:"New Caledonia"},
        { id: 168, name:"Fr. S. Antarctic Lands"},
        { id: 169, name:"Åland"},
        { id: 170, name:"Finland"},
        { id: 171, name:"Fiji"},
        { id: 172, name:"Ethiopia"},
        { id: 173, name:"Estonia"},
        { id: 174, name:"Eritrea"},
        { id: 175, name:"Eq. Guinea"},
        { id: 176, name:"El Salvador"},
        { id: 177, name:"Egypt"},
        { id: 178, name:"Ecuador"},
        { id: 179, name:"Dominican Rep."},
        { id: 180, name:"Dominica"},
        { id: 181, name:"Djibouti"},
        { id: 182, name:"Greenland"},
        { id: 183, name:"Faeroe Is."},
        { id: 184, name:"Denmark"},
        { id: 185, name:"Czechia"},
        { id: 186, name:"N. Cyprus"},
        { id: 187, name:"Cyprus"},
        { id: 188, name:"Cuba"},
        { id: 189, name:"Croatia"},
        { id: 190, name:"Côte d'Ivoire"},
        { id: 191, name:"Costa Rica"},
        { id: 192, name:"Dem. Rep. Congo"},
        { id: 193, name:"Congo"},
        { id: 194, name:"Comoros"},
        { id: 195, name:"Colombia"},
        { id: 196, name:"China"},    
        { id: 197, name:"Macao"},
        { id: 198, name:"Hong Kong"},
        { id: 199, name:"Chile"},
        { id: 200, name:"Chad"},
        { id: 201, name:"Central African Rep."},
        { id: 202, name:"Cabo Verde"},
        { id: 203, name:"Canada"},
        { id: 204, name:"Cameroon"},
        { id: 205, name:"Cambodia"},
        { id: 206, name:"Myanmar"},
        { id: 207, name:"Burundi"},
        { id: 208, name:"Burkina Faso"},
        { id: 209, name:"Bulgaria"},
        { id: 210, name:"Brunei"},
        { id: 211, name:"Brazil"},
        { id: 212, name:"Botswana"},
        { id: 213, name:"Bosnia and Herz."},
        { id: 214, name:"Bolivia"},
        { id: 215, name:"Bhutan"},
        { id: 216, name:"Benin"},
        { id: 217, name:"Belize"},
        { id: 218, name:"Belgium"},
        { id: 219, name:"Belarus"},
        { id: 220, name:"Barbados"},
        { id: 221, name:"Bangladesh"},
        { id: 222, name:"Bahrain"},
        { id: 223, name:"Bahamas"},
        { id: 224, name:"Azerbaijan"},
        { id: 225, name:"Austria"},
        { id: 226, name:"Australia"},
        { id: 227, name:"Indian Ocean Ter."},
        { id: 228, name:"Heard I. and McDonald Is."},
        { id: 229, name:"Norfolk Island"},
        { id: 230, name:"Ashmore and Cartier Is."},
        { id: 231, name:"Armenia"},
        { id: 232, name:"Argentina"},
        { id: 233, name:"Antigua and Barb."},
        { id: 234, name:"Angola"},
        { id: 235, name:"Andorra"},
        { id: 236, name:"Algeria"},
        { id: 237, name:"Albania"},
        { id: 238, name:"Afghanistan"},
        { id: 239, name:"Siachen Glacier"},
        { id: 240, name:"Antarctica"},
        { id: 241, name:"Sint Maarten"},
      ])
    })
}
