import { Schema } from 'model-one'
import type { SchemaConfigI } from 'model-one';

export const usersSchema: SchemaConfigI = new Schema({
  table_name: 'users',
  columns: [
    { name: 'id', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'email', type: 'string' },
    { name: 'email_confirm', type: 'string' },
    { name: 'verify_sent', type: 'string' },
    { name: 'verify_key', type: 'string' },
    { name: 'verify_datetime_exp', type: 'string' },
  ],
})

export const adminsSchema: SchemaConfigI = new Schema({
  table_name: 'admins',
  columns: [
    { name: 'id', type: 'string' },
    { name: 'role', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'email', type: 'string' },
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
    { name: 'contributors_id', type: 'string' },
    { name: 'information', type: 'string' },
    { name: 'impact', type: 'string' },
    { name: 'region', type: 'string' },
    { name: 'publish_date', type: 'string' },
    { name: 'info_date', type: 'string' },
    { name: 'info_type', type: 'string' },
    { name: 'source', type: 'string' },
    { name: 'link', type: 'string' },
    { name: 'link_status', type: 'string' },
    { name: 'link_status_timestamp', type: 'string' },
  ],
})

export const proposalsSchema: SchemaConfigI = new Schema({
  table_name: 'proposals',
  columns: [
    { name: 'id', type: 'string' },
    { name: 'users_id', type: 'string' },
    { name: 'information', type: 'string' },
    { name: 'link', type: 'string' },
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