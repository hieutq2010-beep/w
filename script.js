const questionsData = [
    { q: "Câu 1: Một trong những ý nghĩa của các cuộc cách mạng công nghiệp thời kì hiện đại đối với kinh tế là:", a: ["mở rộng và đa dạng hóa các hình thức sản xuất", "thúc đẩy sự phân hóa trong lực lượng lao động", "làm tăng sự lệ thuộc của con người vào công nghệ", "thúc đẩy sự giao lưu, kết nối văn hoá toàn cầu"], c: 0 },
    { q: "Câu 2: Sự xuất hiện và phát triển của mạng lưới kết nối Internet trong cuộc cách mạng công nghiệp lần thứ ba đã mang lại tác dụng nào sau đây?", a: ["Thúc đẩy thương mại điện tử phát triển", "Khởi đầu quá trình công nghiệp hóa", "Mở ra dây chuyền sản xuất hàng loạt", "Khởi đầu quá trình điện khí hóa"], c: 0 },
    { q: "Câu 3: Một trong những thành tựu tiêu biểu trong lĩnh vực vật lý là:", a: ["công nghệ vi sinh", "dữ liệu lớn", "vật liệu mới", "công nghệ tế bào"], c: 2 },
    { q: "Câu 4: Nội dung nào sau đây không phải là thành tựu của cuộc cách mạng công nghiệp lần thứ ba trên lĩnh vực công nghệ thông tin?", a: ["máy tính điện tử", "vệ tinh nhân tạo", "Trình duyệt web", "mạng kết nối internet"], c: 1 },
    { q: "Câu 5: Những phát minh về điện trong cuộc cách mạng công nghiệp lần thứ hai đã:", a: ["tạo cơ sở trực tiếp cho sự ra đời của công nghiệp chế tạo ô tô và máy bay", "mở ra khả năng ứng dụng nguồn năng lượng mới vào cuộc sống và sản xuất", "thúc đẩy mạnh mẽ quá trình khu vực hóa và toàn cầu hóa nền kinh tế thế giới", "đưa nhân loại bước sang một nền văn minh mới: văn minh hậu công nghiệp"], c: 1 },
    { q: "Câu 6: “Dù ai đi ngược về xuôi / Nhớ ngày giỗ tổ mùng mười tháng ba”. Ngày giỗ tổ Hùng Vương của Việt Nam hằng năm là một biểu hiện của hình thức tín ngưỡng nào sau đây?", a: ["Thờ thần động vật", "Thờ thần tự nhiên", "Thờ cúng tổ tiên", "Tín ngưỡng phồn thực"], c: 2 },
    { q: "Câu 7: “Cư dân Đông Nam Á thờ thần Lúa để bảo trợ cho sản xuất nông nghiệp”. Thông tin trên phản ánh tín ngưỡng nào sau đây của cư dân Đông Nam Á?", a: ["Tín ngưỡng thờ cúng tổ tiên", "Tín ngưỡng phồn thực", "Tín ngưỡng thờ thần tự nhiên", "Tín ngưỡng thờ thần động vật"], c: 2 },
    { q: "Câu 8: Sự ra đời của thánh lễ Thiên Chúa giáo đầu tiên ở Phi-lip-pin năm 1521 là biểu hiện của sự du nhập yếu tố văn hóa nào sau đây đến từ phương Tây?", a: ["Tôn giáo", "Chữ viết", "Văn học", "Nghệ thuật"], c: 0 },
    { q: "Câu 9: “Cư dân Đông Nam Á thờ các con vật gần gũi với cuộc sống của xã hội nông nghiệp như trâu, cóc, chim, rắn...”. Thông tin trên phản ánh tín ngưỡng nào sau đây của cư dân Đông Nam Á?", a: ["Tín ngưỡng thờ cúng tổ tiên", "Tín ngưỡng phồn thực", "Tín ngưỡng thờ thần tự nhiên", "Tín ngưỡng thờ thần động vật"], c: 3 },
    { q: "Câu 10: Nội dung nào sau đây phản ánh đúng ý nghĩa của các cuộc cách mạng công nghiệp thời kì cận đại về mặt văn hóa?", a: ["Dẫn đến sự hình thành các lực lượng xã hội mới", "Thúc đẩy sự giao lưu và kết nối văn hoá toàn cầu", "Tạo động lực cho sự tăng trưởng của công nghiệp", "Tạo ra sự dịch chuyển trong tỉ lệ cư dân thành thị"], c: 1 },
    { q: "Câu 11: Một trong những đặc điểm nổi bật của văn minh Đông Nam Á từ thế kỉ VII đến thế kỉ XV là:", a: ["Ảnh hưởng của văn minh Ấn Độ đối với khu vực chưa thể hiện rõ nét", "Văn minh phương Tây bắt đầu ảnh hưởng trên một số lĩnh vực", "Tiếp thu có chọn lọc thành tựu của văn minh Ấn Độ và Trung Hoa", "Sự suy yếu về chính trị và văn hóa của các quốc gia phong kiến"], c: 2 },
    { q: "Câu 12: Từ thế kỉ XVI, thông qua hoạt động của các giáo sĩ phương Tây, tôn giáo nào sau đây đã từng bước được du nhập vào Đông Nam Á?", a: ["Phật giáo", "Đạo giáo", "Thiên Chúa giáo", "Hồi giáo"], c: 2 },
    { q: "Câu 13: Tôn giáo nào sau đây có nguồn gốc từ Ấn Độ và được truyền bá mạnh mẽ vào khu vực Đông Nam Á?", a: ["Thiên Chúa giáo", "Phật giáo", "Đạo giáo", "Hồi giáo"], c: 1 },
    { q: "Câu 14: Ở khu vực Đông Nam Á, quốc gia nào sau đây chịu ảnh hưởng sâu sắc nhất của văn minh Trung Hoa?", a: ["Việt Nam", "Thái Lan", "Ma-lai-xi-a", "Mi-an-ma"], c: 0 },
    { q: "Câu 15: Một trong những thể loại văn học dân gian tiêu biểu ở khu vực Đông Nam Á thời kì cổ - trung đại là:", a: ["truyện ngắn", "kí sự", "tản văn", "thần thoại"], c: 3 },
    { q: "Câu 16: Người Việt đã sáng tạo ra chữ Nôm trên cơ sở tiếp thu chữ Hán của quốc gia nào sau đây?", a: ["Nhật Bản", "Ai Cập", "Ấn Độ", "Trung Quốc"], c: 3 },
    { q: "Câu 17: Trên cơ sở tiếp thu một phần chữ Hán của Trung Quốc, người Việt đã sáng tạo ra chữ viết riêng của mình, có tên gọi là:", a: ["chữ Chăm cổ", "chữ Nôm", "Chữ Khơ-me cổ", "chữ Mã Lai cổ"], c: 1 },
    { q: "Câu 18: Tác phẩm nào sau đây không phải là thành tựu văn học của Việt Nam thời kì cổ - trung đại?", a: ["Tây du kí", "Truyện Kiều", "Hịch tướng sĩ", "Bình Ngô đại cáo"], c: 0 },
    { q: "Câu 19: Nguồn gốc chung dẫn đến các cuộc cách mạng công nghiệp thời cận đại và hiện đại là do:", a: ["nhu cầu của chiến tranh thế giới", "nhu cầu xâm chiếm thuộc địa", "sự cạn kiệt tài nguyên thiên nhiên", "nhu cầu cuộc sống và sản xuất"], c: 3 },
    { q: "Câu 20: Nội dung nào sau đây phản ánh đúng đặc điểm của các cuộc cách mạng công nghiệp thời kì hiện đại?", a: ["Lao động máy móc thay thế hoàn toàn lao động chân tay", "Khoa học đã trở thành lực lượng sản xuất trực tiếp", "Phát minh kĩ thuật độc lập với nghiên cứu khoa học", "Chủ yếu chỉ diễn ra trong phạm vi các nước châu Âu"], c: 1 },
    { q: "Câu 21: Nội dung nào sau đây không phản ánh đúng ý nghĩa của các cuộc cách mạng công nghiệp thời kì hiện đại?", a: ["Hình thành hai giai cấp cơ bản trong xã hội tư bản là tư sản và vô sản", "Tạo ra các ngành sản xuất tự động, năng suất lao động được tăng cao", "Thúc đẩy quá trình toàn cầu hóa và khu vực hóa nền kinh tế thế giới", "Thúc đẩy giao lưu văn hóa giữa các quốc gia và khu vực trên thế giới"], c: 0 },
    { q: "Câu 22: Nội dung nào sau đây phản ánh đúng ý nghĩa của các cuộc cách mạng công nghiệp thời kì hiện đại về mặt xã hội?", a: ["Dẫn đến sự phân hóa trong lực lượng lao động", "Thúc đẩy giao lưu và kết nối văn hoá toàn cầu", "Thúc đẩy sự phát triển của thương mại điện tử", "Làm xuất hiện nhiều ngành công nghiệp mới"], c: 0 },
    { q: "Câu 23: Điều kiện tự nhiên nào sau đây tạo thuận lợi cho cư dân Văn Lang - Âu Lạc phát triển ngành nông nghiệp lúa nước?", a: ["Tài nguyên khoáng sản phong phú", "Khí hậu khô hạn, lượng nhiệt lớn", "Hệ thống đất phù sa màu mỡ", "Tiếp giáp với các nền văn minh lớn"], c: 2 },
    { q: "Câu 24: “Trong những năm đầu thế kỉ XX, đóng góp của KHCN vào tăng trưởng mới chỉ là 10-20%, đến những năm cuối thế kỉ XX, tỉ lệ này đã tăng lên 75-80%.”\n\nTheo số liệu trên, suy luận nào sau đây KHÔNG ĐÚNG?", a: ["Nguyên nhân duy nhất dẫn đến tăng trưởng kinh tế là do đóng góp của KHCN", "Tỉ lệ đóng góp của KHCN vào tăng trưởng kinh tế thế giới ngày càng tăng", "Sự tăng trưởng của nền kinh tế thế giới phụ thuộc rất nhiều vào tiến bộ KHCN", "Với cách mạng công nghiệp thời hiện đại, khoa học trở thành lực lượng sản xuất trực tiếp"], c: 0 },
    { q: "Câu 25: Cuộc cách mạng công nghiệp lần thứ ba và lần thứ tư đã đưa nhân loại bước sang nền văn minh:", a: ["công nghiệp", "nông nghiệp", "thông tin", "toàn cầu"], c: 2 },
    { q: "Câu 26: Một trong những tác động tiêu cực của các cuộc cách mạng công nghiệp thời hiện đại về mặt văn hóa đối với các quốc gia, dân tộc hiện nay là:", a: ["thúc đẩy sự phát triển xu thế toàn cầu hoá", "gia tăng số lượng công nhân có trình độ", "gia tăng tình trạng thất nghiệp trên toàn cầu", "nguy cơ đánh mất văn hóa truyền thống"], c: 3 },
    { q: "Câu 27: Cách mạng công nghiệp lần thứ ba và lần thứ tư đã làm tăng sự lệ thuộc của con người vào công nghệ, phát sinh tình trạng văn hóa lai căng, nguy cơ đánh mất văn hóa truyền thống. Thông tin trên phản ánh:", a: ["thách thức của các quốc gia trước xu thế toàn cầu hóa, khu vực hóa", "tác động tích cực của các cuộc cách mạng công nghiệp thời hiện đại", "thành tựu tiêu biểu của các cuộc cách mạng công nghiệp thời hiện đại", "tác động tiêu cực của các cuộc cách mạng công nghiệp thời hiện đại"], c: 3 },
    { q: "Câu 28: Từ khoảng thế kỉ XIII, tôn giáo nào theo chân các thương nhân A-rập và Ấn Độ du nhập vào Đông Nam Á?", a: ["Ấn Độ giáo", "Thiên Chúa giáo", "Phật giáo", "Hồi giáo"], c: 3 },
    { q: "Câu 29: Những tôn giáo nào sau đây có nguồn gốc từ Ấn Độ và được truyền bá mạnh mẽ vào khu vực Đông Nam Á?", a: ["Phật giáo, Hin-đu giáo", "Phật giáo, Hồi giáo", "Hồi giáo, Hin-đu giáo", "Hin-đu giáo, Công giáo"], c: 0 },
    { q: "Câu 30: Từ đầu Công nguyên đến thế kỉ VII, quốc gia cổ đại nào sau đây đã được hình thành trên lãnh thổ Việt Nam ngày nay?", a: ["Chao Phraya", "Taru-ma", "Phù Nam", "Ma-lay-u"], c: 2 },
    { q: "Câu 31: Trong khoảng thời gian từ đầu Công nguyên đến thế kỉ VII, thành tựu nổi bật nhất của văn minh Đông Nam Á là:", a: ["sự ra đời và bước đầu phát triển của các nhà nước", "hình thành các quốc gia thống nhất và lớn mạnh", "các quốc gia phát triển đến thời kì cực thịnh", "các quốc gia có nhiều chuyển biến mới về văn hoá"], c: 0 },
    { q: "Câu 32: Từ thế kỉ VII đến cuối thế kỉ XV là giai đoạn văn minh Đông Nam Á:", a: ["bước đầu hình thành", "bước đầu phát triển", "phát triển rực rỡ", "tiếp tục phát triển"], c: 2 },
    { q: "Câu 33: Một trong những yếu tố tác động đến sự khủng hoảng và suy vong của nhiều quốc gia phong kiến Đông Nam Á từ thế kỉ XVI đến XIX là:", a: ["sự du nhập của Thiên Chúa giáo", "sự xâm nhập của các nước phương Tây", "sự xâm nhập và lan tỏa của Hồi giáo", "sự bành trướng và xâm lược của Trung Hoa"], c: 1 },
    { q: "Câu 34: Văn minh Đông Nam Á giai đoạn đầu Công nguyên đến thế kỉ VII có điểm tương đồng nào sau đây so với giai đoạn thế kỉ VII đến thế kỉ XV?", a: ["Có sự xâm nhập và lan tỏa của Hồi giáo", "Có sự xâm nhập và lan tỏa của Thiên Chúa giáo", "Chịu ảnh hưởng sâu sắc của văn minh Ấn Độ", "Chịu ảnh hưởng sâu sắc của văn minh phương Tây"], c: 2 },
    { q: "Câu 35: Một trong những đặc điểm nổi bật của văn minh Đông Nam Á từ thế kỉ VII đến thế kỉ XV là:", a: ["Ảnh hưởng của văn minh Ấn Độ chưa rõ nét", "Văn minh phương Tây bắt đầu ảnh hưởng", "Tiếp thu có chọn lọc thành tựu của văn minh Ấn Độ và Trung Hoa", "Sự suy yếu về chính trị của các quốc gia phong kiến"], c: 2 },
    { q: "Câu 36: Nguyên nhân chủ yếu dẫn đến sự phát triển rực rỡ của văn hóa Đông Nam Á từ thế kỉ X - XV là:", a: ["ảnh hưởng mạnh mẽ của văn minh Ấn Độ", "sự tiếp thu có chọn lọc văn minh Trung Hoa", "quá trình sáp nhập các tiểu quốc", "sự phát triển về kinh tế và ổn định chính trị"], c: 3 },
    { q: "Câu 37: Văn minh Đông Nam Á từ thế kỉ XVI đến thế kỉ XIX có điểm khác biệt nào so với giai đoạn trước (VII - XV)?", a: ["Bắt đầu hình thành các quốc gia phong kiến lớn mạnh", "Có sự du nhập của yếu tố văn hóa đến từ phương Tây", "Chịu ảnh hưởng sâu sắc của văn minh Trung Hoa", "Nền văn minh bước vào giai đoạn phát triển cực thịnh"], c: 1 },
    { q: "Câu 38: Từ thế kỉ XVI, thông qua hoạt động của các giáo sĩ phương Tây, tôn giáo nào sau đây đã từng bước được du nhập vào Đông Nam Á?", a: ["Phật giáo", "Đạo giáo", "Hồi giáo", "Thiên Chúa giáo"], c: 3 },
    { q: "Câu 39: Nội dung nào phản ánh đúng đặc điểm của các tôn giáo ở khu vực Đông Nam Á thời kì cổ - trung đại?", a: ["Các tôn giáo đều du nhập trước tín ngưỡng bản địa", "Các tôn giáo đa dạng nhưng cùng tồn tại hòa hợp", "Hồi giáo được du nhập đầu tiên vào Đông Nam Á", "Quá trình du nhập không thông qua hoạt động thương mại"], c: 1 },
    { q: "Câu 40: Nghệ thuật kiến trúc Đông Nam Á thời kì cổ - trung đại chịu ảnh hưởng mạnh mẽ của kiến trúc:", a: ["Ấn Độ", "Ai Cập", "Hi Lạp", "La Mã"], c: 0 },
    { q: "Câu 41: Một trong những công trình kiến trúc Phật giáo điển hình ở khu vực Đông Nam Á là:", a: ["chùa Vàng", "cố cung Bắc Kinh", "Đền Ăng-co-vát", "lăng mộ Ta-giơ Ma-han"], c: 0 },
    { q: "Câu 42: Nội dung nào sau đây phản ánh đúng đặc điểm về chữ viết ở khu vực Đông Nam Á thời kì cổ - trung đại?", a: ["Chịu ảnh hưởng của chữ viết từ bên ngoài", "Ra đời sớm, trước khi xuất hiện Nhà nước", "Có sự đa dạng nhưng thiếu tính thống nhất", "Ra đời cùng quá trình du nhập tôn giáo"], c: 0 },
    { q: "Câu 43: Tác phẩm nào sau đây là thành tựu văn học của Cam-pu-chia thời kì cổ - trung đại?", a: ["Tam quốc diễn nghĩa", "Hồng lâu mộng", "Nam quốc sơn hà", "Riêm Kê"], c: 3 },
    { q: "Câu 44: Điều kiện tự nhiên nào sau đây tạo thuận lợi cho cư dân Văn Lang - Âu Lạc phát triển ngành nông nghiệp lúa nước?", a: ["Tài nguyên khoáng sản phong phú", "Khí hậu khô hạn, lượng nhiệt lớn", "Hệ thống đất phù sa màu mỡ", "Tiếp giáp với các nền văn minh lớn"], c: 2 },
    { q: "Câu 45: Nền văn minh Văn Lang - Âu Lạc được hình thành ở khu vực nào sau đây của Việt Nam?", a: ["Khu vực Bắc Bộ và Bắc Trung Bộ Việt Nam ngày nay", "Vùng duyên hải và cao nguyên miền Trung Việt Nam", "Lưu vực sông Hồng, sông Thu Bồn và sông Cửu Long", "Vùng ven biển Nam Trung Bộ và Nam Bộ Việt Nam"], c: 0 },
    { q: "Câu 46: Nền văn minh Văn Lang - Âu Lạc chủ yếu được hình thành trên lưu vực con sông nào sau đây?", a: ["Sông Hằng", "Sông Ấn", "Sông Hồng", "Sông Nin"], c: 2 },
    { q: "Câu 47: Nhà nước đầu tiên được hình thành trên lãnh thổ Việt Nam có tên gọi là:", a: ["Văn Lang", "Lâm Áp", "Chăm-pa", "Phù Nam"], c: 0 },
    { q: "Câu 48: Nội dung nào sau đây là cơ sở kinh tế dẫn đến sự hình thành nền văn minh Văn Lang - Âu Lạc?", a: ["Hoạt động thương nghiệp đường biển đặc biệt phát triển", "Bắt đầu xuất hiện sự phân hóa giữa các tầng lớp xã hội", "Nhu cầu chống giặc ngoại xâm ngày càng bức thiết", "Nông nghiệp trồng lúa nước đạt trình độ phát triển cao"], c: 3 },
    { q: "Câu 49: Nội dung nào sau đây là cơ sở xã hội dẫn đến sự hình thành nền văn minh Văn Lang - Âu Lạc?", a: ["Xuất hiện sự phân hóa giữa các tầng lớp trong xã hội", "Nhu cầu xâm lược, mở rộng lãnh thổ trở nên bức thiết", "Hoạt động thủ công nghiệp đạt trình độ phát triển cao", "Công cụ lao động bằng kim khí được sử dụng phổ biến"], c: 0 },
    { q: "Câu 50: Văn minh Văn Lang - Âu Lạc được hình thành trên cơ sở của nền văn hóa nào sau đây?", a: ["Sa Huỳnh", "Óc Eo", "Đông Sơn", "Sơn Vi"], c: 2 },
    { q: "Câu 51: Cư dân Văn Lang - Âu Lạc sớm phát triển nghề luyện kim nhờ điều kiện tự nhiên thuận lợi nào sau đây?", a: ["Tài nguyên khoáng sản phong phú", "Khí hậu nhiệt đới ẩm gió mùa", "Các vùng đồng bằng phù sa màu mỡ", "Hệ thống sông ngòi chằng chịt"], c: 0 },
    { q: "Câu 52: Đứng đầu nhà nước Văn Lang là Vua Hùng, giúp việc cho vua là:", a: ["tể tướng", "Lục bộ", "Lạc hầu", "đại hành khiển"], c: 2 },
    { q: "Câu 53: Bộ máy hành chính nhà nước dưới thời kì Văn Lang không tồn tại chức vụ nào sau đây?", a: ["Lạc hầu", "Lạc tướng", "Bồ chính", "Thượng thư"], c: 3 },
    { q: "Câu 54: Kinh đô của nhà nước Văn Lang đặt tại:", a: ["Cổ Loa (Hà Nội)", "Phong Châu (Phú Thọ)", "Phú Xuân (Huế)", "Quy Nhơn (Bình Định)"], c: 1 },
    { q: "Câu 55: Năm 208 TCN, nước Âu Lạc ra đời, đặt kinh đô tại:", a: ["Thoại Sơn (An Giang)", "Phong Châu (Phú Thọ)", "Trà Kiệu (Quảng Nam)", "Đông Anh (Hà Nội) - Cổ Loa"], c: 3 },
    { q: "Câu 56: Nhà nước nào sau đây ở Việt Nam ra đời vào khoảng thế kỉ VII TCN?", a: ["Phù Nam", "Đại Việt", "Văn Lang", "Âu Lạc"], c: 2 },
    { q: "Câu 57: Nội dung nào phản ánh đúng đặc điểm của các hình thức tín ngưỡng bản địa của cư dân Đông Nam Á?", a: ["Xuất hiện trước các tôn giáo và được bảo tồn", "Tồn tại độc lập hoàn toàn với tôn giáo bên ngoài", "Không có sự tương đồng giữa các quốc gia", "Xuất phát từ kinh tế nông nghiệp"], c: 0 },
    { q: "Câu 58: Nhà nước nào sau đây là sự kế thừa và phát triển của nhà nước Văn Lang?", a: ["Lâm Áp", "Âu Lạc", "Chăm-pa", "Phù Nam"], c: 1 },
    { q: "Câu 59: Bộ máy hành chính nhà nước dưới thời kì Văn Lang không tồn tại chức vụ nào sau đây?", a: ["Lạc hầu", "Lạc tướng", "Bồ chính", "Thượng thư"], c: 3 },
    { q: "Câu 60: Nội dung nào sau đây phản ánh đúng đặc điểm của bộ máy nhà nước Văn Lang - Âu Lạc?", a: ["Hoàn chỉnh, chặt chẽ", "Đơn giản, sơ khai", "Quan liêu, tập quyền", "Phân quyền, pháp trị"], c: 1 },
    { q: "Câu 61: Đứng đầu nhà nước Văn Lang là Vua Hùng, giúp việc cho vua là:", a: ["tể tướng", "Lục bộ", "Lạc hầu", "đại hành khiển"], c: 2 },
    { q: "Câu 62: Nội dung nào sau đây không phản ánh đúng đời sống tinh thần của cư dân Văn Lang - Âu Lạc?", a: ["Tiếp thu đạo Phật và đạo Hin-đu từ Ấn Độ", "Âm nhạc, ca múa đóng vai trò quan trọng", "Thờ cúng người có công với cộng đồng", "Nghệ thuật điêu khắc đạt trình độ thẩm mĩ cao"], c: 0 },
    { q: "Câu 63: Hiện vật nào sau đây trở thành biểu tượng của nền văn minh Văn Lang - Âu Lạc?", a: ["Tiền đồng Óc Eo", "Tượng Phật Đồng Dương", "Phù điêu Khương Mỹ", "Trống đồng Đông Sơn"], c: 3 },
    { q: "Câu 64: Nhận xét nào dưới đây là KHÔNG ĐÚNG về vai trò của nền văn minh Văn Lang - Âu Lạc đối với lịch sử Việt Nam?", a: ["Là nền văn minh đầu tiên của lịch sử dân tộc", "Góp phần định hình bản sắc văn hóa dân tộc", "Đưa Việt Nam trở thành quốc gia giàu mạnh nhất khu vực", "Đặt nền tảng cho sự phát triển của các nền văn minh sau"], c: 2 },
    { q: "Câu 65: Một trong những biểu hiện chứng tỏ bước phát triển của nước Âu Lạc so với quốc gia Văn Lang là:", a: ["Bộ máy nhà nước tổ chức hoàn thiện hơn thời kì trước", "Lãnh thổ mở rộng hơn trên cơ sở thống nhất Âu Việt và Lạc Việt", "Cải cách đơn vị hành chính theo hướng quan liêu", "Bảo vệ vững chắc độc lập trước quân Nam Hán"], c: 1 },
    { q: "Câu 66: Ý nghĩa của việc cư dân Đông Nam Á sáng tạo ra chữ viết riêng từ thời kì cổ - trung đại là:", a: ["Tạo điều kiện cho sự ra đời của Nhà nước thống nhất", "Thể hiện tinh thần tự chủ, không vay mượn bên ngoài", "Tạo điều kiện cho sự phát triển rực rỡ của nền văn học dân tộc", "Tạo tiền đề trực tiếp cho sự phát triển kinh tế"], c: 2 },
    { q: "Câu 78: Những cánh đồng màu mỡ ven sông Thu Bồn tạo thuận lợi để cư dân cổ Chăm-pa phát triển ngành kinh tế nào?", a: ["Nông nghiệp lúa nước", "Khai thác lâm thổ sản", "Luyện kim, đúc đồng", "Thương mại đường biển"], c: 0 },
    { q: "Câu 79: Nền văn minh Chăm-pa chủ yếu được hình thành trên lưu vực con sông nào sau đây?", a: ["Sông Mã", "Sông Thu Bồn", "Sông Hồng", "Sông Mê Công"], c: 1 },
    { q: "Câu 80: Ngành kinh tế chủ đạo dựa trên điều kiện đất đai của cư dân Chăm-pa là:", a: ["Nông nghiệp lúa nước", "Chăn nuôi cừu", "Công nghiệp dệt", "Khai thác dầu mỏ"], c: 0 },
    { q: "Câu 81: Nền văn minh cổ đại nào sau đây được hình thành trên khu vực miền Trung Việt Nam ngày nay?", a: ["Văn Lang", "Âu Lạc", "Chăm-pa", "Phù Nam"], c: 2 },
    { q: "Câu 82: Nội dung nào sau đây là cơ sở kinh tế dẫn đến sự hình thành nền văn minh Chăm-pa?", a: ["Hoạt động buôn bán với phương Tây phát triển", "Bắt đầu xuất hiện sự phân hóa giữa các tầng lớp", "Chịu ảnh hưởng của văn minh Ấn Độ và Ai Cập", "Kinh tế nông nghiệp, thủ công nghiệp tương đối phát triển"], c: 3 },
    { q: "Câu 83: Cư dân Chăm-pa đã sáng tạo ra chữ Chăm cổ trên cơ sở tiếp thu chữ viết nào sau đây?", a: ["Chữ Phạn", "Chữ Hán", "Chữ La-tinh", "Chữ Nôm"], c: 0 },
    { q: "Câu 84: Công trình kiến trúc nào sau đây của văn minh Chăm-pa được công nhận là di sản văn hóa thế giới?", a: ["Thành Cổ Loa", "Thánh địa Mỹ Sơn", "Chùa Một Cột", "Tháp Phổ Minh"], c: 1 },
    { q: "Câu 85: Văn minh Chăm-pa được hình thành trên cơ sở của nền văn hóa nào sau đây?", a: ["Sa Huỳnh", "Óc Eo", "Đông Sơn", "Phùng Nguyên"], c: 0 },
    { q: "Câu 86: Hoạt động kinh tế chủ yếu của cư dân Chăm-pa là:", a: ["chế biến rượu nho", "nông nghiệp, thủ công nghiệp", "buôn bán bằng đường biển", "công nghiệp đóng tàu"], c: 1 },
    { q: "Câu 87: Nền văn minh Phù Nam được hình thành trên lưu vực con sông nào sau đây?", a: ["Sông Cửu Long", "Sông Thu Bồn", "Sông Hồng", "Sông Mã"], c: 0 },
    { q: "Câu 88: Văn minh Phù Nam được hình thành và phát triển chủ yếu ở khu vực nào sau đây?", a: ["Đồng bằng sông Hồng", "Trung du Bắc Bộ", "Nam Bộ Việt Nam", "Duyên hải Trung Bộ"], c: 2 },
    { q: "Câu 89: Nền văn minh cổ đại nào sau đây được hình thành trên khu vực Nam Bộ Việt Nam ngày nay?", a: ["Văn Lang", "Âu Lạc", "Chăm-pa", "Phù Nam"], c: 3 },
    { q: "Câu 90: Văn minh Phù Nam được hình thành trên cơ sở của nền văn hóa nào sau đây?", a: ["Sa Huỳnh", "Óc Eo", "Đông Sơn", "Đồng Đậu"], c: 1 },
    { q: "Câu 91: Đồng bằng màu mỡ, nguồn nước dồi dào tạo thuận lợi để cư dân Phù Nam phát triển ngành kinh tế nào?", a: ["Khai thác lâm thổ sản", "Nông nghiệp lúa nước", "Luyện kim, đúc đồng", "Thương mại đường biển"], c: 1 },
    { q: "Câu 92: Văn hóa Ấn Độ ảnh hưởng sâu sắc đến văn minh Chăm-pa thông qua vai trò to lớn của:", a: ["thợ thủ công", "nông dân công xã", "nô lệ", "các nhà truyền giáo"], c: 3 },
    { q: "Câu 93: Một trong những tín ngưỡng phổ biến của cư dân Phù Nam là:", a: ["Thờ thần Dớt", "Thờ thần Mặt Trời", "Thờ thần Bra-ma", "Thờ thần Si-va"], c: 3 },
    { q: "Câu 94: Ngành kinh tế nào sau đây phát triển mạnh dưới thời kì nhà nước Phù Nam?", a: ["Chế tạo máy", "Làm đồng hồ", "Thương nghiệp biển", "Chế tạo vũ khí"], c: 2 },
    { q: "Câu 95: Dưới thời kì nhà nước Chăm-pa, ở cấp địa phương, cả nước được chia thành các:", a: ["Tỉnh, huyện, xã", "Tỉnh, huyện, làng", "Châu, huyện, làng", "Phủ, huyện, tổng"], c: 2 },
    { q: "Câu 96: Nhà nước cổ đại nào sau đây ở Việt Nam ra đời vào khoảng thế kỉ I?", a: ["Đại Việt", "Âu Lạc", "Phù Nam", "Chăm-pa"], c: 2 },
    { q: "Câu 97: Một trong những nhân tố tạo nên vương quốc Phù Nam là sự phát triển mạnh mẽ của thương nghiệp đường biển nhờ:", a: ["sự xuất hiện của tiền giấy", "kĩ thuật đóng tàu phát triển", "vị trí địa lí thuận lợi", "liền kề với văn minh Trung Hoa"], c: 2 },
    { q: "Câu 98: Văn minh phương Tây bắt đầu ảnh hưởng đến Đông Nam Á trong giai đoạn:", a: ["đầu Công nguyên đến thế kỉ VII", "thế kỉ VII đến thế kỉ XV", "thế kỉ XVI đến thế kỉ XIX", "thế kỉ XIX đến nay"], c: 2 },
    { q: "Câu 99: Văn minh Chăm-pa có đặc điểm nổi bật nào sau đây?", a: ["Kết hợp giữa văn hoá bản địa với văn hoá Ấn Độ", "Kết hợp giữa văn hoá Ấn Độ với văn hoá Trung Hoa", "Kết hợp giữa văn hoá Ấn Độ với văn hoá Đại Việt", "Kết hợp giữa văn hoá Ấn Độ với văn hoá Phù Nam"], c: 0 },
    { q: "Câu 100: Nội dung nào sau đây là điểm tương đồng về đời sống tinh thần của cư dân Văn Lang - Âu Lạc và cư dân Phù Nam?", a: ["Chịu ảnh hưởng của Phật giáo", "Có nền văn học viết phát triển", "Phổ biến tín ngưỡng phồn thực", "Sớm sáng tạo ra chữ viết riêng"], c: 2 },
    { q: "Câu 101: Nội dung nào sau đây phản ánh sự phát triển kinh tế của cư dân Chăm-pa?", a: ["Tiếp thu kĩ thuật làm giấy từ Trung Quốc", "Sản phẩm nông nghiệp chủ yếu xuất khẩu", "Kĩ thuật làm gốm, xây đền tháp đạt trình độ cao", "Công nghiệp đóng tàu biển chủ đạo"], c: 2 },
    { q: "Câu 102: Điểm tương đồng về cơ sở xã hội dẫn đến sự hình thành của nền văn minh Chăm-pa và Phù Nam?", a: ["Ngành nông nghiệp lúa nước đóng vai trò chủ đạo", "Sự kết hợp giữa người bản địa với bộ phận di cư", "Chịu ảnh hưởng sâu sắc của văn minh Trung Hoa", "Tiếp thu có chọn lọc ảnh hưởng văn hóa Ai Cập"], c: 1 },
    { q: "Câu 103: Nội dung nào sau đây là điểm tương đồng về kinh tế giữa văn minh Văn Lang - Âu Lạc với văn minh Chăm-pa?", a: ["Chịu ảnh hưởng của văn minh Trung Hoa", "Kinh tế nông nghiệp đóng vai trò chủ đạo", "Kĩ thuật đóng gạch xây tháp đạt trình độ cao", "Giao lưu buôn bán với phương Tây phát triển"], c: 1 },
    { q: "Câu 104: Một trong những điểm giống nhau trong đời sống tinh thần của cư dân Chăm-pa và Phù Nam là:", a: ["sống trong các nhà sàn", "sớm có chữ viết riêng", "không duy trì tín ngưỡng", "thích dùng đồ trang sức"], c: 1 },
    { q: "Câu 105: Thiết chế chính trị và xã hội của văn minh Phù Nam chịu ảnh hưởng sâu sắc của văn minh:", a: ["Ấn Độ", "Trung Hoa", "La Mã", "Hi Lạp"], c: 0 },
    { q: "Câu 106: Nội dung nào sau đây là một trong những cơ sở dẫn đến sự hình thành và phát triển của văn minh Chăm-pa?", a: ["Mối liên kết giữa các cộng đồng cư dân Việt cổ", "Chịu ảnh hưởng sâu sắc của văn minh Ấn Độ", "Nhu cầu đoàn kết chống xâm lược từ Trung Quốc", "Nền văn hóa Óc Eo đã phát triển đến cực thịnh"], c: 1 },
    { q: "Câu 107: Nội dung nào sau đây KHÔNG PHẢI là cơ sở hình thành của văn minh Chăm-pa?", a: ["Chịu ảnh hưởng từ nền văn minh Ấn Độ", "Hình thành trên cơ sở của văn hóa Sa Huỳnh", "Lưu giữ và phát huy nền văn hóa bản địa", "Chịu ảnh hưởng của nền văn hóa Trung Hoa"], c: 3 },
    { q: "Câu 108: Nội dung nào sau đây là cơ sở xã hội dẫn đến sự hình thành nền văn minh Chăm-pa?", a: ["Xuất hiện sự phân hóa giữa các tầng lớp trong xã hội", "Nhu cầu xâm lược, mở rộng lãnh thổ trở nên bức thiết", "Hoạt động thủ công nghiệp đạt trình độ phát triển cao", "Công cụ lao động bằng kim khí được sử dụng phổ biến"], c: 0 },
    { q: "Câu 109: Nội dung nào sau đây không phản ánh đúng cơ sở dẫn đến sự ra đời của nhà nước Chăm-pa?", a: ["Sự tiếp thu có chọn lọc thành tựu của văn minh Ai Cập", "Xuất hiện sự phân hóa giữa các tầng lớp trong xã hội", "Sự đoàn kết cư dân tiếng Mã Lai – Đa Đảo", "Những chuyển biến cơ bản trong đời sống kinh tế"], c: 0 },
    { q: "Câu 110: Điểm KHÁC BIỆT về cơ sở hình thành của nền văn minh Chăm-pa so với Văn Lang - Âu Lạc?", a: ["Kinh tế nông nghiệp, thủ công nghiệp phát triển", "Xã hội có sự phân hóa thành các giai cấp", "Chịu ảnh hưởng sâu sắc của văn minh Trung Hoa", "Chịu ảnh hưởng sâu sắc của nền văn minh Ấn Độ"], c: 3 }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let currentQuestions = [];
let currentIdx = 0;
let score = 0;

document.getElementById('start-btn').addEventListener('click', () => {
    currentQuestions = shuffle([...questionsData]);
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
    showQuestion();
});

function showQuestion() {
    const q = currentQuestions[currentIdx];
    document.getElementById('current-idx').innerText = currentIdx + 1;
    document.getElementById('question-text').innerText = q.q;
    document.getElementById('progress-fill').style.width = `${((currentIdx + 1) / currentQuestions.length) * 100}%`;
    
    const optionsDiv = document.getElementById('options-list');
    optionsDiv.innerHTML = '';

    q.a.forEach((opt, index) => {
        const btn = document.createElement('div');
        btn.className = 'option';
        const label = String.fromCharCode(65 + index); 
        btn.innerText = `${label}. ${opt}`;
        btn.onclick = () => checkAnswer(index, q.c, btn);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected, correct, element) {
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(opt => opt.classList.add('disabled'));

    let delay = 600; // Tốc độ chuyển câu khi đúng (0.6 giây)

    if (selected === correct) {
        element.classList.add('correct');
        score++;
        document.getElementById('score-count').innerText = score;
    } else {
        element.classList.add('wrong');
        allOptions[correct].classList.add('correct');
        delay = 1500; // Dừng lâu hơn một chút để nhìn đáp án đúng (1.5 giây)
    }

    setTimeout(() => {
        currentIdx++;
        if (currentIdx < currentQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, delay);
}

function showResult() {
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');
    document.getElementById('final-result').innerText = `${score}/${currentQuestions.length}`;
    
    let feedback = "";
    const percent = (score / currentQuestions.length) * 100;
    if (percent >= 80) feedback = "Xuất sắc! Bạn là bậc thầy lịch sử!";
    else if (percent >= 50) feedback = "Khá tốt! Cố gắng thêm chút nữa nhé.";
    else feedback = "Cần ôn tập kỹ hơn rồi bạn ơi!";
    
    document.getElementById('feedback-text').innerText = feedback;
}