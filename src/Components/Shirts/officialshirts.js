import React, { useState } from 'react';
import Official1 from '../../Assets/Official/official1.jpg';
import Official2 from '../../Assets/Official/official2.jpg';
import Official3 from '../../Assets/Official/official3.jpg';
import Official4 from '../../Assets/Official/official4.jpg';
import Official5 from '../../Assets/Official/official5.jpg';
import Official6 from '../../Assets/Official/official6.jpg';
import Official7 from '../../Assets/Official/official7.jpg';
import Official8 from '../../Assets/Official/official8.jpg';
import Official9 from '../../Assets/Official/official9.jpg';
import Official10 from '../../Assets/Official/official10.jpg';
import Official11 from '../../Assets/Official/official11.jpg';
import Official12 from '../../Assets/Official/official12.jpg';
import { CheckCircle, XCircle, ShoppingCart } from 'lucide-react';

const PaymentPopup = ({ item, onClose }) => {
  const [amount, setAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const paymentDetails = {
    paybill: '542542',
    account: '378179'
  };

  const generatePaymentFile = () => {
    const content = `OFFICIAL SHIRT PURCHASE\n---------------------\nItem: ${item?.name}\nProduct ID: ${item?.id}\nPaybill: ${paymentDetails.paybill}\nAccount: ${paymentDetails.account}\nAmount Paid: ${amount || '________'}\nStandard Price: ${item?.price}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `shirt_payment_${item?.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setPaymentSuccess(true);
    setTimeout(onClose, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl w-[95%] max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          {paymentSuccess ? (
            <>
              <CheckCircle className="w-8 h-8 text-green-500" />
              Payment Verified!
            </>
          ) : (
            `${item?.name} Purchase`
          )}
        </h2>

        {!paymentSuccess ? (
          <>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                <span className="font-medium">Paybill:</span>
                <span className="font-mono text-blue-600 font-bold">{paymentDetails.paybill}</span>
              </div>
              
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                <span className="font-medium">Account:</span>
                <span className="font-mono text-blue-600 font-bold">{paymentDetails.account}</span>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Standard Price:</span>
                  <span className="font-mono text-green-600 font-bold">{item?.price}</span>
                </div>
              </div>
              
              <input
                type="number"
                placeholder="Enter amount (Ksh)"
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1800"
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={generatePaymentFile}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Confirm Payment
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
              >
                <XCircle className="w-5 h-5" />
                Cancel
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-green-600">
            <p>Transaction receipt downloaded successfully</p>
            <p className="text-sm text-gray-500 mt-2">Closing automatically...</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Official = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedShirt, setSelectedShirt] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const shirts = [
    { id: 1, image: Official1, name: 'Premium Official Shirt', price: 'Ksh 1,800' },
    { id: 2, image: Official2, name: 'Premium Official Shirt', price: 'Ksh 1,800' },
    { id: 3, image: Official3, name: 'Premium Official Shirt', price: 'Ksh 1,800' },
    { id: 4, image: Official4, name: 'Premium Official Shirt', price: 'Ksh 1,800' },
    { id: 5, image: Official5, name: 'Premium Official Shirt', price: 'Ksh 1,800' },
    { id: 6, image: Official6, name: 'Premium Official Shirt', price: 'Ksh 1,800' },
    { id: 7, image: Official7, name: 'Premium Official Shirt', price: 'Ksh 1,800' },
    { id: 8, image: Official8, name: 'Premium Official Shirt', price: 'Ksh 1,800' },
    { id: 9, image: Official9, name: 'Premium Official Shirt', price: 'Ksh 1,800' },
    { id: 10, image: Official10, name: 'Premium Official Shirt', price: 'Ksh 1,800' },
    { id: 11, image: Official11, name: 'Premium Official Shirt', price: 'Ksh 1,800' },
    { id: 12, image: Official12, name: 'Premium Official Shirt', price: 'Ksh 1,800' }
  ];

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    alert(`${item.name} added to cart`);
  };

  return (
    <section className="p-6 sm:p-10 bg-gray-50 min-h-screen">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Professional Office Attire
        </h1>
        <p className="text-gray-600 text-lg">
          Premium quality shirts for corporate excellence
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {shirts.map((shirt) => (
          <article 
            key={shirt.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-square bg-gray-100 p-5 flex items-center justify-center">
              <img
                src={shirt.image}
                alt={shirt.name}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5 text-center space-y-4">
              <h3 className="text-xl font-bold text-gray-900">{shirt.name}</h3>
              <p className="text-blue-600 font-bold text-xl">{shirt.price}</p>
              <button
                onClick={() => {
                  setSelectedShirt(shirt);
                  setShowPayment(true);
                }}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Purchase Now
              </button>
              <button
                onClick={() => handleAddToCart(shirt)}
                className="w-full bg-green-600 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </div>

      {showPayment && (
        <PaymentPopup 
          item={selectedShirt}
          onClose={() => {
            setShowPayment(false);
            setSelectedShirt(null);
          }}
        />
      )}
    </section>
  );
};

export default Official;
