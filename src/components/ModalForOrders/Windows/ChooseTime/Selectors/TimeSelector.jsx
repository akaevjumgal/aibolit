import dayjs from 'dayjs';
import ReactSelect from 'react-select';
import './Selectors.css';

export default function TimeSelector() {
  const ListOfTimes = [
    {
      value: '12:00',
      label: '12:00',
    },
    {
      value: '13:00',
      label: '13:00',
    },
    {
      value: '15:00',
      label: '15:00',
    },
    {
      value: '15:30',
      label: '15:30',
    },
    {
      value: '16:45',
      label: '16:45',
    },
    {
      value: '17:00',
      label: '17:00',
    },
    {
      value: '17:30',
      label: '17:30',
    },
  ];

  return (
    <div>
      <ReactSelect
        className="DateSelector"
        options={ListOfTimes}
        placeholder="Выберите Время"
      />
    </div>
  );
}
