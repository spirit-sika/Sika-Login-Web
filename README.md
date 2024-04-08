# 描述
这是一个 Sika前后端项目登录模型 的前端实现部分, 后端项目请访问[后端地址](https://github.com/spirit-sika/Sika-Login-Boot)

## 登录流程分析
1. 登录页面请求验证码接口
2. 验证码由 `hutool` 生成验证码, 将验证码的值存入缓存中并设置过期时间模拟验证码时效功能
3. 验证码图片转为 `base64`字符串 与 `验证码的键` 一起返回到前端
4. 前端填写表单, 将验证码的键 与 用户填写的验证码信息一起提交到后台
5. 通过 `redis` 进行验证码校验
6. 校验通过后通过 `MyBatis-Plus` 进行用户名密码校验
7. 如果用户选择 `记住我`, 则生成一个 `SaLoginModel` 对象设置过期时间再进行 `SaToken` 登录
8. 如果没有选择记住我, 则直接利用 `SaToken` 进行登录
9. 根据用户id获取到用户信息后添加到 `SaToken` 所提供的登录会话中
10. 利用 `SaToken` 获取用户对应的 `Token` 字符串返回到前端

## 相关技术
1. [vue3](https://cn.vuejs.org/), [仓库地址](https://cn.vuejs.org/)
2. [typescript](https://www.typescriptlang.org/), [仓库地址](https://github.com/microsoft/TypeScript)
3. [pnpm](https://pnpm.io/), [仓库地址](https://github.com/pnpm/pnpm)
4. [axios](https://axios-http.com/), [仓库地址](https://github.com/axios/axios)
5. [ant-design](https://www.antdv.com/components/overview), [仓库地址](https://www.antdv.com/components/overview)
6. [vite5](https://cn.vitejs.dev/), [仓库地址](https://github.com/vitejs/vite)
7. [vue-router4](https://router.vuejs.org/), [仓库地址](https://github.com/vuejs/router)
8. [pinia](https://pinia.vuejs.org/), [仓库地址](https://github.com/vuejs/pinia)

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
