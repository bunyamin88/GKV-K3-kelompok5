const barPlot = document.getElementById('barplot')

const data = [{
    x: [ 'Sumatera Selatan', 'Lampung', 'Sumatera Utara', 'Aceh', 'Sumatera Barat', 'Jambi', 'Riau', 'Bengkulu' ],
    y: [ 551320.76, 545149.05, 388591.22, 317869.41, 295664.47, 84772.93, 64733.13, 64137.28 ], 
    type: 'bar', 
    marker: {
        color: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '522B29', 'C52184', 'FF8484']
    }
}]

const layout = {
    title: 'Lahan Panen Setiap Pronvinsi Tahun 2020',
    xaxis: {
        title: {
            font: {
                size: 14
            }
        },
        tickmode: 'array',
        tickvals: [ 'Sumatera Selatan', 'Lampung', 'Sumatera Utara', 'Aceh', 'Sumatera Barat', 'Jambi', 'Riau', 'Bengkulu' ],

    },
    yaxis: { title: 'Lahan Panen' },
    font: { size: 14 }
}

const config = { responsive: true }
Plotly.newPlot(barPlot, data, layout, config)