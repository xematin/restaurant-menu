import { QRCodeCanvas } from 'qrcode.react';

function App() {
  const menuItem = {
    name: "همبرگر ویژه",
    description: "همبرگر گریل‌شده با پنیر چدار، کاهو، گوجه و سس مخصوص",
    price: "250,000 تومان",
    image: "https://via.placeholder.com/300x200?text=Burger"
  };

  const qrCodeUrl = "http://127.0.0.1:4040/"; // URL صفحه فعلی برای QR کد

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">منوی رستوران</h1>
      
      {/* آیتم منو */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <img
          src={menuItem.image}
          alt={menuItem.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2">{menuItem.name}</h2>
        <p className="text-gray-600 mb-2">{menuItem.description}</p>
        <p className="text-lg font-bold text-green-600">{menuItem.price}</p>
      </div>

      {/* QR کد */}
      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold mb-4">برای مشاهده منو، QR کد را اسکن کنید</h2>
        <QRCodeCanvas value={qrCodeUrl} size={200} />
      </div>
    </div>
  );
}

export default App;