const TELEGRAM_API_KEY = process.env.TELEGRAM_API_KEY;
const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL;

export const sendMessage = async (message, reply) => {
  const chatId = 593128405;
  let url = `${TELEGRAM_API_URL}${TELEGRAM_API_KEY}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=markdown`;

  if (reply) {
    url += `&reply_markup=${JSON.stringify(reply)}`;
  }

  const response = await fetch(url, { method: 'GET' });

  return response.json();
};
