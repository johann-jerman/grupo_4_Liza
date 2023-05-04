CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   `care` TEXT,
   `description` TEXT NOT NULL,
   `price` INT NOT NULL,
   `stock` INT NOT NULL,
   `offer` INT,
   `category_id` INT,
   `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `colors` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `color` VARCHAR(100),
   `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `sizes` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `size` VARCHAR(100),
   `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `images` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `image` VARCHAR(255),
   `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   `lastname` VARCHAR(100) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `image` VARCHAR(255),
   `user_category_id` INT,
   `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `userCategory` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `category` VARCHAR(255),
   `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `favorite` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `users_id` INT,
   `products_id` INT,
   `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `productCart` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `users_id` INT,
   `products_id` INT,
   `total` INT,
   `unitPrice` INT,
   `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `comments` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `date` DATE,
   `comment` TEXT,
   `users_id` INT,
   `products_id` INT,
   `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categorysProduct` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `category` VARCHAR(100) NOT NULL,
   `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `color_products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `color_id` int,
   `product_id` int,
   `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `size_products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `size_id` int,
   `product_id` int,
   `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `image_products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `image_id` int,
   `product_id` int,
   `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `products` ADD CONSTRAINT `FK_fefec837-67c0-4da4-a925-7a680145cad8` FOREIGN KEY (`category_id`) REFERENCES `categorysProduct`(`id`)  ;

ALTER TABLE `users` ADD CONSTRAINT `FK_86420a92-1653-4292-9f19-6d32cbd02f5b` FOREIGN KEY (`user_category_id`) REFERENCES `usercategory`(`id`)  ;

ALTER TABLE `favorite` ADD CONSTRAINT `FK_df032319-ec14-47df-bd6c-185aa7c03617` FOREIGN KEY (`users_id`) REFERENCES `users`(`id`)  ;

ALTER TABLE `favorite` ADD CONSTRAINT `FK_d17539e5-cb1e-4789-8f75-1ac922a5b232` FOREIGN KEY (`products_id`) REFERENCES `products`(`id`)  ;

ALTER TABLE `productCart` ADD CONSTRAINT `FK_c1f2982f-8aa2-418d-8c0b-d75ea9856880` FOREIGN KEY (`users_id`) REFERENCES `users`(`id`)  ;

ALTER TABLE `productCart` ADD CONSTRAINT `FK_c87139f9-66aa-4a23-8bd1-3318f0372cde` FOREIGN KEY (`products_id`) REFERENCES `products`(`id`)  ;

ALTER TABLE `comments` ADD CONSTRAINT `FK_f9ac7f88-4444-44f2-b149-db37008cf85d` FOREIGN KEY (`users_id`) REFERENCES `users`(`id`)  ;

ALTER TABLE `comments` ADD CONSTRAINT `FK_3fedb8a1-28e2-4115-aa82-fddc5f4df7fb` FOREIGN KEY (`products_id`) REFERENCES `products`(`id`)  ;

ALTER TABLE `color_products` ADD CONSTRAINT `FK_80db95f4-1433-4863-a79c-89f628520b99` FOREIGN KEY (`color_id`) REFERENCES `colors`(`id`)  ;

ALTER TABLE `color_products` ADD CONSTRAINT `FK_50575291-157b-4b3b-bd02-3d53aeb5729b` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)  ;

ALTER TABLE `size_products` ADD CONSTRAINT `FK_fa983ba0-4a25-4312-b780-b5d92b7f0e41` FOREIGN KEY (`size_id`) REFERENCES `sizes`(`id`)  ;

ALTER TABLE `size_products` ADD CONSTRAINT `FK_991c9fcf-f51f-405b-916e-92c534f0ff98` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)  ;

ALTER TABLE `image_products` ADD CONSTRAINT `FK_eb8bb568-f30a-4415-bdb5-7f1a40d6e850` FOREIGN KEY (`image_id`) REFERENCES `images`(`id`)  ;

ALTER TABLE `image_products` ADD CONSTRAINT `FK_e0547c9c-e50f-4c6d-bfee-4debb2fac256` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)  ;


