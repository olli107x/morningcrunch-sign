# morningcrunch Sign

Digital document signing solution for morningcrunch.

## Overview

morningcrunch Sign is a self-hosted document signing platform. It provides digital signature capabilities for contracts, agreements, and other legal documents.

**Production URL:** https://sign.morningcrunch.cloud

## Features

- PDF form fields builder (WYSIWYG)
- 12 field types (Signature, Date, File, Checkbox etc.)
- Multiple signers per document
- Automated emails via SMTP
- Automatic PDF eSignature
- PDF signature verification
- User management
- Mobile-optimized interface
- API and Webhooks for integrations

## Deployment

### Docker

```sh
docker run --name morningcrunch-sign -p 3000:3000 -v.:/data ghcr.io/olli107x/morningcrunch-sign:latest
```

### Docker Compose

```yaml
services:
  app:
    image: ghcr.io/olli107x/morningcrunch-sign:latest
    ports:
      - 3000:3000
    volumes:
      - ./data:/data/morningcrunch-sign
    environment:
      - DATABASE_URL=postgresql://user:pass@postgres:5432/morningcrunch_sign
      - SECRET_KEY_BASE=your-secret-key
      - FORCE_SSL=true
```

Run with:
```sh
HOST=sign.morningcrunch.cloud docker compose up -d
```

## Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `HOST` | Domain name | Yes |
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `SECRET_KEY_BASE` | Rails secret key | Yes |
| `FORCE_SSL` | Enable HTTPS | Recommended |
| `SMTP_ADDRESS` | SMTP server address | For emails |
| `SMTP_PORT` | SMTP port | For emails |
| `SMTP_USERNAME` | SMTP username | For emails |
| `SMTP_PASSWORD` | SMTP password | For emails |

## API

API documentation is available at `/api/docs` when the application is running.

### Webhooks

morningcrunch Sign can send webhooks for the following events:
- `form.completed` - When a signer completes the form
- `form.declined` - When a signer declines to sign

## Building the Docker Image

```bash
docker build -t ghcr.io/olli107x/morningcrunch-sign:latest .
docker push ghcr.io/olli107x/morningcrunch-sign:latest
```

## License

Based on DocuSeal, licensed under AGPL-3.0.

---

*morningcrunch Sign - Internal document signing for morningcrunch GmbH*
