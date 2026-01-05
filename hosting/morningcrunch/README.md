# morningcrunch Sign - VPS Deployment

Deployment config for Hostinger VPS with Traefik.

## Prerequisites

- Docker & Docker Compose installed
- Traefik running with `traefik-public` network
- DNS A record: `sign.morningcrunch.cloud` → `72.62.149.39`

## Deployment Steps

### 1. Copy files to VPS

```bash
scp -r hosting/morningcrunch root@72.62.149.39:/opt/morningcrunch-sign
```

### 2. SSH into VPS

```bash
ssh root@72.62.149.39
cd /opt/morningcrunch-sign
```

### 3. Create .env file

```bash
cp .env.example .env

# Generate SECRET_KEY_BASE
openssl rand -hex 64

# Edit .env with your values
nano .env
```

### 4. Start the services

```bash
docker compose pull
docker compose up -d
```

### 5. Check logs

```bash
docker compose logs -f app
```

## Updating

```bash
cd /opt/morningcrunch-sign
docker compose pull
docker compose up -d
```

## URLs

- **App**: https://sign.morningcrunch.cloud
- **Health**: https://sign.morningcrunch.cloud/health
