import {z} from 'zod';

const productSchema = z.object({
  products: z.array(
    z.object({
      id: z.number(),
      title: z.string().nonempty('Title is required'),
      price: z.number({ invalid_type_error: 'Price must be a number' }),
      category: z.string().nonempty('Category is required'),
      isEditing: z.boolean().optional()
    })
  )
});


export default  productSchema;