create database camera_image_sync;

drop table if exists users;
create table users (
    user_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_username varchar(32) unique not null,
    user_password varchar(32) not null,
    user_created_at timestamp default current_timestamp
);