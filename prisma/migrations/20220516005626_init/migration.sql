-- CreateTable
CREATE TABLE `matches` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `matchid` VARCHAR(191) NULL,
    `elo` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `augments_match_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `matchid` VARCHAR(191) NULL,
    `elo` VARCHAR(191) NULL,
    `game_version` VARCHAR(191) NULL,
    `placement` VARCHAR(191) NULL,
    `augment` VARCHAR(191) NULL,
    `api_name` VARCHAR(191) NULL,
    `tier` VARCHAR(191) NULL,
    `round` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
