import { apiClient } from '@/util/ApiClient';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {

        try {
            console.log("api called ")
            const { username, password } = req.body;

            const response = await apiClient.post('/login', {
                username,
                password,
            });
            console.log(response.data, " after api call")

            const { token } = response.data;
            console.log(response.data, " printing Token")

            res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Secure; Path=/; Max-Age=3600`);
            res.status(200).json({ success: true });

        } catch (error) {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
