/*
  Warnings:

  - You are about to drop the column `duracionMin` on the `clases` table. All the data in the column will be lost.
  - You are about to alter the column `nombre` on the `clases` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(80)`.
  - You are about to alter the column `dia` on the `horarios` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(20)`.
  - You are about to alter the column `horaInicio` on the `horarios` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(5)`.
  - You are about to alter the column `entrenador` on the `horarios` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(80)`.
  - The values [lista_espera,asistio] on the enum `inscripciones_estado` will be removed. If these variants are still used in the database, this will fail.
  - You are about to alter the column `nombre` on the `miembros` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(120)`.
  - You are about to alter the column `correo` on the `miembros` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(160)`.
  - Added the required column `membresia` to the `miembros` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `horarios` DROP FOREIGN KEY `horarios_claseId_fkey`;

-- DropForeignKey
ALTER TABLE `inscripciones` DROP FOREIGN KEY `inscripciones_horarioId_fkey`;

-- DropForeignKey
ALTER TABLE `inscripciones` DROP FOREIGN KEY `inscripciones_miembroId_fkey`;

-- AlterTable
ALTER TABLE `clases` DROP COLUMN `duracionMin`,
    MODIFY `nombre` VARCHAR(80) NOT NULL,
    MODIFY `descripcion` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `horarios` MODIFY `dia` VARCHAR(20) NOT NULL,
    MODIFY `horaInicio` VARCHAR(5) NOT NULL,
    MODIFY `entrenador` VARCHAR(80) NOT NULL;

-- AlterTable
ALTER TABLE `inscripciones` MODIFY `estado` ENUM('confirmada', 'cancelada') NOT NULL DEFAULT 'confirmada';

-- AlterTable
ALTER TABLE `miembros` ADD COLUMN `membresia` VARCHAR(20) NOT NULL,
    MODIFY `nombre` VARCHAR(120) NOT NULL,
    MODIFY `correo` VARCHAR(160) NOT NULL;

-- AddForeignKey
ALTER TABLE `horarios` ADD CONSTRAINT `horarios_claseId_fkey` FOREIGN KEY (`claseId`) REFERENCES `clases`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inscripciones` ADD CONSTRAINT `inscripciones_horarioId_fkey` FOREIGN KEY (`horarioId`) REFERENCES `horarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inscripciones` ADD CONSTRAINT `inscripciones_miembroId_fkey` FOREIGN KEY (`miembroId`) REFERENCES `miembros`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `horarios` RENAME INDEX `horarios_claseId_fkey` TO `horarios_claseId_idx`;

-- RenameIndex
ALTER TABLE `inscripciones` RENAME INDEX `inscripciones_miembroId_fkey` TO `inscripciones_miembroId_idx`;
