import type { Model } from 'model-one';

export interface UserDataI {
  id?: string
  name?: string
}

export interface UserI extends Model  {
  data: UserDataI
}

export interface PostDataI {
  id?: string
  is_published?: string
  organizations_id?: string
  categories_id?: string
  axis_id?: string
  information?: string
  impact?: string
  region?: string
  publish_date?: string
  info_date?: string
  info_type?: string
  source?: string
  link?: string
  link_status?: string;
  link_status_timestamp?: string;
}

export interface PostI extends Model  {
  data: PostDataI
}

export interface AxisDataI {
  id?: string
  name?: string
}

export interface AxisI extends Model  {
  data: AxisDataI
}

export interface CategoryDataI {
  id?: string
  axis_id?: string
  parents_id?: string
  name?: string
}

export interface CategoryI extends Model  {
  data: CategoryDataI
}


export interface OrganizationDataI {
  id?: string
  name?: string
}

export interface OrganizationI extends Model  {
  data: OrganizationDataI
}
