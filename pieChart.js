// Mendapatkan referensi ke elemen canvas
const canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;
const context = canvas.getContext('2d');

const data = [
  { Provinsi: 'Aceh', Tahun: 2020, Produksi: 1861567 },
  { Provinsi: 'Sumatera Utara', Tahun: 2020, Produksi: 2076280 },
  { Provinsi: 'Jambi', Tahun: 2020, Produksi: 374376 },
  { Provinsi: 'Sumatera Barat', Tahun: 2020, Produksi: 1450839 },
  { Provinsi: 'Riau', Tahun: 2020, Produksi: 269344 },
  { Provinsi: 'Sumatera Selatan', Tahun: 2020, Produksi: 2696877 },
  { Provinsi: 'Bengkulu', Tahun: 2020, Produksi: 296925 },
  { Provinsi: 'Lampung', Tahun: 2020, Produksi: 2604913 },
];

const width = canvas.width;
const height = canvas.height;

// Membersihkan canvas
context.clearRect(0, 0, width, height);

context.fillStyle = 'black';
context.font = '24px Arial';
context.textAlign = 'center';
context.fillText('Produksi Padi Setiap Provinsi Tahun 2020', width / 2, 40);

// Filter data untuk tahun 2020
const latestYear = 2020;
const latestData = data.filter(item => item.Tahun === latestYear);

// Ekstrak nama provinsi dan nilai produksinya
const labels = latestData.map(item => item.Provinsi);
const productionData = latestData.map(item => item.Produksi);

// Menghitung total produksi
const totalProduction = productionData.reduce((acc, value) => acc + value, 0);

// Pengaturan awal untuk pie chart
const centerX = width / 2;
const centerY = height / 2;
const radius = Math.min(width, height) / 3;
let startAngle = 0;

// Warna untuk setiap slice
const colors = [
  'rgba(54, 62, 235, 0.6)',
  'rgba(255, 206, 86, 0.6)',
  'rgba(255, 99, 132, 0.6)',
  'rgba(75, 192, 192, 0.6)',
  'rgba(153, 102, 255, 0.6)',
  'rgba(255, 159, 64, 0.6)',
  'rgba(40, 230, 120, 0.6)',
  'rgba(250, 40, 240, 0.6)',
];

// Array untuk menyimpan posisi label
const labelPositions = [];

// Fungsi untuk memeriksa tabrakan antara dua label
function checkCollision(pos1, pos2) {
  return (
    pos1.x < pos2.x + pos2.width &&
    pos1.x + pos1.width > pos2.x &&
    pos1.y < pos2.y + pos2.height &&
    pos1.y + pos1.height > pos2.y
  );
}

// Menggambar setiap slice
latestData.forEach((item, index) => {
  const sliceAngle = (item.Produksi / totalProduction) * 2 * Math.PI;
  const endAngle = startAngle + sliceAngle;

  // Menggambar slice
  context.beginPath();
  context.moveTo(centerX, centerY);
  context.arc(centerX, centerY, radius, startAngle, endAngle);
  context.closePath();
  context.fillStyle = colors[index % colors.length];
  context.fill();

  // Menambahkan label dan persentase di luar lingkaran
  const midAngle = startAngle + sliceAngle / 2;
  const labelX = centerX + (radius + 40) * Math.cos(midAngle);
  const labelY = centerY + (radius + 40) * Math.sin(midAngle);

  // Menambahkan persentase
  const percentage = '(' + ((item.Produksi / totalProduction) * 100).toFixed(2) + '%)';

  // Menyimpan posisi label untuk pengecekan tabrakan
  let labelPosition = { x: labelX, y: labelY, width: context.measureText(item.Provinsi).width, height: 16 };
  let percentPosition = { x: labelX, y: labelY + 20, width: context.measureText(percentage).width, height: 16 };

  // Mengatur posisi label agar tidak bertabrakan
  let offset = 0;
  labelPositions.forEach(pos => {
    while (checkCollision(labelPosition, pos) || checkCollision(percentPosition, pos)) {
      offset += 20;
      labelPosition.y = labelY + offset;
      percentPosition.y = labelY + 20 + offset;
    }
  });

  labelPositions.push(labelPosition);
  labelPositions.push(percentPosition);

  // Menambahkan teks label
  context.fillStyle = 'black';
  context.font = '16px Arial';
  context.textAlign = midAngle > Math.PI ? 'right' : 'left';
  context.fillText(item.Provinsi, labelPosition.x, labelPosition.y);

  // Menambahkan persentase
  context.fillText(percentage, percentPosition.x, percentPosition.y);

  // Update start angle untuk slice berikutnya
  startAngle = endAngle;
});
