---
name: ffmpeg-media-agent
description: "Titan Enterprise FFmpeg Media Agent Skill & 90+ Engine Suite on Windows with SMPTE Timecode, VidStab, HLS, VMAF/SSIM QC, 84 Cinema Effects, AI Vision Bridge & Broadcast Studio."
version: "5.0.0"
author: "Lead Staff Systems Architect"
tags: ["ffmpeg", "video", "audio", "subtitles", "batch", "transcoding", "auto-bootstrap", "effects-suite", "face-tracking", "gpu-acceleration", "smart-crop", "loudness-norm", "qc", "hls-streaming", "hdr-tonemapping", "cinema-studio", "vmaf-ssim", "deshake", "timecode-burnin", "titan-suite"]
---

# Titan Enterprise FFmpeg Media Agent Skill & Engine (v5.0)

Bộ công cụ Media Engine & AI Agent Skill mạnh nhất cho **OpenAI Codex** và **Google Antigravity** trên Windows. Sở hữu trọn gói **90+ tính năng & 84 hiệu ứng điện ảnh Hollywood**, biến AI Agent thành một Studio Hậu Kỳ Tự Trị cấp Hollywood: từ đo lường chất lượng VMAF/SSIM, chống rung Deshake, in Timecode SMPTE, hạ Lower-Third hoạt họa, đến âm thanh 8D Spatial Binaural, đóng gói HLS Adaptive Streaming và AI Face Tracking.

---

## 1. Tự Động Kích Hoạt 1 Chạm (Auto-Bootstrap)

Mọi AI Agent khi mở workspace trên máy Windows mới chỉ cần chạy:
```cmd
cmd.exe /c bootstrap.cmd
```
Tự động cấu hình PATH, cài đặt Node.js LTS, Gyan FFmpeg Essentials, nạp package và build TypeScript sạch sẽ.

---

## 2. Trọn Gói 90+ Tính Năng Chuẩn Doanh Nghiệp (Titan Enterprise Suite)

### Nhóm A: Đo Lường Chất Lượng, Chuẩn Hóa & Hậu Kỳ Đỉnh Cao (Titan Engine)
1. **In Timecode SMPTE / LTC chuyên dụng (`burn-timecode`)**: In đồng hồ mã thời gian drop-frame cho dựng phim chuyên nghiệp.
2. **Chống rung chuyển động Deshake (`stabilize`)**: Ổn định các thước phim cầm tay rung lắc mạnh.
3. **Thanh tiêu đề Lower-Third hoạt họa trượt mượt mà (`animated-lower-third`)**: Hiển thị tên nhân vật, chức danh phong cách đài truyền hình.
4. **Bộ giới hạn Brickwall Limiter chống vỡ âm thanh (`limit-audio`)**: Khóa trần -1dB ngăn chặn méo tiếng kỹ thuật số.
5. **Đo kiểm chất lượng cảm thụ hình ảnh VMAF / SSIM / PSNR (`benchmark-quality`)**: Đánh giá độ tương đồng video sau nén so với bản gốc.
6. **Tạo Sprite Sheet lưới tua nhanh VTT (`spritesheet`)**: Sinh ảnh ma trận 10x10 dùng cho tính năng xem trước khi rê chuột trên web video player.
7. **Khử siêu dữ liệu nhạy cảm & bảo mật vị trí Exif/GPS (`sanitize`)**: Xóa sạch tọa độ GPS, model camera và tag riêng tư.
8. **Chuyển video dọc sang 16:9 với nền mờ động (`pillarbox-blur`)**: Lấp đầy 2 bên viền đen bằng hậu cảnh mờ nhòe thẩm mỹ.
9. **Khử tiếng ồn ù tần số thấp & De-Esser lọc xì giọng nói (`clean-speech`)**: Tinh chỉnh âm thanh giọng đọc trong trẻo.
10. **Nén Master Studio 2-Pass VBR (`encode-vbr`)**: Kiểm soát dung lượng và tối đa hóa chi tiết khung hình.

### Nhóm B: Streaming & Hậu Kỳ Điện Ảnh (Cinema Studio)
11. **Đóng gói HLS Adaptive Streaming (`package-hls`)**: Tạo playlist `master.m3u8` và các phân đoạn `seg_*.ts`.
12. **Tone-Mapping 4K HDR sang Rec.709 SDR (`tonemap-hdr`)**: Tinh chỉnh màu HDR10 không bị cháy sáng trên màn hình thường.
13. **Phát hiện chuyển cảnh AI Scene Cut Detection (`detect-scenes`)**: Tự động chấm điểm chuyển cảnh.
14. **Tách riêng Vocal & Nhạc nền BGM (`isolate-vocals`)**: Tách lời thoại và nhạc nền karaoke.
15. **Căn chỉnh tỷ lệ khung hình phát sóng (`conform-aspect`)**: Căn chuẩn 16:9, 9:16, 1:1, 21:9.
16. **Bảng phân cảnh Storyboard Contact Sheet (`contact-sheet`)**: Lưới ảnh preview tóm tắt toàn bộ video.
17. **Nén dung lượng theo Megabytes chính xác (`compress-target-size`)**: Bitrate 2-pass ép video dưới 15MB/25MB gửi email/Discord.
18. **Chuẩn hóa âm lượng EBU R128 (-16 LUFS) (`normalize-audio`)**: Chuẩn âm thanh podcast, TikTok và TV broadcast.
19. **Đốt phụ đề cứng vĩnh viễn (`burn-subtitles`)**: Gắn cứng phụ đề SRT lên video.
20. **Reframe thông minh 9:16 dọc (`smart-crop-916`)**: Biến video ngang thành video dọc 1080x1920 cho TikTok/Reels/Shorts.
21. **Tạo GIF Lanczos PaletteGen 2-pass (`create-gif`)**: Ảnh động sắc nét 60fps không bị vỡ hạt.
22. **Video sóng âm thanh động (`visualizer`)**: Tạo hiệu ứng sóng nhạc phát trên mạng xã hội từ file MP3/WAV.
23. **Đóng dấu bản quyền Logo/Watermark (`watermark`)**: Hỗ trợ 4 góc màn hình với kênh Alpha trong suốt.
24. **Tự động QC màn hình đen & khoảng lặng (`detect-qc`)**: Phát hiện lỗi đóng băng đen và im tiếng.
25. **Ghép nối video siêu tốc (`concat`)**: Ghép nhiều file lossless trong vài chục mili-giây.
26. **Tự dò tìm phần cứng GPU (`detect-hw`)**: Khai thác NVIDIA NVENC, Intel QSV, AMD AMF.

### Nhóm C: AI Vision & Face Tracking AR Bridge
27. **Trích xuất Tracking khuôn mặt ra JSON (`track-face`)**: Bounding box & 5 mốc giải phẫu theo thời gian.
28. **Gắn AR Sticker bám dính cử động đầu (`ar_3d_headwear_sticker`)**: Nội suy tọa độ toán học theo biến thời gian `t`.
29. **Tách phông xanh Studio (`chromakey_green`)**.
30. **Xóa mờ phông nền giả lập khẩu độ f/1.4 Bokeh (`background_defocus_blur`)**.

### Nhóm D: Kho 84 Hiệu Ứng Điện Ảnh Hollywood (Effects Suite)
- **Titan Effects**: `matrix_code_rain_green`, `film_noir_shadows`, `tilt_shift_miniature` (thành phố đồ chơi), `wong_kar_wai_slow_shutter` (phim Vương Gia Vệ 12fps), `pixel_sort_digital_glitch`, `scifi_cyber_hud_reticle`, `halftone_pop_art_dots`, `audio_stadium_megaphone`, `audio_tremolo_vibrato`, `neon_tron_edge_glow`, `fisheye_gopro_action`, `black_promist_halation` (kính Pro-Mist), `super_8mm_kodachrome`, `color_negative_xray`, `starburst_cross_flare`, `split_toning_amber_steel`, `whip_zoom_flash`, `drone_aerial_cinematic`, `dark_academia_moody`, `dualtone_red_blue_split`.
- **Cinema & Classic Effects**: `film_halation_red` (Kodak 500T), `vertigo_dolly_zoom` (Hitchcock Vertigo), `audio_8d_spatial_orbit` (Âm thanh 8D xoay quanh đầu), `anaglyph_3d_cinema`, `bleach_bypass_matrix`, `thermal_infrared_vision`, `night_vision_goggles`, `vintage_8mm_silent_film`, `dynamic_speed_ramp`, `audio_cathedral_reverb`, `cctv_surveillance_cam`, `anime_cel_shading`, `glitch_datamosh_smear`, `whip_pan_kinetic_blur`, `freeze_frame_comic`, `retro_arcade_scanlines`, `commercial_product_pop`, `horror_grudge_cold`, `sunset_silhouette_glow`, `radio_walkie_squelch`, `cinematic_teal_orange`, `cyberpunk_neon_city`, `skin_smoothing_soft`, `skin_whitening_brighten`...

---

## 3. Cú Pháp CLI Mẫu Cho AI Agent

```powershell
# 1. In Timecode SMPTE chuyên nghiệp
node dist/cli.js burn-timecode "input.mp4" "work/dailies_tc.mp4" --timecode "01:00:00:00"

# 2. Chống rung video (Deshake)
node dist/cli.js stabilize "shaky_clip.mp4" "work/stabilized.mp4"

# 3. Đo lường chất lượng VMAF / SSIM
node dist/cli.js benchmark-quality "original.mp4" "compressed.mp4"

# 4. Tạo thanh tiêu đề Lower-Third hoạt họa
node dist/cli.js animated-lower-third "input.mp4" "Hoang Apex" "Lead Systems Architect" "work/intro.mp4"

# 5. Khử siêu dữ liệu bảo mật (GPS, Exif)
node dist/cli.js sanitize "input.mp4" "work/clean_metadata.mp4"

# 6. Biến video dọc thành 16:9 với viền mờ động
node dist/cli.js pillarbox-blur "vertical.mp4" "work/widescreen.mp4"

# 7. Áp dụng hiệu ứng phim kinh điển
node dist/cli.js apply-effect matrix_code_rain_green "input.mp4" "work/matrix.mp4"
node dist/cli.js apply-effect tilt_shift_miniature "input.mp4" "work/miniature.mp4"
node dist/cli.js apply-effect wong_kar_wai_slow_shutter "input.mp4" "work/wong_kar_wai.mp4"
```

---

## 4. Nguyên Tắc An Toàn (Titan Safety Protocol)
- **Zero-Overwrite**: Tuyệt đối không ghi đè file nguồn.
- **Auto-Fallback**: Tự động chuyển profile encode dự phòng khi gặp lỗi.
- **ffprobe QC Gate**: Tự động xác minh kích thước, codec và tính toàn vẹn stream trước khi báo cáo kết quả.
