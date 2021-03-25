interface State {
  country_iso_code: string,
  state_code: string | number,
  state_name: string
}

interface StateOption {
  country: string,
  key: string | number,
  value: string
}

const stateOptions: State[] = [
  {
    country_iso_code: 'AD',
    state_code: '02',
    state_name: 'Canillo'
  },
  {
    country_iso_code: 'AD',
    state_code: '03',
    state_name: 'Encamp'
  },
  {
    country_iso_code: 'AD',
    state_code: '04',
    state_name: 'La Massana'
  },
  {
    country_iso_code: 'AD',
    state_code: '05',
    state_name: 'Ordino'
  },
  {
    country_iso_code: 'AD',
    state_code: '06',
    state_name: 'Sant Julia de Loria'
  },
  {
    country_iso_code: 'AD',
    state_code: '07',
    state_name: 'Andorra la Vella'
  },
  {
    country_iso_code: 'AD',
    state_code: '08',
    state_name: 'Escaldes-Engordany'
  },
  {
    country_iso_code: 'AE',
    state_code: '01',
    state_name: 'Abu Dhabi'
  },
  {
    country_iso_code: 'AE',
    state_code: '02',
    state_name: 'Ajman'
  },
  {
    country_iso_code: 'AE',
    state_code: '03',
    state_name: 'Dubai'
  },
  {
    country_iso_code: 'AE',
    state_code: '04',
    state_name: 'Fujairah'
  },
  {
    country_iso_code: 'AE',
    state_code: '05',
    state_name: 'Ras Al Khaimah'
  },
  {
    country_iso_code: 'AE',
    state_code: '06',
    state_name: 'Sharjah'
  },
  {
    country_iso_code: 'AE',
    state_code: '07',
    state_name: 'Umm Al Quwain'
  },
  {
    country_iso_code: 'AF',
    state_code: '01',
    state_name: 'Badakhshan'
  },
  {
    country_iso_code: 'AF',
    state_code: '02',
    state_name: 'Badghis'
  },
  {
    country_iso_code: 'AF',
    state_code: '03',
    state_name: 'Baghlan'
  },
  {
    country_iso_code: 'AF',
    state_code: '05',
    state_name: 'Bamian'
  },
  {
    country_iso_code: 'AF',
    state_code: '06',
    state_name: 'Farah'
  },
  {
    country_iso_code: 'AF',
    state_code: '07',
    state_name: 'Faryab'
  },
  {
    country_iso_code: 'AF',
    state_code: '08',
    state_name: 'Ghazni'
  },
  {
    country_iso_code: 'AF',
    state_code: '09',
    state_name: 'Ghowr'
  },
  {
    country_iso_code: 'AF',
    state_code: 10,
    state_name: 'Helmand'
  },
  {
    country_iso_code: 'AF',
    state_code: 11,
    state_name: 'Herat'
  },
  {
    country_iso_code: 'AF',
    state_code: 13,
    state_name: 'Kabol'
  },
  {
    country_iso_code: 'AF',
    state_code: 14,
    state_name: 'Kapisa'
  },
  {
    country_iso_code: 'AF',
    state_code: 17,
    state_name: 'Lowgar'
  },
  {
    country_iso_code: 'AF',
    state_code: 18,
    state_name: 'Nangarhar'
  },
  {
    country_iso_code: 'AF',
    state_code: 19,
    state_name: 'Nimruz'
  },
  {
    country_iso_code: 'AF',
    state_code: 23,
    state_name: 'Kandahar'
  },
  {
    country_iso_code: 'AF',
    state_code: 24,
    state_name: 'Kondoz'
  },
  {
    country_iso_code: 'AF',
    state_code: 26,
    state_name: 'Takhar'
  },
  {
    country_iso_code: 'AF',
    state_code: 27,
    state_name: 'Vardak'
  },
  {
    country_iso_code: 'AF',
    state_code: 28,
    state_name: 'Zabol'
  },
  {
    country_iso_code: 'AF',
    state_code: 29,
    state_name: 'Paktika'
  },
  {
    country_iso_code: 'AF',
    state_code: 30,
    state_name: 'Balkh'
  },
  {
    country_iso_code: 'AF',
    state_code: 31,
    state_name: 'Jowzjan'
  },
  {
    country_iso_code: 'AF',
    state_code: 32,
    state_name: 'Samangan'
  },
  {
    country_iso_code: 'AF',
    state_code: 33,
    state_name: 'Sar-e Pol'
  },
  {
    country_iso_code: 'AF',
    state_code: 34,
    state_name: 'Konar'
  },
  {
    country_iso_code: 'AF',
    state_code: 35,
    state_name: 'Laghman'
  },
  {
    country_iso_code: 'AF',
    state_code: 36,
    state_name: 'Paktia'
  },
  {
    country_iso_code: 'AF',
    state_code: 37,
    state_name: 'Khowst'
  },
  {
    country_iso_code: 'AF',
    state_code: 38,
    state_name: 'Nurestan'
  },
  {
    country_iso_code: 'AF',
    state_code: 39,
    state_name: 'Oruzgan'
  },
  {
    country_iso_code: 'AF',
    state_code: 40,
    state_name: 'Parvan'
  },
  {
    country_iso_code: 'AF',
    state_code: 41,
    state_name: 'Daykondi'
  },
  {
    country_iso_code: 'AF',
    state_code: 42,
    state_name: 'Panjshir'
  },
  {
    country_iso_code: 'AG',
    state_code: '01',
    state_name: 'Barbuda'
  },
  {
    country_iso_code: 'AG',
    state_code: '03',
    state_name: 'Saint George'
  },
  {
    country_iso_code: 'AG',
    state_code: '04',
    state_name: 'Saint John'
  },
  {
    country_iso_code: 'AG',
    state_code: '05',
    state_name: 'Saint Mary'
  },
  {
    country_iso_code: 'AG',
    state_code: '06',
    state_name: 'Saint Paul'
  },
  {
    country_iso_code: 'AG',
    state_code: '07',
    state_name: 'Saint Peter'
  },
  {
    country_iso_code: 'AG',
    state_code: '08',
    state_name: 'Saint Philip'
  },
  {
    country_iso_code: 'AG',
    state_code: '09',
    state_name: 'Redonda'
  },
  {
    country_iso_code: 'AL',
    state_code: 40,
    state_name: 'Berat'
  },
  {
    country_iso_code: 'AL',
    state_code: 41,
    state_name: 'Diber'
  },
  {
    country_iso_code: 'AL',
    state_code: 42,
    state_name: 'Durres'
  },
  {
    country_iso_code: 'AL',
    state_code: 43,
    state_name: 'Elbasan'
  },
  {
    country_iso_code: 'AL',
    state_code: 44,
    state_name: 'Fier'
  },
  {
    country_iso_code: 'AL',
    state_code: 45,
    state_name: 'Gjirokaster'
  },
  {
    country_iso_code: 'AL',
    state_code: 46,
    state_name: 'Korce'
  },
  {
    country_iso_code: 'AL',
    state_code: 47,
    state_name: 'Kukes'
  },
  {
    country_iso_code: 'AL',
    state_code: 48,
    state_name: 'Lezhe'
  },
  {
    country_iso_code: 'AL',
    state_code: 49,
    state_name: 'Shkoder'
  },
  {
    country_iso_code: 'AL',
    state_code: 50,
    state_name: 'Tirane'
  },
  {
    country_iso_code: 'AL',
    state_code: 51,
    state_name: 'Vlore'
  },
  {
    country_iso_code: 'AM',
    state_code: '01',
    state_name: 'Aragatsotn'
  },
  {
    country_iso_code: 'AM',
    state_code: '02',
    state_name: 'Ararat'
  },
  {
    country_iso_code: 'AM',
    state_code: '03',
    state_name: 'Armavir'
  },
  {
    country_iso_code: 'AM',
    state_code: '04',
    state_name: "Geghark'unik'"
  },
  {
    country_iso_code: 'AM',
    state_code: '05',
    state_name: "Kotayk'"
  },
  {
    country_iso_code: 'AM',
    state_code: '06',
    state_name: 'Lorri'
  },
  {
    country_iso_code: 'AM',
    state_code: '07',
    state_name: 'Shirak'
  },
  {
    country_iso_code: 'AM',
    state_code: '08',
    state_name: "Syunik'"
  },
  {
    country_iso_code: 'AM',
    state_code: '09',
    state_name: 'Tavush'
  },
  {
    country_iso_code: 'AM',
    state_code: 10,
    state_name: "Vayots' Dzor"
  },
  {
    country_iso_code: 'AM',
    state_code: 11,
    state_name: 'Yerevan'
  },
  {
    country_iso_code: 'AO',
    state_code: '01',
    state_name: 'Benguela'
  },
  {
    country_iso_code: 'AO',
    state_code: '02',
    state_name: 'Bie'
  },
  {
    country_iso_code: 'AO',
    state_code: '03',
    state_name: 'Cabinda'
  },
  {
    country_iso_code: 'AO',
    state_code: '04',
    state_name: 'Cuando Cubango'
  },
  {
    country_iso_code: 'AO',
    state_code: '05',
    state_name: 'Cuanza Norte'
  },
  {
    country_iso_code: 'AO',
    state_code: '06',
    state_name: 'Cuanza Sul'
  },
  {
    country_iso_code: 'AO',
    state_code: '07',
    state_name: 'Cunene'
  },
  {
    country_iso_code: 'AO',
    state_code: '08',
    state_name: 'Huambo'
  },
  {
    country_iso_code: 'AO',
    state_code: '09',
    state_name: 'Huila'
  },
  {
    country_iso_code: 'AO',
    state_code: 12,
    state_name: 'Malanje'
  },
  {
    country_iso_code: 'AO',
    state_code: 13,
    state_name: 'Namibe'
  },
  {
    country_iso_code: 'AO',
    state_code: 14,
    state_name: 'Moxico'
  },
  {
    country_iso_code: 'AO',
    state_code: 15,
    state_name: 'Uige'
  },
  {
    country_iso_code: 'AO',
    state_code: 16,
    state_name: 'Zaire'
  },
  {
    country_iso_code: 'AO',
    state_code: 17,
    state_name: 'Lunda Norte'
  },
  {
    country_iso_code: 'AO',
    state_code: 18,
    state_name: 'Lunda Sul'
  },
  {
    country_iso_code: 'AO',
    state_code: 19,
    state_name: 'Bengo'
  },
  {
    country_iso_code: 'AO',
    state_code: 20,
    state_name: 'Luanda'
  },
  {
    country_iso_code: 'AR',
    state_code: '01',
    state_name: 'Buenos Aires'
  },
  {
    country_iso_code: 'AR',
    state_code: '02',
    state_name: 'Catamarca'
  },
  {
    country_iso_code: 'AR',
    state_code: '03',
    state_name: 'Chaco'
  },
  {
    country_iso_code: 'AR',
    state_code: '04',
    state_name: 'Chubut'
  },
  {
    country_iso_code: 'AR',
    state_code: '05',
    state_name: 'Cordoba'
  },
  {
    country_iso_code: 'AR',
    state_code: '06',
    state_name: 'Corrientes'
  },
  {
    country_iso_code: 'AR',
    state_code: '07',
    state_name: 'Distrito Federal'
  },
  {
    country_iso_code: 'AR',
    state_code: '08',
    state_name: 'Entre Rios'
  },
  {
    country_iso_code: 'AR',
    state_code: '09',
    state_name: 'Formosa'
  },
  {
    country_iso_code: 'AR',
    state_code: 10,
    state_name: 'Jujuy'
  },
  {
    country_iso_code: 'AR',
    state_code: 11,
    state_name: 'La Pampa'
  },
  {
    country_iso_code: 'AR',
    state_code: 12,
    state_name: 'La Rioja'
  },
  {
    country_iso_code: 'AR',
    state_code: 13,
    state_name: 'Mendoza'
  },
  {
    country_iso_code: 'AR',
    state_code: 14,
    state_name: 'Misiones'
  },
  {
    country_iso_code: 'AR',
    state_code: 15,
    state_name: 'Neuquen'
  },
  {
    country_iso_code: 'AR',
    state_code: 16,
    state_name: 'Rio Negro'
  },
  {
    country_iso_code: 'AR',
    state_code: 17,
    state_name: 'Salta'
  },
  {
    country_iso_code: 'AR',
    state_code: 18,
    state_name: 'San Juan'
  },
  {
    country_iso_code: 'AR',
    state_code: 19,
    state_name: 'San Luis'
  },
  {
    country_iso_code: 'AR',
    state_code: 20,
    state_name: 'Santa Cruz'
  },
  {
    country_iso_code: 'AR',
    state_code: 21,
    state_name: 'Santa Fe'
  },
  {
    country_iso_code: 'AR',
    state_code: 22,
    state_name: 'Santiago del Estero'
  },
  {
    country_iso_code: 'AR',
    state_code: 23,
    state_name: 'Tierra del Fuego'
  },
  {
    country_iso_code: 'AR',
    state_code: 24,
    state_name: 'Tucuman'
  },
  {
    country_iso_code: 'AT',
    state_code: '01',
    state_name: 'Burgenland'
  },
  {
    country_iso_code: 'AT',
    state_code: '02',
    state_name: 'Karnten'
  },
  {
    country_iso_code: 'AT',
    state_code: '03',
    state_name: 'Niederosterreich'
  },
  {
    country_iso_code: 'AT',
    state_code: '04',
    state_name: 'Oberosterreich'
  },
  {
    country_iso_code: 'AT',
    state_code: '05',
    state_name: 'Salzburg'
  },
  {
    country_iso_code: 'AT',
    state_code: '06',
    state_name: 'Steiermark'
  },
  {
    country_iso_code: 'AT',
    state_code: '07',
    state_name: 'Tirol'
  },
  {
    country_iso_code: 'AT',
    state_code: '08',
    state_name: 'Vorarlberg'
  },
  {
    country_iso_code: 'AT',
    state_code: '09',
    state_name: 'Wien'
  },
  {
    country_iso_code: 'AU',
    state_code: '01',
    state_name: 'Australian Capital Territory'
  },
  {
    country_iso_code: 'AU',
    state_code: '02',
    state_name: 'New South Wales'
  },
  {
    country_iso_code: 'AU',
    state_code: '03',
    state_name: 'Northern Territory'
  },
  {
    country_iso_code: 'AU',
    state_code: '04',
    state_name: 'Queensland'
  },
  {
    country_iso_code: 'AU',
    state_code: '05',
    state_name: 'South Australia'
  },
  {
    country_iso_code: 'AU',
    state_code: '06',
    state_name: 'Tasmania'
  },
  {
    country_iso_code: 'AU',
    state_code: '07',
    state_name: 'Victoria'
  },
  {
    country_iso_code: 'AU',
    state_code: '08',
    state_name: 'Western Australia'
  },
  {
    country_iso_code: 'AZ',
    state_code: '01',
    state_name: 'Abseron'
  },
  {
    country_iso_code: 'AZ',
    state_code: '02',
    state_name: 'Agcabadi'
  },
  {
    country_iso_code: 'AZ',
    state_code: '03',
    state_name: 'Agdam'
  },
  {
    country_iso_code: 'AZ',
    state_code: '04',
    state_name: 'Agdas'
  },
  {
    country_iso_code: 'AZ',
    state_code: '05',
    state_name: 'Agstafa'
  },
  {
    country_iso_code: 'AZ',
    state_code: '06',
    state_name: 'Agsu'
  },
  {
    country_iso_code: 'AZ',
    state_code: '07',
    state_name: 'Ali Bayramli'
  },
  {
    country_iso_code: 'AZ',
    state_code: '08',
    state_name: 'Astara'
  },
  {
    country_iso_code: 'AZ',
    state_code: '09',
    state_name: 'Baki'
  },
  {
    country_iso_code: 'AZ',
    state_code: 10,
    state_name: 'Balakan'
  },
  {
    country_iso_code: 'AZ',
    state_code: 11,
    state_name: 'Barda'
  },
  {
    country_iso_code: 'AZ',
    state_code: 12,
    state_name: 'Beylaqan'
  },
  {
    country_iso_code: 'AZ',
    state_code: 13,
    state_name: 'Bilasuvar'
  },
  {
    country_iso_code: 'AZ',
    state_code: 14,
    state_name: 'Cabrayil'
  },
  {
    country_iso_code: 'AZ',
    state_code: 15,
    state_name: 'Calilabad'
  },
  {
    country_iso_code: 'AZ',
    state_code: 16,
    state_name: 'Daskasan'
  },
  {
    country_iso_code: 'AZ',
    state_code: 17,
    state_name: 'Davaci'
  },
  {
    country_iso_code: 'AZ',
    state_code: 18,
    state_name: 'Fuzuli'
  },
  {
    country_iso_code: 'AZ',
    state_code: 19,
    state_name: 'Gadabay'
  },
  {
    country_iso_code: 'AZ',
    state_code: 20,
    state_name: 'Ganca'
  },
  {
    country_iso_code: 'AZ',
    state_code: 21,
    state_name: 'Goranboy'
  },
  {
    country_iso_code: 'AZ',
    state_code: 22,
    state_name: 'Goycay'
  },
  {
    country_iso_code: 'AZ',
    state_code: 23,
    state_name: 'Haciqabul'
  },
  {
    country_iso_code: 'AZ',
    state_code: 24,
    state_name: 'Imisli'
  },
  {
    country_iso_code: 'AZ',
    state_code: 25,
    state_name: 'Ismayilli'
  },
  {
    country_iso_code: 'AZ',
    state_code: 26,
    state_name: 'Kalbacar'
  },
  {
    country_iso_code: 'AZ',
    state_code: 27,
    state_name: 'Kurdamir'
  },
  {
    country_iso_code: 'AZ',
    state_code: 28,
    state_name: 'Lacin'
  },
  {
    country_iso_code: 'AZ',
    state_code: 29,
    state_name: 'Lankaran'
  },
  {
    country_iso_code: 'AZ',
    state_code: 30,
    state_name: 'Lankaran'
  },
  {
    country_iso_code: 'AZ',
    state_code: 31,
    state_name: 'Lerik'
  },
  {
    country_iso_code: 'AZ',
    state_code: 32,
    state_name: 'Masalli'
  },
  {
    country_iso_code: 'AZ',
    state_code: 33,
    state_name: 'Mingacevir'
  },
  {
    country_iso_code: 'AZ',
    state_code: 34,
    state_name: 'Naftalan'
  },
  {
    country_iso_code: 'AZ',
    state_code: 35,
    state_name: 'Naxcivan'
  },
  {
    country_iso_code: 'AZ',
    state_code: 36,
    state_name: 'Neftcala'
  },
  {
    country_iso_code: 'AZ',
    state_code: 37,
    state_name: 'Oguz'
  },
  {
    country_iso_code: 'AZ',
    state_code: 38,
    state_name: 'Qabala'
  },
  {
    country_iso_code: 'AZ',
    state_code: 39,
    state_name: 'Qax'
  },
  {
    country_iso_code: 'AZ',
    state_code: 40,
    state_name: 'Qazax'
  },
  {
    country_iso_code: 'AZ',
    state_code: 41,
    state_name: 'Qobustan'
  },
  {
    country_iso_code: 'AZ',
    state_code: 42,
    state_name: 'Quba'
  },
  {
    country_iso_code: 'AZ',
    state_code: 43,
    state_name: 'Qubadli'
  },
  {
    country_iso_code: 'AZ',
    state_code: 44,
    state_name: 'Qusar'
  },
  {
    country_iso_code: 'AZ',
    state_code: 45,
    state_name: 'Saatli'
  },
  {
    country_iso_code: 'AZ',
    state_code: 46,
    state_name: 'Sabirabad'
  },
  {
    country_iso_code: 'AZ',
    state_code: 47,
    state_name: 'Saki'
  },
  {
    country_iso_code: 'AZ',
    state_code: 48,
    state_name: 'Saki'
  },
  {
    country_iso_code: 'AZ',
    state_code: 49,
    state_name: 'Salyan'
  },
  {
    country_iso_code: 'AZ',
    state_code: 50,
    state_name: 'Samaxi'
  },
  {
    country_iso_code: 'AZ',
    state_code: 51,
    state_name: 'Samkir'
  },
  {
    country_iso_code: 'AZ',
    state_code: 52,
    state_name: 'Samux'
  },
  {
    country_iso_code: 'AZ',
    state_code: 53,
    state_name: 'Siyazan'
  },
  {
    country_iso_code: 'AZ',
    state_code: 54,
    state_name: 'Sumqayit'
  },
  {
    country_iso_code: 'AZ',
    state_code: 55,
    state_name: 'Susa'
  },
  {
    country_iso_code: 'AZ',
    state_code: 56,
    state_name: 'Susa'
  },
  {
    country_iso_code: 'AZ',
    state_code: 57,
    state_name: 'Tartar'
  },
  {
    country_iso_code: 'AZ',
    state_code: 58,
    state_name: 'Tovuz'
  },
  {
    country_iso_code: 'AZ',
    state_code: 59,
    state_name: 'Ucar'
  },
  {
    country_iso_code: 'AZ',
    state_code: 60,
    state_name: 'Xacmaz'
  },
  {
    country_iso_code: 'AZ',
    state_code: 61,
    state_name: 'Xankandi'
  },
  {
    country_iso_code: 'AZ',
    state_code: 62,
    state_name: 'Xanlar'
  },
  {
    country_iso_code: 'AZ',
    state_code: 63,
    state_name: 'Xizi'
  },
  {
    country_iso_code: 'AZ',
    state_code: 64,
    state_name: 'Xocali'
  },
  {
    country_iso_code: 'AZ',
    state_code: 65,
    state_name: 'Xocavand'
  },
  {
    country_iso_code: 'AZ',
    state_code: 66,
    state_name: 'Yardimli'
  },
  {
    country_iso_code: 'AZ',
    state_code: 67,
    state_name: 'Yevlax'
  },
  {
    country_iso_code: 'AZ',
    state_code: 68,
    state_name: 'Yevlax'
  },
  {
    country_iso_code: 'AZ',
    state_code: 69,
    state_name: 'Zangilan'
  },
  {
    country_iso_code: 'AZ',
    state_code: 70,
    state_name: 'Zaqatala'
  },
  {
    country_iso_code: 'AZ',
    state_code: 71,
    state_name: 'Zardab'
  },
  {
    country_iso_code: 'BA',
    state_code: '01',
    state_name: 'Federation of Bosnia and Herzegovina'
  },
  {
    country_iso_code: 'BA',
    state_code: '03',
    state_name: 'Brcko District'
  },
  {
    country_iso_code: 'BA',
    state_code: '02',
    state_name: 'Republika Srpska'
  },
  {
    country_iso_code: 'BB',
    state_code: '01',
    state_name: 'Christ Church'
  },
  {
    country_iso_code: 'BB',
    state_code: '02',
    state_name: 'Saint Andrew'
  },
  {
    country_iso_code: 'BB',
    state_code: '03',
    state_name: 'Saint George'
  },
  {
    country_iso_code: 'BB',
    state_code: '04',
    state_name: 'Saint James'
  },
  {
    country_iso_code: 'BB',
    state_code: '05',
    state_name: 'Saint John'
  },
  {
    country_iso_code: 'BB',
    state_code: '06',
    state_name: 'Saint Joseph'
  },
  {
    country_iso_code: 'BB',
    state_code: '07',
    state_name: 'Saint Lucy'
  },
  {
    country_iso_code: 'BB',
    state_code: '08',
    state_name: 'Saint Michael'
  },
  {
    country_iso_code: 'BB',
    state_code: '09',
    state_name: 'Saint Peter'
  },
  {
    country_iso_code: 'BB',
    state_code: 10,
    state_name: 'Saint Philip'
  },
  {
    country_iso_code: 'BB',
    state_code: 11,
    state_name: 'Saint Thomas'
  },
  {
    country_iso_code: 'BD',
    state_code: 81,
    state_name: 'Dhaka'
  },
  {
    country_iso_code: 'BD',
    state_code: 82,
    state_name: 'Khulna'
  },
  {
    country_iso_code: 'BD',
    state_code: 83,
    state_name: 'Rajshahi'
  },
  {
    country_iso_code: 'BD',
    state_code: 84,
    state_name: 'Chittagong'
  },
  {
    country_iso_code: 'BD',
    state_code: 85,
    state_name: 'Barisal'
  },
  {
    country_iso_code: 'BD',
    state_code: 86,
    state_name: 'Sylhet'
  },
  {
    country_iso_code: 'BD',
    state_code: 87,
    state_name: 'Rangpur'
  },
  {
    country_iso_code: 'BE',
    state_code: '01',
    state_name: 'Antwerpen'
  },
  {
    country_iso_code: 'BE',
    state_code: '03',
    state_name: 'Hainaut'
  },
  {
    country_iso_code: 'BE',
    state_code: '04',
    state_name: 'Liege'
  },
  {
    country_iso_code: 'BE',
    state_code: '05',
    state_name: 'Limburg'
  },
  {
    country_iso_code: 'BE',
    state_code: '06',
    state_name: 'Luxembourg'
  },
  {
    country_iso_code: 'BE',
    state_code: '07',
    state_name: 'Namur'
  },
  {
    country_iso_code: 'BE',
    state_code: '08',
    state_name: 'Oost-Vlaanderen'
  },
  {
    country_iso_code: 'BE',
    state_code: '09',
    state_name: 'West-Vlaanderen'
  },
  {
    country_iso_code: 'BE',
    state_code: 10,
    state_name: 'Brabant Wallon'
  },
  {
    country_iso_code: 'BE',
    state_code: 11,
    state_name: 'Brussels Hoofdstedelijk Gewest'
  },
  {
    country_iso_code: 'BE',
    state_code: 12,
    state_name: 'Vlaams-Brabant'
  },
  {
    country_iso_code: 'BE',
    state_code: 13,
    state_name: 'Flanders'
  },
  {
    country_iso_code: 'BE',
    state_code: 14,
    state_name: 'Wallonia'
  },
  {
    country_iso_code: 'BF',
    state_code: 15,
    state_name: 'Bam'
  },
  {
    country_iso_code: 'BF',
    state_code: 19,
    state_name: 'Boulkiemde'
  },
  {
    country_iso_code: 'BF',
    state_code: 20,
    state_name: 'Ganzourgou'
  },
  {
    country_iso_code: 'BF',
    state_code: 21,
    state_name: 'Gnagna'
  },
  {
    country_iso_code: 'BF',
    state_code: 28,
    state_name: 'Kouritenga'
  },
  {
    country_iso_code: 'BF',
    state_code: 33,
    state_name: 'Oudalan'
  },
  {
    country_iso_code: 'BF',
    state_code: 34,
    state_name: 'Passore'
  },
  {
    country_iso_code: 'BF',
    state_code: 36,
    state_name: 'Sanguie'
  },
  {
    country_iso_code: 'BF',
    state_code: 40,
    state_name: 'Soum'
  },
  {
    country_iso_code: 'BF',
    state_code: 42,
    state_name: 'Tapoa'
  },
  {
    country_iso_code: 'BF',
    state_code: 44,
    state_name: 'Zoundweogo'
  },
  {
    country_iso_code: 'BF',
    state_code: 45,
    state_name: 'Bale'
  },
  {
    country_iso_code: 'BF',
    state_code: 46,
    state_name: 'Banwa'
  },
  {
    country_iso_code: 'BF',
    state_code: 47,
    state_name: 'Bazega'
  },
  {
    country_iso_code: 'BF',
    state_code: 48,
    state_name: 'Bougouriba'
  },
  {
    country_iso_code: 'BF',
    state_code: 49,
    state_name: 'Boulgou'
  },
  {
    country_iso_code: 'BF',
    state_code: 50,
    state_name: 'Gourma'
  },
  {
    country_iso_code: 'BF',
    state_code: 51,
    state_name: 'Houet'
  },
  {
    country_iso_code: 'BF',
    state_code: 52,
    state_name: 'Ioba'
  },
  {
    country_iso_code: 'BF',
    state_code: 53,
    state_name: 'Kadiogo'
  },
  {
    country_iso_code: 'BF',
    state_code: 54,
    state_name: 'Kenedougou'
  },
  {
    country_iso_code: 'BF',
    state_code: 55,
    state_name: 'Komoe'
  },
  {
    country_iso_code: 'BF',
    state_code: 56,
    state_name: 'Komondjari'
  },
  {
    country_iso_code: 'BF',
    state_code: 57,
    state_name: 'Kompienga'
  },
  {
    country_iso_code: 'BF',
    state_code: 58,
    state_name: 'Kossi'
  },
  {
    country_iso_code: 'BF',
    state_code: 59,
    state_name: 'Koulpelogo'
  },
  {
    country_iso_code: 'BF',
    state_code: 60,
    state_name: 'Kourweogo'
  },
  {
    country_iso_code: 'BF',
    state_code: 61,
    state_name: 'Leraba'
  },
  {
    country_iso_code: 'BF',
    state_code: 62,
    state_name: 'Loroum'
  },
  {
    country_iso_code: 'BF',
    state_code: 63,
    state_name: 'Mouhoun'
  },
  {
    country_iso_code: 'BF',
    state_code: 64,
    state_name: 'Namentenga'
  },
  {
    country_iso_code: 'BF',
    state_code: 65,
    state_name: 'Naouri'
  },
  {
    country_iso_code: 'BF',
    state_code: 66,
    state_name: 'Nayala'
  },
  {
    country_iso_code: 'BF',
    state_code: 67,
    state_name: 'Noumbiel'
  },
  {
    country_iso_code: 'BF',
    state_code: 68,
    state_name: 'Oubritenga'
  },
  {
    country_iso_code: 'BF',
    state_code: 69,
    state_name: 'Poni'
  },
  {
    country_iso_code: 'BF',
    state_code: 70,
    state_name: 'Sanmatenga'
  },
  {
    country_iso_code: 'BF',
    state_code: 71,
    state_name: 'Seno'
  },
  {
    country_iso_code: 'BF',
    state_code: 72,
    state_name: 'Sissili'
  },
  {
    country_iso_code: 'BF',
    state_code: 73,
    state_name: 'Sourou'
  },
  {
    country_iso_code: 'BF',
    state_code: 74,
    state_name: 'Tuy'
  },
  {
    country_iso_code: 'BF',
    state_code: 75,
    state_name: 'Yagha'
  },
  {
    country_iso_code: 'BF',
    state_code: 76,
    state_name: 'Yatenga'
  },
  {
    country_iso_code: 'BF',
    state_code: 77,
    state_name: 'Ziro'
  },
  {
    country_iso_code: 'BF',
    state_code: 78,
    state_name: 'Zondoma'
  },
  {
    country_iso_code: 'BG',
    state_code: 33,
    state_name: 'Mikhaylovgrad'
  },
  {
    country_iso_code: 'BG',
    state_code: 38,
    state_name: 'Blagoevgrad'
  },
  {
    country_iso_code: 'BG',
    state_code: 39,
    state_name: 'Burgas'
  },
  {
    country_iso_code: 'BG',
    state_code: 40,
    state_name: 'Dobrich'
  },
  {
    country_iso_code: 'BG',
    state_code: 41,
    state_name: 'Gabrovo'
  },
  {
    country_iso_code: 'BG',
    state_code: 42,
    state_name: 'Grad Sofiya'
  },
  {
    country_iso_code: 'BG',
    state_code: 43,
    state_name: 'Khaskovo'
  },
  {
    country_iso_code: 'BG',
    state_code: 44,
    state_name: 'Kurdzhali'
  },
  {
    country_iso_code: 'BG',
    state_code: 45,
    state_name: 'Kyustendil'
  },
  {
    country_iso_code: 'BG',
    state_code: 46,
    state_name: 'Lovech'
  },
  {
    country_iso_code: 'BG',
    state_code: 47,
    state_name: 'Montana'
  },
  {
    country_iso_code: 'BG',
    state_code: 48,
    state_name: 'Pazardzhik'
  },
  {
    country_iso_code: 'BG',
    state_code: 49,
    state_name: 'Pernik'
  },
  {
    country_iso_code: 'BG',
    state_code: 50,
    state_name: 'Pleven'
  },
  {
    country_iso_code: 'BG',
    state_code: 51,
    state_name: 'Plovdiv'
  },
  {
    country_iso_code: 'BG',
    state_code: 52,
    state_name: 'Razgrad'
  },
  {
    country_iso_code: 'BG',
    state_code: 53,
    state_name: 'Ruse'
  },
  {
    country_iso_code: 'BG',
    state_code: 54,
    state_name: 'Shumen'
  },
  {
    country_iso_code: 'BG',
    state_code: 55,
    state_name: 'Silistra'
  },
  {
    country_iso_code: 'BG',
    state_code: 56,
    state_name: 'Sliven'
  },
  {
    country_iso_code: 'BG',
    state_code: 57,
    state_name: 'Smolyan'
  },
  {
    country_iso_code: 'BG',
    state_code: 58,
    state_name: 'Sofiya'
  },
  {
    country_iso_code: 'BG',
    state_code: 59,
    state_name: 'Stara Zagora'
  },
  {
    country_iso_code: 'BG',
    state_code: 60,
    state_name: 'Turgovishte'
  },
  {
    country_iso_code: 'BG',
    state_code: 61,
    state_name: 'Varna'
  },
  {
    country_iso_code: 'BG',
    state_code: 62,
    state_name: 'Veliko Turnovo'
  },
  {
    country_iso_code: 'BG',
    state_code: 63,
    state_name: 'Vidin'
  },
  {
    country_iso_code: 'BG',
    state_code: 64,
    state_name: 'Vratsa'
  },
  {
    country_iso_code: 'BG',
    state_code: 65,
    state_name: 'Yambol'
  },
  {
    country_iso_code: 'BH',
    state_code: '01',
    state_name: 'Al Hadd'
  },
  {
    country_iso_code: 'BH',
    state_code: '02',
    state_name: 'Al Manamah'
  },
  {
    country_iso_code: 'BH',
    state_code: '05',
    state_name: 'Jidd Hafs'
  },
  {
    country_iso_code: 'BH',
    state_code: '06',
    state_name: 'Sitrah'
  },
  {
    country_iso_code: 'BH',
    state_code: '08',
    state_name: 'Al Mintaqah al Gharbiyah'
  },
  {
    country_iso_code: 'BH',
    state_code: '09',
    state_name: 'Mintaqat Juzur Hawar'
  },
  {
    country_iso_code: 'BH',
    state_code: 10,
    state_name: 'Al Mintaqah ash Shamaliyah'
  },
  {
    country_iso_code: 'BH',
    state_code: 11,
    state_name: 'Al Mintaqah al Wusta'
  },
  {
    country_iso_code: 'BH',
    state_code: 12,
    state_name: 'Madinat'
  },
  {
    country_iso_code: 'BH',
    state_code: 13,
    state_name: 'Ar Rifa'
  },
  {
    country_iso_code: 'BH',
    state_code: 14,
    state_name: 'Madinat Hamad'
  },
  {
    country_iso_code: 'BH',
    state_code: 15,
    state_name: 'Al Muharraq'
  },
  {
    country_iso_code: 'BH',
    state_code: 16,
    state_name: 'Al Asimah'
  },
  {
    country_iso_code: 'BH',
    state_code: 17,
    state_name: 'Al Janubiyah'
  },
  {
    country_iso_code: 'BH',
    state_code: 18,
    state_name: 'Ash Shamaliyah'
  },
  {
    country_iso_code: 'BH',
    state_code: 19,
    state_name: 'Al Wusta'
  },
  {
    country_iso_code: 'BI',
    state_code: '02',
    state_name: 'Bujumbura'
  },
  {
    country_iso_code: 'BI',
    state_code: '09',
    state_name: 'Bubanza'
  },
  {
    country_iso_code: 'BI',
    state_code: 10,
    state_name: 'Bururi'
  },
  {
    country_iso_code: 'BI',
    state_code: 11,
    state_name: 'Cankuzo'
  },
  {
    country_iso_code: 'BI',
    state_code: 12,
    state_name: 'Cibitoke'
  },
  {
    country_iso_code: 'BI',
    state_code: 13,
    state_name: 'Gitega'
  },
  {
    country_iso_code: 'BI',
    state_code: 14,
    state_name: 'Karuzi'
  },
  {
    country_iso_code: 'BI',
    state_code: 15,
    state_name: 'Kayanza'
  },
  {
    country_iso_code: 'BI',
    state_code: 16,
    state_name: 'Kirundo'
  },
  {
    country_iso_code: 'BI',
    state_code: 17,
    state_name: 'Makamba'
  },
  {
    country_iso_code: 'BI',
    state_code: 18,
    state_name: 'Muyinga'
  },
  {
    country_iso_code: 'BI',
    state_code: 19,
    state_name: 'Ngozi'
  },
  {
    country_iso_code: 'BI',
    state_code: 20,
    state_name: 'Rutana'
  },
  {
    country_iso_code: 'BI',
    state_code: 21,
    state_name: 'Ruyigi'
  },
  {
    country_iso_code: 'BI',
    state_code: 22,
    state_name: 'Muramvya'
  },
  {
    country_iso_code: 'BI',
    state_code: 23,
    state_name: 'Mwaro'
  },
  {
    country_iso_code: 'BJ',
    state_code: '07',
    state_name: 'Alibori'
  },
  {
    country_iso_code: 'BJ',
    state_code: '08',
    state_name: 'Atakora'
  },
  {
    country_iso_code: 'BJ',
    state_code: '09',
    state_name: 'Atlanyique'
  },
  {
    country_iso_code: 'BJ',
    state_code: 10,
    state_name: 'Borgou'
  },
  {
    country_iso_code: 'BJ',
    state_code: 11,
    state_name: 'Collines'
  },
  {
    country_iso_code: 'BJ',
    state_code: 12,
    state_name: 'Kouffo'
  },
  {
    country_iso_code: 'BJ',
    state_code: 13,
    state_name: 'Donga'
  },
  {
    country_iso_code: 'BJ',
    state_code: 14,
    state_name: 'Littoral'
  },
  {
    country_iso_code: 'BJ',
    state_code: 15,
    state_name: 'Mono'
  },
  {
    country_iso_code: 'BJ',
    state_code: 16,
    state_name: 'Oueme'
  },
  {
    country_iso_code: 'BJ',
    state_code: 17,
    state_name: 'Plateau'
  },
  {
    country_iso_code: 'BJ',
    state_code: 18,
    state_name: 'Zou'
  },
  {
    country_iso_code: 'BM',
    state_code: '01',
    state_name: 'Devonshire'
  },
  {
    country_iso_code: 'BM',
    state_code: '02',
    state_name: 'Hamilton'
  },
  {
    country_iso_code: 'BM',
    state_code: '03',
    state_name: 'Hamilton'
  },
  {
    country_iso_code: 'BM',
    state_code: '04',
    state_name: 'Paget'
  },
  {
    country_iso_code: 'BM',
    state_code: '05',
    state_name: 'Pembroke'
  },
  {
    country_iso_code: 'BM',
    state_code: '06',
    state_name: 'Saint George'
  },
  {
    country_iso_code: 'BM',
    state_code: '07',
    state_name: "Saint George's"
  },
  {
    country_iso_code: 'BM',
    state_code: '08',
    state_name: 'Sandys'
  },
  {
    country_iso_code: 'BM',
    state_code: '09',
    state_name: 'Smiths'
  },
  {
    country_iso_code: 'BM',
    state_code: 10,
    state_name: 'Southampton'
  },
  {
    country_iso_code: 'BM',
    state_code: 11,
    state_name: 'Warwick'
  },
  {
    country_iso_code: 'BN',
    state_code: '07',
    state_name: 'Alibori'
  },
  {
    country_iso_code: 'BN',
    state_code: '08',
    state_name: 'Belait'
  },
  {
    country_iso_code: 'BN',
    state_code: '09',
    state_name: 'Brunei and Muara'
  },
  {
    country_iso_code: 'BN',
    state_code: 10,
    state_name: 'Temburong'
  },
  {
    country_iso_code: 'BN',
    state_code: 11,
    state_name: 'Collines'
  },
  {
    country_iso_code: 'BN',
    state_code: 12,
    state_name: 'Kouffo'
  },
  {
    country_iso_code: 'BN',
    state_code: 13,
    state_name: 'Donga'
  },
  {
    country_iso_code: 'BN',
    state_code: 14,
    state_name: 'Littoral'
  },
  {
    country_iso_code: 'BN',
    state_code: 15,
    state_name: 'Tutong'
  },
  {
    country_iso_code: 'BN',
    state_code: 16,
    state_name: 'Oueme'
  },
  {
    country_iso_code: 'BN',
    state_code: 17,
    state_name: 'Plateau'
  },
  {
    country_iso_code: 'BN',
    state_code: 18,
    state_name: 'Zou'
  },
  {
    country_iso_code: 'BO',
    state_code: '01',
    state_name: 'Chuquisaca'
  },
  {
    country_iso_code: 'BO',
    state_code: '02',
    state_name: 'Cochabamba'
  },
  {
    country_iso_code: 'BO',
    state_code: '03',
    state_name: 'El Beni'
  },
  {
    country_iso_code: 'BO',
    state_code: '04',
    state_name: 'La Paz'
  },
  {
    country_iso_code: 'BO',
    state_code: '05',
    state_name: 'Oruro'
  },
  {
    country_iso_code: 'BO',
    state_code: '06',
    state_name: 'Pando'
  },
  {
    country_iso_code: 'BO',
    state_code: '07',
    state_name: 'Potosi'
  },
  {
    country_iso_code: 'BO',
    state_code: '08',
    state_name: 'Santa Cruz'
  },
  {
    country_iso_code: 'BO',
    state_code: '09',
    state_name: 'Tarija'
  },
  {
    country_iso_code: 'BR',
    state_code: '01',
    state_name: 'Acre'
  },
  {
    country_iso_code: 'BR',
    state_code: '02',
    state_name: 'Alagoas'
  },
  {
    country_iso_code: 'BR',
    state_code: '03',
    state_name: 'Amapa'
  },
  {
    country_iso_code: 'BR',
    state_code: '04',
    state_name: 'Amazonas'
  },
  {
    country_iso_code: 'BR',
    state_code: '05',
    state_name: 'Bahia'
  },
  {
    country_iso_code: 'BR',
    state_code: '06',
    state_name: 'Ceara'
  },
  {
    country_iso_code: 'BR',
    state_code: '07',
    state_name: 'Distrito Federal'
  },
  {
    country_iso_code: 'BR',
    state_code: '08',
    state_name: 'Espirito Santo'
  },
  {
    country_iso_code: 'BR',
    state_code: 11,
    state_name: 'Mato Grosso do Sul'
  },
  {
    country_iso_code: 'BR',
    state_code: 13,
    state_name: 'Maranhao'
  },
  {
    country_iso_code: 'BR',
    state_code: 14,
    state_name: 'Mato Grosso'
  },
  {
    country_iso_code: 'BR',
    state_code: 15,
    state_name: 'Minas Gerais'
  },
  {
    country_iso_code: 'BR',
    state_code: 16,
    state_name: 'Para'
  },
  {
    country_iso_code: 'BR',
    state_code: 17,
    state_name: 'Paraiba'
  },
  {
    country_iso_code: 'BR',
    state_code: 18,
    state_name: 'Parana'
  },
  {
    country_iso_code: 'BR',
    state_code: 20,
    state_name: 'Piaui'
  },
  {
    country_iso_code: 'BR',
    state_code: 21,
    state_name: 'Rio de Janeiro'
  },
  {
    country_iso_code: 'BR',
    state_code: 22,
    state_name: 'Rio Grande do Norte'
  },
  {
    country_iso_code: 'BR',
    state_code: 23,
    state_name: 'Rio Grande do Sul'
  },
  {
    country_iso_code: 'BR',
    state_code: 24,
    state_name: 'Rondonia'
  },
  {
    country_iso_code: 'BR',
    state_code: 25,
    state_name: 'Roraima'
  },
  {
    country_iso_code: 'BR',
    state_code: 26,
    state_name: 'Santa Catarina'
  },
  {
    country_iso_code: 'BR',
    state_code: 27,
    state_name: 'Sao Paulo'
  },
  {
    country_iso_code: 'BR',
    state_code: 28,
    state_name: 'Sergipe'
  },
  {
    country_iso_code: 'BR',
    state_code: 29,
    state_name: 'Goias'
  },
  {
    country_iso_code: 'BR',
    state_code: 30,
    state_name: 'Pernambuco'
  },
  {
    country_iso_code: 'BR',
    state_code: 31,
    state_name: 'Tocantins'
  },
  {
    country_iso_code: 'BS',
    state_code: '05',
    state_name: 'Bimini'
  },
  {
    country_iso_code: 'BS',
    state_code: '06',
    state_name: 'Cat Island'
  },
  {
    country_iso_code: 'BS',
    state_code: 10,
    state_name: 'Exuma'
  },
  {
    country_iso_code: 'BS',
    state_code: 13,
    state_name: 'Inagua'
  },
  {
    country_iso_code: 'BS',
    state_code: 15,
    state_name: 'Long Island'
  },
  {
    country_iso_code: 'BS',
    state_code: 16,
    state_name: 'Mayaguana'
  },
  {
    country_iso_code: 'BS',
    state_code: 18,
    state_name: 'Ragged Island'
  },
  {
    country_iso_code: 'BS',
    state_code: 22,
    state_name: 'Harbour Island'
  },
  {
    country_iso_code: 'BS',
    state_code: 23,
    state_name: 'New Providence'
  },
  {
    country_iso_code: 'BS',
    state_code: 24,
    state_name: 'Acklins and Crooked Islands'
  },
  {
    country_iso_code: 'BS',
    state_code: 25,
    state_name: 'Freeport'
  },
  {
    country_iso_code: 'BS',
    state_code: 26,
    state_name: 'Fresh Creek'
  },
  {
    country_iso_code: 'BS',
    state_code: 27,
    state_name: "Governor's Harbour"
  },
  {
    country_iso_code: 'BS',
    state_code: 28,
    state_name: 'Green Turtle Cay'
  },
  {
    country_iso_code: 'BS',
    state_code: 29,
    state_name: 'High Rock'
  },
  {
    country_iso_code: 'BS',
    state_code: 30,
    state_name: 'Kemps Bay'
  },
  {
    country_iso_code: 'BS',
    state_code: 31,
    state_name: 'Marsh Harbour'
  },
  {
    country_iso_code: 'BS',
    state_code: 32,
    state_name: 'Nichollstown and Berry Islands'
  },
  {
    country_iso_code: 'BS',
    state_code: 33,
    state_name: 'Rock Sound'
  },
  {
    country_iso_code: 'BS',
    state_code: 34,
    state_name: 'Sandy Point'
  },
  {
    country_iso_code: 'BS',
    state_code: 35,
    state_name: 'San Salvador and Rum Cay'
  },
  {
    country_iso_code: 'BT',
    state_code: '05',
    state_name: 'Bumthang'
  },
  {
    country_iso_code: 'BT',
    state_code: '06',
    state_name: 'Chhukha'
  },
  {
    country_iso_code: 'BT',
    state_code: '07',
    state_name: 'Chirang'
  },
  {
    country_iso_code: 'BT',
    state_code: '08',
    state_name: 'Daga'
  },
  {
    country_iso_code: 'BT',
    state_code: '09',
    state_name: 'Geylegphug'
  },
  {
    country_iso_code: 'BT',
    state_code: 10,
    state_name: 'Ha'
  },
  {
    country_iso_code: 'BT',
    state_code: 11,
    state_name: 'Lhuntshi'
  },
  {
    country_iso_code: 'BT',
    state_code: 12,
    state_name: 'Mongar'
  },
  {
    country_iso_code: 'BT',
    state_code: 13,
    state_name: 'Paro'
  },
  {
    country_iso_code: 'BT',
    state_code: 14,
    state_name: 'Pemagatsel'
  },
  {
    country_iso_code: 'BT',
    state_code: 15,
    state_name: 'Punakha'
  },
  {
    country_iso_code: 'BT',
    state_code: 16,
    state_name: 'Samchi'
  },
  {
    country_iso_code: 'BT',
    state_code: 17,
    state_name: 'Samdrup'
  },
  {
    country_iso_code: 'BT',
    state_code: 18,
    state_name: 'Shemgang'
  },
  {
    country_iso_code: 'BT',
    state_code: 19,
    state_name: 'Tashigang'
  },
  {
    country_iso_code: 'BT',
    state_code: 20,
    state_name: 'Thimphu'
  },
  {
    country_iso_code: 'BT',
    state_code: 21,
    state_name: 'Tongsa'
  },
  {
    country_iso_code: 'BT',
    state_code: 22,
    state_name: 'Wangdi Phodrang'
  },
  {
    country_iso_code: 'BW',
    state_code: '01',
    state_name: 'Central'
  },
  {
    country_iso_code: 'BW',
    state_code: '03',
    state_name: 'Ghanzi'
  },
  {
    country_iso_code: 'BW',
    state_code: '04',
    state_name: 'Kgalagadi'
  },
  {
    country_iso_code: 'BW',
    state_code: '05',
    state_name: 'Kgatleng'
  },
  {
    country_iso_code: 'BW',
    state_code: '06',
    state_name: 'Kweneng'
  },
  {
    country_iso_code: 'BW',
    state_code: '08',
    state_name: 'North-East'
  },
  {
    country_iso_code: 'BW',
    state_code: '09',
    state_name: 'South-East'
  },
  {
    country_iso_code: 'BW',
    state_code: 10,
    state_name: 'Southern'
  },
  {
    country_iso_code: 'BW',
    state_code: 11,
    state_name: 'North-West'
  },
  {
    country_iso_code: 'BY',
    state_code: '01',
    state_name: "Brestskaya Voblasts'"
  },
  {
    country_iso_code: 'BY',
    state_code: '02',
    state_name: "Homyel'skaya Voblasts'"
  },
  {
    country_iso_code: 'BY',
    state_code: '03',
    state_name: "Hrodzyenskaya Voblasts'"
  },
  {
    country_iso_code: 'BY',
    state_code: '04',
    state_name: 'Minsk'
  },
  {
    country_iso_code: 'BY',
    state_code: '05',
    state_name: "Minskaya Voblasts'"
  },
  {
    country_iso_code: 'BY',
    state_code: '06',
    state_name: "Mahilyowskaya Voblasts'"
  },
  {
    country_iso_code: 'BY',
    state_code: '07',
    state_name: "Vitsyebskaya Voblasts'"
  },
  {
    country_iso_code: 'BZ',
    state_code: '01',
    state_name: 'Belize'
  },
  {
    country_iso_code: 'BZ',
    state_code: '02',
    state_name: 'Cayo'
  },
  {
    country_iso_code: 'BZ',
    state_code: '03',
    state_name: 'Corozal'
  },
  {
    country_iso_code: 'BZ',
    state_code: '04',
    state_name: 'Orange Walk'
  },
  {
    country_iso_code: 'BZ',
    state_code: '05',
    state_name: 'Stann Creek'
  },
  {
    country_iso_code: 'BZ',
    state_code: '06',
    state_name: 'Toledo'
  },
  {
    country_iso_code: 'CA',
    state_code: 'AB',
    state_name: 'Alberta'
  },
  {
    country_iso_code: 'CA',
    state_code: 'BC',
    state_name: 'British Columbia'
  },
  {
    country_iso_code: 'CA',
    state_code: 'MB',
    state_name: 'Manitoba'
  },
  {
    country_iso_code: 'CA',
    state_code: 'NB',
    state_name: 'New Brunswick'
  },
  {
    country_iso_code: 'CA',
    state_code: 'NL',
    state_name: 'Newfoundland'
  },
  {
    country_iso_code: 'CA',
    state_code: 'NS',
    state_name: 'Nova Scotia'
  },
  {
    country_iso_code: 'CA',
    state_code: 'NT',
    state_name: 'Northwest Territories'
  },
  {
    country_iso_code: 'CA',
    state_code: 'NU',
    state_name: 'Nunavut'
  },
  {
    country_iso_code: 'CA',
    state_code: 'ON',
    state_name: 'Ontario'
  },
  {
    country_iso_code: 'CA',
    state_code: 'PE',
    state_name: 'Prince Edward Island'
  },
  {
    country_iso_code: 'CA',
    state_code: 'QC',
    state_name: 'Quebec'
  },
  {
    country_iso_code: 'CA',
    state_code: 'SK',
    state_name: 'Saskatchewan'
  },
  {
    country_iso_code: 'CA',
    state_code: 'YT',
    state_name: 'Yukon Territory'
  },
  {
    country_iso_code: 'CD',
    state_code: '01',
    state_name: 'Bandundu'
  },
  {
    country_iso_code: 'CD',
    state_code: '02',
    state_name: 'Equateur'
  },
  {
    country_iso_code: 'CD',
    state_code: '04',
    state_name: 'Kasai-Oriental'
  },
  {
    country_iso_code: 'CD',
    state_code: '05',
    state_name: 'Katanga'
  },
  {
    country_iso_code: 'CD',
    state_code: '06',
    state_name: 'Kinshasa'
  },
  {
    country_iso_code: 'CD',
    state_code: '08',
    state_name: 'Bas-Congo'
  },
  {
    country_iso_code: 'CD',
    state_code: '09',
    state_name: 'Orientale'
  },
  {
    country_iso_code: 'CD',
    state_code: 10,
    state_name: 'Maniema'
  },
  {
    country_iso_code: 'CD',
    state_code: 11,
    state_name: 'Nord-Kivu'
  },
  {
    country_iso_code: 'CD',
    state_code: 12,
    state_name: 'Sud-Kivu'
  },
  {
    country_iso_code: 'CF',
    state_code: '01',
    state_name: 'Bamingui-Bangoran'
  },
  {
    country_iso_code: 'CF',
    state_code: '02',
    state_name: 'Basse-Kotto'
  },
  {
    country_iso_code: 'CF',
    state_code: '03',
    state_name: 'Haute-Kotto'
  },
  {
    country_iso_code: 'CF',
    state_code: '04',
    state_name: 'Mambere-Kadei'
  },
  {
    country_iso_code: 'CF',
    state_code: '05',
    state_name: 'Haut-Mbomou'
  },
  {
    country_iso_code: 'CF',
    state_code: '06',
    state_name: 'Kemo'
  },
  {
    country_iso_code: 'CF',
    state_code: '07',
    state_name: 'Lobaye'
  },
  {
    country_iso_code: 'CF',
    state_code: '08',
    state_name: 'Mbomou'
  },
  {
    country_iso_code: 'CF',
    state_code: '09',
    state_name: 'Nana-Mambere'
  },
  {
    country_iso_code: 'CF',
    state_code: 11,
    state_name: 'Ouaka'
  },
  {
    country_iso_code: 'CF',
    state_code: 12,
    state_name: 'Ouham'
  },
  {
    country_iso_code: 'CF',
    state_code: 13,
    state_name: 'Ouham-Pende'
  },
  {
    country_iso_code: 'CF',
    state_code: 14,
    state_name: 'Cuvette-Ouest'
  },
  {
    country_iso_code: 'CF',
    state_code: 15,
    state_name: 'Nana-Grebizi'
  },
  {
    country_iso_code: 'CF',
    state_code: 16,
    state_name: 'Sangha-Mbaere'
  },
  {
    country_iso_code: 'CF',
    state_code: 17,
    state_name: 'Ombella-Mpoko'
  },
  {
    country_iso_code: 'CF',
    state_code: 18,
    state_name: 'Bangui'
  },
  {
    country_iso_code: 'CG',
    state_code: '01',
    state_name: 'Bouenza'
  },
  {
    country_iso_code: 'CG',
    state_code: '04',
    state_name: 'Kouilou'
  },
  {
    country_iso_code: 'CG',
    state_code: '05',
    state_name: 'Lekoumou'
  },
  {
    country_iso_code: 'CG',
    state_code: '06',
    state_name: 'Likouala'
  },
  {
    country_iso_code: 'CG',
    state_code: '07',
    state_name: 'Niari'
  },
  {
    country_iso_code: 'CG',
    state_code: '08',
    state_name: 'Plateaux'
  },
  {
    country_iso_code: 'CG',
    state_code: 10,
    state_name: 'Sangha'
  },
  {
    country_iso_code: 'CG',
    state_code: 11,
    state_name: 'Pool'
  },
  {
    country_iso_code: 'CG',
    state_code: 12,
    state_name: 'Brazzaville'
  },
  {
    country_iso_code: 'CG',
    state_code: 13,
    state_name: 'Cuvette'
  },
  {
    country_iso_code: 'CG',
    state_code: 14,
    state_name: 'Cuvette-Ouest'
  },
  {
    country_iso_code: 'CH',
    state_code: '01',
    state_name: 'Aargau'
  },
  {
    country_iso_code: 'CH',
    state_code: '02',
    state_name: 'Ausser-Rhoden'
  },
  {
    country_iso_code: 'CH',
    state_code: '03',
    state_name: 'Basel-Landschaft'
  },
  {
    country_iso_code: 'CH',
    state_code: '04',
    state_name: 'Basel-Stadt'
  },
  {
    country_iso_code: 'CH',
    state_code: '05',
    state_name: 'Bern'
  },
  {
    country_iso_code: 'CH',
    state_code: '06',
    state_name: 'Fribourg'
  },
  {
    country_iso_code: 'CH',
    state_code: '07',
    state_name: 'Geneve'
  },
  {
    country_iso_code: 'CH',
    state_code: '08',
    state_name: 'Glarus'
  },
  {
    country_iso_code: 'CH',
    state_code: '09',
    state_name: 'Graubunden'
  },
  {
    country_iso_code: 'CH',
    state_code: 10,
    state_name: 'Inner-Rhoden'
  },
  {
    country_iso_code: 'CH',
    state_code: 11,
    state_name: 'Luzern'
  },
  {
    country_iso_code: 'CH',
    state_code: 12,
    state_name: 'Neuchatel'
  },
  {
    country_iso_code: 'CH',
    state_code: 13,
    state_name: 'Nidwalden'
  },
  {
    country_iso_code: 'CH',
    state_code: 14,
    state_name: 'Obwalden'
  },
  {
    country_iso_code: 'CH',
    state_code: 15,
    state_name: 'Sankt Gallen'
  },
  {
    country_iso_code: 'CH',
    state_code: 16,
    state_name: 'Schaffhausen'
  },
  {
    country_iso_code: 'CH',
    state_code: 17,
    state_name: 'Schwyz'
  },
  {
    country_iso_code: 'CH',
    state_code: 18,
    state_name: 'Solothurn'
  },
  {
    country_iso_code: 'CH',
    state_code: 19,
    state_name: 'Thurgau'
  },
  {
    country_iso_code: 'CH',
    state_code: 20,
    state_name: 'Ticino'
  },
  {
    country_iso_code: 'CH',
    state_code: 21,
    state_name: 'Uri'
  },
  {
    country_iso_code: 'CH',
    state_code: 22,
    state_name: 'Valais'
  },
  {
    country_iso_code: 'CH',
    state_code: 23,
    state_name: 'Vaud'
  },
  {
    country_iso_code: 'CH',
    state_code: 24,
    state_name: 'Zug'
  },
  {
    country_iso_code: 'CH',
    state_code: 25,
    state_name: 'Zurich'
  },
  {
    country_iso_code: 'CH',
    state_code: 26,
    state_name: 'Jura'
  },
  {
    country_iso_code: 'CI',
    state_code: 74,
    state_name: 'Agneby'
  },
  {
    country_iso_code: 'CI',
    state_code: 75,
    state_name: 'Bafing'
  },
  {
    country_iso_code: 'CI',
    state_code: 76,
    state_name: 'Bas-Sassandra'
  },
  {
    country_iso_code: 'CI',
    state_code: 77,
    state_name: 'Denguele'
  },
  {
    country_iso_code: 'CI',
    state_code: 78,
    state_name: 'Dix-Huit Montagnes'
  },
  {
    country_iso_code: 'CI',
    state_code: 79,
    state_name: 'Fromager'
  },
  {
    country_iso_code: 'CI',
    state_code: 80,
    state_name: 'Haut-Sassandra'
  },
  {
    country_iso_code: 'CI',
    state_code: 81,
    state_name: 'Lacs'
  },
  {
    country_iso_code: 'CI',
    state_code: 82,
    state_name: 'Lagunes'
  },
  {
    country_iso_code: 'CI',
    state_code: 83,
    state_name: 'Marahoue'
  },
  {
    country_iso_code: 'CI',
    state_code: 84,
    state_name: 'Moyen-Cavally'
  },
  {
    country_iso_code: 'CI',
    state_code: 85,
    state_name: 'Moyen-Comoe'
  },
  {
    country_iso_code: 'CI',
    state_code: 86,
    state_name: "N'zi-Comoe"
  },
  {
    country_iso_code: 'CI',
    state_code: 87,
    state_name: 'Savanes'
  },
  {
    country_iso_code: 'CI',
    state_code: 88,
    state_name: 'Sud-Bandama'
  },
  {
    country_iso_code: 'CI',
    state_code: 89,
    state_name: 'Sud-Comoe'
  },
  {
    country_iso_code: 'CI',
    state_code: 90,
    state_name: 'Vallee du Bandama'
  },
  {
    country_iso_code: 'CI',
    state_code: 91,
    state_name: 'Worodougou'
  },
  {
    country_iso_code: 'CI',
    state_code: 92,
    state_name: 'Zanzan'
  },
  {
    country_iso_code: 'CL',
    state_code: '01',
    state_name: 'Valparaiso'
  },
  {
    country_iso_code: 'CL',
    state_code: '02',
    state_name: 'Aisen del General Carlos Ibanez del Campo'
  },
  {
    country_iso_code: 'CL',
    state_code: '03',
    state_name: 'Antofagasta'
  },
  {
    country_iso_code: 'CL',
    state_code: '04',
    state_name: 'Araucania'
  },
  {
    country_iso_code: 'CL',
    state_code: '05',
    state_name: 'Atacama'
  },
  {
    country_iso_code: 'CL',
    state_code: '06',
    state_name: 'Bio-Bio'
  },
  {
    country_iso_code: 'CL',
    state_code: '07',
    state_name: 'Coquimbo'
  },
  {
    country_iso_code: 'CL',
    state_code: '08',
    state_name: "Libertador General Bernardo O'Higgins"
  },
  {
    country_iso_code: 'CL',
    state_code: '09',
    state_name: 'Los Lagos'
  },
  {
    country_iso_code: 'CL',
    state_code: 10,
    state_name: 'Magallanes y de la Antartica Chilena'
  },
  {
    country_iso_code: 'CL',
    state_code: 11,
    state_name: 'Maule'
  },
  {
    country_iso_code: 'CL',
    state_code: 12,
    state_name: 'Region Metropolitana'
  },
  {
    country_iso_code: 'CL',
    state_code: 13,
    state_name: 'Tarapaca'
  },
  {
    country_iso_code: 'CL',
    state_code: 14,
    state_name: 'Los Lagos'
  },
  {
    country_iso_code: 'CL',
    state_code: 15,
    state_name: 'Tarapaca'
  },
  {
    country_iso_code: 'CL',
    state_code: 16,
    state_name: 'Arica y Parinacota'
  },
  {
    country_iso_code: 'CL',
    state_code: 17,
    state_name: 'Los Rios'
  },
  {
    country_iso_code: 'CM',
    state_code: '04',
    state_name: 'Est'
  },
  {
    country_iso_code: 'CM',
    state_code: '05',
    state_name: 'Littoral'
  },
  {
    country_iso_code: 'CM',
    state_code: '07',
    state_name: 'Nord-Ouest'
  },
  {
    country_iso_code: 'CM',
    state_code: '08',
    state_name: 'Ouest'
  },
  {
    country_iso_code: 'CM',
    state_code: '09',
    state_name: 'Sud-Ouest'
  },
  {
    country_iso_code: 'CM',
    state_code: 10,
    state_name: 'Adamaoua'
  },
  {
    country_iso_code: 'CM',
    state_code: 11,
    state_name: 'Centre'
  },
  {
    country_iso_code: 'CM',
    state_code: 12,
    state_name: 'Extreme-Nord'
  },
  {
    country_iso_code: 'CM',
    state_code: 13,
    state_name: 'Nord'
  },
  {
    country_iso_code: 'CM',
    state_code: 14,
    state_name: 'Sud'
  },
  {
    country_iso_code: 'CN',
    state_code: '01',
    state_name: 'Anhui'
  },
  {
    country_iso_code: 'CN',
    state_code: '02',
    state_name: 'Zhejiang'
  },
  {
    country_iso_code: 'CN',
    state_code: '03',
    state_name: 'Jiangxi'
  },
  {
    country_iso_code: 'CN',
    state_code: '04',
    state_name: 'Jiangsu'
  },
  {
    country_iso_code: 'CN',
    state_code: '05',
    state_name: 'Jilin'
  },
  {
    country_iso_code: 'CN',
    state_code: '06',
    state_name: 'Qinghai'
  },
  {
    country_iso_code: 'CN',
    state_code: '07',
    state_name: 'Fujian'
  },
  {
    country_iso_code: 'CN',
    state_code: '08',
    state_name: 'Heilongjiang'
  },
  {
    country_iso_code: 'CN',
    state_code: '09',
    state_name: 'Henan'
  },
  {
    country_iso_code: 'CN',
    state_code: 10,
    state_name: 'Hebei'
  },
  {
    country_iso_code: 'CN',
    state_code: 11,
    state_name: 'Hunan'
  },
  {
    country_iso_code: 'CN',
    state_code: 12,
    state_name: 'Hubei'
  },
  {
    country_iso_code: 'CN',
    state_code: 13,
    state_name: 'Xinjiang'
  },
  {
    country_iso_code: 'CN',
    state_code: 14,
    state_name: 'Xizang'
  },
  {
    country_iso_code: 'CN',
    state_code: 15,
    state_name: 'Gansu'
  },
  {
    country_iso_code: 'CN',
    state_code: 16,
    state_name: 'Guangxi'
  },
  {
    country_iso_code: 'CN',
    state_code: 18,
    state_name: 'Guizhou'
  },
  {
    country_iso_code: 'CN',
    state_code: 19,
    state_name: 'Liaoning'
  },
  {
    country_iso_code: 'CN',
    state_code: 20,
    state_name: 'Nei Mongol'
  },
  {
    country_iso_code: 'CN',
    state_code: 21,
    state_name: 'Ningxia'
  },
  {
    country_iso_code: 'CN',
    state_code: 22,
    state_name: 'Beijing'
  },
  {
    country_iso_code: 'CN',
    state_code: 23,
    state_name: 'Shanghai'
  },
  {
    country_iso_code: 'CN',
    state_code: 24,
    state_name: 'Shanxi'
  },
  {
    country_iso_code: 'CN',
    state_code: 25,
    state_name: 'Shandong'
  },
  {
    country_iso_code: 'CN',
    state_code: 26,
    state_name: 'Shaanxi'
  },
  {
    country_iso_code: 'CN',
    state_code: 28,
    state_name: 'Tianjin'
  },
  {
    country_iso_code: 'CN',
    state_code: 29,
    state_name: 'Yunnan'
  },
  {
    country_iso_code: 'CN',
    state_code: 30,
    state_name: 'Guangdong'
  },
  {
    country_iso_code: 'CN',
    state_code: 31,
    state_name: 'Hainan'
  },
  {
    country_iso_code: 'CN',
    state_code: 32,
    state_name: 'Sichuan'
  },
  {
    country_iso_code: 'CN',
    state_code: 33,
    state_name: 'Chongqing'
  },
  {
    country_iso_code: 'CO',
    state_code: '01',
    state_name: 'Amazonas'
  },
  {
    country_iso_code: 'CO',
    state_code: '02',
    state_name: 'Antioquia'
  },
  {
    country_iso_code: 'CO',
    state_code: '03',
    state_name: 'Arauca'
  },
  {
    country_iso_code: 'CO',
    state_code: '04',
    state_name: 'Atlantico'
  },
  {
    country_iso_code: 'CO',
    state_code: '08',
    state_name: 'Caqueta'
  },
  {
    country_iso_code: 'CO',
    state_code: '09',
    state_name: 'Cauca'
  },
  {
    country_iso_code: 'CO',
    state_code: 10,
    state_name: 'Cesar'
  },
  {
    country_iso_code: 'CO',
    state_code: 11,
    state_name: 'Choco'
  },
  {
    country_iso_code: 'CO',
    state_code: 12,
    state_name: 'Cordoba'
  },
  {
    country_iso_code: 'CO',
    state_code: 14,
    state_name: 'Guaviare'
  },
  {
    country_iso_code: 'CO',
    state_code: 15,
    state_name: 'Guainia'
  },
  {
    country_iso_code: 'CO',
    state_code: 16,
    state_name: 'Huila'
  },
  {
    country_iso_code: 'CO',
    state_code: 17,
    state_name: 'La Guajira'
  },
  {
    country_iso_code: 'CO',
    state_code: 19,
    state_name: 'Meta'
  },
  {
    country_iso_code: 'CO',
    state_code: 20,
    state_name: 'Narino'
  },
  {
    country_iso_code: 'CO',
    state_code: 21,
    state_name: 'Norte de Santander'
  },
  {
    country_iso_code: 'CO',
    state_code: 22,
    state_name: 'Putumayo'
  },
  {
    country_iso_code: 'CO',
    state_code: 23,
    state_name: 'Quindio'
  },
  {
    country_iso_code: 'CO',
    state_code: 24,
    state_name: 'Risaralda'
  },
  {
    country_iso_code: 'CO',
    state_code: 25,
    state_name: 'San Andres y Providencia'
  },
  {
    country_iso_code: 'CO',
    state_code: 26,
    state_name: 'Santander'
  },
  {
    country_iso_code: 'CO',
    state_code: 27,
    state_name: 'Sucre'
  },
  {
    country_iso_code: 'CO',
    state_code: 28,
    state_name: 'Tolima'
  },
  {
    country_iso_code: 'CO',
    state_code: 29,
    state_name: 'Valle del Cauca'
  },
  {
    country_iso_code: 'CO',
    state_code: 30,
    state_name: 'Vaupes'
  },
  {
    country_iso_code: 'CO',
    state_code: 31,
    state_name: 'Vichada'
  },
  {
    country_iso_code: 'CO',
    state_code: 32,
    state_name: 'Casanare'
  },
  {
    country_iso_code: 'CO',
    state_code: 33,
    state_name: 'Cundinamarca'
  },
  {
    country_iso_code: 'CO',
    state_code: 34,
    state_name: 'Distrito Especial'
  },
  {
    country_iso_code: 'CO',
    state_code: 35,
    state_name: 'Bolivar'
  },
  {
    country_iso_code: 'CO',
    state_code: 36,
    state_name: 'Boyaca'
  },
  {
    country_iso_code: 'CO',
    state_code: 37,
    state_name: 'Caldas'
  },
  {
    country_iso_code: 'CO',
    state_code: 38,
    state_name: 'Magdalena'
  },
  {
    country_iso_code: 'CR',
    state_code: '01',
    state_name: 'Alajuela'
  },
  {
    country_iso_code: 'CR',
    state_code: '02',
    state_name: 'Cartago'
  },
  {
    country_iso_code: 'CR',
    state_code: '03',
    state_name: 'Guanacaste'
  },
  {
    country_iso_code: 'CR',
    state_code: '04',
    state_name: 'Heredia'
  },
  {
    country_iso_code: 'CR',
    state_code: '06',
    state_name: 'Limon'
  },
  {
    country_iso_code: 'CR',
    state_code: '07',
    state_name: 'Puntarenas'
  },
  {
    country_iso_code: 'CR',
    state_code: '08',
    state_name: 'San Jose'
  },
  {
    country_iso_code: 'CU',
    state_code: '01',
    state_name: 'Pinar del Rio'
  },
  {
    country_iso_code: 'CU',
    state_code: '02',
    state_name: 'Ciudad de la Habana'
  },
  {
    country_iso_code: 'CU',
    state_code: '03',
    state_name: 'Matanzas'
  },
  {
    country_iso_code: 'CU',
    state_code: '04',
    state_name: 'Isla de la Juventud'
  },
  {
    country_iso_code: 'CU',
    state_code: '05',
    state_name: 'Camaguey'
  },
  {
    country_iso_code: 'CU',
    state_code: '07',
    state_name: 'Ciego de Avila'
  },
  {
    country_iso_code: 'CU',
    state_code: '08',
    state_name: 'Cienfuegos'
  },
  {
    country_iso_code: 'CU',
    state_code: '09',
    state_name: 'Granma'
  },
  {
    country_iso_code: 'CU',
    state_code: 10,
    state_name: 'Guantanamo'
  },
  {
    country_iso_code: 'CU',
    state_code: 11,
    state_name: 'La Habana'
  },
  {
    country_iso_code: 'CU',
    state_code: 12,
    state_name: 'Holguin'
  },
  {
    country_iso_code: 'CU',
    state_code: 13,
    state_name: 'Las Tunas'
  },
  {
    country_iso_code: 'CU',
    state_code: 14,
    state_name: 'Sancti Spiritus'
  },
  {
    country_iso_code: 'CU',
    state_code: 15,
    state_name: 'Santiago de Cuba'
  },
  {
    country_iso_code: 'CU',
    state_code: 16,
    state_name: 'Villa Clara'
  },
  {
    country_iso_code: 'CV',
    state_code: '01',
    state_name: 'Boa Vista'
  },
  {
    country_iso_code: 'CV',
    state_code: '02',
    state_name: 'Brava'
  },
  {
    country_iso_code: 'CV',
    state_code: '04',
    state_name: 'Maio'
  },
  {
    country_iso_code: 'CV',
    state_code: '05',
    state_name: 'Paul'
  },
  {
    country_iso_code: 'CV',
    state_code: '07',
    state_name: 'Ribeira Grande'
  },
  {
    country_iso_code: 'CV',
    state_code: '08',
    state_name: 'Sal'
  },
  {
    country_iso_code: 'CV',
    state_code: 10,
    state_name: 'Sao Nicolau'
  },
  {
    country_iso_code: 'CV',
    state_code: 11,
    state_name: 'Sao Vicente'
  },
  {
    country_iso_code: 'CV',
    state_code: 13,
    state_name: 'Mosteiros'
  },
  {
    country_iso_code: 'CV',
    state_code: 14,
    state_name: 'Praia'
  },
  {
    country_iso_code: 'CV',
    state_code: 15,
    state_name: 'Santa Catarina'
  },
  {
    country_iso_code: 'CV',
    state_code: 16,
    state_name: 'Santa Cruz'
  },
  {
    country_iso_code: 'CV',
    state_code: 17,
    state_name: 'Sao Domingos'
  },
  {
    country_iso_code: 'CV',
    state_code: 18,
    state_name: 'Sao Filipe'
  },
  {
    country_iso_code: 'CV',
    state_code: 19,
    state_name: 'Sao Miguel'
  },
  {
    country_iso_code: 'CV',
    state_code: 20,
    state_name: 'Tarrafal'
  },
  {
    country_iso_code: 'CY',
    state_code: '01',
    state_name: 'Famagusta'
  },
  {
    country_iso_code: 'CY',
    state_code: '02',
    state_name: 'Kyrenia'
  },
  {
    country_iso_code: 'CY',
    state_code: '03',
    state_name: 'Larnaca'
  },
  {
    country_iso_code: 'CY',
    state_code: '04',
    state_name: 'Nicosia'
  },
  {
    country_iso_code: 'CY',
    state_code: '05',
    state_name: 'Limassol'
  },
  {
    country_iso_code: 'CY',
    state_code: '06',
    state_name: 'Paphos'
  },
  {
    country_iso_code: 'CZ',
    state_code: 52,
    state_name: 'Hlavni mesto Praha'
  },
  {
    country_iso_code: 'CZ',
    state_code: 78,
    state_name: 'Jihomoravsky kraj'
  },
  {
    country_iso_code: 'CZ',
    state_code: 79,
    state_name: 'Jihocesky kraj'
  },
  {
    country_iso_code: 'CZ',
    state_code: 80,
    state_name: 'Vysocina'
  },
  {
    country_iso_code: 'CZ',
    state_code: 81,
    state_name: 'Karlovarsky kraj'
  },
  {
    country_iso_code: 'CZ',
    state_code: 82,
    state_name: 'Kralovehradecky kraj'
  },
  {
    country_iso_code: 'CZ',
    state_code: 83,
    state_name: 'Liberecky kraj'
  },
  {
    country_iso_code: 'CZ',
    state_code: 84,
    state_name: 'Olomoucky kraj'
  },
  {
    country_iso_code: 'CZ',
    state_code: 85,
    state_name: 'Moravskoslezsky kraj'
  },
  {
    country_iso_code: 'CZ',
    state_code: 86,
    state_name: 'Pardubicky kraj'
  },
  {
    country_iso_code: 'CZ',
    state_code: 87,
    state_name: 'Plzensky kraj'
  },
  {
    country_iso_code: 'CZ',
    state_code: 88,
    state_name: 'Stredocesky kraj'
  },
  {
    country_iso_code: 'CZ',
    state_code: 89,
    state_name: 'Ustecky kraj'
  },
  {
    country_iso_code: 'CZ',
    state_code: 90,
    state_name: 'Zlinsky kraj'
  },
  {
    country_iso_code: 'DE',
    state_code: '01',
    state_name: 'Baden-Wurttemberg'
  },
  {
    country_iso_code: 'DE',
    state_code: '02',
    state_name: 'Bayern'
  },
  {
    country_iso_code: 'DE',
    state_code: '03',
    state_name: 'Bremen'
  },
  {
    country_iso_code: 'DE',
    state_code: '04',
    state_name: 'Hamburg'
  },
  {
    country_iso_code: 'DE',
    state_code: '05',
    state_name: 'Hessen'
  },
  {
    country_iso_code: 'DE',
    state_code: '06',
    state_name: 'Niedersachsen'
  },
  {
    country_iso_code: 'DE',
    state_code: '07',
    state_name: 'Nordrhein-Westfalen'
  },
  {
    country_iso_code: 'DE',
    state_code: '08',
    state_name: 'Rheinland-Pfalz'
  },
  {
    country_iso_code: 'DE',
    state_code: '09',
    state_name: 'Saarland'
  },
  {
    country_iso_code: 'DE',
    state_code: 10,
    state_name: 'Schleswig-Holstein'
  },
  {
    country_iso_code: 'DE',
    state_code: 11,
    state_name: 'Brandenburg'
  },
  {
    country_iso_code: 'DE',
    state_code: 12,
    state_name: 'Mecklenburg-Vorpommern'
  },
  {
    country_iso_code: 'DE',
    state_code: 13,
    state_name: 'Sachsen'
  },
  {
    country_iso_code: 'DE',
    state_code: 14,
    state_name: 'Sachsen-Anhalt'
  },
  {
    country_iso_code: 'DE',
    state_code: 15,
    state_name: 'Thuringen'
  },
  {
    country_iso_code: 'DE',
    state_code: 16,
    state_name: 'Berlin'
  },
  {
    country_iso_code: 'DJ',
    state_code: '01',
    state_name: 'Ali Sabieh'
  },
  {
    country_iso_code: 'DJ',
    state_code: '04',
    state_name: 'Obock'
  },
  {
    country_iso_code: 'DJ',
    state_code: '05',
    state_name: 'Tadjoura'
  },
  {
    country_iso_code: 'DJ',
    state_code: '06',
    state_name: 'Dikhil'
  },
  {
    country_iso_code: 'DJ',
    state_code: '07',
    state_name: 'Djibouti'
  },
  {
    country_iso_code: 'DJ',
    state_code: '08',
    state_name: 'Arta'
  },
  {
    country_iso_code: 'DK',
    state_code: 17,
    state_name: 'Hovedstaden'
  },
  {
    country_iso_code: 'DK',
    state_code: 18,
    state_name: 'Midtjylland'
  },
  {
    country_iso_code: 'DK',
    state_code: 19,
    state_name: 'Nordjylland'
  },
  {
    country_iso_code: 'DK',
    state_code: 20,
    state_name: 'Sjelland'
  },
  {
    country_iso_code: 'DK',
    state_code: 21,
    state_name: 'Syddanmark'
  },
  {
    country_iso_code: 'DM',
    state_code: '02',
    state_name: 'Saint Andrew'
  },
  {
    country_iso_code: 'DM',
    state_code: '03',
    state_name: 'Saint David'
  },
  {
    country_iso_code: 'DM',
    state_code: '04',
    state_name: 'Saint George'
  },
  {
    country_iso_code: 'DM',
    state_code: '05',
    state_name: 'Saint John'
  },
  {
    country_iso_code: 'DM',
    state_code: '06',
    state_name: 'Saint Joseph'
  },
  {
    country_iso_code: 'DM',
    state_code: '07',
    state_name: 'Saint Luke'
  },
  {
    country_iso_code: 'DM',
    state_code: '08',
    state_name: 'Saint Mark'
  },
  {
    country_iso_code: 'DM',
    state_code: '09',
    state_name: 'Saint Patrick'
  },
  {
    country_iso_code: 'DM',
    state_code: 10,
    state_name: 'Saint Paul'
  },
  {
    country_iso_code: 'DM',
    state_code: 11,
    state_name: 'Saint Peter'
  },
  {
    country_iso_code: 'DO',
    state_code: '01',
    state_name: 'Azua'
  },
  {
    country_iso_code: 'DO',
    state_code: '02',
    state_name: 'Baoruco'
  },
  {
    country_iso_code: 'DO',
    state_code: '03',
    state_name: 'Barahona'
  },
  {
    country_iso_code: 'DO',
    state_code: '04',
    state_name: 'Dajabon'
  },
  {
    country_iso_code: 'DO',
    state_code: '05',
    state_name: 'Distrito Nacional'
  },
  {
    country_iso_code: 'DO',
    state_code: '06',
    state_name: 'Duarte'
  },
  {
    country_iso_code: 'DO',
    state_code: '08',
    state_name: 'Espaillat'
  },
  {
    country_iso_code: 'DO',
    state_code: '09',
    state_name: 'Independencia'
  },
  {
    country_iso_code: 'DO',
    state_code: 10,
    state_name: 'La Altagracia'
  },
  {
    country_iso_code: 'DO',
    state_code: 11,
    state_name: 'Elias Pina'
  },
  {
    country_iso_code: 'DO',
    state_code: 12,
    state_name: 'La Romana'
  },
  {
    country_iso_code: 'DO',
    state_code: 14,
    state_name: 'Maria Trinidad Sanchez'
  },
  {
    country_iso_code: 'DO',
    state_code: 15,
    state_name: 'Monte Cristi'
  },
  {
    country_iso_code: 'DO',
    state_code: 16,
    state_name: 'Pedernales'
  },
  {
    country_iso_code: 'DO',
    state_code: 17,
    state_name: 'Peravia'
  },
  {
    country_iso_code: 'DO',
    state_code: 18,
    state_name: 'Puerto Plata'
  },
  {
    country_iso_code: 'DO',
    state_code: 19,
    state_name: 'Salcedo'
  },
  {
    country_iso_code: 'DO',
    state_code: 20,
    state_name: 'Samana'
  },
  {
    country_iso_code: 'DO',
    state_code: 21,
    state_name: 'Sanchez Ramirez'
  },
  {
    country_iso_code: 'DO',
    state_code: 23,
    state_name: 'San Juan'
  },
  {
    country_iso_code: 'DO',
    state_code: 24,
    state_name: 'San Pedro De Macoris'
  },
  {
    country_iso_code: 'DO',
    state_code: 25,
    state_name: 'Santiago'
  },
  {
    country_iso_code: 'DO',
    state_code: 26,
    state_name: 'Santiago Rodriguez'
  },
  {
    country_iso_code: 'DO',
    state_code: 27,
    state_name: 'Valverde'
  },
  {
    country_iso_code: 'DO',
    state_code: 28,
    state_name: 'El Seibo'
  },
  {
    country_iso_code: 'DO',
    state_code: 29,
    state_name: 'Hato Mayor'
  },
  {
    country_iso_code: 'DO',
    state_code: 30,
    state_name: 'La Vega'
  },
  {
    country_iso_code: 'DO',
    state_code: 31,
    state_name: 'Monsenor Nouel'
  },
  {
    country_iso_code: 'DO',
    state_code: 32,
    state_name: 'Monte Plata'
  },
  {
    country_iso_code: 'DO',
    state_code: 33,
    state_name: 'San Cristobal'
  },
  {
    country_iso_code: 'DO',
    state_code: 34,
    state_name: 'Distrito Nacional'
  },
  {
    country_iso_code: 'DO',
    state_code: 35,
    state_name: 'Peravia'
  },
  {
    country_iso_code: 'DO',
    state_code: 36,
    state_name: 'San Jose de Ocoa'
  },
  {
    country_iso_code: 'DO',
    state_code: 37,
    state_name: 'Santo Domingo'
  },
  {
    country_iso_code: 'DZ',
    state_code: '01',
    state_name: 'Alger'
  },
  {
    country_iso_code: 'DZ',
    state_code: '03',
    state_name: 'Batna'
  },
  {
    country_iso_code: 'DZ',
    state_code: '04',
    state_name: 'Constantine'
  },
  {
    country_iso_code: 'DZ',
    state_code: '06',
    state_name: 'Medea'
  },
  {
    country_iso_code: 'DZ',
    state_code: '07',
    state_name: 'Mostaganem'
  },
  {
    country_iso_code: 'DZ',
    state_code: '09',
    state_name: 'Oran'
  },
  {
    country_iso_code: 'DZ',
    state_code: 10,
    state_name: 'Saida'
  },
  {
    country_iso_code: 'DZ',
    state_code: 12,
    state_name: 'Setif'
  },
  {
    country_iso_code: 'DZ',
    state_code: 13,
    state_name: 'Tiaret'
  },
  {
    country_iso_code: 'DZ',
    state_code: 14,
    state_name: 'Tizi Ouzou'
  },
  {
    country_iso_code: 'DZ',
    state_code: 15,
    state_name: 'Tlemcen'
  },
  {
    country_iso_code: 'DZ',
    state_code: 18,
    state_name: 'Bejaia'
  },
  {
    country_iso_code: 'DZ',
    state_code: 19,
    state_name: 'Biskra'
  },
  {
    country_iso_code: 'DZ',
    state_code: 20,
    state_name: 'Blida'
  },
  {
    country_iso_code: 'DZ',
    state_code: 21,
    state_name: 'Bouira'
  },
  {
    country_iso_code: 'DZ',
    state_code: 22,
    state_name: 'Djelfa'
  },
  {
    country_iso_code: 'DZ',
    state_code: 23,
    state_name: 'Guelma'
  },
  {
    country_iso_code: 'DZ',
    state_code: 24,
    state_name: 'Jijel'
  },
  {
    country_iso_code: 'DZ',
    state_code: 25,
    state_name: 'Laghouat'
  },
  {
    country_iso_code: 'DZ',
    state_code: 26,
    state_name: 'Mascara'
  },
  {
    country_iso_code: 'DZ',
    state_code: 27,
    state_name: "M'sila"
  },
  {
    country_iso_code: 'DZ',
    state_code: 29,
    state_name: 'Oum el Bouaghi'
  },
  {
    country_iso_code: 'DZ',
    state_code: 30,
    state_name: 'Sidi Bel Abbes'
  },
  {
    country_iso_code: 'DZ',
    state_code: 31,
    state_name: 'Skikda'
  },
  {
    country_iso_code: 'DZ',
    state_code: 33,
    state_name: 'Tebessa'
  },
  {
    country_iso_code: 'DZ',
    state_code: 34,
    state_name: 'Adrar'
  },
  {
    country_iso_code: 'DZ',
    state_code: 35,
    state_name: 'Ain Defla'
  },
  {
    country_iso_code: 'DZ',
    state_code: 36,
    state_name: 'Ain Temouchent'
  },
  {
    country_iso_code: 'DZ',
    state_code: 37,
    state_name: 'Annaba'
  },
  {
    country_iso_code: 'DZ',
    state_code: 38,
    state_name: 'Bechar'
  },
  {
    country_iso_code: 'DZ',
    state_code: 39,
    state_name: 'Bordj Bou Arreridj'
  },
  {
    country_iso_code: 'DZ',
    state_code: 40,
    state_name: 'Boumerdes'
  },
  {
    country_iso_code: 'DZ',
    state_code: 41,
    state_name: 'Chlef'
  },
  {
    country_iso_code: 'DZ',
    state_code: 42,
    state_name: 'El Bayadh'
  },
  {
    country_iso_code: 'DZ',
    state_code: 43,
    state_name: 'El Oued'
  },
  {
    country_iso_code: 'DZ',
    state_code: 44,
    state_name: 'El Tarf'
  },
  {
    country_iso_code: 'DZ',
    state_code: 45,
    state_name: 'Ghardaia'
  },
  {
    country_iso_code: 'DZ',
    state_code: 46,
    state_name: 'Illizi'
  },
  {
    country_iso_code: 'DZ',
    state_code: 47,
    state_name: 'Khenchela'
  },
  {
    country_iso_code: 'DZ',
    state_code: 48,
    state_name: 'Mila'
  },
  {
    country_iso_code: 'DZ',
    state_code: 49,
    state_name: 'Naama'
  },
  {
    country_iso_code: 'DZ',
    state_code: 50,
    state_name: 'Ouargla'
  },
  {
    country_iso_code: 'DZ',
    state_code: 51,
    state_name: 'Relizane'
  },
  {
    country_iso_code: 'DZ',
    state_code: 52,
    state_name: 'Souk Ahras'
  },
  {
    country_iso_code: 'DZ',
    state_code: 53,
    state_name: 'Tamanghasset'
  },
  {
    country_iso_code: 'DZ',
    state_code: 54,
    state_name: 'Tindouf'
  },
  {
    country_iso_code: 'DZ',
    state_code: 55,
    state_name: 'Tipaza'
  },
  {
    country_iso_code: 'DZ',
    state_code: 56,
    state_name: 'Tissemsilt'
  },
  {
    country_iso_code: 'EC',
    state_code: '01',
    state_name: 'Galapagos'
  },
  {
    country_iso_code: 'EC',
    state_code: '02',
    state_name: 'Azuay'
  },
  {
    country_iso_code: 'EC',
    state_code: '03',
    state_name: 'Bolivar'
  },
  {
    country_iso_code: 'EC',
    state_code: '04',
    state_name: 'Canar'
  },
  {
    country_iso_code: 'EC',
    state_code: '05',
    state_name: 'Carchi'
  },
  {
    country_iso_code: 'EC',
    state_code: '06',
    state_name: 'Chimborazo'
  },
  {
    country_iso_code: 'EC',
    state_code: '07',
    state_name: 'Cotopaxi'
  },
  {
    country_iso_code: 'EC',
    state_code: '08',
    state_name: 'El Oro'
  },
  {
    country_iso_code: 'EC',
    state_code: '09',
    state_name: 'Esmeraldas'
  },
  {
    country_iso_code: 'EC',
    state_code: 10,
    state_name: 'Guayas'
  },
  {
    country_iso_code: 'EC',
    state_code: 11,
    state_name: 'Imbabura'
  },
  {
    country_iso_code: 'EC',
    state_code: 12,
    state_name: 'Loja'
  },
  {
    country_iso_code: 'EC',
    state_code: 13,
    state_name: 'Los Rios'
  },
  {
    country_iso_code: 'EC',
    state_code: 14,
    state_name: 'Manabi'
  },
  {
    country_iso_code: 'EC',
    state_code: 15,
    state_name: 'Morona-Santiago'
  },
  {
    country_iso_code: 'EC',
    state_code: 17,
    state_name: 'Pastaza'
  },
  {
    country_iso_code: 'EC',
    state_code: 18,
    state_name: 'Pichincha'
  },
  {
    country_iso_code: 'EC',
    state_code: 19,
    state_name: 'Tungurahua'
  },
  {
    country_iso_code: 'EC',
    state_code: 20,
    state_name: 'Zamora-Chinchipe'
  },
  {
    country_iso_code: 'EC',
    state_code: 22,
    state_name: 'Sucumbios'
  },
  {
    country_iso_code: 'EC',
    state_code: 23,
    state_name: 'Napo'
  },
  {
    country_iso_code: 'EC',
    state_code: 24,
    state_name: 'Orellana'
  },
  {
    country_iso_code: 'EE',
    state_code: '01',
    state_name: 'Harjumaa'
  },
  {
    country_iso_code: 'EE',
    state_code: '02',
    state_name: 'Hiiumaa'
  },
  {
    country_iso_code: 'EE',
    state_code: '03',
    state_name: 'Ida-Virumaa'
  },
  {
    country_iso_code: 'EE',
    state_code: '04',
    state_name: 'Jarvamaa'
  },
  {
    country_iso_code: 'EE',
    state_code: '05',
    state_name: 'Jogevamaa'
  },
  {
    country_iso_code: 'EE',
    state_code: '06',
    state_name: 'Kohtla-Jarve'
  },
  {
    country_iso_code: 'EE',
    state_code: '07',
    state_name: 'Laanemaa'
  },
  {
    country_iso_code: 'EE',
    state_code: '08',
    state_name: 'Laane-Virumaa'
  },
  {
    country_iso_code: 'EE',
    state_code: '09',
    state_name: 'Narva'
  },
  {
    country_iso_code: 'EE',
    state_code: 10,
    state_name: 'Parnu'
  },
  {
    country_iso_code: 'EE',
    state_code: 11,
    state_name: 'Parnumaa'
  },
  {
    country_iso_code: 'EE',
    state_code: 12,
    state_name: 'Polvamaa'
  },
  {
    country_iso_code: 'EE',
    state_code: 13,
    state_name: 'Raplamaa'
  },
  {
    country_iso_code: 'EE',
    state_code: 14,
    state_name: 'Saaremaa'
  },
  {
    country_iso_code: 'EE',
    state_code: 15,
    state_name: 'Sillamae'
  },
  {
    country_iso_code: 'EE',
    state_code: 16,
    state_name: 'Tallinn'
  },
  {
    country_iso_code: 'EE',
    state_code: 17,
    state_name: 'Tartu'
  },
  {
    country_iso_code: 'EE',
    state_code: 18,
    state_name: 'Tartumaa'
  },
  {
    country_iso_code: 'EE',
    state_code: 19,
    state_name: 'Valgamaa'
  },
  {
    country_iso_code: 'EE',
    state_code: 20,
    state_name: 'Viljandimaa'
  },
  {
    country_iso_code: 'EE',
    state_code: 21,
    state_name: 'Vorumaa'
  },
  {
    country_iso_code: 'EG',
    state_code: '01',
    state_name: 'Ad Daqahliyah'
  },
  {
    country_iso_code: 'EG',
    state_code: '02',
    state_name: 'Al Bahr al Ahmar'
  },
  {
    country_iso_code: 'EG',
    state_code: '03',
    state_name: 'Al Buhayrah'
  },
  {
    country_iso_code: 'EG',
    state_code: '04',
    state_name: 'Al Fayyum'
  },
  {
    country_iso_code: 'EG',
    state_code: '05',
    state_name: 'Al Gharbiyah'
  },
  {
    country_iso_code: 'EG',
    state_code: '06',
    state_name: 'Al Iskandariyah'
  },
  {
    country_iso_code: 'EG',
    state_code: '07',
    state_name: "Al Isma'iliyah"
  },
  {
    country_iso_code: 'EG',
    state_code: '08',
    state_name: 'Al Jizah'
  },
  {
    country_iso_code: 'EG',
    state_code: '09',
    state_name: 'Al Minufiyah'
  },
  {
    country_iso_code: 'EG',
    state_code: 10,
    state_name: 'Al Minya'
  },
  {
    country_iso_code: 'EG',
    state_code: 11,
    state_name: 'Al Qahirah'
  },
  {
    country_iso_code: 'EG',
    state_code: 12,
    state_name: 'Al Qalyubiyah'
  },
  {
    country_iso_code: 'EG',
    state_code: 13,
    state_name: 'Al Wadi al Jadid'
  },
  {
    country_iso_code: 'EG',
    state_code: 14,
    state_name: 'Ash Sharqiyah'
  },
  {
    country_iso_code: 'EG',
    state_code: 15,
    state_name: 'As Suways'
  },
  {
    country_iso_code: 'EG',
    state_code: 16,
    state_name: 'Aswan'
  },
  {
    country_iso_code: 'EG',
    state_code: 17,
    state_name: 'Asyut'
  },
  {
    country_iso_code: 'EG',
    state_code: 18,
    state_name: 'Bani Suwayf'
  },
  {
    country_iso_code: 'EG',
    state_code: 19,
    state_name: "Bur Sa'id"
  },
  {
    country_iso_code: 'EG',
    state_code: 20,
    state_name: 'Dumyat'
  },
  {
    country_iso_code: 'EG',
    state_code: 21,
    state_name: 'Kafr ash Shaykh'
  },
  {
    country_iso_code: 'EG',
    state_code: 22,
    state_name: 'Matruh'
  },
  {
    country_iso_code: 'EG',
    state_code: 23,
    state_name: 'Qina'
  },
  {
    country_iso_code: 'EG',
    state_code: 24,
    state_name: 'Suhaj'
  },
  {
    country_iso_code: 'EG',
    state_code: 26,
    state_name: "Janub Sina'"
  },
  {
    country_iso_code: 'EG',
    state_code: 27,
    state_name: "Shamal Sina'"
  },
  {
    country_iso_code: 'EG',
    state_code: 28,
    state_name: 'Al Uqsur'
  },
  {
    country_iso_code: 'ER',
    state_code: '01',
    state_name: 'Anseba'
  },
  {
    country_iso_code: 'ER',
    state_code: '02',
    state_name: 'Debub'
  },
  {
    country_iso_code: 'ER',
    state_code: '03',
    state_name: "Debubawi K'eyih Bahri"
  },
  {
    country_iso_code: 'ER',
    state_code: '04',
    state_name: 'Gash Barka'
  },
  {
    country_iso_code: 'ER',
    state_code: '05',
    state_name: "Ma'akel"
  },
  {
    country_iso_code: 'ER',
    state_code: '06',
    state_name: "Semenawi K'eyih Bahri"
  },
  {
    country_iso_code: 'ES',
    state_code: '07',
    state_name: 'Islas Baleares'
  },
  {
    country_iso_code: 'ES',
    state_code: 27,
    state_name: 'La Rioja'
  },
  {
    country_iso_code: 'ES',
    state_code: 29,
    state_name: 'Madrid'
  },
  {
    country_iso_code: 'ES',
    state_code: 31,
    state_name: 'Murcia'
  },
  {
    country_iso_code: 'ES',
    state_code: 32,
    state_name: 'Navarra'
  },
  {
    country_iso_code: 'ES',
    state_code: 34,
    state_name: 'Asturias'
  },
  {
    country_iso_code: 'ES',
    state_code: 39,
    state_name: 'Cantabria'
  },
  {
    country_iso_code: 'ES',
    state_code: 51,
    state_name: 'Andalucia'
  },
  {
    country_iso_code: 'ES',
    state_code: 52,
    state_name: 'Aragon'
  },
  {
    country_iso_code: 'ES',
    state_code: 53,
    state_name: 'Canarias'
  },
  {
    country_iso_code: 'ES',
    state_code: 54,
    state_name: 'Castilla-La Mancha'
  },
  {
    country_iso_code: 'ES',
    state_code: 55,
    state_name: 'Castilla y Leon'
  },
  {
    country_iso_code: 'ES',
    state_code: 56,
    state_name: 'Catalonia'
  },
  {
    country_iso_code: 'ES',
    state_code: 57,
    state_name: 'Extremadura'
  },
  {
    country_iso_code: 'ES',
    state_code: 58,
    state_name: 'Galicia'
  },
  {
    country_iso_code: 'ES',
    state_code: 59,
    state_name: 'Pais Vasco'
  },
  {
    country_iso_code: 'ES',
    state_code: 60,
    state_name: 'Comunidad Valenciana'
  },
  {
    country_iso_code: 'ET',
    state_code: 44,
    state_name: 'Adis Abeba'
  },
  {
    country_iso_code: 'ET',
    state_code: 45,
    state_name: 'Afar'
  },
  {
    country_iso_code: 'ET',
    state_code: 46,
    state_name: 'Amara'
  },
  {
    country_iso_code: 'ET',
    state_code: 47,
    state_name: 'Binshangul Gumuz'
  },
  {
    country_iso_code: 'ET',
    state_code: 48,
    state_name: 'Dire Dawa'
  },
  {
    country_iso_code: 'ET',
    state_code: 49,
    state_name: 'Gambela Hizboch'
  },
  {
    country_iso_code: 'ET',
    state_code: 50,
    state_name: 'Hareri Hizb'
  },
  {
    country_iso_code: 'ET',
    state_code: 51,
    state_name: 'Oromiya'
  },
  {
    country_iso_code: 'ET',
    state_code: 52,
    state_name: 'Sumale'
  },
  {
    country_iso_code: 'ET',
    state_code: 53,
    state_name: 'Tigray'
  },
  {
    country_iso_code: 'ET',
    state_code: 54,
    state_name: 'YeDebub Biheroch Bihereseboch na Hizboch'
  },
  {
    country_iso_code: 'FI',
    state_code: '01',
    state_name: 'Aland'
  },
  {
    country_iso_code: 'FI',
    state_code: '06',
    state_name: 'Lapland'
  },
  {
    country_iso_code: 'FI',
    state_code: '08',
    state_name: 'Oulu'
  },
  {
    country_iso_code: 'FI',
    state_code: 13,
    state_name: 'Southern Finland'
  },
  {
    country_iso_code: 'FI',
    state_code: 14,
    state_name: 'Eastern Finland'
  },
  {
    country_iso_code: 'FI',
    state_code: 15,
    state_name: 'Western Finland'
  },
  {
    country_iso_code: 'FJ',
    state_code: '01',
    state_name: 'Central'
  },
  {
    country_iso_code: 'FJ',
    state_code: '02',
    state_name: 'Eastern'
  },
  {
    country_iso_code: 'FJ',
    state_code: '03',
    state_name: 'Northern'
  },
  {
    country_iso_code: 'FJ',
    state_code: '04',
    state_name: 'Rotuma'
  },
  {
    country_iso_code: 'FJ',
    state_code: '05',
    state_name: 'Western'
  },
  {
    country_iso_code: 'FM',
    state_code: '01',
    state_name: 'Kosrae'
  },
  {
    country_iso_code: 'FM',
    state_code: '02',
    state_name: 'Pohnpei'
  },
  {
    country_iso_code: 'FM',
    state_code: '03',
    state_name: 'Chuuk'
  },
  {
    country_iso_code: 'FM',
    state_code: '04',
    state_name: 'Yap'
  },
  {
    country_iso_code: 'FR',
    state_code: 97,
    state_name: 'Aquitaine'
  },
  {
    country_iso_code: 'FR',
    state_code: 98,
    state_name: 'Auvergne'
  },
  {
    country_iso_code: 'FR',
    state_code: 99,
    state_name: 'Basse-Normandie'
  },
  {
    country_iso_code: 'FR',
    state_code: 'A1',
    state_name: 'Bourgogne'
  },
  {
    country_iso_code: 'FR',
    state_code: 'A2',
    state_name: 'Bretagne'
  },
  {
    country_iso_code: 'FR',
    state_code: 'A3',
    state_name: 'Centre'
  },
  {
    country_iso_code: 'FR',
    state_code: 'A4',
    state_name: 'Champagne-Ardenne'
  },
  {
    country_iso_code: 'FR',
    state_code: 'A5',
    state_name: 'Corse'
  },
  {
    country_iso_code: 'FR',
    state_code: 'A6',
    state_name: 'Franche-Comte'
  },
  {
    country_iso_code: 'FR',
    state_code: 'A7',
    state_name: 'Haute-Normandie'
  },
  {
    country_iso_code: 'FR',
    state_code: 'A8',
    state_name: 'Ile-de-France'
  },
  {
    country_iso_code: 'FR',
    state_code: 'A9',
    state_name: 'Languedoc-Roussillon'
  },
  {
    country_iso_code: 'FR',
    state_code: 'B1',
    state_name: 'Limousin'
  },
  {
    country_iso_code: 'FR',
    state_code: 'B2',
    state_name: 'Lorraine'
  },
  {
    country_iso_code: 'FR',
    state_code: 'B3',
    state_name: 'Midi-Pyrenees'
  },
  {
    country_iso_code: 'FR',
    state_code: 'B4',
    state_name: 'Nord-Pas-de-Calais'
  },
  {
    country_iso_code: 'FR',
    state_code: 'B5',
    state_name: 'Pays de la Loire'
  },
  {
    country_iso_code: 'FR',
    state_code: 'B6',
    state_name: 'Picardie'
  },
  {
    country_iso_code: 'FR',
    state_code: 'B7',
    state_name: 'Poitou-Charentes'
  },
  {
    country_iso_code: 'FR',
    state_code: 'B8',
    state_name: "Provence-Alpes-Cote d'Azur"
  },
  {
    country_iso_code: 'FR',
    state_code: 'B9',
    state_name: 'Rhone-Alpes'
  },
  {
    country_iso_code: 'FR',
    state_code: 'C1',
    state_name: 'Alsace'
  },
  {
    country_iso_code: 'GA',
    state_code: '01',
    state_name: 'Estuaire'
  },
  {
    country_iso_code: 'GA',
    state_code: '02',
    state_name: 'Haut-Ogooue'
  },
  {
    country_iso_code: 'GA',
    state_code: '03',
    state_name: 'Moyen-Ogooue'
  },
  {
    country_iso_code: 'GA',
    state_code: '04',
    state_name: 'Ngounie'
  },
  {
    country_iso_code: 'GA',
    state_code: '05',
    state_name: 'Nyanga'
  },
  {
    country_iso_code: 'GA',
    state_code: '06',
    state_name: 'Ogooue-Ivindo'
  },
  {
    country_iso_code: 'GA',
    state_code: '07',
    state_name: 'Ogooue-Lolo'
  },
  {
    country_iso_code: 'GA',
    state_code: '08',
    state_name: 'Ogooue-Maritime'
  },
  {
    country_iso_code: 'GA',
    state_code: '09',
    state_name: 'Woleu-Ntem'
  },
  {
    country_iso_code: 'GB',
    state_code: 'A1',
    state_name: 'Barking and Dagenham'
  },
  {
    country_iso_code: 'GB',
    state_code: 'A2',
    state_name: 'Barnet'
  },
  {
    country_iso_code: 'GB',
    state_code: 'A3',
    state_name: 'Barnsley'
  },
  {
    country_iso_code: 'GB',
    state_code: 'A4',
    state_name: 'Bath and North East Somerset'
  },
  {
    country_iso_code: 'GB',
    state_code: 'A5',
    state_name: 'Bedfordshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'A6',
    state_name: 'Bexley'
  },
  {
    country_iso_code: 'GB',
    state_code: 'A7',
    state_name: 'Birmingham'
  },
  {
    country_iso_code: 'GB',
    state_code: 'A8',
    state_name: 'Blackburn with Darwen'
  },
  {
    country_iso_code: 'GB',
    state_code: 'A9',
    state_name: 'Blackpool'
  },
  {
    country_iso_code: 'GB',
    state_code: 'B1',
    state_name: 'Bolton'
  },
  {
    country_iso_code: 'GB',
    state_code: 'B2',
    state_name: 'Bournemouth'
  },
  {
    country_iso_code: 'GB',
    state_code: 'B3',
    state_name: 'Bracknell Forest'
  },
  {
    country_iso_code: 'GB',
    state_code: 'B4',
    state_name: 'Bradford'
  },
  {
    country_iso_code: 'GB',
    state_code: 'B5',
    state_name: 'Brent'
  },
  {
    country_iso_code: 'GB',
    state_code: 'B6',
    state_name: 'Brighton and Hove'
  },
  {
    country_iso_code: 'GB',
    state_code: 'B7',
    state_name: 'Bristol, City of'
  },
  {
    country_iso_code: 'GB',
    state_code: 'B8',
    state_name: 'Bromley'
  },
  {
    country_iso_code: 'GB',
    state_code: 'B9',
    state_name: 'Buckinghamshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'C1',
    state_name: 'Bury'
  },
  {
    country_iso_code: 'GB',
    state_code: 'C2',
    state_name: 'Calderdale'
  },
  {
    country_iso_code: 'GB',
    state_code: 'C3',
    state_name: 'Cambridgeshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'C4',
    state_name: 'Camden'
  },
  {
    country_iso_code: 'GB',
    state_code: 'C5',
    state_name: 'Cheshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'C6',
    state_name: 'Cornwall'
  },
  {
    country_iso_code: 'GB',
    state_code: 'C7',
    state_name: 'Coventry'
  },
  {
    country_iso_code: 'GB',
    state_code: 'C8',
    state_name: 'Croydon'
  },
  {
    country_iso_code: 'GB',
    state_code: 'C9',
    state_name: 'Cumbria'
  },
  {
    country_iso_code: 'GB',
    state_code: 'D1',
    state_name: 'Darlington'
  },
  {
    country_iso_code: 'GB',
    state_code: 'D2',
    state_name: 'Derby'
  },
  {
    country_iso_code: 'GB',
    state_code: 'D3',
    state_name: 'Derbyshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'D4',
    state_name: 'Devon'
  },
  {
    country_iso_code: 'GB',
    state_code: 'D5',
    state_name: 'Doncaster'
  },
  {
    country_iso_code: 'GB',
    state_code: 'D6',
    state_name: 'Dorset'
  },
  {
    country_iso_code: 'GB',
    state_code: 'D7',
    state_name: 'Dudley'
  },
  {
    country_iso_code: 'GB',
    state_code: 'D8',
    state_name: 'Durham'
  },
  {
    country_iso_code: 'GB',
    state_code: 'D9',
    state_name: 'Ealing'
  },
  {
    country_iso_code: 'GB',
    state_code: 'E1',
    state_name: 'East Riding of Yorkshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'E2',
    state_name: 'East Sussex'
  },
  {
    country_iso_code: 'GB',
    state_code: 'E3',
    state_name: 'Enfield'
  },
  {
    country_iso_code: 'GB',
    state_code: 'E4',
    state_name: 'Essex'
  },
  {
    country_iso_code: 'GB',
    state_code: 'E5',
    state_name: 'Gateshead'
  },
  {
    country_iso_code: 'GB',
    state_code: 'E6',
    state_name: 'Gloucestershire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'E7',
    state_name: 'Greenwich'
  },
  {
    country_iso_code: 'GB',
    state_code: 'E8',
    state_name: 'Hackney'
  },
  {
    country_iso_code: 'GB',
    state_code: 'E9',
    state_name: 'Halton'
  },
  {
    country_iso_code: 'GB',
    state_code: 'F1',
    state_name: 'Hammersmith and Fulham'
  },
  {
    country_iso_code: 'GB',
    state_code: 'F2',
    state_name: 'Hampshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'F3',
    state_name: 'Haringey'
  },
  {
    country_iso_code: 'GB',
    state_code: 'F4',
    state_name: 'Harrow'
  },
  {
    country_iso_code: 'GB',
    state_code: 'F5',
    state_name: 'Hartlepool'
  },
  {
    country_iso_code: 'GB',
    state_code: 'F6',
    state_name: 'Havering'
  },
  {
    country_iso_code: 'GB',
    state_code: 'F7',
    state_name: 'Herefordshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'F8',
    state_name: 'Hertford'
  },
  {
    country_iso_code: 'GB',
    state_code: 'F9',
    state_name: 'Hillingdon'
  },
  {
    country_iso_code: 'GB',
    state_code: 'G1',
    state_name: 'Hounslow'
  },
  {
    country_iso_code: 'GB',
    state_code: 'G2',
    state_name: 'Isle of Wight'
  },
  {
    country_iso_code: 'GB',
    state_code: 'G3',
    state_name: 'Islington'
  },
  {
    country_iso_code: 'GB',
    state_code: 'G4',
    state_name: 'Kensington and Chelsea'
  },
  {
    country_iso_code: 'GB',
    state_code: 'G5',
    state_name: 'Kent'
  },
  {
    country_iso_code: 'GB',
    state_code: 'G6',
    state_name: 'Kingston upon Hull, City of'
  },
  {
    country_iso_code: 'GB',
    state_code: 'G7',
    state_name: 'Kingston upon Thames'
  },
  {
    country_iso_code: 'GB',
    state_code: 'G8',
    state_name: 'Kirklees'
  },
  {
    country_iso_code: 'GB',
    state_code: 'G9',
    state_name: 'Knowsley'
  },
  {
    country_iso_code: 'GB',
    state_code: 'H1',
    state_name: 'Lambeth'
  },
  {
    country_iso_code: 'GB',
    state_code: 'H2',
    state_name: 'Lancashire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'H3',
    state_name: 'Leeds'
  },
  {
    country_iso_code: 'GB',
    state_code: 'H4',
    state_name: 'Leicester'
  },
  {
    country_iso_code: 'GB',
    state_code: 'H5',
    state_name: 'Leicestershire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'H6',
    state_name: 'Lewisham'
  },
  {
    country_iso_code: 'GB',
    state_code: 'H7',
    state_name: 'Lincolnshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'H8',
    state_name: 'Liverpool'
  },
  {
    country_iso_code: 'GB',
    state_code: 'H9',
    state_name: 'London, City of'
  },
  {
    country_iso_code: 'GB',
    state_code: 'I1',
    state_name: 'Luton'
  },
  {
    country_iso_code: 'GB',
    state_code: 'I2',
    state_name: 'Manchester'
  },
  {
    country_iso_code: 'GB',
    state_code: 'I3',
    state_name: 'Medway'
  },
  {
    country_iso_code: 'GB',
    state_code: 'I4',
    state_name: 'Merton'
  },
  {
    country_iso_code: 'GB',
    state_code: 'I5',
    state_name: 'Middlesbrough'
  },
  {
    country_iso_code: 'GB',
    state_code: 'I6',
    state_name: 'Milton Keynes'
  },
  {
    country_iso_code: 'GB',
    state_code: 'I7',
    state_name: 'Newcastle upon Tyne'
  },
  {
    country_iso_code: 'GB',
    state_code: 'I8',
    state_name: 'Newham'
  },
  {
    country_iso_code: 'GB',
    state_code: 'I9',
    state_name: 'Norfolk'
  },
  {
    country_iso_code: 'GB',
    state_code: 'J1',
    state_name: 'Northamptonshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'J2',
    state_name: 'North East Lincolnshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'J3',
    state_name: 'North Lincolnshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'J4',
    state_name: 'North Somerset'
  },
  {
    country_iso_code: 'GB',
    state_code: 'J5',
    state_name: 'North Tyneside'
  },
  {
    country_iso_code: 'GB',
    state_code: 'J6',
    state_name: 'Northumberland'
  },
  {
    country_iso_code: 'GB',
    state_code: 'J7',
    state_name: 'North Yorkshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'J8',
    state_name: 'Nottingham'
  },
  {
    country_iso_code: 'GB',
    state_code: 'J9',
    state_name: 'Nottinghamshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'K1',
    state_name: 'Oldham'
  },
  {
    country_iso_code: 'GB',
    state_code: 'K2',
    state_name: 'Oxfordshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'K3',
    state_name: 'Peterborough'
  },
  {
    country_iso_code: 'GB',
    state_code: 'K4',
    state_name: 'Plymouth'
  },
  {
    country_iso_code: 'GB',
    state_code: 'K5',
    state_name: 'Poole'
  },
  {
    country_iso_code: 'GB',
    state_code: 'K6',
    state_name: 'Portsmouth'
  },
  {
    country_iso_code: 'GB',
    state_code: 'K7',
    state_name: 'Reading'
  },
  {
    country_iso_code: 'GB',
    state_code: 'K8',
    state_name: 'Redbridge'
  },
  {
    country_iso_code: 'GB',
    state_code: 'K9',
    state_name: 'Redcar and Cleveland'
  },
  {
    country_iso_code: 'GB',
    state_code: 'L1',
    state_name: 'Richmond upon Thames'
  },
  {
    country_iso_code: 'GB',
    state_code: 'L2',
    state_name: 'Rochdale'
  },
  {
    country_iso_code: 'GB',
    state_code: 'L3',
    state_name: 'Rotherham'
  },
  {
    country_iso_code: 'GB',
    state_code: 'L4',
    state_name: 'Rutland'
  },
  {
    country_iso_code: 'GB',
    state_code: 'L5',
    state_name: 'Salford'
  },
  {
    country_iso_code: 'GB',
    state_code: 'L6',
    state_name: 'Shropshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'L7',
    state_name: 'Sandwell'
  },
  {
    country_iso_code: 'GB',
    state_code: 'L8',
    state_name: 'Sefton'
  },
  {
    country_iso_code: 'GB',
    state_code: 'L9',
    state_name: 'Sheffield'
  },
  {
    country_iso_code: 'GB',
    state_code: 'M1',
    state_name: 'Slough'
  },
  {
    country_iso_code: 'GB',
    state_code: 'M2',
    state_name: 'Solihull'
  },
  {
    country_iso_code: 'GB',
    state_code: 'M3',
    state_name: 'Somerset'
  },
  {
    country_iso_code: 'GB',
    state_code: 'M4',
    state_name: 'Southampton'
  },
  {
    country_iso_code: 'GB',
    state_code: 'M5',
    state_name: 'Southend-on-Sea'
  },
  {
    country_iso_code: 'GB',
    state_code: 'M6',
    state_name: 'South Gloucestershire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'M7',
    state_name: 'South Tyneside'
  },
  {
    country_iso_code: 'GB',
    state_code: 'M8',
    state_name: 'Southwark'
  },
  {
    country_iso_code: 'GB',
    state_code: 'M9',
    state_name: 'Staffordshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'N1',
    state_name: 'St. Helens'
  },
  {
    country_iso_code: 'GB',
    state_code: 'N2',
    state_name: 'Stockport'
  },
  {
    country_iso_code: 'GB',
    state_code: 'N3',
    state_name: 'Stockton-on-Tees'
  },
  {
    country_iso_code: 'GB',
    state_code: 'N4',
    state_name: 'Stoke-on-Trent'
  },
  {
    country_iso_code: 'GB',
    state_code: 'N5',
    state_name: 'Suffolk'
  },
  {
    country_iso_code: 'GB',
    state_code: 'N6',
    state_name: 'Sunderland'
  },
  {
    country_iso_code: 'GB',
    state_code: 'N7',
    state_name: 'Surrey'
  },
  {
    country_iso_code: 'GB',
    state_code: 'N8',
    state_name: 'Sutton'
  },
  {
    country_iso_code: 'GB',
    state_code: 'N9',
    state_name: 'Swindon'
  },
  {
    country_iso_code: 'GB',
    state_code: 'O1',
    state_name: 'Tameside'
  },
  {
    country_iso_code: 'GB',
    state_code: 'O2',
    state_name: 'Telford and Wrekin'
  },
  {
    country_iso_code: 'GB',
    state_code: 'O3',
    state_name: 'Thurrock'
  },
  {
    country_iso_code: 'GB',
    state_code: 'O4',
    state_name: 'Torbay'
  },
  {
    country_iso_code: 'GB',
    state_code: 'O5',
    state_name: 'Tower Hamlets'
  },
  {
    country_iso_code: 'GB',
    state_code: 'O6',
    state_name: 'Trafford'
  },
  {
    country_iso_code: 'GB',
    state_code: 'O7',
    state_name: 'Wakefield'
  },
  {
    country_iso_code: 'GB',
    state_code: 'O8',
    state_name: 'Walsall'
  },
  {
    country_iso_code: 'GB',
    state_code: 'O9',
    state_name: 'Waltham Forest'
  },
  {
    country_iso_code: 'GB',
    state_code: 'P1',
    state_name: 'Wandsworth'
  },
  {
    country_iso_code: 'GB',
    state_code: 'P2',
    state_name: 'Warrington'
  },
  {
    country_iso_code: 'GB',
    state_code: 'P3',
    state_name: 'Warwickshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'P4',
    state_name: 'West Berkshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'P5',
    state_name: 'Westminster'
  },
  {
    country_iso_code: 'GB',
    state_code: 'P6',
    state_name: 'West Sussex'
  },
  {
    country_iso_code: 'GB',
    state_code: 'P7',
    state_name: 'Wigan'
  },
  {
    country_iso_code: 'GB',
    state_code: 'P8',
    state_name: 'Wiltshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'P9',
    state_name: 'Windsor and Maidenhead'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Q1',
    state_name: 'Wirral'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Q2',
    state_name: 'Wokingham'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Q3',
    state_name: 'Wolverhampton'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Q4',
    state_name: 'Worcestershire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Q5',
    state_name: 'York'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Q6',
    state_name: 'Antrim'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Q7',
    state_name: 'Ards'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Q8',
    state_name: 'Armagh'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Q9',
    state_name: 'Ballymena'
  },
  {
    country_iso_code: 'GB',
    state_code: 'R1',
    state_name: 'Ballymoney'
  },
  {
    country_iso_code: 'GB',
    state_code: 'R2',
    state_name: 'Banbridge'
  },
  {
    country_iso_code: 'GB',
    state_code: 'R3',
    state_name: 'Belfast'
  },
  {
    country_iso_code: 'GB',
    state_code: 'R4',
    state_name: 'Carrickfergus'
  },
  {
    country_iso_code: 'GB',
    state_code: 'R5',
    state_name: 'Castlereagh'
  },
  {
    country_iso_code: 'GB',
    state_code: 'R6',
    state_name: 'Coleraine'
  },
  {
    country_iso_code: 'GB',
    state_code: 'R7',
    state_name: 'Cookstown'
  },
  {
    country_iso_code: 'GB',
    state_code: 'R8',
    state_name: 'Craigavon'
  },
  {
    country_iso_code: 'GB',
    state_code: 'R9',
    state_name: 'Down'
  },
  {
    country_iso_code: 'GB',
    state_code: 'S1',
    state_name: 'Dungannon'
  },
  {
    country_iso_code: 'GB',
    state_code: 'S2',
    state_name: 'Fermanagh'
  },
  {
    country_iso_code: 'GB',
    state_code: 'S3',
    state_name: 'Larne'
  },
  {
    country_iso_code: 'GB',
    state_code: 'S4',
    state_name: 'Limavady'
  },
  {
    country_iso_code: 'GB',
    state_code: 'S5',
    state_name: 'Lisburn'
  },
  {
    country_iso_code: 'GB',
    state_code: 'S6',
    state_name: 'Derry'
  },
  {
    country_iso_code: 'GB',
    state_code: 'S7',
    state_name: 'Magherafelt'
  },
  {
    country_iso_code: 'GB',
    state_code: 'S8',
    state_name: 'Moyle'
  },
  {
    country_iso_code: 'GB',
    state_code: 'S9',
    state_name: 'Newry and Mourne'
  },
  {
    country_iso_code: 'GB',
    state_code: 'T1',
    state_name: 'Newtownabbey'
  },
  {
    country_iso_code: 'GB',
    state_code: 'T2',
    state_name: 'North Down'
  },
  {
    country_iso_code: 'GB',
    state_code: 'T3',
    state_name: 'Omagh'
  },
  {
    country_iso_code: 'GB',
    state_code: 'T4',
    state_name: 'Strabane'
  },
  {
    country_iso_code: 'GB',
    state_code: 'T5',
    state_name: 'Aberdeen City'
  },
  {
    country_iso_code: 'GB',
    state_code: 'T6',
    state_name: 'Aberdeenshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'T7',
    state_name: 'Angus'
  },
  {
    country_iso_code: 'GB',
    state_code: 'T8',
    state_name: 'Argyll and Bute'
  },
  {
    country_iso_code: 'GB',
    state_code: 'T9',
    state_name: 'Scottish Borders, The'
  },
  {
    country_iso_code: 'GB',
    state_code: 'U1',
    state_name: 'Clackmannanshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'U2',
    state_name: 'Dumfries and Galloway'
  },
  {
    country_iso_code: 'GB',
    state_code: 'U3',
    state_name: 'Dundee City'
  },
  {
    country_iso_code: 'GB',
    state_code: 'U4',
    state_name: 'East Ayrshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'U5',
    state_name: 'East Dunbartonshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'U6',
    state_name: 'East Lothian'
  },
  {
    country_iso_code: 'GB',
    state_code: 'U7',
    state_name: 'East Renfrewshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'U8',
    state_name: 'Edinburgh, City of'
  },
  {
    country_iso_code: 'GB',
    state_code: 'U9',
    state_name: 'Falkirk'
  },
  {
    country_iso_code: 'GB',
    state_code: 'V1',
    state_name: 'Fife'
  },
  {
    country_iso_code: 'GB',
    state_code: 'V2',
    state_name: 'Glasgow City'
  },
  {
    country_iso_code: 'GB',
    state_code: 'V3',
    state_name: 'Highland'
  },
  {
    country_iso_code: 'GB',
    state_code: 'V4',
    state_name: 'Inverclyde'
  },
  {
    country_iso_code: 'GB',
    state_code: 'V5',
    state_name: 'Midlothian'
  },
  {
    country_iso_code: 'GB',
    state_code: 'V6',
    state_name: 'Moray'
  },
  {
    country_iso_code: 'GB',
    state_code: 'V7',
    state_name: 'North Ayrshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'V8',
    state_name: 'North Lanarkshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'V9',
    state_name: 'Orkney'
  },
  {
    country_iso_code: 'GB',
    state_code: 'W1',
    state_name: 'Perth and Kinross'
  },
  {
    country_iso_code: 'GB',
    state_code: 'W2',
    state_name: 'Renfrewshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'W3',
    state_name: 'Shetland Islands'
  },
  {
    country_iso_code: 'GB',
    state_code: 'W4',
    state_name: 'South Ayrshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'W5',
    state_name: 'South Lanarkshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'W6',
    state_name: 'Stirling'
  },
  {
    country_iso_code: 'GB',
    state_code: 'W7',
    state_name: 'West Dunbartonshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'W8',
    state_name: 'Eilean Siar'
  },
  {
    country_iso_code: 'GB',
    state_code: 'W9',
    state_name: 'West Lothian'
  },
  {
    country_iso_code: 'GB',
    state_code: 'X1',
    state_name: 'Isle of Anglesey'
  },
  {
    country_iso_code: 'GB',
    state_code: 'X2',
    state_name: 'Blaenau Gwent'
  },
  {
    country_iso_code: 'GB',
    state_code: 'X3',
    state_name: 'Bridgend'
  },
  {
    country_iso_code: 'GB',
    state_code: 'X4',
    state_name: 'Caerphilly'
  },
  {
    country_iso_code: 'GB',
    state_code: 'X5',
    state_name: 'Cardiff'
  },
  {
    country_iso_code: 'GB',
    state_code: 'X6',
    state_name: 'Ceredigion'
  },
  {
    country_iso_code: 'GB',
    state_code: 'X7',
    state_name: 'Carmarthenshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'X8',
    state_name: 'Conwy'
  },
  {
    country_iso_code: 'GB',
    state_code: 'X9',
    state_name: 'Denbighshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Y1',
    state_name: 'Flintshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Y2',
    state_name: 'Gwynedd'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Y3',
    state_name: 'Merthyr Tydfil'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Y4',
    state_name: 'Monmouthshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Y5',
    state_name: 'Neath Port Talbot'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Y6',
    state_name: 'Newport'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Y7',
    state_name: 'Pembrokeshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Y8',
    state_name: 'Powys'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Y9',
    state_name: 'Rhondda Cynon Taff'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Z1',
    state_name: 'Swansea'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Z2',
    state_name: 'Torfaen'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Z3',
    state_name: 'Vale of Glamorgan, The'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Z4',
    state_name: 'Wrexham'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Z5',
    state_name: 'Bedfordshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Z6',
    state_name: 'Central Bedfordshire'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Z7',
    state_name: 'Cheshire East'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Z8',
    state_name: 'Cheshire West and Chester'
  },
  {
    country_iso_code: 'GB',
    state_code: 'Z9',
    state_name: 'Isles of Scilly'
  },
  {
    country_iso_code: 'GD',
    state_code: '01',
    state_name: 'Saint Andrew'
  },
  {
    country_iso_code: 'GD',
    state_code: '02',
    state_name: 'Saint David'
  },
  {
    country_iso_code: 'GD',
    state_code: '03',
    state_name: 'Saint George'
  },
  {
    country_iso_code: 'GD',
    state_code: '04',
    state_name: 'Saint John'
  },
  {
    country_iso_code: 'GD',
    state_code: '05',
    state_name: 'Saint Mark'
  },
  {
    country_iso_code: 'GD',
    state_code: '06',
    state_name: 'Saint Patrick'
  },
  {
    country_iso_code: 'GE',
    state_code: '01',
    state_name: 'Abashis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: '02',
    state_name: 'Abkhazia'
  },
  {
    country_iso_code: 'GE',
    state_code: '03',
    state_name: 'Adigenis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: '04',
    state_name: 'Ajaria'
  },
  {
    country_iso_code: 'GE',
    state_code: '05',
    state_name: 'Akhalgoris Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: '06',
    state_name: "Akhalk'alak'is Raioni"
  },
  {
    country_iso_code: 'GE',
    state_code: '07',
    state_name: "Akhalts'ikhis Raioni"
  },
  {
    country_iso_code: 'GE',
    state_code: '08',
    state_name: 'Akhmetis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: '09',
    state_name: 'Ambrolauris Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 10,
    state_name: 'Aspindzis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 11,
    state_name: "Baghdat'is Raioni"
  },
  {
    country_iso_code: 'GE',
    state_code: 12,
    state_name: 'Bolnisis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 13,
    state_name: 'Borjomis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 14,
    state_name: "Chiat'ura"
  },
  {
    country_iso_code: 'GE',
    state_code: 15,
    state_name: "Ch'khorotsqus Raioni"
  },
  {
    country_iso_code: 'GE',
    state_code: 16,
    state_name: "Ch'okhatauris Raioni"
  },
  {
    country_iso_code: 'GE',
    state_code: 17,
    state_name: "Dedop'listsqaros Raioni"
  },
  {
    country_iso_code: 'GE',
    state_code: 18,
    state_name: 'Dmanisis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 19,
    state_name: "Dushet'is Raioni"
  },
  {
    country_iso_code: 'GE',
    state_code: 20,
    state_name: 'Gardabanis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 21,
    state_name: 'Gori'
  },
  {
    country_iso_code: 'GE',
    state_code: 22,
    state_name: 'Goris Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 23,
    state_name: 'Gurjaanis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 24,
    state_name: 'Javis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 25,
    state_name: "K'arelis Raioni"
  },
  {
    country_iso_code: 'GE',
    state_code: 26,
    state_name: 'Kaspis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 27,
    state_name: 'Kharagaulis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 28,
    state_name: 'Khashuris Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 29,
    state_name: 'Khobis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 30,
    state_name: 'Khonis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 31,
    state_name: "K'ut'aisi"
  },
  {
    country_iso_code: 'GE',
    state_code: 32,
    state_name: 'Lagodekhis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 33,
    state_name: "Lanch'khut'is Raioni"
  },
  {
    country_iso_code: 'GE',
    state_code: 34,
    state_name: 'Lentekhis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 35,
    state_name: 'Marneulis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 36,
    state_name: 'Martvilis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 37,
    state_name: 'Mestiis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 38,
    state_name: "Mts'khet'is Raioni"
  },
  {
    country_iso_code: 'GE',
    state_code: 39,
    state_name: 'Ninotsmindis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 40,
    state_name: 'Onis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 41,
    state_name: "Ozurget'is Raioni"
  },
  {
    country_iso_code: 'GE',
    state_code: 42,
    state_name: "P'ot'i"
  },
  {
    country_iso_code: 'GE',
    state_code: 43,
    state_name: 'Qazbegis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 44,
    state_name: 'Qvarlis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 45,
    state_name: "Rust'avi"
  },
  {
    country_iso_code: 'GE',
    state_code: 46,
    state_name: "Sach'kheris Raioni"
  },
  {
    country_iso_code: 'GE',
    state_code: 47,
    state_name: 'Sagarejos Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 48,
    state_name: 'Samtrediis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 49,
    state_name: 'Senakis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 50,
    state_name: 'Sighnaghis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 51,
    state_name: "T'bilisi"
  },
  {
    country_iso_code: 'GE',
    state_code: 52,
    state_name: "T'elavis Raioni"
  },
  {
    country_iso_code: 'GE',
    state_code: 53,
    state_name: "T'erjolis Raioni"
  },
  {
    country_iso_code: 'GE',
    state_code: 54,
    state_name: "T'et'ritsqaros Raioni"
  },
  {
    country_iso_code: 'GE',
    state_code: 55,
    state_name: "T'ianet'is Raioni"
  },
  {
    country_iso_code: 'GE',
    state_code: 56,
    state_name: 'Tqibuli'
  },
  {
    country_iso_code: 'GE',
    state_code: 57,
    state_name: "Ts'ageris Raioni"
  },
  {
    country_iso_code: 'GE',
    state_code: 58,
    state_name: 'Tsalenjikhis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 59,
    state_name: 'Tsalkis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 60,
    state_name: 'Tsqaltubo'
  },
  {
    country_iso_code: 'GE',
    state_code: 61,
    state_name: 'Vanis Raioni'
  },
  {
    country_iso_code: 'GE',
    state_code: 62,
    state_name: "Zestap'onis Raioni"
  },
  {
    country_iso_code: 'GE',
    state_code: 63,
    state_name: 'Zugdidi'
  },
  {
    country_iso_code: 'GE',
    state_code: 64,
    state_name: 'Zugdidis Raioni'
  },
  {
    country_iso_code: 'GH',
    state_code: '01',
    state_name: 'Greater Accra'
  },
  {
    country_iso_code: 'GH',
    state_code: '02',
    state_name: 'Ashanti'
  },
  {
    country_iso_code: 'GH',
    state_code: '03',
    state_name: 'Brong-Ahafo'
  },
  {
    country_iso_code: 'GH',
    state_code: '04',
    state_name: 'Central'
  },
  {
    country_iso_code: 'GH',
    state_code: '05',
    state_name: 'Eastern'
  },
  {
    country_iso_code: 'GH',
    state_code: '06',
    state_name: 'Northern'
  },
  {
    country_iso_code: 'GH',
    state_code: '08',
    state_name: 'Volta'
  },
  {
    country_iso_code: 'GH',
    state_code: '09',
    state_name: 'Western'
  },
  {
    country_iso_code: 'GH',
    state_code: 10,
    state_name: 'Upper East'
  },
  {
    country_iso_code: 'GH',
    state_code: 11,
    state_name: 'Upper West'
  },
  {
    country_iso_code: 'GL',
    state_code: '01',
    state_name: 'Nordgronland'
  },
  {
    country_iso_code: 'GL',
    state_code: '02',
    state_name: 'Ostgronland'
  },
  {
    country_iso_code: 'GL',
    state_code: '03',
    state_name: 'Vestgronland'
  },
  {
    country_iso_code: 'GM',
    state_code: '01',
    state_name: 'Banjul'
  },
  {
    country_iso_code: 'GM',
    state_code: '02',
    state_name: 'Lower River'
  },
  {
    country_iso_code: 'GM',
    state_code: '03',
    state_name: 'Central River'
  },
  {
    country_iso_code: 'GM',
    state_code: '04',
    state_name: 'Upper River'
  },
  {
    country_iso_code: 'GM',
    state_code: '05',
    state_name: 'Western'
  },
  {
    country_iso_code: 'GM',
    state_code: '07',
    state_name: 'North Bank'
  },
  {
    country_iso_code: 'GN',
    state_code: '01',
    state_name: 'Beyla'
  },
  {
    country_iso_code: 'GN',
    state_code: '02',
    state_name: 'Boffa'
  },
  {
    country_iso_code: 'GN',
    state_code: '03',
    state_name: 'Boke'
  },
  {
    country_iso_code: 'GN',
    state_code: '04',
    state_name: 'Conakry'
  },
  {
    country_iso_code: 'GN',
    state_code: '05',
    state_name: 'Dabola'
  },
  {
    country_iso_code: 'GN',
    state_code: '06',
    state_name: 'Dalaba'
  },
  {
    country_iso_code: 'GN',
    state_code: '07',
    state_name: 'Dinguiraye'
  },
  {
    country_iso_code: 'GN',
    state_code: '09',
    state_name: 'Faranah'
  },
  {
    country_iso_code: 'GN',
    state_code: 10,
    state_name: 'Forecariah'
  },
  {
    country_iso_code: 'GN',
    state_code: 11,
    state_name: 'Fria'
  },
  {
    country_iso_code: 'GN',
    state_code: 12,
    state_name: 'Gaoual'
  },
  {
    country_iso_code: 'GN',
    state_code: 13,
    state_name: 'Gueckedou'
  },
  {
    country_iso_code: 'GN',
    state_code: 15,
    state_name: 'Kerouane'
  },
  {
    country_iso_code: 'GN',
    state_code: 16,
    state_name: 'Kindia'
  },
  {
    country_iso_code: 'GN',
    state_code: 17,
    state_name: 'Kissidougou'
  },
  {
    country_iso_code: 'GN',
    state_code: 18,
    state_name: 'Koundara'
  },
  {
    country_iso_code: 'GN',
    state_code: 19,
    state_name: 'Kouroussa'
  },
  {
    country_iso_code: 'GN',
    state_code: 21,
    state_name: 'Macenta'
  },
  {
    country_iso_code: 'GN',
    state_code: 22,
    state_name: 'Mali'
  },
  {
    country_iso_code: 'GN',
    state_code: 23,
    state_name: 'Mamou'
  },
  {
    country_iso_code: 'GN',
    state_code: 25,
    state_name: 'Pita'
  },
  {
    country_iso_code: 'GN',
    state_code: 27,
    state_name: 'Telimele'
  },
  {
    country_iso_code: 'GN',
    state_code: 28,
    state_name: 'Tougue'
  },
  {
    country_iso_code: 'GN',
    state_code: 29,
    state_name: 'Yomou'
  },
  {
    country_iso_code: 'GN',
    state_code: 30,
    state_name: 'Coyah'
  },
  {
    country_iso_code: 'GN',
    state_code: 31,
    state_name: 'Dubreka'
  },
  {
    country_iso_code: 'GN',
    state_code: 32,
    state_name: 'Kankan'
  },
  {
    country_iso_code: 'GN',
    state_code: 33,
    state_name: 'Koubia'
  },
  {
    country_iso_code: 'GN',
    state_code: 34,
    state_name: 'Labe'
  },
  {
    country_iso_code: 'GN',
    state_code: 35,
    state_name: 'Lelouma'
  },
  {
    country_iso_code: 'GN',
    state_code: 36,
    state_name: 'Lola'
  },
  {
    country_iso_code: 'GN',
    state_code: 37,
    state_name: 'Mandiana'
  },
  {
    country_iso_code: 'GN',
    state_code: 38,
    state_name: 'Nzerekore'
  },
  {
    country_iso_code: 'GN',
    state_code: 39,
    state_name: 'Siguiri'
  },
  {
    country_iso_code: 'GQ',
    state_code: '03',
    state_name: 'Annobon'
  },
  {
    country_iso_code: 'GQ',
    state_code: '04',
    state_name: 'Bioko Norte'
  },
  {
    country_iso_code: 'GQ',
    state_code: '05',
    state_name: 'Bioko Sur'
  },
  {
    country_iso_code: 'GQ',
    state_code: '06',
    state_name: 'Centro Sur'
  },
  {
    country_iso_code: 'GQ',
    state_code: '07',
    state_name: 'Kie-Ntem'
  },
  {
    country_iso_code: 'GQ',
    state_code: '08',
    state_name: 'Litoral'
  },
  {
    country_iso_code: 'GQ',
    state_code: '09',
    state_name: 'Wele-Nzas'
  },
  {
    country_iso_code: 'GR',
    state_code: '01',
    state_name: 'Evros'
  },
  {
    country_iso_code: 'GR',
    state_code: '02',
    state_name: 'Rodhopi'
  },
  {
    country_iso_code: 'GR',
    state_code: '03',
    state_name: 'Xanthi'
  },
  {
    country_iso_code: 'GR',
    state_code: '04',
    state_name: 'Drama'
  },
  {
    country_iso_code: 'GR',
    state_code: '05',
    state_name: 'Serrai'
  },
  {
    country_iso_code: 'GR',
    state_code: '06',
    state_name: 'Kilkis'
  },
  {
    country_iso_code: 'GR',
    state_code: '07',
    state_name: 'Pella'
  },
  {
    country_iso_code: 'GR',
    state_code: '08',
    state_name: 'Florina'
  },
  {
    country_iso_code: 'GR',
    state_code: '09',
    state_name: 'Kastoria'
  },
  {
    country_iso_code: 'GR',
    state_code: 10,
    state_name: 'Grevena'
  },
  {
    country_iso_code: 'GR',
    state_code: 11,
    state_name: 'Kozani'
  },
  {
    country_iso_code: 'GR',
    state_code: 12,
    state_name: 'Imathia'
  },
  {
    country_iso_code: 'GR',
    state_code: 13,
    state_name: 'Thessaloniki'
  },
  {
    country_iso_code: 'GR',
    state_code: 14,
    state_name: 'Kavala'
  },
  {
    country_iso_code: 'GR',
    state_code: 15,
    state_name: 'Khalkidhiki'
  },
  {
    country_iso_code: 'GR',
    state_code: 16,
    state_name: 'Pieria'
  },
  {
    country_iso_code: 'GR',
    state_code: 17,
    state_name: 'Ioannina'
  },
  {
    country_iso_code: 'GR',
    state_code: 18,
    state_name: 'Thesprotia'
  },
  {
    country_iso_code: 'GR',
    state_code: 19,
    state_name: 'Preveza'
  },
  {
    country_iso_code: 'GR',
    state_code: 20,
    state_name: 'Arta'
  },
  {
    country_iso_code: 'GR',
    state_code: 21,
    state_name: 'Larisa'
  },
  {
    country_iso_code: 'GR',
    state_code: 22,
    state_name: 'Trikala'
  },
  {
    country_iso_code: 'GR',
    state_code: 23,
    state_name: 'Kardhitsa'
  },
  {
    country_iso_code: 'GR',
    state_code: 24,
    state_name: 'Magnisia'
  },
  {
    country_iso_code: 'GR',
    state_code: 25,
    state_name: 'Kerkira'
  },
  {
    country_iso_code: 'GR',
    state_code: 26,
    state_name: 'Levkas'
  },
  {
    country_iso_code: 'GR',
    state_code: 27,
    state_name: 'Kefallinia'
  },
  {
    country_iso_code: 'GR',
    state_code: 28,
    state_name: 'Zakinthos'
  },
  {
    country_iso_code: 'GR',
    state_code: 29,
    state_name: 'Fthiotis'
  },
  {
    country_iso_code: 'GR',
    state_code: 30,
    state_name: 'Evritania'
  },
  {
    country_iso_code: 'GR',
    state_code: 31,
    state_name: 'Aitolia kai Akarnania'
  },
  {
    country_iso_code: 'GR',
    state_code: 32,
    state_name: 'Fokis'
  },
  {
    country_iso_code: 'GR',
    state_code: 33,
    state_name: 'Voiotia'
  },
  {
    country_iso_code: 'GR',
    state_code: 34,
    state_name: 'Evvoia'
  },
  {
    country_iso_code: 'GR',
    state_code: 35,
    state_name: 'Attiki'
  },
  {
    country_iso_code: 'GR',
    state_code: 36,
    state_name: 'Argolis'
  },
  {
    country_iso_code: 'GR',
    state_code: 37,
    state_name: 'Korinthia'
  },
  {
    country_iso_code: 'GR',
    state_code: 38,
    state_name: 'Akhaia'
  },
  {
    country_iso_code: 'GR',
    state_code: 39,
    state_name: 'Ilia'
  },
  {
    country_iso_code: 'GR',
    state_code: 40,
    state_name: 'Messinia'
  },
  {
    country_iso_code: 'GR',
    state_code: 41,
    state_name: 'Arkadhia'
  },
  {
    country_iso_code: 'GR',
    state_code: 42,
    state_name: 'Lakonia'
  },
  {
    country_iso_code: 'GR',
    state_code: 43,
    state_name: 'Khania'
  },
  {
    country_iso_code: 'GR',
    state_code: 44,
    state_name: 'Rethimni'
  },
  {
    country_iso_code: 'GR',
    state_code: 45,
    state_name: 'Iraklion'
  },
  {
    country_iso_code: 'GR',
    state_code: 46,
    state_name: 'Lasithi'
  },
  {
    country_iso_code: 'GR',
    state_code: 47,
    state_name: 'Dhodhekanisos'
  },
  {
    country_iso_code: 'GR',
    state_code: 48,
    state_name: 'Samos'
  },
  {
    country_iso_code: 'GR',
    state_code: 49,
    state_name: 'Kikladhes'
  },
  {
    country_iso_code: 'GR',
    state_code: 50,
    state_name: 'Khios'
  },
  {
    country_iso_code: 'GR',
    state_code: 51,
    state_name: 'Lesvos'
  },
  {
    country_iso_code: 'GT',
    state_code: '01',
    state_name: 'Alta Verapaz'
  },
  {
    country_iso_code: 'GT',
    state_code: '02',
    state_name: 'Baja Verapaz'
  },
  {
    country_iso_code: 'GT',
    state_code: '03',
    state_name: 'Chimaltenango'
  },
  {
    country_iso_code: 'GT',
    state_code: '04',
    state_name: 'Chiquimula'
  },
  {
    country_iso_code: 'GT',
    state_code: '05',
    state_name: 'El Progreso'
  },
  {
    country_iso_code: 'GT',
    state_code: '06',
    state_name: 'Escuintla'
  },
  {
    country_iso_code: 'GT',
    state_code: '07',
    state_name: 'Guatemala'
  },
  {
    country_iso_code: 'GT',
    state_code: '08',
    state_name: 'Huehuetenango'
  },
  {
    country_iso_code: 'GT',
    state_code: '09',
    state_name: 'Izabal'
  },
  {
    country_iso_code: 'GT',
    state_code: 10,
    state_name: 'Jalapa'
  },
  {
    country_iso_code: 'GT',
    state_code: 11,
    state_name: 'Jutiapa'
  },
  {
    country_iso_code: 'GT',
    state_code: 12,
    state_name: 'Peten'
  },
  {
    country_iso_code: 'GT',
    state_code: 13,
    state_name: 'Quetzaltenango'
  },
  {
    country_iso_code: 'GT',
    state_code: 14,
    state_name: 'Quiche'
  },
  {
    country_iso_code: 'GT',
    state_code: 15,
    state_name: 'Retalhuleu'
  },
  {
    country_iso_code: 'GT',
    state_code: 16,
    state_name: 'Sacatepequez'
  },
  {
    country_iso_code: 'GT',
    state_code: 17,
    state_name: 'San Marcos'
  },
  {
    country_iso_code: 'GT',
    state_code: 18,
    state_name: 'Santa Rosa'
  },
  {
    country_iso_code: 'GT',
    state_code: 19,
    state_name: 'Solola'
  },
  {
    country_iso_code: 'GT',
    state_code: 20,
    state_name: 'Suchitepequez'
  },
  {
    country_iso_code: 'GT',
    state_code: 21,
    state_name: 'Totonicapan'
  },
  {
    country_iso_code: 'GT',
    state_code: 22,
    state_name: 'Zacapa'
  },
  {
    country_iso_code: 'GW',
    state_code: '01',
    state_name: 'Bafata'
  },
  {
    country_iso_code: 'GW',
    state_code: '02',
    state_name: 'Quinara'
  },
  {
    country_iso_code: 'GW',
    state_code: '04',
    state_name: 'Oio'
  },
  {
    country_iso_code: 'GW',
    state_code: '05',
    state_name: 'Bolama'
  },
  {
    country_iso_code: 'GW',
    state_code: '06',
    state_name: 'Cacheu'
  },
  {
    country_iso_code: 'GW',
    state_code: '07',
    state_name: 'Tombali'
  },
  {
    country_iso_code: 'GW',
    state_code: 10,
    state_name: 'Gabu'
  },
  {
    country_iso_code: 'GW',
    state_code: 11,
    state_name: 'Bissau'
  },
  {
    country_iso_code: 'GW',
    state_code: 12,
    state_name: 'Biombo'
  },
  {
    country_iso_code: 'GY',
    state_code: 10,
    state_name: 'Barima-Waini'
  },
  {
    country_iso_code: 'GY',
    state_code: 11,
    state_name: 'Cuyuni-Mazaruni'
  },
  {
    country_iso_code: 'GY',
    state_code: 12,
    state_name: 'Demerara-Mahaica'
  },
  {
    country_iso_code: 'GY',
    state_code: 13,
    state_name: 'East Berbice-Corentyne'
  },
  {
    country_iso_code: 'GY',
    state_code: 14,
    state_name: 'Essequibo Islands-West Demerara'
  },
  {
    country_iso_code: 'GY',
    state_code: 15,
    state_name: 'Mahaica-Berbice'
  },
  {
    country_iso_code: 'GY',
    state_code: 16,
    state_name: 'Pomeroon-Supenaam'
  },
  {
    country_iso_code: 'GY',
    state_code: 17,
    state_name: 'Potaro-Siparuni'
  },
  {
    country_iso_code: 'GY',
    state_code: 18,
    state_name: 'Upper Demerara-Berbice'
  },
  {
    country_iso_code: 'GY',
    state_code: 19,
    state_name: 'Upper Takutu-Upper Essequibo'
  },
  {
    country_iso_code: 'HN',
    state_code: '01',
    state_name: 'Atlantida'
  },
  {
    country_iso_code: 'HN',
    state_code: '02',
    state_name: 'Choluteca'
  },
  {
    country_iso_code: 'HN',
    state_code: '03',
    state_name: 'Colon'
  },
  {
    country_iso_code: 'HN',
    state_code: '04',
    state_name: 'Comayagua'
  },
  {
    country_iso_code: 'HN',
    state_code: '05',
    state_name: 'Copan'
  },
  {
    country_iso_code: 'HN',
    state_code: '06',
    state_name: 'Cortes'
  },
  {
    country_iso_code: 'HN',
    state_code: '07',
    state_name: 'El Paraiso'
  },
  {
    country_iso_code: 'HN',
    state_code: '08',
    state_name: 'Francisco Morazan'
  },
  {
    country_iso_code: 'HN',
    state_code: '09',
    state_name: 'Gracias a Dios'
  },
  {
    country_iso_code: 'HN',
    state_code: 10,
    state_name: 'Intibuca'
  },
  {
    country_iso_code: 'HN',
    state_code: 11,
    state_name: 'Islas de la Bahia'
  },
  {
    country_iso_code: 'HN',
    state_code: 12,
    state_name: 'La Paz'
  },
  {
    country_iso_code: 'HN',
    state_code: 13,
    state_name: 'Lempira'
  },
  {
    country_iso_code: 'HN',
    state_code: 14,
    state_name: 'Ocotepeque'
  },
  {
    country_iso_code: 'HN',
    state_code: 15,
    state_name: 'Olancho'
  },
  {
    country_iso_code: 'HN',
    state_code: 16,
    state_name: 'Santa Barbara'
  },
  {
    country_iso_code: 'HN',
    state_code: 17,
    state_name: 'Valle'
  },
  {
    country_iso_code: 'HN',
    state_code: 18,
    state_name: 'Yoro'
  },
  {
    country_iso_code: 'HR',
    state_code: '01',
    state_name: 'Bjelovarsko-Bilogorska'
  },
  {
    country_iso_code: 'HR',
    state_code: '02',
    state_name: 'Brodsko-Posavska'
  },
  {
    country_iso_code: 'HR',
    state_code: '03',
    state_name: 'Dubrovacko-Neretvanska'
  },
  {
    country_iso_code: 'HR',
    state_code: '04',
    state_name: 'Istarska'
  },
  {
    country_iso_code: 'HR',
    state_code: '05',
    state_name: 'Karlovacka'
  },
  {
    country_iso_code: 'HR',
    state_code: '06',
    state_name: 'Koprivnicko-Krizevacka'
  },
  {
    country_iso_code: 'HR',
    state_code: '07',
    state_name: 'Krapinsko-Zagorska'
  },
  {
    country_iso_code: 'HR',
    state_code: '08',
    state_name: 'Licko-Senjska'
  },
  {
    country_iso_code: 'HR',
    state_code: '09',
    state_name: 'Medimurska'
  },
  {
    country_iso_code: 'HR',
    state_code: 10,
    state_name: 'Osjecko-Baranjska'
  },
  {
    country_iso_code: 'HR',
    state_code: 11,
    state_name: 'Pozesko-Slavonska'
  },
  {
    country_iso_code: 'HR',
    state_code: 12,
    state_name: 'Primorsko-Goranska'
  },
  {
    country_iso_code: 'HR',
    state_code: 13,
    state_name: 'Sibensko-Kninska'
  },
  {
    country_iso_code: 'HR',
    state_code: 14,
    state_name: 'Sisacko-Moslavacka'
  },
  {
    country_iso_code: 'HR',
    state_code: 15,
    state_name: 'Splitsko-Dalmatinska'
  },
  {
    country_iso_code: 'HR',
    state_code: 16,
    state_name: 'Varazdinska'
  },
  {
    country_iso_code: 'HR',
    state_code: 17,
    state_name: 'Viroviticko-Podravska'
  },
  {
    country_iso_code: 'HR',
    state_code: 18,
    state_name: 'Vukovarsko-Srijemska'
  },
  {
    country_iso_code: 'HR',
    state_code: 19,
    state_name: 'Zadarska'
  },
  {
    country_iso_code: 'HR',
    state_code: 20,
    state_name: 'Zagrebacka'
  },
  {
    country_iso_code: 'HR',
    state_code: 21,
    state_name: 'Grad Zagreb'
  },
  {
    country_iso_code: 'HT',
    state_code: '03',
    state_name: 'Nord-Ouest'
  },
  {
    country_iso_code: 'HT',
    state_code: '06',
    state_name: 'Artibonite'
  },
  {
    country_iso_code: 'HT',
    state_code: '07',
    state_name: 'Centre'
  },
  {
    country_iso_code: 'HT',
    state_code: '09',
    state_name: 'Nord'
  },
  {
    country_iso_code: 'HT',
    state_code: 10,
    state_name: 'Nord-Est'
  },
  {
    country_iso_code: 'HT',
    state_code: 11,
    state_name: 'Ouest'
  },
  {
    country_iso_code: 'HT',
    state_code: 12,
    state_name: 'Sud'
  },
  {
    country_iso_code: 'HT',
    state_code: 13,
    state_name: 'Sud-Est'
  },
  {
    country_iso_code: 'HT',
    state_code: 14,
    state_name: "Grand' Anse"
  },
  {
    country_iso_code: 'HT',
    state_code: 15,
    state_name: 'Nippes'
  },
  {
    country_iso_code: 'HU',
    state_code: '01',
    state_name: 'Bacs-Kiskun'
  },
  {
    country_iso_code: 'HU',
    state_code: '02',
    state_name: 'Baranya'
  },
  {
    country_iso_code: 'HU',
    state_code: '03',
    state_name: 'Bekes'
  },
  {
    country_iso_code: 'HU',
    state_code: '04',
    state_name: 'Borsod-Abauj-Zemplen'
  },
  {
    country_iso_code: 'HU',
    state_code: '05',
    state_name: 'Budapest'
  },
  {
    country_iso_code: 'HU',
    state_code: '06',
    state_name: 'Csongrad'
  },
  {
    country_iso_code: 'HU',
    state_code: '07',
    state_name: 'Debrecen'
  },
  {
    country_iso_code: 'HU',
    state_code: '08',
    state_name: 'Fejer'
  },
  {
    country_iso_code: 'HU',
    state_code: '09',
    state_name: 'Gyor-Moson-Sopron'
  },
  {
    country_iso_code: 'HU',
    state_code: 10,
    state_name: 'Hajdu-Bihar'
  },
  {
    country_iso_code: 'HU',
    state_code: 11,
    state_name: 'Heves'
  },
  {
    country_iso_code: 'HU',
    state_code: 12,
    state_name: 'Komarom-Esztergom'
  },
  {
    country_iso_code: 'HU',
    state_code: 13,
    state_name: 'Miskolc'
  },
  {
    country_iso_code: 'HU',
    state_code: 14,
    state_name: 'Nograd'
  },
  {
    country_iso_code: 'HU',
    state_code: 15,
    state_name: 'Pecs'
  },
  {
    country_iso_code: 'HU',
    state_code: 16,
    state_name: 'Pest'
  },
  {
    country_iso_code: 'HU',
    state_code: 17,
    state_name: 'Somogy'
  },
  {
    country_iso_code: 'HU',
    state_code: 18,
    state_name: 'Szabolcs-Szatmar-Bereg'
  },
  {
    country_iso_code: 'HU',
    state_code: 19,
    state_name: 'Szeged'
  },
  {
    country_iso_code: 'HU',
    state_code: 20,
    state_name: 'Jasz-Nagykun-Szolnok'
  },
  {
    country_iso_code: 'HU',
    state_code: 21,
    state_name: 'Tolna'
  },
  {
    country_iso_code: 'HU',
    state_code: 22,
    state_name: 'Vas'
  },
  {
    country_iso_code: 'HU',
    state_code: 23,
    state_name: 'Veszprem'
  },
  {
    country_iso_code: 'HU',
    state_code: 24,
    state_name: 'Zala'
  },
  {
    country_iso_code: 'HU',
    state_code: 25,
    state_name: 'Gyor'
  },
  {
    country_iso_code: 'HU',
    state_code: 26,
    state_name: 'Bekescsaba'
  },
  {
    country_iso_code: 'HU',
    state_code: 27,
    state_name: 'Dunaujvaros'
  },
  {
    country_iso_code: 'HU',
    state_code: 28,
    state_name: 'Eger'
  },
  {
    country_iso_code: 'HU',
    state_code: 29,
    state_name: 'Hodmezovasarhely'
  },
  {
    country_iso_code: 'HU',
    state_code: 30,
    state_name: 'Kaposvar'
  },
  {
    country_iso_code: 'HU',
    state_code: 31,
    state_name: 'Kecskemet'
  },
  {
    country_iso_code: 'HU',
    state_code: 32,
    state_name: 'Nagykanizsa'
  },
  {
    country_iso_code: 'HU',
    state_code: 33,
    state_name: 'Nyiregyhaza'
  },
  {
    country_iso_code: 'HU',
    state_code: 34,
    state_name: 'Sopron'
  },
  {
    country_iso_code: 'HU',
    state_code: 35,
    state_name: 'Szekesfehervar'
  },
  {
    country_iso_code: 'HU',
    state_code: 36,
    state_name: 'Szolnok'
  },
  {
    country_iso_code: 'HU',
    state_code: 37,
    state_name: 'Szombathely'
  },
  {
    country_iso_code: 'HU',
    state_code: 38,
    state_name: 'Tatabanya'
  },
  {
    country_iso_code: 'HU',
    state_code: 39,
    state_name: 'Veszprem'
  },
  {
    country_iso_code: 'HU',
    state_code: 40,
    state_name: 'Zalaegerszeg'
  },
  {
    country_iso_code: 'HU',
    state_code: 41,
    state_name: 'Salgotarjan'
  },
  {
    country_iso_code: 'HU',
    state_code: 42,
    state_name: 'Szekszard'
  },
  {
    country_iso_code: 'HU',
    state_code: 43,
    state_name: 'Erd'
  },
  {
    country_iso_code: 'ID',
    state_code: '01',
    state_name: 'Aceh'
  },
  {
    country_iso_code: 'ID',
    state_code: '02',
    state_name: 'Bali'
  },
  {
    country_iso_code: 'ID',
    state_code: '03',
    state_name: 'Bengkulu'
  },
  {
    country_iso_code: 'ID',
    state_code: '04',
    state_name: 'Jakarta Raya'
  },
  {
    country_iso_code: 'ID',
    state_code: '05',
    state_name: 'Jambi'
  },
  {
    country_iso_code: 'ID',
    state_code: '07',
    state_name: 'Jawa Tengah'
  },
  {
    country_iso_code: 'ID',
    state_code: '08',
    state_name: 'Jawa Timur'
  },
  {
    country_iso_code: 'ID',
    state_code: 10,
    state_name: 'Yogyakarta'
  },
  {
    country_iso_code: 'ID',
    state_code: 11,
    state_name: 'Kalimantan Barat'
  },
  {
    country_iso_code: 'ID',
    state_code: 12,
    state_name: 'Kalimantan Selatan'
  },
  {
    country_iso_code: 'ID',
    state_code: 13,
    state_name: 'Kalimantan Tengah'
  },
  {
    country_iso_code: 'ID',
    state_code: 14,
    state_name: 'Kalimantan Timur'
  },
  {
    country_iso_code: 'ID',
    state_code: 15,
    state_name: 'Lampung'
  },
  {
    country_iso_code: 'ID',
    state_code: 17,
    state_name: 'Nusa Tenggara Barat'
  },
  {
    country_iso_code: 'ID',
    state_code: 18,
    state_name: 'Nusa Tenggara Timur'
  },
  {
    country_iso_code: 'ID',
    state_code: 21,
    state_name: 'Sulawesi Tengah'
  },
  {
    country_iso_code: 'ID',
    state_code: 22,
    state_name: 'Sulawesi Tenggara'
  },
  {
    country_iso_code: 'ID',
    state_code: 24,
    state_name: 'Sumatera Barat'
  },
  {
    country_iso_code: 'ID',
    state_code: 26,
    state_name: 'Sumatera Utara'
  },
  {
    country_iso_code: 'ID',
    state_code: 28,
    state_name: 'Maluku'
  },
  {
    country_iso_code: 'ID',
    state_code: 29,
    state_name: 'Maluku Utara'
  },
  {
    country_iso_code: 'ID',
    state_code: 30,
    state_name: 'Jawa Barat'
  },
  {
    country_iso_code: 'ID',
    state_code: 31,
    state_name: 'Sulawesi Utara'
  },
  {
    country_iso_code: 'ID',
    state_code: 32,
    state_name: 'Sumatera Selatan'
  },
  {
    country_iso_code: 'ID',
    state_code: 33,
    state_name: 'Banten'
  },
  {
    country_iso_code: 'ID',
    state_code: 34,
    state_name: 'Gorontalo'
  },
  {
    country_iso_code: 'ID',
    state_code: 35,
    state_name: 'Kepulauan Bangka Belitung'
  },
  {
    country_iso_code: 'ID',
    state_code: 36,
    state_name: 'Papua'
  },
  {
    country_iso_code: 'ID',
    state_code: 37,
    state_name: 'Riau'
  },
  {
    country_iso_code: 'ID',
    state_code: 38,
    state_name: 'Sulawesi Selatan'
  },
  {
    country_iso_code: 'ID',
    state_code: 39,
    state_name: 'Irian Jaya Barat'
  },
  {
    country_iso_code: 'ID',
    state_code: 40,
    state_name: 'Kepulauan Riau'
  },
  {
    country_iso_code: 'ID',
    state_code: 41,
    state_name: 'Sulawesi Barat'
  },
  {
    country_iso_code: 'IE',
    state_code: '01',
    state_name: 'Carlow'
  },
  {
    country_iso_code: 'IE',
    state_code: '02',
    state_name: 'Cavan'
  },
  {
    country_iso_code: 'IE',
    state_code: '03',
    state_name: 'Clare'
  },
  {
    country_iso_code: 'IE',
    state_code: '04',
    state_name: 'Cork'
  },
  {
    country_iso_code: 'IE',
    state_code: '06',
    state_name: 'Donegal'
  },
  {
    country_iso_code: 'IE',
    state_code: '07',
    state_name: 'Dublin'
  },
  {
    country_iso_code: 'IE',
    state_code: 10,
    state_name: 'Galway'
  },
  {
    country_iso_code: 'IE',
    state_code: 11,
    state_name: 'Kerry'
  },
  {
    country_iso_code: 'IE',
    state_code: 12,
    state_name: 'Kildare'
  },
  {
    country_iso_code: 'IE',
    state_code: 13,
    state_name: 'Kilkenny'
  },
  {
    country_iso_code: 'IE',
    state_code: 14,
    state_name: 'Leitrim'
  },
  {
    country_iso_code: 'IE',
    state_code: 15,
    state_name: 'Laois'
  },
  {
    country_iso_code: 'IE',
    state_code: 16,
    state_name: 'Limerick'
  },
  {
    country_iso_code: 'IE',
    state_code: 18,
    state_name: 'Longford'
  },
  {
    country_iso_code: 'IE',
    state_code: 19,
    state_name: 'Louth'
  },
  {
    country_iso_code: 'IE',
    state_code: 20,
    state_name: 'Mayo'
  },
  {
    country_iso_code: 'IE',
    state_code: 21,
    state_name: 'Meath'
  },
  {
    country_iso_code: 'IE',
    state_code: 22,
    state_name: 'Monaghan'
  },
  {
    country_iso_code: 'IE',
    state_code: 23,
    state_name: 'Offaly'
  },
  {
    country_iso_code: 'IE',
    state_code: 24,
    state_name: 'Roscommon'
  },
  {
    country_iso_code: 'IE',
    state_code: 25,
    state_name: 'Sligo'
  },
  {
    country_iso_code: 'IE',
    state_code: 26,
    state_name: 'Tipperary'
  },
  {
    country_iso_code: 'IE',
    state_code: 27,
    state_name: 'Waterford'
  },
  {
    country_iso_code: 'IE',
    state_code: 29,
    state_name: 'Westmeath'
  },
  {
    country_iso_code: 'IE',
    state_code: 30,
    state_name: 'Wexford'
  },
  {
    country_iso_code: 'IE',
    state_code: 31,
    state_name: 'Wicklow'
  },
  {
    country_iso_code: 'IL',
    state_code: '01',
    state_name: 'HaDarom'
  },
  {
    country_iso_code: 'IL',
    state_code: '02',
    state_name: 'HaMerkaz'
  },
  {
    country_iso_code: 'IL',
    state_code: '03',
    state_name: 'HaZafon'
  },
  {
    country_iso_code: 'IL',
    state_code: '04',
    state_name: 'Hefa'
  },
  {
    country_iso_code: 'IL',
    state_code: '05',
    state_name: 'Tel Aviv'
  },
  {
    country_iso_code: 'IL',
    state_code: '06',
    state_name: 'Yerushalayim'
  },
  {
    country_iso_code: 'IN',
    state_code: '01',
    state_name: 'Andaman and Nicobar Islands'
  },
  {
    country_iso_code: 'IN',
    state_code: '02',
    state_name: 'Andhra Pradesh'
  },
  {
    country_iso_code: 'IN',
    state_code: '03',
    state_name: 'Assam'
  },
  {
    country_iso_code: 'IN',
    state_code: '05',
    state_name: 'Chandigarh'
  },
  {
    country_iso_code: 'IN',
    state_code: '06',
    state_name: 'Dadra and Nagar Haveli'
  },
  {
    country_iso_code: 'IN',
    state_code: '07',
    state_name: 'Delhi'
  },
  {
    country_iso_code: 'IN',
    state_code: '09',
    state_name: 'Gujarat'
  },
  {
    country_iso_code: 'IN',
    state_code: 10,
    state_name: 'Haryana'
  },
  {
    country_iso_code: 'IN',
    state_code: 11,
    state_name: 'Himachal Pradesh'
  },
  {
    country_iso_code: 'IN',
    state_code: 12,
    state_name: 'Jammu and Kashmir'
  },
  {
    country_iso_code: 'IN',
    state_code: 13,
    state_name: 'Kerala'
  },
  {
    country_iso_code: 'IN',
    state_code: 14,
    state_name: 'Lakshadweep'
  },
  {
    country_iso_code: 'IN',
    state_code: 16,
    state_name: 'Maharashtra'
  },
  {
    country_iso_code: 'IN',
    state_code: 17,
    state_name: 'Manipur'
  },
  {
    country_iso_code: 'IN',
    state_code: 18,
    state_name: 'Meghalaya'
  },
  {
    country_iso_code: 'IN',
    state_code: 19,
    state_name: 'Karnataka'
  },
  {
    country_iso_code: 'IN',
    state_code: 20,
    state_name: 'Nagaland'
  },
  {
    country_iso_code: 'IN',
    state_code: 21,
    state_name: 'Orissa'
  },
  {
    country_iso_code: 'IN',
    state_code: 22,
    state_name: 'Puducherry'
  },
  {
    country_iso_code: 'IN',
    state_code: 23,
    state_name: 'Punjab'
  },
  {
    country_iso_code: 'IN',
    state_code: 24,
    state_name: 'Rajasthan'
  },
  {
    country_iso_code: 'IN',
    state_code: 25,
    state_name: 'Tamil Nadu'
  },
  {
    country_iso_code: 'IN',
    state_code: 26,
    state_name: 'Tripura'
  },
  {
    country_iso_code: 'IN',
    state_code: 28,
    state_name: 'West Bengal'
  },
  {
    country_iso_code: 'IN',
    state_code: 29,
    state_name: 'Sikkim'
  },
  {
    country_iso_code: 'IN',
    state_code: 30,
    state_name: 'Arunachal Pradesh'
  },
  {
    country_iso_code: 'IN',
    state_code: 31,
    state_name: 'Mizoram'
  },
  {
    country_iso_code: 'IN',
    state_code: 32,
    state_name: 'Daman and Diu'
  },
  {
    country_iso_code: 'IN',
    state_code: 33,
    state_name: 'Goa'
  },
  {
    country_iso_code: 'IN',
    state_code: 34,
    state_name: 'Bihar'
  },
  {
    country_iso_code: 'IN',
    state_code: 35,
    state_name: 'Madhya Pradesh'
  },
  {
    country_iso_code: 'IN',
    state_code: 36,
    state_name: 'Uttar Pradesh'
  },
  {
    country_iso_code: 'IN',
    state_code: 37,
    state_name: 'Chhattisgarh'
  },
  {
    country_iso_code: 'IN',
    state_code: 38,
    state_name: 'Jharkhand'
  },
  {
    country_iso_code: 'IN',
    state_code: 39,
    state_name: 'Uttarakhand'
  },
  {
    country_iso_code: 'IN',
    state_code: 40,
    state_name: 'Telangana'
  },
  {
    country_iso_code: 'IQ',
    state_code: '01',
    state_name: 'Al Anbar'
  },
  {
    country_iso_code: 'IQ',
    state_code: '02',
    state_name: 'Al Basrah'
  },
  {
    country_iso_code: 'IQ',
    state_code: '03',
    state_name: 'Al Muthanna'
  },
  {
    country_iso_code: 'IQ',
    state_code: '04',
    state_name: 'Al Qadisiyah'
  },
  {
    country_iso_code: 'IQ',
    state_code: '05',
    state_name: 'As Sulaymaniyah'
  },
  {
    country_iso_code: 'IQ',
    state_code: '06',
    state_name: 'Babil'
  },
  {
    country_iso_code: 'IQ',
    state_code: '07',
    state_name: 'Baghdad'
  },
  {
    country_iso_code: 'IQ',
    state_code: '08',
    state_name: 'Dahuk'
  },
  {
    country_iso_code: 'IQ',
    state_code: '09',
    state_name: 'Dhi Qar'
  },
  {
    country_iso_code: 'IQ',
    state_code: 10,
    state_name: 'Diyala'
  },
  {
    country_iso_code: 'IQ',
    state_code: 11,
    state_name: 'Arbil'
  },
  {
    country_iso_code: 'IQ',
    state_code: 12,
    state_name: "Karbala'"
  },
  {
    country_iso_code: 'IQ',
    state_code: 13,
    state_name: "At Ta'mim"
  },
  {
    country_iso_code: 'IQ',
    state_code: 14,
    state_name: 'Maysan'
  },
  {
    country_iso_code: 'IQ',
    state_code: 15,
    state_name: 'Ninawa'
  },
  {
    country_iso_code: 'IQ',
    state_code: 16,
    state_name: 'Wasit'
  },
  {
    country_iso_code: 'IQ',
    state_code: 17,
    state_name: 'An Najaf'
  },
  {
    country_iso_code: 'IQ',
    state_code: 18,
    state_name: 'Salah ad Din'
  },
  {
    country_iso_code: 'IR',
    state_code: '01',
    state_name: 'Azarbayjan-e Bakhtari'
  },
  {
    country_iso_code: 'IR',
    state_code: '03',
    state_name: 'Chahar Mahall va Bakhtiari'
  },
  {
    country_iso_code: 'IR',
    state_code: '04',
    state_name: 'Sistan va Baluchestan'
  },
  {
    country_iso_code: 'IR',
    state_code: '05',
    state_name: 'Kohkiluyeh va Buyer Ahmadi'
  },
  {
    country_iso_code: 'IR',
    state_code: '07',
    state_name: 'Fars'
  },
  {
    country_iso_code: 'IR',
    state_code: '08',
    state_name: 'Gilan'
  },
  {
    country_iso_code: 'IR',
    state_code: '09',
    state_name: 'Hamadan'
  },
  {
    country_iso_code: 'IR',
    state_code: 10,
    state_name: 'Ilam'
  },
  {
    country_iso_code: 'IR',
    state_code: 11,
    state_name: 'Hormozgan'
  },
  {
    country_iso_code: 'IR',
    state_code: 12,
    state_name: 'Kerman'
  },
  {
    country_iso_code: 'IR',
    state_code: 13,
    state_name: 'Bakhtaran'
  },
  {
    country_iso_code: 'IR',
    state_code: 15,
    state_name: 'Khuzestan'
  },
  {
    country_iso_code: 'IR',
    state_code: 16,
    state_name: 'Kordestan'
  },
  {
    country_iso_code: 'IR',
    state_code: 17,
    state_name: 'Mazandaran'
  },
  {
    country_iso_code: 'IR',
    state_code: 18,
    state_name: 'Semnan Province'
  },
  {
    country_iso_code: 'IR',
    state_code: 19,
    state_name: 'Markazi'
  },
  {
    country_iso_code: 'IR',
    state_code: 21,
    state_name: 'Zanjan'
  },
  {
    country_iso_code: 'IR',
    state_code: 22,
    state_name: 'Bushehr'
  },
  {
    country_iso_code: 'IR',
    state_code: 23,
    state_name: 'Lorestan'
  },
  {
    country_iso_code: 'IR',
    state_code: 24,
    state_name: 'Markazi'
  },
  {
    country_iso_code: 'IR',
    state_code: 25,
    state_name: 'Semnan'
  },
  {
    country_iso_code: 'IR',
    state_code: 26,
    state_name: 'Tehran'
  },
  {
    country_iso_code: 'IR',
    state_code: 27,
    state_name: 'Zanjan'
  },
  {
    country_iso_code: 'IR',
    state_code: 28,
    state_name: 'Esfahan'
  },
  {
    country_iso_code: 'IR',
    state_code: 29,
    state_name: 'Kerman'
  },
  {
    country_iso_code: 'IR',
    state_code: 30,
    state_name: 'Khorasan'
  },
  {
    country_iso_code: 'IR',
    state_code: 31,
    state_name: 'Yazd'
  },
  {
    country_iso_code: 'IR',
    state_code: 32,
    state_name: 'Ardabil'
  },
  {
    country_iso_code: 'IR',
    state_code: 33,
    state_name: 'East Azarbaijan'
  },
  {
    country_iso_code: 'IR',
    state_code: 34,
    state_name: 'Markazi'
  },
  {
    country_iso_code: 'IR',
    state_code: 35,
    state_name: 'Mazandaran'
  },
  {
    country_iso_code: 'IR',
    state_code: 36,
    state_name: 'Zanjan'
  },
  {
    country_iso_code: 'IR',
    state_code: 37,
    state_name: 'Golestan'
  },
  {
    country_iso_code: 'IR',
    state_code: 38,
    state_name: 'Qazvin'
  },
  {
    country_iso_code: 'IR',
    state_code: 39,
    state_name: 'Qom'
  },
  {
    country_iso_code: 'IR',
    state_code: 40,
    state_name: 'Yazd'
  },
  {
    country_iso_code: 'IR',
    state_code: 41,
    state_name: 'Khorasan-e Janubi'
  },
  {
    country_iso_code: 'IR',
    state_code: 42,
    state_name: 'Khorasan-e Razavi'
  },
  {
    country_iso_code: 'IR',
    state_code: 43,
    state_name: 'Khorasan-e Shemali'
  },
  {
    country_iso_code: 'IR',
    state_code: 44,
    state_name: 'Alborz'
  },
  {
    country_iso_code: 'IS',
    state_code: '03',
    state_name: 'Arnessysla'
  },
  {
    country_iso_code: 'IS',
    state_code: '05',
    state_name: 'Austur-Hunavatnssysla'
  },
  {
    country_iso_code: 'IS',
    state_code: '06',
    state_name: 'Austur-Skaftafellssysla'
  },
  {
    country_iso_code: 'IS',
    state_code: '07',
    state_name: 'Borgarfjardarsysla'
  },
  {
    country_iso_code: 'IS',
    state_code: '09',
    state_name: 'Eyjafjardarsysla'
  },
  {
    country_iso_code: 'IS',
    state_code: 10,
    state_name: 'Gullbringusysla'
  },
  {
    country_iso_code: 'IS',
    state_code: 15,
    state_name: 'Kjosarsysla'
  },
  {
    country_iso_code: 'IS',
    state_code: 17,
    state_name: 'Myrasysla'
  },
  {
    country_iso_code: 'IS',
    state_code: 20,
    state_name: 'Nordur-Mulasysla'
  },
  {
    country_iso_code: 'IS',
    state_code: 21,
    state_name: 'Nordur-Tingeyjarsysla'
  },
  {
    country_iso_code: 'IS',
    state_code: 23,
    state_name: 'Rangarvallasysla'
  },
  {
    country_iso_code: 'IS',
    state_code: 28,
    state_name: 'Skagafjardarsysla'
  },
  {
    country_iso_code: 'IS',
    state_code: 29,
    state_name: 'Snafellsnes- og Hnappadalssysla'
  },
  {
    country_iso_code: 'IS',
    state_code: 30,
    state_name: 'Strandasysla'
  },
  {
    country_iso_code: 'IS',
    state_code: 31,
    state_name: 'Sudur-Mulasysla'
  },
  {
    country_iso_code: 'IS',
    state_code: 32,
    state_name: 'Sudur-Tingeyjarsysla'
  },
  {
    country_iso_code: 'IS',
    state_code: 34,
    state_name: 'Vestur-Bardastrandarsysla'
  },
  {
    country_iso_code: 'IS',
    state_code: 35,
    state_name: 'Vestur-Hunavatnssysla'
  },
  {
    country_iso_code: 'IS',
    state_code: 36,
    state_name: 'Vestur-Isafjardarsysla'
  },
  {
    country_iso_code: 'IS',
    state_code: 37,
    state_name: 'Vestur-Skaftafellssysla'
  },
  {
    country_iso_code: 'IS',
    state_code: 38,
    state_name: 'Austurland'
  },
  {
    country_iso_code: 'IS',
    state_code: 39,
    state_name: 'Hofuoborgarsvaoio'
  },
  {
    country_iso_code: 'IS',
    state_code: 40,
    state_name: 'Norourland Eystra'
  },
  {
    country_iso_code: 'IS',
    state_code: 41,
    state_name: 'Norourland Vestra'
  },
  {
    country_iso_code: 'IS',
    state_code: 42,
    state_name: 'Suourland'
  },
  {
    country_iso_code: 'IS',
    state_code: 43,
    state_name: 'Suournes'
  },
  {
    country_iso_code: 'IS',
    state_code: 44,
    state_name: 'Vestfiroir'
  },
  {
    country_iso_code: 'IS',
    state_code: 45,
    state_name: 'Vesturland'
  },
  {
    country_iso_code: 'IT',
    state_code: '01',
    state_name: 'Abruzzi'
  },
  {
    country_iso_code: 'IT',
    state_code: '02',
    state_name: 'Basilicata'
  },
  {
    country_iso_code: 'IT',
    state_code: '03',
    state_name: 'Calabria'
  },
  {
    country_iso_code: 'IT',
    state_code: '04',
    state_name: 'Campania'
  },
  {
    country_iso_code: 'IT',
    state_code: '05',
    state_name: 'Emilia-Romagna'
  },
  {
    country_iso_code: 'IT',
    state_code: '06',
    state_name: 'Friuli-Venezia Giulia'
  },
  {
    country_iso_code: 'IT',
    state_code: '07',
    state_name: 'Lazio'
  },
  {
    country_iso_code: 'IT',
    state_code: '08',
    state_name: 'Liguria'
  },
  {
    country_iso_code: 'IT',
    state_code: '09',
    state_name: 'Lombardia'
  },
  {
    country_iso_code: 'IT',
    state_code: 10,
    state_name: 'Marche'
  },
  {
    country_iso_code: 'IT',
    state_code: 11,
    state_name: 'Molise'
  },
  {
    country_iso_code: 'IT',
    state_code: 12,
    state_name: 'Piemonte'
  },
  {
    country_iso_code: 'IT',
    state_code: 13,
    state_name: 'Puglia'
  },
  {
    country_iso_code: 'IT',
    state_code: 14,
    state_name: 'Sardegna'
  },
  {
    country_iso_code: 'IT',
    state_code: 15,
    state_name: 'Sicilia'
  },
  {
    country_iso_code: 'IT',
    state_code: 16,
    state_name: 'Toscana'
  },
  {
    country_iso_code: 'IT',
    state_code: 17,
    state_name: 'Trentino-Alto Adige'
  },
  {
    country_iso_code: 'IT',
    state_code: 18,
    state_name: 'Umbria'
  },
  {
    country_iso_code: 'IT',
    state_code: 19,
    state_name: "Valle d'Aosta"
  },
  {
    country_iso_code: 'IT',
    state_code: 20,
    state_name: 'Veneto'
  },
  {
    country_iso_code: 'JM',
    state_code: '01',
    state_name: 'Clarendon'
  },
  {
    country_iso_code: 'JM',
    state_code: '02',
    state_name: 'Hanover'
  },
  {
    country_iso_code: 'JM',
    state_code: '04',
    state_name: 'Manchester'
  },
  {
    country_iso_code: 'JM',
    state_code: '07',
    state_name: 'Portland'
  },
  {
    country_iso_code: 'JM',
    state_code: '08',
    state_name: 'Saint Andrew'
  },
  {
    country_iso_code: 'JM',
    state_code: '09',
    state_name: 'Saint Ann'
  },
  {
    country_iso_code: 'JM',
    state_code: 10,
    state_name: 'Saint Catherine'
  },
  {
    country_iso_code: 'JM',
    state_code: 11,
    state_name: 'Saint Elizabeth'
  },
  {
    country_iso_code: 'JM',
    state_code: 12,
    state_name: 'Saint James'
  },
  {
    country_iso_code: 'JM',
    state_code: 13,
    state_name: 'Saint Mary'
  },
  {
    country_iso_code: 'JM',
    state_code: 14,
    state_name: 'Saint Thomas'
  },
  {
    country_iso_code: 'JM',
    state_code: 15,
    state_name: 'Trelawny'
  },
  {
    country_iso_code: 'JM',
    state_code: 16,
    state_name: 'Westmoreland'
  },
  {
    country_iso_code: 'JM',
    state_code: 17,
    state_name: 'Kingston'
  },
  {
    country_iso_code: 'JO',
    state_code: '02',
    state_name: "Al Balqa'"
  },
  {
    country_iso_code: 'JO',
    state_code: '09',
    state_name: 'Al Karak'
  },
  {
    country_iso_code: 'JO',
    state_code: 12,
    state_name: 'At Tafilah'
  },
  {
    country_iso_code: 'JO',
    state_code: 15,
    state_name: 'Al Mafraq'
  },
  {
    country_iso_code: 'JO',
    state_code: 16,
    state_name: 'Amman'
  },
  {
    country_iso_code: 'JO',
    state_code: 17,
    state_name: 'Az Zaraqa'
  },
  {
    country_iso_code: 'JO',
    state_code: 18,
    state_name: 'Irbid'
  },
  {
    country_iso_code: 'JO',
    state_code: 19,
    state_name: "Ma'an"
  },
  {
    country_iso_code: 'JO',
    state_code: 20,
    state_name: 'Ajlun'
  },
  {
    country_iso_code: 'JO',
    state_code: 21,
    state_name: 'Al Aqabah'
  },
  {
    country_iso_code: 'JO',
    state_code: 22,
    state_name: 'Jarash'
  },
  {
    country_iso_code: 'JO',
    state_code: 23,
    state_name: 'Madaba'
  },
  {
    country_iso_code: 'JP',
    state_code: '01',
    state_name: 'Aichi'
  },
  {
    country_iso_code: 'JP',
    state_code: '02',
    state_name: 'Akita'
  },
  {
    country_iso_code: 'JP',
    state_code: '03',
    state_name: 'Aomori'
  },
  {
    country_iso_code: 'JP',
    state_code: '04',
    state_name: 'Chiba'
  },
  {
    country_iso_code: 'JP',
    state_code: '05',
    state_name: 'Ehime'
  },
  {
    country_iso_code: 'JP',
    state_code: '06',
    state_name: 'Fukui'
  },
  {
    country_iso_code: 'JP',
    state_code: '07',
    state_name: 'Fukuoka'
  },
  {
    country_iso_code: 'JP',
    state_code: '08',
    state_name: 'Fukushima'
  },
  {
    country_iso_code: 'JP',
    state_code: '09',
    state_name: 'Gifu'
  },
  {
    country_iso_code: 'JP',
    state_code: 10,
    state_name: 'Gumma'
  },
  {
    country_iso_code: 'JP',
    state_code: 11,
    state_name: 'Hiroshima'
  },
  {
    country_iso_code: 'JP',
    state_code: 12,
    state_name: 'Hokkaido'
  },
  {
    country_iso_code: 'JP',
    state_code: 13,
    state_name: 'Hyogo'
  },
  {
    country_iso_code: 'JP',
    state_code: 14,
    state_name: 'Ibaraki'
  },
  {
    country_iso_code: 'JP',
    state_code: 15,
    state_name: 'Ishikawa'
  },
  {
    country_iso_code: 'JP',
    state_code: 16,
    state_name: 'Iwate'
  },
  {
    country_iso_code: 'JP',
    state_code: 17,
    state_name: 'Kagawa'
  },
  {
    country_iso_code: 'JP',
    state_code: 18,
    state_name: 'Kagoshima'
  },
  {
    country_iso_code: 'JP',
    state_code: 19,
    state_name: 'Kanagawa'
  },
  {
    country_iso_code: 'JP',
    state_code: 20,
    state_name: 'Kochi'
  },
  {
    country_iso_code: 'JP',
    state_code: 21,
    state_name: 'Kumamoto'
  },
  {
    country_iso_code: 'JP',
    state_code: 22,
    state_name: 'Kyoto'
  },
  {
    country_iso_code: 'JP',
    state_code: 23,
    state_name: 'Mie'
  },
  {
    country_iso_code: 'JP',
    state_code: 24,
    state_name: 'Miyagi'
  },
  {
    country_iso_code: 'JP',
    state_code: 25,
    state_name: 'Miyazaki'
  },
  {
    country_iso_code: 'JP',
    state_code: 26,
    state_name: 'Nagano'
  },
  {
    country_iso_code: 'JP',
    state_code: 27,
    state_name: 'Nagasaki'
  },
  {
    country_iso_code: 'JP',
    state_code: 28,
    state_name: 'Nara'
  },
  {
    country_iso_code: 'JP',
    state_code: 29,
    state_name: 'Niigata'
  },
  {
    country_iso_code: 'JP',
    state_code: 30,
    state_name: 'Oita'
  },
  {
    country_iso_code: 'JP',
    state_code: 31,
    state_name: 'Okayama'
  },
  {
    country_iso_code: 'JP',
    state_code: 32,
    state_name: 'Osaka'
  },
  {
    country_iso_code: 'JP',
    state_code: 33,
    state_name: 'Saga'
  },
  {
    country_iso_code: 'JP',
    state_code: 34,
    state_name: 'Saitama'
  },
  {
    country_iso_code: 'JP',
    state_code: 35,
    state_name: 'Shiga'
  },
  {
    country_iso_code: 'JP',
    state_code: 36,
    state_name: 'Shimane'
  },
  {
    country_iso_code: 'JP',
    state_code: 37,
    state_name: 'Shizuoka'
  },
  {
    country_iso_code: 'JP',
    state_code: 38,
    state_name: 'Tochigi'
  },
  {
    country_iso_code: 'JP',
    state_code: 39,
    state_name: 'Tokushima'
  },
  {
    country_iso_code: 'JP',
    state_code: 40,
    state_name: 'Tokyo'
  },
  {
    country_iso_code: 'JP',
    state_code: 41,
    state_name: 'Tottori'
  },
  {
    country_iso_code: 'JP',
    state_code: 42,
    state_name: 'Toyama'
  },
  {
    country_iso_code: 'JP',
    state_code: 43,
    state_name: 'Wakayama'
  },
  {
    country_iso_code: 'JP',
    state_code: 44,
    state_name: 'Yamagata'
  },
  {
    country_iso_code: 'JP',
    state_code: 45,
    state_name: 'Yamaguchi'
  },
  {
    country_iso_code: 'JP',
    state_code: 46,
    state_name: 'Yamanashi'
  },
  {
    country_iso_code: 'JP',
    state_code: 47,
    state_name: 'Okinawa'
  },
  {
    country_iso_code: 'KE',
    state_code: '01',
    state_name: 'Central'
  },
  {
    country_iso_code: 'KE',
    state_code: '02',
    state_name: 'Coast'
  },
  {
    country_iso_code: 'KE',
    state_code: '03',
    state_name: 'Eastern'
  },
  {
    country_iso_code: 'KE',
    state_code: '05',
    state_name: 'Nairobi Area'
  },
  {
    country_iso_code: 'KE',
    state_code: '06',
    state_name: 'North-Eastern'
  },
  {
    country_iso_code: 'KE',
    state_code: '07',
    state_name: 'Nyanza'
  },
  {
    country_iso_code: 'KE',
    state_code: '08',
    state_name: 'Rift Valley'
  },
  {
    country_iso_code: 'KE',
    state_code: '09',
    state_name: 'Western'
  },
  {
    country_iso_code: 'KG',
    state_code: '01',
    state_name: 'Bishkek'
  },
  {
    country_iso_code: 'KG',
    state_code: '02',
    state_name: 'Chuy'
  },
  {
    country_iso_code: 'KG',
    state_code: '03',
    state_name: 'Jalal-Abad'
  },
  {
    country_iso_code: 'KG',
    state_code: '04',
    state_name: 'Naryn'
  },
  {
    country_iso_code: 'KG',
    state_code: '05',
    state_name: 'Osh'
  },
  {
    country_iso_code: 'KG',
    state_code: '06',
    state_name: 'Talas'
  },
  {
    country_iso_code: 'KG',
    state_code: '07',
    state_name: 'Ysyk-Kol'
  },
  {
    country_iso_code: 'KG',
    state_code: '08',
    state_name: 'Osh'
  },
  {
    country_iso_code: 'KG',
    state_code: '09',
    state_name: 'Batken'
  },
  {
    country_iso_code: 'KH',
    state_code: '01',
    state_name: 'Batdambang'
  },
  {
    country_iso_code: 'KH',
    state_code: '02',
    state_name: 'Kampong Cham'
  },
  {
    country_iso_code: 'KH',
    state_code: '03',
    state_name: 'Kampong Chhnang'
  },
  {
    country_iso_code: 'KH',
    state_code: '04',
    state_name: 'Kampong Speu'
  },
  {
    country_iso_code: 'KH',
    state_code: '05',
    state_name: 'Kampong Thum'
  },
  {
    country_iso_code: 'KH',
    state_code: '06',
    state_name: 'Kampot'
  },
  {
    country_iso_code: 'KH',
    state_code: '07',
    state_name: 'Kandal'
  },
  {
    country_iso_code: 'KH',
    state_code: '08',
    state_name: 'Koh Kong'
  },
  {
    country_iso_code: 'KH',
    state_code: '09',
    state_name: 'Kracheh'
  },
  {
    country_iso_code: 'KH',
    state_code: 10,
    state_name: 'Mondulkiri'
  },
  {
    country_iso_code: 'KH',
    state_code: 11,
    state_name: 'Phnum Penh'
  },
  {
    country_iso_code: 'KH',
    state_code: 12,
    state_name: 'Pursat'
  },
  {
    country_iso_code: 'KH',
    state_code: 13,
    state_name: 'Preah Vihear'
  },
  {
    country_iso_code: 'KH',
    state_code: 14,
    state_name: 'Prey Veng'
  },
  {
    country_iso_code: 'KH',
    state_code: 15,
    state_name: 'Ratanakiri Kiri'
  },
  {
    country_iso_code: 'KH',
    state_code: 16,
    state_name: 'Siem Reap'
  },
  {
    country_iso_code: 'KH',
    state_code: 17,
    state_name: 'Stung Treng'
  },
  {
    country_iso_code: 'KH',
    state_code: 18,
    state_name: 'Svay Rieng'
  },
  {
    country_iso_code: 'KH',
    state_code: 19,
    state_name: 'Takeo'
  },
  {
    country_iso_code: 'KH',
    state_code: 22,
    state_name: 'Phnum Penh'
  },
  {
    country_iso_code: 'KH',
    state_code: 23,
    state_name: 'Ratanakiri'
  },
  {
    country_iso_code: 'KH',
    state_code: 25,
    state_name: 'Banteay Meanchey'
  },
  {
    country_iso_code: 'KH',
    state_code: 28,
    state_name: 'Preah Seihanu'
  },
  {
    country_iso_code: 'KH',
    state_code: 29,
    state_name: 'Batdambang'
  },
  {
    country_iso_code: 'KH',
    state_code: 30,
    state_name: 'Pailin'
  },
  {
    country_iso_code: 'KI',
    state_code: '01',
    state_name: 'Gilbert Islands'
  },
  {
    country_iso_code: 'KI',
    state_code: '02',
    state_name: 'Line Islands'
  },
  {
    country_iso_code: 'KI',
    state_code: '03',
    state_name: 'Phoenix Islands'
  },
  {
    country_iso_code: 'KM',
    state_code: '01',
    state_name: 'Anjouan'
  },
  {
    country_iso_code: 'KM',
    state_code: '02',
    state_name: 'Grande Comore'
  },
  {
    country_iso_code: 'KM',
    state_code: '03',
    state_name: 'Moheli'
  },
  {
    country_iso_code: 'KN',
    state_code: '01',
    state_name: 'Christ Church Nichola Town'
  },
  {
    country_iso_code: 'KN',
    state_code: '02',
    state_name: 'Saint Anne Sandy Point'
  },
  {
    country_iso_code: 'KN',
    state_code: '03',
    state_name: 'Saint George Basseterre'
  },
  {
    country_iso_code: 'KN',
    state_code: '04',
    state_name: 'Saint George Gingerland'
  },
  {
    country_iso_code: 'KN',
    state_code: '05',
    state_name: 'Saint James Windward'
  },
  {
    country_iso_code: 'KN',
    state_code: '06',
    state_name: 'Saint John Capisterre'
  },
  {
    country_iso_code: 'KN',
    state_code: '07',
    state_name: 'Saint John Figtree'
  },
  {
    country_iso_code: 'KN',
    state_code: '08',
    state_name: 'Saint Mary Cayon'
  },
  {
    country_iso_code: 'KN',
    state_code: '09',
    state_name: 'Saint Paul Capisterre'
  },
  {
    country_iso_code: 'KN',
    state_code: 10,
    state_name: 'Saint Paul Charlestown'
  },
  {
    country_iso_code: 'KN',
    state_code: 11,
    state_name: 'Saint Peter Basseterre'
  },
  {
    country_iso_code: 'KN',
    state_code: 12,
    state_name: 'Saint Thomas Lowland'
  },
  {
    country_iso_code: 'KN',
    state_code: 13,
    state_name: 'Saint Thomas Middle Island'
  },
  {
    country_iso_code: 'KN',
    state_code: 15,
    state_name: 'Trinity Palmetto Point'
  },
  {
    country_iso_code: 'KP',
    state_code: '01',
    state_name: 'Chagang-do'
  },
  {
    country_iso_code: 'KP',
    state_code: '03',
    state_name: 'Hamgyong-namdo'
  },
  {
    country_iso_code: 'KP',
    state_code: '06',
    state_name: 'Hwanghae-namdo'
  },
  {
    country_iso_code: 'KP',
    state_code: '07',
    state_name: 'Hwanghae-bukto'
  },
  {
    country_iso_code: 'KP',
    state_code: '08',
    state_name: 'Kaesong-si'
  },
  {
    country_iso_code: 'KP',
    state_code: '09',
    state_name: 'Kangwon-do'
  },
  {
    country_iso_code: 'KP',
    state_code: 11,
    state_name: "P'yongan-bukto"
  },
  {
    country_iso_code: 'KP',
    state_code: 12,
    state_name: "P'yongyang-si"
  },
  {
    country_iso_code: 'KP',
    state_code: 13,
    state_name: 'Yanggang-do'
  },
  {
    country_iso_code: 'KP',
    state_code: 14,
    state_name: "Namp'o-si"
  },
  {
    country_iso_code: 'KP',
    state_code: 15,
    state_name: "P'yongan-namdo"
  },
  {
    country_iso_code: 'KP',
    state_code: 17,
    state_name: 'Hamgyong-bukto'
  },
  {
    country_iso_code: 'KP',
    state_code: 18,
    state_name: 'Najin Sonbong-si'
  },
  {
    country_iso_code: 'KR',
    state_code: '01',
    state_name: 'Cheju-do'
  },
  {
    country_iso_code: 'KR',
    state_code: '03',
    state_name: 'Cholla-bukto'
  },
  {
    country_iso_code: 'KR',
    state_code: '05',
    state_name: "Ch'ungch'ong-bukto"
  },
  {
    country_iso_code: 'KR',
    state_code: '06',
    state_name: 'Kangwon-do'
  },
  {
    country_iso_code: 'KR',
    state_code: 10,
    state_name: 'Pusan-jikhalsi'
  },
  {
    country_iso_code: 'KR',
    state_code: 11,
    state_name: "Seoul-t'ukpyolsi"
  },
  {
    country_iso_code: 'KR',
    state_code: 12,
    state_name: "Inch'on-jikhalsi"
  },
  {
    country_iso_code: 'KR',
    state_code: 13,
    state_name: 'Kyonggi-do'
  },
  {
    country_iso_code: 'KR',
    state_code: 14,
    state_name: 'Kyongsang-bukto'
  },
  {
    country_iso_code: 'KR',
    state_code: 15,
    state_name: 'Taegu-jikhalsi'
  },
  {
    country_iso_code: 'KR',
    state_code: 16,
    state_name: 'Cholla-namdo'
  },
  {
    country_iso_code: 'KR',
    state_code: 17,
    state_name: "Ch'ungch'ong-namdo"
  },
  {
    country_iso_code: 'KR',
    state_code: 18,
    state_name: 'Kwangju-jikhalsi'
  },
  {
    country_iso_code: 'KR',
    state_code: 19,
    state_name: 'Taejon-jikhalsi'
  },
  {
    country_iso_code: 'KR',
    state_code: 20,
    state_name: 'Kyongsang-namdo'
  },
  {
    country_iso_code: 'KR',
    state_code: 21,
    state_name: 'Ulsan-gwangyoksi'
  },
  {
    country_iso_code: 'KW',
    state_code: '01',
    state_name: 'Al Ahmadi'
  },
  {
    country_iso_code: 'KW',
    state_code: '02',
    state_name: 'Al Kuwayt'
  },
  {
    country_iso_code: 'KW',
    state_code: '05',
    state_name: 'Al Jahra'
  },
  {
    country_iso_code: 'KW',
    state_code: '07',
    state_name: 'Al Farwaniyah'
  },
  {
    country_iso_code: 'KW',
    state_code: '08',
    state_name: 'Hawalli'
  },
  {
    country_iso_code: 'KW',
    state_code: '09',
    state_name: 'Mubarak al Kabir'
  },
  {
    country_iso_code: 'KY',
    state_code: '01',
    state_name: 'Creek'
  },
  {
    country_iso_code: 'KY',
    state_code: '02',
    state_name: 'Eastern'
  },
  {
    country_iso_code: 'KY',
    state_code: '03',
    state_name: 'Midland'
  },
  {
    country_iso_code: 'KY',
    state_code: '04',
    state_name: 'South Town'
  },
  {
    country_iso_code: 'KY',
    state_code: '05',
    state_name: 'Spot Bay'
  },
  {
    country_iso_code: 'KY',
    state_code: '06',
    state_name: 'Stake Bay'
  },
  {
    country_iso_code: 'KY',
    state_code: '07',
    state_name: 'West End'
  },
  {
    country_iso_code: 'KY',
    state_code: '08',
    state_name: 'Western'
  },
  {
    country_iso_code: 'KZ',
    state_code: '01',
    state_name: 'Almaty'
  },
  {
    country_iso_code: 'KZ',
    state_code: '02',
    state_name: 'Almaty City'
  },
  {
    country_iso_code: 'KZ',
    state_code: '03',
    state_name: 'Aqmola'
  },
  {
    country_iso_code: 'KZ',
    state_code: '04',
    state_name: 'Aqtobe'
  },
  {
    country_iso_code: 'KZ',
    state_code: '05',
    state_name: 'Astana'
  },
  {
    country_iso_code: 'KZ',
    state_code: '06',
    state_name: 'Atyrau'
  },
  {
    country_iso_code: 'KZ',
    state_code: '07',
    state_name: 'West Kazakhstan'
  },
  {
    country_iso_code: 'KZ',
    state_code: '08',
    state_name: 'Bayqonyr'
  },
  {
    country_iso_code: 'KZ',
    state_code: '09',
    state_name: 'Mangghystau'
  },
  {
    country_iso_code: 'KZ',
    state_code: 10,
    state_name: 'South Kazakhstan'
  },
  {
    country_iso_code: 'KZ',
    state_code: 11,
    state_name: 'Pavlodar'
  },
  {
    country_iso_code: 'KZ',
    state_code: 12,
    state_name: 'Qaraghandy'
  },
  {
    country_iso_code: 'KZ',
    state_code: 13,
    state_name: 'Qostanay'
  },
  {
    country_iso_code: 'KZ',
    state_code: 14,
    state_name: 'Qyzylorda'
  },
  {
    country_iso_code: 'KZ',
    state_code: 15,
    state_name: 'East Kazakhstan'
  },
  {
    country_iso_code: 'KZ',
    state_code: 16,
    state_name: 'North Kazakhstan'
  },
  {
    country_iso_code: 'KZ',
    state_code: 17,
    state_name: 'Zhambyl'
  },
  {
    country_iso_code: 'LA',
    state_code: '01',
    state_name: 'Attapu'
  },
  {
    country_iso_code: 'LA',
    state_code: '02',
    state_name: 'Champasak'
  },
  {
    country_iso_code: 'LA',
    state_code: '03',
    state_name: 'Houaphan'
  },
  {
    country_iso_code: 'LA',
    state_code: '04',
    state_name: 'Khammouan'
  },
  {
    country_iso_code: 'LA',
    state_code: '05',
    state_name: 'Louang Namtha'
  },
  {
    country_iso_code: 'LA',
    state_code: '07',
    state_name: 'Oudomxai'
  },
  {
    country_iso_code: 'LA',
    state_code: '08',
    state_name: 'Phongsali'
  },
  {
    country_iso_code: 'LA',
    state_code: '09',
    state_name: 'Saravan'
  },
  {
    country_iso_code: 'LA',
    state_code: 10,
    state_name: 'Savannakhet'
  },
  {
    country_iso_code: 'LA',
    state_code: 11,
    state_name: 'Vientiane'
  },
  {
    country_iso_code: 'LA',
    state_code: 13,
    state_name: 'Xaignabouri'
  },
  {
    country_iso_code: 'LA',
    state_code: 14,
    state_name: 'Xiangkhoang'
  },
  {
    country_iso_code: 'LA',
    state_code: 17,
    state_name: 'Louangphrabang'
  },
  {
    country_iso_code: 'LB',
    state_code: '01',
    state_name: 'Beqaa'
  },
  {
    country_iso_code: 'LB',
    state_code: '02',
    state_name: 'Al Janub'
  },
  {
    country_iso_code: 'LB',
    state_code: '03',
    state_name: 'Liban-Nord'
  },
  {
    country_iso_code: 'LB',
    state_code: '04',
    state_name: 'Beyrouth'
  },
  {
    country_iso_code: 'LB',
    state_code: '05',
    state_name: 'Mont-Liban'
  },
  {
    country_iso_code: 'LB',
    state_code: '06',
    state_name: 'Liban-Sud'
  },
  {
    country_iso_code: 'LB',
    state_code: '07',
    state_name: 'Nabatiye'
  },
  {
    country_iso_code: 'LB',
    state_code: '08',
    state_name: 'Beqaa'
  },
  {
    country_iso_code: 'LB',
    state_code: '09',
    state_name: 'Liban-Nord'
  },
  {
    country_iso_code: 'LB',
    state_code: 10,
    state_name: 'Aakk,r'
  },
  {
    country_iso_code: 'LB',
    state_code: 11,
    state_name: 'Baalbek-Hermel'
  },
  {
    country_iso_code: 'LC',
    state_code: '01',
    state_name: 'Anse-la-Raye'
  },
  {
    country_iso_code: 'LC',
    state_code: '02',
    state_name: 'Dauphin'
  },
  {
    country_iso_code: 'LC',
    state_code: '03',
    state_name: 'Castries'
  },
  {
    country_iso_code: 'LC',
    state_code: '04',
    state_name: 'Choiseul'
  },
  {
    country_iso_code: 'LC',
    state_code: '05',
    state_name: 'Dennery'
  },
  {
    country_iso_code: 'LC',
    state_code: '06',
    state_name: 'Gros-Islet'
  },
  {
    country_iso_code: 'LC',
    state_code: '07',
    state_name: 'Laborie'
  },
  {
    country_iso_code: 'LC',
    state_code: '08',
    state_name: 'Micoud'
  },
  {
    country_iso_code: 'LC',
    state_code: '09',
    state_name: 'Soufriere'
  },
  {
    country_iso_code: 'LC',
    state_code: 10,
    state_name: 'Vieux-Fort'
  },
  {
    country_iso_code: 'LC',
    state_code: 11,
    state_name: 'Praslin'
  },
  {
    country_iso_code: 'LI',
    state_code: '01',
    state_name: 'Balzers'
  },
  {
    country_iso_code: 'LI',
    state_code: '02',
    state_name: 'Eschen'
  },
  {
    country_iso_code: 'LI',
    state_code: '03',
    state_name: 'Gamprin'
  },
  {
    country_iso_code: 'LI',
    state_code: '04',
    state_name: 'Mauren'
  },
  {
    country_iso_code: 'LI',
    state_code: '05',
    state_name: 'Planken'
  },
  {
    country_iso_code: 'LI',
    state_code: '06',
    state_name: 'Ruggell'
  },
  {
    country_iso_code: 'LI',
    state_code: '07',
    state_name: 'Schaan'
  },
  {
    country_iso_code: 'LI',
    state_code: '08',
    state_name: 'Schellenberg'
  },
  {
    country_iso_code: 'LI',
    state_code: '09',
    state_name: 'Triesen'
  },
  {
    country_iso_code: 'LI',
    state_code: 10,
    state_name: 'Triesenberg'
  },
  {
    country_iso_code: 'LI',
    state_code: 11,
    state_name: 'Vaduz'
  },
  {
    country_iso_code: 'LI',
    state_code: 21,
    state_name: 'Gbarpolu'
  },
  {
    country_iso_code: 'LI',
    state_code: 22,
    state_name: 'River Gee'
  },
  {
    country_iso_code: 'LK',
    state_code: 29,
    state_name: 'Central'
  },
  {
    country_iso_code: 'LK',
    state_code: 30,
    state_name: 'North Central'
  },
  {
    country_iso_code: 'LK',
    state_code: 32,
    state_name: 'North Western'
  },
  {
    country_iso_code: 'LK',
    state_code: 33,
    state_name: 'Sabaragamuwa'
  },
  {
    country_iso_code: 'LK',
    state_code: 34,
    state_name: 'Southern'
  },
  {
    country_iso_code: 'LK',
    state_code: 35,
    state_name: 'Uva'
  },
  {
    country_iso_code: 'LK',
    state_code: 36,
    state_name: 'Western'
  },
  {
    country_iso_code: 'LK',
    state_code: 37,
    state_name: 'Eastern'
  },
  {
    country_iso_code: 'LK',
    state_code: 38,
    state_name: 'Northern'
  },
  {
    country_iso_code: 'LR',
    state_code: '01',
    state_name: 'Bong'
  },
  {
    country_iso_code: 'LR',
    state_code: '04',
    state_name: 'Grand Cape Mount'
  },
  {
    country_iso_code: 'LR',
    state_code: '05',
    state_name: 'Lofa'
  },
  {
    country_iso_code: 'LR',
    state_code: '06',
    state_name: 'Maryland'
  },
  {
    country_iso_code: 'LR',
    state_code: '07',
    state_name: 'Monrovia'
  },
  {
    country_iso_code: 'LR',
    state_code: '09',
    state_name: 'Nimba'
  },
  {
    country_iso_code: 'LR',
    state_code: 10,
    state_name: 'Sino'
  },
  {
    country_iso_code: 'LR',
    state_code: 11,
    state_name: 'Grand Bassa'
  },
  {
    country_iso_code: 'LR',
    state_code: 12,
    state_name: 'Grand Cape Mount'
  },
  {
    country_iso_code: 'LR',
    state_code: 13,
    state_name: 'Maryland'
  },
  {
    country_iso_code: 'LR',
    state_code: 14,
    state_name: 'Montserrado'
  },
  {
    country_iso_code: 'LR',
    state_code: 17,
    state_name: 'Margibi'
  },
  {
    country_iso_code: 'LR',
    state_code: 18,
    state_name: 'River Cess'
  },
  {
    country_iso_code: 'LR',
    state_code: 19,
    state_name: 'Grand Gedeh'
  },
  {
    country_iso_code: 'LR',
    state_code: 20,
    state_name: 'Lofa'
  },
  {
    country_iso_code: 'LR',
    state_code: 21,
    state_name: 'Gbarpolu'
  },
  {
    country_iso_code: 'LR',
    state_code: 22,
    state_name: 'River Gee'
  },
  {
    country_iso_code: 'LS',
    state_code: 10,
    state_name: 'Berea'
  },
  {
    country_iso_code: 'LS',
    state_code: 11,
    state_name: 'Butha-Buthe'
  },
  {
    country_iso_code: 'LS',
    state_code: 12,
    state_name: 'Leribe'
  },
  {
    country_iso_code: 'LS',
    state_code: 13,
    state_name: 'Mafeteng'
  },
  {
    country_iso_code: 'LS',
    state_code: 14,
    state_name: 'Maseru'
  },
  {
    country_iso_code: 'LS',
    state_code: 15,
    state_name: 'Mohales Hoek'
  },
  {
    country_iso_code: 'LS',
    state_code: 16,
    state_name: 'Mokhotlong'
  },
  {
    country_iso_code: 'LS',
    state_code: 17,
    state_name: 'Qachas Nek'
  },
  {
    country_iso_code: 'LS',
    state_code: 18,
    state_name: 'Quthing'
  },
  {
    country_iso_code: 'LS',
    state_code: 19,
    state_name: 'Thaba-Tseka'
  },
  {
    country_iso_code: 'LT',
    state_code: 56,
    state_name: 'Alytaus Apskritis'
  },
  {
    country_iso_code: 'LT',
    state_code: 57,
    state_name: 'Kauno Apskritis'
  },
  {
    country_iso_code: 'LT',
    state_code: 58,
    state_name: 'Klaipedos Apskritis'
  },
  {
    country_iso_code: 'LT',
    state_code: 59,
    state_name: 'Marijampoles Apskritis'
  },
  {
    country_iso_code: 'LT',
    state_code: 60,
    state_name: 'Panevezio Apskritis'
  },
  {
    country_iso_code: 'LT',
    state_code: 61,
    state_name: 'Siauliu Apskritis'
  },
  {
    country_iso_code: 'LT',
    state_code: 62,
    state_name: 'Taurages Apskritis'
  },
  {
    country_iso_code: 'LT',
    state_code: 63,
    state_name: 'Telsiu Apskritis'
  },
  {
    country_iso_code: 'LT',
    state_code: 64,
    state_name: 'Utenos Apskritis'
  },
  {
    country_iso_code: 'LT',
    state_code: 65,
    state_name: 'Vilniaus Apskritis'
  },
  {
    country_iso_code: 'LU',
    state_code: '01',
    state_name: 'Diekirch'
  },
  {
    country_iso_code: 'LU',
    state_code: '02',
    state_name: 'Grevenmacher'
  },
  {
    country_iso_code: 'LU',
    state_code: '03',
    state_name: 'Luxembourg'
  },
  {
    country_iso_code: 'LV',
    state_code: '01',
    state_name: 'Aizkraukles'
  },
  {
    country_iso_code: 'LV',
    state_code: '02',
    state_name: 'Aluksnes'
  },
  {
    country_iso_code: 'LV',
    state_code: '03',
    state_name: 'Balvu'
  },
  {
    country_iso_code: 'LV',
    state_code: '04',
    state_name: 'Bauskas'
  },
  {
    country_iso_code: 'LV',
    state_code: '05',
    state_name: 'Cesu'
  },
  {
    country_iso_code: 'LV',
    state_code: '06',
    state_name: 'Daugavpils'
  },
  {
    country_iso_code: 'LV',
    state_code: '07',
    state_name: 'Daugavpils'
  },
  {
    country_iso_code: 'LV',
    state_code: '08',
    state_name: 'Dobeles'
  },
  {
    country_iso_code: 'LV',
    state_code: '09',
    state_name: 'Gulbenes'
  },
  {
    country_iso_code: 'LV',
    state_code: 10,
    state_name: 'Jekabpils'
  },
  {
    country_iso_code: 'LV',
    state_code: 11,
    state_name: 'Jelgava'
  },
  {
    country_iso_code: 'LV',
    state_code: 12,
    state_name: 'Jelgavas'
  },
  {
    country_iso_code: 'LV',
    state_code: 13,
    state_name: 'Jurmala'
  },
  {
    country_iso_code: 'LV',
    state_code: 14,
    state_name: 'Kraslavas'
  },
  {
    country_iso_code: 'LV',
    state_code: 15,
    state_name: 'Kuldigas'
  },
  {
    country_iso_code: 'LV',
    state_code: 16,
    state_name: 'Liepaja'
  },
  {
    country_iso_code: 'LV',
    state_code: 17,
    state_name: 'Liepajas'
  },
  {
    country_iso_code: 'LV',
    state_code: 18,
    state_name: 'Limbazu'
  },
  {
    country_iso_code: 'LV',
    state_code: 19,
    state_name: 'Ludzas'
  },
  {
    country_iso_code: 'LV',
    state_code: 20,
    state_name: 'Madonas'
  },
  {
    country_iso_code: 'LV',
    state_code: 21,
    state_name: 'Ogres'
  },
  {
    country_iso_code: 'LV',
    state_code: 22,
    state_name: 'Preilu'
  },
  {
    country_iso_code: 'LV',
    state_code: 23,
    state_name: 'Rezekne'
  },
  {
    country_iso_code: 'LV',
    state_code: 24,
    state_name: 'Rezeknes'
  },
  {
    country_iso_code: 'LV',
    state_code: 25,
    state_name: 'Riga'
  },
  {
    country_iso_code: 'LV',
    state_code: 26,
    state_name: 'Rigas'
  },
  {
    country_iso_code: 'LV',
    state_code: 27,
    state_name: 'Saldus'
  },
  {
    country_iso_code: 'LV',
    state_code: 28,
    state_name: 'Talsu'
  },
  {
    country_iso_code: 'LV',
    state_code: 29,
    state_name: 'Tukuma'
  },
  {
    country_iso_code: 'LV',
    state_code: 30,
    state_name: 'Valkas'
  },
  {
    country_iso_code: 'LV',
    state_code: 31,
    state_name: 'Valmieras'
  },
  {
    country_iso_code: 'LV',
    state_code: 32,
    state_name: 'Ventspils'
  },
  {
    country_iso_code: 'LV',
    state_code: 33,
    state_name: 'Ventspils'
  },
  {
    country_iso_code: 'LY',
    state_code: '03',
    state_name: 'Al Aziziyah'
  },
  {
    country_iso_code: 'LY',
    state_code: '05',
    state_name: 'Al Jufrah'
  },
  {
    country_iso_code: 'LY',
    state_code: '08',
    state_name: 'Al Kufrah'
  },
  {
    country_iso_code: 'LY',
    state_code: 13,
    state_name: "Ash Shati'"
  },
  {
    country_iso_code: 'LY',
    state_code: 30,
    state_name: 'Murzuq'
  },
  {
    country_iso_code: 'LY',
    state_code: 34,
    state_name: 'Sabha'
  },
  {
    country_iso_code: 'LY',
    state_code: 41,
    state_name: 'Tarhunah'
  },
  {
    country_iso_code: 'LY',
    state_code: 42,
    state_name: 'Tubruq'
  },
  {
    country_iso_code: 'LY',
    state_code: 45,
    state_name: 'Zlitan'
  },
  {
    country_iso_code: 'LY',
    state_code: 47,
    state_name: 'Ajdabiya'
  },
  {
    country_iso_code: 'LY',
    state_code: 48,
    state_name: 'Al Fatih'
  },
  {
    country_iso_code: 'LY',
    state_code: 49,
    state_name: 'Al Jabal al Akhdar'
  },
  {
    country_iso_code: 'LY',
    state_code: 50,
    state_name: 'Al Khums'
  },
  {
    country_iso_code: 'LY',
    state_code: 51,
    state_name: 'An Nuqat al Khams'
  },
  {
    country_iso_code: 'LY',
    state_code: 52,
    state_name: 'Awbari'
  },
  {
    country_iso_code: 'LY',
    state_code: 53,
    state_name: 'Az Zawiyah'
  },
  {
    country_iso_code: 'LY',
    state_code: 54,
    state_name: 'Banghazi'
  },
  {
    country_iso_code: 'LY',
    state_code: 55,
    state_name: 'Darnah'
  },
  {
    country_iso_code: 'LY',
    state_code: 56,
    state_name: 'Ghadamis'
  },
  {
    country_iso_code: 'LY',
    state_code: 57,
    state_name: 'Gharyan'
  },
  {
    country_iso_code: 'LY',
    state_code: 58,
    state_name: 'Misratah'
  },
  {
    country_iso_code: 'LY',
    state_code: 59,
    state_name: 'Sawfajjin'
  },
  {
    country_iso_code: 'LY',
    state_code: 60,
    state_name: 'Surt'
  },
  {
    country_iso_code: 'LY',
    state_code: 61,
    state_name: 'Tarabulus'
  },
  {
    country_iso_code: 'LY',
    state_code: 62,
    state_name: 'Yafran'
  },
  {
    country_iso_code: 'MA',
    state_code: 45,
    state_name: 'Grand Casablanca'
  },
  {
    country_iso_code: 'MA',
    state_code: 46,
    state_name: 'Fes-Boulemane'
  },
  {
    country_iso_code: 'MA',
    state_code: 47,
    state_name: 'Marrakech-Tensift-Al Haouz'
  },
  {
    country_iso_code: 'MA',
    state_code: 48,
    state_name: 'Meknes-Tafilalet'
  },
  {
    country_iso_code: 'MA',
    state_code: 49,
    state_name: 'Rabat-Sale-Zemmour-Zaer'
  },
  {
    country_iso_code: 'MA',
    state_code: 50,
    state_name: 'Chaouia-Ouardigha'
  },
  {
    country_iso_code: 'MA',
    state_code: 51,
    state_name: 'Doukkala-Abda'
  },
  {
    country_iso_code: 'MA',
    state_code: 52,
    state_name: 'Gharb-Chrarda-Beni Hssen'
  },
  {
    country_iso_code: 'MA',
    state_code: 53,
    state_name: 'Guelmim-Es Smara'
  },
  {
    country_iso_code: 'MA',
    state_code: 54,
    state_name: 'Oriental'
  },
  {
    country_iso_code: 'MA',
    state_code: 55,
    state_name: 'Souss-Massa-Dr,a'
  },
  {
    country_iso_code: 'MA',
    state_code: 56,
    state_name: 'Tadla-Azilal'
  },
  {
    country_iso_code: 'MA',
    state_code: 57,
    state_name: 'Tanger-Tetouan'
  },
  {
    country_iso_code: 'MA',
    state_code: 58,
    state_name: 'Taza-Al Hoceima-Taounate'
  },
  {
    country_iso_code: 'MA',
    state_code: 59,
    state_name: 'La,youne-Boujdour-Sakia El Hamra'
  },
  {
    country_iso_code: 'MC',
    state_code: '01',
    state_name: 'La Condamine'
  },
  {
    country_iso_code: 'MC',
    state_code: '02',
    state_name: 'Monaco'
  },
  {
    country_iso_code: 'MC',
    state_code: '03',
    state_name: 'Monte-Carlo'
  },
  {
    country_iso_code: 'MD',
    state_code: 51,
    state_name: 'Gagauzia'
  },
  {
    country_iso_code: 'MD',
    state_code: 57,
    state_name: 'Chisinau'
  },
  {
    country_iso_code: 'MD',
    state_code: 58,
    state_name: 'Stinga Nistrului'
  },
  {
    country_iso_code: 'MD',
    state_code: 59,
    state_name: 'Anenii Noi'
  },
  {
    country_iso_code: 'MD',
    state_code: 60,
    state_name: 'Balti'
  },
  {
    country_iso_code: 'MD',
    state_code: 61,
    state_name: 'Basarabeasca'
  },
  {
    country_iso_code: 'MD',
    state_code: 62,
    state_name: 'Bender'
  },
  {
    country_iso_code: 'MD',
    state_code: 63,
    state_name: 'Briceni'
  },
  {
    country_iso_code: 'MD',
    state_code: 64,
    state_name: 'Cahul'
  },
  {
    country_iso_code: 'MD',
    state_code: 65,
    state_name: 'Cantemir'
  },
  {
    country_iso_code: 'MD',
    state_code: 66,
    state_name: 'Calarasi'
  },
  {
    country_iso_code: 'MD',
    state_code: 67,
    state_name: 'Causeni'
  },
  {
    country_iso_code: 'MD',
    state_code: 68,
    state_name: 'Cimislia'
  },
  {
    country_iso_code: 'MD',
    state_code: 69,
    state_name: 'Criuleni'
  },
  {
    country_iso_code: 'MD',
    state_code: 70,
    state_name: 'Donduseni'
  },
  {
    country_iso_code: 'MD',
    state_code: 71,
    state_name: 'Drochia'
  },
  {
    country_iso_code: 'MD',
    state_code: 72,
    state_name: 'Dubasari'
  },
  {
    country_iso_code: 'MD',
    state_code: 73,
    state_name: 'Edinet'
  },
  {
    country_iso_code: 'MD',
    state_code: 74,
    state_name: 'Falesti'
  },
  {
    country_iso_code: 'MD',
    state_code: 75,
    state_name: 'Floresti'
  },
  {
    country_iso_code: 'MD',
    state_code: 76,
    state_name: 'Glodeni'
  },
  {
    country_iso_code: 'MD',
    state_code: 77,
    state_name: 'Hincesti'
  },
  {
    country_iso_code: 'MD',
    state_code: 78,
    state_name: 'Ialoveni'
  },
  {
    country_iso_code: 'MD',
    state_code: 79,
    state_name: 'Leova'
  },
  {
    country_iso_code: 'MD',
    state_code: 80,
    state_name: 'Nisporeni'
  },
  {
    country_iso_code: 'MD',
    state_code: 81,
    state_name: 'Ocnita'
  },
  {
    country_iso_code: 'MD',
    state_code: 82,
    state_name: 'Orhei'
  },
  {
    country_iso_code: 'MD',
    state_code: 83,
    state_name: 'Rezina'
  },
  {
    country_iso_code: 'MD',
    state_code: 84,
    state_name: 'Riscani'
  },
  {
    country_iso_code: 'MD',
    state_code: 85,
    state_name: 'Singerei'
  },
  {
    country_iso_code: 'MD',
    state_code: 86,
    state_name: 'Soldanesti'
  },
  {
    country_iso_code: 'MD',
    state_code: 87,
    state_name: 'Soroca'
  },
  {
    country_iso_code: 'MD',
    state_code: 88,
    state_name: 'Stefan-Voda'
  },
  {
    country_iso_code: 'MD',
    state_code: 89,
    state_name: 'Straseni'
  },
  {
    country_iso_code: 'MD',
    state_code: 90,
    state_name: 'Taraclia'
  },
  {
    country_iso_code: 'MD',
    state_code: 91,
    state_name: 'Telenesti'
  },
  {
    country_iso_code: 'MD',
    state_code: 92,
    state_name: 'Ungheni'
  },
  {
    country_iso_code: 'MG',
    state_code: '01',
    state_name: 'Antsiranana'
  },
  {
    country_iso_code: 'MG',
    state_code: '02',
    state_name: 'Fianarantsoa'
  },
  {
    country_iso_code: 'MG',
    state_code: '03',
    state_name: 'Mahajanga'
  },
  {
    country_iso_code: 'MG',
    state_code: '04',
    state_name: 'Toamasina'
  },
  {
    country_iso_code: 'MG',
    state_code: '05',
    state_name: 'Antananarivo'
  },
  {
    country_iso_code: 'MG',
    state_code: '06',
    state_name: 'Toliara'
  },
  {
    country_iso_code: 'MK',
    state_code: '01',
    state_name: 'Aracinovo'
  },
  {
    country_iso_code: 'MK',
    state_code: '02',
    state_name: 'Bac'
  },
  {
    country_iso_code: 'MK',
    state_code: '03',
    state_name: 'Belcista'
  },
  {
    country_iso_code: 'MK',
    state_code: '04',
    state_name: 'Berovo'
  },
  {
    country_iso_code: 'MK',
    state_code: '05',
    state_name: 'Bistrica'
  },
  {
    country_iso_code: 'MK',
    state_code: '06',
    state_name: 'Bitola'
  },
  {
    country_iso_code: 'MK',
    state_code: '07',
    state_name: 'Blatec'
  },
  {
    country_iso_code: 'MK',
    state_code: '08',
    state_name: 'Bogdanci'
  },
  {
    country_iso_code: 'MK',
    state_code: '09',
    state_name: 'Bogomila'
  },
  {
    country_iso_code: 'MK',
    state_code: 10,
    state_name: 'Bogovinje'
  },
  {
    country_iso_code: 'MK',
    state_code: 11,
    state_name: 'Bosilovo'
  },
  {
    country_iso_code: 'MK',
    state_code: 12,
    state_name: 'Brvenica'
  },
  {
    country_iso_code: 'MK',
    state_code: 13,
    state_name: 'Cair'
  },
  {
    country_iso_code: 'MK',
    state_code: 14,
    state_name: 'Capari'
  },
  {
    country_iso_code: 'MK',
    state_code: 15,
    state_name: 'Caska'
  },
  {
    country_iso_code: 'MK',
    state_code: 16,
    state_name: 'Cegrane'
  },
  {
    country_iso_code: 'MK',
    state_code: 17,
    state_name: 'Centar'
  },
  {
    country_iso_code: 'MK',
    state_code: 18,
    state_name: 'Centar Zupa'
  },
  {
    country_iso_code: 'MK',
    state_code: 19,
    state_name: 'Cesinovo'
  },
  {
    country_iso_code: 'MK',
    state_code: 20,
    state_name: 'Cucer-Sandevo'
  },
  {
    country_iso_code: 'MK',
    state_code: 21,
    state_name: 'Debar'
  },
  {
    country_iso_code: 'MK',
    state_code: 22,
    state_name: 'Delcevo'
  },
  {
    country_iso_code: 'MK',
    state_code: 23,
    state_name: 'Delogozdi'
  },
  {
    country_iso_code: 'MK',
    state_code: 24,
    state_name: 'Demir Hisar'
  },
  {
    country_iso_code: 'MK',
    state_code: 25,
    state_name: 'Demir Kapija'
  },
  {
    country_iso_code: 'MK',
    state_code: 26,
    state_name: 'Dobrusevo'
  },
  {
    country_iso_code: 'MK',
    state_code: 27,
    state_name: 'Dolna Banjica'
  },
  {
    country_iso_code: 'MK',
    state_code: 28,
    state_name: 'Dolneni'
  },
  {
    country_iso_code: 'MK',
    state_code: 29,
    state_name: 'Dorce Petrov'
  },
  {
    country_iso_code: 'MK',
    state_code: 30,
    state_name: 'Drugovo'
  },
  {
    country_iso_code: 'MK',
    state_code: 31,
    state_name: 'Dzepciste'
  },
  {
    country_iso_code: 'MK',
    state_code: 32,
    state_name: 'Gazi Baba'
  },
  {
    country_iso_code: 'MK',
    state_code: 33,
    state_name: 'Gevgelija'
  },
  {
    country_iso_code: 'MK',
    state_code: 34,
    state_name: 'Gostivar'
  },
  {
    country_iso_code: 'MK',
    state_code: 35,
    state_name: 'Gradsko'
  },
  {
    country_iso_code: 'MK',
    state_code: 36,
    state_name: 'Ilinden'
  },
  {
    country_iso_code: 'MK',
    state_code: 37,
    state_name: 'Izvor'
  },
  {
    country_iso_code: 'MK',
    state_code: 38,
    state_name: 'Jegunovce'
  },
  {
    country_iso_code: 'MK',
    state_code: 39,
    state_name: 'Kamenjane'
  },
  {
    country_iso_code: 'MK',
    state_code: 40,
    state_name: 'Karbinci'
  },
  {
    country_iso_code: 'MK',
    state_code: 41,
    state_name: 'Karpos'
  },
  {
    country_iso_code: 'MK',
    state_code: 42,
    state_name: 'Kavadarci'
  },
  {
    country_iso_code: 'MK',
    state_code: 43,
    state_name: 'Kicevo'
  },
  {
    country_iso_code: 'MK',
    state_code: 44,
    state_name: 'Kisela Voda'
  },
  {
    country_iso_code: 'MK',
    state_code: 45,
    state_name: 'Klecevce'
  },
  {
    country_iso_code: 'MK',
    state_code: 46,
    state_name: 'Kocani'
  },
  {
    country_iso_code: 'MK',
    state_code: 47,
    state_name: 'Konce'
  },
  {
    country_iso_code: 'MK',
    state_code: 48,
    state_name: 'Kondovo'
  },
  {
    country_iso_code: 'MK',
    state_code: 49,
    state_name: 'Konopiste'
  },
  {
    country_iso_code: 'MK',
    state_code: 50,
    state_name: 'Kosel'
  },
  {
    country_iso_code: 'MK',
    state_code: 51,
    state_name: 'Kratovo'
  },
  {
    country_iso_code: 'MK',
    state_code: 52,
    state_name: 'Kriva Palanka'
  },
  {
    country_iso_code: 'MK',
    state_code: 53,
    state_name: 'Krivogastani'
  },
  {
    country_iso_code: 'MK',
    state_code: 54,
    state_name: 'Krusevo'
  },
  {
    country_iso_code: 'MK',
    state_code: 55,
    state_name: 'Kuklis'
  },
  {
    country_iso_code: 'MK',
    state_code: 56,
    state_name: 'Kukurecani'
  },
  {
    country_iso_code: 'MK',
    state_code: 57,
    state_name: 'Kumanovo'
  },
  {
    country_iso_code: 'MK',
    state_code: 58,
    state_name: 'Labunista'
  },
  {
    country_iso_code: 'MK',
    state_code: 59,
    state_name: 'Lipkovo'
  },
  {
    country_iso_code: 'MK',
    state_code: 60,
    state_name: 'Lozovo'
  },
  {
    country_iso_code: 'MK',
    state_code: 61,
    state_name: 'Lukovo'
  },
  {
    country_iso_code: 'MK',
    state_code: 62,
    state_name: 'Makedonska Kamenica'
  },
  {
    country_iso_code: 'MK',
    state_code: 63,
    state_name: 'Makedonski Brod'
  },
  {
    country_iso_code: 'MK',
    state_code: 64,
    state_name: 'Mavrovi Anovi'
  },
  {
    country_iso_code: 'MK',
    state_code: 65,
    state_name: 'Meseista'
  },
  {
    country_iso_code: 'MK',
    state_code: 66,
    state_name: 'Miravci'
  },
  {
    country_iso_code: 'MK',
    state_code: 67,
    state_name: 'Mogila'
  },
  {
    country_iso_code: 'MK',
    state_code: 68,
    state_name: 'Murtino'
  },
  {
    country_iso_code: 'MK',
    state_code: 69,
    state_name: 'Negotino'
  },
  {
    country_iso_code: 'MK',
    state_code: 70,
    state_name: 'Negotino-Polosko'
  },
  {
    country_iso_code: 'MK',
    state_code: 71,
    state_name: 'Novaci'
  },
  {
    country_iso_code: 'MK',
    state_code: 72,
    state_name: 'Novo Selo'
  },
  {
    country_iso_code: 'MK',
    state_code: 73,
    state_name: 'Oblesevo'
  },
  {
    country_iso_code: 'MK',
    state_code: 74,
    state_name: 'Ohrid'
  },
  {
    country_iso_code: 'MK',
    state_code: 75,
    state_name: 'Orasac'
  },
  {
    country_iso_code: 'MK',
    state_code: 76,
    state_name: 'Orizari'
  },
  {
    country_iso_code: 'MK',
    state_code: 77,
    state_name: 'Oslomej'
  },
  {
    country_iso_code: 'MK',
    state_code: 78,
    state_name: 'Pehcevo'
  },
  {
    country_iso_code: 'MK',
    state_code: 79,
    state_name: 'Petrovec'
  },
  {
    country_iso_code: 'MK',
    state_code: 80,
    state_name: 'Plasnica'
  },
  {
    country_iso_code: 'MK',
    state_code: 81,
    state_name: 'Podares'
  },
  {
    country_iso_code: 'MK',
    state_code: 82,
    state_name: 'Prilep'
  },
  {
    country_iso_code: 'MK',
    state_code: 83,
    state_name: 'Probistip'
  },
  {
    country_iso_code: 'MK',
    state_code: 84,
    state_name: 'Radovis'
  },
  {
    country_iso_code: 'MK',
    state_code: 85,
    state_name: 'Rankovce'
  },
  {
    country_iso_code: 'MK',
    state_code: 86,
    state_name: 'Resen'
  },
  {
    country_iso_code: 'MK',
    state_code: 87,
    state_name: 'Rosoman'
  },
  {
    country_iso_code: 'MK',
    state_code: 88,
    state_name: 'Rostusa'
  },
  {
    country_iso_code: 'MK',
    state_code: 89,
    state_name: 'Samokov'
  },
  {
    country_iso_code: 'MK',
    state_code: 90,
    state_name: 'Saraj'
  },
  {
    country_iso_code: 'MK',
    state_code: 91,
    state_name: 'Sipkovica'
  },
  {
    country_iso_code: 'MK',
    state_code: 92,
    state_name: 'Sopiste'
  },
  {
    country_iso_code: 'MK',
    state_code: 93,
    state_name: 'Sopotnica'
  },
  {
    country_iso_code: 'MK',
    state_code: 94,
    state_name: 'Srbinovo'
  },
  {
    country_iso_code: 'MK',
    state_code: 95,
    state_name: 'Staravina'
  },
  {
    country_iso_code: 'MK',
    state_code: 96,
    state_name: 'Star Dojran'
  },
  {
    country_iso_code: 'MK',
    state_code: 97,
    state_name: 'Staro Nagoricane'
  },
  {
    country_iso_code: 'MK',
    state_code: 98,
    state_name: 'Stip'
  },
  {
    country_iso_code: 'MK',
    state_code: 99,
    state_name: 'Struga'
  },
  {
    country_iso_code: 'MK',
    state_code: 'A1',
    state_name: 'Strumica'
  },
  {
    country_iso_code: 'MK',
    state_code: 'A2',
    state_name: 'Studenicani'
  },
  {
    country_iso_code: 'MK',
    state_code: 'A3',
    state_name: 'Suto Orizari'
  },
  {
    country_iso_code: 'MK',
    state_code: 'A4',
    state_name: 'Sveti Nikole'
  },
  {
    country_iso_code: 'MK',
    state_code: 'A5',
    state_name: 'Tearce'
  },
  {
    country_iso_code: 'MK',
    state_code: 'A6',
    state_name: 'Tetovo'
  },
  {
    country_iso_code: 'MK',
    state_code: 'A7',
    state_name: 'Topolcani'
  },
  {
    country_iso_code: 'MK',
    state_code: 'A8',
    state_name: 'Valandovo'
  },
  {
    country_iso_code: 'MK',
    state_code: 'A9',
    state_name: 'Vasilevo'
  },
  {
    country_iso_code: 'MK',
    state_code: 'B1',
    state_name: 'Veles'
  },
  {
    country_iso_code: 'MK',
    state_code: 'B2',
    state_name: 'Velesta'
  },
  {
    country_iso_code: 'MK',
    state_code: 'B3',
    state_name: 'Vevcani'
  },
  {
    country_iso_code: 'MK',
    state_code: 'B4',
    state_name: 'Vinica'
  },
  {
    country_iso_code: 'MK',
    state_code: 'B5',
    state_name: 'Vitoliste'
  },
  {
    country_iso_code: 'MK',
    state_code: 'B6',
    state_name: 'Vranestica'
  },
  {
    country_iso_code: 'MK',
    state_code: 'B7',
    state_name: 'Vrapciste'
  },
  {
    country_iso_code: 'MK',
    state_code: 'B8',
    state_name: 'Vratnica'
  },
  {
    country_iso_code: 'MK',
    state_code: 'B9',
    state_name: 'Vrutok'
  },
  {
    country_iso_code: 'MK',
    state_code: 'C1',
    state_name: 'Zajas'
  },
  {
    country_iso_code: 'MK',
    state_code: 'C2',
    state_name: 'Zelenikovo'
  },
  {
    country_iso_code: 'MK',
    state_code: 'C3',
    state_name: 'Zelino'
  },
  {
    country_iso_code: 'MK',
    state_code: 'C4',
    state_name: 'Zitose'
  },
  {
    country_iso_code: 'MK',
    state_code: 'C5',
    state_name: 'Zletovo'
  },
  {
    country_iso_code: 'MK',
    state_code: 'C6',
    state_name: 'Zrnovci'
  },
  {
    country_iso_code: 'MK',
    state_code: 'C8',
    state_name: 'Cair'
  },
  {
    country_iso_code: 'MK',
    state_code: 'C9',
    state_name: 'Caska'
  },
  {
    country_iso_code: 'MK',
    state_code: 'D2',
    state_name: 'Debar'
  },
  {
    country_iso_code: 'MK',
    state_code: 'D3',
    state_name: 'Demir Hisar'
  },
  {
    country_iso_code: 'MK',
    state_code: 'D4',
    state_name: 'Gostivar'
  },
  {
    country_iso_code: 'MK',
    state_code: 'D5',
    state_name: 'Jegunovce'
  },
  {
    country_iso_code: 'MK',
    state_code: 'D6',
    state_name: 'Kavadarci'
  },
  {
    country_iso_code: 'MK',
    state_code: 'D7',
    state_name: 'Kumanovo'
  },
  {
    country_iso_code: 'MK',
    state_code: 'D8',
    state_name: 'Makedonski Brod'
  },
  {
    country_iso_code: 'MK',
    state_code: 'E2',
    state_name: 'Ohrid'
  },
  {
    country_iso_code: 'MK',
    state_code: 'E3',
    state_name: 'Prilep'
  },
  {
    country_iso_code: 'MK',
    state_code: 'E5',
    state_name: 'Dojran'
  },
  {
    country_iso_code: 'MK',
    state_code: 'E6',
    state_name: 'Struga'
  },
  {
    country_iso_code: 'MK',
    state_code: 'E7',
    state_name: 'Strumica'
  },
  {
    country_iso_code: 'MK',
    state_code: 'E8',
    state_name: 'Tetovo'
  },
  {
    country_iso_code: 'MK',
    state_code: 'E9',
    state_name: 'Valandovo'
  },
  {
    country_iso_code: 'MK',
    state_code: 'F1',
    state_name: 'Veles'
  },
  {
    country_iso_code: 'MK',
    state_code: 'F2',
    state_name: 'Aerodrom'
  },
  {
    country_iso_code: 'ML',
    state_code: '01',
    state_name: 'Bamako'
  },
  {
    country_iso_code: 'ML',
    state_code: '03',
    state_name: 'Kayes'
  },
  {
    country_iso_code: 'ML',
    state_code: '04',
    state_name: 'Mopti'
  },
  {
    country_iso_code: 'ML',
    state_code: '05',
    state_name: 'Segou'
  },
  {
    country_iso_code: 'ML',
    state_code: '06',
    state_name: 'Sikasso'
  },
  {
    country_iso_code: 'ML',
    state_code: '07',
    state_name: 'Koulikoro'
  },
  {
    country_iso_code: 'ML',
    state_code: '08',
    state_name: 'Tombouctou'
  },
  {
    country_iso_code: 'ML',
    state_code: '09',
    state_name: 'Gao'
  },
  {
    country_iso_code: 'ML',
    state_code: 10,
    state_name: 'Kidal'
  },
  {
    country_iso_code: 'MM',
    state_code: '01',
    state_name: 'Rakhine State'
  },
  {
    country_iso_code: 'MM',
    state_code: '02',
    state_name: 'Chin State'
  },
  {
    country_iso_code: 'MM',
    state_code: '03',
    state_name: 'Irrawaddy'
  },
  {
    country_iso_code: 'MM',
    state_code: '04',
    state_name: 'Kachin State'
  },
  {
    country_iso_code: 'MM',
    state_code: '05',
    state_name: 'Karan State'
  },
  {
    country_iso_code: 'MM',
    state_code: '06',
    state_name: 'Kayah State'
  },
  {
    country_iso_code: 'MM',
    state_code: '07',
    state_name: 'Magwe'
  },
  {
    country_iso_code: 'MM',
    state_code: '08',
    state_name: 'Mandalay'
  },
  {
    country_iso_code: 'MM',
    state_code: '09',
    state_name: 'Pegu'
  },
  {
    country_iso_code: 'MM',
    state_code: 10,
    state_name: 'Sagaing'
  },
  {
    country_iso_code: 'MM',
    state_code: 11,
    state_name: 'Shan State'
  },
  {
    country_iso_code: 'MM',
    state_code: 12,
    state_name: 'Tenasserim'
  },
  {
    country_iso_code: 'MM',
    state_code: 13,
    state_name: 'Mon State'
  },
  {
    country_iso_code: 'MM',
    state_code: 14,
    state_name: 'Rangoon'
  },
  {
    country_iso_code: 'MM',
    state_code: 17,
    state_name: 'Yangon'
  },
  {
    country_iso_code: 'MN',
    state_code: '01',
    state_name: 'Arhangay'
  },
  {
    country_iso_code: 'MN',
    state_code: '02',
    state_name: 'Bayanhongor'
  },
  {
    country_iso_code: 'MN',
    state_code: '03',
    state_name: 'Bayan-Olgiy'
  },
  {
    country_iso_code: 'MN',
    state_code: '05',
    state_name: 'Darhan'
  },
  {
    country_iso_code: 'MN',
    state_code: '06',
    state_name: 'Dornod'
  },
  {
    country_iso_code: 'MN',
    state_code: '07',
    state_name: 'Dornogovi'
  },
  {
    country_iso_code: 'MN',
    state_code: '08',
    state_name: 'Dundgovi'
  },
  {
    country_iso_code: 'MN',
    state_code: '09',
    state_name: 'Dzavhan'
  },
  {
    country_iso_code: 'MN',
    state_code: 10,
    state_name: 'Govi-Altay'
  },
  {
    country_iso_code: 'MN',
    state_code: 11,
    state_name: 'Hentiy'
  },
  {
    country_iso_code: 'MN',
    state_code: 12,
    state_name: 'Hovd'
  },
  {
    country_iso_code: 'MN',
    state_code: 13,
    state_name: 'Hovsgol'
  },
  {
    country_iso_code: 'MN',
    state_code: 14,
    state_name: 'Omnogovi'
  },
  {
    country_iso_code: 'MN',
    state_code: 15,
    state_name: 'Ovorhangay'
  },
  {
    country_iso_code: 'MN',
    state_code: 16,
    state_name: 'Selenge'
  },
  {
    country_iso_code: 'MN',
    state_code: 17,
    state_name: 'Suhbaatar'
  },
  {
    country_iso_code: 'MN',
    state_code: 18,
    state_name: 'Tov'
  },
  {
    country_iso_code: 'MN',
    state_code: 19,
    state_name: 'Uvs'
  },
  {
    country_iso_code: 'MN',
    state_code: 20,
    state_name: 'Ulaanbaatar'
  },
  {
    country_iso_code: 'MN',
    state_code: 21,
    state_name: 'Bulgan'
  },
  {
    country_iso_code: 'MN',
    state_code: 22,
    state_name: 'Erdenet'
  },
  {
    country_iso_code: 'MN',
    state_code: 23,
    state_name: 'Darhan-Uul'
  },
  {
    country_iso_code: 'MN',
    state_code: 24,
    state_name: 'Govisumber'
  },
  {
    country_iso_code: 'MN',
    state_code: 25,
    state_name: 'Orhon'
  },
  {
    country_iso_code: 'MO',
    state_code: '01',
    state_name: 'Ilhas'
  },
  {
    country_iso_code: 'MO',
    state_code: '02',
    state_name: 'Macau'
  },
  {
    country_iso_code: 'MR',
    state_code: '01',
    state_name: 'Hodh Ech Chargui'
  },
  {
    country_iso_code: 'MR',
    state_code: '02',
    state_name: 'Hodh El Gharbi'
  },
  {
    country_iso_code: 'MR',
    state_code: '03',
    state_name: 'Assaba'
  },
  {
    country_iso_code: 'MR',
    state_code: '04',
    state_name: 'Gorgol'
  },
  {
    country_iso_code: 'MR',
    state_code: '05',
    state_name: 'Brakna'
  },
  {
    country_iso_code: 'MR',
    state_code: '06',
    state_name: 'Trarza'
  },
  {
    country_iso_code: 'MR',
    state_code: '07',
    state_name: 'Adrar'
  },
  {
    country_iso_code: 'MR',
    state_code: '08',
    state_name: 'Dakhlet Nouadhibou'
  },
  {
    country_iso_code: 'MR',
    state_code: '09',
    state_name: 'Tagant'
  },
  {
    country_iso_code: 'MR',
    state_code: 10,
    state_name: 'Guidimaka'
  },
  {
    country_iso_code: 'MR',
    state_code: 11,
    state_name: 'Tiris Zemmour'
  },
  {
    country_iso_code: 'MR',
    state_code: 12,
    state_name: 'Inchiri'
  },
  {
    country_iso_code: 'MS',
    state_code: '01',
    state_name: 'Saint Anthony'
  },
  {
    country_iso_code: 'MS',
    state_code: '02',
    state_name: 'Saint Georges'
  },
  {
    country_iso_code: 'MS',
    state_code: '03',
    state_name: 'Saint Peter'
  },
  {
    country_iso_code: 'MU',
    state_code: 12,
    state_name: 'Black River'
  },
  {
    country_iso_code: 'MU',
    state_code: 13,
    state_name: 'Flacq'
  },
  {
    country_iso_code: 'MU',
    state_code: 14,
    state_name: 'Grand Port'
  },
  {
    country_iso_code: 'MU',
    state_code: 15,
    state_name: 'Moka'
  },
  {
    country_iso_code: 'MU',
    state_code: 16,
    state_name: 'Pamplemousses'
  },
  {
    country_iso_code: 'MU',
    state_code: 17,
    state_name: 'Plaines Wilhems'
  },
  {
    country_iso_code: 'MU',
    state_code: 18,
    state_name: 'Port Louis'
  },
  {
    country_iso_code: 'MU',
    state_code: 19,
    state_name: 'Riviere du Rempart'
  },
  {
    country_iso_code: 'MU',
    state_code: 20,
    state_name: 'Savanne'
  },
  {
    country_iso_code: 'MU',
    state_code: 21,
    state_name: 'Agalega Islands'
  },
  {
    country_iso_code: 'MU',
    state_code: 22,
    state_name: 'Cargados Carajos'
  },
  {
    country_iso_code: 'MU',
    state_code: 23,
    state_name: 'Rodrigues'
  },
  {
    country_iso_code: 'MV',
    state_code: '01',
    state_name: 'Seenu'
  },
  {
    country_iso_code: 'MV',
    state_code: '05',
    state_name: 'Laamu'
  },
  {
    country_iso_code: 'MV',
    state_code: 30,
    state_name: 'Alifu'
  },
  {
    country_iso_code: 'MV',
    state_code: 31,
    state_name: 'Baa'
  },
  {
    country_iso_code: 'MV',
    state_code: 32,
    state_name: 'Dhaalu'
  },
  {
    country_iso_code: 'MV',
    state_code: 33,
    state_name: 'Faafu'
  },
  {
    country_iso_code: 'MV',
    state_code: 34,
    state_name: 'Gaafu Alifu'
  },
  {
    country_iso_code: 'MV',
    state_code: 35,
    state_name: 'Gaafu Dhaalu'
  },
  {
    country_iso_code: 'MV',
    state_code: 36,
    state_name: 'Haa Alifu'
  },
  {
    country_iso_code: 'MV',
    state_code: 37,
    state_name: 'Haa Dhaalu'
  },
  {
    country_iso_code: 'MV',
    state_code: 38,
    state_name: 'Kaafu'
  },
  {
    country_iso_code: 'MV',
    state_code: 39,
    state_name: 'Lhaviyani'
  },
  {
    country_iso_code: 'MV',
    state_code: 40,
    state_name: 'Maale'
  },
  {
    country_iso_code: 'MV',
    state_code: 41,
    state_name: 'Meemu'
  },
  {
    country_iso_code: 'MV',
    state_code: 42,
    state_name: 'Gnaviyani'
  },
  {
    country_iso_code: 'MV',
    state_code: 43,
    state_name: 'Noonu'
  },
  {
    country_iso_code: 'MV',
    state_code: 44,
    state_name: 'Raa'
  },
  {
    country_iso_code: 'MV',
    state_code: 45,
    state_name: 'Shaviyani'
  },
  {
    country_iso_code: 'MV',
    state_code: 46,
    state_name: 'Thaa'
  },
  {
    country_iso_code: 'MV',
    state_code: 47,
    state_name: 'Vaavu'
  },
  {
    country_iso_code: 'MW',
    state_code: '02',
    state_name: 'Chikwawa'
  },
  {
    country_iso_code: 'MW',
    state_code: '03',
    state_name: 'Chiradzulu'
  },
  {
    country_iso_code: 'MW',
    state_code: '04',
    state_name: 'Chitipa'
  },
  {
    country_iso_code: 'MW',
    state_code: '05',
    state_name: 'Thyolo'
  },
  {
    country_iso_code: 'MW',
    state_code: '06',
    state_name: 'Dedza'
  },
  {
    country_iso_code: 'MW',
    state_code: '07',
    state_name: 'Dowa'
  },
  {
    country_iso_code: 'MW',
    state_code: '08',
    state_name: 'Karonga'
  },
  {
    country_iso_code: 'MW',
    state_code: '09',
    state_name: 'Kasungu'
  },
  {
    country_iso_code: 'MW',
    state_code: 11,
    state_name: 'Lilongwe'
  },
  {
    country_iso_code: 'MW',
    state_code: 12,
    state_name: 'Mangochi'
  },
  {
    country_iso_code: 'MW',
    state_code: 13,
    state_name: 'Mchinji'
  },
  {
    country_iso_code: 'MW',
    state_code: 15,
    state_name: 'Mzimba'
  },
  {
    country_iso_code: 'MW',
    state_code: 16,
    state_name: 'Ntcheu'
  },
  {
    country_iso_code: 'MW',
    state_code: 17,
    state_name: 'Nkhata Bay'
  },
  {
    country_iso_code: 'MW',
    state_code: 18,
    state_name: 'Nkhotakota'
  },
  {
    country_iso_code: 'MW',
    state_code: 19,
    state_name: 'Nsanje'
  },
  {
    country_iso_code: 'MW',
    state_code: 20,
    state_name: 'Ntchisi'
  },
  {
    country_iso_code: 'MW',
    state_code: 21,
    state_name: 'Rumphi'
  },
  {
    country_iso_code: 'MW',
    state_code: 22,
    state_name: 'Salima'
  },
  {
    country_iso_code: 'MW',
    state_code: 23,
    state_name: 'Zomba'
  },
  {
    country_iso_code: 'MW',
    state_code: 24,
    state_name: 'Blantyre'
  },
  {
    country_iso_code: 'MW',
    state_code: 25,
    state_name: 'Mwanza'
  },
  {
    country_iso_code: 'MW',
    state_code: 26,
    state_name: 'Balaka'
  },
  {
    country_iso_code: 'MW',
    state_code: 27,
    state_name: 'Likoma'
  },
  {
    country_iso_code: 'MW',
    state_code: 28,
    state_name: 'Machinga'
  },
  {
    country_iso_code: 'MW',
    state_code: 29,
    state_name: 'Mulanje'
  },
  {
    country_iso_code: 'MW',
    state_code: 30,
    state_name: 'Phalombe'
  },
  {
    country_iso_code: 'MX',
    state_code: '01',
    state_name: 'Aguascalientes'
  },
  {
    country_iso_code: 'MX',
    state_code: '02',
    state_name: 'Baja California'
  },
  {
    country_iso_code: 'MX',
    state_code: '03',
    state_name: 'Baja California Sur'
  },
  {
    country_iso_code: 'MX',
    state_code: '04',
    state_name: 'Campeche'
  },
  {
    country_iso_code: 'MX',
    state_code: '05',
    state_name: 'Chiapas'
  },
  {
    country_iso_code: 'MX',
    state_code: '06',
    state_name: 'Chihuahua'
  },
  {
    country_iso_code: 'MX',
    state_code: '07',
    state_name: 'Coahuila de Zaragoza'
  },
  {
    country_iso_code: 'MX',
    state_code: '08',
    state_name: 'Colima'
  },
  {
    country_iso_code: 'MX',
    state_code: '09',
    state_name: 'Distrito Federal'
  },
  {
    country_iso_code: 'MX',
    state_code: 10,
    state_name: 'Durango'
  },
  {
    country_iso_code: 'MX',
    state_code: 11,
    state_name: 'Guanajuato'
  },
  {
    country_iso_code: 'MX',
    state_code: 12,
    state_name: 'Guerrero'
  },
  {
    country_iso_code: 'MX',
    state_code: 13,
    state_name: 'Hidalgo'
  },
  {
    country_iso_code: 'MX',
    state_code: 14,
    state_name: 'Jalisco'
  },
  {
    country_iso_code: 'MX',
    state_code: 15,
    state_name: 'Mexico'
  },
  {
    country_iso_code: 'MX',
    state_code: 16,
    state_name: 'Michoacan de Ocampo'
  },
  {
    country_iso_code: 'MX',
    state_code: 17,
    state_name: 'Morelos'
  },
  {
    country_iso_code: 'MX',
    state_code: 18,
    state_name: 'Nayarit'
  },
  {
    country_iso_code: 'MX',
    state_code: 19,
    state_name: 'Nuevo Leon'
  },
  {
    country_iso_code: 'MX',
    state_code: 20,
    state_name: 'Oaxaca'
  },
  {
    country_iso_code: 'MX',
    state_code: 21,
    state_name: 'Puebla'
  },
  {
    country_iso_code: 'MX',
    state_code: 22,
    state_name: 'Queretaro de Arteaga'
  },
  {
    country_iso_code: 'MX',
    state_code: 23,
    state_name: 'Quintana Roo'
  },
  {
    country_iso_code: 'MX',
    state_code: 24,
    state_name: 'San Luis Potosi'
  },
  {
    country_iso_code: 'MX',
    state_code: 25,
    state_name: 'Sinaloa'
  },
  {
    country_iso_code: 'MX',
    state_code: 26,
    state_name: 'Sonora'
  },
  {
    country_iso_code: 'MX',
    state_code: 27,
    state_name: 'Tabasco'
  },
  {
    country_iso_code: 'MX',
    state_code: 28,
    state_name: 'Tamaulipas'
  },
  {
    country_iso_code: 'MX',
    state_code: 29,
    state_name: 'Tlaxcala'
  },
  {
    country_iso_code: 'MX',
    state_code: 30,
    state_name: 'Veracruz-Llave'
  },
  {
    country_iso_code: 'MX',
    state_code: 31,
    state_name: 'Yucatan'
  },
  {
    country_iso_code: 'MX',
    state_code: 32,
    state_name: 'Zacatecas'
  },
  {
    country_iso_code: 'MY',
    state_code: '01',
    state_name: 'Johor'
  },
  {
    country_iso_code: 'MY',
    state_code: '02',
    state_name: 'Kedah'
  },
  {
    country_iso_code: 'MY',
    state_code: '03',
    state_name: 'Kelantan'
  },
  {
    country_iso_code: 'MY',
    state_code: '04',
    state_name: 'Melaka'
  },
  {
    country_iso_code: 'MY',
    state_code: '05',
    state_name: 'Negeri Sembilan'
  },
  {
    country_iso_code: 'MY',
    state_code: '06',
    state_name: 'Pahang'
  },
  {
    country_iso_code: 'MY',
    state_code: '07',
    state_name: 'Perak'
  },
  {
    country_iso_code: 'MY',
    state_code: '08',
    state_name: 'Perlis'
  },
  {
    country_iso_code: 'MY',
    state_code: '09',
    state_name: 'Pulau Pinang'
  },
  {
    country_iso_code: 'MY',
    state_code: 11,
    state_name: 'Sarawak'
  },
  {
    country_iso_code: 'MY',
    state_code: 12,
    state_name: 'Selangor'
  },
  {
    country_iso_code: 'MY',
    state_code: 13,
    state_name: 'Terengganu'
  },
  {
    country_iso_code: 'MY',
    state_code: 14,
    state_name: 'Kuala Lumpur'
  },
  {
    country_iso_code: 'MY',
    state_code: 15,
    state_name: 'Labuan'
  },
  {
    country_iso_code: 'MY',
    state_code: 16,
    state_name: 'Sabah'
  },
  {
    country_iso_code: 'MY',
    state_code: 17,
    state_name: 'Putrajaya'
  },
  {
    country_iso_code: 'MZ',
    state_code: '01',
    state_name: 'Cabo Delgado'
  },
  {
    country_iso_code: 'MZ',
    state_code: '02',
    state_name: 'Gaza'
  },
  {
    country_iso_code: 'MZ',
    state_code: '03',
    state_name: 'Inhambane'
  },
  {
    country_iso_code: 'MZ',
    state_code: '04',
    state_name: 'Maputo'
  },
  {
    country_iso_code: 'MZ',
    state_code: '05',
    state_name: 'Sofala'
  },
  {
    country_iso_code: 'MZ',
    state_code: '06',
    state_name: 'Nampula'
  },
  {
    country_iso_code: 'MZ',
    state_code: '07',
    state_name: 'Niassa'
  },
  {
    country_iso_code: 'MZ',
    state_code: '08',
    state_name: 'Tete'
  },
  {
    country_iso_code: 'MZ',
    state_code: '09',
    state_name: 'Zambezia'
  },
  {
    country_iso_code: 'MZ',
    state_code: 10,
    state_name: 'Manica'
  },
  {
    country_iso_code: 'MZ',
    state_code: 11,
    state_name: 'Maputo'
  },
  {
    country_iso_code: 'NA',
    state_code: '01',
    state_name: 'Bethanien'
  },
  {
    country_iso_code: 'NA',
    state_code: '02',
    state_name: 'Caprivi Oos'
  },
  {
    country_iso_code: 'NA',
    state_code: '03',
    state_name: 'Boesmanland'
  },
  {
    country_iso_code: 'NA',
    state_code: '04',
    state_name: 'Gobabis'
  },
  {
    country_iso_code: 'NA',
    state_code: '05',
    state_name: 'Grootfontein'
  },
  {
    country_iso_code: 'NA',
    state_code: '06',
    state_name: 'Kaokoland'
  },
  {
    country_iso_code: 'NA',
    state_code: '07',
    state_name: 'Karibib'
  },
  {
    country_iso_code: 'NA',
    state_code: '08',
    state_name: 'Keetmanshoop'
  },
  {
    country_iso_code: 'NA',
    state_code: '09',
    state_name: 'Luderitz'
  },
  {
    country_iso_code: 'NA',
    state_code: 10,
    state_name: 'Maltahohe'
  },
  {
    country_iso_code: 'NA',
    state_code: 11,
    state_name: 'Okahandja'
  },
  {
    country_iso_code: 'NA',
    state_code: 12,
    state_name: 'Omaruru'
  },
  {
    country_iso_code: 'NA',
    state_code: 13,
    state_name: 'Otjiwarongo'
  },
  {
    country_iso_code: 'NA',
    state_code: 14,
    state_name: 'Outjo'
  },
  {
    country_iso_code: 'NA',
    state_code: 15,
    state_name: 'Owambo'
  },
  {
    country_iso_code: 'NA',
    state_code: 16,
    state_name: 'Rehoboth'
  },
  {
    country_iso_code: 'NA',
    state_code: 17,
    state_name: 'Swakopmund'
  },
  {
    country_iso_code: 'NA',
    state_code: 18,
    state_name: 'Tsumeb'
  },
  {
    country_iso_code: 'NA',
    state_code: 20,
    state_name: 'Karasburg'
  },
  {
    country_iso_code: 'NA',
    state_code: 21,
    state_name: 'Windhoek'
  },
  {
    country_iso_code: 'NA',
    state_code: 22,
    state_name: 'Damaraland'
  },
  {
    country_iso_code: 'NA',
    state_code: 23,
    state_name: 'Hereroland Oos'
  },
  {
    country_iso_code: 'NA',
    state_code: 24,
    state_name: 'Hereroland Wes'
  },
  {
    country_iso_code: 'NA',
    state_code: 25,
    state_name: 'Kavango'
  },
  {
    country_iso_code: 'NA',
    state_code: 26,
    state_name: 'Mariental'
  },
  {
    country_iso_code: 'NA',
    state_code: 27,
    state_name: 'Namaland'
  },
  {
    country_iso_code: 'NA',
    state_code: 28,
    state_name: 'Caprivi'
  },
  {
    country_iso_code: 'NA',
    state_code: 29,
    state_name: 'Erongo'
  },
  {
    country_iso_code: 'NA',
    state_code: 30,
    state_name: 'Hardap'
  },
  {
    country_iso_code: 'NA',
    state_code: 31,
    state_name: 'Karas'
  },
  {
    country_iso_code: 'NA',
    state_code: 32,
    state_name: 'Kunene'
  },
  {
    country_iso_code: 'NA',
    state_code: 33,
    state_name: 'Ohangwena'
  },
  {
    country_iso_code: 'NA',
    state_code: 34,
    state_name: 'Okavango'
  },
  {
    country_iso_code: 'NA',
    state_code: 35,
    state_name: 'Omaheke'
  },
  {
    country_iso_code: 'NA',
    state_code: 36,
    state_name: 'Omusati'
  },
  {
    country_iso_code: 'NA',
    state_code: 37,
    state_name: 'Oshana'
  },
  {
    country_iso_code: 'NA',
    state_code: 38,
    state_name: 'Oshikoto'
  },
  {
    country_iso_code: 'NA',
    state_code: 39,
    state_name: 'Otjozondjupa'
  },
  {
    country_iso_code: 'NE',
    state_code: '01',
    state_name: 'Agadez'
  },
  {
    country_iso_code: 'NE',
    state_code: '02',
    state_name: 'Diffa'
  },
  {
    country_iso_code: 'NE',
    state_code: '03',
    state_name: 'Dosso'
  },
  {
    country_iso_code: 'NE',
    state_code: '04',
    state_name: 'Maradi'
  },
  {
    country_iso_code: 'NE',
    state_code: '05',
    state_name: 'Niamey'
  },
  {
    country_iso_code: 'NE',
    state_code: '06',
    state_name: 'Tahoua'
  },
  {
    country_iso_code: 'NE',
    state_code: '07',
    state_name: 'Zinder'
  },
  {
    country_iso_code: 'NE',
    state_code: '08',
    state_name: 'Niamey'
  },
  {
    country_iso_code: 'NG',
    state_code: '05',
    state_name: 'Lagos'
  },
  {
    country_iso_code: 'NG',
    state_code: 11,
    state_name: 'Federal Capital Territory'
  },
  {
    country_iso_code: 'NG',
    state_code: 16,
    state_name: 'Ogun'
  },
  {
    country_iso_code: 'NG',
    state_code: 21,
    state_name: 'Akwa Ibom'
  },
  {
    country_iso_code: 'NG',
    state_code: 22,
    state_name: 'Cross River'
  },
  {
    country_iso_code: 'NG',
    state_code: 23,
    state_name: 'Kaduna'
  },
  {
    country_iso_code: 'NG',
    state_code: 24,
    state_name: 'Katsina'
  },
  {
    country_iso_code: 'NG',
    state_code: 25,
    state_name: 'Anambra'
  },
  {
    country_iso_code: 'NG',
    state_code: 26,
    state_name: 'Benue'
  },
  {
    country_iso_code: 'NG',
    state_code: 27,
    state_name: 'Borno'
  },
  {
    country_iso_code: 'NG',
    state_code: 28,
    state_name: 'Imo'
  },
  {
    country_iso_code: 'NG',
    state_code: 29,
    state_name: 'Kano'
  },
  {
    country_iso_code: 'NG',
    state_code: 30,
    state_name: 'Kwara'
  },
  {
    country_iso_code: 'NG',
    state_code: 31,
    state_name: 'Niger'
  },
  {
    country_iso_code: 'NG',
    state_code: 32,
    state_name: 'Oyo'
  },
  {
    country_iso_code: 'NG',
    state_code: 35,
    state_name: 'Adamawa'
  },
  {
    country_iso_code: 'NG',
    state_code: 36,
    state_name: 'Delta'
  },
  {
    country_iso_code: 'NG',
    state_code: 37,
    state_name: 'Edo'
  },
  {
    country_iso_code: 'NG',
    state_code: 39,
    state_name: 'Jigawa'
  },
  {
    country_iso_code: 'NG',
    state_code: 40,
    state_name: 'Kebbi'
  },
  {
    country_iso_code: 'NG',
    state_code: 41,
    state_name: 'Kogi'
  },
  {
    country_iso_code: 'NG',
    state_code: 42,
    state_name: 'Osun'
  },
  {
    country_iso_code: 'NG',
    state_code: 43,
    state_name: 'Taraba'
  },
  {
    country_iso_code: 'NG',
    state_code: 44,
    state_name: 'Yobe'
  },
  {
    country_iso_code: 'NG',
    state_code: 45,
    state_name: 'Abia'
  },
  {
    country_iso_code: 'NG',
    state_code: 46,
    state_name: 'Bauchi'
  },
  {
    country_iso_code: 'NG',
    state_code: 47,
    state_name: 'Enugu'
  },
  {
    country_iso_code: 'NG',
    state_code: 48,
    state_name: 'Ondo'
  },
  {
    country_iso_code: 'NG',
    state_code: 49,
    state_name: 'Plateau'
  },
  {
    country_iso_code: 'NG',
    state_code: 50,
    state_name: 'Rivers'
  },
  {
    country_iso_code: 'NG',
    state_code: 51,
    state_name: 'Sokoto'
  },
  {
    country_iso_code: 'NG',
    state_code: 52,
    state_name: 'Bayelsa'
  },
  {
    country_iso_code: 'NG',
    state_code: 53,
    state_name: 'Ebonyi'
  },
  {
    country_iso_code: 'NG',
    state_code: 54,
    state_name: 'Ekiti'
  },
  {
    country_iso_code: 'NG',
    state_code: 55,
    state_name: 'Gombe'
  },
  {
    country_iso_code: 'NG',
    state_code: 56,
    state_name: 'Nassarawa'
  },
  {
    country_iso_code: 'NG',
    state_code: 57,
    state_name: 'Zamfara'
  },
  {
    country_iso_code: 'NI',
    state_code: '01',
    state_name: 'Boaco'
  },
  {
    country_iso_code: 'NI',
    state_code: '02',
    state_name: 'Carazo'
  },
  {
    country_iso_code: 'NI',
    state_code: '03',
    state_name: 'Chinandega'
  },
  {
    country_iso_code: 'NI',
    state_code: '04',
    state_name: 'Chontales'
  },
  {
    country_iso_code: 'NI',
    state_code: '05',
    state_name: 'Esteli'
  },
  {
    country_iso_code: 'NI',
    state_code: '06',
    state_name: 'Granada'
  },
  {
    country_iso_code: 'NI',
    state_code: '07',
    state_name: 'Jinotega'
  },
  {
    country_iso_code: 'NI',
    state_code: '08',
    state_name: 'Leon'
  },
  {
    country_iso_code: 'NI',
    state_code: '09',
    state_name: 'Madriz'
  },
  {
    country_iso_code: 'NI',
    state_code: 10,
    state_name: 'Managua'
  },
  {
    country_iso_code: 'NI',
    state_code: 11,
    state_name: 'Masaya'
  },
  {
    country_iso_code: 'NI',
    state_code: 12,
    state_name: 'Matagalpa'
  },
  {
    country_iso_code: 'NI',
    state_code: 13,
    state_name: 'Nueva Segovia'
  },
  {
    country_iso_code: 'NI',
    state_code: 14,
    state_name: 'Rio San Juan'
  },
  {
    country_iso_code: 'NI',
    state_code: 15,
    state_name: 'Rivas'
  },
  {
    country_iso_code: 'NI',
    state_code: 16,
    state_name: 'Zelaya'
  },
  {
    country_iso_code: 'NI',
    state_code: 17,
    state_name: 'Autonoma Atlantico Norte'
  },
  {
    country_iso_code: 'NI',
    state_code: 18,
    state_name: 'Region Autonoma Atlantico Sur'
  },
  {
    country_iso_code: 'NL',
    state_code: '01',
    state_name: 'Drenthe'
  },
  {
    country_iso_code: 'NL',
    state_code: '02',
    state_name: 'Friesland'
  },
  {
    country_iso_code: 'NL',
    state_code: '03',
    state_name: 'Gelderland'
  },
  {
    country_iso_code: 'NL',
    state_code: '04',
    state_name: 'Groningen'
  },
  {
    country_iso_code: 'NL',
    state_code: '05',
    state_name: 'Limburg'
  },
  {
    country_iso_code: 'NL',
    state_code: '06',
    state_name: 'Noord-Brabant'
  },
  {
    country_iso_code: 'NL',
    state_code: '07',
    state_name: 'Noord-Holland'
  },
  {
    country_iso_code: 'NL',
    state_code: '09',
    state_name: 'Utrecht'
  },
  {
    country_iso_code: 'NL',
    state_code: 10,
    state_name: 'Zeeland'
  },
  {
    country_iso_code: 'NL',
    state_code: 11,
    state_name: 'Zuid-Holland'
  },
  {
    country_iso_code: 'NL',
    state_code: 15,
    state_name: 'Overijssel'
  },
  {
    country_iso_code: 'NL',
    state_code: 16,
    state_name: 'Flevoland'
  },
  {
    country_iso_code: 'NO',
    state_code: '01',
    state_name: 'Akershus'
  },
  {
    country_iso_code: 'NO',
    state_code: '02',
    state_name: 'Aust-Agder'
  },
  {
    country_iso_code: 'NO',
    state_code: '04',
    state_name: 'Buskerud'
  },
  {
    country_iso_code: 'NO',
    state_code: '05',
    state_name: 'Finnmark'
  },
  {
    country_iso_code: 'NO',
    state_code: '06',
    state_name: 'Hedmark'
  },
  {
    country_iso_code: 'NO',
    state_code: '07',
    state_name: 'Hordaland'
  },
  {
    country_iso_code: 'NO',
    state_code: '08',
    state_name: 'More og Romsdal'
  },
  {
    country_iso_code: 'NO',
    state_code: '09',
    state_name: 'Nordland'
  },
  {
    country_iso_code: 'NO',
    state_code: 10,
    state_name: 'Nord-Trondelag'
  },
  {
    country_iso_code: 'NO',
    state_code: 11,
    state_name: 'Oppland'
  },
  {
    country_iso_code: 'NO',
    state_code: 12,
    state_name: 'Oslo'
  },
  {
    country_iso_code: 'NO',
    state_code: 13,
    state_name: 'Ostfold'
  },
  {
    country_iso_code: 'NO',
    state_code: 14,
    state_name: 'Rogaland'
  },
  {
    country_iso_code: 'NO',
    state_code: 15,
    state_name: 'Sogn og Fjordane'
  },
  {
    country_iso_code: 'NO',
    state_code: 16,
    state_name: 'Sor-Trondelag'
  },
  {
    country_iso_code: 'NO',
    state_code: 17,
    state_name: 'Telemark'
  },
  {
    country_iso_code: 'NO',
    state_code: 18,
    state_name: 'Troms'
  },
  {
    country_iso_code: 'NO',
    state_code: 19,
    state_name: 'Vest-Agder'
  },
  {
    country_iso_code: 'NO',
    state_code: 20,
    state_name: 'Vestfold'
  },
  {
    country_iso_code: 'NP',
    state_code: '01',
    state_name: 'Bagmati'
  },
  {
    country_iso_code: 'NP',
    state_code: '02',
    state_name: 'Bheri'
  },
  {
    country_iso_code: 'NP',
    state_code: '03',
    state_name: 'Dhawalagiri'
  },
  {
    country_iso_code: 'NP',
    state_code: '04',
    state_name: 'Gandaki'
  },
  {
    country_iso_code: 'NP',
    state_code: '05',
    state_name: 'Janakpur'
  },
  {
    country_iso_code: 'NP',
    state_code: '06',
    state_name: 'Karnali'
  },
  {
    country_iso_code: 'NP',
    state_code: '07',
    state_name: 'Kosi'
  },
  {
    country_iso_code: 'NP',
    state_code: '08',
    state_name: 'Lumbini'
  },
  {
    country_iso_code: 'NP',
    state_code: '09',
    state_name: 'Mahakali'
  },
  {
    country_iso_code: 'NP',
    state_code: 10,
    state_name: 'Mechi'
  },
  {
    country_iso_code: 'NP',
    state_code: 11,
    state_name: 'Narayani'
  },
  {
    country_iso_code: 'NP',
    state_code: 12,
    state_name: 'Rapti'
  },
  {
    country_iso_code: 'NP',
    state_code: 13,
    state_name: 'Sagarmatha'
  },
  {
    country_iso_code: 'NP',
    state_code: 14,
    state_name: 'Seti'
  },
  {
    country_iso_code: 'NR',
    state_code: '01',
    state_name: 'Aiwo'
  },
  {
    country_iso_code: 'NR',
    state_code: '02',
    state_name: 'Anabar'
  },
  {
    country_iso_code: 'NR',
    state_code: '03',
    state_name: 'Anetan'
  },
  {
    country_iso_code: 'NR',
    state_code: '04',
    state_name: 'Anibare'
  },
  {
    country_iso_code: 'NR',
    state_code: '05',
    state_name: 'Baiti'
  },
  {
    country_iso_code: 'NR',
    state_code: '06',
    state_name: 'Boe'
  },
  {
    country_iso_code: 'NR',
    state_code: '07',
    state_name: 'Buada'
  },
  {
    country_iso_code: 'NR',
    state_code: '08',
    state_name: 'Denigomodu'
  },
  {
    country_iso_code: 'NR',
    state_code: '09',
    state_name: 'Ewa'
  },
  {
    country_iso_code: 'NR',
    state_code: 10,
    state_name: 'Ijuw'
  },
  {
    country_iso_code: 'NR',
    state_code: 11,
    state_name: 'Meneng'
  },
  {
    country_iso_code: 'NR',
    state_code: 12,
    state_name: 'Nibok'
  },
  {
    country_iso_code: 'NR',
    state_code: 13,
    state_name: 'Uaboe'
  },
  {
    country_iso_code: 'NR',
    state_code: 14,
    state_name: 'Yaren'
  },
  {
    country_iso_code: 'NZ',
    state_code: 10,
    state_name: 'Chatham Islands'
  },
  {
    country_iso_code: 'NZ',
    state_code: 'E7',
    state_name: 'Auckland'
  },
  {
    country_iso_code: 'NZ',
    state_code: 'E8',
    state_name: 'Bay of Plenty'
  },
  {
    country_iso_code: 'NZ',
    state_code: 'E9',
    state_name: 'Canterbury'
  },
  {
    country_iso_code: 'NZ',
    state_code: 'F1',
    state_name: 'Gisborne'
  },
  {
    country_iso_code: 'NZ',
    state_code: 'F2',
    state_name: "Hawke's Bay"
  },
  {
    country_iso_code: 'NZ',
    state_code: 'F3',
    state_name: 'Manawatu-Wanganui'
  },
  {
    country_iso_code: 'NZ',
    state_code: 'F4',
    state_name: 'Marlborough'
  },
  {
    country_iso_code: 'NZ',
    state_code: 'F5',
    state_name: 'Nelson'
  },
  {
    country_iso_code: 'NZ',
    state_code: 'F6',
    state_name: 'Northland'
  },
  {
    country_iso_code: 'NZ',
    state_code: 'F7',
    state_name: 'Otago'
  },
  {
    country_iso_code: 'NZ',
    state_code: 'F8',
    state_name: 'Southland'
  },
  {
    country_iso_code: 'NZ',
    state_code: 'F9',
    state_name: 'Taranaki'
  },
  {
    country_iso_code: 'NZ',
    state_code: 'G1',
    state_name: 'Waikato'
  },
  {
    country_iso_code: 'NZ',
    state_code: 'G2',
    state_name: 'Wellington'
  },
  {
    country_iso_code: 'NZ',
    state_code: 'G3',
    state_name: 'West Coast'
  },
  {
    country_iso_code: 'OM',
    state_code: '01',
    state_name: 'Ad Dakhiliyah'
  },
  {
    country_iso_code: 'OM',
    state_code: '02',
    state_name: 'Al Batinah'
  },
  {
    country_iso_code: 'OM',
    state_code: '03',
    state_name: 'Al Wusta'
  },
  {
    country_iso_code: 'OM',
    state_code: '04',
    state_name: 'Ash Sharqiyah'
  },
  {
    country_iso_code: 'OM',
    state_code: '05',
    state_name: 'Az Zahirah'
  },
  {
    country_iso_code: 'OM',
    state_code: '06',
    state_name: 'Masqat'
  },
  {
    country_iso_code: 'OM',
    state_code: '07',
    state_name: 'Musandam'
  },
  {
    country_iso_code: 'OM',
    state_code: '08',
    state_name: 'Zufar'
  },
  {
    country_iso_code: 'PA',
    state_code: '01',
    state_name: 'Bocas del Toro'
  },
  {
    country_iso_code: 'PA',
    state_code: '02',
    state_name: 'Chiriqui'
  },
  {
    country_iso_code: 'PA',
    state_code: '03',
    state_name: 'Cocle'
  },
  {
    country_iso_code: 'PA',
    state_code: '04',
    state_name: 'Colon'
  },
  {
    country_iso_code: 'PA',
    state_code: '05',
    state_name: 'Darien'
  },
  {
    country_iso_code: 'PA',
    state_code: '06',
    state_name: 'Herrera'
  },
  {
    country_iso_code: 'PA',
    state_code: '07',
    state_name: 'Los Santos'
  },
  {
    country_iso_code: 'PA',
    state_code: '08',
    state_name: 'Panama'
  },
  {
    country_iso_code: 'PA',
    state_code: '09',
    state_name: 'San Blas'
  },
  {
    country_iso_code: 'PA',
    state_code: 10,
    state_name: 'Veraguas'
  },
  {
    country_iso_code: 'PE',
    state_code: '01',
    state_name: 'Amazonas'
  },
  {
    country_iso_code: 'PE',
    state_code: '02',
    state_name: 'Ancash'
  },
  {
    country_iso_code: 'PE',
    state_code: '03',
    state_name: 'Apurimac'
  },
  {
    country_iso_code: 'PE',
    state_code: '04',
    state_name: 'Arequipa'
  },
  {
    country_iso_code: 'PE',
    state_code: '05',
    state_name: 'Ayacucho'
  },
  {
    country_iso_code: 'PE',
    state_code: '06',
    state_name: 'Cajamarca'
  },
  {
    country_iso_code: 'PE',
    state_code: '07',
    state_name: 'Callao'
  },
  {
    country_iso_code: 'PE',
    state_code: '08',
    state_name: 'Cusco'
  },
  {
    country_iso_code: 'PE',
    state_code: '09',
    state_name: 'Huancavelica'
  },
  {
    country_iso_code: 'PE',
    state_code: 10,
    state_name: 'Huanuco'
  },
  {
    country_iso_code: 'PE',
    state_code: 11,
    state_name: 'Ica'
  },
  {
    country_iso_code: 'PE',
    state_code: 12,
    state_name: 'Junin'
  },
  {
    country_iso_code: 'PE',
    state_code: 13,
    state_name: 'La Libertad'
  },
  {
    country_iso_code: 'PE',
    state_code: 14,
    state_name: 'Lambayeque'
  },
  {
    country_iso_code: 'PE',
    state_code: 15,
    state_name: 'Lima'
  },
  {
    country_iso_code: 'PE',
    state_code: 16,
    state_name: 'Loreto'
  },
  {
    country_iso_code: 'PE',
    state_code: 17,
    state_name: 'Madre de Dios'
  },
  {
    country_iso_code: 'PE',
    state_code: 18,
    state_name: 'Moquegua'
  },
  {
    country_iso_code: 'PE',
    state_code: 19,
    state_name: 'Pasco'
  },
  {
    country_iso_code: 'PE',
    state_code: 20,
    state_name: 'Piura'
  },
  {
    country_iso_code: 'PE',
    state_code: 21,
    state_name: 'Puno'
  },
  {
    country_iso_code: 'PE',
    state_code: 22,
    state_name: 'San Martin'
  },
  {
    country_iso_code: 'PE',
    state_code: 23,
    state_name: 'Tacna'
  },
  {
    country_iso_code: 'PE',
    state_code: 24,
    state_name: 'Tumbes'
  },
  {
    country_iso_code: 'PE',
    state_code: 25,
    state_name: 'Ucayali'
  },
  {
    country_iso_code: 'PG',
    state_code: '01',
    state_name: 'Central'
  },
  {
    country_iso_code: 'PG',
    state_code: '02',
    state_name: 'Gulf'
  },
  {
    country_iso_code: 'PG',
    state_code: '03',
    state_name: 'Milne Bay'
  },
  {
    country_iso_code: 'PG',
    state_code: '04',
    state_name: 'Northern'
  },
  {
    country_iso_code: 'PG',
    state_code: '05',
    state_name: 'Southern Highlands'
  },
  {
    country_iso_code: 'PG',
    state_code: '06',
    state_name: 'Western'
  },
  {
    country_iso_code: 'PG',
    state_code: '07',
    state_name: 'North Solomons'
  },
  {
    country_iso_code: 'PG',
    state_code: '08',
    state_name: 'Chimbu'
  },
  {
    country_iso_code: 'PG',
    state_code: '09',
    state_name: 'Eastern Highlands'
  },
  {
    country_iso_code: 'PG',
    state_code: 10,
    state_name: 'East New Britain'
  },
  {
    country_iso_code: 'PG',
    state_code: 11,
    state_name: 'East Sepik'
  },
  {
    country_iso_code: 'PG',
    state_code: 12,
    state_name: 'Madang'
  },
  {
    country_iso_code: 'PG',
    state_code: 13,
    state_name: 'Manus'
  },
  {
    country_iso_code: 'PG',
    state_code: 14,
    state_name: 'Morobe'
  },
  {
    country_iso_code: 'PG',
    state_code: 15,
    state_name: 'New Ireland'
  },
  {
    country_iso_code: 'PG',
    state_code: 16,
    state_name: 'Western Highlands'
  },
  {
    country_iso_code: 'PG',
    state_code: 17,
    state_name: 'West New Britain'
  },
  {
    country_iso_code: 'PG',
    state_code: 18,
    state_name: 'Sandaun'
  },
  {
    country_iso_code: 'PG',
    state_code: 19,
    state_name: 'Enga'
  },
  {
    country_iso_code: 'PG',
    state_code: 20,
    state_name: 'National Capital'
  },
  {
    country_iso_code: 'PH',
    state_code: '01',
    state_name: 'Abra'
  },
  {
    country_iso_code: 'PH',
    state_code: '02',
    state_name: 'Agusan del Norte'
  },
  {
    country_iso_code: 'PH',
    state_code: '03',
    state_name: 'Agusan del Sur'
  },
  {
    country_iso_code: 'PH',
    state_code: '04',
    state_name: 'Aklan'
  },
  {
    country_iso_code: 'PH',
    state_code: '05',
    state_name: 'Albay'
  },
  {
    country_iso_code: 'PH',
    state_code: '06',
    state_name: 'Antique'
  },
  {
    country_iso_code: 'PH',
    state_code: '07',
    state_name: 'Bataan'
  },
  {
    country_iso_code: 'PH',
    state_code: '08',
    state_name: 'Batanes'
  },
  {
    country_iso_code: 'PH',
    state_code: '09',
    state_name: 'Batangas'
  },
  {
    country_iso_code: 'PH',
    state_code: 10,
    state_name: 'Benguet'
  },
  {
    country_iso_code: 'PH',
    state_code: 11,
    state_name: 'Bohol'
  },
  {
    country_iso_code: 'PH',
    state_code: 12,
    state_name: 'Bukidnon'
  },
  {
    country_iso_code: 'PH',
    state_code: 13,
    state_name: 'Bulacan'
  },
  {
    country_iso_code: 'PH',
    state_code: 14,
    state_name: 'Cagayan'
  },
  {
    country_iso_code: 'PH',
    state_code: 15,
    state_name: 'Camarines Norte'
  },
  {
    country_iso_code: 'PH',
    state_code: 16,
    state_name: 'Camarines Sur'
  },
  {
    country_iso_code: 'PH',
    state_code: 17,
    state_name: 'Camiguin'
  },
  {
    country_iso_code: 'PH',
    state_code: 18,
    state_name: 'Capiz'
  },
  {
    country_iso_code: 'PH',
    state_code: 19,
    state_name: 'Catanduanes'
  },
  {
    country_iso_code: 'PH',
    state_code: 20,
    state_name: 'Cavite'
  },
  {
    country_iso_code: 'PH',
    state_code: 21,
    state_name: 'Cebu'
  },
  {
    country_iso_code: 'PH',
    state_code: 22,
    state_name: 'Basilan'
  },
  {
    country_iso_code: 'PH',
    state_code: 23,
    state_name: 'Eastern Samar'
  },
  {
    country_iso_code: 'PH',
    state_code: 24,
    state_name: 'Davao'
  },
  {
    country_iso_code: 'PH',
    state_code: 25,
    state_name: 'Davao del Sur'
  },
  {
    country_iso_code: 'PH',
    state_code: 26,
    state_name: 'Davao Oriental'
  },
  {
    country_iso_code: 'PH',
    state_code: 27,
    state_name: 'Ifugao'
  },
  {
    country_iso_code: 'PH',
    state_code: 28,
    state_name: 'Ilocos Norte'
  },
  {
    country_iso_code: 'PH',
    state_code: 29,
    state_name: 'Ilocos Sur'
  },
  {
    country_iso_code: 'PH',
    state_code: 30,
    state_name: 'Iloilo'
  },
  {
    country_iso_code: 'PH',
    state_code: 31,
    state_name: 'Isabela'
  },
  {
    country_iso_code: 'PH',
    state_code: 32,
    state_name: 'Kalinga-Apayao'
  },
  {
    country_iso_code: 'PH',
    state_code: 33,
    state_name: 'Laguna'
  },
  {
    country_iso_code: 'PH',
    state_code: 34,
    state_name: 'Lanao del Norte'
  },
  {
    country_iso_code: 'PH',
    state_code: 35,
    state_name: 'Lanao del Sur'
  },
  {
    country_iso_code: 'PH',
    state_code: 36,
    state_name: 'La Union'
  },
  {
    country_iso_code: 'PH',
    state_code: 37,
    state_name: 'Leyte'
  },
  {
    country_iso_code: 'PH',
    state_code: 38,
    state_name: 'Marinduque'
  },
  {
    country_iso_code: 'PH',
    state_code: 39,
    state_name: 'Masbate'
  },
  {
    country_iso_code: 'PH',
    state_code: 40,
    state_name: 'Mindoro Occidental'
  },
  {
    country_iso_code: 'PH',
    state_code: 41,
    state_name: 'Mindoro Oriental'
  },
  {
    country_iso_code: 'PH',
    state_code: 42,
    state_name: 'Misamis Occidental'
  },
  {
    country_iso_code: 'PH',
    state_code: 43,
    state_name: 'Misamis Oriental'
  },
  {
    country_iso_code: 'PH',
    state_code: 44,
    state_name: 'Mountain'
  },
  {
    country_iso_code: 'PH',
    state_code: 45,
    state_name: 'Negros Occidental'
  },
  {
    country_iso_code: 'PH',
    state_code: 46,
    state_name: 'Negros Oriental'
  },
  {
    country_iso_code: 'PH',
    state_code: 47,
    state_name: 'Nueva Ecija'
  },
  {
    country_iso_code: 'PH',
    state_code: 48,
    state_name: 'Nueva Vizcaya'
  },
  {
    country_iso_code: 'PH',
    state_code: 49,
    state_name: 'Palawan'
  },
  {
    country_iso_code: 'PH',
    state_code: 50,
    state_name: 'Pampanga'
  },
  {
    country_iso_code: 'PH',
    state_code: 51,
    state_name: 'Pangasinan'
  },
  {
    country_iso_code: 'PH',
    state_code: 53,
    state_name: 'Rizal'
  },
  {
    country_iso_code: 'PH',
    state_code: 54,
    state_name: 'Romblon'
  },
  {
    country_iso_code: 'PH',
    state_code: 55,
    state_name: 'Samar'
  },
  {
    country_iso_code: 'PH',
    state_code: 56,
    state_name: 'Maguindanao'
  },
  {
    country_iso_code: 'PH',
    state_code: 57,
    state_name: 'North Cotabato'
  },
  {
    country_iso_code: 'PH',
    state_code: 58,
    state_name: 'Sorsogon'
  },
  {
    country_iso_code: 'PH',
    state_code: 59,
    state_name: 'Southern Leyte'
  },
  {
    country_iso_code: 'PH',
    state_code: 60,
    state_name: 'Sulu'
  },
  {
    country_iso_code: 'PH',
    state_code: 61,
    state_name: 'Surigao del Norte'
  },
  {
    country_iso_code: 'PH',
    state_code: 62,
    state_name: 'Surigao del Sur'
  },
  {
    country_iso_code: 'PH',
    state_code: 63,
    state_name: 'Tarlac'
  },
  {
    country_iso_code: 'PH',
    state_code: 64,
    state_name: 'Zambales'
  },
  {
    country_iso_code: 'PH',
    state_code: 65,
    state_name: 'Zamboanga del Norte'
  },
  {
    country_iso_code: 'PH',
    state_code: 66,
    state_name: 'Zamboanga del Sur'
  },
  {
    country_iso_code: 'PH',
    state_code: 67,
    state_name: 'Northern Samar'
  },
  {
    country_iso_code: 'PH',
    state_code: 68,
    state_name: 'Quirino'
  },
  {
    country_iso_code: 'PH',
    state_code: 69,
    state_name: 'Siquijor'
  },
  {
    country_iso_code: 'PH',
    state_code: 70,
    state_name: 'South Cotabato'
  },
  {
    country_iso_code: 'PH',
    state_code: 71,
    state_name: 'Sultan Kudarat'
  },
  {
    country_iso_code: 'PH',
    state_code: 72,
    state_name: 'Tawitawi'
  },
  {
    country_iso_code: 'PH',
    state_code: 'A1',
    state_name: 'Angeles'
  },
  {
    country_iso_code: 'PH',
    state_code: 'A2',
    state_name: 'Bacolod'
  },
  {
    country_iso_code: 'PH',
    state_code: 'A3',
    state_name: 'Bago'
  },
  {
    country_iso_code: 'PH',
    state_code: 'A4',
    state_name: 'Baguio'
  },
  {
    country_iso_code: 'PH',
    state_code: 'A5',
    state_name: 'Bais'
  },
  {
    country_iso_code: 'PH',
    state_code: 'A6',
    state_name: 'Basilan City'
  },
  {
    country_iso_code: 'PH',
    state_code: 'A7',
    state_name: 'Batangas City'
  },
  {
    country_iso_code: 'PH',
    state_code: 'A8',
    state_name: 'Butuan'
  },
  {
    country_iso_code: 'PH',
    state_code: 'A9',
    state_name: 'Cabanatuan'
  },
  {
    country_iso_code: 'PH',
    state_code: 'B1',
    state_name: 'Cadiz'
  },
  {
    country_iso_code: 'PH',
    state_code: 'B2',
    state_name: 'Cagayan de Oro'
  },
  {
    country_iso_code: 'PH',
    state_code: 'B3',
    state_name: 'Calbayog'
  },
  {
    country_iso_code: 'PH',
    state_code: 'B4',
    state_name: 'Caloocan'
  },
  {
    country_iso_code: 'PH',
    state_code: 'B5',
    state_name: 'Canlaon'
  },
  {
    country_iso_code: 'PH',
    state_code: 'B6',
    state_name: 'Cavite City'
  },
  {
    country_iso_code: 'PH',
    state_code: 'B7',
    state_name: 'Cebu City'
  },
  {
    country_iso_code: 'PH',
    state_code: 'B8',
    state_name: 'Cotabato'
  },
  {
    country_iso_code: 'PH',
    state_code: 'B9',
    state_name: 'Dagupan'
  },
  {
    country_iso_code: 'PH',
    state_code: 'C1',
    state_name: 'Danao'
  },
  {
    country_iso_code: 'PH',
    state_code: 'C2',
    state_name: 'Dapitan'
  },
  {
    country_iso_code: 'PH',
    state_code: 'C3',
    state_name: 'Davao City'
  },
  {
    country_iso_code: 'PH',
    state_code: 'C4',
    state_name: 'Dipolog'
  },
  {
    country_iso_code: 'PH',
    state_code: 'C5',
    state_name: 'Dumaguete'
  },
  {
    country_iso_code: 'PH',
    state_code: 'C6',
    state_name: 'General Santos'
  },
  {
    country_iso_code: 'PH',
    state_code: 'C7',
    state_name: 'Gingoog'
  },
  {
    country_iso_code: 'PH',
    state_code: 'C8',
    state_name: 'Iligan'
  },
  {
    country_iso_code: 'PH',
    state_code: 'C9',
    state_name: 'Iloilo City'
  },
  {
    country_iso_code: 'PH',
    state_code: 'D1',
    state_name: 'Iriga'
  },
  {
    country_iso_code: 'PH',
    state_code: 'D2',
    state_name: 'La Carlota'
  },
  {
    country_iso_code: 'PH',
    state_code: 'D3',
    state_name: 'Laoag'
  },
  {
    country_iso_code: 'PH',
    state_code: 'D4',
    state_name: 'Lapu-Lapu'
  },
  {
    country_iso_code: 'PH',
    state_code: 'D5',
    state_name: 'Legaspi'
  },
  {
    country_iso_code: 'PH',
    state_code: 'D6',
    state_name: 'Lipa'
  },
  {
    country_iso_code: 'PH',
    state_code: 'D7',
    state_name: 'Lucena'
  },
  {
    country_iso_code: 'PH',
    state_code: 'D8',
    state_name: 'Mandaue'
  },
  {
    country_iso_code: 'PH',
    state_code: 'D9',
    state_name: 'Manila'
  },
  {
    country_iso_code: 'PH',
    state_code: 'E1',
    state_name: 'Marawi'
  },
  {
    country_iso_code: 'PH',
    state_code: 'E2',
    state_name: 'Naga'
  },
  {
    country_iso_code: 'PH',
    state_code: 'E3',
    state_name: 'Olongapo'
  },
  {
    country_iso_code: 'PH',
    state_code: 'E4',
    state_name: 'Ormoc'
  },
  {
    country_iso_code: 'PH',
    state_code: 'E5',
    state_name: 'Oroquieta'
  },
  {
    country_iso_code: 'PH',
    state_code: 'E6',
    state_name: 'Ozamis'
  },
  {
    country_iso_code: 'PH',
    state_code: 'E7',
    state_name: 'Pagadian'
  },
  {
    country_iso_code: 'PH',
    state_code: 'E8',
    state_name: 'Palayan'
  },
  {
    country_iso_code: 'PH',
    state_code: 'E9',
    state_name: 'Pasay'
  },
  {
    country_iso_code: 'PH',
    state_code: 'F1',
    state_name: 'Puerto Princesa'
  },
  {
    country_iso_code: 'PH',
    state_code: 'F2',
    state_name: 'Quezon City'
  },
  {
    country_iso_code: 'PH',
    state_code: 'F3',
    state_name: 'Roxas'
  },
  {
    country_iso_code: 'PH',
    state_code: 'F4',
    state_name: 'San Carlos'
  },
  {
    country_iso_code: 'PH',
    state_code: 'F5',
    state_name: 'San Carlos'
  },
  {
    country_iso_code: 'PH',
    state_code: 'F6',
    state_name: 'San Jose'
  },
  {
    country_iso_code: 'PH',
    state_code: 'F7',
    state_name: 'San Pablo'
  },
  {
    country_iso_code: 'PH',
    state_code: 'F8',
    state_name: 'Silay'
  },
  {
    country_iso_code: 'PH',
    state_code: 'F9',
    state_name: 'Surigao'
  },
  {
    country_iso_code: 'PH',
    state_code: 'G1',
    state_name: 'Tacloban'
  },
  {
    country_iso_code: 'PH',
    state_code: 'G2',
    state_name: 'Tagaytay'
  },
  {
    country_iso_code: 'PH',
    state_code: 'G3',
    state_name: 'Tagbilaran'
  },
  {
    country_iso_code: 'PH',
    state_code: 'G4',
    state_name: 'Tangub'
  },
  {
    country_iso_code: 'PH',
    state_code: 'G5',
    state_name: 'Toledo'
  },
  {
    country_iso_code: 'PH',
    state_code: 'G6',
    state_name: 'Trece Martires'
  },
  {
    country_iso_code: 'PH',
    state_code: 'G7',
    state_name: 'Zamboanga'
  },
  {
    country_iso_code: 'PH',
    state_code: 'G8',
    state_name: 'Aurora'
  },
  {
    country_iso_code: 'PH',
    state_code: 'H2',
    state_name: 'Quezon'
  },
  {
    country_iso_code: 'PH',
    state_code: 'H3',
    state_name: 'Negros Occidental'
  },
  {
    country_iso_code: 'PH',
    state_code: 'H9',
    state_name: 'Biliran'
  },
  {
    country_iso_code: 'PH',
    state_code: 'I6',
    state_name: 'Compostela Valley'
  },
  {
    country_iso_code: 'PH',
    state_code: 'I7',
    state_name: 'Davao del Norte'
  },
  {
    country_iso_code: 'PH',
    state_code: 'J3',
    state_name: 'Guimaras'
  },
  {
    country_iso_code: 'PH',
    state_code: 'J4',
    state_name: 'Himamaylan'
  },
  {
    country_iso_code: 'PH',
    state_code: 'J7',
    state_name: 'Kalinga'
  },
  {
    country_iso_code: 'PH',
    state_code: 'K1',
    state_name: 'Las Pinas'
  },
  {
    country_iso_code: 'PH',
    state_code: 'K5',
    state_name: 'Malabon'
  },
  {
    country_iso_code: 'PH',
    state_code: 'K6',
    state_name: 'Malaybalay'
  },
  {
    country_iso_code: 'PH',
    state_code: 'L4',
    state_name: 'Muntinlupa'
  },
  {
    country_iso_code: 'PH',
    state_code: 'L5',
    state_name: 'Navotas'
  },
  {
    country_iso_code: 'PH',
    state_code: 'L7',
    state_name: 'Paranaque'
  },
  {
    country_iso_code: 'PH',
    state_code: 'L9',
    state_name: 'Passi'
  },
  {
    country_iso_code: 'PH',
    state_code: 'P1',
    state_name: 'Zambales'
  },
  {
    country_iso_code: 'PH',
    state_code: 'M5',
    state_name: 'San Jose del Monte'
  },
  {
    country_iso_code: 'PH',
    state_code: 'M6',
    state_name: 'San Juan'
  },
  {
    country_iso_code: 'PH',
    state_code: 'M8',
    state_name: 'Santiago'
  },
  {
    country_iso_code: 'PH',
    state_code: 'M9',
    state_name: 'Sarangani'
  },
  {
    country_iso_code: 'PH',
    state_code: 'N1',
    state_name: 'Sipalay'
  },
  {
    country_iso_code: 'PH',
    state_code: 'N3',
    state_name: 'Surigao del Norte'
  },
  {
    country_iso_code: 'PH',
    state_code: 'P2',
    state_name: 'Zamboanga'
  },
  {
    country_iso_code: 'PK',
    state_code: '01',
    state_name: 'Federally Administered Tribal Areas'
  },
  {
    country_iso_code: 'PK',
    state_code: '02',
    state_name: 'Balochistan'
  },
  {
    country_iso_code: 'PK',
    state_code: '03',
    state_name: 'North-West Frontier'
  },
  {
    country_iso_code: 'PK',
    state_code: '04',
    state_name: 'Punjab'
  },
  {
    country_iso_code: 'PK',
    state_code: '05',
    state_name: 'Sindh'
  },
  {
    country_iso_code: 'PK',
    state_code: '06',
    state_name: 'Azad Kashmir'
  },
  {
    country_iso_code: 'PK',
    state_code: '07',
    state_name: 'Northern Areas'
  },
  {
    country_iso_code: 'PK',
    state_code: '08',
    state_name: 'Islamabad'
  },
  {
    country_iso_code: 'PL',
    state_code: 72,
    state_name: 'Dolnoslaskie'
  },
  {
    country_iso_code: 'PL',
    state_code: 73,
    state_name: 'Kujawsko-Pomorskie'
  },
  {
    country_iso_code: 'PL',
    state_code: 74,
    state_name: 'Lodzkie'
  },
  {
    country_iso_code: 'PL',
    state_code: 75,
    state_name: 'Lubelskie'
  },
  {
    country_iso_code: 'PL',
    state_code: 76,
    state_name: 'Lubuskie'
  },
  {
    country_iso_code: 'PL',
    state_code: 77,
    state_name: 'Malopolskie'
  },
  {
    country_iso_code: 'PL',
    state_code: 78,
    state_name: 'Mazowieckie'
  },
  {
    country_iso_code: 'PL',
    state_code: 79,
    state_name: 'Opolskie'
  },
  {
    country_iso_code: 'PL',
    state_code: 80,
    state_name: 'Podkarpackie'
  },
  {
    country_iso_code: 'PL',
    state_code: 81,
    state_name: 'Podlaskie'
  },
  {
    country_iso_code: 'PL',
    state_code: 82,
    state_name: 'Pomorskie'
  },
  {
    country_iso_code: 'PL',
    state_code: 83,
    state_name: 'Slaskie'
  },
  {
    country_iso_code: 'PL',
    state_code: 84,
    state_name: 'Swietokrzyskie'
  },
  {
    country_iso_code: 'PL',
    state_code: 85,
    state_name: 'Warminsko-Mazurskie'
  },
  {
    country_iso_code: 'PL',
    state_code: 86,
    state_name: 'Wielkopolskie'
  },
  {
    country_iso_code: 'PL',
    state_code: 87,
    state_name: 'Zachodniopomorskie'
  },
  {
    country_iso_code: 'PS',
    state_code: 'GZ',
    state_name: 'Gaza'
  },
  {
    country_iso_code: 'PS',
    state_code: 'WE',
    state_name: 'West Bank'
  },
  {
    country_iso_code: 'PT',
    state_code: '02',
    state_name: 'Aveiro'
  },
  {
    country_iso_code: 'PT',
    state_code: '03',
    state_name: 'Beja'
  },
  {
    country_iso_code: 'PT',
    state_code: '04',
    state_name: 'Braga'
  },
  {
    country_iso_code: 'PT',
    state_code: '05',
    state_name: 'Braganca'
  },
  {
    country_iso_code: 'PT',
    state_code: '06',
    state_name: 'Castelo Branco'
  },
  {
    country_iso_code: 'PT',
    state_code: '07',
    state_name: 'Coimbra'
  },
  {
    country_iso_code: 'PT',
    state_code: '08',
    state_name: 'Evora'
  },
  {
    country_iso_code: 'PT',
    state_code: '09',
    state_name: 'Faro'
  },
  {
    country_iso_code: 'PT',
    state_code: 10,
    state_name: 'Madeira'
  },
  {
    country_iso_code: 'PT',
    state_code: 11,
    state_name: 'Guarda'
  },
  {
    country_iso_code: 'PT',
    state_code: 13,
    state_name: 'Leiria'
  },
  {
    country_iso_code: 'PT',
    state_code: 14,
    state_name: 'Lisboa'
  },
  {
    country_iso_code: 'PT',
    state_code: 16,
    state_name: 'Portalegre'
  },
  {
    country_iso_code: 'PT',
    state_code: 17,
    state_name: 'Porto'
  },
  {
    country_iso_code: 'PT',
    state_code: 18,
    state_name: 'Santarem'
  },
  {
    country_iso_code: 'PT',
    state_code: 19,
    state_name: 'Setubal'
  },
  {
    country_iso_code: 'PT',
    state_code: 20,
    state_name: 'Viana do Castelo'
  },
  {
    country_iso_code: 'PT',
    state_code: 21,
    state_name: 'Vila Real'
  },
  {
    country_iso_code: 'PT',
    state_code: 22,
    state_name: 'Viseu'
  },
  {
    country_iso_code: 'PT',
    state_code: 23,
    state_name: 'Azores'
  },
  {
    country_iso_code: 'PY',
    state_code: '01',
    state_name: 'Alto Parana'
  },
  {
    country_iso_code: 'PY',
    state_code: '02',
    state_name: 'Amambay'
  },
  {
    country_iso_code: 'PY',
    state_code: '04',
    state_name: 'Caaguazu'
  },
  {
    country_iso_code: 'PY',
    state_code: '05',
    state_name: 'Caazapa'
  },
  {
    country_iso_code: 'PY',
    state_code: '06',
    state_name: 'Central'
  },
  {
    country_iso_code: 'PY',
    state_code: '07',
    state_name: 'Concepcion'
  },
  {
    country_iso_code: 'PY',
    state_code: '08',
    state_name: 'Cordillera'
  },
  {
    country_iso_code: 'PY',
    state_code: 10,
    state_name: 'Guaira'
  },
  {
    country_iso_code: 'PY',
    state_code: 11,
    state_name: 'Itapua'
  },
  {
    country_iso_code: 'PY',
    state_code: 12,
    state_name: 'Misiones'
  },
  {
    country_iso_code: 'PY',
    state_code: 13,
    state_name: 'Neembucu'
  },
  {
    country_iso_code: 'PY',
    state_code: 15,
    state_name: 'Paraguari'
  },
  {
    country_iso_code: 'PY',
    state_code: 16,
    state_name: 'Presidente Hayes'
  },
  {
    country_iso_code: 'PY',
    state_code: 17,
    state_name: 'San Pedro'
  },
  {
    country_iso_code: 'PY',
    state_code: 19,
    state_name: 'Canindeyu'
  },
  {
    country_iso_code: 'PY',
    state_code: 22,
    state_name: 'Asuncion'
  },
  {
    country_iso_code: 'PY',
    state_code: 23,
    state_name: 'Alto Paraguay'
  },
  {
    country_iso_code: 'PY',
    state_code: 24,
    state_name: 'Boqueron'
  },
  {
    country_iso_code: 'QA',
    state_code: '01',
    state_name: 'Ad Dawhah'
  },
  {
    country_iso_code: 'QA',
    state_code: '02',
    state_name: 'Al Ghuwariyah'
  },
  {
    country_iso_code: 'QA',
    state_code: '03',
    state_name: 'Al Jumaliyah'
  },
  {
    country_iso_code: 'QA',
    state_code: '04',
    state_name: 'Al Khawr'
  },
  {
    country_iso_code: 'QA',
    state_code: '05',
    state_name: 'Al Wakrah Municipality'
  },
  {
    country_iso_code: 'QA',
    state_code: '06',
    state_name: 'Ar Rayyan'
  },
  {
    country_iso_code: 'QA',
    state_code: '08',
    state_name: 'Madinat ach Shamal'
  },
  {
    country_iso_code: 'QA',
    state_code: '09',
    state_name: 'Umm Salal'
  },
  {
    country_iso_code: 'QA',
    state_code: 10,
    state_name: 'Al Wakrah'
  },
  {
    country_iso_code: 'QA',
    state_code: 11,
    state_name: 'Jariyan al Batnah'
  },
  {
    country_iso_code: 'QA',
    state_code: 12,
    state_name: "Umm Sa'id"
  },
  {
    country_iso_code: 'RO',
    state_code: '01',
    state_name: 'Alba'
  },
  {
    country_iso_code: 'RO',
    state_code: '02',
    state_name: 'Arad'
  },
  {
    country_iso_code: 'RO',
    state_code: '03',
    state_name: 'Arges'
  },
  {
    country_iso_code: 'RO',
    state_code: '04',
    state_name: 'Bacau'
  },
  {
    country_iso_code: 'RO',
    state_code: '05',
    state_name: 'Bihor'
  },
  {
    country_iso_code: 'RO',
    state_code: '06',
    state_name: 'Bistrita-Nasaud'
  },
  {
    country_iso_code: 'RO',
    state_code: '07',
    state_name: 'Botosani'
  },
  {
    country_iso_code: 'RO',
    state_code: '08',
    state_name: 'Braila'
  },
  {
    country_iso_code: 'RO',
    state_code: '09',
    state_name: 'Brasov'
  },
  {
    country_iso_code: 'RO',
    state_code: 10,
    state_name: 'Bucuresti'
  },
  {
    country_iso_code: 'RO',
    state_code: 11,
    state_name: 'Buzau'
  },
  {
    country_iso_code: 'RO',
    state_code: 12,
    state_name: 'Caras-Severin'
  },
  {
    country_iso_code: 'RO',
    state_code: 13,
    state_name: 'Cluj'
  },
  {
    country_iso_code: 'RO',
    state_code: 14,
    state_name: 'Constanta'
  },
  {
    country_iso_code: 'RO',
    state_code: 15,
    state_name: 'Covasna'
  },
  {
    country_iso_code: 'RO',
    state_code: 16,
    state_name: 'Dambovita'
  },
  {
    country_iso_code: 'RO',
    state_code: 17,
    state_name: 'Dolj'
  },
  {
    country_iso_code: 'RO',
    state_code: 18,
    state_name: 'Galati'
  },
  {
    country_iso_code: 'RO',
    state_code: 19,
    state_name: 'Gorj'
  },
  {
    country_iso_code: 'RO',
    state_code: 20,
    state_name: 'Harghita'
  },
  {
    country_iso_code: 'RO',
    state_code: 21,
    state_name: 'Hunedoara'
  },
  {
    country_iso_code: 'RO',
    state_code: 22,
    state_name: 'Ialomita'
  },
  {
    country_iso_code: 'RO',
    state_code: 23,
    state_name: 'Iasi'
  },
  {
    country_iso_code: 'RO',
    state_code: 25,
    state_name: 'Maramures'
  },
  {
    country_iso_code: 'RO',
    state_code: 26,
    state_name: 'Mehedinti'
  },
  {
    country_iso_code: 'RO',
    state_code: 27,
    state_name: 'Mures'
  },
  {
    country_iso_code: 'RO',
    state_code: 28,
    state_name: 'Neamt'
  },
  {
    country_iso_code: 'RO',
    state_code: 29,
    state_name: 'Olt'
  },
  {
    country_iso_code: 'RO',
    state_code: 30,
    state_name: 'Prahova'
  },
  {
    country_iso_code: 'RO',
    state_code: 31,
    state_name: 'Salaj'
  },
  {
    country_iso_code: 'RO',
    state_code: 32,
    state_name: 'Satu Mare'
  },
  {
    country_iso_code: 'RO',
    state_code: 33,
    state_name: 'Sibiu'
  },
  {
    country_iso_code: 'RO',
    state_code: 34,
    state_name: 'Suceava'
  },
  {
    country_iso_code: 'RO',
    state_code: 35,
    state_name: 'Teleorman'
  },
  {
    country_iso_code: 'RO',
    state_code: 36,
    state_name: 'Timis'
  },
  {
    country_iso_code: 'RO',
    state_code: 37,
    state_name: 'Tulcea'
  },
  {
    country_iso_code: 'RO',
    state_code: 38,
    state_name: 'Vaslui'
  },
  {
    country_iso_code: 'RO',
    state_code: 39,
    state_name: 'Valcea'
  },
  {
    country_iso_code: 'RO',
    state_code: 40,
    state_name: 'Vrancea'
  },
  {
    country_iso_code: 'RO',
    state_code: 41,
    state_name: 'Calarasi'
  },
  {
    country_iso_code: 'RO',
    state_code: 42,
    state_name: 'Giurgiu'
  },
  {
    country_iso_code: 'RO',
    state_code: 43,
    state_name: 'Ilfov'
  },
  {
    country_iso_code: 'RS',
    state_code: '01',
    state_name: 'Kosovo'
  },
  {
    country_iso_code: 'RS',
    state_code: '02',
    state_name: 'Vojvodina'
  },
  {
    country_iso_code: 'RU',
    state_code: '01',
    state_name: 'Adygeya, Republic of'
  },
  {
    country_iso_code: 'RU',
    state_code: '02',
    state_name: 'Aginsky Buryatsky AO'
  },
  {
    country_iso_code: 'RU',
    state_code: '03',
    state_name: 'Gorno-Altay'
  },
  {
    country_iso_code: 'RU',
    state_code: '04',
    state_name: 'Altaisky krai'
  },
  {
    country_iso_code: 'RU',
    state_code: '05',
    state_name: 'Amur'
  },
  {
    country_iso_code: 'RU',
    state_code: '06',
    state_name: "Arkhangel'sk"
  },
  {
    country_iso_code: 'RU',
    state_code: '07',
    state_name: "Astrakhan'"
  },
  {
    country_iso_code: 'RU',
    state_code: '08',
    state_name: 'Bashkortostan'
  },
  {
    country_iso_code: 'RU',
    state_code: '09',
    state_name: 'Belgorod'
  },
  {
    country_iso_code: 'RU',
    state_code: 10,
    state_name: 'Bryansk'
  },
  {
    country_iso_code: 'RU',
    state_code: 11,
    state_name: 'Buryat'
  },
  {
    country_iso_code: 'RU',
    state_code: 12,
    state_name: 'Chechnya'
  },
  {
    country_iso_code: 'RU',
    state_code: 13,
    state_name: 'Chelyabinsk'
  },
  {
    country_iso_code: 'RU',
    state_code: 14,
    state_name: 'Chita'
  },
  {
    country_iso_code: 'RU',
    state_code: 15,
    state_name: 'Chukot'
  },
  {
    country_iso_code: 'RU',
    state_code: 16,
    state_name: 'Chuvashia'
  },
  {
    country_iso_code: 'RU',
    state_code: 17,
    state_name: 'Dagestan'
  },
  {
    country_iso_code: 'RU',
    state_code: 18,
    state_name: 'Evenk'
  },
  {
    country_iso_code: 'RU',
    state_code: 19,
    state_name: 'Ingush'
  },
  {
    country_iso_code: 'RU',
    state_code: 20,
    state_name: 'Irkutsk'
  },
  {
    country_iso_code: 'RU',
    state_code: 21,
    state_name: 'Ivanovo'
  },
  {
    country_iso_code: 'RU',
    state_code: 22,
    state_name: 'Kabardin-Balkar'
  },
  {
    country_iso_code: 'RU',
    state_code: 23,
    state_name: 'Kaliningrad'
  },
  {
    country_iso_code: 'RU',
    state_code: 24,
    state_name: 'Kalmyk'
  },
  {
    country_iso_code: 'RU',
    state_code: 25,
    state_name: 'Kaluga'
  },
  {
    country_iso_code: 'RU',
    state_code: 26,
    state_name: 'Kamchatka'
  },
  {
    country_iso_code: 'RU',
    state_code: 27,
    state_name: 'Karachay-Cherkess'
  },
  {
    country_iso_code: 'RU',
    state_code: 28,
    state_name: 'Karelia'
  },
  {
    country_iso_code: 'RU',
    state_code: 29,
    state_name: 'Kemerovo'
  },
  {
    country_iso_code: 'RU',
    state_code: 30,
    state_name: 'Khabarovsk'
  },
  {
    country_iso_code: 'RU',
    state_code: 31,
    state_name: 'Khakass'
  },
  {
    country_iso_code: 'RU',
    state_code: 32,
    state_name: 'Khanty-Mansiy'
  },
  {
    country_iso_code: 'RU',
    state_code: 33,
    state_name: 'Kirov'
  },
  {
    country_iso_code: 'RU',
    state_code: 34,
    state_name: 'Komi'
  },
  {
    country_iso_code: 'RU',
    state_code: 36,
    state_name: 'Koryak'
  },
  {
    country_iso_code: 'RU',
    state_code: 37,
    state_name: 'Kostroma'
  },
  {
    country_iso_code: 'RU',
    state_code: 38,
    state_name: 'Krasnodar'
  },
  {
    country_iso_code: 'RU',
    state_code: 39,
    state_name: 'Krasnoyarsk'
  },
  {
    country_iso_code: 'RU',
    state_code: 40,
    state_name: 'Kurgan'
  },
  {
    country_iso_code: 'RU',
    state_code: 41,
    state_name: 'Kursk'
  },
  {
    country_iso_code: 'RU',
    state_code: 42,
    state_name: 'Leningrad'
  },
  {
    country_iso_code: 'RU',
    state_code: 43,
    state_name: 'Lipetsk'
  },
  {
    country_iso_code: 'RU',
    state_code: 44,
    state_name: 'Magadan'
  },
  {
    country_iso_code: 'RU',
    state_code: 45,
    state_name: 'Mariy-El'
  },
  {
    country_iso_code: 'RU',
    state_code: 46,
    state_name: 'Mordovia'
  },
  {
    country_iso_code: 'RU',
    state_code: 47,
    state_name: 'Moskva'
  },
  {
    country_iso_code: 'RU',
    state_code: 48,
    state_name: 'Moscow City'
  },
  {
    country_iso_code: 'RU',
    state_code: 49,
    state_name: 'Murmansk'
  },
  {
    country_iso_code: 'RU',
    state_code: 50,
    state_name: 'Nenets'
  },
  {
    country_iso_code: 'RU',
    state_code: 51,
    state_name: 'Nizhegorod'
  },
  {
    country_iso_code: 'RU',
    state_code: 52,
    state_name: 'Novgorod'
  },
  {
    country_iso_code: 'RU',
    state_code: 53,
    state_name: 'Novosibirsk'
  },
  {
    country_iso_code: 'RU',
    state_code: 54,
    state_name: 'Omsk'
  },
  {
    country_iso_code: 'RU',
    state_code: 55,
    state_name: 'Orenburg'
  },
  {
    country_iso_code: 'RU',
    state_code: 56,
    state_name: 'Orel'
  },
  {
    country_iso_code: 'RU',
    state_code: 57,
    state_name: 'Penza'
  },
  {
    country_iso_code: 'RU',
    state_code: 58,
    state_name: "Perm'"
  },
  {
    country_iso_code: 'RU',
    state_code: 59,
    state_name: "Primor'ye"
  },
  {
    country_iso_code: 'RU',
    state_code: 60,
    state_name: 'Pskov'
  },
  {
    country_iso_code: 'RU',
    state_code: 61,
    state_name: 'Rostov'
  },
  {
    country_iso_code: 'RU',
    state_code: 62,
    state_name: "Ryazan'"
  },
  {
    country_iso_code: 'RU',
    state_code: 63,
    state_name: 'Sakha'
  },
  {
    country_iso_code: 'RU',
    state_code: 64,
    state_name: 'Sakhalin'
  },
  {
    country_iso_code: 'RU',
    state_code: 65,
    state_name: 'Samara'
  },
  {
    country_iso_code: 'RU',
    state_code: 66,
    state_name: 'Saint Petersburg City'
  },
  {
    country_iso_code: 'RU',
    state_code: 67,
    state_name: 'Saratov'
  },
  {
    country_iso_code: 'RU',
    state_code: 68,
    state_name: 'North Ossetia'
  },
  {
    country_iso_code: 'RU',
    state_code: 69,
    state_name: 'Smolensk'
  },
  {
    country_iso_code: 'RU',
    state_code: 70,
    state_name: "Stavropol'"
  },
  {
    country_iso_code: 'RU',
    state_code: 71,
    state_name: 'Sverdlovsk'
  },
  {
    country_iso_code: 'RU',
    state_code: 72,
    state_name: 'Tambovskaya oblast'
  },
  {
    country_iso_code: 'RU',
    state_code: 73,
    state_name: 'Tatarstan'
  },
  {
    country_iso_code: 'RU',
    state_code: 74,
    state_name: 'Taymyr'
  },
  {
    country_iso_code: 'RU',
    state_code: 75,
    state_name: 'Tomsk'
  },
  {
    country_iso_code: 'RU',
    state_code: 76,
    state_name: 'Tula'
  },
  {
    country_iso_code: 'RU',
    state_code: 77,
    state_name: "Tver'"
  },
  {
    country_iso_code: 'RU',
    state_code: 78,
    state_name: "Tyumen'"
  },
  {
    country_iso_code: 'RU',
    state_code: 79,
    state_name: 'Tuva'
  },
  {
    country_iso_code: 'RU',
    state_code: 80,
    state_name: 'Udmurt'
  },
  {
    country_iso_code: 'RU',
    state_code: 81,
    state_name: "Ul'yanovsk"
  },
  {
    country_iso_code: 'RU',
    state_code: 83,
    state_name: 'Vladimir'
  },
  {
    country_iso_code: 'RU',
    state_code: 84,
    state_name: 'Volgograd'
  },
  {
    country_iso_code: 'RU',
    state_code: 85,
    state_name: 'Vologda'
  },
  {
    country_iso_code: 'RU',
    state_code: 86,
    state_name: 'Voronezh'
  },
  {
    country_iso_code: 'RU',
    state_code: 87,
    state_name: 'Yamal-Nenets'
  },
  {
    country_iso_code: 'RU',
    state_code: 88,
    state_name: "Yaroslavl'"
  },
  {
    country_iso_code: 'RU',
    state_code: 89,
    state_name: 'Yevrey'
  },
  {
    country_iso_code: 'RU',
    state_code: 90,
    state_name: 'Permskiy Kray'
  },
  {
    country_iso_code: 'RU',
    state_code: 91,
    state_name: 'Krasnoyarskiy Kray'
  },
  {
    country_iso_code: 'RU',
    state_code: 92,
    state_name: 'Kamchatskiy Kray'
  },
  {
    country_iso_code: 'RU',
    state_code: 93,
    state_name: "Zabaykal'skiy Kray"
  },
  {
    country_iso_code: 'RW',
    state_code: '01',
    state_name: 'Butare'
  },
  {
    country_iso_code: 'RW',
    state_code: '06',
    state_name: 'Gitarama'
  },
  {
    country_iso_code: 'RW',
    state_code: '07',
    state_name: 'Kibungo'
  },
  {
    country_iso_code: 'RW',
    state_code: '09',
    state_name: 'Kigali'
  },
  {
    country_iso_code: 'RW',
    state_code: 11,
    state_name: 'Est'
  },
  {
    country_iso_code: 'RW',
    state_code: 12,
    state_name: 'Kigali'
  },
  {
    country_iso_code: 'RW',
    state_code: 13,
    state_name: 'Nord'
  },
  {
    country_iso_code: 'RW',
    state_code: 14,
    state_name: 'Ouest'
  },
  {
    country_iso_code: 'RW',
    state_code: 15,
    state_name: 'Sud'
  },
  {
    country_iso_code: 'SA',
    state_code: '02',
    state_name: 'Al Bahah'
  },
  {
    country_iso_code: 'SA',
    state_code: '05',
    state_name: 'Al Madinah'
  },
  {
    country_iso_code: 'SA',
    state_code: '06',
    state_name: 'Ash Sharqiyah'
  },
  {
    country_iso_code: 'SA',
    state_code: '08',
    state_name: 'Al Qasim'
  },
  {
    country_iso_code: 'SA',
    state_code: 10,
    state_name: 'Ar Riyad'
  },
  {
    country_iso_code: 'SA',
    state_code: 11,
    state_name: 'Asir Province'
  },
  {
    country_iso_code: 'SA',
    state_code: 13,
    state_name: "Ha'il"
  },
  {
    country_iso_code: 'SA',
    state_code: 14,
    state_name: 'Makkah'
  },
  {
    country_iso_code: 'SA',
    state_code: 15,
    state_name: 'Al Hudud ash Shamaliyah'
  },
  {
    country_iso_code: 'SA',
    state_code: 16,
    state_name: 'Najran'
  },
  {
    country_iso_code: 'SA',
    state_code: 17,
    state_name: 'Jizan'
  },
  {
    country_iso_code: 'SA',
    state_code: 19,
    state_name: 'Tabuk'
  },
  {
    country_iso_code: 'SA',
    state_code: 20,
    state_name: 'Al Jawf'
  },
  {
    country_iso_code: 'SB',
    state_code: '03',
    state_name: 'Malaita'
  },
  {
    country_iso_code: 'SB',
    state_code: '06',
    state_name: 'Guadalcanal'
  },
  {
    country_iso_code: 'SB',
    state_code: '07',
    state_name: 'Isabel'
  },
  {
    country_iso_code: 'SB',
    state_code: '08',
    state_name: 'Makira'
  },
  {
    country_iso_code: 'SB',
    state_code: '09',
    state_name: 'Temotu'
  },
  {
    country_iso_code: 'SB',
    state_code: 10,
    state_name: 'Central'
  },
  {
    country_iso_code: 'SB',
    state_code: 11,
    state_name: 'Western'
  },
  {
    country_iso_code: 'SB',
    state_code: 12,
    state_name: 'Choiseul'
  },
  {
    country_iso_code: 'SB',
    state_code: 13,
    state_name: 'Rennell and Bellona'
  },
  {
    country_iso_code: 'SC',
    state_code: '01',
    state_name: 'Anse aux Pins'
  },
  {
    country_iso_code: 'SC',
    state_code: '02',
    state_name: 'Anse Boileau'
  },
  {
    country_iso_code: 'SC',
    state_code: '03',
    state_name: 'Anse Etoile'
  },
  {
    country_iso_code: 'SC',
    state_code: '04',
    state_name: 'Anse Louis'
  },
  {
    country_iso_code: 'SC',
    state_code: '05',
    state_name: 'Anse Royale'
  },
  {
    country_iso_code: 'SC',
    state_code: '06',
    state_name: 'Baie Lazare'
  },
  {
    country_iso_code: 'SC',
    state_code: '07',
    state_name: 'Baie Sainte Anne'
  },
  {
    country_iso_code: 'SC',
    state_code: '08',
    state_name: 'Beau Vallon'
  },
  {
    country_iso_code: 'SC',
    state_code: '09',
    state_name: 'Bel Air'
  },
  {
    country_iso_code: 'SC',
    state_code: 10,
    state_name: 'Bel Ombre'
  },
  {
    country_iso_code: 'SC',
    state_code: 11,
    state_name: 'Cascade'
  },
  {
    country_iso_code: 'SC',
    state_code: 12,
    state_name: 'Glacis'
  },
  {
    country_iso_code: 'SC',
    state_code: 13,
    state_name: "Grand' Anse"
  },
  {
    country_iso_code: 'SC',
    state_code: 14,
    state_name: "Grand' Anse"
  },
  {
    country_iso_code: 'SC',
    state_code: 15,
    state_name: 'La Digue'
  },
  {
    country_iso_code: 'SC',
    state_code: 16,
    state_name: 'La Riviere Anglaise'
  },
  {
    country_iso_code: 'SC',
    state_code: 17,
    state_name: 'Mont Buxton'
  },
  {
    country_iso_code: 'SC',
    state_code: 18,
    state_name: 'Mont Fleuri'
  },
  {
    country_iso_code: 'SC',
    state_code: 19,
    state_name: 'Plaisance'
  },
  {
    country_iso_code: 'SC',
    state_code: 20,
    state_name: 'Pointe La Rue'
  },
  {
    country_iso_code: 'SC',
    state_code: 21,
    state_name: 'Port Glaud'
  },
  {
    country_iso_code: 'SC',
    state_code: 22,
    state_name: 'Saint Louis'
  },
  {
    country_iso_code: 'SC',
    state_code: 23,
    state_name: 'Takamaka'
  },
  {
    country_iso_code: 'SD',
    state_code: 27,
    state_name: 'Al Wusta'
  },
  {
    country_iso_code: 'SD',
    state_code: 28,
    state_name: "Al Istiwa'iyah"
  },
  {
    country_iso_code: 'SD',
    state_code: 29,
    state_name: 'Al Khartum'
  },
  {
    country_iso_code: 'SD',
    state_code: 30,
    state_name: 'Ash Shamaliyah'
  },
  {
    country_iso_code: 'SD',
    state_code: 31,
    state_name: 'Ash Sharqiyah'
  },
  {
    country_iso_code: 'SD',
    state_code: 32,
    state_name: 'Bahr al Ghazal'
  },
  {
    country_iso_code: 'SD',
    state_code: 33,
    state_name: 'Darfur'
  },
  {
    country_iso_code: 'SD',
    state_code: 34,
    state_name: 'Kurdufan'
  },
  {
    country_iso_code: 'SD',
    state_code: 35,
    state_name: 'Upper Nile'
  },
  {
    country_iso_code: 'SD',
    state_code: 40,
    state_name: 'Al Wahadah State'
  },
  {
    country_iso_code: 'SD',
    state_code: 44,
    state_name: 'Central Equatoria State'
  },
  {
    country_iso_code: 'SD',
    state_code: 49,
    state_name: 'Southern Darfur'
  },
  {
    country_iso_code: 'SD',
    state_code: 50,
    state_name: 'Southern Kordofan'
  },
  {
    country_iso_code: 'SD',
    state_code: 52,
    state_name: 'Kassala'
  },
  {
    country_iso_code: 'SD',
    state_code: 53,
    state_name: 'River Nile'
  },
  {
    country_iso_code: 'SD',
    state_code: 55,
    state_name: 'Northern Darfur'
  },
  {
    country_iso_code: 'SE',
    state_code: '02',
    state_name: 'Blekinge Lan'
  },
  {
    country_iso_code: 'SE',
    state_code: '03',
    state_name: 'Gavleborgs Lan'
  },
  {
    country_iso_code: 'SE',
    state_code: '05',
    state_name: 'Gotlands Lan'
  },
  {
    country_iso_code: 'SE',
    state_code: '06',
    state_name: 'Hallands Lan'
  },
  {
    country_iso_code: 'SE',
    state_code: '07',
    state_name: 'Jamtlands Lan'
  },
  {
    country_iso_code: 'SE',
    state_code: '08',
    state_name: 'Jonkopings Lan'
  },
  {
    country_iso_code: 'SE',
    state_code: '09',
    state_name: 'Kalmar Lan'
  },
  {
    country_iso_code: 'SE',
    state_code: 10,
    state_name: 'Dalarnas Lan'
  },
  {
    country_iso_code: 'SE',
    state_code: 12,
    state_name: 'Kronobergs Lan'
  },
  {
    country_iso_code: 'SE',
    state_code: 14,
    state_name: 'Norrbottens Lan'
  },
  {
    country_iso_code: 'SE',
    state_code: 15,
    state_name: 'Orebro Lan'
  },
  {
    country_iso_code: 'SE',
    state_code: 16,
    state_name: 'Ostergotlands Lan'
  },
  {
    country_iso_code: 'SE',
    state_code: 18,
    state_name: 'Sodermanlands Lan'
  },
  {
    country_iso_code: 'SE',
    state_code: 21,
    state_name: 'Uppsala Lan'
  },
  {
    country_iso_code: 'SE',
    state_code: 22,
    state_name: 'Varmlands Lan'
  },
  {
    country_iso_code: 'SE',
    state_code: 23,
    state_name: 'Vasterbottens Lan'
  },
  {
    country_iso_code: 'SE',
    state_code: 24,
    state_name: 'Vasternorrlands Lan'
  },
  {
    country_iso_code: 'SE',
    state_code: 25,
    state_name: 'Vastmanlands Lan'
  },
  {
    country_iso_code: 'SE',
    state_code: 26,
    state_name: 'Stockholms Lan'
  },
  {
    country_iso_code: 'SE',
    state_code: 27,
    state_name: 'Skane Lan'
  },
  {
    country_iso_code: 'SE',
    state_code: 28,
    state_name: 'Vastra Gotaland'
  },
  {
    country_iso_code: 'SH',
    state_code: '01',
    state_name: 'Ascension'
  },
  {
    country_iso_code: 'SH',
    state_code: '02',
    state_name: 'Saint Helena'
  },
  {
    country_iso_code: 'SH',
    state_code: '03',
    state_name: 'Tristan da Cunha'
  },
  {
    country_iso_code: 'SI',
    state_code: '01',
    state_name: 'Ajdovscina Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: '02',
    state_name: 'Beltinci Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: '03',
    state_name: 'Bled Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: '04',
    state_name: 'Bohinj Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: '05',
    state_name: 'Borovnica Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: '06',
    state_name: 'Bovec Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: '07',
    state_name: 'Brda Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: '08',
    state_name: 'Brezice Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: '09',
    state_name: 'Brezovica Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 11,
    state_name: 'Celje Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 12,
    state_name: 'Cerklje na Gorenjskem Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 13,
    state_name: 'Cerknica Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 14,
    state_name: 'Cerkno Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 15,
    state_name: 'Crensovci Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 16,
    state_name: 'Crna na Koroskem Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 17,
    state_name: 'Crnomelj Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 19,
    state_name: 'Divaca Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 20,
    state_name: 'Dobrepolje Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 22,
    state_name: 'Dol pri Ljubljani Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 24,
    state_name: 'Dornava Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 25,
    state_name: 'Dravograd Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 26,
    state_name: 'Duplek Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 27,
    state_name: 'Gorenja vas-Poljane Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 28,
    state_name: 'Gorisnica Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 29,
    state_name: 'Gornja Radgona Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 30,
    state_name: 'Gornji Grad Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 31,
    state_name: 'Gornji Petrovci Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 32,
    state_name: 'Grosuplje Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 34,
    state_name: 'Hrastnik Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 35,
    state_name: 'Hrpelje-Kozina Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 36,
    state_name: 'Idrija Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 37,
    state_name: 'Ig Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 38,
    state_name: 'Ilirska Bistrica Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 39,
    state_name: 'Ivancna Gorica Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 40,
    state_name: 'Izola-Isola Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 42,
    state_name: 'Jursinci Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 44,
    state_name: 'Kanal Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 45,
    state_name: 'Kidricevo Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 46,
    state_name: 'Kobarid Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 47,
    state_name: 'Kobilje Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 49,
    state_name: 'Komen Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 50,
    state_name: 'Koper-Capodistria Urban Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 51,
    state_name: 'Kozje Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 52,
    state_name: 'Kranj Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 53,
    state_name: 'Kranjska Gora Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 54,
    state_name: 'Krsko Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 55,
    state_name: 'Kungota Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 57,
    state_name: 'Lasko Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 61,
    state_name: 'Ljubljana Urban Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 62,
    state_name: 'Ljubno Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 64,
    state_name: 'Logatec Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 66,
    state_name: 'Loski Potok Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 68,
    state_name: 'Lukovica Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 71,
    state_name: 'Medvode Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 72,
    state_name: 'Menges Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 73,
    state_name: 'Metlika Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 74,
    state_name: 'Mezica Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 76,
    state_name: 'Mislinja Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 77,
    state_name: 'Moravce Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 78,
    state_name: 'Moravske Toplice Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 79,
    state_name: 'Mozirje Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 80,
    state_name: 'Murska Sobota Urban Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 81,
    state_name: 'Muta Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 82,
    state_name: 'Naklo Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 83,
    state_name: 'Nazarje Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 84,
    state_name: 'Nova Gorica Urban Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 86,
    state_name: 'Odranci Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 87,
    state_name: 'Ormoz Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 88,
    state_name: 'Osilnica Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 89,
    state_name: 'Pesnica Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 91,
    state_name: 'Pivka Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 92,
    state_name: 'Podcetrtek Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 94,
    state_name: 'Postojna Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 97,
    state_name: 'Puconci Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 98,
    state_name: 'Race-Fram Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 99,
    state_name: 'Radece Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'A1',
    state_name: 'Radenci Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'A2',
    state_name: 'Radlje ob Dravi Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'A3',
    state_name: 'Radovljica Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'A6',
    state_name: 'Rogasovci Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'A7',
    state_name: 'Rogaska Slatina Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'A8',
    state_name: 'Rogatec Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'B1',
    state_name: 'Semic Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'B2',
    state_name: 'Sencur Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'B3',
    state_name: 'Sentilj Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'B4',
    state_name: 'Sentjernej Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'B6',
    state_name: 'Sevnica Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'B7',
    state_name: 'Sezana Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'B8',
    state_name: 'Skocjan Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'B9',
    state_name: 'Skofja Loka Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'C1',
    state_name: 'Skofljica Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'C2',
    state_name: 'Slovenj Gradec Urban Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'C4',
    state_name: 'Slovenske Konjice Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'C5',
    state_name: 'Smarje pri Jelsah Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'C6',
    state_name: 'Smartno ob Paki Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'C7',
    state_name: 'Sostanj Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'C8',
    state_name: 'Starse Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'C9',
    state_name: 'Store Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'D1',
    state_name: 'Sveti Jurij Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'D2',
    state_name: 'Tolmin Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'D3',
    state_name: 'Trbovlje Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'D4',
    state_name: 'Trebnje Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'D5',
    state_name: 'Trzic Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'D6',
    state_name: 'Turnisce Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'D7',
    state_name: 'Velenje Urban Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'D8',
    state_name: 'Velike Lasce Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'E1',
    state_name: 'Vipava Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'E2',
    state_name: 'Vitanje Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'E3',
    state_name: 'Vodice Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'E5',
    state_name: 'Vrhnika Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'E6',
    state_name: 'Vuzenica Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'E7',
    state_name: 'Zagorje ob Savi Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'E9',
    state_name: 'Zavrc Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'F1',
    state_name: 'Zelezniki Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'F2',
    state_name: 'Ziri Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'F3',
    state_name: 'Zrece Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'F4',
    state_name: 'Benedikt Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'F5',
    state_name: 'Bistrica ob Sotli Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'F6',
    state_name: 'Bloke Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'F7',
    state_name: 'Braslovce Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'F8',
    state_name: 'Cankova Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'F9',
    state_name: 'Cerkvenjak Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'G1',
    state_name: 'Destrnik Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'G2',
    state_name: 'Dobje Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'G3',
    state_name: 'Dobrna Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'G4',
    state_name: 'Dobrova-Horjul-Polhov Gradec Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'G5',
    state_name: 'Dobrovnik-Dobronak Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'G6',
    state_name: 'Dolenjske Toplice Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'G7',
    state_name: 'Domzale Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'G8',
    state_name: 'Grad Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'G9',
    state_name: 'Hajdina Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'H1',
    state_name: 'Hoce-Slivnica Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'H2',
    state_name: 'Hodos-Hodos Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'H3',
    state_name: 'Horjul Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'H4',
    state_name: 'Jesenice Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'H5',
    state_name: 'Jezersko Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'H6',
    state_name: 'Kamnik Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'H7',
    state_name: 'Kocevje Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'H8',
    state_name: 'Komenda Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'H9',
    state_name: 'Kostel Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'I1',
    state_name: 'Krizevci Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'I2',
    state_name: 'Kuzma Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'I3',
    state_name: 'Lenart Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'I4',
    state_name: 'Lendava-Lendva Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'I5',
    state_name: 'Litija Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'I6',
    state_name: 'Ljutomer Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'I7',
    state_name: 'Loska Dolina Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'I8',
    state_name: 'Lovrenc na Pohorju Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'I9',
    state_name: 'Luce Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'J1',
    state_name: 'Majsperk Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'J2',
    state_name: 'Maribor Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'J3',
    state_name: 'Markovci Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'J4',
    state_name: 'Miklavz na Dravskem polju Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'J5',
    state_name: 'Miren-Kostanjevica Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'J6',
    state_name: 'Mirna Pec Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'J7',
    state_name: 'Novo mesto Urban Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'J8',
    state_name: 'Oplotnica Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'J9',
    state_name: 'Piran-Pirano Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'K1',
    state_name: 'Podlehnik Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'K2',
    state_name: 'Podvelka Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'K3',
    state_name: 'Polzela Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'K4',
    state_name: 'Prebold Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'K5',
    state_name: 'Preddvor Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'K6',
    state_name: 'Prevalje Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'K7',
    state_name: 'Ptuj Urban Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'K8',
    state_name: 'Ravne na Koroskem Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'K9',
    state_name: 'Razkrizje Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'L1',
    state_name: 'Ribnica Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'L2',
    state_name: 'Ribnica na Pohorju Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'L3',
    state_name: 'Ruse Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'L4',
    state_name: 'Salovci Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'L5',
    state_name: 'Selnica ob Dravi Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'L6',
    state_name: 'Sempeter-Vrtojba Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'L7',
    state_name: 'Sentjur pri Celju Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'L8',
    state_name: 'Slovenska Bistrica Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'L9',
    state_name: 'Smartno pri Litiji Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'M1',
    state_name: 'Sodrazica Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'M2',
    state_name: 'Solcava Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'M3',
    state_name: 'Sveta Ana Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'M4',
    state_name: 'Sveti Andraz v Slovenskih goricah Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'M5',
    state_name: 'Tabor Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'M6',
    state_name: 'Tisina Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'M7',
    state_name: 'Trnovska vas Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'M8',
    state_name: 'Trzin Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'M9',
    state_name: 'Velika Polana Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'N1',
    state_name: 'Verzej Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'N2',
    state_name: 'Videm Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'N3',
    state_name: 'Vojnik Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'N4',
    state_name: 'Vransko Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'N5',
    state_name: 'Zalec Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'N6',
    state_name: 'Zetale Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'N7',
    state_name: 'Zirovnica Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'N8',
    state_name: 'Zuzemberk Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'N9',
    state_name: 'Apace Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'O1',
    state_name: 'Cirkulane Commune'
  },
  {
    country_iso_code: 'SI',
    state_code: 'O2',
    state_name: 'Gorje'
  },
  {
    country_iso_code: 'SI',
    state_code: 'O3',
    state_name: 'Kostanjevica na Krki'
  },
  {
    country_iso_code: 'SI',
    state_code: 'O4',
    state_name: 'Log-Dragomer'
  },
  {
    country_iso_code: 'SI',
    state_code: 'O5',
    state_name: 'Makole'
  },
  {
    country_iso_code: 'SI',
    state_code: 'O6',
    state_name: 'Mirna'
  },
  {
    country_iso_code: 'SI',
    state_code: 'O7',
    state_name: 'Mokronog-Trebelno'
  },
  {
    country_iso_code: 'SI',
    state_code: 'O8',
    state_name: 'Poljcane'
  },
  {
    country_iso_code: 'SI',
    state_code: 'O9',
    state_name: 'Recica ob Savinji'
  },
  {
    country_iso_code: 'SI',
    state_code: 'P1',
    state_name: 'Rence-Vogrsko'
  },
  {
    country_iso_code: 'SI',
    state_code: 'P2',
    state_name: 'Sentrupert'
  },
  {
    country_iso_code: 'SI',
    state_code: 'P3',
    state_name: 'Smarjesk Toplice'
  },
  {
    country_iso_code: 'SI',
    state_code: 'P4',
    state_name: 'Sredisce ob Dravi'
  },
  {
    country_iso_code: 'SI',
    state_code: 'P5',
    state_name: 'Straza'
  },
  {
    country_iso_code: 'SI',
    state_code: 'P7',
    state_name: 'Sveti Jurij v Slovenskih Goricah'
  },
  {
    country_iso_code: 'SK',
    state_code: '01',
    state_name: 'Banska Bystrica'
  },
  {
    country_iso_code: 'SK',
    state_code: '02',
    state_name: 'Bratislava'
  },
  {
    country_iso_code: 'SK',
    state_code: '03',
    state_name: 'Kosice'
  },
  {
    country_iso_code: 'SK',
    state_code: '04',
    state_name: 'Nitra'
  },
  {
    country_iso_code: 'SK',
    state_code: '05',
    state_name: 'Presov'
  },
  {
    country_iso_code: 'SK',
    state_code: '06',
    state_name: 'Trencin'
  },
  {
    country_iso_code: 'SK',
    state_code: '07',
    state_name: 'Trnava'
  },
  {
    country_iso_code: 'SK',
    state_code: '08',
    state_name: 'Zilina'
  },
  {
    country_iso_code: 'SL',
    state_code: '01',
    state_name: 'Eastern'
  },
  {
    country_iso_code: 'SL',
    state_code: '02',
    state_name: 'Northern'
  },
  {
    country_iso_code: 'SL',
    state_code: '03',
    state_name: 'Southern'
  },
  {
    country_iso_code: 'SL',
    state_code: '04',
    state_name: 'Western Area'
  },
  {
    country_iso_code: 'SM',
    state_code: '01',
    state_name: 'Acquaviva'
  },
  {
    country_iso_code: 'SM',
    state_code: '02',
    state_name: 'Chiesanuova'
  },
  {
    country_iso_code: 'SM',
    state_code: '03',
    state_name: 'Domagnano'
  },
  {
    country_iso_code: 'SM',
    state_code: '04',
    state_name: 'Faetano'
  },
  {
    country_iso_code: 'SM',
    state_code: '05',
    state_name: 'Fiorentino'
  },
  {
    country_iso_code: 'SM',
    state_code: '06',
    state_name: 'Borgo Maggiore'
  },
  {
    country_iso_code: 'SM',
    state_code: '07',
    state_name: 'San Marino'
  },
  {
    country_iso_code: 'SM',
    state_code: '08',
    state_name: 'Monte Giardino'
  },
  {
    country_iso_code: 'SM',
    state_code: '09',
    state_name: 'Serravalle'
  },
  {
    country_iso_code: 'SN',
    state_code: '01',
    state_name: 'Dakar'
  },
  {
    country_iso_code: 'SN',
    state_code: '03',
    state_name: 'Diourbel'
  },
  {
    country_iso_code: 'SN',
    state_code: '05',
    state_name: 'Tambacounda'
  },
  {
    country_iso_code: 'SN',
    state_code: '07',
    state_name: 'Thies'
  },
  {
    country_iso_code: 'SN',
    state_code: '09',
    state_name: 'Fatick'
  },
  {
    country_iso_code: 'SN',
    state_code: 10,
    state_name: 'Kaolack'
  },
  {
    country_iso_code: 'SN',
    state_code: 11,
    state_name: 'Kolda'
  },
  {
    country_iso_code: 'SN',
    state_code: 12,
    state_name: 'Ziguinchor'
  },
  {
    country_iso_code: 'SN',
    state_code: 13,
    state_name: 'Louga'
  },
  {
    country_iso_code: 'SN',
    state_code: 14,
    state_name: 'Saint-Louis'
  },
  {
    country_iso_code: 'SN',
    state_code: 15,
    state_name: 'Matam'
  },
  {
    country_iso_code: 'SO',
    state_code: '01',
    state_name: 'Bakool'
  },
  {
    country_iso_code: 'SO',
    state_code: '02',
    state_name: 'Banaadir'
  },
  {
    country_iso_code: 'SO',
    state_code: '03',
    state_name: 'Bari'
  },
  {
    country_iso_code: 'SO',
    state_code: '04',
    state_name: 'Bay'
  },
  {
    country_iso_code: 'SO',
    state_code: '05',
    state_name: 'Galguduud'
  },
  {
    country_iso_code: 'SO',
    state_code: '06',
    state_name: 'Gedo'
  },
  {
    country_iso_code: 'SO',
    state_code: '07',
    state_name: 'Hiiraan'
  },
  {
    country_iso_code: 'SO',
    state_code: '08',
    state_name: 'Jubbada Dhexe'
  },
  {
    country_iso_code: 'SO',
    state_code: '09',
    state_name: 'Jubbada Hoose'
  },
  {
    country_iso_code: 'SO',
    state_code: 10,
    state_name: 'Mudug'
  },
  {
    country_iso_code: 'SO',
    state_code: 11,
    state_name: 'Nugaal'
  },
  {
    country_iso_code: 'SO',
    state_code: 12,
    state_name: 'Sanaag'
  },
  {
    country_iso_code: 'SO',
    state_code: 13,
    state_name: 'Shabeellaha Dhexe'
  },
  {
    country_iso_code: 'SO',
    state_code: 14,
    state_name: 'Shabeellaha Hoose'
  },
  {
    country_iso_code: 'SO',
    state_code: 16,
    state_name: 'Woqooyi Galbeed'
  },
  {
    country_iso_code: 'SO',
    state_code: 18,
    state_name: 'Nugaal'
  },
  {
    country_iso_code: 'SO',
    state_code: 19,
    state_name: 'Togdheer'
  },
  {
    country_iso_code: 'SO',
    state_code: 20,
    state_name: 'Woqooyi Galbeed'
  },
  {
    country_iso_code: 'SO',
    state_code: 21,
    state_name: 'Awdal'
  },
  {
    country_iso_code: 'SO',
    state_code: 22,
    state_name: 'Sool'
  },
  {
    country_iso_code: 'SR',
    state_code: 10,
    state_name: 'Brokopondo'
  },
  {
    country_iso_code: 'SR',
    state_code: 11,
    state_name: 'Commewijne'
  },
  {
    country_iso_code: 'SR',
    state_code: 12,
    state_name: 'Coronie'
  },
  {
    country_iso_code: 'SR',
    state_code: 13,
    state_name: 'Marowijne'
  },
  {
    country_iso_code: 'SR',
    state_code: 14,
    state_name: 'Nickerie'
  },
  {
    country_iso_code: 'SR',
    state_code: 15,
    state_name: 'Para'
  },
  {
    country_iso_code: 'SR',
    state_code: 16,
    state_name: 'Paramaribo'
  },
  {
    country_iso_code: 'SR',
    state_code: 17,
    state_name: 'Saramacca'
  },
  {
    country_iso_code: 'SR',
    state_code: 18,
    state_name: 'Sipaliwini'
  },
  {
    country_iso_code: 'SR',
    state_code: 19,
    state_name: 'Wanica'
  },
  {
    country_iso_code: 'SS',
    state_code: '01',
    state_name: 'Central Equatoria'
  },
  {
    country_iso_code: 'SS',
    state_code: '02',
    state_name: 'Eastern Equatoria'
  },
  {
    country_iso_code: 'SS',
    state_code: '03',
    state_name: 'Jonglei'
  },
  {
    country_iso_code: 'SS',
    state_code: '04',
    state_name: 'Lakes'
  },
  {
    country_iso_code: 'SS',
    state_code: '05',
    state_name: 'Northern Bahr el Ghazal'
  },
  {
    country_iso_code: 'SS',
    state_code: '06',
    state_name: 'Unity'
  },
  {
    country_iso_code: 'SS',
    state_code: '07',
    state_name: 'Upper Nile'
  },
  {
    country_iso_code: 'SS',
    state_code: '08',
    state_name: 'Warrap'
  },
  {
    country_iso_code: 'SS',
    state_code: '09',
    state_name: 'Western Bahr el Ghazal'
  },
  {
    country_iso_code: 'SS',
    state_code: 10,
    state_name: 'Western Equatoria'
  },
  {
    country_iso_code: 'ST',
    state_code: '01',
    state_name: 'Principe'
  },
  {
    country_iso_code: 'ST',
    state_code: '02',
    state_name: 'Sao Tome'
  },
  {
    country_iso_code: 'SV',
    state_code: '01',
    state_name: 'Ahuachapan'
  },
  {
    country_iso_code: 'SV',
    state_code: '02',
    state_name: 'Cabanas'
  },
  {
    country_iso_code: 'SV',
    state_code: '03',
    state_name: 'Chalatenango'
  },
  {
    country_iso_code: 'SV',
    state_code: '04',
    state_name: 'Cuscatlan'
  },
  {
    country_iso_code: 'SV',
    state_code: '05',
    state_name: 'La Libertad'
  },
  {
    country_iso_code: 'SV',
    state_code: '06',
    state_name: 'La Paz'
  },
  {
    country_iso_code: 'SV',
    state_code: '07',
    state_name: 'La Union'
  },
  {
    country_iso_code: 'SV',
    state_code: '08',
    state_name: 'Morazan'
  },
  {
    country_iso_code: 'SV',
    state_code: '09',
    state_name: 'San Miguel'
  },
  {
    country_iso_code: 'SV',
    state_code: 10,
    state_name: 'San Salvador'
  },
  {
    country_iso_code: 'SV',
    state_code: 11,
    state_name: 'Santa Ana'
  },
  {
    country_iso_code: 'SV',
    state_code: 12,
    state_name: 'San Vicente'
  },
  {
    country_iso_code: 'SV',
    state_code: 13,
    state_name: 'Sonsonate'
  },
  {
    country_iso_code: 'SV',
    state_code: 14,
    state_name: 'Usulutan'
  },
  {
    country_iso_code: 'SY',
    state_code: '01',
    state_name: 'Al Hasakah'
  },
  {
    country_iso_code: 'SY',
    state_code: '02',
    state_name: 'Al Ladhiqiyah'
  },
  {
    country_iso_code: 'SY',
    state_code: '03',
    state_name: 'Al Qunaytirah'
  },
  {
    country_iso_code: 'SY',
    state_code: '04',
    state_name: 'Ar Raqqah'
  },
  {
    country_iso_code: 'SY',
    state_code: '05',
    state_name: "As Suwayda'"
  },
  {
    country_iso_code: 'SY',
    state_code: '06',
    state_name: 'Dar'
  },
  {
    country_iso_code: 'SY',
    state_code: '07',
    state_name: 'Dayr az Zawr'
  },
  {
    country_iso_code: 'SY',
    state_code: '08',
    state_name: 'Rif Dimashq'
  },
  {
    country_iso_code: 'SY',
    state_code: '09',
    state_name: 'Halab'
  },
  {
    country_iso_code: 'SY',
    state_code: 10,
    state_name: 'Hamah'
  },
  {
    country_iso_code: 'SY',
    state_code: 11,
    state_name: 'Hims'
  },
  {
    country_iso_code: 'SY',
    state_code: 12,
    state_name: 'Idlib'
  },
  {
    country_iso_code: 'SY',
    state_code: 13,
    state_name: 'Dimashq'
  },
  {
    country_iso_code: 'SY',
    state_code: 14,
    state_name: 'Tartus'
  },
  {
    country_iso_code: 'SZ',
    state_code: '01',
    state_name: 'Hhohho'
  },
  {
    country_iso_code: 'SZ',
    state_code: '02',
    state_name: 'Lubombo'
  },
  {
    country_iso_code: 'SZ',
    state_code: '03',
    state_name: 'Manzini'
  },
  {
    country_iso_code: 'SZ',
    state_code: '04',
    state_name: 'Shiselweni'
  },
  {
    country_iso_code: 'SZ',
    state_code: '05',
    state_name: 'Praslin'
  },
  {
    country_iso_code: 'TD',
    state_code: '01',
    state_name: 'Batha'
  },
  {
    country_iso_code: 'TD',
    state_code: '02',
    state_name: 'Biltine'
  },
  {
    country_iso_code: 'TD',
    state_code: '03',
    state_name: 'Borkou-Ennedi-Tibesti'
  },
  {
    country_iso_code: 'TD',
    state_code: '04',
    state_name: 'Chari-Baguirmi'
  },
  {
    country_iso_code: 'TD',
    state_code: '05',
    state_name: 'Guera'
  },
  {
    country_iso_code: 'TD',
    state_code: '06',
    state_name: 'Kanem'
  },
  {
    country_iso_code: 'TD',
    state_code: '07',
    state_name: 'Lac'
  },
  {
    country_iso_code: 'TD',
    state_code: '08',
    state_name: 'Logone Occidental'
  },
  {
    country_iso_code: 'TD',
    state_code: '09',
    state_name: 'Logone Oriental'
  },
  {
    country_iso_code: 'TD',
    state_code: 10,
    state_name: 'Mayo-Kebbi'
  },
  {
    country_iso_code: 'TD',
    state_code: 11,
    state_name: 'Moyen-Chari'
  },
  {
    country_iso_code: 'TD',
    state_code: 12,
    state_name: 'Ouaddai'
  },
  {
    country_iso_code: 'TD',
    state_code: 13,
    state_name: 'Salamat'
  },
  {
    country_iso_code: 'TD',
    state_code: 14,
    state_name: 'Tandjile'
  },
  {
    country_iso_code: 'TG',
    state_code: 22,
    state_name: 'Centrale'
  },
  {
    country_iso_code: 'TG',
    state_code: 23,
    state_name: 'Kara'
  },
  {
    country_iso_code: 'TG',
    state_code: 24,
    state_name: 'Maritime'
  },
  {
    country_iso_code: 'TG',
    state_code: 25,
    state_name: 'Plateaux'
  },
  {
    country_iso_code: 'TG',
    state_code: 26,
    state_name: 'Savanes'
  },
  {
    country_iso_code: 'TH',
    state_code: '01',
    state_name: 'Mae Hong Son'
  },
  {
    country_iso_code: 'TH',
    state_code: '02',
    state_name: 'Chiang Mai'
  },
  {
    country_iso_code: 'TH',
    state_code: '03',
    state_name: 'Chiang Rai'
  },
  {
    country_iso_code: 'TH',
    state_code: '04',
    state_name: 'Nan'
  },
  {
    country_iso_code: 'TH',
    state_code: '05',
    state_name: 'Lamphun'
  },
  {
    country_iso_code: 'TH',
    state_code: '06',
    state_name: 'Lampang'
  },
  {
    country_iso_code: 'TH',
    state_code: '07',
    state_name: 'Phrae'
  },
  {
    country_iso_code: 'TH',
    state_code: '08',
    state_name: 'Tak'
  },
  {
    country_iso_code: 'TH',
    state_code: '09',
    state_name: 'Sukhothai'
  },
  {
    country_iso_code: 'TH',
    state_code: 10,
    state_name: 'Uttaradit'
  },
  {
    country_iso_code: 'TH',
    state_code: 11,
    state_name: 'Kamphaeng Phet'
  },
  {
    country_iso_code: 'TH',
    state_code: 12,
    state_name: 'Phitsanulok'
  },
  {
    country_iso_code: 'TH',
    state_code: 13,
    state_name: 'Phichit'
  },
  {
    country_iso_code: 'TH',
    state_code: 14,
    state_name: 'Phetchabun'
  },
  {
    country_iso_code: 'TH',
    state_code: 15,
    state_name: 'Uthai Thani'
  },
  {
    country_iso_code: 'TH',
    state_code: 16,
    state_name: 'Nakhon Sawan'
  },
  {
    country_iso_code: 'TH',
    state_code: 17,
    state_name: 'Nong Khai'
  },
  {
    country_iso_code: 'TH',
    state_code: 18,
    state_name: 'Loei'
  },
  {
    country_iso_code: 'TH',
    state_code: 20,
    state_name: 'Sakon Nakhon'
  },
  {
    country_iso_code: 'TH',
    state_code: 21,
    state_name: 'Nakhon Phanom'
  },
  {
    country_iso_code: 'TH',
    state_code: 22,
    state_name: 'Khon Kaen'
  },
  {
    country_iso_code: 'TH',
    state_code: 23,
    state_name: 'Kalasin'
  },
  {
    country_iso_code: 'TH',
    state_code: 24,
    state_name: 'Maha Sarakham'
  },
  {
    country_iso_code: 'TH',
    state_code: 25,
    state_name: 'Roi Et'
  },
  {
    country_iso_code: 'TH',
    state_code: 26,
    state_name: 'Chaiyaphum'
  },
  {
    country_iso_code: 'TH',
    state_code: 27,
    state_name: 'Nakhon Ratchasima'
  },
  {
    country_iso_code: 'TH',
    state_code: 28,
    state_name: 'Buriram'
  },
  {
    country_iso_code: 'TH',
    state_code: 29,
    state_name: 'Surin'
  },
  {
    country_iso_code: 'TH',
    state_code: 30,
    state_name: 'Sisaket'
  },
  {
    country_iso_code: 'TH',
    state_code: 31,
    state_name: 'Narathiwat'
  },
  {
    country_iso_code: 'TH',
    state_code: 32,
    state_name: 'Chai Nat'
  },
  {
    country_iso_code: 'TH',
    state_code: 33,
    state_name: 'Sing Buri'
  },
  {
    country_iso_code: 'TH',
    state_code: 34,
    state_name: 'Lop Buri'
  },
  {
    country_iso_code: 'TH',
    state_code: 35,
    state_name: 'Ang Thong'
  },
  {
    country_iso_code: 'TH',
    state_code: 36,
    state_name: 'Phra Nakhon Si Ayutthaya'
  },
  {
    country_iso_code: 'TH',
    state_code: 37,
    state_name: 'Saraburi'
  },
  {
    country_iso_code: 'TH',
    state_code: 38,
    state_name: 'Nonthaburi'
  },
  {
    country_iso_code: 'TH',
    state_code: 39,
    state_name: 'Pathum Thani'
  },
  {
    country_iso_code: 'TH',
    state_code: 40,
    state_name: 'Krung Thep'
  },
  {
    country_iso_code: 'TH',
    state_code: 41,
    state_name: 'Phayao'
  },
  {
    country_iso_code: 'TH',
    state_code: 42,
    state_name: 'Samut Prakan'
  },
  {
    country_iso_code: 'TH',
    state_code: 43,
    state_name: 'Nakhon Nayok'
  },
  {
    country_iso_code: 'TH',
    state_code: 44,
    state_name: 'Chachoengsao'
  },
  {
    country_iso_code: 'TH',
    state_code: 45,
    state_name: 'Prachin Buri'
  },
  {
    country_iso_code: 'TH',
    state_code: 46,
    state_name: 'Chon Buri'
  },
  {
    country_iso_code: 'TH',
    state_code: 47,
    state_name: 'Rayong'
  },
  {
    country_iso_code: 'TH',
    state_code: 48,
    state_name: 'Chanthaburi'
  },
  {
    country_iso_code: 'TH',
    state_code: 49,
    state_name: 'Trat'
  },
  {
    country_iso_code: 'TH',
    state_code: 50,
    state_name: 'Kanchanaburi'
  },
  {
    country_iso_code: 'TH',
    state_code: 51,
    state_name: 'Suphan Buri'
  },
  {
    country_iso_code: 'TH',
    state_code: 52,
    state_name: 'Ratchaburi'
  },
  {
    country_iso_code: 'TH',
    state_code: 53,
    state_name: 'Nakhon Pathom'
  },
  {
    country_iso_code: 'TH',
    state_code: 54,
    state_name: 'Samut Songkhram'
  },
  {
    country_iso_code: 'TH',
    state_code: 55,
    state_name: 'Samut Sakhon'
  },
  {
    country_iso_code: 'TH',
    state_code: 56,
    state_name: 'Phetchaburi'
  },
  {
    country_iso_code: 'TH',
    state_code: 57,
    state_name: 'Prachuap Khiri Khan'
  },
  {
    country_iso_code: 'TH',
    state_code: 58,
    state_name: 'Chumphon'
  },
  {
    country_iso_code: 'TH',
    state_code: 59,
    state_name: 'Ranong'
  },
  {
    country_iso_code: 'TH',
    state_code: 60,
    state_name: 'Surat Thani'
  },
  {
    country_iso_code: 'TH',
    state_code: 61,
    state_name: 'Phangnga'
  },
  {
    country_iso_code: 'TH',
    state_code: 62,
    state_name: 'Phuket'
  },
  {
    country_iso_code: 'TH',
    state_code: 63,
    state_name: 'Krabi'
  },
  {
    country_iso_code: 'TH',
    state_code: 64,
    state_name: 'Nakhon Si Thammarat'
  },
  {
    country_iso_code: 'TH',
    state_code: 65,
    state_name: 'Trang'
  },
  {
    country_iso_code: 'TH',
    state_code: 66,
    state_name: 'Phatthalung'
  },
  {
    country_iso_code: 'TH',
    state_code: 67,
    state_name: 'Satun'
  },
  {
    country_iso_code: 'TH',
    state_code: 68,
    state_name: 'Songkhla'
  },
  {
    country_iso_code: 'TH',
    state_code: 69,
    state_name: 'Pattani'
  },
  {
    country_iso_code: 'TH',
    state_code: 70,
    state_name: 'Yala'
  },
  {
    country_iso_code: 'TH',
    state_code: 71,
    state_name: 'Ubon Ratchathani'
  },
  {
    country_iso_code: 'TH',
    state_code: 72,
    state_name: 'Yasothon'
  },
  {
    country_iso_code: 'TH',
    state_code: 73,
    state_name: 'Nakhon Phanom'
  },
  {
    country_iso_code: 'TH',
    state_code: 74,
    state_name: 'Prachin Buri'
  },
  {
    country_iso_code: 'TH',
    state_code: 75,
    state_name: 'Ubon Ratchathani'
  },
  {
    country_iso_code: 'TH',
    state_code: 76,
    state_name: 'Udon Thani'
  },
  {
    country_iso_code: 'TH',
    state_code: 77,
    state_name: 'Amnat Charoen'
  },
  {
    country_iso_code: 'TH',
    state_code: 78,
    state_name: 'Mukdahan'
  },
  {
    country_iso_code: 'TH',
    state_code: 79,
    state_name: 'Nong Bua Lamphu'
  },
  {
    country_iso_code: 'TH',
    state_code: 80,
    state_name: 'Sa Kaeo'
  },
  {
    country_iso_code: 'TH',
    state_code: 81,
    state_name: 'Bueng Kan'
  },
  {
    country_iso_code: 'TJ',
    state_code: '01',
    state_name: 'Kuhistoni Badakhshon'
  },
  {
    country_iso_code: 'TJ',
    state_code: '02',
    state_name: 'Khatlon'
  },
  {
    country_iso_code: 'TJ',
    state_code: '03',
    state_name: 'Sughd'
  },
  {
    country_iso_code: 'TJ',
    state_code: '04',
    state_name: 'Dushanbe'
  },
  {
    country_iso_code: 'TJ',
    state_code: '05',
    state_name: 'Nohiyahoi Tobei Jumhuri'
  },
  {
    country_iso_code: 'TL',
    state_code: '06',
    state_name: 'Dili'
  },
  {
    country_iso_code: 'TM',
    state_code: '01',
    state_name: 'Ahal'
  },
  {
    country_iso_code: 'TM',
    state_code: '02',
    state_name: 'Balkan'
  },
  {
    country_iso_code: 'TM',
    state_code: '03',
    state_name: 'Dashoguz'
  },
  {
    country_iso_code: 'TM',
    state_code: '04',
    state_name: 'Lebap'
  },
  {
    country_iso_code: 'TM',
    state_code: '05',
    state_name: 'Mary'
  },
  {
    country_iso_code: 'TN',
    state_code: '02',
    state_name: 'Kasserine'
  },
  {
    country_iso_code: 'TN',
    state_code: '03',
    state_name: 'Kairouan'
  },
  {
    country_iso_code: 'TN',
    state_code: '06',
    state_name: 'Jendouba'
  },
  {
    country_iso_code: 'TN',
    state_code: 10,
    state_name: 'Qafsah'
  },
  {
    country_iso_code: 'TN',
    state_code: 14,
    state_name: 'El Kef'
  },
  {
    country_iso_code: 'TN',
    state_code: 15,
    state_name: 'Al Mahdia'
  },
  {
    country_iso_code: 'TN',
    state_code: 16,
    state_name: 'Al Munastir'
  },
  {
    country_iso_code: 'TN',
    state_code: 17,
    state_name: 'Bajah'
  },
  {
    country_iso_code: 'TN',
    state_code: 18,
    state_name: 'Bizerte'
  },
  {
    country_iso_code: 'TN',
    state_code: 19,
    state_name: 'Nabeul'
  },
  {
    country_iso_code: 'TN',
    state_code: 22,
    state_name: 'Siliana'
  },
  {
    country_iso_code: 'TN',
    state_code: 23,
    state_name: 'Sousse'
  },
  {
    country_iso_code: 'TN',
    state_code: 27,
    state_name: 'Ben Arous'
  },
  {
    country_iso_code: 'TN',
    state_code: 28,
    state_name: 'Madanin'
  },
  {
    country_iso_code: 'TN',
    state_code: 29,
    state_name: 'Gabes'
  },
  {
    country_iso_code: 'TN',
    state_code: 31,
    state_name: 'Kebili'
  },
  {
    country_iso_code: 'TN',
    state_code: 32,
    state_name: 'Sfax'
  },
  {
    country_iso_code: 'TN',
    state_code: 33,
    state_name: 'Sidi Bou Zid'
  },
  {
    country_iso_code: 'TN',
    state_code: 34,
    state_name: 'Tataouine'
  },
  {
    country_iso_code: 'TN',
    state_code: 35,
    state_name: 'Tozeur'
  },
  {
    country_iso_code: 'TN',
    state_code: 36,
    state_name: 'Tunis'
  },
  {
    country_iso_code: 'TN',
    state_code: 37,
    state_name: 'Zaghouan'
  },
  {
    country_iso_code: 'TN',
    state_code: 38,
    state_name: 'Aiana'
  },
  {
    country_iso_code: 'TN',
    state_code: 39,
    state_name: 'Manouba'
  },
  {
    country_iso_code: 'TO',
    state_code: '01',
    state_name: 'Ha'
  },
  {
    country_iso_code: 'TO',
    state_code: '02',
    state_name: 'Tongatapu'
  },
  {
    country_iso_code: 'TO',
    state_code: '03',
    state_name: 'Vava'
  },
  {
    country_iso_code: 'TR',
    state_code: '02',
    state_name: 'Adiyaman'
  },
  {
    country_iso_code: 'TR',
    state_code: '03',
    state_name: 'Afyonkarahisar'
  },
  {
    country_iso_code: 'TR',
    state_code: '04',
    state_name: 'Agri'
  },
  {
    country_iso_code: 'TR',
    state_code: '05',
    state_name: 'Amasya'
  },
  {
    country_iso_code: 'TR',
    state_code: '07',
    state_name: 'Antalya'
  },
  {
    country_iso_code: 'TR',
    state_code: '08',
    state_name: 'Artvin'
  },
  {
    country_iso_code: 'TR',
    state_code: '09',
    state_name: 'Aydin'
  },
  {
    country_iso_code: 'TR',
    state_code: 10,
    state_name: 'Balikesir'
  },
  {
    country_iso_code: 'TR',
    state_code: 11,
    state_name: 'Bilecik'
  },
  {
    country_iso_code: 'TR',
    state_code: 12,
    state_name: 'Bingol'
  },
  {
    country_iso_code: 'TR',
    state_code: 13,
    state_name: 'Bitlis'
  },
  {
    country_iso_code: 'TR',
    state_code: 14,
    state_name: 'Bolu'
  },
  {
    country_iso_code: 'TR',
    state_code: 15,
    state_name: 'Burdur'
  },
  {
    country_iso_code: 'TR',
    state_code: 16,
    state_name: 'Bursa'
  },
  {
    country_iso_code: 'TR',
    state_code: 17,
    state_name: 'Canakkale'
  },
  {
    country_iso_code: 'TR',
    state_code: 19,
    state_name: 'Corum'
  },
  {
    country_iso_code: 'TR',
    state_code: 20,
    state_name: 'Denizli'
  },
  {
    country_iso_code: 'TR',
    state_code: 21,
    state_name: 'Diyarbakir'
  },
  {
    country_iso_code: 'TR',
    state_code: 22,
    state_name: 'Edirne'
  },
  {
    country_iso_code: 'TR',
    state_code: 23,
    state_name: 'Elazig'
  },
  {
    country_iso_code: 'TR',
    state_code: 24,
    state_name: 'Erzincan'
  },
  {
    country_iso_code: 'TR',
    state_code: 25,
    state_name: 'Erzurum'
  },
  {
    country_iso_code: 'TR',
    state_code: 26,
    state_name: 'Eskisehir'
  },
  {
    country_iso_code: 'TR',
    state_code: 28,
    state_name: 'Giresun'
  },
  {
    country_iso_code: 'TR',
    state_code: 31,
    state_name: 'Hatay'
  },
  {
    country_iso_code: 'TR',
    state_code: 32,
    state_name: 'Mersin'
  },
  {
    country_iso_code: 'TR',
    state_code: 33,
    state_name: 'Isparta'
  },
  {
    country_iso_code: 'TR',
    state_code: 34,
    state_name: 'Istanbul'
  },
  {
    country_iso_code: 'TR',
    state_code: 35,
    state_name: 'Izmir'
  },
  {
    country_iso_code: 'TR',
    state_code: 37,
    state_name: 'Kastamonu'
  },
  {
    country_iso_code: 'TR',
    state_code: 38,
    state_name: 'Kayseri'
  },
  {
    country_iso_code: 'TR',
    state_code: 39,
    state_name: 'Kirklareli'
  },
  {
    country_iso_code: 'TR',
    state_code: 40,
    state_name: 'Kirsehir'
  },
  {
    country_iso_code: 'TR',
    state_code: 41,
    state_name: 'Kocaeli'
  },
  {
    country_iso_code: 'TR',
    state_code: 43,
    state_name: 'Kutahya'
  },
  {
    country_iso_code: 'TR',
    state_code: 44,
    state_name: 'Malatya'
  },
  {
    country_iso_code: 'TR',
    state_code: 45,
    state_name: 'Manisa'
  },
  {
    country_iso_code: 'TR',
    state_code: 46,
    state_name: 'Kahramanmaras'
  },
  {
    country_iso_code: 'TR',
    state_code: 48,
    state_name: 'Mugla'
  },
  {
    country_iso_code: 'TR',
    state_code: 49,
    state_name: 'Mus'
  },
  {
    country_iso_code: 'TR',
    state_code: 50,
    state_name: 'Nevsehir'
  },
  {
    country_iso_code: 'TR',
    state_code: 52,
    state_name: 'Ordu'
  },
  {
    country_iso_code: 'TR',
    state_code: 53,
    state_name: 'Rize'
  },
  {
    country_iso_code: 'TR',
    state_code: 54,
    state_name: 'Sakarya'
  },
  {
    country_iso_code: 'TR',
    state_code: 55,
    state_name: 'Samsun'
  },
  {
    country_iso_code: 'TR',
    state_code: 57,
    state_name: 'Sinop'
  },
  {
    country_iso_code: 'TR',
    state_code: 58,
    state_name: 'Sivas'
  },
  {
    country_iso_code: 'TR',
    state_code: 59,
    state_name: 'Tekirdag'
  },
  {
    country_iso_code: 'TR',
    state_code: 60,
    state_name: 'Tokat'
  },
  {
    country_iso_code: 'TR',
    state_code: 61,
    state_name: 'Trabzon'
  },
  {
    country_iso_code: 'TR',
    state_code: 62,
    state_name: 'Tunceli'
  },
  {
    country_iso_code: 'TR',
    state_code: 63,
    state_name: 'Sanliurfa'
  },
  {
    country_iso_code: 'TR',
    state_code: 64,
    state_name: 'Usak'
  },
  {
    country_iso_code: 'TR',
    state_code: 65,
    state_name: 'Van'
  },
  {
    country_iso_code: 'TR',
    state_code: 66,
    state_name: 'Yozgat'
  },
  {
    country_iso_code: 'TR',
    state_code: 68,
    state_name: 'Ankara'
  },
  {
    country_iso_code: 'TR',
    state_code: 69,
    state_name: 'Gumushane'
  },
  {
    country_iso_code: 'TR',
    state_code: 70,
    state_name: 'Hakkari'
  },
  {
    country_iso_code: 'TR',
    state_code: 71,
    state_name: 'Konya'
  },
  {
    country_iso_code: 'TR',
    state_code: 72,
    state_name: 'Mardin'
  },
  {
    country_iso_code: 'TR',
    state_code: 73,
    state_name: 'Nigde'
  },
  {
    country_iso_code: 'TR',
    state_code: 74,
    state_name: 'Siirt'
  },
  {
    country_iso_code: 'TR',
    state_code: 75,
    state_name: 'Aksaray'
  },
  {
    country_iso_code: 'TR',
    state_code: 76,
    state_name: 'Batman'
  },
  {
    country_iso_code: 'TR',
    state_code: 77,
    state_name: 'Bayburt'
  },
  {
    country_iso_code: 'TR',
    state_code: 78,
    state_name: 'Karaman'
  },
  {
    country_iso_code: 'TR',
    state_code: 79,
    state_name: 'Kirikkale'
  },
  {
    country_iso_code: 'TR',
    state_code: 80,
    state_name: 'Sirnak'
  },
  {
    country_iso_code: 'TR',
    state_code: 81,
    state_name: 'Adana'
  },
  {
    country_iso_code: 'TR',
    state_code: 82,
    state_name: 'Cankiri'
  },
  {
    country_iso_code: 'TR',
    state_code: 83,
    state_name: 'Gaziantep'
  },
  {
    country_iso_code: 'TR',
    state_code: 84,
    state_name: 'Kars'
  },
  {
    country_iso_code: 'TR',
    state_code: 85,
    state_name: 'Zonguldak'
  },
  {
    country_iso_code: 'TR',
    state_code: 86,
    state_name: 'Ardahan'
  },
  {
    country_iso_code: 'TR',
    state_code: 87,
    state_name: 'Bartin'
  },
  {
    country_iso_code: 'TR',
    state_code: 88,
    state_name: 'Igdir'
  },
  {
    country_iso_code: 'TR',
    state_code: 89,
    state_name: 'Karabuk'
  },
  {
    country_iso_code: 'TR',
    state_code: 90,
    state_name: 'Kilis'
  },
  {
    country_iso_code: 'TR',
    state_code: 91,
    state_name: 'Osmaniye'
  },
  {
    country_iso_code: 'TR',
    state_code: 92,
    state_name: 'Yalova'
  },
  {
    country_iso_code: 'TR',
    state_code: 93,
    state_name: 'Duzce'
  },
  {
    country_iso_code: 'TT',
    state_code: '01',
    state_name: 'Arima'
  },
  {
    country_iso_code: 'TT',
    state_code: '02',
    state_name: 'Caroni'
  },
  {
    country_iso_code: 'TT',
    state_code: '03',
    state_name: 'Mayaro'
  },
  {
    country_iso_code: 'TT',
    state_code: '04',
    state_name: 'Nariva'
  },
  {
    country_iso_code: 'TT',
    state_code: '05',
    state_name: 'Port-of-Spain'
  },
  {
    country_iso_code: 'TT',
    state_code: '06',
    state_name: 'Saint Andrew'
  },
  {
    country_iso_code: 'TT',
    state_code: '07',
    state_name: 'Saint David'
  },
  {
    country_iso_code: 'TT',
    state_code: '08',
    state_name: 'Saint George'
  },
  {
    country_iso_code: 'TT',
    state_code: '09',
    state_name: 'Saint Patrick'
  },
  {
    country_iso_code: 'TT',
    state_code: 10,
    state_name: 'San Fernando'
  },
  {
    country_iso_code: 'TT',
    state_code: 11,
    state_name: 'Tobago'
  },
  {
    country_iso_code: 'TT',
    state_code: 12,
    state_name: 'Victoria'
  },
  {
    country_iso_code: 'TW',
    state_code: '01',
    state_name: 'Fu-chien'
  },
  {
    country_iso_code: 'TW',
    state_code: '02',
    state_name: 'Kao-hsiung'
  },
  {
    country_iso_code: 'TW',
    state_code: '03',
    state_name: "T'ai-pei"
  },
  {
    country_iso_code: 'TW',
    state_code: '04',
    state_name: "T'ai-wan"
  },
  {
    country_iso_code: 'TZ',
    state_code: '02',
    state_name: 'Pwani'
  },
  {
    country_iso_code: 'TZ',
    state_code: '03',
    state_name: 'Dodoma'
  },
  {
    country_iso_code: 'TZ',
    state_code: '04',
    state_name: 'Iringa'
  },
  {
    country_iso_code: 'TZ',
    state_code: '05',
    state_name: 'Kigoma'
  },
  {
    country_iso_code: 'TZ',
    state_code: '06',
    state_name: 'Kilimanjaro'
  },
  {
    country_iso_code: 'TZ',
    state_code: '07',
    state_name: 'Lindi'
  },
  {
    country_iso_code: 'TZ',
    state_code: '08',
    state_name: 'Mara'
  },
  {
    country_iso_code: 'TZ',
    state_code: '09',
    state_name: 'Mbeya'
  },
  {
    country_iso_code: 'TZ',
    state_code: 10,
    state_name: 'Morogoro'
  },
  {
    country_iso_code: 'TZ',
    state_code: 11,
    state_name: 'Mtwara'
  },
  {
    country_iso_code: 'TZ',
    state_code: 12,
    state_name: 'Mwanza'
  },
  {
    country_iso_code: 'TZ',
    state_code: 13,
    state_name: 'Pemba North'
  },
  {
    country_iso_code: 'TZ',
    state_code: 14,
    state_name: 'Ruvuma'
  },
  {
    country_iso_code: 'TZ',
    state_code: 15,
    state_name: 'Shinyanga'
  },
  {
    country_iso_code: 'TZ',
    state_code: 16,
    state_name: 'Singida'
  },
  {
    country_iso_code: 'TZ',
    state_code: 17,
    state_name: 'Tabora'
  },
  {
    country_iso_code: 'TZ',
    state_code: 18,
    state_name: 'Tanga'
  },
  {
    country_iso_code: 'TZ',
    state_code: 19,
    state_name: 'Kagera'
  },
  {
    country_iso_code: 'TZ',
    state_code: 20,
    state_name: 'Pemba South'
  },
  {
    country_iso_code: 'TZ',
    state_code: 21,
    state_name: 'Zanzibar Central'
  },
  {
    country_iso_code: 'TZ',
    state_code: 22,
    state_name: 'Zanzibar North'
  },
  {
    country_iso_code: 'TZ',
    state_code: 23,
    state_name: 'Dar es Salaam'
  },
  {
    country_iso_code: 'TZ',
    state_code: 24,
    state_name: 'Rukwa'
  },
  {
    country_iso_code: 'TZ',
    state_code: 25,
    state_name: 'Zanzibar Urban'
  },
  {
    country_iso_code: 'TZ',
    state_code: 26,
    state_name: 'Arusha'
  },
  {
    country_iso_code: 'TZ',
    state_code: 27,
    state_name: 'Manyara'
  },
  {
    country_iso_code: 'UA',
    state_code: '01',
    state_name: "Cherkas'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: '02',
    state_name: "Chernihivs'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: '03',
    state_name: "Chernivets'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: '04',
    state_name: "Dnipropetrovs'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: '05',
    state_name: "Donets'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: '06',
    state_name: "Ivano-Frankivs'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: '07',
    state_name: "Kharkivs'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: '08',
    state_name: "Khersons'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: '09',
    state_name: "Khmel'nyts'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: 10,
    state_name: "Kirovohrads'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: 11,
    state_name: 'Krym'
  },
  {
    country_iso_code: 'UA',
    state_code: 12,
    state_name: 'Kyyiv'
  },
  {
    country_iso_code: 'UA',
    state_code: 13,
    state_name: "Kyyivs'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: 14,
    state_name: "Luhans'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: 15,
    state_name: "L'vivs'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: 16,
    state_name: "Mykolayivs'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: 17,
    state_name: "Odes'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: 18,
    state_name: "Poltavs'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: 19,
    state_name: "Rivnens'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: 20,
    state_name: "Sevastopol'"
  },
  {
    country_iso_code: 'UA',
    state_code: 21,
    state_name: "Sums'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: 22,
    state_name: "Ternopil's'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: 23,
    state_name: "Vinnyts'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: 24,
    state_name: "Volyns'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: 25,
    state_name: "Zakarpats'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: 26,
    state_name: "Zaporiz'ka Oblast'"
  },
  {
    country_iso_code: 'UA',
    state_code: 27,
    state_name: "Zhytomyrs'ka Oblast'"
  },
  {
    country_iso_code: 'UG',
    state_code: 26,
    state_name: 'Apac'
  },
  {
    country_iso_code: 'UG',
    state_code: 28,
    state_name: 'Bundibugyo'
  },
  {
    country_iso_code: 'UG',
    state_code: 29,
    state_name: 'Bushenyi'
  },
  {
    country_iso_code: 'UG',
    state_code: 30,
    state_name: 'Gulu'
  },
  {
    country_iso_code: 'UG',
    state_code: 31,
    state_name: 'Hoima'
  },
  {
    country_iso_code: 'UG',
    state_code: 33,
    state_name: 'Jinja'
  },
  {
    country_iso_code: 'UG',
    state_code: 36,
    state_name: 'Kalangala'
  },
  {
    country_iso_code: 'UG',
    state_code: 37,
    state_name: 'Kampala'
  },
  {
    country_iso_code: 'UG',
    state_code: 38,
    state_name: 'Kamuli'
  },
  {
    country_iso_code: 'UG',
    state_code: 39,
    state_name: 'Kapchorwa'
  },
  {
    country_iso_code: 'UG',
    state_code: 40,
    state_name: 'Kasese'
  },
  {
    country_iso_code: 'UG',
    state_code: 41,
    state_name: 'Kibale'
  },
  {
    country_iso_code: 'UG',
    state_code: 42,
    state_name: 'Kiboga'
  },
  {
    country_iso_code: 'UG',
    state_code: 43,
    state_name: 'Kisoro'
  },
  {
    country_iso_code: 'UG',
    state_code: 45,
    state_name: 'Kotido'
  },
  {
    country_iso_code: 'UG',
    state_code: 46,
    state_name: 'Kumi'
  },
  {
    country_iso_code: 'UG',
    state_code: 47,
    state_name: 'Lira'
  },
  {
    country_iso_code: 'UG',
    state_code: 50,
    state_name: 'Masindi'
  },
  {
    country_iso_code: 'UG',
    state_code: 52,
    state_name: 'Mbarara'
  },
  {
    country_iso_code: 'UG',
    state_code: 56,
    state_name: 'Mubende'
  },
  {
    country_iso_code: 'UG',
    state_code: 58,
    state_name: 'Nebbi'
  },
  {
    country_iso_code: 'UG',
    state_code: 59,
    state_name: 'Ntungamo'
  },
  {
    country_iso_code: 'UG',
    state_code: 60,
    state_name: 'Pallisa'
  },
  {
    country_iso_code: 'UG',
    state_code: 61,
    state_name: 'Rakai'
  },
  {
    country_iso_code: 'UG',
    state_code: 65,
    state_name: 'Adjumani'
  },
  {
    country_iso_code: 'UG',
    state_code: 66,
    state_name: 'Bugiri'
  },
  {
    country_iso_code: 'UG',
    state_code: 67,
    state_name: 'Busia'
  },
  {
    country_iso_code: 'UG',
    state_code: 69,
    state_name: 'Katakwi'
  },
  {
    country_iso_code: 'UG',
    state_code: 70,
    state_name: 'Luwero'
  },
  {
    country_iso_code: 'UG',
    state_code: 71,
    state_name: 'Masaka'
  },
  {
    country_iso_code: 'UG',
    state_code: 72,
    state_name: 'Moyo'
  },
  {
    country_iso_code: 'UG',
    state_code: 73,
    state_name: 'Nakasongola'
  },
  {
    country_iso_code: 'UG',
    state_code: 74,
    state_name: 'Sembabule'
  },
  {
    country_iso_code: 'UG',
    state_code: 76,
    state_name: 'Tororo'
  },
  {
    country_iso_code: 'UG',
    state_code: 77,
    state_name: 'Arua'
  },
  {
    country_iso_code: 'UG',
    state_code: 78,
    state_name: 'Iganga'
  },
  {
    country_iso_code: 'UG',
    state_code: 79,
    state_name: 'Kabarole'
  },
  {
    country_iso_code: 'UG',
    state_code: 80,
    state_name: 'Kaberamaido'
  },
  {
    country_iso_code: 'UG',
    state_code: 81,
    state_name: 'Kamwenge'
  },
  {
    country_iso_code: 'UG',
    state_code: 82,
    state_name: 'Kanungu'
  },
  {
    country_iso_code: 'UG',
    state_code: 83,
    state_name: 'Kayunga'
  },
  {
    country_iso_code: 'UG',
    state_code: 84,
    state_name: 'Kitgum'
  },
  {
    country_iso_code: 'UG',
    state_code: 85,
    state_name: 'Kyenjojo'
  },
  {
    country_iso_code: 'UG',
    state_code: 86,
    state_name: 'Mayuge'
  },
  {
    country_iso_code: 'UG',
    state_code: 87,
    state_name: 'Mbale'
  },
  {
    country_iso_code: 'UG',
    state_code: 88,
    state_name: 'Moroto'
  },
  {
    country_iso_code: 'UG',
    state_code: 89,
    state_name: 'Mpigi'
  },
  {
    country_iso_code: 'UG',
    state_code: 90,
    state_name: 'Mukono'
  },
  {
    country_iso_code: 'UG',
    state_code: 91,
    state_name: 'Nakapiripirit'
  },
  {
    country_iso_code: 'UG',
    state_code: 92,
    state_name: 'Pader'
  },
  {
    country_iso_code: 'UG',
    state_code: 93,
    state_name: 'Rukungiri'
  },
  {
    country_iso_code: 'UG',
    state_code: 94,
    state_name: 'Sironko'
  },
  {
    country_iso_code: 'UG',
    state_code: 95,
    state_name: 'Soroti'
  },
  {
    country_iso_code: 'UG',
    state_code: 96,
    state_name: 'Wakiso'
  },
  {
    country_iso_code: 'UG',
    state_code: 97,
    state_name: 'Yumbe'
  },
  {
    country_iso_code: 'US',
    state_code: 'AA',
    state_name: 'Armed Forces Americas'
  },
  {
    country_iso_code: 'US',
    state_code: 'AE',
    state_name: 'Armed Forces Europe, Middle East, & Canada'
  },
  {
    country_iso_code: 'US',
    state_code: 'AK',
    state_name: 'Alaska'
  },
  {
    country_iso_code: 'US',
    state_code: 'AL',
    state_name: 'Alabama'
  },
  {
    country_iso_code: 'US',
    state_code: 'AP',
    state_name: 'Armed Forces Pacific'
  },
  {
    country_iso_code: 'US',
    state_code: 'AR',
    state_name: 'Arkansas'
  },
  {
    country_iso_code: 'US',
    state_code: 'AS',
    state_name: 'American Samoa'
  },
  {
    country_iso_code: 'US',
    state_code: 'AZ',
    state_name: 'Arizona'
  },
  {
    country_iso_code: 'US',
    state_code: 'CA',
    state_name: 'California'
  },
  {
    country_iso_code: 'US',
    state_code: 'CO',
    state_name: 'Colorado'
  },
  {
    country_iso_code: 'US',
    state_code: 'CT',
    state_name: 'Connecticut'
  },
  {
    country_iso_code: 'US',
    state_code: 'DC',
    state_name: 'District of Columbia'
  },
  {
    country_iso_code: 'US',
    state_code: 'DE',
    state_name: 'Delaware'
  },
  {
    country_iso_code: 'US',
    state_code: 'FL',
    state_name: 'Florida'
  },
  {
    country_iso_code: 'US',
    state_code: 'GA',
    state_name: 'Georgia'
  },
  {
    country_iso_code: 'US',
    state_code: 'GU',
    state_name: 'Guam'
  },
  {
    country_iso_code: 'US',
    state_code: 'HI',
    state_name: 'Hawaii'
  },
  {
    country_iso_code: 'US',
    state_code: 'IA',
    state_name: 'Iowa'
  },
  {
    country_iso_code: 'US',
    state_code: 'ID',
    state_name: 'Idaho'
  },
  {
    country_iso_code: 'US',
    state_code: 'IL',
    state_name: 'Illinois'
  },
  {
    country_iso_code: 'US',
    state_code: 'IN',
    state_name: 'Indiana'
  },
  {
    country_iso_code: 'US',
    state_code: 'KS',
    state_name: 'Kansas'
  },
  {
    country_iso_code: 'US',
    state_code: 'KY',
    state_name: 'Kentucky'
  },
  {
    country_iso_code: 'US',
    state_code: 'LA',
    state_name: 'Louisiana'
  },
  {
    country_iso_code: 'US',
    state_code: 'MA',
    state_name: 'Massachusetts'
  },
  {
    country_iso_code: 'US',
    state_code: 'MD',
    state_name: 'Maryland'
  },
  {
    country_iso_code: 'US',
    state_code: 'ME',
    state_name: 'Maine'
  },
  {
    country_iso_code: 'US',
    state_code: 'MH',
    state_name: 'Marshall Islands'
  },
  {
    country_iso_code: 'US',
    state_code: 'MI',
    state_name: 'Michigan'
  },
  {
    country_iso_code: 'US',
    state_code: 'MN',
    state_name: 'Minnesota'
  },
  {
    country_iso_code: 'US',
    state_code: 'MO',
    state_name: 'Missouri'
  },
  {
    country_iso_code: 'US',
    state_code: 'MP',
    state_name: 'Northern Mariana Islands'
  },
  {
    country_iso_code: 'US',
    state_code: 'MS',
    state_name: 'Mississippi'
  },
  {
    country_iso_code: 'US',
    state_code: 'MT',
    state_name: 'Montana'
  },
  {
    country_iso_code: 'US',
    state_code: 'NC',
    state_name: 'North Carolina'
  },
  {
    country_iso_code: 'US',
    state_code: 'ND',
    state_name: 'North Dakota'
  },
  {
    country_iso_code: 'US',
    state_code: 'NE',
    state_name: 'Nebraska'
  },
  {
    country_iso_code: 'US',
    state_code: 'NH',
    state_name: 'New Hampshire'
  },
  {
    country_iso_code: 'US',
    state_code: 'NJ',
    state_name: 'New Jersey'
  },
  {
    country_iso_code: 'US',
    state_code: 'NM',
    state_name: 'New Mexico'
  },
  {
    country_iso_code: 'US',
    state_code: 'NV',
    state_name: 'Nevada'
  },
  {
    country_iso_code: 'US',
    state_code: 'NY',
    state_name: 'New York'
  },
  {
    country_iso_code: 'US',
    state_code: 'OH',
    state_name: 'Ohio'
  },
  {
    country_iso_code: 'US',
    state_code: 'OK',
    state_name: 'Oklahoma'
  },
  {
    country_iso_code: 'US',
    state_code: 'OR',
    state_name: 'Oregon'
  },
  {
    country_iso_code: 'US',
    state_code: 'PA',
    state_name: 'Pennsylvania'
  },
  {
    country_iso_code: 'US',
    state_code: 'PW',
    state_name: 'Palau'
  },
  {
    country_iso_code: 'US',
    state_code: 'RI',
    state_name: 'Rhode Island'
  },
  {
    country_iso_code: 'US',
    state_code: 'SC',
    state_name: 'South Carolina'
  },
  {
    country_iso_code: 'US',
    state_code: 'SD',
    state_name: 'South Dakota'
  },
  {
    country_iso_code: 'US',
    state_code: 'TN',
    state_name: 'Tennessee'
  },
  {
    country_iso_code: 'US',
    state_code: 'TX',
    state_name: 'Texas'
  },
  {
    country_iso_code: 'US',
    state_code: 'UT',
    state_name: 'Utah'
  },
  {
    country_iso_code: 'US',
    state_code: 'VA',
    state_name: 'Virginia'
  },
  {
    country_iso_code: 'US',
    state_code: 'VI',
    state_name: 'Virgin Islands'
  },
  {
    country_iso_code: 'US',
    state_code: 'VT',
    state_name: 'Vermont'
  },
  {
    country_iso_code: 'US',
    state_code: 'WA',
    state_name: 'Washington'
  },
  {
    country_iso_code: 'US',
    state_code: 'WI',
    state_name: 'Wisconsin'
  },
  {
    country_iso_code: 'US',
    state_code: 'WV',
    state_name: 'West Virginia'
  },
  {
    country_iso_code: 'US',
    state_code: 'WY',
    state_name: 'Wyoming'
  },
  {
    country_iso_code: 'UY',
    state_code: '01',
    state_name: 'Artigas'
  },
  {
    country_iso_code: 'UY',
    state_code: '02',
    state_name: 'Canelones'
  },
  {
    country_iso_code: 'UY',
    state_code: '03',
    state_name: 'Cerro Largo'
  },
  {
    country_iso_code: 'UY',
    state_code: '04',
    state_name: 'Colonia'
  },
  {
    country_iso_code: 'UY',
    state_code: '05',
    state_name: 'Durazno'
  },
  {
    country_iso_code: 'UY',
    state_code: '06',
    state_name: 'Flores'
  },
  {
    country_iso_code: 'UY',
    state_code: '07',
    state_name: 'Florida'
  },
  {
    country_iso_code: 'UY',
    state_code: '08',
    state_name: 'Lavalleja'
  },
  {
    country_iso_code: 'UY',
    state_code: '09',
    state_name: 'Maldonado'
  },
  {
    country_iso_code: 'UY',
    state_code: 10,
    state_name: 'Montevideo'
  },
  {
    country_iso_code: 'UY',
    state_code: 11,
    state_name: 'Paysandu'
  },
  {
    country_iso_code: 'UY',
    state_code: 12,
    state_name: 'Rio Negro'
  },
  {
    country_iso_code: 'UY',
    state_code: 13,
    state_name: 'Rivera'
  },
  {
    country_iso_code: 'UY',
    state_code: 14,
    state_name: 'Rocha'
  },
  {
    country_iso_code: 'UY',
    state_code: 15,
    state_name: 'Salto'
  },
  {
    country_iso_code: 'UY',
    state_code: 16,
    state_name: 'San Jose'
  },
  {
    country_iso_code: 'UY',
    state_code: 17,
    state_name: 'Soriano'
  },
  {
    country_iso_code: 'UY',
    state_code: 18,
    state_name: 'Tacuarembo'
  },
  {
    country_iso_code: 'UY',
    state_code: 19,
    state_name: 'Treinta y Tres'
  },
  {
    country_iso_code: 'UZ',
    state_code: '01',
    state_name: 'Andijon'
  },
  {
    country_iso_code: 'UZ',
    state_code: '02',
    state_name: 'Bukhoro'
  },
  {
    country_iso_code: 'UZ',
    state_code: '03',
    state_name: 'Farghona'
  },
  {
    country_iso_code: 'UZ',
    state_code: '04',
    state_name: 'Jizzakh'
  },
  {
    country_iso_code: 'UZ',
    state_code: '05',
    state_name: 'Khorazm'
  },
  {
    country_iso_code: 'UZ',
    state_code: '06',
    state_name: 'Namangan'
  },
  {
    country_iso_code: 'UZ',
    state_code: '07',
    state_name: 'Nawoiy'
  },
  {
    country_iso_code: 'UZ',
    state_code: '08',
    state_name: 'Qashqadaryo'
  },
  {
    country_iso_code: 'UZ',
    state_code: '09',
    state_name: 'Qoraqalpoghiston'
  },
  {
    country_iso_code: 'UZ',
    state_code: 10,
    state_name: 'Samarqand'
  },
  {
    country_iso_code: 'UZ',
    state_code: 11,
    state_name: 'Sirdaryo'
  },
  {
    country_iso_code: 'UZ',
    state_code: 12,
    state_name: 'Surkhondaryo'
  },
  {
    country_iso_code: 'UZ',
    state_code: 13,
    state_name: 'Toshkent'
  },
  {
    country_iso_code: 'UZ',
    state_code: 14,
    state_name: 'Toshkent'
  },
  {
    country_iso_code: 'UZ',
    state_code: 15,
    state_name: 'Jizzax'
  },
  {
    country_iso_code: 'VC',
    state_code: '01',
    state_name: 'Charlotte'
  },
  {
    country_iso_code: 'VC',
    state_code: '02',
    state_name: 'Saint Andrew'
  },
  {
    country_iso_code: 'VC',
    state_code: '03',
    state_name: 'Saint David'
  },
  {
    country_iso_code: 'VC',
    state_code: '04',
    state_name: 'Saint George'
  },
  {
    country_iso_code: 'VC',
    state_code: '05',
    state_name: 'Saint Patrick'
  },
  {
    country_iso_code: 'VC',
    state_code: '06',
    state_name: 'Grenadines'
  },
  {
    country_iso_code: 'VE',
    state_code: '01',
    state_name: 'Amazonas'
  },
  {
    country_iso_code: 'VE',
    state_code: '02',
    state_name: 'Anzoategui'
  },
  {
    country_iso_code: 'VE',
    state_code: '03',
    state_name: 'Apure'
  },
  {
    country_iso_code: 'VE',
    state_code: '04',
    state_name: 'Aragua'
  },
  {
    country_iso_code: 'VE',
    state_code: '05',
    state_name: 'Barinas'
  },
  {
    country_iso_code: 'VE',
    state_code: '06',
    state_name: 'Bolivar'
  },
  {
    country_iso_code: 'VE',
    state_code: '07',
    state_name: 'Carabobo'
  },
  {
    country_iso_code: 'VE',
    state_code: '08',
    state_name: 'Cojedes'
  },
  {
    country_iso_code: 'VE',
    state_code: '09',
    state_name: 'Delta Amacuro'
  },
  {
    country_iso_code: 'VE',
    state_code: 11,
    state_name: 'Falcon'
  },
  {
    country_iso_code: 'VE',
    state_code: 12,
    state_name: 'Guarico'
  },
  {
    country_iso_code: 'VE',
    state_code: 13,
    state_name: 'Lara'
  },
  {
    country_iso_code: 'VE',
    state_code: 14,
    state_name: 'Merida'
  },
  {
    country_iso_code: 'VE',
    state_code: 15,
    state_name: 'Miranda'
  },
  {
    country_iso_code: 'VE',
    state_code: 16,
    state_name: 'Monagas'
  },
  {
    country_iso_code: 'VE',
    state_code: 17,
    state_name: 'Nueva Esparta'
  },
  {
    country_iso_code: 'VE',
    state_code: 18,
    state_name: 'Portuguesa'
  },
  {
    country_iso_code: 'VE',
    state_code: 19,
    state_name: 'Sucre'
  },
  {
    country_iso_code: 'VE',
    state_code: 20,
    state_name: 'Tachira'
  },
  {
    country_iso_code: 'VE',
    state_code: 21,
    state_name: 'Trujillo'
  },
  {
    country_iso_code: 'VE',
    state_code: 22,
    state_name: 'Yaracuy'
  },
  {
    country_iso_code: 'VE',
    state_code: 23,
    state_name: 'Zulia'
  },
  {
    country_iso_code: 'VE',
    state_code: 24,
    state_name: 'Dependencias Federales'
  },
  {
    country_iso_code: 'VE',
    state_code: 25,
    state_name: 'Distrito Federal'
  },
  {
    country_iso_code: 'VE',
    state_code: 26,
    state_name: 'Vargas'
  },
  {
    country_iso_code: 'VN',
    state_code: '01',
    state_name: 'An Giang'
  },
  {
    country_iso_code: 'VN',
    state_code: '03',
    state_name: 'Ben Tre'
  },
  {
    country_iso_code: 'VN',
    state_code: '05',
    state_name: 'Cao Bang'
  },
  {
    country_iso_code: 'VN',
    state_code: '09',
    state_name: 'Dong Thap'
  },
  {
    country_iso_code: 'VN',
    state_code: 13,
    state_name: 'Hai Phong'
  },
  {
    country_iso_code: 'VN',
    state_code: 20,
    state_name: 'Ho Chi Minh'
  },
  {
    country_iso_code: 'VN',
    state_code: 21,
    state_name: 'Kien Giang'
  },
  {
    country_iso_code: 'VN',
    state_code: 23,
    state_name: 'Lam Dong'
  },
  {
    country_iso_code: 'VN',
    state_code: 24,
    state_name: 'Long An'
  },
  {
    country_iso_code: 'VN',
    state_code: 30,
    state_name: 'Quang Ninh'
  },
  {
    country_iso_code: 'VN',
    state_code: 32,
    state_name: 'Son La'
  },
  {
    country_iso_code: 'VN',
    state_code: 33,
    state_name: 'Tay Ninh'
  },
  {
    country_iso_code: 'VN',
    state_code: 34,
    state_name: 'Thanh Hoa'
  },
  {
    country_iso_code: 'VN',
    state_code: 35,
    state_name: 'Thai Binh'
  },
  {
    country_iso_code: 'VN',
    state_code: 37,
    state_name: 'Tien Giang'
  },
  {
    country_iso_code: 'VN',
    state_code: 39,
    state_name: 'Lang Son'
  },
  {
    country_iso_code: 'VN',
    state_code: 43,
    state_name: 'Dong Nai'
  },
  {
    country_iso_code: 'VN',
    state_code: 44,
    state_name: 'Ha Noi'
  },
  {
    country_iso_code: 'VN',
    state_code: 45,
    state_name: 'Ba Ria-Vung Tau'
  },
  {
    country_iso_code: 'VN',
    state_code: 46,
    state_name: 'Binh Dinh'
  },
  {
    country_iso_code: 'VN',
    state_code: 47,
    state_name: 'Binh Thuan'
  },
  {
    country_iso_code: 'VN',
    state_code: 49,
    state_name: 'Gia Lai'
  },
  {
    country_iso_code: 'VN',
    state_code: 50,
    state_name: 'Ha Giang'
  },
  {
    country_iso_code: 'VN',
    state_code: 52,
    state_name: 'Ha Tinh'
  },
  {
    country_iso_code: 'VN',
    state_code: 53,
    state_name: 'Hoa Binh'
  },
  {
    country_iso_code: 'VN',
    state_code: 54,
    state_name: 'Khanh Hoa'
  },
  {
    country_iso_code: 'VN',
    state_code: 55,
    state_name: 'Kon Tum'
  },
  {
    country_iso_code: 'VN',
    state_code: 58,
    state_name: 'Nghe An'
  },
  {
    country_iso_code: 'VN',
    state_code: 59,
    state_name: 'Ninh Binh'
  },
  {
    country_iso_code: 'VN',
    state_code: 60,
    state_name: 'Ninh Thuan'
  },
  {
    country_iso_code: 'VN',
    state_code: 61,
    state_name: 'Phu Yen'
  },
  {
    country_iso_code: 'VN',
    state_code: 62,
    state_name: 'Quang Binh'
  },
  {
    country_iso_code: 'VN',
    state_code: 63,
    state_name: 'Quang Ngai'
  },
  {
    country_iso_code: 'VN',
    state_code: 64,
    state_name: 'Quang Tri'
  },
  {
    country_iso_code: 'VN',
    state_code: 65,
    state_name: 'Soc Trang'
  },
  {
    country_iso_code: 'VN',
    state_code: 66,
    state_name: 'Thua Thien-Hue'
  },
  {
    country_iso_code: 'VN',
    state_code: 67,
    state_name: 'Tra Vinh'
  },
  {
    country_iso_code: 'VN',
    state_code: 68,
    state_name: 'Tuyen Quang'
  },
  {
    country_iso_code: 'VN',
    state_code: 69,
    state_name: 'Vinh Long'
  },
  {
    country_iso_code: 'VN',
    state_code: 70,
    state_name: 'Yen Bai'
  },
  {
    country_iso_code: 'VN',
    state_code: 71,
    state_name: 'Bac Giang'
  },
  {
    country_iso_code: 'VN',
    state_code: 72,
    state_name: 'Bac Kan'
  },
  {
    country_iso_code: 'VN',
    state_code: 73,
    state_name: 'Bac Lieu'
  },
  {
    country_iso_code: 'VN',
    state_code: 74,
    state_name: 'Bac Ninh'
  },
  {
    country_iso_code: 'VN',
    state_code: 75,
    state_name: 'Binh Duong'
  },
  {
    country_iso_code: 'VN',
    state_code: 76,
    state_name: 'Binh Phuoc'
  },
  {
    country_iso_code: 'VN',
    state_code: 77,
    state_name: 'Ca Mau'
  },
  {
    country_iso_code: 'VN',
    state_code: 78,
    state_name: 'Da Nang'
  },
  {
    country_iso_code: 'VN',
    state_code: 79,
    state_name: 'Hai Duong'
  },
  {
    country_iso_code: 'VN',
    state_code: 80,
    state_name: 'Ha Nam'
  },
  {
    country_iso_code: 'VN',
    state_code: 81,
    state_name: 'Hung Yen'
  },
  {
    country_iso_code: 'VN',
    state_code: 82,
    state_name: 'Nam Dinh'
  },
  {
    country_iso_code: 'VN',
    state_code: 83,
    state_name: 'Phu Tho'
  },
  {
    country_iso_code: 'VN',
    state_code: 84,
    state_name: 'Quang Nam'
  },
  {
    country_iso_code: 'VN',
    state_code: 85,
    state_name: 'Thai Nguyen'
  },
  {
    country_iso_code: 'VN',
    state_code: 86,
    state_name: 'Vinh Phuc'
  },
  {
    country_iso_code: 'VN',
    state_code: 87,
    state_name: 'Can Tho'
  },
  {
    country_iso_code: 'VN',
    state_code: 88,
    state_name: 'Dac Lak'
  },
  {
    country_iso_code: 'VN',
    state_code: 89,
    state_name: 'Lai Chau'
  },
  {
    country_iso_code: 'VN',
    state_code: 90,
    state_name: 'Lao Cai'
  },
  {
    country_iso_code: 'VN',
    state_code: 91,
    state_name: 'Dak Nong'
  },
  {
    country_iso_code: 'VN',
    state_code: 92,
    state_name: 'Dien Bien'
  },
  {
    country_iso_code: 'VN',
    state_code: 93,
    state_name: 'Hau Giang'
  },
  {
    country_iso_code: 'VU',
    state_code: '05',
    state_name: 'Ambrym'
  },
  {
    country_iso_code: 'VU',
    state_code: '06',
    state_name: 'Aoba'
  },
  {
    country_iso_code: 'VU',
    state_code: '07',
    state_name: 'Torba'
  },
  {
    country_iso_code: 'VU',
    state_code: '08',
    state_name: 'Efate'
  },
  {
    country_iso_code: 'VU',
    state_code: '09',
    state_name: 'Epi'
  },
  {
    country_iso_code: 'VU',
    state_code: 10,
    state_name: 'Malakula'
  },
  {
    country_iso_code: 'VU',
    state_code: 11,
    state_name: 'Paama'
  },
  {
    country_iso_code: 'VU',
    state_code: 12,
    state_name: 'Pentecote'
  },
  {
    country_iso_code: 'VU',
    state_code: 13,
    state_name: 'Sanma'
  },
  {
    country_iso_code: 'VU',
    state_code: 14,
    state_name: 'Shepherd'
  },
  {
    country_iso_code: 'VU',
    state_code: 15,
    state_name: 'Tafea'
  },
  {
    country_iso_code: 'VU',
    state_code: 16,
    state_name: 'Malampa'
  },
  {
    country_iso_code: 'VU',
    state_code: 17,
    state_name: 'Penama'
  },
  {
    country_iso_code: 'VU',
    state_code: 18,
    state_name: 'Shefa'
  },
  {
    country_iso_code: 'WS',
    state_code: '02',
    state_name: 'Aiga-i-le-Tai'
  },
  {
    country_iso_code: 'WS',
    state_code: '03',
    state_name: 'Atua'
  },
  {
    country_iso_code: 'WS',
    state_code: '04',
    state_name: 'Fa'
  },
  {
    country_iso_code: 'WS',
    state_code: '05',
    state_name: 'Gaga'
  },
  {
    country_iso_code: 'WS',
    state_code: '06',
    state_name: 'Va'
  },
  {
    country_iso_code: 'WS',
    state_code: '07',
    state_name: 'Gagaifomauga'
  },
  {
    country_iso_code: 'WS',
    state_code: '08',
    state_name: 'Palauli'
  },
  {
    country_iso_code: 'WS',
    state_code: '09',
    state_name: 'Satupa'
  },
  {
    country_iso_code: 'WS',
    state_code: 10,
    state_name: 'Tuamasaga'
  },
  {
    country_iso_code: 'WS',
    state_code: 11,
    state_name: 'Vaisigano'
  },
  {
    country_iso_code: 'YE',
    state_code: '01',
    state_name: 'Abyan'
  },
  {
    country_iso_code: 'YE',
    state_code: '02',
    state_name: 'Adan'
  },
  {
    country_iso_code: 'YE',
    state_code: '03',
    state_name: 'Al Mahrah'
  },
  {
    country_iso_code: 'YE',
    state_code: '04',
    state_name: 'Hadramawt'
  },
  {
    country_iso_code: 'YE',
    state_code: '05',
    state_name: 'Shabwah'
  },
  {
    country_iso_code: 'YE',
    state_code: '06',
    state_name: 'Lahij'
  },
  {
    country_iso_code: 'YE',
    state_code: '07',
    state_name: "Al Bayda'"
  },
  {
    country_iso_code: 'YE',
    state_code: '08',
    state_name: 'Al Hudaydah'
  },
  {
    country_iso_code: 'YE',
    state_code: '09',
    state_name: 'Al Jawf'
  },
  {
    country_iso_code: 'YE',
    state_code: 10,
    state_name: 'Al Mahwit'
  },
  {
    country_iso_code: 'YE',
    state_code: 11,
    state_name: 'Dhamar'
  },
  {
    country_iso_code: 'YE',
    state_code: 12,
    state_name: 'Hajjah'
  },
  {
    country_iso_code: 'YE',
    state_code: 13,
    state_name: 'Ibb'
  },
  {
    country_iso_code: 'YE',
    state_code: 14,
    state_name: "Ma'rib"
  },
  {
    country_iso_code: 'YE',
    state_code: 15,
    state_name: "Sa'dah"
  },
  {
    country_iso_code: 'YE',
    state_code: 16,
    state_name: "San'a'"
  },
  {
    country_iso_code: 'YE',
    state_code: 17,
    state_name: 'Taizz'
  },
  {
    country_iso_code: 'YE',
    state_code: 18,
    state_name: 'Ad Dali'
  },
  {
    country_iso_code: 'YE',
    state_code: 19,
    state_name: 'Amran'
  },
  {
    country_iso_code: 'YE',
    state_code: 20,
    state_name: "Al Bayda'"
  },
  {
    country_iso_code: 'YE',
    state_code: 21,
    state_name: 'Al Jawf'
  },
  {
    country_iso_code: 'YE',
    state_code: 22,
    state_name: 'Hajjah'
  },
  {
    country_iso_code: 'YE',
    state_code: 23,
    state_name: 'Ibb'
  },
  {
    country_iso_code: 'YE',
    state_code: 24,
    state_name: 'Lahij'
  },
  {
    country_iso_code: 'YE',
    state_code: 25,
    state_name: 'Taizz'
  },
  {
    country_iso_code: 'ZA',
    state_code: '01',
    state_name: 'North-Western Province'
  },
  {
    country_iso_code: 'ZA',
    state_code: '02',
    state_name: 'KwaZulu-Natal'
  },
  {
    country_iso_code: 'ZA',
    state_code: '03',
    state_name: 'Free State'
  },
  {
    country_iso_code: 'ZA',
    state_code: '05',
    state_name: 'Eastern Cape'
  },
  {
    country_iso_code: 'ZA',
    state_code: '06',
    state_name: 'Gauteng'
  },
  {
    country_iso_code: 'ZA',
    state_code: '07',
    state_name: 'Mpumalanga'
  },
  {
    country_iso_code: 'ZA',
    state_code: '08',
    state_name: 'Northern Cape'
  },
  {
    country_iso_code: 'ZA',
    state_code: '09',
    state_name: 'Limpopo'
  },
  {
    country_iso_code: 'ZA',
    state_code: 10,
    state_name: 'North-West'
  },
  {
    country_iso_code: 'ZA',
    state_code: 11,
    state_name: 'Western Cape'
  },
  {
    country_iso_code: 'ZM',
    state_code: '01',
    state_name: 'Western'
  },
  {
    country_iso_code: 'ZM',
    state_code: '02',
    state_name: 'Central'
  },
  {
    country_iso_code: 'ZM',
    state_code: '03',
    state_name: 'Eastern'
  },
  {
    country_iso_code: 'ZM',
    state_code: '04',
    state_name: 'Luapula'
  },
  {
    country_iso_code: 'ZM',
    state_code: '05',
    state_name: 'Northern'
  },
  {
    country_iso_code: 'ZM',
    state_code: '06',
    state_name: 'North-Western'
  },
  {
    country_iso_code: 'ZM',
    state_code: '07',
    state_name: 'Southern'
  },
  {
    country_iso_code: 'ZM',
    state_code: '08',
    state_name: 'Copperbelt'
  },
  {
    country_iso_code: 'ZM',
    state_code: '09',
    state_name: 'Lusaka'
  },
  {
    country_iso_code: 'ZW',
    state_code: '01',
    state_name: 'Manicaland'
  },
  {
    country_iso_code: 'ZW',
    state_code: '02',
    state_name: 'Midlands'
  },
  {
    country_iso_code: 'ZW',
    state_code: '03',
    state_name: 'Mashonaland Central'
  },
  {
    country_iso_code: 'ZW',
    state_code: '04',
    state_name: 'Mashonaland East'
  },
  {
    country_iso_code: 'ZW',
    state_code: '05',
    state_name: 'Mashonaland West'
  },
  {
    country_iso_code: 'ZW',
    state_code: '06',
    state_name: 'Matabeleland North'
  },
  {
    country_iso_code: 'ZW',
    state_code: '07',
    state_name: 'Matabeleland South'
  },
  {
    country_iso_code: 'ZW',
    state_code: '08',
    state_name: 'Masvingo'
  },
  {
    country_iso_code: 'ZW',
    state_code: '09',
    state_name: 'Bulawayo'
  },
  {
    country_iso_code: 'ZW',
    state_code: 10,
    state_name: 'Harare'
  }
]

const order = (a: StateOption, b: StateOption) => (a.value < b.value ? -1 : 1)

export const StateOptions = stateOptions
  .map(state => ({
    value: state.state_name,
    key: state.state_code,
    country: state.country_iso_code
  }))
  .sort(order)