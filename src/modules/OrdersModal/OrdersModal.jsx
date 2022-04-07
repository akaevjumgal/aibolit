import { useState } from 'react';
import { Orders } from '../../common/orders';

import ModalForOrders from '../../components/ModalForOrders/ModalForOrders';
import OrdersPhoneVerification from '../../components/ModalForOrders/Windows/OrdersPhoneVerification/OrdersPhoneVerification';
import PasswordFromPhone from '../../components/ModalForOrders/Windows/PasswordFromPhone/PasswordFromPhone';
import ChooseVariante from '../../components/ModalForOrders/Windows/ChooseVariante/ChooseVariante';
import TypeOfService from '../../components/ModalForOrders/Windows/TypeOfService/TypeOfService';
import ChooseSpecialist from '../../components/ModalForOrders/Windows/ChooseSpecialist/ChooseSpecialist';
import ChooseTime from '../../components/ModalForOrders/Windows/ChooseTime/ChooseTIme';
import Mail from '../../components/ModalForOrders/Windows/Mail/Mail';
import Info from '../../components/ModalForOrders/Windows/Info/Info';

export default function OrderModal({ close }) {
  const [currentScene, setCurrentScene] = useState(Orders.PhoneNumber);
  const [selectValue, SetSelectedValue] = useState(null);

  const setScene = (scene) => {
    setCurrentScene(scene);
  };
  return (
    <div>
      <ModalForOrders close={close}>
        {currentScene === Orders.PhoneNumber && <OrdersPhoneVerification SetScene={setScene} />}
        {currentScene === Orders.PasswordFromPhone && <PasswordFromPhone SetScene={setScene} />}
        {currentScene === Orders.ChooseVariante && <ChooseVariante SetScene={setScene} />}
        {currentScene === Orders.TypeOfService && <TypeOfService SetValue={SetSelectedValue} SetScene={setScene} />}
        {currentScene === Orders.ChooseSpecialist && <ChooseSpecialist value={selectValue} SetScene={setScene} />}
        {currentScene === Orders.ChooseTime && <ChooseTime SetScene={setScene} />}
        {currentScene === Orders.Mail && <Mail SetScene={setScene} />}
        {currentScene === Orders.Info && <Info />}
      </ModalForOrders>
    </div>
  );
}
