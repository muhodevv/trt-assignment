# TRT Assignment Project

## Project Overview

This project consists of a backend API that combines/transforms TRT's content APIs in different languages and a frontend application that consumes this API.

### Technology Stack

- **Backend (API)**: NestJS (Node.js framework)
- **Frontend**: Next.js (React framework)

## Project Structure

- **apps/api**: NestJS API
- **apps/frontend**: Next.js frontend

## API Endpoints

### Get Unified Content

- **GET** `/api/v1/content`

### Query Parameters

- `language`: Filter by language (e.g., `fr`, `ar`, `bs`, `sq`, `mk`, `ru`, `de`)

### Proxy Content

- **GET** `/api/v1/proxy-content/:lang`

### Translate Content

- **POST** `/api/v1/translate`

### Query Parameters

- `targetLangs`: Target languages (e.g., `fr`, `ar`, `bs`, `sq`, `mk`, `ru`, `de`)

### Response

- `source_id`: Source content ID
- `source_language`: Source content language
- `source_title`: Source content title
- `source_description`: Source content description
- `source_path`: Source content path
- `translated_title`: Translated content title
- `translated_description`: Translated content description

We're using AI (Gemini) to translate the content.

! Important: If you will use the translate endpoint, you need to set the `GEMINI_API_KEY` environment variable.
