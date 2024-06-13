// Function to draw Pie Chart
function drawPieChart() {
  const data = [
    { Provinsi: 'Aceh', Produksi: 1861567 },
    { Provinsi: 'Sumatera Utara', Produksi: 2076280 },
    { Provinsi: 'Jambi', Produksi: 374376 },
    { Provinsi: 'Sumatera Barat', Produksi: 1450839 },
    { Provinsi: 'Riau', Produksi: 269344 },
    { Provinsi: 'Sumatera Selatan', Produksi: 2696877 },
    { Provinsi: 'Bengkulu', Produksi: 296925 },
    { Provinsi: 'Lampung', Produksi: 2604913 },
  ];

  // Data untuk pie chart
  const pieData = {
    labels: data.map(item => item.Provinsi),
    values: data.map(item => item.Produksi),
    type: 'pie',
    marker: {
      colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#522B29', '#C52184', '#FF8484']
    }
  };

  const pieLayout = {
    title: 'Produksi Padi Setiap Provinsi Tahun 2020'
  };

  Plotly.newPlot('visualization', [pieData], pieLayout);
}
