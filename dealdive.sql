-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 21, 2024 at 12:36 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dealdive`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `username` varchar(255) NOT NULL,
  `cart` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`username`, `cart`) VALUES
('ayush', '12,69,179,3,4,3,3,3,3,192,198,192,192,4,102,103,');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `name` varchar(255) NOT NULL,
  `pid` int(255) NOT NULL,
  `price` int(255) NOT NULL,
  `store` varchar(255) NOT NULL,
  `cetegeory` varchar(255) NOT NULL,
  `quantity` varchar(255) NOT NULL,
  `disc` text NOT NULL,
  `ingredient` text NOT NULL,
  `img` varchar(255) NOT NULL,
  `xp` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`name`, `pid`, `price`, `store`, `cetegeory`, `quantity`, `disc`, `ingredient`, `img`, `xp`) VALUES
('Avacado', 1, 100, 'Local store', 'Fruits', '1kg', '', '', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=1000,h=1000/app/assets/products/large_images/jpeg/9a1925e2-fae1-415d-a40f-740d667bff92.jpg?ts=1708590980', 3),
('Eggs', 2, 120, 'Local store', 'Poultry', '12pcs', '', '', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1000/app/assets/products/sliding_images/jpeg/7d48ff24-6659-4107-be92-6d05b7230504.jpg?ts=1720380937', 5),
('Bartlett Pear', 3, 80, 'Local store', 'Fruits', '1kg', '', '', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1000/app/assets/products/sliding_images/jpeg/9a2ae9cc-0f65-4f16-9d20-a130e6ca49e2.jpg?ts=1720166228', 3),
('Mango', 4, 70, 'Local store', 'Fruits', '1kg', '', '', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=1000,h=1000/app/assets/products/large_images/jpeg/21305895-68a7-42ff-b31e-64144f6237ed.jpg?ts=1719414053', 3),
('Beetroot', 5, 50, 'Local store', 'Vegetables', '500g', '', '', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=1000,h=1000/app/assets/products/sliding_images/jpeg/ea40db28-bc65-42f4-8bbc-b393b395619f.jpg?ts=1711472827', 3),
('vege', 6, 100, 'Local store', 'Vegetables', '1kg', '', '', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=1000,h=1000/app/images/products/sliding_image/504097a.jpg?ts=1689328470', 3),
('Dragon fruit', 7, 150, 'Local store', 'Fruits', '500g', '', '', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=1000,h=1000/app/assets/products/sliding_images/jpeg/115b4c19-fa52-43a6-88d4-5f2a3429987f.jpg?ts=1711473134', 3),
('Onion', 8, 50, 'Local store', 'Vegetables', '1kg', '', '', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=1000,h=1000/app/assets/products/sliding_images/jpeg/d104419e-e128-405a-ae42-13794e50858d.jpg?ts=1711010249', 3),
('Potato', 9, 40, 'Local store', 'Vegetables', '1kg', '', '', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=1000,h=1000/app/assets/products/sliding_images/jpeg/6e01f1d0-454d-46a6-85f9-8866b0875eed.jpg?ts=1711473366', 3),
('Cauliflower', 10, 80, 'Local store', 'Vegetables', '500g', '', '', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=1000,h=1000/app/assets/products/sliding_images/jpeg/24fb36c3-fbd3-42b9-abfa-44b2bd7f1971.jpg?ts=1713868640', 3),
('Apple', 101, 50, 'Fresh Mart', 'Fruits', '1kg', 'Fresh red apples', 'Apples', 'https://www.goodfruit.com/wp-content/uploads/snowflakeApple.jpg', 3),
('Bread', 102, 30, 'Bake House', 'Bakery', '500g', 'Whole wheat bread', 'Wheat, Yeast, Salt', 'https://www.goldmedalbakery.com/content/uploads/2019/12/Sandwich-White.jpg', 8),
('Milk', 103, 25, 'Dairy Land', 'Dairy', '1L', 'Full cream milk', 'Milk', 'https://www.bigbasket.com/media/uploads/p/l/40248005-2_1-amul-buffalo-milk-uht-treated-calcium-rich-no-preservatives.jpg', 9),
('Rice', 104, 60, 'Grain Store', 'Grains', '5kg', 'Basmati rice', 'Rice', 'https://images.jdmagicbox.com/quickquotes/images_main/rice-bag-2214639878-bnfdfbsx.jpg', 4),
('Eggs', 105, 70, 'Poultry Hub', 'Poultry', '12pcs', 'Fresh farm eggs', 'Eggs', 'https://www.heart.org/-/media/Images/News/2018/August-2018/0816Eggs_SC.jpg?h=501&w=800', 5),
('Orange Juice', 106, 45, 'Juice World', 'Beverages', '1L', 'Fresh orange juice', 'Oranges, Water, Sugar', 'https://wingreensworld.com/cdn/shop/products/OJ250ml01.jpg?v=1687333944&width=750', 10),
('Chicken', 107, 150, 'Meat Market', 'Meat', '1kg', 'Fresh chicken meat', 'Chicken', 'https://www.bigbasket.com/media/uploads/p/l/40199811_1-fresho-chicken-whole-with-skin-b.jpg', 12),
('Pasta', 108, 80, 'Italian Delights', 'Pasta', '500g', 'Italian pasta', 'Wheat, Eggs, Salt', 'https://media.istockphoto.com/id/1165125774/photo/transparent-plastic-pasta-bag-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=askYrIUlxrhrf0nEVAFkCBErLCmyMe0UjpyNnPPY4-U=', 8),
('Yogurt', 109, 40, 'Dairy Land', 'Dairy', '500g', 'Natural yogurt', 'Milk, Bacterial Cultures', 'https://www.feastingathome.com/wp-content/uploads/2023/08/homemade-yogurt-2.jpg', 9),
('Tomato', 110, 30, 'Fresh Mart', 'Vegetables', '1kg', 'Fresh tomatoes', 'Tomatoes', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/330px-Tomato_je.jpg', 3),
('Banana', 111, 40, 'Fresh Mart', 'Fruits', '1kg', 'Fresh bananas', 'Bananas', 'https://hips.hearstapps.com/hmg-prod/images/bananas-royalty-free-image-1702061943.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*', 3),
('Cheese', 112, 90, 'Dairy Land', 'Dairy', '200g', 'Cheddar cheese', 'Milk, Salt, Enzymes', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjV2sf2ABIBzowGOSb9ba2x7E-cFG4EOUh5w&s', 9),
('Butter', 113, 50, 'Dairy Land', 'Dairy', '200g', 'Unsalted butter', 'Cream, Salt', 'https://www.allrecipes.com/thmb/4r0EnOqfO2AZEyjAb6GtUGAVPn4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_107521418-2000-d41554ac575447449a1ebbc93835cef8.jpg', 9),
('Carrot', 114, 25, 'Fresh Mart', 'Vegetables', '1kg', 'Fresh carrots', 'Carrots', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MNFLYUgOzVNEPd2Iaphj7Xp7PNNQhBCpww&s', 3),
('Potato', 115, 20, 'Fresh Mart', 'Vegetables', '1kg', 'Fresh potatoes', 'Potatoes', 'https://m.media-amazon.com/images/I/313dtY-LOEL._AC_UF1000,1000_QL80_.jpg', 3),
('Spinach', 116, 35, 'Fresh Mart', 'Vegetables', '500g', 'Fresh spinach', 'Spinach', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWeLtrc_d_I0fRUVPT8pNEiiR2cswKU-pdQ&s', 3),
('Fish', 118, 180, 'Seafood Market', 'Seafood', '1kg', 'Fresh fish fillets', 'Fish', 'https://m.media-amazon.com/images/I/71n8vgi66wL._AC_UL480_FMwebp_QL65_.jpg', 13),
('Shrimp', 119, 250, 'Seafood Market', 'Seafood', '1kg', 'Fresh shrimp', 'Shrimp', 'https://m.media-amazon.com/images/I/616WTWY2DZL._AC_UF1000,1000_QL80_.jpg', 13),
('Cereal', 120, 70, 'Grocery Store', 'Breakfast', '500g', 'Cornflakes', 'Corn, Sugar, Salt', 'https://www.kelloggs.com/content/dam/Asia/kelloggs_in/images/articles/benefits-of-cereal.jpg', 17),
('Coffee', 121, 150, 'Coffee House', 'Beverages', '250g', 'Ground coffee', 'Coffee beans', 'https://bonhomiaworld.com/cdn/shop/products/1_c3039941-0d4f-49ff-b63f-3e358472f527.jpg?v=1631007429', 10),
('Tea', 122, 100, 'Tea House', 'Beverages', '200g', 'Green tea', 'Green tea leaves', 'https://plantyum.in/cdn/shop/files/IMG-8026_a01c05d3-7d37-41ab-a546-c646d0d253a4.jpg?v=1702559412&width=1946', 10),
('Sugar', 123, 40, 'Grocery Store', 'Baking', '1kg', 'Granulated sugar', 'Sugar', 'https://www.tasteofhome.com/wp-content/uploads/2019/11/sugar-shutterstock_615908132.jpg?fit=700%2C800', 15),
('Salt', 124, 20, 'Grocery Store', 'Baking', '1kg', 'Table salt', 'Salt', 'https://images-cdn.ubuy.co.in/6633e99908a57e66464c54b2-morton-table-salt-all-purpose.jpg', 15),
('Pepper', 125, 60, 'Spice World', 'Spices', '100g', 'Black pepper', 'Black pepper', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyjPiCupnn3m8CTO9d7R4tnVq2QlNJRJbDWg&s', 9),
('Olive Oil', 126, 200, 'Oil Store', 'Cooking Oils', '1L', 'Extra virgin olive oil', 'Olive oil', 'https://pureandsure.in/cdn/shop/files/Oliveoil500mlF.jpg?v=1698646234', 5),
('Vinegar', 127, 50, 'Grocery Store', 'Condiments', '500ml', 'White vinegar', 'Vinegar', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Coconut_Vinegar_%288681608491%29.jpg/150px-Coconut_Vinegar_%288681608491%29.jpg', 14),
('Ketchup', 128, 70, 'Grocery Store', 'Condiments', '500g', 'Tomato ketchup', 'Tomatoes, Sugar, Vinegar, Salt', 'https://m.media-amazon.com/images/I/71VuoFEeWNL.jpg', 14),
('Mustard', 129, 60, 'Grocery Store', 'Condiments', '200g', 'Yellow mustard', 'Mustard seeds, Vinegar, Salt', 'https://m.media-amazon.com/images/I/61TmXHj2qcL.jpg', 14),
('Honey', 131, 120, 'Honey Farm', 'Sweeteners', '500g', 'Pure honey', 'Honey', 'https://img.etimg.com/thumb/width-1600,height-900,imgsize-76040,resizemode-75,msid-105536022/news/how-to/is-your-honey-pure-here-is-how-to-test-the-purity-at-home.jpg', 5),
('Jam', 132, 90, 'Grocery Store', 'Spreads', '500g', 'Strawberry jam', 'Strawberries, Sugar, Pectin', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLR82CAsBR-7x3L_9-vDCfJ-xfwPnuus8Cw&s', 10),
('Almonds', 134, 150, 'Nut Store', 'Nuts', '500g', 'Raw almonds', 'Almonds', 'https://media.npr.org/assets/img/2019/06/12/gettyimages-936548966_custom-9284479c67719db23f89227d16a894a598b1303d.jpg?s=1100&c=50&f=jpeg', 5),
('Walnuts', 135, 180, 'Nut Store', 'Nuts', '500g', 'Raw walnuts', 'Walnuts', 'https://m.media-amazon.com/images/I/61alIeKNNOL.jpg', 5),
('Raisins', 136, 70, 'Nut Store', 'Dried Fruits', '500g', 'Dried raisins', 'Raisins', 'https://royalfantasy.in/cdn/shop/products/Indian-Raisins-Jumbo-1.jpg?v=1627564883', 5),
('Oats', 137, 60, 'Grocery Store', 'Breakfast', '500g', 'Rolled oats', 'Oats', 'https://media.post.rvohealth.io/wp-content/uploads/2020/03/oats-oatmeal-732x549-thumbnail.jpg', 17),
('Flour', 138, 50, 'Grocery Store', 'Baking', '1kg', 'All-purpose flour', 'Wheat', 'https://m.media-amazon.com/images/I/61RMv9KaeLL.jpg', 15),
('Baking Powder', 139, 30, 'Grocery Store', 'Baking', '200g', 'Baking powder', 'Baking soda, Cream of tartar', 'https://m.media-amazon.com/images/I/81PR-xGqKQL._AC_UF1000,1000_QL80_.jpg', 15),
('Baking Soda', 140, 20, 'Grocery Store', 'Baking', '200g', 'Baking soda', 'Sodium bicarbonate', 'https://hips.hearstapps.com/hmg-prod/images/health-uses-baking-soda-1536358343.jpg?crop=0.502xw:1.00xh;0.0977xw,0&resize=1200:*', 15),
('Chocolate', 141, 120, 'Sweet Shop', 'Sweets', '200g', 'Dark chocolate', 'Cocoa, Sugar, Cocoa butter', 'https://media.post.rvohealth.io/wp-content/uploads/2021/02/dark-chocolate-bar-732x549-thumbnail-732x549.jpg', 13),
('Ice Cream', 142, 150, 'Ice Cream Parlor', 'Frozen Desserts', '1L', 'Vanilla ice cream', 'Milk, Cream, Sugar, Vanilla', 'https://buttermilkbysam.com/wp-content/uploads/2023/07/no-churn-chocolate-ice-cream-7.jpg', 17),
('Chips', 143, 50, 'Snack Shop', 'Snacks', '200g', 'Potato chips', 'Potatoes, Oil, Salt', 'https://m.media-amazon.com/images/I/512bWT7n9qL._AC_UF1000,1000_QL80_.jpg', 7),
('Cookies', 144, 80, 'Bake House', 'Bakery', '300g', 'Chocolate chip cookies', 'Flour, Sugar, Butter, Chocolate', 'https://www.verybestbaking.com/sites/g/files/jgfbjl326/files/srh_recipes/d0cdf375f3867232d222a35cbb76e049.jpg', 8),
('Crackers', 145, 70, 'Snack Shop', 'Snacks', '200g', 'Saltine crackers', 'Flour, Salt, Oil', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc35Dk3A_aThsHeD51YhvRREwZ4NUkxLW5MA&s', 7),
('Soda', 146, 40, 'Beverage Store', 'Beverages', '1L', 'Cola soda', 'Carbonated water, Sugar, Flavoring', 'https://5.imimg.com/data5/SELLER/Default/2023/10/350685869/UR/VZ/ZY/9399232/300ml-club-soda-500x500.jpg', 10),
('Juice', 147, 60, 'Juice World', 'Beverages', '1L', 'Mixed fruit juice', 'Various fruits, Water, Sugar', 'https://media.post.rvohealth.io/wp-content/uploads/2024/01/fruit-juice-bottles-732x549-thumbnail.jpg', 10),
('Water', 148, 20, 'Beverage Store', 'Beverages', '1L', 'Bottled water', 'Water', 'https://media.post.rvohealth.io/wp-content/uploads/2020/08/11178-Different_types_of_water_thumbnail-732x549-1-732x549.jpg', 10),
('Beer', 149, 100, 'Liquor Store', 'Alcoholic Beverages', '1L', 'Lager beer', 'Water, Barley, Hops, Yeast', 'https://mansionz.in/cdn/shop/files/TUBORGSTRONGBEER.jpg?v=1715692447', 5),
('Wine', 150, 300, 'Liquor Store', 'Alcoholic Beverages', '750ml', 'Red wine', 'Grapes', 'https://m.media-amazon.com/images/I/5129-mIYHIL._AC_UF1000,1000_QL80_.jpg', 5),
('Tuna', 151, 120, 'Seafood Market', 'Seafood', '500g', 'Canned tuna', 'Tuna, Water, Salt', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVNG_11v2_9AK670cBmtJglfJqNb-9s5ezgw&s', 13),
('Salmon', 152, 200, 'Seafood Market', 'Seafood', '1kg', 'Fresh salmon fillets', 'Salmon', 'https://rukminim2.flixcart.com/image/850/1000/l4ei1e80/seafood/q/d/c/500-indian-salmon-fish-1-fish-meatkart-original-imagfbb2mhhgbz37.jpeg?q=90&crop=false', 13),
('Mackerel', 153, 180, 'Seafood Market', 'Seafood', '1kg', 'Fresh mackerel', 'Mackerel', 'https://m.media-amazon.com/images/I/514FU3kkVhL._AC_UF1000,1000_QL80_.jpg', 13),
('Chicken Breasts', 154, 150, 'Meat Market', 'Meat', '1kg', 'Skinless chicken breasts', 'Chicken', 'https://www.allrecipes.com/thmb/Z5s08uvHYI2dg5LAd0vwoA47Ngo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/240208_simplebakedchickenbreasts_mfs_step1_0181-1-4x3-250b3f145a194aa3bab88e94e3cbae73.jpg', 12),
('Kidney Beans', 156, 60, 'Grocery Store', 'Pulses', '500g', 'Red kidney beans', 'Kidney beans', 'https://m.media-amazon.com/images/I/51kklYWNv9L._AC_UF1000,1000_QL80_.jpg', 5),
('White Beans', 157, 50, 'Grocery Store', 'Pulses', '500g', 'White beans', 'White beans', 'https://m.media-amazon.com/images/I/61xqWH7-TqL._AC_UF1000,1000_QL80_.jpg', 5),
('Green Lentils', 158, 70, 'Grocery Store', 'Pulses', '500g', 'Green lentils', 'Green lentils', 'https://3.imimg.com/data3/YA/HP/MY-10601694/green-lentil-250x250.jpg', 5),
('Chopped Tomatoes', 159, 40, 'Grocery Store', 'Canned Goods', '500g', 'Canned chopped tomatoes', 'Tomatoes, Salt', 'https://m.media-amazon.com/images/I/61lAVPZJOKL._AC_UF894,1000_QL80_.jpg', 5),
('Porridge Oats', 160, 80, 'Grocery Store', 'Breakfast', '500g', 'Wholegrain oats', 'Oats', 'https://images-eu.ssl-images-amazon.com/images/I/71OI-ppZKxL._AC_UL200_SR200,200_.jpg', 17),
('Basil', 161, 30, 'Spice World', 'Herbs & Spices', '100g', 'Fresh basil', 'Basil', 'https://m.media-amazon.com/images/I/71YRPN7VqYL._AC_UF1000,1000_QL80_.jpg', 5),
('Oregano', 162, 30, 'Spice World', 'Herbs & Spices', '100g', 'Fresh oregano', 'Oregano', 'https://media.post.rvohealth.io/wp-content/uploads/2020/08/oregano-flakes-spoon-thumb.jpg', 5),
('Coriander', 163, 30, 'Spice World', 'Herbs & Spices', '100g', 'Fresh coriander', 'Coriander', 'https://m.media-amazon.com/images/I/41oCRXEnZQL._AC_UF1000,1000_QL80_.jpg', 5),
('Cumin', 164, 40, 'Spice World', 'Herbs & Spices', '100g', 'Ground cumin', 'Cumin', 'https://www.indianasapplepie.com/cdn/shop/articles/IMG-1444_1600x.jpg?v=1689862468', 5),
('Avocado', 165, 100, 'Fresh Mart', 'Fruits', '1kg', 'Fresh avocados', 'Avocados', 'https://cdn.britannica.com/72/170772-050-D52BF8C2/Avocado-fruits.jpg', 3),
('Blueberries', 166, 150, 'Fresh Mart', 'Fruits', '500g', 'Fresh blueberries', 'Blueberries', 'https://m.media-amazon.com/images/I/51jk5Ao6NIL._AC_UF1000,1000_QL80_.jpg', 3),
('Lemons', 167, 60, 'Fresh Mart', 'Fruits', '1kg', 'Fresh lemons', 'Lemons', 'https://www.starhealth.in/blog/wp-content/uploads/2022/12/01-4.jpg', 3),
('Onions', 168, 30, 'Fresh Mart', 'Vegetables', '1kg', 'Fresh onions', 'Onions', 'https://m.media-amazon.com/images/I/41Pi5dfvOoL.jpg', 3),
('Garlic', 169, 40, 'Fresh Mart', 'Vegetables', '500g', 'Fresh garlic', 'Garlic', 'https://static.toiimg.com/thumb/msid-105445525,width-1280,height-720,resizemode-4/105445525.jpg', 3),
('Bell Peppers', 170, 80, 'Fresh Mart', 'Vegetables', '1kg', 'Fresh bell peppers', 'Bell peppers', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3JAzZgxrJm_AKlOm1me6_u0PdvCi8NOUMqQ&s', 3),
('Gauva', 171, 100, 'Fresh Mart', 'Fruits', '1kg', 'Fresh gauvas', 'Gauvas', 'https://5.imimg.com/data5/SELLER/Default/2023/5/310076334/BP/PW/MX/2229642/guava-plants.jpg', 3),
('Carrots', 172, 25, 'Fresh Mart', 'Vegetables', '1kg', 'Fresh carrots', 'Carrots', 'https://m.media-amazon.com/images/I/71S6oQqVa5L._AC_UF1000,1000_QL80_.jpg', 3),
('Cucumbers', 173, 30, 'Fresh Mart', 'Vegetables', '1kg', 'Fresh cucumbers', 'Cucumbers', 'https://seed2plant.in/cdn/shop/products/saladcucumberseeds.jpg?v=1603435556', 3),
('Lettuce', 174, 40, 'Fresh Mart', 'Vegetables', '500g', 'Fresh lettuce', 'Lettuce', 'https://cdn.britannica.com/77/170677-050-F7333D51/lettuce.jpg', 3),
('Broccoli', 175, 50, 'Fresh Mart', 'Vegetables', '1kg', 'Fresh broccoli', 'Broccoli', 'https://cdn.britannica.com/25/78225-050-1781F6B7/broccoli-florets.jpg', 3),
('Spinach', 176, 35, 'Fresh Mart', 'Vegetables', '500g', 'Fresh spinach', 'Spinach', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWeLtrc_d_I0fRUVPT8pNEiiR2cswKU-pdQ&s', 3),
('Potatoes', 177, 20, 'Fresh Mart', 'Vegetables', '1kg', 'Fresh potatoes', 'Potatoes', 'https://www.jiomart.com/images/product/original/590000090/potato-1-kg-product-images-o590000090-p590000090-0-202207291750.jpg?im=Resize=(420,420)', 3),
('Tomatoes', 178, 30, 'Fresh Mart', 'Vegetables', '1kg', 'Fresh tomatoes', 'Tomatoes', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg', 3),
('Apples', 179, 50, 'Fresh Mart', 'Fruits', '1kg', 'Fresh red apples', 'Apples', 'https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg', 3),
('Bananas', 180, 40, 'Fresh Mart', 'Fruits', '1kg', 'Fresh bananas', 'Bananas', 'https://th-thumbnailer.cdn-si-edu.com/xK6NAJHiv_51fzn5sDiQt0eD5Is=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d5/24/d5243019-e0fc-4b3c-8cdb-48e22f38bff2/istock-183380744.jpg', 3),
('Grapes', 181, 90, 'Fresh Mart', 'Fruits', '1kg', 'Fresh grapes', 'Grapes', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuN5a-ewbkOUIcdfjKFIH5I0uDRO7meYwD-A&s', 3),
('Strawberries', 182, 150, 'Fresh Mart', 'Fruits', '500g', 'Fresh strawberries', 'Strawberries', 'https://www.allrecipes.com/thmb/1c99SWam7_FM6vUzpDDzIKffMR4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-strawberry-fruit-or-vegetable-f6dd901427714e46af2d706a57b9016f.jpg', 3),
('Peaches', 183, 80, 'Fresh Mart', 'Fruits', '1kg', 'Fresh peaches', 'Peaches', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTykiCamrC1FFU_oc67Q-Wo3Lko9uABc-W8lw&s', 3),
('Oranges', 184, 60, 'Fresh Mart', 'Fruits', '1kg', 'Fresh oranges', 'Oranges', 'https://cdn-prod.medicalnewstoday.com/content/images/articles/272/272782/oranges-in-a-box.jpg', 3),
('Pineapple', 185, 100, 'Fresh Mart', 'Fruits', '1kg', 'Fresh pineapple', 'Pineapple', 'https://m.media-amazon.com/images/I/71bNsWlkyeL.jpg', 3),
('Mangoes', 186, 120, 'Fresh Mart', 'Fruits', '1kg', 'Fresh mangoes', 'Mangoes', 'https://m.media-amazon.com/images/I/51FRr8EcA8L.jpg', 3),
('Watermelon', 187, 70, 'Fresh Mart', 'Fruits', '1kg', 'Fresh watermelon', 'Watermelon', 'https://www.bigbasket.com/media/uploads/p/xxl/40190485_1-fresho-watermelon-crimson-red.jpg', 3),
('Kiwi', 188, 90, 'Fresh Mart', 'Fruits', '1kg', 'Fresh kiwi', 'Kiwi', 'https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg', 3),
('Pears', 189, 80, 'Fresh Mart', 'Fruits', '1kg', 'Fresh pears', 'Pears', 'https://cdn-magazine.nutrabay.com/wp-content/uploads/2024/02/vertical-shot-fresh-ripe-pears.jpg', 3),
('Plums', 190, 70, 'Fresh Mart', 'Fruits', '1kg', 'Fresh plums', 'Plums', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaaN8sp0hX6gsOUEE-U6mHj0wf_UE40jYEpw&s', 3),
('Cherries', 191, 150, 'Fresh Mart', 'Fruits', '500g', 'Fresh cherries', 'Cherries', 'https://2.imimg.com/data2/XR/JY/MY-4550306/cheery-250x250.jpg', 3),
('Raspberries', 192, 140, 'Fresh Mart', 'Fruits', '500g', 'Fresh raspberries', 'Raspberries', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRDbU7Zo5JRJUzb4Uv8cy_zN8GnBMYLXxxBj8GTyz_gASGVOSrqab35FEA4FjDvMLS5V8&usqp=CAU', 3),
('Blackberries', 193, 130, 'Fresh Mart', 'Fruits', '500g', 'Fresh blackberries', 'Blackberries', 'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/04/28194916/shutterstock_1933979129-1.jpg', 3),
('Cranberries', 194, 120, 'Fresh Mart', 'Fruits', '500g', 'Fresh cranberries', 'Cranberries', 'https://media.post.rvohealth.io/wp-content/uploads/2020/08/cranberries-101-732x549-thumbnail-732x549.jpg', 3),
('Pomegranate', 195, 100, 'Fresh Mart', 'Fruits', '1kg', 'Fresh pomegranate', 'Pomegranate', 'https://www.health.com/thmb/uwTh7XB2O92hRMRupm6Hmkq1Jpw=/2125x0/filters:no_upscale():max_bytes(150000):strip_icc()/Pomegranate-fc75404736b446c5aa26194e1d2b1d0a.jpg', 3),
('Figs', 196, 150, 'Fresh Mart', 'Fruits', '500g', 'Fresh figs', 'Figs', 'https://cdn-prod.medicalnewstoday.com/content/images/articles/327/327207/figs-on-a-table-that-may-be-beneficial-to-health.jpg', 3),
('Dates', 197, 120, 'Fresh Mart', 'Fruits', '500g', 'Fresh dates', 'Dates', 'https://www.bigbasket.com/media/uploads/p/xl/20000727_13-fresho-dates-kimia-with-seed.jpg', 3),
('Apricots', 198, 110, 'Fresh Mart', 'Fruits', '500g', 'Fresh apricots', 'Apricots', 'https://cdn.britannica.com/36/160636-050-B1DC5C0A/Laetrile-apricot-pits.jpg', 3),
('Lychee', 199, 130, 'Fresh Mart', 'Fruits', '500g', 'Fresh lychee', 'Lychee', 'https://rukminim2.flixcart.com/image/850/1000/kpedle80/fruit/v/p/d/1-un-branded-whole-original-imag3nyceatkyazr.jpeg?q=90&crop=false', 3),
('Papaya', 200, 90, 'Fresh Mart', 'Fruits', '1kg', 'Fresh papaya', 'Papaya', 'https://media.istockphoto.com/id/864053288/photo/whole-and-half-of-ripe-papaya-fruit-with-seeds-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=wo29Nr9yzEEQvqIi1vMIQp-kVGkHdsrCspxdWXOI0Dk=', 3),
('Coconut', 201, 50, 'Fresh Mart', 'Fruits', '1kg', 'Fresh coconut', 'Coconut', 'https://www.jiomart.com/images/product/original/590000086/big-coconut-1-pc-approx-350-g-600-g-product-images-o590000086-p590000086-0-202311291444.jpg?im=Resize=(420,420)', 3),
('Coriander Seeds', 202, 89, 'Local Store', 'Spices', '100g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/a4e12eae-d1c5-4a85-9ac5-2d1e008186f0.jpg?ts=1713777032', 5),
('Cinnamon Stick', 203, 65, 'Local Store', 'Spices', '100g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_16598.jpg?ts=1694506105', 5),
('Cloves', 204, 10, 'Local Store', 'Spices', '20g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_525541.jpg?ts=1685970702', 5),
('Black Cardamoms', 205, 149, 'Local Store', 'Spices', '100g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_525533.jpg?ts=1685970701', 5),
('Bay leaf', 206, 15, 'Local Store', 'Spices', '25g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_525531.jpg?ts=1685970701', 5),
('Ginger-Garlic paste', 207, 5, 'Local Store', 'Spices', '5g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/2b67a4fe-3a28-479a-9a6d-561cf71dcc2f.jpg?ts=1711017604', 5),
('Red Chili Powder', 208, 186, 'Local Store', 'Spices', '250g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/0a98843e-3326-4569-80b7-bd79c76bdd08.jpg?ts=1716882875', 5),
('Garam Masala Powder', 209, 125, 'Local Store', 'Spices', '250g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_93038.jpg?ts=1684835004', 5),
('Besan', 210, 105, 'Local Store', 'Flour', '1000g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/06b454d0-026b-4fdf-b66f-dc66c814ffc6.jpg?ts=1707312305', 5),
('Maida', 211, 150, 'Local Store', 'Flour', '1000g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_378916.jpg?ts=1684836095', 5),
('Mustard Seeds', 212, 60, 'Local Store', 'Spices', '200g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_525532.jpg?ts=1685970701', 5),
('Hing', 213, 100, 'Local Store', 'Spices', '100g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/0dd36b32-4575-4ff2-b45a-c2db4acc0ed8.jpg?ts=1711099599', 5),
('Cooking Oil', 214, 135, 'Local Store', 'Cooking Oil', '1000ml', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_482770.jpg?ts=1684833853', 5),
('Coriander powder', 215, 100, 'Local Store', 'Spices', '100g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/5e0d74bf-2087-436f-a44e-b1e6e48206de.jpg?ts=1716882880', 5),
('Paneer', 216, 105, 'Local Store', 'Dairy', '250g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/f347cbd6-d884-4dce-842c-83fe3cc0ab78.jpg?ts=1707312317', 5),
('Tomato puree', 217, 105, 'Local Store', 'Dairy', '250g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_233518.jpg?ts=1684835175', 5),
('urad dal', 218, 85, 'Local Store', 'Pulses', '1000g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_527603.jpg?ts=1700480144', 5),
('Fenugreek Seeds', 219, 85, 'Local Store', 'Pulses', '100g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/6a3036d6-48bf-4742-9572-0412e6ce8f97.jpg?ts=1712064936', 5),
('Toor Dal', 220, 234, 'Local Store', 'Pulses', '1000g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_24304.jpg?ts=1700477879', 5),
('urad dal', 221, 85, 'Local Store', 'Lentils', '1000g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_289033.jpg?ts=1700477891', 5),
('Tamarind', 222, 85, 'Local Store', 'Fs', '1000g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_528024.jpg?ts=1689336079', 5),
('Pav', 223, 85, 'Local Store', 'Bakery', '200g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_65677.jpg?ts=1684835587', 5),
('Pav Bhaji Masala', 224, 90, 'Local Store', 'Herbs And Spices', '200g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_10906.jpg?ts=1684834747', 5),
('Sambar Masala', 225, 136, 'Local Store', 'Herbs And Spices', '200g', ' ', ' ', 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/5681247a-3c32-496a-88ee-354a6ace0b3e.jpg?ts=1708591253', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`pid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `pid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=226;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
