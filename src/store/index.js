import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Addresses: [
      {
        id: 1,
        Name: "Menlyn Mall",
        Address:
          "Menlyn Mall, Atterbury Rd &, Lois Ave, Menlyn, Pretoria, 0063",
        OperatingHours: "08:00 AM to 20:00 PM",
        Phone: "012 663 1702"
      },
      {
        id: 2,
        Name: "Brooklyn Mall",
        Address:
          "Brooklyn Mall, Cnr Veale St and, Fehrsen St, Nieuw Muckleneuk, Pretoria, 0181",
        OperatingHours: "08:00 AM to 19:00 PM",
        Phone: "012 346 1063"
      },
      {
        id: 3,
        Name: "Centurion Mall",
        Address:
          "Centurion Mall, 1269 Gordon Hood Rd, Centurion Central, Pretoria, 0046",
        OperatingHours: "08:00 AM to 20:00 PM",
        Phone: "012 663 1702"
      },
      {
        id: 4,
        Name: "Irene Village Mall",
        Address:
          "Irene Village Mall, Van Ryneveld Ave, Irene Farm Villages, Centurion, 0133",
        OperatingHours: "08:00 AM to 20:00 PM",
        Phone: "012 7649 600"
      },
      {
        id: 5,
        Name: "Mall of Africa",
        Address:
          "Mall of Africa, Lone Creek Crescent and, Magwa Cres, Waterfall City, Midrand, 1686",
        OperatingHours: "08:00 AM to 19:00 PM",
        Phone: "010 596 1470"
      },
      {
        id: 6,
        Name: "Sandton City Mall",
        Address: "Sandton City Mall, 2 Gwen Ln, Sandhurst, Sandton, 2031",
        OperatingHours: "08:00 AM to 20:00 PM",
        Phone: "011 217 6000"
      },
      {
        id: 7,
        Name: "East Rand Mall",
        Address: "East Rand Mall, Bental Rd, Jansen Park, Boksburg, 1459",
        OperatingHours: "08:00 AM to 20:00 PM",
        Phone: "011 823 1110"
      },
      {
        id: 8,
        Name: "Menlyn Maine",
        Address:
          "Menlyn Maine, Ext 2, Corner Corobay and, Aramist Ave, Waterkloof Glen, Pretoria, 0181",
        OperatingHours: "08:00 AM to 19:00 PM",
        Phone: "012 361 7758"
      },
      {
        id: 9,
        Name: "Rosebank Mall",
        Address: "Rosebank Mall, 50 Bath Ave, Rosebank, Johannesburg, 2196",
        OperatingHours: "08:00 AM to 19:00 PM",
        Phone: "011 788 5530"
      },
      {
        id: 10,
        Name: "Midrand Mall",
        Address: "Midrand Mall, 1635, 202 Old Pretoria Rd, Midrand, 1635",
        OperatingHours: "08:00 AM to 20:00 PM",
        Phone: "011 315 3345"
      },
      {
        id: 11,
        Name: "Doringkloof Mall",
        Address: "Doringkloof Mall, 3 Protea St, Doringkloof, Centurion, 0157",
        OperatingHours: "08:00 AM to 19:00 PM",
        Phone: "012 667 3288"
      },
      {
        id: 12,
        Name: "Kempton Gate Mall",
        Address: "Kempton Gate Mall, CR Swart Dr, Edleen, Kempton Park, 1625",
        OperatingHours: "08:00 AM to 18:00 PM",
        Phone: "011 390 4300"
      },
      {
        id: 13,
        Name: "Nelson Mandela Square",
        Address: "Nelson Mandela Square, 5th St, Sandown, Sandton, 2031",
        OperatingHours: "08:00 AM to 22:00 PM",
        Phone: "011 217 6000"
      },
      {
        id: 14,
        Name: "Killarney Mall",
        Address: "Killarney Mall, 60 Riviera Rd, Killarney, Johannesburg, 2193",
        OperatingHours: "08:00 AM to 18:00 PM",
        Phone: "011 646 4657"
      },
      {
        id: 15,
        Name: "Maponya Mall",
        Address: "Maponya Mall, 2127 Chris Hani Rd, Klipspruit, Soweto, 1809",
        OperatingHours: "08:00 AM to 18:00 PM",
        Phone: "011 938 4448"
      },
      {
        id: 16,
        Name: "Festival Mall",
        Address:
          "Festival Mall, Corner CR Swart &, Kelvin St, Esther Park, Kempton Park, 1619",
        OperatingHours: "08:00 AM to 18:00 PM",
        Phone: "011 394 7549"
      },
      {
        id: 17,
        Name: "Lakeside Mall",
        Address: "Lakeside Mall, Tom Jones St, Benoni, 1501",
        OperatingHours: "08:00 AM to 18:00 PM",
        Phone: "011 427 1801"
      },
      {
        id: 18,
        Name: "Carnival Shopping Centre",
        Address:
          "Carnival Shopping Centre, Heidelberg Rd & Airport Road, Dalpark, Brakpan, 1552",
        OperatingHours: "08:00 AM to 20:00 PM",
        Phone: "011 915 7023"
      },
      {
        id: 19,
        Name: "Greenstone Shopping Centre",
        Address:
          "Greenstone Shopping Centre, Modderfontein Rd, Greenstone Hill, Edenvale, 1616",
        OperatingHours: "08:00 AM to 20:00 PM",
        Phone: "011 524 0445"
      },
      {
        id: 20,
        Name: "Southgate Mall",
        Address: "Southgate Mall, R82, Meredale, Johannesburg South, 2091",
        OperatingHours: "08:00 AM to 20:00 PM",
        Phone: "011 942 1061"
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
