SET
  statement_timeout = 0;

SET
  lock_timeout = 0;

SET
  idle_in_transaction_session_timeout = 0;

SET
  client_encoding = 'UTF8';

SET
  standard_conforming_strings = on;

SELECT
  pg_catalog.set_config('search_path', '', false);

SET
  check_function_bodies = false;

SET
  xmloption = content;

SET
  client_min_messages = warning;

SET
  row_security = off;

CREATE TABLE public.users (
  "_id" serial NOT NULL,
  "username" varchar NOT NULL UNIQUE,
  "password" varchar NOT NULL,
  "birthday" varchar NOT NULL,
  CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (OIDS = FALSE);

CREATE TABLE public.drinks (
  "_id" serial NOT NULL,
  "users_id" bigint NOT NULL,
  "name" varchar NOT NULL,
  "alcoholic" varchar NOT NULL,
  "photourl" varchar NOT NULL,
  "ingredients" varchar NOT NULL,
  "measurements" varchar NOT NULL,
  CONSTRAINT "drinks_pk" PRIMARY KEY ("_id")
) WITH (OIDS = FALSE);

ALTER TABLE
  public.drinks
ADD
  CONSTRAINT "drinks_fk0" FOREIGN KEY ("users_id") REFERENCES public.users("_id");