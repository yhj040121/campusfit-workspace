# CampusFit Test Deployment Guide

Updated: 2026-03-22

This guide is tailored to the current workspace at `E:\test`.

Project parts:

- `backend-java`: Spring Boot backend
- `admin-web`: Vue + Vite admin panel
- `database`: MySQL schema and seed scripts
- `mobile-uniapp`: UniApp mobile app / H5

---

## 1. Recommended server to buy

Recommended plan:

- Cloud vendor: `Alibaba Cloud`
- Product: `ECS u1`
- CPU / RAM: `2 vCPU / 4 GB`
- Bandwidth: `5 Mbps`
- Disk: `80 GB ESSD Entry`
- OS: `Ubuntu 24.04 LTS x86_64`

Why this is the best fit:

- You need to run `MySQL + Java backend + Nginx` on the same machine.
- `2 GB RAM` can work for a very small temporary demo, but it is tight.
- You already use `OSS`, so Alibaba Cloud is the simplest ecosystem match.

Budget fallback:

- `2 vCPU / 2 GB / 3 Mbps / 40 GB`

Use the fallback only if you want the absolute lowest budget and accept lower stability.

---

## 2. Price notes I checked

Checked on: `2026-03-22`

Official Alibaba Cloud page I found:

- `2C4G / 5M / 80G`: `199 RMB / year`
- `2C2G / 3M / 40G`: `99 RMB / year`

My recommendation:

- Lowest workable: `2C2G`
- Lowest safer choice for this project: `2C4G`

If you want the shortest answer: buy `2C4G`.

---

## 3. Region choice

If you want to go live fast and avoid mainland filing first:

- choose `Hong Kong`

If your users are mainly in mainland China and you want better latency / lower cost:

- choose a mainland region such as `Hangzhou` or `Shanghai`

Important:

- If the server is in mainland China and you use your own domain for a public website or app service, you will usually need `ICP filing` first.

Quick rule:

- Need to launch fast: `Hong Kong`
- Want lower cost and better mainland access: `Hangzhou` or `Shanghai`

---

## 4. What to prepare before deployment

You need:

- server public IP
- server login account
- domain DNS access
- OSS access values
- database password

Prepare these OSS values:

- `ALIYUN_OSS_ENDPOINT`
- `ALIYUN_OSS_REGION`
- `ALIYUN_OSS_BUCKET`
- `ALIYUN_OSS_ACCESS_KEY_ID`
- `ALIYUN_OSS_ACCESS_KEY_SECRET`
- `ALIYUN_OSS_PUBLIC_BASE_URL`

Recommended database settings:

- database name: `campusfit`
- database user: `campusfit`
- database password: generate a strong password

---

## 5. Current project deployment facts

### Backend env vars

Core backend env vars:

- `MYSQL_HOST`
- `MYSQL_PORT`
- `MYSQL_DATABASE`
- `MYSQL_USERNAME`
- `MYSQL_PASSWORD`
- `USER_JWT_SECRET`
- `ALIYUN_OSS_ACCESS_KEY_ID`
- `ALIYUN_OSS_ACCESS_KEY_SECRET`

### Database init

Current backend config defaults to:

- `SQL_INIT_MODE=never`

That means the backend will not auto-create or auto-seed the database on startup.

You need to import these files manually:

- `E:\test\database\01_schema.sql`
- `E:\test\database\02_seed.sql`

### Admin panel API setting

The admin panel supports:

- `VITE_API_BASE_URL`

### UniApp API setting

The current UniApp config still points to localhost-like addresses:

- `http://127.0.0.1:8080`
- `http://10.0.2.2:8080`
- `http://10.0.3.2:8080`

Before you give H5 or APK builds to friends, change the API base to your public test domain, for example:

- `https://api.your-domain.com`

---

## 6. Suggested domain layout

Use at least:

- `api.your-domain.com` for backend API
- `admin.your-domain.com` for admin panel

Optional:

- `h5.your-domain.com` for UniApp H5
- `static.your-domain.com` for OSS custom domain

---

## 7. Suggested architecture

Use this simple layout:

- `Nginx` serves public traffic
- backend listens only on `127.0.0.1:8080`
- `Nginx` reverse proxies API traffic to backend
- `admin-web` is served as static files by `Nginx`
- images continue to use `OSS`

Benefits:

- only ports `22`, `80`, `443` need to be open
- no need to expose `3306` or `8080`
- HTTPS is easier to manage

---

## 8. Server initialization

The commands below run on the server unless stated otherwise.

### 8.1 Login

From your local machine:

```bash
ssh root@YOUR_SERVER_IP
```

If your cloud provider does not use `root`, use the account they gave you.

### 8.2 Update the system

```bash
apt update
apt upgrade -y
timedatectl set-timezone Asia/Shanghai
```

### 8.3 Install base software

```bash
apt install -y nginx mysql-server openjdk-21-jdk maven unzip git curl ufw
```

Check versions:

```bash
java -version
mvn -version
mysql --version
nginx -v
```

---

## 9. Security group and firewall

Open only:

- `22`
- `80`
- `443`

Do not expose directly:

- `3306`
- `8080`

Ubuntu firewall:

```bash
ufw allow OpenSSH
ufw allow 80
ufw allow 443
ufw enable
ufw status
```

---

## 10. Upload the project to the server

Create directories on the server:

```bash
mkdir -p /srv/campusfit
mkdir -p /srv/campusfit/backend
mkdir -p /srv/campusfit/database
mkdir -p /srv/campusfit/admin-web
```

From your local Windows PowerShell:

```powershell
scp -r E:\test\backend-java root@YOUR_SERVER_IP:/srv/campusfit/backend
scp -r E:\test\database root@YOUR_SERVER_IP:/srv/campusfit/database
```

If you prefer, zip the folders first and upload the zip instead.

---

## 11. Configure MySQL

Login:

```bash
mysql
```

Create database and user:

```sql
CREATE DATABASE campusfit DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'campusfit'@'localhost' IDENTIFIED BY 'CHANGE_TO_A_STRONG_PASSWORD';
GRANT ALL PRIVILEGES ON campusfit.* TO 'campusfit'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

Import SQL files:

```bash
mysql -u campusfit -p campusfit < /srv/campusfit/database/database/01_schema.sql
mysql -u campusfit -p campusfit < /srv/campusfit/database/database/02_seed.sql
```

If your upload path is different, update the paths above.

---

## 12. Deploy the backend

### 12.1 Build

```bash
cd /srv/campusfit/backend/backend-java
mvn clean package -DskipTests
```

Expected jar:

```bash
target/campusfit-backend-0.0.1-SNAPSHOT.jar
```

### 12.2 Create backend env file

Create:

- `/etc/campusfit-backend.env`

Example content:

```bash
SERVER_PORT=8080
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
MYSQL_DATABASE=campusfit
MYSQL_USERNAME=campusfit
MYSQL_PASSWORD=CHANGE_TO_DB_PASSWORD
USER_JWT_SECRET=CHANGE_TO_A_LONG_RANDOM_SECRET
APP_MAX_UPLOAD_FILE_SIZE=10MB
APP_MAX_UPLOAD_REQUEST_SIZE=12MB
ALIYUN_OSS_ENDPOINT=https://s3.oss-cn-hangzhou.aliyuncs.com
ALIYUN_OSS_REGION=cn-hangzhou
ALIYUN_OSS_BUCKET=YOUR_BUCKET
ALIYUN_OSS_ACCESS_KEY_ID=YOUR_ACCESS_KEY_ID
ALIYUN_OSS_ACCESS_KEY_SECRET=YOUR_ACCESS_KEY_SECRET
ALIYUN_OSS_PUBLIC_BASE_URL=https://YOUR_OSS_PUBLIC_URL
SQL_INIT_MODE=never
```

Quick create command:

```bash
cat >/etc/campusfit-backend.env <<'EOF'
SERVER_PORT=8080
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
MYSQL_DATABASE=campusfit
MYSQL_USERNAME=campusfit
MYSQL_PASSWORD=CHANGE_TO_DB_PASSWORD
USER_JWT_SECRET=CHANGE_TO_A_LONG_RANDOM_SECRET
APP_MAX_UPLOAD_FILE_SIZE=10MB
APP_MAX_UPLOAD_REQUEST_SIZE=12MB
ALIYUN_OSS_ENDPOINT=https://s3.oss-cn-hangzhou.aliyuncs.com
ALIYUN_OSS_REGION=cn-hangzhou
ALIYUN_OSS_BUCKET=YOUR_BUCKET
ALIYUN_OSS_ACCESS_KEY_ID=YOUR_ACCESS_KEY_ID
ALIYUN_OSS_ACCESS_KEY_SECRET=YOUR_ACCESS_KEY_SECRET
ALIYUN_OSS_PUBLIC_BASE_URL=https://YOUR_OSS_PUBLIC_URL
SQL_INIT_MODE=never
EOF
```

### 12.3 Create systemd service

Create:

- `/etc/systemd/system/campusfit-backend.service`

Content:

```ini
[Unit]
Description=CampusFit Backend
After=network.target mysql.service

[Service]
Type=simple
User=root
WorkingDirectory=/srv/campusfit/backend/backend-java
EnvironmentFile=/etc/campusfit-backend.env
ExecStart=/usr/bin/java -Xms256m -Xmx768m -jar /srv/campusfit/backend/backend-java/target/campusfit-backend-0.0.1-SNAPSHOT.jar
SuccessExitStatus=143
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Start it:

```bash
systemctl daemon-reload
systemctl enable campusfit-backend
systemctl start campusfit-backend
systemctl status campusfit-backend
```

Logs:

```bash
journalctl -u campusfit-backend -f
```

Health check:

```bash
curl http://127.0.0.1:8080/api/health
```

---

## 13. Deploy the admin panel

Build locally on your Windows machine:

```powershell
cd E:\test\admin-web
npm install
$env:VITE_API_BASE_URL="https://api.your-domain.com"
npm run build
```

Output:

- `E:\test\admin-web\dist`

Upload:

```powershell
scp -r E:\test\admin-web\dist root@YOUR_SERVER_IP:/var/www/campusfit-admin
```

If the upload creates `/var/www/campusfit-admin/dist`, remember to update the Nginx `root`.

---

## 14. Configure Nginx

Create:

- `/etc/nginx/sites-available/campusfit.conf`

Content:

```nginx
server {
    listen 80;
    server_name admin.your-domain.com;

    root /var/www/campusfit-admin;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}

server {
    listen 80;
    server_name api.your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable it:

```bash
ln -s /etc/nginx/sites-available/campusfit.conf /etc/nginx/sites-enabled/campusfit.conf
nginx -t
systemctl restart nginx
```

---

## 15. DNS records

Add A records:

- `admin` -> server public IP
- `api` -> server public IP

Optional:

- `h5` -> server public IP
- `static` -> OSS custom domain CNAME target

---

## 16. HTTPS

Install Certbot:

```bash
apt install -y certbot python3-certbot-nginx
```

Issue certificates:

```bash
certbot --nginx -d admin.your-domain.com -d api.your-domain.com
```

Test renewal:

```bash
certbot renew --dry-run
```

---

## 17. UniApp H5 or APK

Current file to change before packaging:

- `E:\test\mobile-uniapp\common\config.js`

Change to something like:

```js
var H5_BASE_URLS = ['https://api.your-domain.com']
var APP_BASE_URLS = ['https://api.your-domain.com']
```

If you build H5, upload the H5 output to a directory such as:

- `/var/www/campusfit-h5`

Example extra Nginx server:

```nginx
server {
    listen 80;
    server_name h5.your-domain.com;

    root /var/www/campusfit-h5;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Then reload Nginx:

```bash
nginx -t
systemctl reload nginx
```

If you build APK, make sure these flows work first:

- login
- post creation
- image upload
- profile update

---

## 18. Smoke test checklist

Check these after deployment:

- `https://api.your-domain.com/api/health` works
- `https://admin.your-domain.com` loads
- admin login works
- dashboard loads data
- user registration works
- user login works
- home feed works
- post creation works
- image upload works

---

## 19. Common problems

### Backend service fails

```bash
systemctl status campusfit-backend
journalctl -u campusfit-backend -f
```

### API domain fails but local health works

Check:

- Nginx config
- DNS records
- security group
- firewall

### Image upload fails

This project can start without full OSS config, but upload will fail.

Check:

- `ALIYUN_OSS_ACCESS_KEY_ID`
- `ALIYUN_OSS_ACCESS_KEY_SECRET`
- `ALIYUN_OSS_BUCKET`
- `ALIYUN_OSS_ENDPOINT`
- `ALIYUN_OSS_PUBLIC_BASE_URL`

### Database is empty

Import:

- `01_schema.sql`
- `02_seed.sql`

because the current project does not auto-init the database by default.

---

## 20. Short version

If you want the shortest path:

1. Buy `Alibaba Cloud 2C4G`.
2. Use `Ubuntu 24.04`.
3. Open only `22`, `80`, `443`.
4. Install `MySQL`, `Java 21`, `Maven`, `Nginx`.
5. Import the SQL scripts.
6. Run the backend with `systemd`.
7. Build and upload `admin-web/dist`.
8. Point `api` and `admin` subdomains to the server.
9. Enable HTTPS.
10. Change UniApp API base URL before sharing H5 or APK.

---

## 21. Reference links

Prices and rules can change. Re-check before paying.

- Alibaba Cloud ECS 99 page: `https://www.aliyun.com/daily-act/ecs/99program`
- Alibaba Cloud promotion page: `https://www.aliyun.com/benefit/select/cloud-discount`
- Alibaba Cloud ICP filing doc: `https://help.aliyun.com/zh/dws/icp-filing`
- Tencent Cloud Lighthouse page: `https://cloud.tencent.com/product/lighthouse`
- Tencent Cloud Lighthouse promo page: `https://cloud.tencent.com/act/pro/lhsale`
- Tencent Cloud ICP filing overview: `https://cloud.tencent.com/document/product/243`

