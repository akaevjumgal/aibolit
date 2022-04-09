import { useEffect, useState } from "react";
import AllServices from "../../All-Services/AllServices";
import './Price.css';

const Prices = [
  {
    id: 1,
    name: 'Прием',
    price: 320,
  },
  {
    id: 2,
    name: 'Прием повторный',
    price: 220,
  },
  {
    id: 3,
    name: 'Консультация без осмотра животного',
    price: 350,
  },
  {
    id: 4,
    name: 'Вызов врача на дом',
    price: 1000,
  },
  {
    id: 5,
    name: 'Полная выписка из истории болезни',
    price: 500,
  },
  {
    id: 6,
    name: 'Консультация по медицинским документам',
    price: 500,
  },
  {
    id: 7,
    name: 'Прием',
    price: 320,
  },
  {
    id: 8,
    name: 'Прием повторный',
    price: 220,
  },
  {
    id: 9,
    name: 'Консультация без осмотра животного',
    price: 320,
  },
  {
    id: 10,
    name: 'Вызов врача на дом',
    price: 1000,
  },
  {
    id: 11,
    name: 'Полная выписка из истории болезни',
    price: 500,
  },
  {
    id: 12,
    name: 'Консультация по медицинским документам',
    price: 500,
  },
  {
    id: 7,
    name: 'Прием',
    price: 320,
  },
  {
    id: 8,
    name: 'Прием повторный',
    price: 220,
  },
  {
    id: 9,
    name: 'Консультация без осмотра животного',
    price: 320,
  },
  {
    id: 10,
    name: 'Вызов врача на дом',
    price: 1000,
  },
  {
    id: 11,
    name: 'Полная выписка из истории болезни',
    price: 500,
  },
  {
    id: 12,
    name: 'Консультация по медицинским документам',
    price: 500,
  }
]


const PricesPerPage = 12;

const getPages = (listLength, perPage) => {
  let pages = []

  for (let i = 0; i < Math.ceil(listLength / perPage); i++) {
    pages.push(i + 1)
  }

  return pages
}

function App() {
  const [current,setCurrent] = useState(1)
  
  const [currentOffset, setOffset] = useState(1);
  console.log (currentOffset)
  // const styles = {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   margin: '10px 0',
  //   borderRadius: '20px',
  //   background: '#EDE9E8',
  //   cursor: 'pointer'
  // }

  const setPage = (page) => () => {
    setOffset(page)
    setCurrent (page)
  }
  


  const indexOfLastItem = currentOffset * PricesPerPage
  const indexOfFirstItem = indexOfLastItem - PricesPerPage;
  const pages = getPages(Prices.length, PricesPerPage)
  
  return (
    <div id="price" style={{ width: '60vw' }}>
      <h2>Цены</h2>
      <p className="tex">Цены указаны без учета расходных материалов</p>
      <div style={{display: 'flex', gap: '1rem', justifyContent: 'flex-end'}}>
        {pages.map((page) =>
          <div key={page} onClick={setPage(page)}>{page}</div>
        )}
      </div>
      {Prices.slice(indexOfFirstItem, indexOfLastItem)
        .map(({ id, name, price }) => (
        <div className="prices"  key={id}>
          <div>
            {name}
          </div>
          <div>
            {`${price} ₽`}
          </div>
        </div>
      ))}
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end'}}>
      {pages.map((page) => 
        <div className={current === currentOffset ? 'activePage' : 'Page' } key={page} onClick={setPage(page)}>{page}</div>
      )}
    </div>
    </div>
  );
}

export default App;