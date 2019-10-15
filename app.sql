-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 15, 2019 lúc 05:06 PM
-- Phiên bản máy phục vụ: 10.4.6-MariaDB
-- Phiên bản PHP: 7.1.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `app`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khoa`
--

CREATE TABLE `khoa` (
  `id_khoa` int(11) NOT NULL,
  `ma_khoa` varchar(30) NOT NULL,
  `ten_khoa` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `khoa`
--

INSERT INTO `khoa` (`id_khoa`, `ma_khoa`, `ten_khoa`) VALUES
(1, 'CNTT', 'Công nghệ thông tin'),
(4, 'HTTTKT', 'Hệ thống thông tin kinh tế'),
(2, 'TTDPT', 'Truyền thông đa phương tiện');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lop`
--

CREATE TABLE `lop` (
  `id_lop` int(11) NOT NULL,
  `ma_lop` varchar(30) NOT NULL,
  `ma_nganh` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `lop`
--

INSERT INTO `lop` (`id_lop`, `ma_lop`, `ma_nganh`) VALUES
(8, 'CN-TT-K14a', 'CN-TT'),
(9, 'CN-TT-K14b', 'CN-TT'),
(2, 'CNTT-K14a', 'CNTT'),
(3, 'CNTT-K14b', 'CNTT'),
(1, 'CNTT-K14c', 'CNTT'),
(4, 'KTPM-K14a', 'KTPM'),
(5, 'KTPM-K14b', 'KTPM'),
(10, 'QTVP-K14a', 'QTVP'),
(11, 'QTVP-K14b', 'QTVP'),
(6, 'TKDH-k14a', 'TKDH'),
(7, 'TKDH-k14b', 'TKDH'),
(12, 'TMDT-K14a', 'TMDT'),
(13, 'TMDT-K14b', 'TMDT');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nganh`
--

CREATE TABLE `nganh` (
  `id_nganh` int(11) NOT NULL,
  `ma_nganh` varchar(30) NOT NULL,
  `ten_nganh` varchar(30) NOT NULL,
  `ma_khoa` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `nganh`
--

INSERT INTO `nganh` (`id_nganh`, `ma_nganh`, `ten_nganh`, `ma_khoa`) VALUES
(4, 'CN-TT', 'Công nghệ truyền thông', 'TTDPT'),
(1, 'CNTT', 'Công nghệ thông tin', 'CNTT'),
(2, 'KTPM', 'Kỹ thuật phần mềm', 'CNTT'),
(5, 'QTVP', 'Quản trị văn phòng', 'HTTTKT'),
(3, 'TKDH', 'Thiết kế đồ họa', 'TTDPT'),
(6, 'TMDT', 'Thương mại điện tử', 'HTTTKT');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `ten_user` varchar(30) NOT NULL,
  `email_user` varchar(30) NOT NULL,
  `pass_user` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `ten_user`, `email_user`, `pass_user`) VALUES
(1, 'minh', 'minh@gmail.com', '123'),
(2, 'chien', 'chien@gmail.com', '123'),
(13, '2', '2', '2'),
(14, '2', '22', '2'),
(15, 't', 't', 't'),
(16, 't', 'f', 't'),
(17, 'v', 'v', 'v'),
(18, 'vv', 'vvv', 'vv'),
(19, 'qq', 'q', 'q'),
(20, '', '', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `vs`
--

CREATE TABLE `vs` (
  `ma_sv` varchar(30) NOT NULL,
  `ten_sv` varchar(30) NOT NULL,
  `ngaysinh_sv` date NOT NULL,
  `ma_lop` varchar(30) NOT NULL,
  `diachi_sv` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `vs`
--

INSERT INTO `vs` (`ma_sv`, `ten_sv`, `ngaysinh_sv`, `ma_lop`, `diachi_sv`) VALUES
('sv1', 'minh', '1997-12-22', 'CNTT-K14c', 'Hà Nội'),
('sv2', 'Chien', '1997-03-12', 'CNTT-K14c', 'Hà Nội'),
('sv3', 'Ánh', '1997-04-17', 'KTPM-K14a', 'Hà Nội'),
('sv4', 'Nhung', '1997-04-16', 'KTPM-K14b', 'Hà Nội'),
('sv7', 'cc', '1997-12-12', 'CNTT-K14a', 'Hà Nội'),
('sv9', 'Mai mai', '1997-02-16', 'CNTT-K14a', 'HN');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `khoa`
--
ALTER TABLE `khoa`
  ADD PRIMARY KEY (`ma_khoa`);

--
-- Chỉ mục cho bảng `lop`
--
ALTER TABLE `lop`
  ADD PRIMARY KEY (`ma_lop`) USING BTREE,
  ADD KEY `ma_nganh` (`ma_nganh`);

--
-- Chỉ mục cho bảng `nganh`
--
ALTER TABLE `nganh`
  ADD PRIMARY KEY (`ma_nganh`) USING BTREE;

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `vs`
--
ALTER TABLE `vs`
  ADD PRIMARY KEY (`ma_sv`),
  ADD KEY `ma_lop` (`ma_lop`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `lop`
--
ALTER TABLE `lop`
  ADD CONSTRAINT `lop_ibfk_1` FOREIGN KEY (`ma_nganh`) REFERENCES `nganh` (`ma_nganh`);

--
-- Các ràng buộc cho bảng `vs`
--
ALTER TABLE `vs`
  ADD CONSTRAINT `vs_ibfk_1` FOREIGN KEY (`ma_lop`) REFERENCES `lop` (`ma_lop`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
