import React from "react";
import ReactCountryFlag from "react-country-flag";

const Converter = ({
  toFrom,
  onCurrencyChange,
  onAmountChange,
  amount,
  selectedCurrency,
  rateList,
}) => {
  const handleCurrencyChange = (e) => {
    onCurrencyChange(e.target.value);
  };

  const handleAmountChange = (e) => {
    onAmountChange(Number(e.target.value) || 0);
  };

  const getCountryCode = (currencyCode) => {
    const currencyCountryCodes = { AED: "AE", AFN: "AF", ALL: "AL", AMD: "AM", ANG: "CW", AOA: "AO", ARS: "AR", AUD: "AU", AWG: "AW", AZN: "AZ", BAM: "BA", BBD: "BB", BDT: "BD", BGN: "BG", BHD: "BH", BIF: "BI", BMD: "BM", BND: "BN", BOB: "BO", BRL: "BR", BSD: "BS", BTN: "BT", BWP: "BW", BYN: "BY", BZD: "BZ", CAD: "CA", CDF: "CD", CHF: "CH", CLP: "CL", CNY: "CN", COP: "CO", CRC: "CR", CUP: "CU", CVE: "CV", CZK: "CZ", DJF: "DJ", DKK: "DK", DOP: "DO", DZD: "DZ", EGP: "EG", ERN: "ER", ETB: "ET", EUR: "EU", FJD: "FJ", FKP: "FK", FOK: "FO", GBP: "GB", GEL: "GE", GGP: "GG", GHS: "GH", GIP: "GI", GMD: "GM", GNF: "GN", GTQ: "GT", GYD: "GY", HKD: "HK", HNL: "HN", HRK: "HR", HTG: "HT", HUF: "HU", IDR: "ID", ILS: "IL", IMP: "IM", INR: "IN", IQD: "IQ", IRR: "IR", ISK: "IS", JEP: "JE", JMD: "JM", JOD: "JO", JPY: "JP", KES: "KE", KGS: "KG", KHR: "KH", KID: "KI", KMF: "KM", KRW: "KR", KWD: "KW", KYD: "KY", KZT: "KZ", LAK: "LA", LBP: "LB", LKR: "LK", LRD: "LR", LSL: "LS", LYD: "LY", MAD: "MA", MDL: "MD", MGA: "MG", MKD: "MK", MMK: "MM", MNT: "MN", MOP: "MO", MRU: "MR", MUR: "MU", MVR: "MV", MWK: "MW", MXN: "MX", MYR: "MY", MZN: "MZ", NAD: "NA", NGN: "NG", NIO: "NI", NOK: "NO", NPR: "NP", NZD: "NZ", OMR: "OM", PAB: "PA", PEN: "PE", PGK: "PG", PHP: "PH", PKR: "PK", PLN: "PL", PYG: "PY", QAR: "QA", RON: "RO", RSD: "RS", RUB: "RU", RWF: "RW", SAR: "SA", SBD: "SB", SCR: "SC", SDG: "SD", SEK: "SE", SGD: "SG", SHP: "SH", SLE: "SL", SLL: "SL", SOS: "SO", SRD: "SR", SSP: "SS", STN: "ST", SYP: "SY", SZL: "SZ", THB: "TH", TJS: "TJ", TMT: "TM", TND: "TN", TOP: "TO", TRY: "TR", TTD: "TT", TVD: "TV", TWD: "TW", TZS: "TZ", UAH: "UA", UGX: "UG", USD: "US", UYU: "UY", UZS: "UZ", VES: "VE", VND: "VN", VUV: "VU", WST: "WS", XAF: "CM", XCD: "LC", XDR: "IMF", XOF: "SN", XPF: "PF", YER: "YE", ZAR: "ZA", ZMW: "ZM", ZWL: "ZW"  };
    return currencyCountryCodes[currencyCode];
  };

  return (
    <div className="flex flex-col md:mt-0 my-10 sm:flex-row justify-between items-center mb-4">
      <div className="flex flex-col w-full sm:w-auto">
        <label className="text-gray-700 font-medium tracking-wider">
          {toFrom} - ({selectedCurrency})
        </label>
        <input
          type="number"
          onChange={handleAmountChange}
          value={amount}
          placeholder="Enter Amount"
          className="w-full sm:w-60 md:w-40 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-indigo-500 transition duration-300"
        />
      </div>
      <div className="flex flex-col w-full sm:w-auto">
        <label className="text-gray-700 font-medium tracking">Select Currency</label>
        <div className="flex items-center">
          <span className="h-8 w-8 rounded-full flex justify-center items-center border mr-2">
            <ReactCountryFlag
              style={{ width: '1.2rem', height: '1.2rem' }}
              countryCode={getCountryCode(selectedCurrency)}
              svg
              title={selectedCurrency}
            />
          </span>
          <select
            onChange={handleCurrencyChange}
            value={selectedCurrency}
            name="chooseCurrency"
            id="currenciesList"
            className="w-full sm:w-60 md:w-40 border border-gray-300 rounded px-2 py-1 bg-white focus:outline-none focus:border-indigo-500 transition duration-300"
          >
            {Object.keys(rateList).map((currval) => (
              <option key={currval} value={currval}>
                {currval}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Converter;
