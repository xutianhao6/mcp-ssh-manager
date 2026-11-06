SSH Manager v4.0.7 · 中文 / English

修复健康状态页面的内容与背景溢出：长磁盘路径、告警信息和进度条保持在卡片边界内；窄窗口自动使用单列，深浅主题均适配。

- 采集磁盘类型，过滤 Docker overlay / aufs、内存文件系统和只读镜像挂载，保留根分区、真实数据盘及网络盘，避免重复磁盘和告警。
- 容量、负载、阈值说明与通知支持中英文；内存容量保留一位小数。
- 达到告警阈值时，摘要和进度条使用一致的判断。
- 新增长路径、多服务器、窄窗口、深浅主题布局回归测试，及磁盘采集、过滤、阈值测试。

默认简体中文，在“设置 → 外观 → 语言 / Language”切换，选择重启后保留。服务器名称、命令和远端输出保持原文。

GitHub Actions 自动构建 macOS Apple Silicon / Intel、Windows x64 / ARM64、Linux x64 AppImage / deb，通过测试和安装包启动检查后发布。

Based on bvisible/mcp-ssh-manager, distributed under MIT. This is an independent community build. macOS uses an ad-hoc resource signature verified after packaging and ZIP extraction; it is not Apple Developer ID signing or notarization. Windows builds do not carry a trusted code-signing certificate. Operating systems may show a trust prompt. Verify SHA-256 values using the platform release manifests.

本版为独立社区构建。macOS 使用 ad-hoc 完整性签名，未经 Apple Developer ID 签名或公证；Windows 未配置受信任代码签名证书。系统可能提示来源验证，各平台提供 SHA-256 清单。
