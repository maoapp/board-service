import jwt from 'jsonwebtoken';

export const generateToken = (userId: number): string => {
  //TODO move secret to env file

  return jwt.sign({ userId }, "WbmvAhfzzCkTtUaYGpcHTQC3vVSndcfGkV8_CQZctNCGIX8hEYn75izdvr54fWiL", { expiresIn: '10h' });
};
