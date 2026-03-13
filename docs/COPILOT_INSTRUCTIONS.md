# Copilot Instructions — guvenlikservisi.com

## Project Purpose

This repository powers **guvenlikservisi.com**, a security systems lead generation platform in Turkey.

The goal of the system is to generate leads for:

* IP camera installation
* security camera systems
* alarm systems
* fire alarm systems
* access control systems
* security system maintenance

Primary objective:

**Generate installation leads from Google Ads and SEO traffic.**

---

# Technology Stack

Framework: Next.js (App Router)
Language: TypeScript
UI: React
Styling: TailwindCSS
Hosting: Vercel

---

# Site Architecture

The project contains three main page systems.

---

# 1 — Landing Pages (Conversion Pages)

Location:

/teklif/*

Example:

/teklif/istanbul-ip-kamera-montaji

Purpose:

High-conversion landing pages used for Google Ads.

Landing pages must contain:

Hero section
Problem explanation
Solution explanation
Trust elements
Pricing explanation
FAQ section
Lead form
Phone click CTA
WhatsApp click CTA

Goal:

**Convert visitors into installation leads.**

---

# 2 — Programmatic SEO Pages

Structure:

/[city]/[service]

Examples:

/istanbul/kamera-sistemi-kurulumu
/ankara/kamera-sistemi-kurulumu

Purpose:

Capture long-tail SEO traffic.

These pages must include:

H1 with city + service keyword
Detailed service explanation
Installation process
Price estimation
FAQ section
Internal links
Lead CTA

---

# 3 — Core Service Pages

Examples:

/kamera-sistemi-kurulumu
/alarm-sistemi-kurulumu
/yangin-alarm-sistemi-kurulumu

Purpose:

Main authority pages for services.

---

# SEO Rules (Critical)

Copilot must NEVER:

remove metadata
remove canonical URLs
remove schema markup
remove internal links

Copilot must ALWAYS preserve SEO structure.

---

# Schema Requirements

Service pages should include structured data.

Use:

LocalBusiness
Service
FAQPage
BreadcrumbList

schema markup.

---

# Lead System

Lead submissions happen through:

/api/lead

Leads are sent to:

Google Sheets webhook.

Important rule:

Never break the lead API.

Never remove form submission logic.

---

# Routing Rules

The project uses Next.js App Router.

Copilot must:

Never rename routes
Never change folder structure
Never modify routing logic

---

# Code Standards

Preferred code style:

TypeScript
Functional React components
Reusable components
TailwindCSS styling

Avoid unnecessary complexity.

---

# Page Generation Rules

When generating new pages include:

SEO title
Meta description
Canonical URL
FAQ section
Lead call-to-action

---

# Development Goal

All development work must improve:

SEO traffic
lead conversion
site authority

Never generate generic placeholder content.
