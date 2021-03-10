--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Heart DB; Type: TABLE; Schema: public; Owner: tpl1_2021h1
--

CREATE TABLE public."Heart DB" (
    "Heart Id" integer NOT NULL,
    "User Id" character varying DEFAULT ''::text,
    "Photo_id" character varying,
    "Date_Liked" character varying
);


ALTER TABLE public."Heart DB" OWNER TO tpl1_2021h1;

--
-- Name: Heart DB_Heart ID_seq; Type: SEQUENCE; Schema: public; Owner: tpl1_2021h1
--

CREATE SEQUENCE public."Heart DB_Heart ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Heart DB_Heart ID_seq" OWNER TO tpl1_2021h1;

--
-- Name: Heart DB_Heart ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl1_2021h1
--

ALTER SEQUENCE public."Heart DB_Heart ID_seq" OWNED BY public."Heart DB"."Heart Id";


--
-- Name: Photos; Type: TABLE; Schema: public; Owner: tpl1_2021h1
--

CREATE TABLE public."Photos" (
    "Photo_id" integer NOT NULL,
    "User_id" text,
    "URL" text,
    "Date_Uploaded" text
);


ALTER TABLE public."Photos" OWNER TO tpl1_2021h1;

--
-- Name: Photos_Photo_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl1_2021h1
--

CREATE SEQUENCE public."Photos_Photo_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Photos_Photo_id_seq" OWNER TO tpl1_2021h1;

--
-- Name: Photos_Photo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl1_2021h1
--

ALTER SEQUENCE public."Photos_Photo_id_seq" OWNED BY public."Photos"."Photo_id";


--
-- Name: User; Type: TABLE; Schema: public; Owner: tpl1_2021h1
--

CREATE TABLE public."User" (
    "User Id" integer NOT NULL,
    "Name" text,
    "Email" text,
    "Start Date" text
);


ALTER TABLE public."User" OWNER TO tpl1_2021h1;

--
-- Name: User_User Id_seq; Type: SEQUENCE; Schema: public; Owner: tpl1_2021h1
--

CREATE SEQUENCE public."User_User Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."User_User Id_seq" OWNER TO tpl1_2021h1;

--
-- Name: User_User Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl1_2021h1
--

ALTER SEQUENCE public."User_User Id_seq" OWNED BY public."User"."User Id";


--
-- Name: food; Type: TABLE; Schema: public; Owner: tpl1_2021h1
--

CREATE TABLE public.food (
    name text,
    calories integer,
    meal text
);


ALTER TABLE public.food OWNER TO tpl1_2021h1;

--
-- Name: Heart DB Heart Id; Type: DEFAULT; Schema: public; Owner: tpl1_2021h1
--

ALTER TABLE ONLY public."Heart DB" ALTER COLUMN "Heart Id" SET DEFAULT nextval('public."Heart DB_Heart ID_seq"'::regclass);


--
-- Name: Photos Photo_id; Type: DEFAULT; Schema: public; Owner: tpl1_2021h1
--

ALTER TABLE ONLY public."Photos" ALTER COLUMN "Photo_id" SET DEFAULT nextval('public."Photos_Photo_id_seq"'::regclass);


--
-- Name: User User Id; Type: DEFAULT; Schema: public; Owner: tpl1_2021h1
--

ALTER TABLE ONLY public."User" ALTER COLUMN "User Id" SET DEFAULT nextval('public."User_User Id_seq"'::regclass);


--
-- Data for Name: Heart DB; Type: TABLE DATA; Schema: public; Owner: tpl1_2021h1
--

COPY public."Heart DB" ("Heart Id", "User Id", "Photo_id", "Date_Liked") FROM stdin;
1	1	\N	\N
\.


--
-- Data for Name: Photos; Type: TABLE DATA; Schema: public; Owner: tpl1_2021h1
--

COPY public."Photos" ("Photo_id", "User_id", "URL", "Date_Uploaded") FROM stdin;
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: tpl1_2021h1
--

COPY public."User" ("User Id", "Name", "Email", "Start Date") FROM stdin;
1	Mandy	Mandy123@gmail.com	01/01/2021
2	Yingjie	Yingjie123@gmail.com	02/01/2021
3	Abby	Abby123@gmail.com	03/01/2021
\.


--
-- Data for Name: food; Type: TABLE DATA; Schema: public; Owner: tpl1_2021h1
--

COPY public.food (name, calories, meal) FROM stdin;
chicken	200	any
spagehtti	100	dinner
sandwiches	400	lunch
ice cream	800	dessert
pizza	700	dinner
\.


--
-- Name: Heart DB_Heart ID_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1_2021h1
--

SELECT pg_catalog.setval('public."Heart DB_Heart ID_seq"', 1, false);


--
-- Name: Photos_Photo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1_2021h1
--

SELECT pg_catalog.setval('public."Photos_Photo_id_seq"', 1, false);


--
-- Name: User_User Id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1_2021h1
--

SELECT pg_catalog.setval('public."User_User Id_seq"', 1, false);


--
-- Name: Heart DB Heart DB_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl1_2021h1
--

ALTER TABLE ONLY public."Heart DB"
    ADD CONSTRAINT "Heart DB_pkey" PRIMARY KEY ("Heart Id");


--
-- Name: Photos Photos_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl1_2021h1
--

ALTER TABLE ONLY public."Photos"
    ADD CONSTRAINT "Photos_pkey" PRIMARY KEY ("Photo_id");


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl1_2021h1
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY ("User Id");


--
-- PostgreSQL database dump complete
--

