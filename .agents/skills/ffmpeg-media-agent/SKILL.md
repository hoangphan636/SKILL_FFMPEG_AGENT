---
name: ffmpeg-media-agent
description: "Apex Enterprise FFmpeg Media Agent Skill & 30+ Advanced Engine Suite on Windows with GPU Accel, AI Vision Bridge, QC, and 44+ Effects."
version: "3.0.0"
author: "Lead Staff Systems Architect"
tags: ["ffmpeg", "video", "audio", "subtitles", "batch", "transcoding", "auto-bootstrap", "effects-suite", "face-tracking", "gpu-acceleration", "smart-crop", "loudness-norm", "qc"]
---

# Apex Enterprise FFmpeg Media Agent Skill & Engine (v3.0)

Bộ công cụ xử lý Media & AI Agent Skill mạnh nhất cho **Codex** và **Google Antigravity** trên Windows. Tích hợp trọn gói 30 tính năng chuyên sâu: từ nén dung lượng chính xác, tự phát hiện phần cứng GPU, chuẩn hóa âm thanh EBU R128, cắt thông minh 9:16 dọc, đóng dấu watermark, làm phụ đề cứng (burn-in), phân tích kiểm định chất lượng (QC), đến thư viện 44+ hiệu ứng điện ảnh & AR tracking.

---

## 1. Cơ Chế Tự Động Kích Hoạt 1 Chạm (Auto-Bootstrap)

Bất kỳ AI Agent nào khi tiếp nhận dự án trên môi trường mới chỉ cần chạy:
```cmd
cmd.exe /c bootstrap.cmd
```
Tự động cấu hình PATH, cài Node.js LTS, Gyan FFmpeg Essentials, nạp package và build TypeScript sạch sẽ.

---

## 2. Danh Mục 30 Tính Năng Nâng Cao Vượt Trội

### Nhóm A: Sản Xuất & Xử Lý Chuyên Nghiệp (Production Engine)
1. **Nén dung lượng theo mục tiêu chính xác (Target Size Compressor)**:
   Tự động tính toán bitrate 2-pass để file luôn nhỏ hơn dung lượng yêu cầu (Discord 25MB, Email 20MB):
   ```powershell
   node dist/cli.js compress-target-size "input.mp4" "output.mp4" --size-mb 15
   ```
2. **Tự động dò phần cứng tăng tốc GPU (Hardware Accel Discovery)**:
   Quét và tận dụng NVIDIA NVENC, Intel QSV, AMD AMF, DXVA2, D3D11VA, D3D12VA:
   ```powershell
   node dist/cli.js detect-hw
   ```
3. **Chuẩn hóa âm lượng EBU R128 (Loudness Normalization)**:
   Đưa âm lượng về chuẩn -16 LUFS (TikTok / YouTube / Podcast):
   ```powershell
   node dist/cli.js normalize-audio "input.mp4" "output.mp4" --target -16
   ```
4. **Đốt phụ đề cứng vĩnh viễn (Hardcoded Subtitle Burn-In)**:
   Khắc phục giới hạn MKV soft-subs, in trực tiếp chữ SRT lên hình:
   ```powershell
   node dist/cli.js burn-subtitles "input.mp4" "captions.srt" "output.mp4"
   ```
5. **Cắt thông minh 9:16 Reframe (TikTok / Reels / Shorts)**:
   Tự động căn giữa khung hình từ 16:9 ngang sang 9:16 dọc 1080x1920:
   ```powershell
   node dist/cli.js smart-crop-916 "input.mp4" "output_916.mp4"
   ```
6. **Tạo ảnh động GIF tối ưu 2-pass (Lanczos PaletteGen)**:
   Tạo GIF mượt mà không vỡ hạt dither:
   ```powershell
   node dist/cli.js create-gif "input.mp4" "animation.gif" --fps 15 --width 480 --duration 00:00:03
   ```
7. **Tạo sóng âm thanh Visualizer (Audio Waveform Video)**:
   Biến file nhạc/podcast thành video có sóng âm động phát trên mạng xã hội:
   ```powershell
   node dist/cli.js visualizer "audio.mp3" "waveform_video.mp4" --mode waves
   ```
8. **Đóng dấu Logo / Watermark thương hiệu**:
   Hỗ trợ 4 góc màn hình và tùy chỉnh độ trong suốt:
   ```powershell
   node dist/cli.js watermark "input.mp4" "logo.png" "watermarked.mp4" --position bottom-right --opacity 0.85
   ```
9. **Kiểm định chất lượng tự động (QC Black Screen & Silence Detector)**:
   Phát hiện các đoạn đóng băng màn hình đen và khoảng lặng tắt tiếng để cắt ghép tự động:
   ```powershell
   node dist/cli.js detect-qc "input.mp4"
   ```
10. **Ghép nối video không giảm chất lượng (Lossless Fast Concat)**:
    Nối nhiều clip trong vài chục mili-giây:
    ```powershell
    node dist/cli.js concat "merged.mp4" "clip1.mp4" "clip2.mp4" "clip3.mp4"
    ```

### Nhóm B: AI Vision & Face Tracking AR Bridge
11. **Trích xuất dữ liệu Tracking chuyển động khuôn mặt ra JSON (`track-face`)**.
12. **AR Sticker bám dính cử động đầu thời gian thực (`ar_3d_headwear_sticker`)**.
13. **Mặt nạ gương đối xứng (`mirror_face_warp`)**.
14. **Tách phông xanh Green Screen chuẩn xác (`chromakey_green`)**.
15. **Xóa mờ hậu cảnh giả lập Bokeh f/1.4 (`background_defocus_blur`)**.

### Nhóm C: 44+ Hiệu Ứng Màu, Ánh Sáng & Âm Thanh Độc Quyền
16. **HDR Dynamic Range Pop** (`hdr_high_contrast`): Tăng chiều sâu màu sắc và độ tương phản.
17. **Cyberpunk Neon** (`cyberpunk_neon_city`): Tông màu Magenta & Cyan rực rỡ.
18. **Pastel Aesthetic Tone** (`pastel_aesthetic_dream`): Tông màu nhẹ nhàng phong cách Vlog đời thường.
19. **Làm trắng sáng da an toàn** (`skin_whitening_brighten`): Nâng tone da tự nhiên.
20. **Làm mịn da Bilateral** (`bilateral_skin_softener`): Làm mờ khuyết điểm mà giữ nguyên độ nét của mắt/tóc.
21. **Vệt sáng ống kính điện ảnh Anamorphic** (`anamorphic_lens_flare`): Vệt xanh điện ảnh Hollywood.
22. **Hở sáng máy quay cổ điển** (`warm_light_leak`): Giả lập vệt sáng film 16mm.
23. **Kính vạn hoa đối xứng 4 chiều** (`kaleidoscope_geometric`): Hiệu ứng thị giác nghệ thuật.
24. **Rung lắc máy quay hành động** (`camera_camera_shake`): Giả lập quay máy cầm tay kịch tính.
25. **Làm mờ Pixel 8-bit** (`pixel_mosaic_censor`): Pixel che thông tin hoặc phong cách Retro.
26. **Vệt bóng mờ ma mị Motion Blur** (`motion_blur_trail`): Lưu vệt chuyển động nhanh.
27. **Tua ngược thời gian** (`video_reverse_playback`): Đảo ngược cả video và audio.
28. **Timelapse 4x Hyper-Speed** (`timelapse_strobe`): Tăng tốc chuyển động mượt mà.
29. **Giọng Robot Cyborg Vocoder** (`audio_robot_vocoder`): Biến giọng người thành giọng máy biến đổi âm.
30. **Âm thanh dưới nước / Club ngoài phòng** (`underwater_muffled_audio`): Lọc dải trầm Low-Pass muffle.
*(Cùng các hiệu ứng: Reaction PIP, Quad 4-Grid multi-cam, Zoom Pulse, Chiếu băng VHS, Chia tách RGB Glitch, Giọng sóc chuột Chipmunk, Hollywood Teal & Orange...)*

---

## 3. Quy Trình Vận Hành An Toàn (Safety Gate)
- **Zero In-Place Overwrites**: Tuyệt đối không ghi đè file gốc.
- **Tự động bắt lỗi và thử lại (Auto-Retry Fallback)**: Khi encode thất bại, tự động chuyển sang profile dự phòng (`ultrafast`, CRF 28).
- **ffprobe Output Verification Gate**: Mọi tác vụ đều kiểm tra dung lượng và tính toàn vẹn của stream trước khi trả về kết quả.
