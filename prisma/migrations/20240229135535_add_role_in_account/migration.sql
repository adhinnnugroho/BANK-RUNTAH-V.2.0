-- AlterTable
ALTER TABLE `account` ADD COLUMN `Role` ENUM('User', 'Driver', 'Admin') NOT NULL DEFAULT 'User';
