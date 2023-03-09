DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id text PRIMARY KEY,
  name text,
  deleted_at datetime,
  created_at datetime,
  updated_at datetime
);

DROP TABLE IF EXISTS axis;

CREATE TABLE axis (
  [id] TEXT,
  [name] TEXT NULL,
  [created_at] TEXT,
  [updated_at] TEXT,
  [deleted_at] TEXT
);

DROP TABLE IF EXISTS categories;

CREATE TABLE [categories] (
  [id] TEXT,
  [axis_id] TEXT,
  [parents_id] TEXT,
  [name] TEXT,
  [created_at] TEXT,
  [updated_at] TEXT,
  [deleted_at] TEXT
);
DROP TABLE IF EXISTS organizations;

CREATE TABLE [organizations] (
  [id] TEXT,
  [name] TEXT NULL,
  [created_at] TEXT,
  [updated_at] TEXT,
  [deleted_at] TEXT
);

DROP TABLE IF EXISTS posts;

CREATE TABLE [posts] (
  [id] TEXT,
  [is_published] TEXT,
  [organizations_id] TEXT,
  [categories_id] TEXT,
  [axis_id] TEXT,
  [information] TEXT,
  [impact] TEXT,
  [region] TEXT,
  [publish_date] TEXT NULL,
  [info_date] TEXT NULL,
  [info_type] TEXT NULL,
  [source] TEXT NULL,
  [link] TEXT NULL,
  [created_at] TEXT,
  [updated_at] TEXT,
  [deleted_at] TEXT
);