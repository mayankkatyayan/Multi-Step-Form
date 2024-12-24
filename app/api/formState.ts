import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    setTimeout(() => {
      const mockFormState = {
        step1: { name: "Mayank Jha", email: "mayank@gmail.com" },
        step2: { address: "City mall", city: "Banglore" },
        step3: { preferences: { receiveEmails: true } },
        step4: { review: "Everything looks good!" }
      };
  
      res.status(200).json(mockFormState);  
    }, 1000);  
  }
  