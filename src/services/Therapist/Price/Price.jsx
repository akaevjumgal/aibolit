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
    id: 13,
    name: '324sdfdf',
    price: 320,
  },
  {
    id: 14,
    name: 'dfgdfgd',
    price: 220,
  },
  {
    id: 15,
    name: 'vhcgyft',
    price: 320,
  },
  {
    id: 16,
    name: 't76dxgfcfg',
    price: 1000,
  },
  {
    id: 17,
    name: 'r56drfcgfcg',
    price: 500,
  },
  {
    id: 18,
    name: '456dfgxfg',
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

const PricePageItem = ({ page, active, setPage }) => {
  const activeStyles = active ? 'activePage' : 'Page';

  return (
    <div className={activeStyles} onClick={setPage(page)}>
      {page}
    </div>
  )
}

const PricePages = ({ pages, currentPage, setPage }) => {
  return <div style={{display: 'flex', gap: '1rem', justifyContent: 'flex-end'}}>
    {pages.map((page) => (
      <PricePageItem key={page} page={page} active={page === currentPage} setPage={setPage} />
    ))}
  </div>
};

function App() {  
  const [currentPage, setCurrentPage] = useState(1);
  // const styles = {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   margin: '10px 0',
  //   borderRadius: '20px',
  //   background: '#EDE9E8',
  //   cursor: 'pointer'
  // }

  const setPage = (page) => () => {
    setCurrentPage(page)
  }

  const indexOfLastItem = currentPage * PricesPerPage
  const indexOfFirstItem = indexOfLastItem - PricesPerPage;
  const pages = getPages(Prices.length, PricesPerPage)
  
  return (
    <div id="price" style={{ width: '60vw' }}>
      <h2>Цены</h2>
      <p className="tex">Цены указаны без учета расходных материалов</p>
      <PricePages pages={pages} currentPage={currentPage} setPage={setPage} />
      <div style={{ height: '600px' }}>
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
      </div>
      <PricePages pages={pages} currentPage={currentPage} setPage={setPage} />
    </div>
  );
}

export default App;