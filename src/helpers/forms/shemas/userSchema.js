import { z } from 'zod';

const userSchema = z.object(
  {
    user:z.object(
      {
        name: z.string().min(1, { message: 'This field is required' }),
        role: z.string().min(1, { message: 'This field is required' }),
      }
    )
  }
);

export default userSchema;