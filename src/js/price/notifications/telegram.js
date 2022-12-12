import { sendMessage } from '../../telegram/telegram';

export const sendOrderNotification = async (order) => {
  if (!order) {
    return;
  }

  const { message } = orderMessage(order);
  const { ok } = await sendMessage(message);

  return ok;
};

const orderMessage = (order) => {
  const phoneNumber = order.contact.phone.replaceAll(/\_|\(|\)|\-|/g, '').replace('+', '%2B');

  let message = `*Заявка на розрахунок вартості* 💲 %0A`;
  message += `------------------------------------------- %0A  %0A`;
  message += `Ім'я: *${order.contact.name}* %0A`;
  message += `Звідки: *${order.contact.location}* %0A`;
  message += `Номер телефона: *${phoneNumber}* %0A`;
  message += `Куди відправити бонус: *${order.contact.messanger}* %0A %0A`;
  message += `------------------------------------------- %0A`;
  message += `✅ Вид робіт: *${order.work}* %0A`;
  message += `✅ Тип сходів: *${order.stairs}* %0A`;
  message += `✅ Вид деревини: *${order.wood}* %0A`;
  message += `✅ Тип перил: *${order.railing}* %0A`;

  return {
    message,
  };
};
