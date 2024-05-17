-- CreateTable
CREATE TABLE `Account` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_address` INTEGER NULL,
    `name` VARCHAR(191) NULL,
    `username` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `avatar` VARCHAR(191) NULL,
    `telp` VARCHAR(191) NULL,
    `tanggal_lahir` DATETIME(3) NULL,
    `passwordAttempts` INTEGER NOT NULL DEFAULT 0,
    `statusAccount` ENUM('Active', 'Deactive') NOT NULL DEFAULT 'Active',
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
