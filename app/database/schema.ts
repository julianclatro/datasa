import { Schema } from 'model-one'
import type { SchemaConfigI } from 'model-one';

export const usersSchema: SchemaConfigI = new Schema({
  table_name: 'users',
  columns: [
    { name: 'id', type: 'string' },
    { name: 'name', type: 'string' },
  ],
})