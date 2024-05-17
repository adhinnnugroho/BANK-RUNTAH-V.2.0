-- CreateTable
CREATE TABLE `list_menu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `icons` VARCHAR(255) NOT NULL,
    `Name` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
