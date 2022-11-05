import { v4 as uuid_v4 } from 'uuid';
const DATABASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

const generateUserUUID = () => {
  const newUniqueId = uuid_v4();

  return newUniqueId;
};

const register = async (data) => {
  const response = await fetch(`${DATABASE_URL}/register`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    },
    body: JSON.stringify(data)
  });

  const newChecklistClient = response.json();

  return newChecklistClient;
};

const registrationFlux = (data) => {
  const newRegister = register(data);

  const userUniqueUUID = generateUserUUID();

  return { userId: userUniqueUUID, checklistId: newRegister?.id };
};

export default function handler(request, response) {
  try {
    const data = request.body;

    const newChecklistClient = await = registrationFlux(data);

    return response.status(200).json(newChecklistClient);
  } catch (error) {
    return response.status(400).json({
      error: true,
      message: 'Erro ao criar um novo registro. Verifique os dados e tente novamente mais tarde.'
    });
  }
}
