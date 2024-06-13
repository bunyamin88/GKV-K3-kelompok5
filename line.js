LINESCATTER = document.getElementById('linechart');
//Data pada plot untuk absis-x, dan ordinat-y
var data = [
    {
        x: [2015,2016,2017,2018,2019,2020],
        y: [80,83.32,85.57,83.98,83.9,80.82],
        mode: 'lines', // dapat diganti modenya markers
        type: 'scatter',
        name: 'Aceh' // Judul untuk garis pertama
    },
    {
        x: [2015, 2016, 2017, 2018, 2019, 2020],
        y: [86.9,82,84,80,86.53,83.76],
        mode: 'lines', // dapat diganti modenya markers
        type: 'scatter',
        name: 'Sumatera Utara' // Judul untuk garis kedua
    },
    {
        x: [2015, 2016, 2017, 2018, 2019, 2020],
        y: [84,76.49,75.11,82.71,87.73,85.22],
        mode: 'lines', // dapat diganti modenya markers
        type: 'scatter',
        name: 'Sumatera Barat' // Judul untuk garis ketiga
    },
    {
        x: [2015, 2016, 2017, 2018, 2019, 2020],
        y: [82.1,83.84,83.69,82.23,81.44,78.24],
        mode: 'lines', // dapat diganti modenya markers
        type: 'scatter',
        name: 'Jambi' // Judul untuk garis ketiga
    },
    {
        x: [2015, 2016, 2017, 2018, 2019, 2020],
        y: [79.5,82.22,81.08,77.66,85.13,81.1],
        mode: 'lines', // dapat diganti modenya markers
        type: 'scatter',
        name: 'Sumatera Selatan' // Judul untuk garis ketiga
    },
    {
        x: [2015, 2016, 2017, 2018, 2019, 2020],
        y: [83.2,83.38,84.2,83.79,83.26,80.18],
        mode: 'lines', // dapat diganti modenya markers
        type: 'scatter',
        name: 'Bengkulu' // Judul untuk garis ketiga
    },
    {
        x: [2015, 2016, 2017, 2018, 2019, 2020],
        y: [78.9,79.4,77.04,76.05,78.03,75.8],
        mode: 'lines', // dapat diganti modenya markers
        type: 'scatter',
        name: 'Lampung' // Judul untuk garis ketiga
    }
];

var layout = {
    font: { size: 18 },
    yaxis : {
        range : [70, 90],
        domain: [1, 0.9], // Area relatif sumbu y, semakin kecil nilai domain[1] maka semakin tinggi sumbu y
        title : 'Kelembapan'

    },
    xaxis: {
        tickvals: [2015, 2016, 2017, 2018, 2019, 2020], // Nilai-nilai pada sumbu x
        ticktext: ['&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2015', 2016, 2017, 2018, 2019, 2020],// Teks yang sesuai untuk setiap nilai pada sumbu x
        title : 'Tahun'
    },
    title: 'Kelembapan Tiap Provinsi Tahun 2015-2020' // Judul grafik
};

var config = { responsive: true };

Plotly.newPlot(LINESCATTER, data, layout, config);


