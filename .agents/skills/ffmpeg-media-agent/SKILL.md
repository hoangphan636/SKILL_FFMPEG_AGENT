---
name: ffmpeg-media-agent
description: "Apex Studio Enterprise FFmpeg Media Agent Skill & 60+ Engine Suite on Windows with HLS Streaming, HDR Tone-mapping, 64 Cinema Effects, AI Vision Bridge & Broadcast QC."
version: "4.0.0"
author: "Lead Staff Systems Architect"
tags: ["ffmpeg", "video", "audio", "subtitles", "batch", "transcoding", "auto-bootstrap", "effects-suite", "face-tracking", "gpu-acceleration", "smart-crop", "loudness-norm", "qc", "hls-streaming", "hdr-tonemapping", "cinema-studio"]
---

# Apex Studio Enterprise FFmpeg Media Agent Skill & Engine (v4.0)

Bộ công cụ Media Engine & AI Agent Skill toàn năng bậc nhất cho **OpenAI Codex** và **Google Antigravity** trên Windows. Sở hữu trọn gói **60+ tính năng & 64 hiệu ứng chuyên sâu**, biến AI Agent thành một Studio sản xuất hậu kỳ tự trị: từ đóng gói HLS Streaming đa bitrate, Tone-mapping HDR sang SDR, trích xuất tách giọng Vocal/BGM, phân tích chuyển cảnh AI Scene Detection, đến kho 64 hiệu ứng điện ảnh Hollywood, âm thanh 8D Binaural và AR Tracking.

---

## 1. Tự Động Kích Hoạt 1 Chạm (Auto-Bootstrap)

Mọi AI Agent khi mở workspace trên máy Windows mới chỉ cần chạy:
```cmd
cmd.exe /c bootstrap.cmd
```
Tự động cấu hình PATH, cài đặt Node.js LTS, Gyan FFmpeg Essentials, nạp package và build TypeScript sạch sẽ.

---

## 2. Toàn Diện 60+ Tính Năng Chuẩn Công Nghiệp (Market-Leading Suite)

### Nhóm A: Streaming, Điện Ảnh & Chuẩn Phát Thanh Truyền Hình (Cinema & Broadcast)
1. **Đóng gói HLS Adaptive Streaming (`package-hls`)**: Tạo file playlist `master.m3u8` và các phân đoạn `seg_*.ts` tương thích mọi trình phát web/mobile.
2. **Tone-Mapping HDR sang Rec.709 SDR (`tonemap-hdr`)**: Chuyển đổi video 4K HDR10 / HLG dải màu rộng sang SDR chuẩn xác màu không bị cháy sáng.
3. **Phát hiện chuyển cảnh tự động bằng AI (`detect-scenes`)**: Quét và chấm điểm độ thay đổi khung hình để tìm điểm cắt cảnh hoặc tạo chương YouTube.
4. **Tách riêng Vocal & Nhạc nền BGM (`isolate-vocals`)**: Tách lời thoại/hát (Center-channel) và nhạc nền karaoke (Stereo phase-inversion).
5. **Căn chỉnh tỷ lệ khung hình phát sóng (`conform-aspect`)**: Tự động chèn viền Pillarbox/Letterbox đen chuẩn 16:9, 9:16, 1:1, 21:9.
6. **Bảng phân cảnh Storyboard Contact Sheet (`contact-sheet`)**: Tạo ảnh lưới preview filmstrip nhiều khung hình tóm tắt nội dung video.
7. **Nén dung lượng theo Megabytes chính xác (`compress-target-size`)**: Bitrate 2-pass ép video dưới 15MB/25MB gửi email/Discord.
8. **Chuẩn hóa âm lượng EBU R128 (-16 LUFS) (`normalize-audio`)**: Chuẩn âm thanh podcast, TikTok và TV broadcast.
9. **Đốt phụ đề cứng vĩnh viễn (`burn-subtitles`)**: Gắn cứng phụ đề SRT lên video không lo bị tắt hay lỗi font.
10. **Reframe thông minh 9:16 dọc (`smart-crop-916`)**: Biến video ngang 16:9 thành video dọc 1080x1920 cho TikTok/Reels/Shorts.
11. **Tạo GIF Lanczos PaletteGen 2-pass (`create-gif`)**: Ảnh động sắc nét 60fps không bị vỡ màu dither.
12. **Video sóng âm thanh động (`visualizer`)**: Tạo hiệu ứng sóng nhạc phát trên mạng xã hội từ file MP3/WAV.
13. **Đóng dấu bản quyền Logo/Watermark (`watermark`)**: Hỗ trợ 4 góc màn hình với kênh Alpha trong suốt.
14. **Tự động QC màn hình đen & khoảng lặng (`detect-qc`)**: Phát hiện lỗi đóng băng đen và im tiếng.
15. **Ghép nối video siêu tốc (`concat`)**: Ghép nhiều file lossless trong vài chục mili-giây.
16. **Tự dò tìm phần cứng GPU (`detect-hw`)**: Khai thác NVIDIA NVENC, Intel QSV, AMD AMF.
17. **Hiển thị trực quan loại khung hình (`visualize-frame-types`)**: Đánh dấu I/P/B frames và PTS timecode trên từng frame.

### Nhóm B: AI Vision & Face Tracking AR Bridge (Tầng 2 Độc Quyền)
18. **Trích xuất Tracking khuôn mặt ra JSON (`track-face`)**: Bounding box & 5 mốc giải phẫu theo thời gian.
19. **Gắn AR Sticker bám dính cử động đầu (`ar_3d_headwear_sticker`)**: Nội suy tọa độ toán học theo biến thời gian `t`.
20. **Tách phông xanh Studio (`chromakey_green`)**.
21. **Xóa mờ phông nền giả lập khẩu độ f/1.4 Bokeh (`background_defocus_blur`)**.
22. **Mặt nạ gương đối xứng (`mirror_face_warp`)**.

### Nhóm C: Thư Viện 64 Hiệu Ứng Điện Ảnh, Ánh Sáng & Âm Thanh (Effects Suite)
23. **Kodak 500T Film Halation** (`film_halation_red`): Vệt đỏ rực quang quanh đốm sáng điện ảnh 35mm.
24. **Vertigo Dolly Zoom** (`vertigo_dolly_zoom`): Hiệu ứng zoom nén phối cảnh giật lùi kinh điển Hitchcock.
25. **Âm thanh 8D Spatial Orbit** (`audio_8d_spatial_orbit`): Âm thanh 360 độ xoay quanh đầu người nghe.
26. **Kính 3D Anaglyph** (`anaglyph_3d_cinema`): Tách kênh đỏ/lam hoài niệm.
27. **Bleach Bypass Saving Private Ryan** (`bleach_bypass_matrix`): Tông màu chiến tranh gai góc, khử bão hòa.
28. **Thermal Predator Infrared** (`thermal_infrared_vision`): Bản đồ nhiệt quân sự.
29. **Night Vision Goggles** (`night_vision_goggles`): Kính nhìn đêm xanh phosphor khuếch đại sáng.
30. **Chaplin 1920s 8mm Silent Projector** (`vintage_8mm_silent_film`): Giật hình 16fps kèm xước phim cổ.
31. **Action Hero Speed Ramp** (`dynamic_speed_ramp`): Giảm tốc slow-motion kịch tính rồi tăng tốc tức thì.
32. **Cathedral Sacred Reverb** (`audio_cathedral_reverb`): Vang âm thánh đường đuôi 4 giây.
33. **Security CCTV Camera** (`cctv_surveillance_cam`): Camera an ninh hiển thị timecode và chấm REC.
34. **Anime Cel Shading & Ink Outline** (`anime_cel_shading`): Hoạt hình hóa với nét viền mực đậm.
35. **Glitch Datamosh Pixel Smear** (`glitch_datamosh_smear`): Lỗi nén P-frame kéo lê điểm ảnh.
36. **Whip Pan Kinetic Blur** (`whip_pan_kinetic_blur`): Chuyển cảnh vung máy quay tốc độ cao.
37. **Freeze Frame Comic Stamp** (`freeze_frame_comic`): Đóng băng khung hình phong cách truyện tranh Pop-Art.
38. **Retro Arcade 1980s Scanlines** (`retro_arcade_scanlines`): Sọc màn hình CRT máy game thùng cổ điển.
39. **Commercial Clean Product Grade** (`commercial_product_pop`): Tone màu quảng cáo sản phẩm Apple/Nike.
40. **Japanese Horror Cold Cyan** (`horror_grudge_cold`): Tông lạnh rùng rợn ám xanh lục.
41. **Sunset Golden Silhouette** (`sunset_silhouette_glow`): Bóng đen ngược sáng hoàng hôn rực rỡ.
42. **Police Radio Squelch** (`radio_walkie_squelch`): Tiếng bộ đàm cảnh sát bóp nghẹt kèm rẹt rè.
*(Và 22+ hiệu ứng: Hollywood Teal & Orange, Cyberpunk Magenta, HDR Pop, Làm sáng da tự nhiên, Làm mịn da Bilateral, Anamorphic Blue Streak, Hở sáng Light Leak, Kính vạn hoa Kaleidoscope, Handheld Camera Shake, Pixel 8-bit, Motion Blur Trail, Tua ngược Reverse, Robot Cyborg Vocoder, Giọng dưới nước Muffle, Giọng sóc chuột, Giọng trầm Deep Voice...)*

---

## 3. Cú Pháp Thao Tác Mẫu Cho AI Agent

```powershell
# 1. Đóng gói luồng phát HLS (m3u8 + segments)
node dist/cli.js package-hls "input.mp4" "work/stream" --segment-duration 3

# 2. Phát hiện chuyển cảnh
node dist/cli.js detect-scenes "input.mp4" --threshold 0.35

# 3. Tạo Storyboard Contact Sheet
node dist/cli.js contact-sheet "input.mp4" "work/storyboard.jpg" --cols 4 --rows 3

# 4. Tách giọng hát & Nhạc nền
node dist/cli.js isolate-vocals "song.mp4" "work/vocals.mp3" "work/bgm.mp3"

# 5. Áp dụng hiệu ứng điện ảnh Hollywood
node dist/cli.js apply-effect film_halation_red "input.mp4" "work/halation.mp4"
node dist/cli.js apply-effect audio_8d_spatial_orbit "input.mp4" "work/orbit_8d.mp4"
node dist/cli.js apply-effect vertigo_dolly_zoom "input.mp4" "work/vertigo.mp4"

# 6. Chạy hàng loạt nhiều tác vụ
node dist/cli.js batch "batch.json"
```

---

## 4. Nguyên Tắc An Toàn Tuyệt Đối (Apex Safety Protocol)
- **Zero-Overwrite**: Không bao giờ ghi đè file gốc.
- **Fail-Safe Fallback**: Khi encode gặp lỗi, tự động chuyển sang profile dự phòng nhẹ hơn.
- **ffprobe QC Gate**: Tự động kiểm tra file đầu ra (codec, duration, size > 0) trước khi xác nhận hoàn thành với người dùng.
