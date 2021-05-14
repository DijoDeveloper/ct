-- Adminer 4.6.2 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

CREATE DATABASE `djangoBackEnd` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `djangoBackEnd`;

DROP TABLE IF EXISTS `auth_group`;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `auth_group_permissions`;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `auth_permission`;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1,	'Can add log entry',	1,	'add_logentry'),
(2,	'Can change log entry',	1,	'change_logentry'),
(3,	'Can delete log entry',	1,	'delete_logentry'),
(4,	'Can view log entry',	1,	'view_logentry'),
(5,	'Can add permission',	2,	'add_permission'),
(6,	'Can change permission',	2,	'change_permission'),
(7,	'Can delete permission',	2,	'delete_permission'),
(8,	'Can view permission',	2,	'view_permission'),
(9,	'Can add group',	3,	'add_group'),
(10,	'Can change group',	3,	'change_group'),
(11,	'Can delete group',	3,	'delete_group'),
(12,	'Can view group',	3,	'view_group'),
(13,	'Can add user',	4,	'add_user'),
(14,	'Can change user',	4,	'change_user'),
(15,	'Can delete user',	4,	'delete_user'),
(16,	'Can view user',	4,	'view_user'),
(17,	'Can add content type',	5,	'add_contenttype'),
(18,	'Can change content type',	5,	'change_contenttype'),
(19,	'Can delete content type',	5,	'delete_contenttype'),
(20,	'Can view content type',	5,	'view_contenttype'),
(21,	'Can add session',	6,	'add_session'),
(22,	'Can change session',	6,	'change_session'),
(23,	'Can delete session',	6,	'delete_session'),
(24,	'Can view session',	6,	'view_session'),
(25,	'Can add citizenship_details',	7,	'add_citizenship_details'),
(26,	'Can change citizenship_details',	7,	'change_citizenship_details'),
(27,	'Can delete citizenship_details',	7,	'delete_citizenship_details'),
(28,	'Can view citizenship_details',	7,	'view_citizenship_details'),
(29,	'Can add city_master',	8,	'add_city_master'),
(30,	'Can change city_master',	8,	'change_city_master'),
(31,	'Can delete city_master',	8,	'delete_city_master'),
(32,	'Can view city_master',	8,	'view_city_master'),
(33,	'Can add corporate_details',	9,	'add_corporate_details'),
(34,	'Can change corporate_details',	9,	'change_corporate_details'),
(35,	'Can delete corporate_details',	9,	'delete_corporate_details'),
(36,	'Can view corporate_details',	9,	'view_corporate_details'),
(37,	'Can add currency_details',	10,	'add_currency_details'),
(38,	'Can change currency_details',	10,	'change_currency_details'),
(39,	'Can delete currency_details',	10,	'delete_currency_details'),
(40,	'Can view currency_details',	10,	'view_currency_details'),
(41,	'Can add group_details',	11,	'add_group_details'),
(42,	'Can change group_details',	11,	'change_group_details'),
(43,	'Can delete group_details',	11,	'delete_group_details'),
(44,	'Can view group_details',	11,	'view_group_details'),
(45,	'Can add status_details',	12,	'add_status_details'),
(46,	'Can change status_details',	12,	'change_status_details'),
(47,	'Can delete status_details',	12,	'delete_status_details'),
(48,	'Can view status_details',	12,	'view_status_details'),
(49,	'Can add user_type_master',	13,	'add_user_type_master'),
(50,	'Can change user_type_master',	13,	'change_user_type_master'),
(51,	'Can delete user_type_master',	13,	'delete_user_type_master'),
(52,	'Can view user_type_master',	13,	'view_user_type_master'),
(53,	'Can add wallet_details',	14,	'add_wallet_details'),
(54,	'Can change wallet_details',	14,	'change_wallet_details'),
(55,	'Can delete wallet_details',	14,	'delete_wallet_details'),
(56,	'Can view wallet_details',	14,	'view_wallet_details'),
(57,	'Can add user_details',	15,	'add_user_details'),
(58,	'Can change user_details',	15,	'change_user_details'),
(59,	'Can delete user_details',	15,	'delete_user_details'),
(60,	'Can view user_details',	15,	'view_user_details'),
(61,	'Can add corporate_branch_details',	16,	'add_corporate_branch_details'),
(62,	'Can change corporate_branch_details',	16,	'change_corporate_branch_details'),
(63,	'Can delete corporate_branch_details',	16,	'delete_corporate_branch_details'),
(64,	'Can view corporate_branch_details',	16,	'view_corporate_branch_details');

DROP TABLE IF EXISTS `auth_user`;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `auth_user_groups`;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `auth_user_user_permissions`;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `citizenship_details`;
CREATE TABLE `citizenship_details` (
  `citizenship_id` int(11) NOT NULL AUTO_INCREMENT,
  `citizenship_name` varchar(100) NOT NULL,
  `citizen_code` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  PRIMARY KEY (`citizenship_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `citizenship_details` (`citizenship_id`, `citizenship_name`, `citizen_code`, `status`) VALUES
(1,	'India',	'IN',	'Y');

DROP TABLE IF EXISTS `city_master`;
CREATE TABLE `city_master` (
  `city_id` int(11) NOT NULL AUTO_INCREMENT,
  `city_name` varchar(100) NOT NULL,
  `country_code` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  PRIMARY KEY (`city_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `city_master` (`city_id`, `city_name`, `country_code`, `status`) VALUES
(1,	'Chennai',	'India',	'Y');

DROP TABLE IF EXISTS `corporate_branch_details`;
CREATE TABLE `corporate_branch_details` (
  `corporate_branch_details_id` int(11) NOT NULL AUTO_INCREMENT,
  `branch_name` varchar(100) NOT NULL,
  `branch_location` varchar(100) NOT NULL,
  `branch_pincode` int(11) NOT NULL,
  `status` varchar(2) NOT NULL,
  `r_corporate_id` int(11) NOT NULL,
  `r_wallet_id` int(11) NOT NULL,
  PRIMARY KEY (`corporate_branch_details_id`),
  KEY `corporate_branch_det_r_corporate_id_0e92696d_fk_corporate` (`r_corporate_id`),
  KEY `corporate_branch_det_r_wallet_id_14f8a3fb_fk_wallet_de` (`r_wallet_id`),
  CONSTRAINT `corporate_branch_det_r_corporate_id_0e92696d_fk_corporate` FOREIGN KEY (`r_corporate_id`) REFERENCES `corporate_details` (`corporate_id`),
  CONSTRAINT `corporate_branch_det_r_wallet_id_14f8a3fb_fk_wallet_de` FOREIGN KEY (`r_wallet_id`) REFERENCES `wallet_details` (`wallet`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `corporate_branch_details` (`corporate_branch_details_id`, `branch_name`, `branch_location`, `branch_pincode`, `status`, `r_corporate_id`, `r_wallet_id`) VALUES
(1,	'Infi',	'Chennai',	23121,	'Y',	1,	1);

DROP TABLE IF EXISTS `corporate_details`;
CREATE TABLE `corporate_details` (
  `corporate_id` int(11) NOT NULL AUTO_INCREMENT,
  `corporate_name` varchar(100) NOT NULL,
  `agent_name` varchar(100) NOT NULL,
  `office_number` int(11) NOT NULL,
  `corporate_status` varchar(100) NOT NULL,
  `status` varchar(2) NOT NULL,
  `r_citizenship_id` int(11) NOT NULL,
  `r_currency_id` int(11) NOT NULL,
  PRIMARY KEY (`corporate_id`),
  KEY `corporate_details_r_currency_id_3204f409_fk_currency_` (`r_currency_id`),
  KEY `corporate_details_r_citizenship_id_8ded7d7c_fk_citizensh` (`r_citizenship_id`),
  CONSTRAINT `corporate_details_r_citizenship_id_8ded7d7c_fk_citizensh` FOREIGN KEY (`r_citizenship_id`) REFERENCES `citizenship_details` (`citizenship_id`),
  CONSTRAINT `corporate_details_r_currency_id_3204f409_fk_currency_` FOREIGN KEY (`r_currency_id`) REFERENCES `currency_details` (`currency_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `corporate_details` (`corporate_id`, `corporate_name`, `agent_name`, `office_number`, `corporate_status`, `status`, `r_citizenship_id`, `r_currency_id`) VALUES
(1,	'Infiniti',	'Arun',	132312,	'Y',	'Y',	1,	1);

DROP TABLE IF EXISTS `currency_details`;
CREATE TABLE `currency_details` (
  `currency_id` int(11) NOT NULL AUTO_INCREMENT,
  `currency_code` varchar(100) NOT NULL,
  `currency_display_name` varchar(100) NOT NULL,
  `currency_status` varchar(2) NOT NULL,
  PRIMARY KEY (`currency_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `currency_details` (`currency_id`, `currency_code`, `currency_display_name`, `currency_status`) VALUES
(1,	'INR',	'Rupees',	'Y');

DROP TABLE IF EXISTS `django_admin_log`;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `django_content_type`;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1,	'admin',	'logentry'),
(3,	'auth',	'group'),
(2,	'auth',	'permission'),
(4,	'auth',	'user'),
(5,	'contenttypes',	'contenttype'),
(6,	'sessions',	'session'),
(7,	'signIn',	'citizenship_details'),
(8,	'signIn',	'city_master'),
(16,	'signIn',	'corporate_branch_details'),
(9,	'signIn',	'corporate_details'),
(10,	'signIn',	'currency_details'),
(11,	'signIn',	'group_details'),
(12,	'signIn',	'status_details'),
(15,	'signIn',	'user_details'),
(13,	'signIn',	'user_type_master'),
(14,	'signIn',	'wallet_details');

DROP TABLE IF EXISTS `django_migrations`;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1,	'contenttypes',	'0001_initial',	'2020-04-22 10:27:35.404770'),
(2,	'auth',	'0001_initial',	'2020-04-22 10:27:41.398516'),
(3,	'admin',	'0001_initial',	'2020-04-22 10:28:02.169448'),
(4,	'admin',	'0002_logentry_remove_auto_add',	'2020-04-22 10:28:07.083686'),
(5,	'admin',	'0003_logentry_add_action_flag_choices',	'2020-04-22 10:28:07.267950'),
(6,	'contenttypes',	'0002_remove_content_type_name',	'2020-04-22 10:28:10.890014'),
(7,	'auth',	'0002_alter_permission_name_max_length',	'2020-04-22 10:28:12.919966'),
(8,	'auth',	'0003_alter_user_email_max_length',	'2020-04-22 10:28:13.377343'),
(9,	'auth',	'0004_alter_user_username_opts',	'2020-04-22 10:28:13.613750'),
(10,	'auth',	'0005_alter_user_last_login_null',	'2020-04-22 10:28:15.312337'),
(11,	'auth',	'0006_require_contenttypes_0002',	'2020-04-22 10:28:15.545761'),
(12,	'auth',	'0007_alter_validators_add_error_messages',	'2020-04-22 10:28:15.793369'),
(13,	'auth',	'0008_alter_user_username_max_length',	'2020-04-22 10:28:18.626704'),
(14,	'auth',	'0009_alter_user_last_name_max_length',	'2020-04-22 10:28:20.955668'),
(15,	'auth',	'0010_alter_group_name_max_length',	'2020-04-22 10:28:21.426537'),
(16,	'auth',	'0011_update_proxy_permissions',	'2020-04-22 10:28:21.668206'),
(17,	'sessions',	'0001_initial',	'2020-04-22 10:28:22.866183'),
(18,	'signIn',	'0001_initial',	'2020-04-22 10:28:36.190628');

DROP TABLE IF EXISTS `django_session`;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('1uv3p5enhszcacr7egfvciz15frijto1',	'NDk3ZDBhNmFlYTZkZTEzZGNmZDVlODVhZGU4YzlkMDZkMjM3OTBjMTp7fQ==',	'2020-05-06 12:27:39.254952'),
('dytfewrs19xu6y3pgc550xrqz1faw2o8',	'YzZkY2ZmMjY1N2VlYmQxODgwMDlhZTJmMmM1NmQ2Mjk0Y2RmNjk0ZTp7InVzZXJJZCI6MX0=',	'2020-05-06 12:58:27.092432');

DROP TABLE IF EXISTS `group_details`;
CREATE TABLE `group_details` (
  `group_id` int(11) NOT NULL AUTO_INCREMENT,
  `group_alias_name` varchar(20) NOT NULL,
  `group_name` varchar(100) NOT NULL,
  `access_group_id` varchar(100) NOT NULL,
  `active_status` varchar(20) NOT NULL,
  `r_user_type_id` int(11) NOT NULL,
  PRIMARY KEY (`group_id`),
  KEY `group_details_r_user_type_id_bb1df91d_fk_user_type` (`r_user_type_id`),
  CONSTRAINT `group_details_r_user_type_id_bb1df91d_fk_user_type` FOREIGN KEY (`r_user_type_id`) REFERENCES `user_type_master` (`user_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `group_details` (`group_id`, `group_alias_name`, `group_name`, `access_group_id`, `active_status`, `r_user_type_id`) VALUES
(1,	'FA',	'Finance admin',	'1',	'Y',	1);

DROP TABLE IF EXISTS `status_details`;
CREATE TABLE `status_details` (
  `status_id` int(11) NOT NULL AUTO_INCREMENT,
  `status_code` varchar(10) NOT NULL,
  `status_name` varchar(100) NOT NULL,
  `front_end` varchar(100) NOT NULL,
  `r_group_id` int(11) NOT NULL,
  PRIMARY KEY (`status_id`),
  KEY `status_details_r_group_id_a042e739_fk_group_details_group_id` (`r_group_id`),
  CONSTRAINT `status_details_r_group_id_a042e739_fk_group_details_group_id` FOREIGN KEY (`r_group_id`) REFERENCES `group_details` (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `status_details` (`status_id`, `status_code`, `status_name`, `front_end`, `r_group_id`) VALUES
(1,	'RQ',	'NEW',	's-new',	1);

DROP TABLE IF EXISTS `user_details`;
CREATE TABLE `user_details` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `additional_info` varchar(100) NOT NULL,
  `time_zone` varchar(100) NOT NULL,
  `created_by` varchar(11) NOT NULL,
  `created_date` date NOT NULL,
  `updated_by` int(11) NOT NULL,
  `status` varchar(10) NOT NULL,
  `r_corporate_id` int(11) NOT NULL,
  `r_group_id` int(11) NOT NULL,
  `r_status_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `user_details_r_corporate_id_a3ce7338_fk_corporate` (`r_corporate_id`),
  KEY `user_details_r_group_id_c44fbf83_fk_group_details_group_id` (`r_group_id`),
  KEY `user_details_r_status_id_6f36ebd1_fk_status_details_status_id` (`r_status_id`),
  CONSTRAINT `user_details_r_corporate_id_a3ce7338_fk_corporate` FOREIGN KEY (`r_corporate_id`) REFERENCES `corporate_details` (`corporate_id`),
  CONSTRAINT `user_details_r_group_id_c44fbf83_fk_group_details_group_id` FOREIGN KEY (`r_group_id`) REFERENCES `group_details` (`group_id`),
  CONSTRAINT `user_details_r_status_id_6f36ebd1_fk_status_details_status_id` FOREIGN KEY (`r_status_id`) REFERENCES `status_details` (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `user_details` (`user_id`, `user_name`, `password`, `additional_info`, `time_zone`, `created_by`, `created_date`, `updated_by`, `status`, `r_corporate_id`, `r_group_id`, `r_status_id`) VALUES
(1,	'arun@arun.com',	'5b8d2ec940b1099b2bc1802604d15d97',	'',	'',	'1',	'2020-04-22',	1,	'Y',	1,	1,	1);

DROP TABLE IF EXISTS `user_type_master`;
CREATE TABLE `user_type_master` (
  `user_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_type_name` varchar(100) NOT NULL,
  `user_type_status` varchar(100) NOT NULL,
  PRIMARY KEY (`user_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `user_type_master` (`user_type_id`, `user_type_name`, `user_type_status`) VALUES
(1,	'Finance',	'Y');

DROP TABLE IF EXISTS `wallet_details`;
CREATE TABLE `wallet_details` (
  `wallet` int(11) NOT NULL AUTO_INCREMENT,
  `wallet_account` varchar(100) NOT NULL,
  `main_balance` int(11) NOT NULL,
  `last_topup_amount` int(11) NOT NULL,
  `last_topup_date` date NOT NULL,
  `topup_by` int(11) NOT NULL,
  `remarks` varchar(100) NOT NULL,
  `status` varchar(2) NOT NULL,
  `r_corporate_id` int(11) NOT NULL,
  PRIMARY KEY (`wallet`),
  KEY `wallet_details_r_corporate_id_2c855f85_fk_corporate` (`r_corporate_id`),
  CONSTRAINT `wallet_details_r_corporate_id_2c855f85_fk_corporate` FOREIGN KEY (`r_corporate_id`) REFERENCES `corporate_details` (`corporate_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `wallet_details` (`wallet`, `wallet_account`, `main_balance`, `last_topup_amount`, `last_topup_date`, `topup_by`, `remarks`, `status`, `r_corporate_id`) VALUES
(1,	'INFIW87897',	1000,	100,	'2020-04-22',	1,	'',	'Y',	1);

-- 2020-04-23 06:30:34
