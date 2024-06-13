document.addEventListener('DOMContentLoaded', function () {
    // Data manual untuk scatter plot
    const rawData = [
        { Provinsi: "Aceh", Tahun: 2015, CurahHujan: 1575.00, Produksi: 1956940.00 },
        { Provinsi: "Aceh", Tahun: 2016, CurahHujan: 1096.00, Produksi: 2180754.00 },
        { Provinsi: "Aceh", Tahun: 2017, CurahHujan: 1905.90, Produksi: 2478922.00 },
        { Provinsi: "Aceh", Tahun: 2018, CurahHujan: 1427.80, Produksi: 1751996.94 },
        { Provinsi: "Aceh", Tahun: 2019, CurahHujan: 1931.40, Produksi: 1714437.60 },
        { Provinsi: "Aceh", Tahun: 2020, CurahHujan: 1619.20, Produksi: 1861567.10 },

        { Provinsi: "Sumatera Utara", Tahun: 2015, CurahHujan: 975.90, Produksi: 4044829.00 },
        { Provinsi: "Sumatera Utara", Tahun: 2016, CurahHujan: 2384.00, Produksi: 4387035.90 },
        { Provinsi: "Sumatera Utara", Tahun: 2017, CurahHujan: 3190.00, Produksi: 4669777.50 },
        { Provinsi: "Sumatera Utara", Tahun: 2018, CurahHujan: 2431.00, Produksi: 2108284.72 },
        { Provinsi: "Sumatera Utara", Tahun: 2019, CurahHujan: 1401.60, Produksi: 2078901.59 },
        { Provinsi: "Sumatera Utara", Tahun: 2020, CurahHujan: 1648.30, Produksi: 2076280.01 },


        
        { Provinsi: "Sumatera Barat", Tahun: 2015, CurahHujan: 3548.00, Produksi: 2550609.00 },
        { Provinsi: "Sumatera Barat", Tahun: 2016, CurahHujan: 4205.20, Produksi: 2487929.00 },
        { Provinsi: "Sumatera Barat", Tahun: 2017, CurahHujan: 4553.00, Produksi: 2810425.00 },
        { Provinsi: "Sumatera Barat", Tahun: 2018, CurahHujan: 327.33, Produksi: 1483076.48 },
        { Provinsi: "Sumatera Barat", Tahun: 2019, CurahHujan: 4757.50, Produksi: 1482996.01 },
        { Provinsi: "Sumatera Barat", Tahun: 2020, CurahHujan: 4072.70, Produksi: 1450839.74 },


        { Provinsi: "Riau", Tahun: 2016, CurahHujan: 2105.60, Produksi: 325826.00 },
        { Provinsi: "Riau", Tahun: 2017, CurahHujan: 2982.90, Produksi: 337421.00 },
        { Provinsi: "Riau", Tahun: 2018, CurahHujan: 1837.10, Produksi: 266375.53 },
        { Provinsi: "Riau", Tahun: 2019, CurahHujan: 1608.30, Produksi: 230873.97 },
        { Provinsi: "Riau", Tahun: 2020, CurahHujan: 2584.90, Produksi: 269344.05 },

        
        { Provinsi: "Jambi", Tahun: 2015, CurahHujan: 1694.90, Produksi: 541486.00 },
        { Provinsi: "Jambi", Tahun: 2016, CurahHujan: 1502.40, Produksi: 642095.00 },
        { Provinsi: "Jambi", Tahun: 2017, CurahHujan: 2193.20, Produksi: 678127.00 },
        { Provinsi: "Jambi", Tahun: 2018, CurahHujan: 2182.30, Produksi: 383045.74 },
        { Provinsi: "Jambi", Tahun: 2019, CurahHujan: 1773.40, Produksi: 309932.68 },
        { Provinsi: "Jambi", Tahun: 2020, CurahHujan: 2303.80, Produksi: 374376.27 },


        // Data Sumatera Selatan
        { Provinsi: "Sumatera Selatan", Tahun: 2015, CurahHujan: 1947.20, Produksi: 4247922.00 },
        { Provinsi: "Sumatera Selatan", Tahun: 2016, CurahHujan: 3477.90, Produksi: 4881089.00 },
        { Provinsi: "Sumatera Selatan", Tahun: 2017, CurahHujan: 2489.50, Produksi: 4807430.00 },
        { Provinsi: "Sumatera Selatan", Tahun: 2018, CurahHujan: 2252.40, Produksi: 2994191.84 },
        { Provinsi: "Sumatera Selatan", Tahun: 2019, CurahHujan: 1655.50, Produksi: 2603396.24 },
        { Provinsi: "Sumatera Selatan", Tahun: 2020, CurahHujan: 2300.20, Produksi: 2696877.46 },


        { Provinsi: "Bengkulu", Tahun: 2015, CurahHujan: 2668.90, Produksi: 578654.00 },
        { Provinsi: "Bengkulu", Tahun: 2016, CurahHujan: 3350.10, Produksi: 629224.00 },
        { Provinsi: "Bengkulu", Tahun: 2017, CurahHujan: 3949.80, Produksi: 714017.00 },
        { Provinsi: "Bengkulu", Tahun: 2018, CurahHujan: 3649.90, Produksi: 288810.52 },
        { Provinsi: "Bengkulu", Tahun: 2019, CurahHujan: 1786.20, Produksi: 296472.07 },
        { Provinsi: "Bengkulu", Tahun: 2020, CurahHujan: 4144.00, Produksi: 296925.16 },


        // Data Lampung
        { Provinsi: "Lampung", Tahun: 2015, CurahHujan: 1628.10, Produksi: 3641895.00 },
        { Provinsi: "Lampung", Tahun: 2016, CurahHujan: 2317.60, Produksi: 3831923.00 },
        { Provinsi: "Lampung", Tahun: 2017, CurahHujan: 1825.10, Produksi: 4090654.00 },
        { Provinsi: "Lampung", Tahun: 2018, CurahHujan: 1385.80, Produksi: 2488641.91 },
        { Provinsi: "Lampung", Tahun: 2019, CurahHujan: 1706.40, Produksi: 2164089.33 },
        { Provinsi: "Lampung", Tahun: 2020, CurahHujan: 2211.30, Produksi: 2604913.29 },


    ];

    // Fungsi untuk memproses data manual
    const processData = (data) => {
        const formattedData = {};

        data.forEach(entry => {
            const provinsi = entry.Provinsi;
            const tahun = entry.Tahun;
            const curahHujan = entry.CurahHujan;
            const produksi = entry.Produksi;

            if (!formattedData[provinsi]) {
                formattedData[provinsi] = { x: [], y: [], mode: 'markers', type: 'scatter', name: provinsi };
            }

            formattedData[provinsi].x.push(curahHujan);
            formattedData[provinsi].y.push(produksi);
        });

        return Object.values(formattedData);
    };

    // Membuat layout untuk plot
    const layout = {
        title: 'Hubungan antara Curah Hujan dan Produksi pada Tiap Provinsi (2015-2020)',
        xaxis: { title: 'Curah Hujan (mm)' },
        yaxis: { title: 'Produksi' }
    };

    // Fungsi untuk menggambar Scatter Plot
    window.drawScatterPlot = function () {
        // Proses data manual dan buat chart
        const data = processData(rawData);
        Plotly.newPlot('visualization', data, layout);
    };
});
