const SESSION_KEY = 'softConsultoresUser';

export const demoUser = {
  id: '0001',
  name: 'Maria Elena Martinez Garcia',
  firstName: 'Maria Elena',
  lastName: 'Martinez Garcia',
  email: 'user@gmail.com',
  phone: '+51 999 888 777',
  company: 'Soft Consultores',
  role: 'Cliente'
};

export const getStoredUser = () => {
  try {
    const storedUser = localStorage.getItem(SESSION_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  } catch {
    return null;
  }
};

export const saveUserSession = (user) => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
};

export const clearUserSession = () => {
  localStorage.removeItem(SESSION_KEY);
};

export const getPurchaseHistoryKey = (userId) => `softConsultoresPurchaseHistory:${userId}`;

export const getPurchaseHistory = (userId) => {
  if (!userId) return [];

  try {
    const storedHistory = localStorage.getItem(getPurchaseHistoryKey(userId));
    return storedHistory ? JSON.parse(storedHistory) : [];
  } catch {
    return [];
  }
};

export const savePurchase = (userId, purchase) => {
  if (!userId) return;

  const currentHistory = getPurchaseHistory(userId);
  localStorage.setItem(
    getPurchaseHistoryKey(userId),
    JSON.stringify([purchase, ...currentHistory])
  );
};
