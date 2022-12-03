const TELEGRAM_API_KEY = '5487817810:AAEC6H1x16_T8xXK-izVibphKEwUVwfOlXA';
const TELEGRAM_API_URL = 'https://api.telegram.org/bot';

export const sendMessage = async (message, reply) => {
  const chatId = 593128405;
  let url = `${TELEGRAM_API_URL}${TELEGRAM_API_KEY}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=markdown`;

  if (reply) {
    url += `&reply_markup=${JSON.stringify(reply)}`;
  }

  const response = await fetch(url, { method: 'GET' });

  return response.json();
};
