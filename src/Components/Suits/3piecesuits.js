import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, ShoppingCart } from 'lucide-react';
import ThreePiece1 from '../../Assets/Suits/threepiece1.jpg';
import ThreePiece2 from '../../Assets/Suits/threepiece2.jpg';
import ThreePiece3 from '../../Assets/Suits/threepiece3.jpg';
import Threepiece4 from '../../Assets/Suits/threepiece4.jpg';
import Threepiece5 from '../../Assets/Suits/threepiece5.jpg';
import Threepiece6 from '../../Assets/Suits/threepiece6.jpg';
import Threepiece7 from '../../Assets/Suits/threepiece7.jpg';
import Threepiece8 from '../../Assets/Suits/threepiece8.jpg';
import Threepiece9 from '../../Assets/Suits/threepiece9.jpg';
import Photo4 from '../../Assets/Appolo/photo4.jpg';
import Photo5 from '../../Assets/Appolo/photo5.jpg';
import Photo6 from '../../Assets/Appolo/photo6.jpg';

const PaymentFileGenerator = ({ item, onClose }) => {
  const paybillNumber = '542542';
  const accountNumber = '378179';
  const [amount, setAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleDownload = () => {
    const content = `
Payment Details
---------------
Item: Three Piece Suit
Paybill: ${paybillNumber}
Account: ${accountNumber}
Amount: ${amount || '[Enter amount here]'}
Standard Price: ${item?.price || 'Ksh 13,000'}
`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'three_piece_payment.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setPaymentSuccess(true);
    setTimeout(onClose, 1500);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          {paymentSuccess ? (
            <>
              <CheckCircle className="w-6 h-6 text-green-500" />
              Payment Verified!
            </>
          ) : (
            'Three Piece Suit Purchase'
          )}
        </h2>

        {!paymentSuccess ? (
          <>
            <div className="mb-4 space-y-2">
              <p className="text-sm font-medium">Paybill: {paybillNumber}</p>
              <p className="text-sm font-medium">Account: {accountNumber}</p>
              <p className="text-green-600 font-bold">Price: {item?.price || 'Ksh 13,000'}</p>
            </div>
            <input
              type="text"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full mb-4 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="flex flex-col gap-2">
              <button
                onClick={handleDownload}
                className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Confirm Payment
              </button>
              <button
                onClick={onClose}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
              >
                <XCircle className="w-5 h-5" />
                Cancel
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-green-600 text-sm font-medium">
            Payment details downloaded successfully
          </p>
        )}
      </div>
    </div>
  );
};

const ThreePieceSuits = () => {
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);
  const [selectedSuit, setSelectedSuit] = useState(null);
  const [cart, setCart] = useState([]);

  const threePieceSuits = [
    { id: 1, image: ThreePiece1, price: 'Ksh 13,000' },
    { id: 2, image: ThreePiece2, price: 'Ksh 13,000' },
    { id: 3, image: ThreePiece3, price: 'Ksh 13,000' },
    { id: 4, image: Threepiece4, price: 'Ksh 13,000' },
    { id: 5, image: Threepiece5, price: 'Ksh 13,000' },
    { id: 6, image: Threepiece6, price: 'Ksh 13,000' },
    { id: 7, image: Threepiece7, price: 'Ksh 13,000' },
    { id: 8, image: Threepiece8, price: 'Ksh 13,000' },
    { id: 9, image: Threepiece9, price: 'Ksh 13,000' }
  ];

  const photos = [Photo4, Photo5, Photo6];

  const handlePurchase = (suit) => {
    setSelectedSuit(suit);
    setShowPayment(true);
  };

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert('Item added to cart');
  };

  return (
    <section className="p-10 bg-gray-50 min-h-screen relative">
      {showPayment && (
        <PaymentFileGenerator 
          item={selectedSuit}
          onClose={() => {
            setShowPayment(false);
            setSelectedSuit(null);
          }}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg aspect-square group"
          >
            <img
              src={photo}
              alt="Style Inspiration"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">
        Premium Three Piece Suits
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {threePieceSuits.map((suit) => (
          <div
            key={suit.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div className="h-96 p-4 flex items-center justify-center bg-gray-50">
              <img
                src={suit.image}
                alt="Three Piece Suit"
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-6 text-center space-y-4">
              <h3 className="text-xl font-bold">Three Piece Suit</h3>
              <p className="text-lg font-bold text-blue-600">{suit.price}</p>
              <button
                onClick={() => handlePurchase(suit)}
                className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Purchase Now
              </button>
              <button
                onClick={() => addToCart(suit)}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreePieceSuits;
