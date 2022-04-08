-- CreateTable
CREATE TABLE `augments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `tier` VARCHAR(191) NULL,
    `pickrate` VARCHAR(191) NULL,
    `winrate` VARCHAR(191) NULL,
    `top4` VARCHAR(191) NULL,
    `stage14` VARCHAR(191) NULL,
    `stage33` VARCHAR(191) NULL,
    `stage46` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
