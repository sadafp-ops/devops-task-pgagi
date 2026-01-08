# ---------- Build Stage ----------
FROM python:3.11-slim AS builder

WORKDIR /app

COPY requirements.txt .
RUN pip install --user -r requirements.txt

# ---------- Runtime Stage ----------
FROM python:3.11-slim

WORKDIR /app

COPY --from=builder /root/.local /root/.local
COPY app .

ENV PATH=/root/.local/bin:$PATH
ENV PYTHONUNBUFFERED=1

# Security: non-root user
USER nobody

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
