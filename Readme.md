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
