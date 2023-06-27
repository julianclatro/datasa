ALTER TABLE
    users
ADD
    email_confirm TEXT,
ADD
    email TEXT
ADD
    verify_sent TEXT,
ADD
    verify_key TEXT,
ADD
    verify_datetime_exp TEXT;

ALTER TABLE posts
  ADD contributors_id TEXT;

CREATE TABLE [admins] (
  [id] TEXT,
  [name] TEXT,
  [role] TEXT,
  [email] TEXT,
  [created_at] TEXT,
  [updated_at] TEXT,
  [deleted_at] TEXT
);