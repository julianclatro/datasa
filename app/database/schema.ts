import { Schema } from 'model-one'
import type { SchemaConfigI } from 'model-one';

export const usersSchema: SchemaConfigI = new Schema({
  table_name: 'users',
  columns: [
    { name: 'id', type: 'string' },
    { name: 'name', type: 'string' },
  ],
})

export const postsSchema: SchemaConfigI = new Schema({
  table_name: 'posts',
  columns: [
    { name: 'id', type: 'string' },
    { name: 'is_published', type: 'string' },
    { name: 'organizations_id', type: 'string' },
    { name: 'categories_id', type: 'string' },
    { name: 'axis_id', type: 'string' },
    { name: 'information', type: 'string' },
    { name: 'impact', type: 'string' },
    { name: 'region', type: 'string' },
    { name: 'publish_date', type: 'string' },
    { name: 'info_date', type: 'string' },
    { name: 'info_type', type: 'string' },
    { name: 'source', type: 'string' },
    { name: 'link', type: 'string' },
    { name: 'link_status', type: 'string' },
  ],
})

export const organizationsSchema: SchemaConfigI = new Schema({
  table_name: 'organizations',
  columns: [
    { name: 'id', type: 'string' },
    { name: 'name', type: 'string' },
  ],
})

export const axisSchema: SchemaConfigI = new Schema({
  table_name: 'axis',
  columns: [
    { name: 'id', type: 'string' },
    { name: 'name', type: 'string' },
  ],
})

export const categoriesSchema: SchemaConfigI = new Schema({
  table_name: 'categories',
  columns: [
    { name: 'id', type: 'string' },
    { name: 'axis_id', type: 'string' },
    { name: 'parents_id', type: 'string' },
    { name: 'name', type: 'string' },
  ],
})