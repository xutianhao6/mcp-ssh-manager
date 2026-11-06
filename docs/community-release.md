中文 / English community build based on bvisible/mcp-ssh-manager (MIT).

- 默认简体中文；在“设置 → 外观 → 语言 / Language”中即时切换 English。
- 语言选择保存在本机，重启客户端后保留；切换语言不关闭现有终端。
- 服务器配置、审批、文件管理、凭据库和客户端菜单支持中英文。
- 补齐 macOS 系统子菜单的中文，包括关于、退出、编辑和窗口操作。
- 更新地址指向 xutianhao6/mcp-ssh-manager。
- GitHub Actions 自动构建 macOS（Apple Silicon / Intel）、Windows（x64 / ARM64）及 Linux（x64 AppImage / deb），通过界面测试和各平台安装包启动测试后发布。

This fork is an independent community build. It is not signed or notarized with the upstream maintainer's Apple/Windows certificates. macOS and Windows may display an operating system trust prompt. Verify downloads against the platform's release-manifest JSON SHA-256 values. Do not treat this fork as an official upstream release.

本版本未使用上游维护者的 Apple / Windows 签名证书，也未经 Apple 公证。系统可能提示来源验证。各平台提供 SHA-256 清单。服务器地址、命令、日志和远程输出保留原文。

macOS apps carry an ad-hoc resource signature verified after packaging and again after ZIP extraction in CI. This protects bundle integrity but does not provide a trusted developer identity or Apple notarization.
