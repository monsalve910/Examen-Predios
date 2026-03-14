-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-03-2026 a las 14:25:19
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `predios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `predios_cartago`
--

CREATE TABLE `predios_cartago` (
  `identificacion` int(11) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `area` varchar(100) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  `foto` varchar(100) NOT NULL,
  `observaciones` varchar(100) NOT NULL,
  `avaluo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `predios_cartago`
--

INSERT INTO `predios_cartago` (`identificacion`, `descripcion`, `area`, `direccion`, `status`, `foto`, `observaciones`, `avaluo`) VALUES
(111, 'Edificio en ruinas', '100 x 70', 'calle 18', 'inactivo', 'https://placehold.co/400', 'esta que se cae', 2000000),
(222, 'Colegio en ruinas', '10 x 70', 'calle 18', 'Activo', 'https://placehold.co/400', 'Renovacion', 1000000),
(333, 'Casa en ruinas', '40 X 20', 'calle 75', 'Activo', 'https://placehold.co/400', 'Renovacion y venta', 75000000);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `predios_cartago`
--
ALTER TABLE `predios_cartago`
  ADD PRIMARY KEY (`identificacion`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
