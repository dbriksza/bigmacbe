require("dotenv").config();
const bodyParser = require("body-parser");

const axios = require("axios");

const express = require("express");
const server = express();

const cors = require("cors");

server.use(bodyParser.json());
server.use(cors());

//HELPER FUNCTION
function randomValueOf(obj) {
  var keys = Object.keys(obj);
  var len = keys.length;
  var rnd = Math.floor(Math.random() * len);
  var key = keys[rnd];
  return key;
}

server.get("/", (req, res) => {
  res.status(200).json("seems to be working");
});

server.post("/ip", (req, res) => {
  let ip = req.body.ip;
  let country = null;
  axios
    .get(`https://ipvigilante.com/json/${ip}/country_name`)
    .then((response) => {
      country = response.data.data.country_name;
      // console.log(country);
      res.status(201).json({
        country: country,
        randCountry: randomValueOf(countryData),
        randCountryData: countryData[randomValueOf(countryData)],
        data: countryData[country.replace(/\s/g, "_")],
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

const countryData = {
  Argentina: {
    Date: "2016-01-01",
    Local_price: 33,
    Dollar_ex: 13.80925,
    Dollar_price: 2.3897025544472004,
    Dollar_PPP: 6.69371196754564,
    Dollar_valuation: -51.52733155279512,
  },
  Australia: {
    Date: "2016-01-01",
    Local_price: 5.3,
    Dollar_ex: 1.415728746372195,
    Dollar_price: 3.743655,
    Dollar_PPP: 1.0750507099391482,
    Dollar_valuation: -24.063793103448262,
  },
  Austria: {
    Date: "2016-01-01",
    Local_price: 3.5,
    Dollar_ex: 0.9302325581395349,
    Dollar_price: 3.7625,
    Dollar_PPP: 0.7099391480730224,
    Dollar_valuation: -23.68154158215,
  },
  Belgium: {
    Date: "2016-01-01",
    Local_price: 3.95,
    Dollar_ex: 0.9302325581395349,
    Dollar_price: 4.24625,
    Dollar_PPP: 0.8012170385395538,
    Dollar_valuation: -13.869168356997964,
  },
  Brazil: {
    Date: "2016-01-01",
    Local_price: 13.5,
    Dollar_ex: 4.0248,
    Dollar_price: 3.3542039355992843,
    Dollar_PPP: 2.7383367139959436,
    Dollar_valuation: -31.963409014213283,
  },
  Britain: {
    Date: "2016-01-01",
    Local_price: 2.89,
    Dollar_ex: 0.6845329773761851,
    Dollar_price: 4.2218565,
    Dollar_PPP: 0.5862068965517242,
    Dollar_valuation: -14.363965517241372,
  },
  Canada: {
    Date: "2016-01-01",
    Local_price: 5.84,
    Dollar_ex: 1.4092,
    Dollar_price: 4.144195288106727,
    Dollar_PPP: 1.184584178498986,
    Dollar_valuation: -15.939243648950763,
  },
  Chile: {
    Date: "2016-01-01",
    Local_price: 2100,
    Dollar_ex: 715.215,
    Dollar_price: 2.9361800297812546,
    Dollar_PPP: 425.9634888438134,
    Dollar_valuation: -40.442595744802134,
  },
  China: {
    Date: "2016-01-01",
    Local_price: 17.6,
    Dollar_ex: 6.5582,
    Dollar_price: 2.6836632002683665,
    Dollar_PPP: 3.569979716024341,
    Dollar_valuation: -45.564640968187284,
  },
  Colombia: {
    Date: "2016-01-01",
    Local_price: 7900,
    Dollar_ex: 3253.9,
    Dollar_price: 2.427855803804665,
    Dollar_PPP: 1602.4340770791075,
    Dollar_valuation: -50.75343197150781,
  },
  Costa_Rica: {
    Date: "2016-01-01",
    Local_price: 2150,
    Dollar_ex: 535.25,
    Dollar_price: 4.016814572629612,
    Dollar_PPP: 436.10547667342803,
    Dollar_valuation: -18.523030981143762,
  },
  Czech_Republic: {
    Date: "2016-01-01",
    Local_price: 75,
    Dollar_ex: 25.1442,
    Dollar_price: 2.9827952370725654,
    Dollar_PPP: 15.212981744421908,
    Dollar_valuation: -39.497054014755264,
  },
  Denmark: {
    Date: "2016-01-01",
    Local_price: 30,
    Dollar_ex: 6.9405,
    Dollar_price: 4.322455154527772,
    Dollar_PPP: 6.085192697768763,
    Dollar_valuation: -12.32342485744885,
  },
  Egypt: {
    Date: "2016-01-01",
    Local_price: 16.93,
    Dollar_ex: 7.83005,
    Dollar_price: 2.162182872395451,
    Dollar_PPP: 3.4340770791075053,
    Dollar_valuation: -56.142335245528386,
  },
  Estonia: {
    Date: "2016-01-01",
    Local_price: 3,
    Dollar_ex: 0.9302325581395349,
    Dollar_price: 3.225,
    Dollar_PPP: 0.6085192697768763,
    Dollar_valuation: -34.58417849898579,
  },
  Euro_area: {
    Date: "2016-01-01",
    Local_price: 3.72,
    Dollar_ex: 0.9302325581395349,
    Dollar_price: 3.999,
    Dollar_PPP: 0.7545638945233266,
    Dollar_valuation: -18.884381338742383,
  },
  Finland: {
    Date: "2016-01-01",
    Local_price: 4.1,
    Dollar_ex: 0.9302325581395349,
    Dollar_price: 4.4075,
    Dollar_PPP: 0.8316430020283976,
    Dollar_valuation: -10.598377281947258,
  },
  France: {
    Date: "2016-01-01",
    Local_price: 4.1,
    Dollar_ex: 0.9302325581395349,
    Dollar_price: 4.4075,
    Dollar_PPP: 0.8316430020283976,
    Dollar_valuation: -10.598377281947258,
  },
  Germany: {
    Date: "2016-01-01",
    Local_price: 3.59,
    Dollar_ex: 0.9302325581395349,
    Dollar_price: 3.85925,
    Dollar_PPP: 0.7281947261663286,
    Dollar_valuation: -21.71906693711967,
  },
  Greece: {
    Date: "2016-01-01",
    Local_price: 3.35,
    Dollar_ex: 0.9302325581395349,
    Dollar_price: 3.6012500000000003,
    Dollar_PPP: 0.6795131845841785,
    Dollar_valuation: -26.952332657200806,
  },
  Hong_Kong: {
    Date: "2016-01-01",
    Local_price: 19.2,
    Dollar_ex: 7.75235,
    Dollar_price: 2.4766683650763963,
    Dollar_PPP: 3.894523326572008,
    Dollar_valuation: -49.76331916680737,
  },
  Hungary: {
    Date: "2016-01-01",
    Local_price: 900,
    Dollar_ex: 292.67905,
    Dollar_price: 3.075040731477022,
    Dollar_PPP: 182.5557809330629,
    Dollar_valuation: -37.625948651581695,
  },
  India: {
    Date: "2016-01-01",
    Local_price: 127,
    Dollar_ex: 66.8025,
    Dollar_price: 1.901126454848247,
    Dollar_PPP: 25.760649087221097,
    Dollar_valuation: -61.43759726474144,
  },
  Indonesia: {
    Date: "2016-01-01",
    Local_price: 30500,
    Dollar_ex: 13947.5,
    Dollar_price: 2.186771822907331,
    Dollar_PPP: 6186.612576064909,
    Dollar_valuation: -55.643573571859406,
  },
  Ireland: {
    Date: "2016-01-01",
    Local_price: 3.95,
    Dollar_ex: 0.9302325581395349,
    Dollar_price: 4.24625,
    Dollar_PPP: 0.8012170385395538,
    Dollar_valuation: -13.869168356997964,
  },
  Israel: {
    Date: "2016-01-01",
    Local_price: 16.9,
    Dollar_ex: 3.94105,
    Dollar_price: 4.288197307824056,
    Dollar_PPP: 3.4279918864097363,
    Dollar_valuation: -13.018310186124605,
  },
  Italy: {
    Date: "2016-01-01",
    Local_price: 4,
    Dollar_ex: 0.9302325581395349,
    Dollar_price: 4.3,
    Dollar_PPP: 0.8113590263691685,
    Dollar_valuation: -12.778904665314395,
  },
  Japan: {
    Date: "2016-01-01",
    Local_price: 370,
    Dollar_ex: 118.645,
    Dollar_price: 3.1185469257027267,
    Dollar_PPP: 75.05070993914808,
    Dollar_valuation: -36.74347006688181,
  },
  Latvia: {
    Date: "2013-07-01",
    Local_price: 1.69,
    Dollar_ex: 0.54635,
    Dollar_price: 3.093255239315457,
    Dollar_PPP: 0.37088514996342353,
    Dollar_valuation: -32.11583234860007,
  },
  Lithuania: {
    Date: "2014-07-01",
    Local_price: 8.95,
    Dollar_ex: 2.56455,
    Dollar_price: 3.4898910140180535,
    Dollar_PPP: 1.8665276329509906,
    Dollar_valuation: -27.21812275249106,
  },
  Malaysia: {
    Date: "2016-01-01",
    Local_price: 8,
    Dollar_ex: 4.3925,
    Dollar_price: 1.8212862834376777,
    Dollar_PPP: 1.622718052738337,
    Dollar_valuation: -63.05707335826211,
  },
  Mexico: {
    Date: "2016-01-01",
    Local_price: 49,
    Dollar_ex: 17.43675,
    Dollar_price: 2.8101567092491435,
    Dollar_PPP: 9.939148073022313,
    Dollar_valuation: -42.998849710970724,
  },
  Netherlands: {
    Date: "2016-01-01",
    Local_price: 3.45,
    Dollar_ex: 0.9302325581395349,
    Dollar_price: 3.70875,
    Dollar_PPP: 0.6997971602434078,
    Dollar_valuation: -24.77180527383367,
  },
  New_Zealand: {
    Date: "2016-01-01",
    Local_price: 5.9,
    Dollar_ex: 1.5080681646810434,
    Dollar_price: 3.9122900000000005,
    Dollar_PPP: 1.1967545638945234,
    Dollar_valuation: -20.643204868154143,
  },
  Norway: {
    Date: "2016-01-01",
    Local_price: 46.8,
    Dollar_ex: 8.97465,
    Dollar_price: 5.214688037973625,
    Dollar_PPP: 9.49290060851927,
    Dollar_valuation: 5.774605232730745,
  },
  Pakistan: {
    Date: "2016-01-01",
    Local_price: 300,
    Dollar_ex: 104.885,
    Dollar_price: 2.860275539877008,
    Dollar_PPP: 60.85192697768763,
    Dollar_valuation: -41.98224057044608,
  },
  Peru: {
    Date: "2016-01-01",
    Local_price: 10,
    Dollar_ex: 3.418,
    Dollar_price: 2.925687536571094,
    Dollar_PPP: 2.028397565922921,
    Dollar_valuation: -40.65542522168166,
  },
  Philippines: {
    Date: "2016-01-01",
    Local_price: 131,
    Dollar_ex: 47.0225,
    Dollar_price: 2.785900366845659,
    Dollar_PPP: 26.572008113590265,
    Dollar_valuation: -43.49086476986492,
  },
  Poland: {
    Date: "2016-01-01",
    Local_price: 9.6,
    Dollar_ex: 4.0477,
    Dollar_price: 2.371717271536922,
    Dollar_PPP: 1.947261663286004,
    Dollar_valuation: -51.89214459357155,
  },
  Portugal: {
    Date: "2016-01-01",
    Local_price: 3,
    Dollar_ex: 0.9302325581395349,
    Dollar_price: 3.225,
    Dollar_PPP: 0.6085192697768763,
    Dollar_valuation: -34.58417849898579,
  },
  Russia: {
    Date: "2016-01-01",
    Local_price: 114,
    Dollar_ex: 74.655,
    Dollar_price: 1.5270243118344384,
    Dollar_PPP: 23.1237322515213,
    Dollar_valuation: -69.02587602769901,
  },
  Saudi_Arabia: {
    Date: "2016-01-01",
    Local_price: 12,
    Dollar_ex: 3.7543,
    Dollar_price: 3.196334869349812,
    Dollar_PPP: 2.4340770791075053,
    Dollar_valuation: -35.16562131136284,
  },
  Singapore: {
    Date: "2016-01-01",
    Local_price: 4.7,
    Dollar_ex: 1.43725,
    Dollar_price: 3.2701339363367543,
    Dollar_PPP: 0.9533468559837729,
    Dollar_valuation: -33.66868283292587,
  },
  South_Africa: {
    Date: "2016-01-01",
    Local_price: 28,
    Dollar_ex: 15.81375,
    Dollar_price: 1.7706110188917872,
    Dollar_PPP: 5.679513184584179,
    Dollar_valuation: -64.08496919083595,
  },
  South_Korea: {
    Date: "2016-01-01",
    Local_price: 4300,
    Dollar_ex: 1197.75,
    Dollar_price: 3.590064704654561,
    Dollar_PPP: 872.2109533468561,
    Dollar_valuation: -27.179214915728988,
  },
  Spain: {
    Date: "2016-01-01",
    Local_price: 3.5,
    Dollar_ex: 0.9302325581395349,
    Dollar_price: 3.7625,
    Dollar_PPP: 0.7099391480730224,
    Dollar_valuation: -23.68154158215009,
  },
  Sri_Lanka: {
    Date: "2016-01-01",
    Local_price: 350,
    Dollar_ex: 144.05,
    Dollar_price: 2.4297119055883374,
    Dollar_PPP: 70.99391480730223,
    Dollar_valuation: -50.71578284810675,
  },
  Sweden: {
    Date: "2016-01-01",
    Local_price: 45,
    Dollar_ex: 8.60185,
    Dollar_price: 5.2314327731825125,
    Dollar_PPP: 9.127789046653145,
    Dollar_valuation: 6.114255034128058,
  },
  Switzerland: {
    Date: "2016-01-01",
    Local_price: 6.5,
    Dollar_ex: 1.0088,
    Dollar_price: 6.443298969072165,
    Dollar_PPP: 1.3184584178498986,
    Dollar_valuation: 30.695719453796457,
  },
  Taiwan: {
    Date: "2016-01-01",
    Local_price: 69,
    Dollar_ex: 33.2315,
    Dollar_price: 2.076343228563261,
    Dollar_PPP: 13.995943204868155,
    Dollar_valuation: -57.88350449161742,
  },
  Thailand: {
    Date: "2016-01-01",
    Local_price: 112,
    Dollar_ex: 36.22,
    Dollar_price: 3.0922142462727775,
    Dollar_PPP: 22.718052738336716,
    Dollar_valuation: -37.277601495481186,
  },
  Turkey: {
    Date: "2016-01-01",
    Local_price: 10.25,
    Dollar_ex: 3.0096,
    Dollar_price: 3.4057682083997873,
    Dollar_PPP: 2.079107505070994,
    Dollar_valuation: -30.917480559842037,
  },
  UAE: {
    Date: "2016-01-01",
    Local_price: 13,
    Dollar_ex: 3.6731,
    Dollar_price: 3.5392447796139503,
    Dollar_PPP: 2.636916835699797,
    Dollar_valuation: -28.21004503825658,
  },
  Ukraine: {
    Date: "2016-01-01",
    Local_price: 36,
    Dollar_ex: 23.35,
    Dollar_price: 1.5417558886509635,
    Dollar_PPP: 7.302231237322515,
    Dollar_valuation: -68.72706108213056,
  },
  United_States: {
    Date: "2016-01-01",
    Local_price: 4.93,
    Dollar_ex: 1,
    Dollar_price: 4.93,
    Dollar_PPP: 1,
    Dollar_valuation: 0,
  },
  Uruguay: {
    Date: "2016-01-01",
    Local_price: 113,
    Dollar_ex: 30.185,
    Dollar_price: 3.7435812489647176,
    Dollar_PPP: 22.920892494929006,
    Dollar_valuation: -24.065289067652785,
  },
  Venezuela: {
    Date: "2016-01-01",
    Local_price: 132,
    Dollar_ex: 198.6986,
    Dollar_price: 0.6643227481220301,
    Dollar_PPP: 26.77484787018256,
    Dollar_valuation: -86.52489354722049,
  },
  Vietnam: {
    Date: "2016-01-01",
    Local_price: 60000,
    Dollar_ex: 22467.5,
    Dollar_price: 2.670524090352732,
    Dollar_PPP: 12170.385395537525,
    Dollar_valuation: -45.83115435389996,
  },
};

module.exports = server;
