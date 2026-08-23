#!/usr/bin/env bash
set -euo pipefail
mkdir -p dev-cert
DOMAIN="dbjcxu-ejcqg.slsblx.com"
KEY="dev-cert/localhost.key"
CRT="dev-cert/localhost.crt"
CSR="dev-cert/localhost.csr"

if [ -f "$KEY" ] && [ -f "$CRT" ]; then
  echo "Cert already exists at $CRT"
  exit 0
fi

openssl req -x509 -nodes -newkey rsa:2048 -days 365 \
  -keyout "$KEY" -out "$CRT" -subj "/CN=$DOMAIN" \
  -addext "subjectAltName=DNS:$DOMAIN,IP:127.0.0.1"

echo "Created cert: $CRT and key: $KEY"
