const TELEGRAM_API_KEY = process.env.TELEGRAM_API_KEY;
const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL;

export const sendMessage = async (message, reply) => {
  const chats = JSON.parse(process.env.TELEGRAM_CHATS);
  if (!chats || !chats.length) {
    return;
  }

  chats.forEach(async (chat) => {
    let url = `${TELEGRAM_API_URL}${TELEGRAM_API_KEY}/sendMessage?chat_id=${chat}&text=${message}&parse_mode=markdown`;

    if (reply) {
      url += `&reply_markup=${JSON.stringify(reply)}`;
    }

    const response = await fetch(url, { method: 'GET' });

    return response.json();
  });
};
