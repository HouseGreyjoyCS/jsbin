CREATE TABLE "users" (
  "_id" serial NOT NULL,
  "username" varchar NOT NULL UNIQUE,
  "password" varchar NOT NULL,
  "created_bins" varchar,
  "accessed_bins" varchar,
  CONSTRAINT users_pk PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "bins" (
  "_id" serial NOT NULL UNIQUE,
  "bin_name" varchar NOT NULL UNIQUE,
  "created_date" DATE NOT NULL,
  "admin" varchar NOT NULL,
  "users" varchar,
  "password" varchar,
  "saved_data" varchar,
  "date_of_last_save" DATE,
  "description" varchar,
  CONSTRAINT bins_pk PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "sessions" (
  "session_id" integer NOT NULL,
  "session_time_stamp" TIMESTAMP default current_timestamp
) WITH (
  OIDS=FALSE
);



ALTER TABLE "users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("created_bins") REFERENCES "bins"("admin");
ALTER TABLE "users" ADD CONSTRAINT "users_fk1" FOREIGN KEY ("accessed_bins") REFERENCES "bins"("users");


ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("session_id") REFERENCES "users"("_id");
