export const createConsultationMessage = (phone) => {
  const phoneNumber = phone.replaceAll(/\_|\(|\)|\-|/g, '').replace('+', '%2B');

  const message = `*Заявка на дзвінок* 📞 %0AНомер телефона: *${phoneNumber}* %0AНатисніть на номер щоб зателефонувати`;

  return { message };
};
