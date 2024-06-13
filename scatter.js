document.addEventListener('DOMContentLoaded', function () {
    // Warna tetap untuk setiap provinsi
    const provinsiColors = {
        "Aceh": "#FF0000", // Red
        "Sumatera Utara": "#00FF00", // Green
        "Sumatera Barat": "#0000FF", // Blue
        "Riau": "#FFFF00", // Yellow
        "Jambi": "#FF00FF", // Magenta
        "Sumatera Selatan": "#00FFFF", // Cyan
        "Bengkulu": "#800080", // Purple
        "Lampung": "#FFA500", // Orange
    };

    // Data manual untuk scatter plot
    const rawData = [
        // Data Aceh
        { Provinsi: "Aceh", Tahun: 2015, CurahHujan: 1000, Produksi: 500 },
        { Provinsi: "Aceh", Tahun: 2016, CurahHujan: 1100, Produksi: 520 },
        { Provinsi: "Aceh", Tahun: 2017, CurahHujan: 1050, Produksi: 510 },
        { Provinsi: "Aceh", Tahun: 2018, CurahHujan: 1200, Produksi: 530 },
        { Provinsi: "Aceh", Tahun: 2019, CurahHujan: 1250, Produksi: 540 },
        { Provinsi: "Aceh", Tahun: 2020, CurahHujan: 1300, Produksi: 550 },

        // Data Sumatera Utara
        { Provinsi: "Sumatera Utara", Tahun: 2015, CurahHujan: 1200, Produksi: 600 },
        { Provinsi: "Sumatera Utara", Tahun: 2016, CurahHujan: 1300, Produksi: 620 },
        { Provinsi: "Sumatera Utara", Tahun: 2017, CurahHujan: 1250, Produksi: 610 },
        { Provinsi: "Sumatera Utara", Tahun: 2018, CurahHujan: 1400, Produksi: 630 },
        { Provinsi: "Sumatera Utara", Tahun: 2019, CurahHujan: 1450, Produksi: 640 },
        { Provinsi: "Sumatera Utara", Tahun: 2020, CurahHujan: 1500, Produksi: 650 },

        // Data Sumatera Barat
        { Provinsi: "Sumatera Barat", Tahun: 2015, CurahHujan: 900, Produksi: 450 },
        { Provinsi: "Sumatera Barat", Tahun: 2016, CurahHujan: 950, Produksi: 460 },
        { Provinsi: "Sumatera Barat", Tahun: 2017, CurahHujan: 1000, Produksi: 470 },
        { Provinsi: "Sumatera Barat", Tahun: 2018, CurahHujan: 1050, Produksi: 480 },
        { Provinsi: "Sumatera Barat", Tahun: 2019, CurahHujan: 1100, Produksi: 490 },
        { Provinsi: "Sumatera Barat", Tahun: 2020, CurahHujan: 1150, Produksi: 500 },

        // Data Riau
        { Provinsi: "Riau", Tahun: 2015, CurahHujan: 800, Produksi: 400 },
        { Provinsi: "Riau", Tahun: 2016, CurahHujan: 850, Produksi: 410 },
        { Provinsi: "Riau", Tahun: 2017, CurahHujan: 900, Produksi: 420 },
        { Provinsi: "Riau", Tahun: 2018, CurahHujan: 950, Produksi: 430 },
        { Provinsi: "Riau", Tahun: 2019, CurahHujan: 1000, Produksi: 440 },
        { Provinsi: "Riau", Tahun: 2020, CurahHujan: 1050, Produksi: 450 },

        // Data Jambi
        { Provinsi: "Jambi", Tahun: 2015, CurahHujan: 700, Produksi: 350 },
        { Provinsi: "Jambi", Tahun: 2016, CurahHujan: 750, Produksi: 360 },
        { Provinsi: "Jambi", Tahun: 2017, CurahHujan: 800, Produksi: 370 },
        { Provinsi: "Jambi", Tahun: 2018, CurahHujan: 850, Produksi: 380 },
        { Provinsi: "Jambi", Tahun: 2019, CurahHujan: 900, Produksi: 390 },
        { Provinsi: "Jambi", Tahun: 2020, CurahHujan: 950, Produksi: 400 },

        // Data Sumatera Selatan
        { Provinsi: "Sumatera Selatan", Tahun: 2015, CurahHujan: 1100, Produksi: 550 },
        { Provinsi: "Sumatera Selatan", Tahun: 2016, CurahHujan: 1150, Produksi: 560 },
        { Provinsi: "Sumatera Selatan", Tahun: 2017, CurahHujan: 1200, Produksi: 570 },
        { Provinsi: "Sumatera Selatan", Tahun: 2018, CurahHujan: 1250, Produksi: 580 },
        { Provinsi: "Sumatera Selatan", Tahun: 2019, CurahHujan: 1300, Produksi: 590 },
        { Provinsi: "Sumatera Selatan", Tahun: 2020, CurahHujan: 1350, Produksi: 600 },

        // Data Bengkulu
        { Provinsi: "Bengkulu", Tahun: 2015, CurahHujan: 1000, Produksi: 500 },
        { Provinsi: "Bengkulu", Tahun: 2016, CurahHujan: 1050, Produksi: 510 },
        { Provinsi: "Bengkulu", Tahun: 2017, CurahHujan: 1100, Produksi: 520 },
        { Provinsi: "Bengkulu", Tahun: 2018, CurahHujan: 1150, Produksi: 530 },
        { Provinsi: "Bengkulu", Tahun: 2019, CurahHujan: 1200, Produksi: 540 },
        { Provinsi: "Bengkulu", Tahun: 2020, CurahHujan: 1250, Produksi: 550 },

        // Data Lampung
        { Provinsi: "Lampung", Tahun: 2015, CurahHujan: 900, Produksi: 450 },
        { Provinsi: "Lampung", Tahun: 2016, CurahHujan: 950, Produksi: 460 },
        { Provinsi: "Lampung", Tahun: 2017, CurahHujan: 1000, Produksi: 470 },
        { Provinsi: "Lampung", Tahun: 2018, CurahHujan: 1050, Produksi: 480 },
        { Provinsi: "Lampung", Tahun: 2019, CurahHujan: 1100, Produksi: 490 },
        { Provinsi: "Lampung", Tahun: 2020, CurahHujan: 1150, Produksi: 500 },
    ];

    // Fungsi untuk memproses data manual
    const processData = (data) => {
        const formattedData = {};

        data.forEach(entry => {
            const provinsi = entry.Provinsi;
            const tahun = parseInt(entry.Tahun);
            const curahHujan = parseFloat(entry.CurahHujan);
            const produksi = parseFloat(entry.Produksi);

            if (tahun >= 2015 && tahun <= 2020) {
                if (!formattedData[provinsi]) {
                    formattedData[provinsi] = [];
                }
                formattedData[provinsi].push({ x: curahHujan, y: produksi });
            }
        });

        return formattedData;
    };

    // Membuat dataset untuk tiap provinsi
    const createDatasets = (data) => {
        const datasets = Object.keys(data).map(provinsi => ({
            label: provinsi,
            data: data[provinsi],
            backgroundColor: provinsiColors[provinsi] || getRandomColor(),
            borderColor: 'transparent'
        }));

        return datasets;
    };

    // Fungsi untuk mendapatkan warna acak
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Membuat chart setelah data diambil
    const createChart = (data) => {
        const datasets = createDatasets(data);

        const ctx = document.getElementById('scatterPlot').getContext('2d');
        new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: datasets
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Hubungan antara Curah Hujan dan Produksi pada Tiap Provinsi (2015-2020)',
                        font: {
                            size: 18
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                const dataset = tooltipItem.dataset;
                                const dataPoint = dataset.data[tooltipItem.dataIndex];
                                return `${dataset.label}: Curah Hujan: ${dataPoint.x} mm, Produksi: ${dataPoint.y}`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        title: {
                            display: true,
                            text: 'Curah Hujan (mm)',
                            font: {
                                size: 14
                            }
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Produksi',
                            font: {
                                size: 14
                            }
                        }
                    }
                }
            }
        });
    };

    // Proses data manual dan buat chart
    const data = processData(rawData);
    createChart(data);
});
