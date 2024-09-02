import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const Hollbooking = () => {

  const [paidSeats, setPaidSeats] = useState([]);
  const Seat = ({ seatNumber, isBooked, bookSeat }) => {
    return (
      <div>
        <button
          style={{
            backgroundColor: isBooked ? 'red' : 'green',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => bookSeat(seatNumber)}
          // disabled={isBooked}
          
        >
          {seatNumber}
        </button>
      </div>
    );
  };

  const [seats, setSeats] = useState([
    { seatNumber: 1, isBooked: false },
    { seatNumber: 2, isBooked: false },
    { seatNumber: 3, isBooked: false },
    { seatNumber: 4, isBooked: false },
    { seatNumber: 5, isBooked: false },
    { seatNumber: 6, isBooked: false },
    { seatNumber: 7, isBooked: false },
    { seatNumber: 8, isBooked: false },
    { seatNumber: 9, isBooked: false },
    { seatNumber: 10, isBooked: false },
    { seatNumber: 11, isBooked: false },
    { seatNumber: 12, isBooked: false },
    { seatNumber: 13, isBooked: false },
    { seatNumber: 14, isBooked: false },
    { seatNumber: 15, isBooked: false },
    { seatNumber: 16, isBooked: false },
    { seatNumber: 17, isBooked: false },
    { seatNumber: 18, isBooked: false },
    { seatNumber: 19, isBooked: false },
    { seatNumber: 20, isBooked: false },
    { seatNumber: 21, isBooked: false },
    { seatNumber: 22, isBooked: false },
    { seatNumber: 23, isBooked: false },
    { seatNumber: 24, isBooked: false },
    { seatNumber: 25, isBooked: false },
    { seatNumber: 26, isBooked: false },
    { seatNumber: 27, isBooked: false },
    { seatNumber: 28, isBooked: false },
    { seatNumber: 29, isBooked: false },
    { seatNumber: 30, isBooked: false },
    { seatNumber: 31, isBooked: false },
    { seatNumber: 32, isBooked: false },
    { seatNumber: 33, isBooked: false },
    { seatNumber: 34, isBooked: false },
    { seatNumber: 35, isBooked: false },
    { seatNumber: 36, isBooked: false },
    { seatNumber: 37, isBooked: false },
    { seatNumber: 38, isBooked: false },
    { seatNumber: 39, isBooked: false },
    { seatNumber: 40, isBooked: false },
    { seatNumber: 41, isBooked: false },
    { seatNumber: 42, isBooked: false },
    { seatNumber: 43, isBooked: false },
    { seatNumber: 44, isBooked: false },
    { seatNumber: 45, isBooked: false },
    { seatNumber: 46, isBooked: false },
    { seatNumber: 47, isBooked: false },
    { seatNumber: 48, isBooked: false },
    { seatNumber: 49, isBooked: false },
    { seatNumber: 50, isBooked: false },
  ]);


  const bookSeat = (seatNumber) => {
    const updatedSeats = seats.map((seat) => {
      if (seat.seatNumber === seatNumber) {
        return { ...seat, isBooked: true };
      }
      return seat;
    });
    setSeats(updatedSeats);
  };
  console.log(seats);

  const handlePayment = () => {
    const paidSeatNumbers = seats.filter((seat) => seat.isBooked).map((seat) => seat.seatNumber);
    setPaidSeats(paidSeatNumbers);
  };



  return (
    <div>
      <Container>
        <Row>
          <h2>Cinema Hall Seat Booking</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '10px',
            }}
            className='my-5'
          >
            {
              seats.map((seat) => (
                <div>
                  <Seat
                    key={seat.seatNumber}
                    seatNumber={seat.seatNumber}
                    isBooked={seat.isBooked}
                    bookSeat={bookSeat}
                  />
                </div>
              ))}
          </div>
          <div>
            <Button variant="outline-secondary" onClick={handlePayment}>Ticket Payment</Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Hollbooking;