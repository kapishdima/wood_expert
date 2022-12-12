import { sendSMS } from '../../sms/sms';

export const sendSMSNotification = async (fields) => {
  const phone = fields.contact.phone;
  const name = fields.contact.name;

  const message = `Доброго дня, ${name}!\nДякуємо за заявку!\nПосилання на гугл диск із портфоліо:\nhttps://drive.google.com/drive/folders/1P7n0PqDmf6lqy3lS58QmjCl8516Aek3O?usp=sharing\n \nМи з Вами найблищим часом звяжемось!\n +380966315919\n`;
  const response = await sendSMS(phone, message);

  console.log(response);
};
