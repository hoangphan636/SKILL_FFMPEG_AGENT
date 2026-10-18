# Infinite Apex Enterprise FFmpeg Media Agent & 120+ Suite (Windows)

Project FFmpeg AI Agent Skill dùng chung cho **Codex** và **Antigravity**, chạy trên Windows với TypeScript/Node.js, được trang bị **120+ tính năng & 104 hiệu ứng điện ảnh Hollywood** giúp AI Agent tự động xử lý mọi tác vụ từ chèn B-Roll, Auto-Ducking âm thanh, thanh tiến trình TikTok, đo kiểm chất lượng VMAF/SSIM, chống rung Deshake, phát trực tuyến HLS, AI Vision Face Tracking và hậu kỳ chuyên nghiệp.

## 📁 Cấu Trúc Dự Án

```text
SKILL_FFMPEG_AGENT/
├── README.md                                  # Hướng dẫn chi tiết
├── bootstrap.cmd                              # Tự động nạp PATH, cài Node/FFmpeg, build với 1 click
├── package.json                               # Dependencies & scripts
├── tsconfig.json                              # TypeScript ES2022 / NodeNext
├── batch.example.json                         # Mẫu batch manifest
├── batch_effects.json                         # Mẫu batch hiệu ứng
├── .agents/
│   └── skills/
│       └── ffmpeg-media-agent/
│           └── SKILL.md                       # Định nghĩa Skill 120+ tính năng cho Codex & Antigravity
├── src/
│   ├── types.ts                               # Zod schemas & types
│   ├── validator.ts                           # Rào chắn an toàn, chống ghi đè
│   ├── inspector.ts                           # Thăm dò ffprobe metadata
│   ├── executor.ts                            # FFmpeg spawn engine & retry fallback
│   ├── batch.ts                               # Bộ thực thi xử lý hàng loạt
│   ├── doctor.ts                              # Kiểm tra môi trường Node.js & FFmpeg
│   ├── cli.ts                                 # CLI hợp nhất toàn bộ 120+ tính năng
│   ├── index.ts                               # Module exports
│   ├── infinite/
│   │   ├── studio.ts                          # B-Roll, Auto-Ducking, Progress Bar, Splicer...
│   │   └── index.ts                           # Exports infinite studio
│   ├── titan/
│   │   ├── suite.ts                           # Timecode burn, Deshake, SSIM/PSNR, De-esser, Spritesheet...
│   │   └── index.ts                           # Exports titan suite
│   ├── cinema/
│   │   ├── studio.ts                          # HLS, HDR Tone-mapping, Scene detect, Vocals split...
│   │   └── index.ts                           # Exports cinema studio
│   ├── advanced/
│   │   ├── engine.ts                          # Nén dung lượng, EBU R128, Smart Crop, Watermark...
│   │   └── index.ts                           # Exports advanced engine
│   ├── effects/
│   │   ├── schema.ts                          # Schema effect
│   │   ├── registry.ts                        # 104 hiệu ứng cấu hình sẵn
│   │   ├── extended.ts                        # Danh mục hiệu ứng mở rộng
│   │   ├── cinema.ts                          # Danh mục hiệu ứng điện ảnh Hollywood
│   │   ├── titan.ts                           # Danh mục hiệu ứng Titan (Matrix, Tilt-shift, Noir...)
│   │   ├── infinite.ts                        # Danh mục hiệu ứng Infinite (Blade Runner, Wes Anderson...)
│   │   ├── engine.ts                          # EffectEngine thực thi filter graph
│   │   └── index.ts                           # Exports effects
│   └── tracking/
│       ├── types.ts                           # Schema tọa độ tracking khuôn mặt
│       ├── tracker.ts                         # Trích xuất và nội suy biểu thức overlay
│       └── index.ts                           # Exports tracking
├── tests/
│   └── validation.test.ts                     # Unit tests Vitest
├── samples/                                   # File media mẫu đầu vào & AR sticker assets
└── work/                                      # Thư mục đích chứa output
```

## ⚡ Khởi Động Tự Động 1 Chạm (Auto-Bootstrap)

Mọi AI Agent chỉ cần chạy:
```cmd
cmd.exe /c bootstrap.cmd
```

---

## 🚀 120+ Tính Năng Chuẩn Doanh Nghiệp Quốc Tế

### 1. Chèn B-Roll phụ tự động (`insert-broll`)
```powershell
node dist/cli.js insert-broll "main.mp4" "broll.mp4" "work/broll_pip.mp4" --start 2 --duration 3
```

### 2. Tự động ép nhỏ nhạc nền khi nói Auto-Ducking (`auto-ducking`)
```powershell
node dist/cli.js auto-ducking "voice.mp4" "bgm.mp3" "work/ducked_output.mp4"
```

### 3. Thêm thanh tiến trình chạy mượt TikTok / Reels (`add-progress-bar`)
```powershell
node dist/cli.js add-progress-bar "input.mp4" "work/progress.mp4" --height 10
```

### 4. Che mờ danh tính hình bầu dục trung tâm (`blur-privacy`)
```powershell
node dist/cli.js blur-privacy "input.mp4" "work/blurred_face.mp4"
```

### 5. Nút kêu gọi hành động Subscribe / Follower động (`follower-cta`)
```powershell
node dist/cli.js follower-cta "input.mp4" "work/cta.mp4" --text "FOLLOW ME"
```

### 6. Mở rộng không gian âm thanh vòm 3D Stereo (`widen-stereo`)
```powershell
node dist/cli.js widen-stereo "input.mp4" "work/wide_audio.mp4"
```

### 7. In Timecode SMPTE / LTC chuyên dụng (`burn-timecode`)
```powershell
node dist/cli.js burn-timecode "samples\demo_video.mp4" "work\timecode.mp4" --timecode "01:00:00:00"
```

### 8. Chống rung video Deshake (`stabilize`)
```powershell
node dist/cli.js stabilize "samples\demo_video.mp4" "work\stabilized.mp4"
```

### 9. Đánh giá chất lượng cảm thụ VMAF / SSIM / PSNR (`benchmark-quality`)
```powershell
node dist/cli.js benchmark-quality "samples\demo_video.mp4" "work\demo_converted.mp4"
```

### 10. Thanh tiêu đề Lower-Third hoạt họa (`animated-lower-third`)
```powershell
node dist/cli.js animated-lower-third "samples\demo_video.mp4" "Hoang Apex" "Lead Systems Architect" "work\intro.mp4"
```

### 11. Đóng gói luồng phát HLS Adaptive Streaming (`package-hls`)
```powershell
node dist/cli.js package-hls "samples\demo_video.mp4" "work\hls_stream" --segment-duration 3
```

### 12. Tách giọng hát Vocals & Nhạc nền BGM (`isolate-vocals`)
```powershell
node dist/cli.js isolate-vocals "samples\demo_video.mp4" "work\vocals.mp3" "work\bgm.mp3"
```

### 13. Nén video theo dung lượng chính xác (Target-Size Compressor)
```powershell
node dist/cli.js compress-target-size "samples\demo_video.mp4" "work\target_15mb.mp4" --size-mb 15
```

### 14. Chuẩn hóa âm lượng EBU R128 (-16 LUFS)
```powershell
node dist/cli.js normalize-audio "samples\demo_video.mp4" "work\lufs_normalized.mp4" --target -16
```

### 15. Đốt phụ đề cứng vĩnh viễn (Hardcoded Subtitles Burn-in)
```powershell
node dist/cli.js burn-subtitles "samples\demo_video.mp4" "samples\demo_captions.srt" "work\burned_subs.mp4"
```

### 16. Cắt thông minh sang 9:16 dọc (TikTok / Shorts / Reels)
```powershell
node dist/cli.js smart-crop-916 "samples\demo_video.mp4" "work\tiktok_916.mp4"
```

### 17. AI Face Tracking & AR Bridge
- Trích xuất dữ liệu di chuyển khuôn mặt ra file JSON:
  ```powershell
  node dist/cli.js track-face "samples\demo_video.mp4" "work\face_track.json"
  ```
- Gắn AR Sticker bám dính chuyển động đầu thời gian thực:
  ```powershell
  node dist/cli.js apply-effect ar_3d_headwear_sticker "samples\demo_video.mp4" "work\ar_headwear.mp4" --track "work\face_track.json"
  ```

---

## 🎨 Kho 104 Hiệu Ứng Điện Ảnh Hollywood

Tra cứu danh sách:
```powershell
node dist/cli.js effects
```

Áp dụng hiệu ứng:
```powershell
# Blade Runner 2049 Amber Haze
node dist/cli.js apply-effect bladerunner_2049_amber "samples\demo_video.mp4" "work\bladerunner.mp4"

# Wes Anderson Grand Budapest Pastel Yellow
node dist/cli.js apply-effect wes_anderson_symmetry "samples\demo_video.mp4" "work\wes_anderson.mp4"

# Oppenheimer IMAX 70mm B&W Dramatic
node dist/cli.js apply-effect oppenheimer_70mm_monochrome "samples\demo_video.mp4" "work\oppenheimer.mp4"

# Matrix Cyber Green Dystopia
node dist/cli.js apply-effect matrix_code_rain_green "samples\demo_video.mp4" "work\matrix.mp4"

# Tilt-Shift Miniature Model World (Thành phố đồ chơi)
node dist/cli.js apply-effect tilt_shift_miniature "samples\demo_video.mp4" "work\miniature.mp4"

# Kodak 500T Halation đỏ rực quầng sáng điện ảnh
node dist/cli.js apply-effect film_halation_red "samples\demo_video.mp4" "work\halation.mp4"

# Âm thanh 8D Spatial Binaural xoay vòng 360 độ quanh đầu
node dist/cli.js apply-effect audio_8d_spatial_orbit "samples\demo_video.mp4" "work\8d_audio.mp4"
```
