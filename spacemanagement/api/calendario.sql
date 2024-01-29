-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-01-2024 a las 14:21:04
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `calendario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aulas`
--

CREATE TABLE `aulas` (
  `id` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `aulas`
--

INSERT INTO `aulas` (`id`, `nombre`) VALUES
('bb9ecf11-bba8-481b-a66d-7be9a9a9bb85', 'Informática 1'),
('adb1abc5-9f31-4787-8710-766379797a60', 'Matemáticas 1'),
('36698f74-e5e3-495b-a288-fa1e1d243289', 'Tecnología 1'),
('2f569638-7e61-42bc-8b6e-e755e1796a83', 'Castellano 1'),
('4cead303-9474-4ee4-9bb1-233e71e82cec', 'Valenciano 1'),
('03bc8835-064e-4367-ac65-78143c5e2d03', 'Ciencias 1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos`
--

CREATE TABLE `datos` (
  `espacio` int(11) NOT NULL,
  `horario` varchar(255) NOT NULL,
  `horaInicio` time NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `duracion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `datos`
--

INSERT INTO `datos` (`espacio`, `horario`, `horaInicio`, `tipo`, `duracion`) VALUES
(1, 'm', '09:00:00', 'c', 55);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id` int(11) NOT NULL,
  `dniUsuario` varchar(9) NOT NULL,
  `idAula` int(11) NOT NULL,
  `idHorario` int(11) NOT NULL,
  `fecha_reserva` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `user` varchar(15) NOT NULL,
  `pwd` varchar(200) NOT NULL,
  `dni` varchar(9) NOT NULL,
  `type` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`user`, `pwd`, `dni`, `type`) VALUES
('root', '$2y$10$44jNha1bXli8mVKLgFqxP.53dMFN10/uX0OMlDBjGVLKS5nlHVXVy', '11111111A', 'root'),
('Jonatan', '$2y$10$9Vzf/gFi5mLfVOEvUF3DmOKC4.SXCa8916VIUAHUFVM.QZraBrJj6', '73662973E', 'user'),
('aaaaaa', '$2y$10$IN9LFWINU45/bxLfm0xxleGG90dq7VIk2y75PglRbyvtPb2RIdRsC', 'aaaaaaaaa', 'user'),
('asdasdasd', '$2y$10$n9rv13kGCkcPA1myYOViRO3xmth0i7aNzE8CpNz4vWLpDwS5WNyei', 'asdasd', 'user');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
