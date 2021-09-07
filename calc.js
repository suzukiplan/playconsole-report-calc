if (process.argv.length < 3) {
    console.log("usage: node calc path-to-PlayStore_xxxxxx.csv");
    process.exit(1);
}

const csv = require('csvtojson');
const path = process.argv[2];

csv().fromFile(path).then((records) => {
    const result = {};
    for (var i = 0; i < records.length; i++) {
        const record = records[i];
        const key = record["Product id"] + ": " + record["Sku Id"];
        if (!result[key]) {
            result[key] = { purchased: 0, amount: 0, countries: {} };
        }
        switch (record["Transaction Type"]) {
            case "Charge": {
                result[key].purchased++;
                const cc = record["Buyer Country"];
                if (!result[key].countries[cc]) {
                    result[key].countries[cc] = 1;
                } else {
                    result[key].countries[cc]++;
                }
                break;
            }
            case "Google fee":
                break;
            case "Charge refund":
                result[key].purchased--;
                break;
            case "Google fee refund":
                break;
            default:
                console.error("Detected an unknown transaction type: " + record["Transaction Type"] + " (line: " + (i + 1) + ")");
                process.exit(255);
        }
        result[key].amount += parseFloat(record["Amount (Merchant Currency)"]);
    }
    console.dir(result);
});

